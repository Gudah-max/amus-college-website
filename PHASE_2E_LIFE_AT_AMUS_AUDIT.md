# Phase 2E Life at Amus audit

**Scope:** Internal audit only. Prepared from the Phase 2D checkpoint `86421cb30dc664c9784c65d961321db928f44d68` on 21 September 2026. A visible image, an image filename, and legacy HTML are not independent verification of an institutional claim. Nothing in this document is approved as new public copy.

## A. Current page structure

`src/pages/life-at-amus.astro` has six public areas in this order:

1. Page introduction: boarding, learning, friendship and participation.
2. Boarding: general shared routines, study, meals, reflection and activities, paired with `media.boarding` (`students_at_dinnig_hall.webp`).
3. Shared daily life: peer time, study and practical habits, paired with `media.lifeCommunity` (`welcome_group.webp`).
4. Faith and community: prayer, celebration and reflection, paired with `media.lifePrayer` (`amus-choir-group.png`).
5. Music, dance and drama: a general expression statement with `media.beyond` (`amus-student-celebration.png`).
6. Debate and scouting: general participation wording with `media.debate` and `media.scouting`, then a Contact/Learning CTA.

The page uses the existing editorial section patterns in `src/styles/global.css`. Its current supporting media registry is `src/data/media.ts`; programme statuses in `src/data/content-status.ts` are `working-source`, not formal approval.

## B. Strong existing content

- The page already owns the right broad territory: residential school experience, community, faith/community gatherings and non-sport participation.
- The boarding-school identity is consistent with the active Homepage and Our School material. It should remain general until the school confirms operational details.
- `students_at_dinnig_hall.webp` visibly shows students sharing a meal; it supports a descriptive meal/community image without implying a menu, timetable, nutrition policy or boarding entitlement.
- `students_in_a_hall.webp` visibly shows students assembled in a hall and is a stronger, authentic community image than a generic stock-like treatment. It is already used in Gallery, not on Life at Amus.
- `students_smiling_in_school.webp` is a strong candid image of students outside a school building. It is now used on Our School, so reuse on Life at Amus should be selective rather than automatic.
- `scout_1.webp`, `scout_2.webp` and `scout_3.webp` visibly support careful references to scouting: uniformed scouts are pictured marching, working outdoors and posing in scout uniform. They do not verify awards, dates, camps, representation or a programme schedule.
- The current short debate/scouting text avoids publishing the legacy trophy and competition claims.

## C. Generic, duplicated or weakly evidenced content

- The introduction, boarding section and shared-daily-life section repeat the same boarding/routine/friendship/community idea. The page needs clearer distinction between residential rhythm, student community and activities.
- The Homepage `BoardingLife` component already makes a similar general boarding/community statement using the same meal image plus a dormitory-detail image. Life at Amus should own the deeper, photo-led residential story; Homepage should remain the shorter signpost.
- Homepage `BeyondClassroom` repeats debate, scouting, music/dance/drama, faith/community and student leadership. Life at Amus should own the fuller student-activity narrative; the Homepage should not repeat its detail.
- Our School already establishes boarding as part of institutional identity. It should link to Life at Amus rather than restate daily-life content.
- The active faith wording is appropriately restrained, but it is not evidence of denomination, mandatory worship, a chapel programme, an interfaith policy or a schedule.
- `media.beyond` is a student celebration image, not clear evidence of music, dance or drama. The `music_dance_drama.webp` filename is also unreliable: the visible image shows students in sports-style shirts celebrating around a trophy, not an identifiable MDD performance. Neither should carry an MDD-specific claim without confirmation.
- The active `media.debate` alt describes an academic competition championship. Its legacy source image is competition-oriented, so it should not be used to imply a current result unless the result and date are separately verified.

## D. Boarding findings

| Claim or material | Classification | Audit finding |
| --- | --- | --- |
| Amus is a boarding school | LIKELY BUT NEEDS CONFIRMATION | Active site and `boardingOnly` support the current general identity, but the policy and any exceptions are not confirmed. |
| Students sharing a meal are pictured | SAFE / OBSERVATIONAL | `students_at_dinnig_hall.webp` visibly shows a communal meal. Do not infer menu, frequency, nutrition standard or eligibility. |
| General shared routines, study and community | SAFE / OBSERVATIONAL | Suitable as non-quantified editorial language if kept general. |
| Girls' dormitory complete; boys' dormitory under construction and due by end-2026 | TIME-SENSITIVE / DO NOT REPUBLISH YET | Legacy About content only. Current status is unknown; Phase 2D and `content-status.ts` already flag dormitory facts for confirmation. |
| Dormitory names, capacity, supervision, pastoral care, weekend routine and boarding fees | NEEDS CONFIRMATION | No current source supports these operational claims. |
| Chicken/rice every Wednesday and meat/rice every weekend | TIME-SENSITIVE / DO NOT REPUBLISH YET | Legacy Homepage claim only; treat meals as operational information. |
| Bus/fleet or transport arrangements | NEEDS CONFIRMATION | `bus_fleet.webp` visibly includes branded buses, but it does not confirm ownership, fleet size, availability, route, safety policy or current service. |

## E. Faith and community findings

| Material | Classification | What can safely be said / caution |
| --- | --- | --- |
| `amus-choir-group.png` / active `lifePrayer` image | SAFE / OBSERVATIONAL | The active image can support a carefully descriptive reference to a choir/group gathering. Its registry caption is awaiting confirmation. |
| `choir.webp` | SAFE / OBSERVATIONAL | A large student group is pictured performing or gathered indoors. Event, date and outcome are unknown. |
| `eid_celebration_at_school.webp` | LIKELY BUT NEEDS CONFIRMATION | The image visibly shows a large school gathering with religious dress. The filename alone cannot establish Eid, annual recurrence, inclusion policy, date or location. |
| `spiritual_guidance.webp` | SAFE / OBSERVATIONAL | A Christian religious service is visibly pictured. It does not establish the school's denomination, routine worship policy or compulsory attendance. |
| `prayer_time.webp` / `mombasa_cathedral.webp` | LIKELY BUT NEEDS CONFIRMATION | Church and choir settings are visible, but legacy narrative adds a named festival, result and international participation that need primary evidence. |
| "Proudly inclusive", annual Eid celebrations, all-faith participation | DO NOT REPUBLISH YET | Legacy Homepage language without a confirmed policy or approved wording. |
| Chapel programme, fellowship, worship timetable, denominational affiliation and interfaith policy | NEEDS CONFIRMATION | No active, approved source supports them. |

## F. MDD findings

**Current wording:** "Music, dance and drama offer ways to create, contribute and take part in the life of the school." The programme is `working-source` in `content-status.ts`.

**Useful imagery:** `choir.webp` visibly shows a large group in a hall; `amus_dance_and_drama.webp` and `music_dance_drama.webp` are not reliable evidence of a named MDD programme or result from filename alone. The latter visibly appears to be a student celebration around a trophy and should not be captioned as MDD without confirmation.

**Legacy claims - achievement claims requiring verification:**

- Teso Secondary Schools MDD Competition won every year since 2017.
- Third nationally for three consecutive years, 2023 in Arua, 2024 in Jinja and 2025 in Wakiso/Buddo.
- ACS Chapel Choir third at the 2025 International Hymn Festival at ACK Mombasa Memorial Cathedral.

These are dated competitive claims with no supporting primary source in the Phase 2 evidence ledger. Do not republish them or identify `mombasa_cathedral.webp` as a named outcome until management supplies sources and image approval.

## G. Debate findings

**Current wording:** Debate gives students space for ideas and attentive listening. `debateProgramme` is a `working-source` status, not a verified achievement record.

**Photography:** `debate_1.webp`, `debate_2.webp` and `debate_3.webp` visibly show students/adults with certificates or trophies. They are strong authentic images only if captions remain observational, for example "Students pictured with debate certificates" after school approval. The certificate/trophy text and filenames are not sufficient for public result copy without an evidence source.

**Legacy claims - achievement claims requiring verification:**

- A 5-0 unanimous Writing Our World Eastern Region Championship win over 12 schools and Soroti Secondary School.
- Odele Francis representing the school in the public-speech category at the NDC Debate Championship at King's College Budo.
- National Bible Quiz runners-up placement.

Each has names, outcomes, venue or event detail and therefore requires a source, date and school approval. Do not equate a photographed certificate with a current programme, result or ranking.

## H. Scouting findings

**Current wording:** Scouting brings teamwork, service and practical responsibility into school life. `scoutingProgramme` is `working-source`.

**Photography:** `scout_1.webp` shows uniformed scouts marching on a school campus; `scout_2.webp` shows a uniformed scout working outdoors; and `scout_3.webp` shows two scouts in uniform. These support factual visual captions such as "Students pictured in scout uniform" or "A scout pictured working outdoors," subject to school permission. They do not identify a camp, date, award or programme frequency.

**Legacy claims - achievement/time-sensitive claims requiring verification:**

- A Scout Club programme develops entrepreneurship, patriotism and environmental conservation.
- A mango farm was established through tree planting.
- District representation at national level in 2023-2024.
- A 2024 Sustainability Award at Kaazi National Scout Camping and Training Ground.

The status is **ACHIEVEMENT CLAIM - NEEDS VERIFICATION** for representation and award, and **LIKELY BUT NEEDS CONFIRMATION** for activity/programme claims. The images do not establish those results or a continuing programme.

## I. Photography audit

| Asset | Visible safe description | Event/date/location/outcome known? | Current use and recommendation |
| --- | --- | --- | --- |
| `students_at_dinnig_hall.webp` | Students sharing a meal | No | Active on Homepage and Life at Amus. Strong but already repeated; retain only where the context is clearly residential/community. |
| `students_in_a_hall.webp` | Students assembled in a hall | No | Active Gallery only. Strong candidate for Life at Amus community section, with a neutral caption. |
| `students_smiling_in_school.webp` | Students together outside a school building | No | Active Our School. Strong but avoid immediate repeat on Life at Amus. |
| `picture_of_students_in_blue.webp` | Students gathered indoors | No | Legacy only. Useful community texture, but similar to `students_in_a_hall.webp`; use one after checking permissions/context. |
| `choir.webp` | A large student group gathered or performing indoors | No | Legacy only. Strong MDD/choir-adjacent image, but event identity is unknown. |
| `spiritual_guidance.webp` | Christian religious service with students | No | Legacy only. Appropriate only if school confirms faith-language and permission; no policy claim. |
| `eid_celebration_at_school.webp` | Large school gathering with religious dress | Filename suggests Eid; date/outcome/policy unknown | Do not label as annual Eid or inclusivity evidence until confirmed. |
| `scout_1.webp`, `scout_2.webp`, `scout_3.webp` | Uniformed scouts marching, working outdoors and posing | No | Underused and authentic. Good candidates for a restrained scouting story without award claims. |
| `debate_1.webp`, `debate_2.webp`, `debate_3.webp` | Students pictured with certificates/trophies | Image details suggest events; public result details unverified | Strong but high claim-risk. Use only after management verifies captions/results, or use a neutral participation caption. |
| `music_dance_drama.webp` | Students in branded shirts celebrating with a trophy | No | Filename conflicts with visible context. Do not use as MDD evidence. |
| `amus_dance_and_drama.webp` | Needs event/context confirmation before an MDD-specific caption | No | Do not rely on filename; inspect with school before use. |
| `gallery2.webp` | Students and adults pictured beside a branded bus | No | Do not imply a trip, fleet, transport service or destination. |
| `cake_cutting.webp` | Students and adults cutting a cake at an event | No | Strong event image, but occasion, date, people and permission are unknown. Defer. |
| `bus_fleet.webp` | Two branded buses pictured on a road | No | Filename risk is high. Do not make ownership, fleet-size or transport-service claims. |
| `boys_dormitory.webp`, `girls_dormitory.webp` | Buildings are pictured | No | Do not identify them as current dormitories or describe completion/capacity without confirmation. |
| `mombasa_cathedral.webp`, `prayer_time.webp` | Choir/church settings are pictured | Venue may be visible; school participation/outcome still needs proof | Do not use to support the legacy international-choir claim yet. |

## J. Unsupported or deferred claims

- All legacy MDD results, dates, streaks, national placements and the named international choir result.
- All legacy debate outcomes, named competitions, placements, scoreline, named student representation and Bible Quiz result.
- All scouting awards, national representation, mango-farm and sustainability claims.
- Dormitory completion/construction status, capacity, boarding eligibility, fees, supervision, pastoral care and weekend routine.
- Fixed meals, menu and nutrition claims.
- Annual Eid, all-faith/inclusion, denomination, chapel programme, worship schedule and mandatory-faith claims.
- Any club roster, student-leadership structure, community-service programme, event date or institutional award not confirmed by management.
- Transport/fleet ownership, availability, routes, schedules and safety claims.
- Cake-event identity, milestone status and participant identification.

## K. Safe implementation opportunities

1. Reframe the page around three distinct, evidence-led themes: shared residential rhythm, student community and participation beyond lessons. This would remove repetition without adding operating-policy claims.
2. Replace one repeated generic community image with `students_in_a_hall.webp`, captioned only as a student gathering in a school hall.
3. Give MDD, debate and scouting separate but brief photo-led treatments using neutral participation language. Prefer the scouting image set; use debate imagery only with non-result captions until verified.
4. Keep faith/community copy observational and image-led. A confirmed management-approved caption could later make a faith/choir image more specific; until then, avoid policy language.
5. Make the Homepage a concise Life-at-Amus introduction and link to this page for the fuller boarding/community/activities narrative.
6. Keep sports records, results and athlete progression on Sports; keep Gallery as image discovery rather than a second Life-at-Amus narrative.

## L. Information requiring school confirmation

**Boarding:** current boarding structure and eligibility; dormitory names/current status; supervision and pastoral/student-support arrangements; meal provision and any approved wording; weekend routine; current fees/availability contact path; and any transport offer.

**Student life:** official current clubs; student leadership structure; regular activities; community-service programmes; and which programmes are active in the present school year.

**Faith/community:** approved school faith identity; whether any worship/choir/fellowship activities may be described; approved wording about students of different faiths; and permission/context for Eid, church and choir photographs.

**MDD:** official programme name and structure; confirmed events/competitions; dated results/awards with source links or official records; and approved captions for MDD/choir imagery.

**Debate:** programme or club status; competition participation; source-backed results; consent for named student references; and approved captions for certificates/trophies.

**Scouting:** programme status; activity frequency; confirmation of the tree-planting image context; any awards/representation with source records; and approved captions.

**Event photography:** identify the occasion/date/participants in `cake_cutting.webp`; identify `gallery2.webp`; confirm buildings shown in the dormitory-named files; and approve all public captions or dates.

## M. Recommended Phase 2E implementation tranche

**Ready without management confirmation:**

- Reduce duplicated boarding/community copy and strengthen section distinction within the existing layout.
- Use authentic student-life images only with literal, neutral captions; `students_in_a_hall.webp` and the scouting set are the safest candidates.
- Keep MDD, debate and scouting wording to participation/observation, without rankings, awards, dates, programme scope or named people.
- Retain the current restrained faith/community wording or make it even more observational; do not create a faith-policy section.
- Preserve existing links and route ownership: Life at Amus for residential/community/co-curricular experience, Sports for competitive evidence, Gallery for visual browsing.

**Deferred pending management confirmation:**

- Any competition result, award, placement, recurring festival, church/Eid policy, club list, boarding operation detail, transport detail, leadership structure, service programme and all event captions/dates.

## Audit boundary

`PHASE_2E_LIFE_AT_AMUS_AUDIT.md` is an internal planning document only. It is not imported by Astro, is not in `public/`, and must not be emitted into `dist/`. No website UI, page, component, CSS, media registry, content-status file, Git remote, main branch or Netlify setting was changed during this audit.

## Safe implementation update

- Refined the existing six Life at Amus sections without adding a new programme, result, award, policy or operating detail.
- Separated the page into a concise overview, residential rhythm, shared community, faith/reflection, creative participation and practical participation/teamwork.
- Replaced the repeated `lifeCommunity` image with `students_in_a_hall.webp`, using the neutral alt text "Students gathered together at Amus College School".
- Replaced the competition-oriented debate/scouting image pair with one authentic scouting image, `scout_1.webp`, and a literal participation-level alt text.
- Kept MDD, debate, faith and scouting copy at participation level. No legacy result, award, schedule, denomination, club roster, boarding-operation, transport or event claim was introduced.
- Homepage source was reviewed and left unchanged: it remains a concise signpost rather than a second full student-life narrative.
