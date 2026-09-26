export type AmaraFormatToken =
  | { kind: 'text'; text: string }
  | { kind: 'break' }
  | { kind: 'bold'; text: string }
  | { kind: 'link'; text: string; href: string };

const approvedUrl = 'https:\\/\\/amuscollegeschool\\.com(?:\\/[^\\s.,!?)]*)?';
const approvedContact = 'amuscollegeschool@gmail\\.com|\\+256\\s?(?:782\\s?442\\s?940|772\\s?303\\s?282|779\\s?964\\s?478)';
const inlinePattern = new RegExp(
  `\\[([^\\]\\n]{1,120})\\]\\((${approvedUrl})\\)|\\*\\*([^*\\n]+)\\*\\*|(${approvedUrl}|${approvedContact})`,
  'gi',
);

const hrefFor = (text: string) => {
  if (text.startsWith('https://')) return text;
  if (text.includes('@')) return `mailto:${text}`;
  return `tel:${text.replace(/\\s/g, '')}`;
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
      tokens.push({ kind: 'link', text: match[1], href: match[2] });
    } else if (match[3]) {
      tokens.push({ kind: 'bold', text: match[3] });
    } else if (match[4]) {
      tokens.push({ kind: 'link', text: match[4], href: hrefFor(match[4]) });
    }
    lastIndex = index + match[0].length;
  }

  appendText(tokens, content.slice(lastIndex));
  return tokens;
}
