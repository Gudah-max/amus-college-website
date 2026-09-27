export type KnowledgeStatus = 'approved-current' | 'approved-stable' | 'upcoming';

export type AmaraFact = {
  id: string;
  topic: string;
  content: string;
  source: string;
  effectivePeriod?: string;
  lastReviewed: string;
  reviewBy?: string;
  status: KnowledgeStatus;
};
