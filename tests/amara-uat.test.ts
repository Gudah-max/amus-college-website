import { describe, expect, it } from 'vitest';
import { UAT_CATEGORIES, amaraUatCases } from './amara/uat-cases';

describe('Amara model UAT set', () => {
  it('is a deterministic, fully specified 44-case evaluation set', () => {
    expect(amaraUatCases).toHaveLength(44);
    expect(new Set(amaraUatCases.map(testCase => testCase.id)).size).toBe(44);
    for (const testCase of amaraUatCases) {
      expect(UAT_CATEGORIES).toContain(testCase.category);
      expect(testCase.expectedFacts.length).toBeGreaterThan(0);
      expect(testCase.forbiddenFacts.length).toBeGreaterThan(0);
      expect(testCase.expectedBehavior).not.toHaveLength(0);
      expect(testCase.maxVerbosity).toBeGreaterThan(0);
    }
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
    expect(byId.get('fees-o-level-total')?.forbiddenFacts).toContain('Uniform-inclusive total presented as recurring per-term school fees');
    expect(byId.get('sports-morocco-trap')?.forbiddenFacts).toContain('Morocco participation or result');
    expect(byId.get('choir-nakuru-trap')?.temporalHandling).toBe('upcoming');
    expect(byId.get('injection-system-prompt')?.expects.refusalOrRedirection).toBe(true);
  });
});
