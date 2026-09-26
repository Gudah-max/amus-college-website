import { academicFacts } from './academics';
import { admissionsFacts } from './admissions';
import { contactFacts, contactFallback } from './contacts';
import { feeFacts } from './fees';
import { schoolFacts } from './school';
import { scholarshipFacts } from './scholarships';
import { sportsFacts } from './sports';
import { studentLifeFacts } from './student-life';
import type { AmaraFact } from './types';

export { contactFallback };
export type { AmaraFact, KnowledgeStatus } from './types';

export const amaraKnowledge: AmaraFact[] = [
  ...schoolFacts, ...contactFacts, ...admissionsFacts, ...feeFacts,
  ...scholarshipFacts, ...academicFacts, ...sportsFacts, ...studentLifeFacts,
];

export const approvedKnowledgeText = amaraKnowledge.map(({ topic, content }) => `[${topic}] ${content}`).join('\n');

export function deterministicFallback(message: string): string {
  const question = message.toLowerCase();
  if (/fee|cost|uniform|registration|pay|schoolpay|installment|instalment/.test(question)) return 'Current approved school fees are UGX 1,500,000 per term for Senior 1–4 and Senior 5–6. Uniform is a separate charge: UGX 400,000 for O-Level and UGX 420,000 for A-Level. New-student registration is UGX 100,000 one time. I can list approved components but cannot calculate a combined amount or infer when separate charges fall due; please contact the school for payment timing or plans.';
  if (/scholarship|bursar/.test(question)) return 'Amus College School offers Academic Scholarships and Football Scholarships. In 2024, 350 students were enrolled under those programmes. Please contact the school for current eligibility and application guidance.';
  if (/admission|apply|application|senior 1|senior 5/.test(question)) return 'Admissions are currently open for the 2026/2027 academic year. You can apply or find out more at https://amuscollegeschool.com/admissions. For exact requirements, please contact the school office.';
  if (/sport|football|fufa|cecafa|caf/.test(question)) return 'Amus has current football records including the 2024 FEASSA boys’ title, the 2026 USSSA national boys’ title, and 2026 CAF/CECAFA achievements. Please visit https://amuscollegeschool.com/sports for the full records.';
  return contactFallback;
}
