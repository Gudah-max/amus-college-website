# Amara v1 setup

## Architecture

Amara is prepared as a local Astro component (`src/components/AmaraChat.astro`)
with a same-origin `POST /api/amara` Netlify Function. The UI holds its chat
history in browser memory only. The Function validates a short message and
filtered history, supplies the reviewed knowledge and system prompt to
Anthropic, and returns a small JSON response. No Render, Railway, external
widget script, database, vector store, lead capture or raw-message analytics
are part of this design.

`BaseLayout.astro` is the only integration point. It renders Amara for normal
public pages only when `PUBLIC_AMARA_ENABLED=true` at build time. No-index
pages (including the 404 and thank-you routes) do not render it. When the flag
is unset or any value other than the lowercase string `true`, Astro emits no
Amara markup or client script, so production remains off by default.

## Environment

Set these server-side Netlify environment variables; never commit their values:

- `ANTHROPIC_API_KEY` — required at runtime.
- `AMARA_MODEL` — optional; defaults to `claude-haiku-4-5`. Test Haiku 4.5 for
  cost/latency and Sonnet 5 as the quality benchmark before selecting production.
- `AMARA_MAX_TOKENS` — optional, 64–512; defaults to 360.
- `AMARA_TIMEOUT_MS` — optional, 1000–20000; defaults to 8000.

For a **Deploy Preview**, set the following variables in Netlify's
`deploy-preview` context (not in this repository):

- `ANTHROPIC_API_KEY` — required for live provider answers.
- `AMARA_MODEL=claude-haiku-4-5`
- `AMARA_MAX_TOKENS` — use the approved value, normally `360`.
- `AMARA_TIMEOUT_MS` — use the approved value, normally `8000`.
- `PUBLIC_AMARA_ENABLED=true`

For production, leave `PUBLIC_AMARA_ENABLED` unset (or set it to `false`) until
written approval to enable Amara is received. Never define the API key or any
other secret in `netlify.toml`: Netlify configuration-file variables are not
available to serverless functions.

No provider request is made by the build or automated tests. Without an API key,
the endpoint returns a limited deterministic school-information fallback.

## Production model decision

The approved production default is `claude-haiku-4-5`. `AMARA_MODEL` remains
an environment override and must not be hard-coded with a credential. Sonnet 5
(`claude-sonnet-5`) is retained only as a future benchmark/debug option, to be
used when a later regression shows a material Haiku quality problem, complex
reasoning becomes necessary, or the knowledge architecture becomes materially
more complex.

The controlled 26 September 2026 UAT selected Haiku because it matched
Sonnet's factual, safety and temporal quality at lower cost and latency:

| Model | Success | Automatic failures | Cost | Median | p90 | Max |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| Haiku 4.5 | 44/44 | 0 | $0.125477 | 2,164.5 ms | 3,038.3 ms | 5,217 ms |
| Sonnet 5 | 44/44 | 1 checker false positive | $0.493749 | 2,807.5 ms | 3,733.3 ms | 11,186 ms |

English and Kiswahili are the supported v1 languages. Luganda remains subject
to native-speaker review: Luganda enquiries are answered in simple English
until that review is complete. The model decision should not be reopened unless
future evidence identifies a material quality issue.

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

## Preview integration, rollback and QA

The browser calls only the same-origin `POST /api/amara` route. The function's
exported Netlify configuration maps that path directly to
`netlify/functions/amara.mts`; no Render, Railway, external widget host or
chatbot domain is used. The configuration also applies Netlify's code-based
rate rule of **10 requests per IP per 60 seconds**. Netlify validates this rule
during the deploy post-processing stage; confirm it appears in the Deploy
Preview log before relying on it. The same code-based rule applies to preview
and production deployments, subject to the site's Netlify plan rule allowance.

Before creating a Deploy Preview:

1. Confirm all five preview variables above are present in the `deploy-preview`
   context without printing their values. If `ANTHROPIC_API_KEY` is missing,
   stop before live preview UAT.
2. Run `PUBLIC_AMARA_ENABLED=true npm run build` locally. Confirm the launcher
   appears on an ordinary public page and does not appear on `/404.html` or
   `/thank-you`.
3. On the preview, check desktop (1440px), tablet (768px) and mobile (390px):
   launcher and teaser placement; dialog open/close; input, send and typing
   state; all five quick replies; response and contact/admissions links; error
   fallback; Escape; focus entry/return; no overlap or horizontal overflow.
   Mobile must use the full screen without covering safe-area controls.
4. Run a small Haiku-only browser set: office hours; phone/email; fees; 2027
   fee boundary; admissions open; unsupported admissions threshold; scholarship
   guarantee; Gulu/Kigali sports; Morocco; future Nakuru choir; boarding;
   privacy/report-card refusal; prompt injection; Kiswahili; and one Luganda
   sanity check. Mark the Luganda result **NATIVE-SPEAKER REVIEW REQUIRED**.

To roll back a preview, set `PUBLIC_AMARA_ENABLED=false` (or remove it) in the
Deploy Preview context and redeploy, or remove the preview branch/PR. To roll
back production after an explicitly approved future enablement, use the same
flag change and redeploy the production branch. Do not alter the provider key,
knowledge files or rate rule as part of a flag-only rollback.

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
input and $5/MTok output; Sonnet 5: $3/MTok input and $15/MTok output.

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
usage when returned, status/error, automatic failures and manual-quality
warnings. The later reviewer
scores each response using the 14-point rubric in `AMARA_UAT_REVIEW.md`, then
compares median, p90 and slowest latency from those records.

To re-evaluate the automatic checks against an existing saved result without a
provider request or file overwrite, run:

```sh
npm run amara:uat -- --recheck tmp/amara-uat-results/<result-file>.json
```

The checker accepts approved contact-route variants and evaluates high-risk
privacy, injection, Morocco, population, scholarship-guarantee and fee rules
by their narrow behavioural signals. Admissions-threshold checks fail only for
an asserted aggregate, score, numeric threshold or threshold-based guarantee;
safe refusals may mention those terms. Multilingual warnings surface excessive
length, unrequested Luganda fee detail and obvious unfinished endings without
turning language style into an automatic failure. The checker is not a
substitute for the rubric or native-speaker review of the Luganda response.
