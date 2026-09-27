import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { formatAmaraResponse } from '../src/scripts/amara-format';

const tokenText = (content: string) => formatAmaraResponse(content)
  .map(token => token.kind === 'break' ? '\n' : token.text)
  .join('');

describe('Amara response formatting', () => {
  it('renders safe bold text and line breaks without raw Markdown markers', () => {
    const tokens = formatAmaraResponse('**School fees:** UGX 1,500,000 per term.\n**Uniform:** UGX 400,000.');
    expect(tokens.filter(token => token.kind === 'bold')).toHaveLength(2);
    expect(tokens.some(token => token.kind === 'break')).toBe(true);
    expect(tokenText('**School fees:** UGX 1,500,000 per term.')).not.toContain('**');
  });

  it('uses clear labels for known internal school URLs', () => {
    const tokens = formatAmaraResponse('Apply at https://amuscollegeschool.com/admissions or contact https://amuscollegeschool.com/contact.');
    const links = tokens.filter((token): token is Extract<typeof token, { kind: 'link' }> => token.kind === 'link');
    expect(links).toEqual([
      { kind: 'link', text: 'Admissions page', href: 'https://amuscollegeschool.com/admissions' },
      { kind: 'link', text: 'Contact page', href: 'https://amuscollegeschool.com/contact' },
    ]);
    expect(tokenText('Apply at https://amuscollegeschool.com/admissions.')).toContain('Admissions page');
    expect(tokenText('Apply at https://amuscollegeschool.com/admissions.')).not.toContain('https://amuscollegeschool.com/admissions');
  });

  it('creates only approved https, mailto and tel links', () => {
    const tokens = formatAmaraResponse('Visit https://amuscollegeschool.com/admissions, call +256 782 442 940 or email amuscollegeschool@gmail.com.');
    const links = tokens.filter((token): token is Extract<typeof token, { kind: 'link' }> => token.kind === 'link');
    expect(links).toEqual([
      { kind: 'link', text: 'Admissions page', href: 'https://amuscollegeschool.com/admissions' },
      { kind: 'link', text: '+256 782 442 940', href: 'tel:+256782442940' },
      { kind: 'link', text: 'amuscollegeschool@gmail.com', href: 'mailto:amuscollegeschool@gmail.com' },
    ]);
  });

  it('leaves javascript and unapproved Markdown links as inert text', () => {
    const content = '[Click me](javascript:alert(1)) [Elsewhere](https://example.com)';
    const tokens = formatAmaraResponse(content);
    expect(tokens).toEqual([{ kind: 'text', text: content }]);
    expect(tokens.some(token => token.kind === 'link')).toBe(false);
  });

  it('keeps malicious HTML-like model output as inert text', () => {
    const content = '<img src=x onerror=alert(1)> <script>alert(1)</script>';
    const tokens = formatAmaraResponse(content);
    expect(tokens).toEqual([{ kind: 'text', text: content }]);
    expect(tokens.some(token => token.kind === 'link')).toBe(false);
  });

  it('uses the approved local crest rather than a legacy external logo path', async () => {
    const component = await readFile(new URL('../src/components/AmaraChat.astro', import.meta.url), 'utf8');
    expect(component).toContain("import crest from '../assets/amus-crest.png'");
    expect(component).toContain('<Image class="amara__crest" src={crest}');
    expect(component).not.toContain('/images/logo.png');
    expect(component).not.toContain('https://amuscollegeschool.com/images/logo.png');
  });
});
