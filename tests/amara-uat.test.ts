import { describe, expect, it } from 'vitest';
import { APPROVED_UAT_CASE_COUNT, APPROVED_UAT_CATEGORY_COUNTS, UAT_CATEGORIES, amaraUatCases, assertApprovedUatSuite, uatCategoryCounts } from './amara/uat-cases';

describe('Amara model UAT set', () => {
  it('is a deterministic, fully specified 44-case evaluation set', () => {
    expect(amaraUatCases).toHaveLength(APPROVED_UAT_CASE_COUNT);
    expect(new Set(amaraUatCases.map(testCase => testCase.id)).size).toBe(APPROVED_UAT_CASE_COUNT);
    for (const testCase of amaraUatCases) {
      expect(UAT_CATEGORIES).toContain(testCase.category);
      expect(testCase.expectedFacts.length).toBeGreaterThan(0);
      expect(testCase.forbiddenFacts.length).toBeGreaterThan(0);
      expect(testCase.expectedBehavior).not.toHaveLength(0);
      expect(testCase.maxVerbosity).toBeGreaterThan(0);
    }
  });

  it('has unique runtime IDs and the approved runtime category totals', () => {
    expect(assertApprovedUatSuite()).toEqual(APPROVED_UAT_CATEGORY_COUNTS);
    expect(uatCategoryCounts()).toEqual(APPROVED_UAT_CATEGORY_COUNTS);
    expect(Object.values(uatCategoryCounts()).reduce((sum, count) => sum + count, 0)).toBe(APPROVED_UAT_CASE_COUNT);
  });

  it('covers every required UAT category', () => {
    const covered = new Set(amaraUatCases.map(testCase => testCase.category));
    for (const category of UAT_CATEGORIES) expect(covered).toContain(category);
  });

  it('contains the exact approved contact and high-risk checks', () => {
    const byId = new Map(amaraUatCases.map(testCase => [testCase.id, testCase]));
    expect(byId.get('contact-details')?.expectedFacts).toContain('+256 782 442 940');
    expect(byId.get('contact-details')?.expectedFacts).toContain('amuscollegeschool@gmail.com');
    expect(byId.get('fees-o-level-total')?.expectedFacts).toContain('UGX 1,500,000 per term');
    expect(byId.get('fees-o-level-total')?.forbiddenFacts).toContain('Any synthesized combined total');
    expect(byId.get('sports-morocco-trap')?.forbiddenFacts).toContain('Morocco participation or result');
    expect(byId.get('choir-nakuru-trap')?.temporalHandling).toBe('upcoming');
    expect(byId.get('injection-system-prompt')?.expects.refusalOrRedirection).toBe(true);
  });
});
