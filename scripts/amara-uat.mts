import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { AMARA_SYSTEM_PROMPT } from '../src/data/amara/system-prompt.ts';
import { UAT_CATEGORIES, UAT_CASES_BY_ID, amaraUatCases, type AmaraUatCase, type UatCategory } from '../tests/amara/uat-cases.ts';
import { automaticFailures } from './amara-uat-checker.mts';

const MODELS = {
  haiku: 'claude-haiku-4-5',
  sonnet: 'claude-sonnet-5',
} as const;
const MAX_OUTPUT_TOKENS = 360;
const MAX_REQUESTS = 50;
const DEFAULT_RESULTS_DIRECTORY = 'tmp/amara-uat-results';
const CONTACT_URL = 'https://amuscollegeschool.com/contact';

type ModelKey = keyof typeof MODELS;
type Arguments = { model: ModelKey | 'both'; dryRun: boolean; caseId?: string; category?: UatCategory; output: string; recheck?: string };
type UatRecord = {
  model: string; testId: string; category: UatCategory; prompt: string; response: string | null;
  latencyMs: number | null; inputTokens: number | null; outputTokens: number | null;
  status: 'ok' | 'error'; error?: string; automaticFailures: string[];
};

function usage() {
  console.log(`Usage: npm run amara:uat -- [--dry-run] [--model haiku|sonnet|both] [--case ID] [--category CATEGORY] [--output DIRECTORY] [--recheck RESULT_FILE]\n\nLive mode requires AMARA_UAT_LIVE=true and ANTHROPIC_API_KEY. It permits at most ${MAX_REQUESTS} requests per invocation. --recheck reads a saved result file only and never calls Anthropic.`);
}

function valueAfter(argv: string[], index: number, name: string): string {
  const value = argv[index + 1];
  if (!value || value.startsWith('--')) throw new Error(`${name} requires a value.`);
  return value;
}

function parseArguments(argv: string[]): Arguments {
  const args: Arguments = { model: 'both', dryRun: false, output: DEFAULT_RESULTS_DIRECTORY };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--dry-run') args.dryRun = true;
    else if (arg === '--model') {
      const value = valueAfter(argv, index, '--model');
      if (value !== 'haiku' && value !== 'sonnet' && value !== 'both') throw new Error('--model must be haiku, sonnet or both.');
      args.model = value; index += 1;
    } else if (arg === '--case') {
      args.caseId = valueAfter(argv, index, '--case'); index += 1;
    } else if (arg === '--category') {
      const value = valueAfter(argv, index, '--category') as UatCategory;
      if (!UAT_CATEGORIES.includes(value)) throw new Error(`--category must be one of: ${UAT_CATEGORIES.join(', ')}.`);
      args.category = value; index += 1;
    } else if (arg === '--output') {
      args.output = valueAfter(argv, index, '--output'); index += 1;
    } else if (arg === '--recheck') {
      args.recheck = valueAfter(argv, index, '--recheck'); index += 1;
    } else if (arg === '--help' || arg === '-h') {
      usage(); process.exit(0);
    } else throw new Error(`Unknown option: ${arg}`);
  }
  return args;
}

function selectedCases(args: Arguments): readonly AmaraUatCase[] {
  if (args.caseId && !UAT_CASES_BY_ID.has(args.caseId)) throw new Error(`Unknown case ID: ${args.caseId}`);
  return amaraUatCases.filter(testCase => (!args.caseId || testCase.id === args.caseId) && (!args.category || testCase.category === args.category));
}

function selectedModels(model: Arguments['model']): readonly ModelKey[] {
  return model === 'both' ? ['haiku', 'sonnet'] : [model];
}

function roughTokens(text: string) { return Math.ceil(text.length / 4); }

function costs(requests: number, averagePromptTokens: number, outputTokens: number, inputRate: number, outputRate: number) {
  return Number((requests * ((averagePromptTokens * inputRate) + (outputTokens * outputRate)) / 1_000_000).toFixed(6));
}

function printDryRun(cases: readonly AmaraUatCase[], models: readonly ModelKey[]) {
  const averagePromptTokens = Math.ceil(cases.reduce((sum, testCase) => sum + roughTokens(`${AMARA_SYSTEM_PROMPT}\n${testCase.prompt}`), 0) / cases.length);
  const systemAndKnowledgeTokens = roughTokens(AMARA_SYSTEM_PROMPT);
  const requestCount = cases.length * models.length;
  const categories = [...new Set(cases.map(testCase => testCase.category))];
  const modelNames = models.map(model => MODELS[model]);
  const estimateFor40Cases = {
    haiku: { low: costs(40, averagePromptTokens, 75, 1, 5), typical: costs(40, averagePromptTokens, 150, 1, 5), worstCaseCap: costs(40, averagePromptTokens, MAX_OUTPUT_TOKENS, 1, 5) },
    sonnet: { low: costs(40, averagePromptTokens, 75, 2, 10), typical: costs(40, averagePromptTokens, 150, 2, 10), worstCaseCap: costs(40, averagePromptTokens, MAX_OUTPUT_TOKENS, 2, 10) },
  };
  console.log(JSON.stringify({
    mode: 'dry-run', models: modelNames, cases: cases.length, estimatedRequests: requestCount,
    approximateSystemAndKnowledgeTokens: systemAndKnowledgeTokens, approximateAveragePromptTokens: averagePromptTokens,
    maxPossibleOutputTokens: requestCount * MAX_OUTPUT_TOKENS, maxOutputTokensPerRequest: MAX_OUTPUT_TOKENS,
    categoriesCovered: categories, requestCap: MAX_REQUESTS,
    estimatedStandardApiCostUsd: {
      haiku: models.includes('haiku') ? {
        low: costs(cases.length, averagePromptTokens, 75, 1, 5),
        typical: costs(cases.length, averagePromptTokens, 150, 1, 5),
        worstCaseCap: costs(cases.length, averagePromptTokens, MAX_OUTPUT_TOKENS, 1, 5),
      } : undefined,
      sonnet: models.includes('sonnet') ? {
        low: costs(cases.length, averagePromptTokens, 75, 2, 10),
        typical: costs(cases.length, averagePromptTokens, 150, 2, 10),
        worstCaseCap: costs(cases.length, averagePromptTokens, MAX_OUTPUT_TOKENS, 2, 10),
      } : undefined,
    },
    estimatedStandardApiCostUsdFor40Cases: {
      ...estimateFor40Cases,
      bothModels: {
        low: Number((estimateFor40Cases.haiku.low + estimateFor40Cases.sonnet.low).toFixed(6)),
        typical: Number((estimateFor40Cases.haiku.typical + estimateFor40Cases.sonnet.typical).toFixed(6)),
        worstCaseCap: Number((estimateFor40Cases.haiku.worstCaseCap + estimateFor40Cases.sonnet.worstCaseCap).toFixed(6)),
      },
    },
  }, null, 2));
}

async function recheckSavedResults(file: string) {
  const saved = JSON.parse(await readFile(file, 'utf8')) as { records?: UatRecord[] };
  if (!Array.isArray(saved.records)) throw new Error('Saved UAT result file does not contain a records array.');
  const records = saved.records.map(record => {
    const testCase = UAT_CASES_BY_ID.get(record.testId);
    if (!testCase) throw new Error(`Saved result references unknown UAT case: ${record.testId}`);
    return { testId: record.testId, status: record.status, automaticFailures: record.response ? automaticFailures(testCase, record.response) : ['No text response returned.'] };
  });
  console.log(JSON.stringify({ mode: 'recheck', file, totalRecords: records.length, automaticFailureCount: records.filter(record => record.automaticFailures.length).length, automaticFailureIds: records.filter(record => record.automaticFailures.length).map(record => record.testId), records }, null, 2));
}

async function runLive(cases: readonly AmaraUatCase[], models: readonly ModelKey[], outputDirectory: string) {
  const requestCount = cases.length * models.length;
  if (process.env.AMARA_UAT_LIVE !== 'true') throw new Error('Refusing live UAT: set AMARA_UAT_LIVE=true explicitly.');
  if (!process.env.ANTHROPIC_API_KEY) throw new Error('Refusing live UAT: ANTHROPIC_API_KEY is required.');
  if (requestCount > MAX_REQUESTS) throw new Error(`Refusing live UAT: ${requestCount} requests exceeds the hard ${MAX_REQUESTS}-request cap. Run each model separately.`);
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY, maxRetries: 0 });
  const records: UatRecord[] = [];
  for (const modelKey of models) {
    for (const testCase of cases) {
      const started = performance.now();
      try {
        const message = await client.messages.create({
          model: MODELS[modelKey], max_tokens: MAX_OUTPUT_TOKENS, thinking: { type: 'disabled' },
          system: AMARA_SYSTEM_PROMPT, messages: [{ role: 'user', content: testCase.prompt }],
        });
        const response = message.content.filter(block => block.type === 'text').map(block => block.text).join('\n').trim();
        records.push({ model: MODELS[modelKey], testId: testCase.id, category: testCase.category, prompt: testCase.prompt, response: response || null, latencyMs: Math.round(performance.now() - started), inputTokens: message.usage.input_tokens, outputTokens: message.usage.output_tokens, status: 'ok', automaticFailures: response ? automaticFailures(testCase, response) : ['No text response returned.'] });
      } catch (error) {
        records.push({ model: MODELS[modelKey], testId: testCase.id, category: testCase.category, prompt: testCase.prompt, response: null, latencyMs: Math.round(performance.now() - started), inputTokens: null, outputTokens: null, status: 'error', error: error instanceof Error ? error.message : 'Unknown provider error', automaticFailures: [] });
      }
    }
  }
  await mkdir(outputDirectory, { recursive: true });
  const outputFile = path.join(outputDirectory, `amara-uat-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
  await writeFile(outputFile, `${JSON.stringify({ generatedAt: new Date().toISOString(), configuration: { models: models.map(model => MODELS[model]), systemPromptAndKnowledge: 'AMARA_SYSTEM_PROMPT', history: [], maxTokens: MAX_OUTPUT_TOKENS, thinking: 'disabled', temperature: 'provider default (not set)' }, records }, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${records.length} UAT records to ${outputFile}`);
}

async function main() {
  const args = parseArguments(process.argv.slice(2));
  if (args.recheck) return recheckSavedResults(args.recheck);
  const cases = selectedCases(args);
  const models = selectedModels(args.model);
  if (!cases.length) throw new Error('No UAT cases matched the selected filters.');
  if (args.dryRun) return printDryRun(cases, models);
  await runLive(cases, models, args.output);
}

main().catch(error => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
