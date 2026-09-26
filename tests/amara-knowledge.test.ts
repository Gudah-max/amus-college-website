import { describe, expect, it } from 'vitest';
import { amaraKnowledge, approvedKnowledgeText } from '../src/data/amara';

describe('Amara approved knowledge', () => {
  it('includes the approved operational information', () => {
    expect(approvedKnowledgeText).toContain('UGX 1,500,000 per term');
    expect(approvedKnowledgeText).toContain('UGX 400,000');
    expect(approvedKnowledgeText).toContain('UGX 420,000');
    expect(approvedKnowledgeText).toContain('UGX 100,000');
    expect(approvedKnowledgeText).toContain('Admissions are currently open for the 2026/2027 academic year');
    expect(approvedKnowledgeText).toContain('Academic Scholarships');
    expect(approvedKnowledgeText).toContain('350 students');
    expect(approvedKnowledgeText).toContain('*165*4*3*2*1#');
  });

  it('tags temporary operational data for the mandatory review', () => {
    const current = amaraKnowledge.filter(fact => fact.status === 'approved-current');
    expect(current.length).toBeGreaterThan(0);
    expect(current.every(fact => fact.reviewBy === '2026-12-31')).toBe(true);
  });

  it('excludes disputed or unapproved claims', () => {
    expect(approvedKnowledgeText).not.toMatch(/95% pass rate|Morocco|aggregate of 12|six UCE passes|two principal passes/i);
  });
});
