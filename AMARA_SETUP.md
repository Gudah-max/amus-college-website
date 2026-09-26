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

## Model UAT (internal only)

The model evaluation is deliberately separate from the site and the Netlify
function. It uses the same `AMARA_SYSTEM_PROMPT`, approved knowledge, empty
history, `max_tokens: 360`, no temperature override, and disabled thinking for
both candidates. This makes the comparison a like-for-like text response test;
it does not add a public route, component import or test endpoint.

Verified 26 September 2026 from Anthropic's official documentation:

- Model A (Haiku 4.5): `claude-haiku-4-5`
- Model B (Sonnet 5): `claude-sonnet-5`
- The installed `@anthropic-ai/sdk` 0.128.0 supports both identifiers in its
  Messages `Model` type. Both use the standard Messages API shape used here
  (`model`, `system`, `messages`, `max_tokens`).
- Sonnet 5 has a larger context window and adaptive-thinking capability than
  Haiku 4.5. The UAT does not request those capabilities, so it supplies the
  shared `thinking: { type: 'disabled' }` setting. No tools, caching, history,
  temperature or partner-cloud endpoint is used.

Sources: [model IDs and lifecycle](https://platform.claude.com/docs/en/about-claude/model-deprecations),
[model migration guidance](https://platform.claude.com/docs/en/about-claude/models/migration-guide),
and [Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing).
The standard first-party API prices used for planning are Haiku 4.5: $1/MTok
input and $5/MTok output; Sonnet 5: $2/MTok input and $10/MTok output.

Run a safe, no-network summary without a key:

```sh
npm run amara:uat -- --dry-run
```

The harness accepts `--model haiku|sonnet|both`, `--case ID`, `--category
CATEGORY` and `--output DIRECTORY`. Live mode is impossible unless both
`AMARA_UAT_LIVE=true` and `ANTHROPIC_API_KEY` are present. A hard cap of 50
requests applies per invocation, so the complete 44-case comparison must be
run intentionally as two model-specific commands. Live machine-readable JSON
result files are written to `tmp/amara-uat-results/`, which is gitignored.
Each record includes model, test ID/category/prompt, response, latency, token
usage when returned, status/error and automatic failures. The later reviewer
scores each response using the 14-point rubric in `AMARA_UAT_REVIEW.md`, then
compares median, p90 and slowest latency from those records.

To re-evaluate the automatic checks against an existing saved result without a
provider request or file overwrite, run:

```sh
npm run amara:uat -- --recheck tmp/amara-uat-results/<result-file>.json
```

The checker accepts approved contact-route variants and evaluates high-risk
privacy, injection, Morocco, population, scholarship-guarantee and fee rules
by their narrow behavioural signals. It is not a substitute for the rubric or
native-speaker review of the Luganda response.
