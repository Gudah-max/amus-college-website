import Anthropic from '@anthropic-ai/sdk';
import type { Config } from '@netlify/functions';
import { deterministicFallback } from '../../src/data/amara/index';
import { AMARA_SYSTEM_PROMPT } from '../../src/data/amara/system-prompt';

const MAX_MESSAGE_LENGTH = 700;
const MAX_HISTORY_ITEMS = 6;
const MAX_HISTORY_CONTENT_LENGTH = 700;
const DEFAULT_MAX_TOKENS = 360;
const DEFAULT_TIMEOUT_MS = 8_000;

type ChatTurn = { role: 'user' | 'assistant'; content: string };
type Provider = (messages: ChatTurn[]) => Promise<string>;

const json = (body: Record<string, unknown>, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
});

const numberFromEnv = (name: string, fallback: number, minimum: number, maximum: number) => {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value >= minimum && value <= maximum ? value : fallback;
};

export function sanitizeHistory(value: unknown): ChatTurn[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === 'object')
    .filter(item => (item.role === 'user' || item.role === 'assistant') && typeof item.content === 'string')
    .map(item => ({ role: item.role as ChatTurn['role'], content: (item.content as string).trim().slice(0, MAX_HISTORY_CONTENT_LENGTH) }))
    .filter(item => item.content.length > 0)
    .slice(-MAX_HISTORY_ITEMS);
}

function anthropicProvider(): Provider {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('provider unavailable');
  const client = new Anthropic({ apiKey, timeout: numberFromEnv('AMARA_TIMEOUT_MS', DEFAULT_TIMEOUT_MS, 1_000, 20_000), maxRetries: 0 });
  return async (messages) => {
    const response = await client.messages.create({
      model: process.env.AMARA_MODEL || 'claude-haiku-4-5',
      max_tokens: numberFromEnv('AMARA_MAX_TOKENS', DEFAULT_MAX_TOKENS, 64, 512),
      system: AMARA_SYSTEM_PROMPT,
      messages,
    });
    const text = response.content.find(block => block.type === 'text')?.text?.trim();
    if (!text) throw new Error('malformed provider response');
    return text.slice(0, 4_000);
  };
}

export function createAmaraHandler(providerFactory: () => Provider = anthropicProvider) {
  return async (request: Request): Promise<Response> => {
    if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) return json({ error: 'Request must be JSON.' }, 400);

    let payload: Record<string, unknown>;
    try { payload = await request.json() as Record<string, unknown>; }
    catch { return json({ error: 'Invalid JSON request.' }, 400); }

    const message = typeof payload.message === 'string' ? payload.message.trim() : '';
    if (!message) return json({ error: 'Please enter a message.' }, 400);
    if (message.length > MAX_MESSAGE_LENGTH) return json({ error: `Messages must be ${MAX_MESSAGE_LENGTH} characters or fewer.` }, 400);

    const messages = [...sanitizeHistory(payload.history), { role: 'user' as const, content: message }];
    try {
      const reply = await providerFactory()(messages);
      return json({ reply });
    } catch {
      return json({ reply: deterministicFallback(message), fallback: true });
    }
  };
}

export default createAmaraHandler();

export const config: Config = {
  path: '/api/amara',
  rateLimit: { windowLimit: 10, windowSize: 60, aggregateBy: ['ip'] },
};
