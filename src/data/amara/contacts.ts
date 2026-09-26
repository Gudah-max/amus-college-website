import type { AmaraFact } from './types';

export const contactFacts: AmaraFact[] = [
  { id: 'contacts', topic: 'contact', content: 'Contact Amus College School at +256 782 442 940, +256 772 303 282 or +256 779 964 478; email amuscollegeschool@gmail.com. Address: Sapir Hill, Kachumbala County, Bukedea District, Uganda.', source: 'src/data/site.ts', lastReviewed: '2026-09-26', status: 'approved-stable' },
  { id: 'office-hours', topic: 'contact', content: 'Office hours are Monday–Saturday, 8:00 AM–5:00 PM; Sunday and public holidays, 9:00 AM–2:00 PM.', source: 'src/pages/contact.astro', lastReviewed: '2026-09-26', status: 'approved-stable' },
];

export const contactFallback = 'For the most accurate help, please contact Amus College School at +256 782 442 940 or amuscollegeschool@gmail.com. You can also visit https://amuscollegeschool.com/contact.';
