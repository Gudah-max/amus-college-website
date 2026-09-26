import type { AmaraFact } from './types';

const review = { source: 'Client approval, 26 September 2026', effectivePeriod: 'Current approved information; confirm any future period with the school', lastReviewed: '2026-09-26', reviewBy: '2026-12-31', status: 'approved-current' as const };

export const feeFacts: AmaraFact[] = [
  { id: 'fees-o-level', topic: 'fees', content: 'O-Level/Senior 1–4: school fees are UGX 1,500,000 per term; uniform is UGX 400,000; the current combined figure is UGX 1,900,000.', ...review },
  { id: 'fees-a-level', topic: 'fees', content: 'A-Level/Senior 5–6: school fees are UGX 1,500,000 per term; uniform is UGX 420,000; the current combined figure is UGX 1,920,000.', ...review },
  { id: 'registration-fee', topic: 'fees', content: 'The one-time registration fee for a new student is UGX 100,000.', ...review },
  { id: 'schoolpay-fees', topic: 'payment', content: 'Fees are paid through SchoolPay using the student’s SchoolPay Code after enrolment. For school fees: MTN Mobile Money *165*4*3*2*1#, then select 1 — Pay school fees. Airtel Money *185*6*2#, then select 1 — Pay school fees.', ...review },
  { id: 'schoolpay-uniform', topic: 'payment', content: 'For uniform: MTN Mobile Money *165*4*3*2*1#, then select 3 — Pay other fees. Airtel Money *185*6*2#, then select 2 — Pay other fees.', ...review },
  { id: 'payment-plans', topic: 'payment', content: 'For available payment-plan or instalment options, parents and guardians should contact the school directly. Do not provide percentages, due dates or schedules.', ...review },
];
