# Amara v1 setup

## Architecture

Amara is prepared as a local Astro component (`src/components/AmaraChat.astro`)
with a same-origin `POST /api/amara` Netlify Function. The UI holds its chat
history in browser memory only. The Function validates a short message and
filtered history, supplies the reviewed knowledge and system prompt to
Anthropic, and returns a small JSON response. No Render, Railway, external
widget script, database, vector store, lead capture or raw-message analytics
are part of this design.

The component is deliberately **not imported by the global layout or any page**.
It will remain invisible to the public until UAT authorises an import.

## Environment

Set these server-side Netlify environment variables; never commit their values:

- `ANTHROPIC_API_KEY` — required at runtime.
- `AMARA_MODEL` — optional; defaults to `claude-haiku-4-5`. Test Haiku 4.5 for
  cost/latency and Sonnet 5 as the quality benchmark before selecting production.
- `AMARA_MAX_TOKENS` — optional, 64–512; defaults to 360.
- `AMARA_TIMEOUT_MS` — optional, 1000–20000; defaults to 8000.

No provider request is made by the build or automated tests. Without an API key,
the endpoint returns a limited deterministic school-information fallback.

## Knowledge ownership and review

`src/data/amara/` is the human-reviewable knowledge layer. The current website
and explicitly client-approved legacy operational facts are Amara v1’s baseline.
Each fact records a source and review state. Fee, uniform, registration,
SchoolPay, payment-plan, scholarship and 2026/2027 admissions-open facts use
`approved-current` and must be reviewed by **2026-12-31**. Do not present them
as temporary to visitors. They do not answer questions about future periods;
those go to the school office.

When website content changes or management supplies new facts, update the
relevant data module, its source/effective period/review dates, the knowledge
tests, and this documentation if the policy changes. Review all operational
facts before the 2027 admissions cycle.

## Privacy and safety

The UI warns visitors not to share sensitive student information. Amara does not
ask for IDs, medical information, report cards, documents or individual student
details. Conversations are not persisted; browser history is discarded on page
reload/close. Individual cases go to school staff.

The prompt restricts Amara to approved facts, treats history/future records
carefully, blocks prompt-instruction disclosure, and prevents unsupported
admissions or scholarship promises.

## Rate limiting and failure behaviour

Netlify’s function configuration enforces 10 requests per IP per 60 seconds at
the platform layer. It is deliberately not emulated with per-instance memory.
The function caps messages at 700 characters, filters and limits history to six
user/assistant turns, caps provider output, sets a provider timeout, and returns
sanitized JSON. Provider failure produces a topic-aware contact/admissions
fallback; keys, traces, prompt text and provider internals never leave the
endpoint.

## Enabling for UAT

After approval, import `AmaraChat` into the chosen page or `BaseLayout.astro`.
Deploy only after a preview confirms desktop, tablet and mobile layout; keyboard
focus, Escape, focus return, error state and long text; the live Netlify rate
limit; and a controlled provider evaluation. Remove that import to disable the
UI again. Do not enable before UAT.
