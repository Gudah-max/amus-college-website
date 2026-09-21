# Phase 2D institutional-story audit

**Scope:** Internal research and planning record only. Prepared on 21 September 2026 from the Phase 2C checkpoint `f76bfa42fabc3ec53894d0c728a34ed6e0345f13`. No institutional-history claim in this document is approved for public website use unless noted as current approved material.

## A. Current Our School structure

`src/pages/our-school.astro` currently has six public sections:

1. **Page introduction** — Amus as a boarding school in Bukedea District, where learning, character and community shape everyday school life.
2. **Lead / overview** — campus panorama with “Learning and life, held together”; uses `schoolIdentity.overview` and a second paragraph about study, routines and community.
3. **Purpose and direction** — Vision and Mission from `src/data/internal-pages.ts`.
4. **Values** — five values: Academic excellence, Moral integrity, Physical wellness, Spiritual growth, and Social responsibility.
5. **Headteacher welcome** — Richard Olupot, “Headteacher”, with a generic welcome message.
6. **Campus editorial** — a campus aerial plus a student-community image, followed by a contact/learning CTA.

### Strong content to preserve

- The clean sequence from school identity to Vision/Mission/Values is useful and already matches the Stage 1 system.
- The page locates the school in Bukedea District without inventing history.
- The campus aerial establishes place, while the values section gives the page an institutional purpose beyond facilities.
- The current page does not publish founding dates, founder names, enrolment totals, campus-size data or unsupported institutional awards.

### Thin, generic or duplicated content

- “Learning and life, held together”, the overview text and the second paragraph repeat the same study/community/boarding idea in close succession.
- The Headteacher message is materially identical to the Homepage `HeadteacherWelcome` component.
- The campus narrative repeats the Homepage `CampusFacilities` idea that campus life combines teaching spaces, study, sport and boarding rhythms.
- Vision and Mission are clear but separated from the Values section by little institutional context; an approved short history or purpose narrative would make the sequence more distinctive later.

## B. Homepage overlap

The Homepage is an overview and conversion route; Our School should be the deeper institutional page.

| Shared theme | Homepage treatment | Our School treatment | Recommendation for a later approved implementation |
| --- | --- | --- | --- |
| School identity | Hero gives school, Bukedea, boarding and O-Level/UCE + A-Level/UACE summary. | Introduction and lead restate boarding, Bukedea, learning, character and community. | Keep the Homepage summary short; make Our School’s lead more place- and institution-specific without adding unverified history. |
| Values / community | `WhyAmus` uses “Learning, character and community” and three principles. | Full Vision, Mission and five-value presentation. | Homepage should retain the short three-principle introduction; Our School should remain the sole detailed values/purpose location. |
| Headteacher | `HeadteacherWelcome` includes the photo, title and complete message. | Same photograph, title and complete message. | Display the full message on one route only. Our School is the appropriate primary leadership location; Homepage can link there with a short invitation. |
| Campus | `CampusFacilities` has facility/campus imagery and a general campus-life statement. | Campus editorial repeats a general campus-life statement. | Homepage keeps a visual teaser; Our School can use a fuller campus/environment story and a different image treatment. |
| Boarding | Homepage has a dedicated Boarding Life section. | Repeated in intro, overview and CTA. | Our School should mention boarding only as part of identity, then link to Life at Amus for the fuller experience. |

## C. Current verified institutional claims

“Verified” here means current approved material in the active Astro implementation or `site.ts`; most items remain marked `working-source` in `content-status.ts` and still need client confirmation before being expanded.

| Claim | Current source | Status / use |
| --- | --- | --- |
| School name: Amus College School | `src/data/site.ts` | `approved` in content status. |
| Motto: “Let There Be Light” | `src/data/site.ts`; crest/brand assets | Current approved material; history/meaning not documented. |
| Location: Bukedea District, Uganda; address references Sapir Hill, Kachumbala County | `src/data/site.ts` | Current public material; `location` is `working-source`. |
| O-Level/UCE and A-Level/UACE education | Homepage, Learning, Admissions | `academicStages` is `working-source`; do not expand programme claims without confirmation. |
| Boarding-school identity | Homepage, Our School, Life at Amus | `boardingOnly` is `working-source`; avoid capacity/facility claims. |
| Vision, Mission and five displayed values | `src/data/internal-pages.ts` | `missionValues` is `working-source`; preserve as current identity copy but seek formal approval before presenting as quoted institutional policy. |
| Richard Olupot is displayed as Headteacher | Homepage, Our School, media alt text | Name/title is current material, but `headteacherWelcome` is provisional and leadership directory is awaiting confirmation. |

## D. Legacy institutional claims

`about.html` is legacy material and is not a verified historical source.

| Legacy claim | Classification | Audit disposition |
| --- | --- | --- |
| “Our Story”; “Built on a Legacy of Light”; “journey of excellence, passion, and transformation” | LEGACY ONLY — DO NOT REPUBLISH YET | No foundation story, dates or evidence supplied. |
| “Premier academic institution in Uganda” / “world-class” facilities and students | LEGACY ONLY — DO NOT REPUBLISH YET | Promotional superlatives without defined evidence. |
| Vision and Mission text | PLAUSIBLE BUT NEEDS CONFIRMATION | Matches current data, but formal approved wording/source is not recorded. |
| Seven values including Economic Empowerment | CONTRADICTORY / UNCLEAR | Current site shows five values and omits Economic Empowerment. Confirm the official current list. |
| Richard Olupot as “Mr. Richard Olupot”, “The Headteacher” | PLAUSIBLE BUT NEEDS CONFIRMATION | Current pages use “Richard Olupot” and “Headteacher”; confirm official title, honorific and bio permission. |
| Director of Studies / Head of Co-Curricular leadership roles | LEGACY ONLY — DO NOT REPUBLISH YET | No names, current-status evidence or leadership approval. |
| Professional-grade football turf hosted 2024 FEASSA East African Games | NEEDS VERIFICATION | Sports sources support 2024 FEASSA-related content, but facility/hosting wording must be separately verified before an institutional milestone claim. |
| Girls’ dormitory complete; boys’ dormitory under construction and due end-2026 | TIME-SENSITIVE / DO NOT REPUBLISH YET | Current status is unknown; content status flags dormitory facts as awaiting confirmation. |
| 2,000+ students, 40+ qualified teachers, 95% pass rate | LEGACY ONLY — DO NOT REPUBLISH YET | Unsupported statistics. |
| History/founding/founder/milestone narrative | NOT FOUND | The legacy About page uses historical language but provides no founding year, founder, chronology or source. |

## E. Contradictions and uncertainties

1. **Values:** legacy About page has seven values, including Economic Empowerment; current Our School has five. No approved source identifies the official set.
2. **Headteacher wording:** legacy uses “Mr. Richard Olupot” and “The Headteacher”; active pages use “Richard Olupot” and “Headteacher”. The title has not been formally confirmed.
3. **Leadership structure:** the legacy page names unfilled role cards (Director of Studies; Head of Co-Curricular) without people or verification; active site has no directory.
4. **Boarding/facilities:** legacy makes time-sensitive dormitory, capacity and completion-date claims; active site correctly avoids them, while content status remains unresolved.
5. **Institutional scope:** active copy repeatedly says boarding, Bukedea and whole-person development, but neither current nor legacy material supplies founding context or a verified institutional chronology.
6. **“Legacy of Light”:** the phrase implies history but has no documented origin; only the motto itself is available.
7. **Photography labels:** `academic_awards_ceremony.webp` is a UACE 2025 results graphic, not an awards-ceremony photo. `cake_cutting.webp` visibly records a cake-cutting event but does not identify its occasion or date.

## F. Leadership wording

### Current active wording

- Homepage component: “Richard Olupot” / “Headteacher”; generic welcome message.
- Our School: same name, title, photo and message.
- `media.ts`: “Richard Olupot, Amus College School Headteacher”; status `working-source`.

### Legacy wording

- “Mr. Richard Olupot” / “The Headteacher”.
- “Providing visionary leadership that steers Amus College toward excellence in all dimensions of education.” This is a biographical/performance claim without supporting source.

### Conclusion

There is no direct title conflict (all references use Headteacher), but honorific, formal title, current office-holder status, preferred portrait and approval of any message remain unconfirmed. Avoid a leadership biography or chronology until management confirms it. The full welcome should not remain duplicated across Homepage and Our School in a future tranche.

## G. Photography opportunities

| Asset / visual finding | Current use | Suitable support | Cautions / recommendation |
| --- | --- | --- | --- |
| `src/assets/amus-college-campus-panorama.webp` / `media.schoolLead` | Our School lead; Gallery campus item | Campus overview and place | Strong approved aerial panorama; avoid using it again as another large Our School image. |
| `src/assets/amus-college-campus-aerial.webp` / `media.campusAerial` | Our School campus editorial | Environment/campus context | Strong current image; caption status awaiting confirmation. |
| `images/campus_aerial_view.webp` | Legacy About only; duplicate exists in `src/assets` | Campus overview, building/field relationship | Strong, underused aerial showing building and pitch; do not claim field specifications or event history. |
| `images/hero_new.webp` / `images/hero_building.webp` | Legacy Gallery / not active Astro | Building/environment | Strong wide building image; likely near-duplicate subject matter to other aerials. Use one differentiated crop only, rather than adding another generic campus image. |
| `images/students_in_a_hall.webp` | Current Gallery community item | Institutional life, student community, assembly-like environment | Strong underused candid community image. Event, date and purpose are not confirmed; caption descriptively. |
| `images/students_smiling_in_school.webp` | Not active Astro | Student community / everyday environment | Strong candid community photograph; likely useful as an alternative to the currently reused `welcome_students_new.webp`. No event claim. |
| `images/picture_of_students_in_blue.webp` | Legacy Homepage only | Student community | Underused, but inspect/confirm appropriate representation before public reuse. |
| `images/bus_fleet.webp` | Legacy Gallery only | School environment / transport context | Do not infer ownership, current fleet size or transport service from the filename/image alone. |
| `images/cake_cutting.webp` | Not active Astro | Community event / milestone only after confirmation | Strong event photograph; event identity, date and participants must be confirmed before using it as a milestone. |
| `images/admission_requirements_students.webp` | Legacy Admissions only | Student community | Do not use it to imply admissions requirements or intake status. |
| `images/classroom_new.webp`, `images/library_students_new.webp` | Learning after Phase 2C | Academic storytelling | Already used appropriately; avoid duplicating on Our School. |
| `welcome_students_new.webp` / `media.studentsCommunity` / `media.whyAmus` | Homepage and Our School | Student community | Heavily reused; replace on one route rather than add more copies. |
| `richard_olupot_amus_head_teacher.webp` / `media.headteacher` | Homepage and Our School | Leadership | Repeated use is appropriate only if the duplicate welcome copy is resolved. |

## H. Safe implementation opportunities

These can be implemented without founding information, historic dates, leadership chronology, statistics or unverified awards:

1. Make the Our School lead more place-led using an underused campus/building image, while keeping copy to the approved location and school-community themes.
2. Replace the heavily repeated student-community image with `students_smiling_in_school.webp` or `students_in_a_hall.webp`, with factual descriptive alt text and no event claim.
3. Distinguish the page hierarchy: Our School holds Vision, Mission and Values; Homepage retains only a short identity teaser that links to Our School.
4. Move the full Headteacher welcome to one primary route (preferably Our School), replacing the other occurrence with a short, non-biographical link or removing it after management confirms preferred treatment.
5. Refine the campus narrative around an environment for learning, shared routines and participation; link to Learning, Life at Amus and Sports rather than repeating their detailed claims.
6. Give Vision, Mission and Values clearer visual separation within the existing design system without altering their unconfirmed wording or creating a history timeline.

## I. Information requiring school confirmation

Request a concise, management-approved response covering:

- Official founding year and founder/founding body.
- Why the school was established and an approved short institutional history.
- Original location/campus, if materially different from the current campus.
- Major campus-development milestones and facilities that may be named publicly.
- Major academic and sporting milestones approved for an institutional-history page.
- Leadership chronology, current leadership titles and whether any biographies should be published.
- Official Vision, Mission and full current values list (including whether Economic Empowerment is an official value).
- Meaning/history of “Let There Be Light”, if the school wants it explained publicly.
- Whether archival photographs, dates and captions are available for history/milestone use.
- Identification/approval of the event in `cake_cutting.webp`, plus permission to use it.
- Confirmation of current status/appropriate wording for transport, boarding and facilities imagery.

## J. Recommended Phase 2D implementation tranche

**Ready before management history confirmation:**

1. Refine Our School’s introductory and campus copy to remove repeated generic phrases while retaining existing approved school identity.
2. Use one underused, authentic community/campus photograph in place of a repeated image, with neutral factual alt text.
3. Remove the duplicate full Headteacher message from either Homepage or Our School, retaining it only once and linking between routes as appropriate.
4. Keep Vision/Mission/Values prominent but do not label them as a historic charter or add interpretation.

**Deferred pending management confirmation:**

- Founding narrative, timeline, founder/founding-body information and historical milestones.
- Named leadership directory/biographies and formal title changes.
- Dormitory/facility progress, transport/fleet claims, enrolment/staff/pass-rate statistics and “world-class” language.
- Event-based use of cake-cutting or archival photos, and all date-specific captions.

## Audit boundary

This document is not imported by Astro, is not in `public/`, and must not be emitted into `dist/`. No website UI, code, content-status metadata, media registry, Git remote or Netlify setting was changed during this audit.

## Safe implementation update

- Our School now has a more place-led Bukedea introduction and a shorter lead paragraph that distinguishes academics, student life and sport without adding institutional-history claims.
- The campus editorial now uses the underused `campus_aerial_view.webp` and `students_smiling_in_school.webp` images with descriptive, non-event-specific alt text.
- The Homepage `HeadteacherWelcome` component is now a concise teaser linking to `/our-school`; the complete welcome remains on Our School.
- Vision, Mission and the current five-value set are unchanged.
- Founding history, founding body, milestones, leadership chronology, facilities/boarding claims, statistics, the cake-cutting event identity and archival photography remain deferred pending management confirmation.
