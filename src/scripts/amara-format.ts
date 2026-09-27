export type AmaraFormatToken =
  | { kind: 'text'; text: string }
  | { kind: 'break' }
  | { kind: 'bold'; text: string }
  | { kind: 'link'; text: string; href: string };

const approvedUrl = 'https:\\/\\/amuscollegeschool\\.com(?:\\/[^\\s.,!?)]*)?';
const approvedContact = 'amuscollegeschool@gmail\\.com|\\+256\\s?(?:782\\s?442\\s?940|772\\s?303\\s?282|779\\s?964\\s?478)';
const schoolOrigin = 'https://amuscollegeschool.com';
const internalLinkLabels: Record<string, string> = {
  '/admissions': 'Admissions page',
  '/contact': 'Contact page',
};
const inlinePattern = new RegExp(
  `\\[([^\\]\\n]{1,120})\\]\\((${approvedUrl})\\)|\\*\\*([^*\\n]+)\\*\\*|(${approvedUrl}|${approvedContact})`,
  'gi',
);

const safeHrefFor = (text: string): string | undefined => {
  if (text.startsWith('https://')) {
    const url = new URL(text);
    return url.protocol === 'https:' && url.origin === schoolOrigin ? url.href : undefined;
  }
  if (text === 'amuscollegeschool@gmail.com') return `mailto:${text}`;
  if (/^\+256\s?(?:782\s?442\s?940|772\s?303\s?282|779\s?964\s?478)$/.test(text)) return `tel:${text.replace(/\s/g, '')}`;
  return undefined;
};

const linkTextFor = (href: string, fallback: string) => {
  const url = new URL(href);
  return internalLinkLabels[url.pathname.replace(/\/$/, '')] ?? fallback;
};

const appendText = (tokens: AmaraFormatToken[], text: string) => {
  const lines = text.replaceAll('**', '').split(/\r?\n/);
  lines.forEach((line, index) => {
    if (line) tokens.push({ kind: 'text', text: line });
    if (index < lines.length - 1) tokens.push({ kind: 'break' });
  });
};

/**
 * Converts only Amara's approved inline syntax into neutral tokens. The caller
 * renders tokens with DOM nodes, so model text can never become executable HTML.
 */
export function formatAmaraResponse(content: string): AmaraFormatToken[] {
  const tokens: AmaraFormatToken[] = [];
  let lastIndex = 0;

  for (const match of content.matchAll(inlinePattern)) {
    const index = match.index ?? 0;
    appendText(tokens, content.slice(lastIndex, index));

    if (match[1] && match[2]) {
      const href = safeHrefFor(match[2]);
      if (href) tokens.push({ kind: 'link', text: match[1], href });
      else appendText(tokens, match[0]);
    } else if (match[3]) {
      tokens.push({ kind: 'bold', text: match[3] });
    } else if (match[4]) {
      const href = safeHrefFor(match[4]);
      if (href) tokens.push({ kind: 'link', text: linkTextFor(href, match[4]), href });
      else appendText(tokens, match[4]);
    }
    lastIndex = index + match[0].length;
  }

  appendText(tokens, content.slice(lastIndex));
  return tokens;
}
