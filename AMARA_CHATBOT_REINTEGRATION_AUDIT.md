# Amara Chatbot Reintegration Audit

> **Superseding recovery update — 26 September 2026.** This audit's original conclusion remains correct *for the website repository*: the backend, prompt, widget and knowledge base were not present there. They have now been recovered from the separate original `Gudah-max/acs-chatbot` repository at `bd66dc86aa3451216132e81fa76378ad619799ae`. The recovered repository contains `server.js`, `public/widget.js`, `acs-knowledge.txt`, package files, `.env.example` and Railway instructions. It confirms a browser widget -> Express `POST /api/chat` -> Anthropic Messages API -> knowledge-in-system-prompt architecture. The recovered material is historical, not automatically safe/current. Read `AMARA_RECOVERY_AND_MIGRATION_SPEC.md` for the source-verified architecture, UI/prompt audit, detailed knowledge diff, safety controls and migration decision. No chatbot implementation or production change was made by this update.

**Audit date:** 26 September 2026
**Audit branch:** `audit/amara-chatbot-reintegration`
**Audited baseline:** `72cde3f3b5b708739bc48402a1ee44a1663f167d` (`origin/feature/post-release-sports-choir-update`)
**Scope:** Audit only. No chatbot, public-site, deployment, environment, paid-service, commit, or push change was made.

## Client-approved operational information update

On 26 September 2026, the client approved the continued chatbot use of the
existing published operational information below until the school supplies
replacement 2026/2027 figures. These facts are approved current information
for Amara v1, not a prediction of later cycles:

- O-Level/Senior 1–4: UGX 1,500,000 school fees per term; UGX 400,000 uniform;
  UGX 1,900,000 current combined figure.
- A-Level/Senior 5–6: UGX 1,500,000 school fees per term; UGX 420,000 uniform;
  UGX 1,920,000 current combined figure.
- New-student registration: UGX 100,000 one-time fee.
- SchoolPay payment instructions and the contact-the-school guidance for any
  payment-plan options.
- Academic and football scholarship categories, including the dated fact that
  350 students were enrolled under those programmes in 2024.
- Admissions currently open for the 2026/2027 academic year.

Every such fact must be represented in the v1 knowledge layer with
`status: "approved-current"` and `reviewBy: "2026-12-31"`. It is not to be
described publicly as temporary. The approval does not restore unsupported
academic statistics, Morocco claims, fixed admissions thresholds, scholarship
amounts, deadlines, capacity, or guarantees. Questions about a future period
outside this approval must be referred to the school.

## A. Executive summary

Amara is **not integrated into the current Astro site**. The current production build is a static Astro site deployed by Netlify (`npm run build` to `dist`), and contains no Amara component, remote script, API client, serverless function, model SDK, prompt, knowledge store, or chatbot environment variable.

The only recoverable implementation is legacy browser integration. It assigned `window.ACS_CHATBOT_URL` to `https://acs-chatbot-4oym.onrender.com` and loaded `widget.js` from that host. A later repository change removed that script from all legacy static HTML pages and replaced it with a fixed Contact Admissions link. The Render origin returned HTTP 503 to one non-conversational `HEAD` request, so the legacy service is unavailable.

There is no backend source, deployment manifest, model configuration, system prompt, knowledge corpus, or data-retention configuration in this repository. Those unknowns are material: a safe reintegration cannot be achieved by simply restoring the old script tag.

**Recommendation:** do not reactivate or restore the Render injection. Use a small Astro-native Amara interface only after the approved avatar/UI source is supplied or recovered, with a new Netlify Function and version-controlled factual knowledge source. Keep Netlify and the current Admissions/Contact routes as the human fallback. This is Option C below: replace the missing backend and knowledge layer; preserve Amara's approved identity where its original asset/design can be verified.

## B. Current architecture

### Current approved site

```text
Visitor
  -> Astro static pages (`src/pages`)
  -> Netlify static hosting (`npm run build` -> `dist`)
  -> Netlify Forms for Contact and Admissions enquiries
  -> school response process (outside this repository)
```

There is no current Amara hop in this flow. Local browser checks at 390 px and 1440 px found zero Amara nodes, chat controls, or `onrender.com` scripts, with no horizontal overflow or console errors.

### Reconstructed legacy design

```text
Visitor
  -> legacy static HTML page
  -> remote `widget.js` from acs-chatbot-4oym.onrender.com
  -> unknown widget UI / unknown message endpoint
  -> unknown AI provider and knowledge/context
  -> response rendered by remote widget
```

The repository does not contain the code behind the final five arrows. It cannot establish logging, lead capture, analytics, email handoff, WhatsApp handoff, human escalation, message endpoint, or AI-provider behaviour.

## C. File/component inventory

| Group | Inventory | Status / finding |
|---|---|---|
| Frontend, current | `src/layouts/BaseLayout.astro`, `src/pages/*.astro`, `src/components/*.astro`, `src/styles/global.css`, `src/styles/tokens.css` | Astro site; no Amara import, widget, API call, or launcher. |
| Frontend, legacy / unused | `index.html`, `about.html`, `academics.html`, `admissions.html`, `contact.html`, `gallery.html`, `privacy.html`, `cookies.html`, `sports.html`, `thank-you.html`, `404.html`, `styles.css` | Root static site is not the Astro build source. All pages now show an `amara-fallback` Contact Admissions link; `styles.css` positions it bottom-right. |
| Legacy integration evidence | Git history: initial commit `4a4d6fa`; removal change `c3d17f8` | Initial implementation injected `window.ACS_CHATBOT_URL` and loaded the Render `widget.js`; subsequent change removed it from the legacy pages. |
| Backend/API | None in repository | No `functions`, server, API route, Docker, Render manifest, Procfile, worker, or backend directory. |
| Prompts | None in repository | No system prompt, prompt template, safety rule, or model parameters. |
| Knowledge data | None for Amara | Website content is in Astro files/data modules, but no code passes it to a chatbot. |
| Configuration | `astro.config.mjs`, `netlify.toml`, `package.json` | Static Astro output, Netlify build/publish only. No chatbot configuration. |
| Environment variables | `.env` is ignored; no tracked `.env*` found | No chatbot environment-variable references were found in text source. |
| Deployment configuration | `netlify.toml` | `command = "npm run build"`, `publish = "dist"`; no Functions setting or Render configuration. |
| Cookie/privacy legacy copy | `cookies.html`, `privacy.html` | Legacy material refers to a chat session cookie, but the current Astro privacy page does not mention chat. This is stale/unused content, not evidence of actual backend handling. |

## D. Frontend status

The legacy launcher/widget was a remote-script embed, not an Astro component, iframe, or local API client. It would not be a dependable Astro integration without modification: the implementation was global-script based and neither its source nor contract is held in the repository.

The modern Astro source contains no fallback launcher either. Its visitor fallback is the normal Contact and Admissions experience, including Netlify Forms and direct contact details. The legacy static pages retain a visible, keyboard-reachable Contact Admissions pill (`aside.amara-fallback > a`), but those root HTML files are not included in the configured Astro build output.

The approved Amara avatar/identity is not recoverable from this codebase. Do not substitute the school crest: recover or obtain the approved Amara asset before any UI work.

## E. Backend/Render status

- **Service name/host available:** `acs-chatbot-4oym.onrender.com`.
- **Observed availability:** HTTP 503 from one `HEAD` request on 26 September 2026. No request body, message, or model call was sent.
- **Framework, build/start command, health endpoint:** unknown; no backend source or Render manifest is present.
- **Required environment variables:** unknown; no references are present in this repository.
- **Message endpoint:** unknown. The page loaded remote `widget.js`, but the widget's own request path is not recoverable here.
- **Permanent-active expectation:** likely. The later code comment says the fallback should be replaced after the Render service is restored; this is not proof of an always-on plan, but it confirms a dependency on its availability.
- **Current frontend error behaviour:** no current frontend call exists, so the current Astro site does not surface a Render error. Legacy pages avoid the request entirely and present Contact Admissions.

**Classification: OBSOLETE as a direct dependency.** Its service is unavailable, its source/configuration/ownership are absent, and it makes the public site dependent on an opaque third-party remote script. It may contain historical assets or operational knowledge worth recovering through an authorised account owner, but it should not be reactivated blindly.

## F. AI provider/model

No provider, model, SDK, API version, context window, temperature, max output, streaming mode, retries, or timeout policy is present or inferable from repository code.

No hard-coded AI key or client-side provider key was found in the repository's text source. A broad binary scan produced false positives in image bytes and is not treated as credential evidence. The lack of a tracked key does **not** prove the Render service was configured safely; its environment is outside repository scope.

## G. Knowledge-base status

There is no Amara knowledge base in the repository. Current site content must not be assumed to have fed the old bot.

| Candidate source | Location | Last-known content | Status | Update path |
|---|---|---|---|---|
| Current contact facts | `src/data/site.ts`, `src/pages/contact.astro` | Three phone numbers, school email/address, and office hours | Current | Edit version-controlled source after school approval. |
| Current admissions copy | `src/pages/admissions.astro` | Contact-led requirements, current guidance via Admissions; no asserted PLE threshold | Current | Edit source after Admissions approval. |
| Current sport records | `src/data/sports-records.ts`, `src/pages/sports.astro` | 2024 FEASSA; 2026 USSSA, CAF Gulu double, CECAFA boys' title/girls' bronze; athlete profiles | Current | Update evidence records and sources together. |
| Current life/choir copy | `src/pages/life-at-amus.astro` | Observational life-at-Amus wording; planned late-October 2026 Nakuru hymn-festival representation | Current, time-sensitive | School communications approval. |
| Current leadership copy | `src/pages/our-school.astro` | Richard Olupot Headteacher welcome | Current | School approval. |
| Legacy static content | root `*.html`, `styles.css` | Older admissions claims, dated policy, fallback copy | Stale / unused in Astro build | Do not use as chatbot source. |
| Remote chatbot context | unavailable Render service | Unknown | Unknown | Recover only from authorised service/backups, then review and version. |

## H. Website-vs-chatbot content conflicts

No chatbot answers or prompt corpus can be recovered, so specific historical answers cannot be proven. The following questions are **high-risk contradictions** if an old knowledge source or generic model answer is restored:

| Topic | Current approved source | Unsafe legacy / unverified answer to prevent |
|---|---|---|
| Admissions threshold | `src/pages/admissions.astro` says requirements vary and Admissions confirms current guidance | "Minimum aggregate of 12 in PLE," "six UCE passes," or other fixed threshold. These appear in unused `admissions.html` and are not approved current claims. |
| Admissions process/status | Contact-led enquiry; school confirms documents, fees, availability and subject combinations | Guaranteed acceptance, rolling-status assertion, 48-hour response promise, bursary availability, or hard deadlines. These legacy claims are unsupported in current source. |
| Contact and hours | `src/data/site.ts`, `src/pages/contact.astro`: official email, three phone numbers; Mon-Sat 8:00 AM-5:00 PM; Sun/public holidays 9:00 AM-2:00 PM | Any old/invented contact details or office hours. |
| Academic performance | Current site uses dated, carefully scoped evidence | Unverified rankings, aggregate statistics, pass rates, or claims of academic superiority. |
| Sports | `src/data/sports-records.ts` specifies 2024 FEASSA, 2026 USSSA title, CAF national double in Gulu, and CECAFA boys' gold/girls' bronze in Kigali | Omission, wrong year/opponent/location, invented titles, or different result figures. Mention Allan Oyirwoth and Hakim Musabbah only within the scoped former-student descriptions. |
| Life at Amus | `src/pages/life-at-amus.astro` uses observational programme language | Guaranteed facilities/experiences or invented programmes. |
| Choir | Scheduled Nakuru representation, late October 2026 | Presenting a future event as completed or confirmed outcome. |
| Our School | `src/pages/our-school.astro` contains current Headteacher wording | Invented founding history or a different Headteacher. |

## I. System-prompt findings

No prompt exists in the repository, so none of the necessary behaviours can be verified. This is a P1 governance gap, not evidence that the old bot behaved incorrectly.

Before reintegration, a reviewed prompt/rule set must: identify Amara as the school assistant; scope factual answers to approved Amus sources; refuse to invent fees, thresholds, results, policies, availability, or deadlines; distinguish dated records from current facts; direct Admissions enquiries to the approved contact route; say when information is unavailable; resist prompt injection and off-topic abuse; avoid promises; and minimise collection of student/parent information.

## J. UX/accessibility findings

### Current site

There is no chat UI to operate, audit, or make accessible. Browser checks confirmed no launcher/widget or Render script at mobile and desktop widths. This avoids a broken-chat experience, but provides no immediate conversational help.

### Legacy/future UI

- The legacy fallback link is visible, has a semantic support label, is an anchor and has a 44 px minimum height in `styles.css`; it is a reasonable non-chat fallback.
- The remotely supplied widget UI cannot be assessed for launcher recognition, avatar, mobile/desktop sizing, keyboard operation, focus management, semantics, scrolling, typing/loading/error state, long messages, link safety, reset/persistence, or navigation because its source is absent and the host is unavailable.
- The original remote widget should not be considered approved for accessibility merely because its visual identity was preferred. Its UI needs a complete keyboard and screen-reader audit once a locally controlled version exists.

## K. Privacy/security findings

The live Astro site collects sensitive admissions data through Netlify Forms: student name, date of birth, gender, intended level, previous school, parent/guardian name and relationship, phone, email, and free text. The current privacy page only states that form data is used for enquiries and that Netlify handles forms. It does not describe retention or a future chatbot.

For Amara specifically, storage, retention, logging, third-party sharing, endpoint authentication, CORS, rate limiting, bot protection, and prompt-injection controls are all unknown because the backend is missing. The legacy cookie page claims `acs_session` was a temporary non-personal session identifier, but it also says the current fallback does not load a chat widget; it must not be used as an assurance about the old service.

No exposed source-code credential was found. No active public chatbot endpoint is invoked by the current site.

## L. Failure/fallback findings

| Condition | Current Astro site | Old remote-widget path | Required future behaviour |
|---|---|---|---|
| Render asleep/suspended | No impact; not called | Host currently returns 503; widget unavailable | Never depend on an opaque always-on Render script. |
| Expired AI key / 429 / 500 | No active AI call | Unknown | Short timeout, bounded retry for transient errors, plain-language error, and Contact/Admissions fallback. |
| Offline | Normal browser/network failure | Unknown | Explain unavailable state; retain typed text locally only with clear consent, or offer phone/email/WhatsApp routes. |
| Timeout / malformed JSON | No active chat | Unknown | Stop spinner, validate schema, show retry and human-contact CTA. |
| Abuse / injection | No active chat | Unknown | Server-side limits, origin validation, moderation/abuse policy, prompt isolation, and no tool/secret access. |

Recommended failure pattern: client request -> short serverless timeout -> validated structured response -> one safe retry only for network/transient service failures -> "Try again" plus Contact/Admissions links. Never leave an infinite loader or a blank widget.

## M. Cost/dependency findings

| Architecture | Cost/dependency profile |
|---|---|
| Current architecture | Netlify static hosting and Forms only; no AI/Render/database/vector dependency. |
| Legacy architecture | Render service plus an unknown AI provider and unknown possible storage/logging cost. The service is unavailable. |
| Serverless reintegration | Existing Netlify hosting plus Function invocation and model-token costs; can use no database for a small reviewed facts file, with optional low-cost storage only if genuinely required. |

Avoid a vector database initially. The approved factual scope is small, time-sensitive, and benefits more from a reviewed, version-controlled structured source than from unbounded retrieval. A lower-cost model may be suitable later, but provider/model selection needs an explicit quality, privacy, and cost test and is out of scope for this audit.

## N. Reintegration options

| Option | Work / reuse | Cost & reliability | Security / maintainability | Astro + Netlify fit / risk |
|---|---|---|---|---|
| **A. Restore existing architecture** | Reinsert legacy script; re-establish Render and its missing backend configuration | Unknown recurring Render and model cost; currently unavailable; opaque dependency | Cannot review source, prompt, data or controls | Poor fit; highest operational and factual risk. Not recommended. |
| **B. Reuse approved UI, migrate backend** | Requires the original widget source or approved design assets; replace only message transport with a new serverless API | Low infrastructure overhead; reliable if built with bounded failures | Locally reviewable backend and knowledge; UI still needs accessibility hardening | Good fit. Viable only after legitimate recovery of UI source/assets. |
| **C. Rebuild backend/knowledge with a small Astro-native Amara interface** | Recreate the approved Amara identity from authorised assets; build local component, Netlify Function, and facts source | Lowest ongoing infrastructure footprint; avoids always-on service | Best control over privacy copy, limits, prompt, factual releases and auditing | Best fit; modest implementation effort and requires deliberate visual QA. |

## O. Recommended architecture

Choose **Option C**.

- **KEEP:** Netlify static hosting, current Contact/Admissions forms, direct contact routes, current version-controlled site facts, and the approved Amara avatar/identity once supplied or recovered.
- **REFACTOR:** Amara into a local Astro component with accessible dialog/focus behaviour, explicit loading/error/retry states, and the visible Contact/Admissions fallback.
- **REPLACE:** The unavailable opaque Render backend with one Netlify Function (or equivalently lightweight serverless handler), a reviewed structured knowledge file, server-only provider credentials, rate limiting, response validation, and a dated-content update process.
- **REMOVE:** Any return to the remote `onrender.com/widget.js` injection; stale legacy chatbot statements when legacy pages are eventually retired; any unsupported legacy admissions/statistical claims from chatbot knowledge.

The future function should return only a narrow response schema, enforce server-side message/length/rate limits, avoid storing conversations by default, and use a reviewed knowledge release with source/date metadata. Admissions answers should route to the current contact process rather than collecting documents or results in chat.

## P. P0/P1/P2/P3 findings

### P0 security

None in the current approved deployment path. No chatbot executes and no exposed text-source API key was found. This is not a clearance of the legacy Render service, which cannot be audited from this repository.

### P1 important

1. **Unavailable, unowned legacy backend.** `acs-chatbot-4oym.onrender.com` returned HTTP 503; repository lacks its source/configuration. Do not restore the script.
2. **No recoverable model, prompt, or knowledge configuration.** Factual accuracy, safety, and provider privacy cannot be verified.
3. **Chat-specific privacy/security controls unknown.** Logging, retention, CORS, authentication, rate limiting and abuse controls are unverified.
4. **Admissions data sensitivity.** Current forms already collect minor/student and guardian data; any chat must not casually duplicate this collection or silently send it to a model provider.
5. **Current facts are time-sensitive.** Admissions rules and the 2026 sports/choir facts require a governed source, not a model's general knowledge or legacy site copy.

### P2 improvement

1. **No current conversational assistance.** The current site has human contact routes but no immediate chat/help launcher.
2. **Current privacy page is high-level.** Before chat launch it needs a chat-specific notice that states processor, data categories, retention, and contact/removal route.
3. **Legacy static pages retain obsolete fallback/cookie copy.** They are outside the Astro output but can confuse maintainers if treated as live source.

### P3 optional

1. Preserve a visual and interaction specification for the approved Amara identity before implementation, so future redesign pressure does not turn it into the school crest.
2. Add a content-review checklist with expiry/review dates for live events, contacts, admissions guidance and achievement records.

## Q. Proposed implementation phases

1. **Authority and recovery:** obtain authorised access to any old Render account/backups and the approved Amara visual assets; export only what can be security- and fact-reviewed. Do not reactivate production service.
2. **Content governance:** create a dated source-of-truth knowledge file from approved Astro data; assign owner/review dates; exclude fees, thresholds, availability and unverified claims.
3. **Backend design:** select provider after a cost/privacy test; implement a serverless endpoint with server-only credentials, validation, rate/abuse limits, no default message retention, and operational alerts.
4. **Accessible UI:** build/recover an Astro-native Amara component preserving the approved identity; test keyboard/focus, screen readers, mobile viewport, long replies, links, retry, offline and fallback states.
5. **Privacy and resilience:** publish accurate chat privacy/cookie notice; test 429/500/timeout/malformed-response/offline scenarios and Admissions/Contact fallback.
6. **Controlled release:** review factual answer set with school owners, run accessibility and security checks, then obtain explicit approval before any deployment.

## Audit evidence and limits

- Remote branch SHA was verified after `git fetch origin` and the audit branch was created directly from it.
- Local Astro browser checks at 390 px and 1440 px found no chat UI, Render script or console error.
- One HTTP `HEAD` to the documented Render origin returned 503; no chat content or paid-provider call was made.
- This audit did not access an external Render account, change credentials, deploy, purchase services, or infer unknown backend behaviour as fact.
