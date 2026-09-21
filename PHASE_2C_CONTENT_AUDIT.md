# Phase 2C content audit — academics and admissions

**Scope:** internal research record only. Prepared on 21 September 2026 from the repository at `b0d1291062a1b83c96ef7154e8a8c089687e151a`, the supplied result graphics, and the external sources linked below. Nothing in this document is approved for website publication unless specifically marked safe.

## A. Current Learning-page claims

| Claim or content | Location | Classification | Audit note |
| --- | --- | --- | --- |
| Amus offers O-Level/UCE and A-Level/UACE education | `src/pages/learning.astro` | LIKELY BUT NEEDS SOURCE | Present throughout the current site; `academicStages` is `working-source` in `src/data/content-status.ts`. Confirm the current programme and centre/campus scope. |
| O-Level is Senior 1–4; A-Level is Senior 5–6 | Learning pathways | LIKELY BUT NEEDS SOURCE | Conventional programme description, but the school should confirm its current entry-stage wording. |
| Broad O-Level curriculum / core and elective study | Learning pathways | LIKELY BUT NEEDS SOURCE | Non-numerical, but not substantiated by a current school curriculum record. |
| UCE preparation; revision, mock examinations and past-paper practice | Learning pathways | LIKELY BUT NEEDS SOURCE | Do not turn into a quantified or outcome-based claim without the school’s confirmation. |
| UACE preparation and focused subject progression | Learning pathways | LIKELY BUT NEEDS SOURCE | Same caution. |
| “Current subject combinations are confirmed through the school” | Learning pathways and A-Level note | SAFE / STRUCTURAL | Correctly avoids inventing combinations; retain. |
| O-Level subject list: English Language, Mathematics, Biology, Chemistry, Physics, History, Geography, Computer Studies, Religious Education, Commerce, Fine Art, Literature, Agriculture, Home Economics, French, Luganda | `src/data/internal-pages.ts` | LIKELY BUT NEEDS SOURCE | The legacy page repeats this list, but it is marked only `working-source`; confirm every currently taught/examined subject. |
| A-Level subject list: Mathematics, Physics, Chemistry, Biology, History, Economics, Geography, Literature, Computer Studies, Divinity, General Paper, Entrepreneurship | `src/data/internal-pages.ts` | LIKELY BUT NEEDS SOURCE | The legacy page repeats this list. It does not prove availability in the current intake, nor available combinations. |
| Results will be presented as dated records | `EvidenceRecord` on Learning | SAFE / STRUCTURAL | Good evidence principle. No results are currently displayed. |

### Current Learning-page claims that should not be inferred

- It contains no UCE pass-rate, UACE average, national rank, candidate count, 20-point count, merit-admission, or university-progression statistic.
- It does **not** define A-Level combinations. Keep that restraint until the school supplies the current combinations and entry rules.

## B. Legacy academic claims

`academics.html` is legacy material. It must not be treated as a source of truth or silently reintroduced.

| Legacy claim | Classification | Reason / action |
| --- | --- | --- |
| 2024: 3 students achieved 20 points; 44 entered public universities on national merit | 3 twenty-point scores: candidate source; 44 merit admissions: CLIENT CONFIRMATION REQUIRED | The result graphic and an external report support the 3-score figure. No support was found in this audit for the 44 admissions figure. |
| 2025: 18 students achieved 20 points; 43 government-sponsored national-merit university admissions | REMOVE / DO NOT REUSE | The 2025 result graphic says 17, creating a direct conflict. The 43 figure has no evidence in the materials reviewed. |
| 2023: ranked 3rd in Uganda | REMOVE / DO NOT REUSE | No examination, metric, source or ranking methodology is given. Rankings differ by methodology. |
| 2023: 146 Senior Four and 200 Senior Six candidates sat UNEB examinations | CLIENT CONFIRMATION REQUIRED | Not supported by the 2023 UACE image; it must not be republished without official school/UNEB evidence. |
| 95% UCE pass rate | REMOVE / DO NOT REUSE | No year, cohort, definition of “pass”, or source. |
| “Expert teachers”, “fully exam-ready”, “consistent, high-ranking results across all papers” | REMOVE / DO NOT REUSE as factual performance claims | Superlative / outcome claims lack current evidence. |
| Science, Arts & Humanities, and ICT & Mathematics combinations lead to named university fields | CLIENT CONFIRMATION REQUIRED | The legacy text lists subject groupings, not confirmed combinations; student progression outcomes cannot be inferred. |
| 2023 Scout sustainability award, representation and mango-farm statements | OUT OF SCOPE / NEEDS VERIFICATION | These are not academic-result evidence and require their own evidence trail before reuse. |

## C. Result-image evidence

The images are school-branded promotional graphics, not independent examination records. They are useful candidate evidence and should be retained as internal source material, not published as proof without school confirmation.

### `images/2023_results.webp`

- Reads: “Congratulations U.A.C.E 2023”.
- Displays **12** named students with a 20-point badge: Apio Mariam, Mutyaba Latif, Wayambuka C. K., Nabede A. K., Kayima Rodney, Opio Andrew, Opule Job, Okiror C. S., Magino Isaac, Ijokei Haruna, Kedi Milton A., and Asekenye F.
- The bottom grid appears to show a points distribution, but its low-resolution small type should not be transcribed or published until the original artwork / result schedule is supplied.
- No total candidate count is legible enough for a reliable public claim.
- External comparison: [Kawowo’s 2024 report on the 2023 UACE results](https://kawowo.com/2024/03/06/education-sports-amus-college-school-bukedea-excels-in-2023-a-level-examinations/) identifies ten named 20-point candidates, rather than all twelve shown in the graphic. Do not publish a 2023 total until the school reconciles the image and source report.

### `images/2024_results.webp`

- Reads: “Congratulations U.A.C.E For 2024”.
- Displays 3 named 20-point candidates: Kezala Emma Asher, Lwanga Charles Robert, and Murungi Sincere.
- The legible points grid reads: 20: **3**, 19: **32**, 18: **23**, 17: **28**, 16: **32**, 15: **25**, 14: **19**, 13: **13**, 12: **6**, 11: **1**, 10: **1**, 9: **1**, 8: **1**. These figures sum to **199**.
- This exactly matches the candidate-source article below that attributes the figures to Headteacher Richard Olupot: [Informer, 16 March 2025](https://www.informer.co.ug/uace2024-amus-college-excels-in-uace-2024-headteacher-attributes-success-to-hard-work/).
- Status: **candidate source; obtain school approval / original results schedule before web publication.**

### `images/2025_results.webp`

- Reads: “Congratulations to our top UACE 2025 candidates”, “UACE 2025”, main centre **U3215**.
- The legible points grid reads: 20: **17**, 19: **36**, 18: **66**, 17: **82**, 16: **102**, 15: **74**, 14: **54**, 13: **31**, 12: **15**, 10: **4**, 9: **–**, 8: **1**; total **491 students**. The distribution sums to 491.
- This resolves the legacy 18-vs-17 conflict in favour of **17 on the school-branded graphic**, but still needs school confirmation before publication.
- `images/academic_awards_ceremony.webp` is not a ceremony photograph: it is a wider, clearer duplicate of the same UACE 2025 graphic and displays the same distribution and 491 total.

### Other academic imagery

- `classroom_new.webp`: pupils in Amus uniform reading together outside an academic building. Appropriate only for non-quantified Learning storytelling; it does not establish a class, subject, programme or result.
- `library_students_new.webp`: pupils in Amus uniform holding reading material outside a building. Appropriate only for non-quantified Learning storytelling; it does not establish a library facility, stock, timetable or results.

## D. Public external evidence

All items below are research records only, not approved marketing copy.

| Record | Source and what it reports | Publication status |
| --- | --- | --- |
| 2025 UACE whole-school average | [SchoolsArena UACE 2025 average-points table](https://schoolsarena.com/blog/uace-2025-ugandas-top-100-schools-ranked-by-average-points) lists Amus College School at **16.0 average points** from **491 candidates**, rank **8** in that table. The article describes its ranking method as average points per candidate and separates Amus College School from Amus College School Annex. | NEEDS VERIFICATION. Third-party ranking; do not use “8th nationally” or any ranking language without a verified underlying dataset and method. The 491 count aligns with the school graphic. |
| 2025 UACE Subsidiary Computer | [Scribd-hosted performance dataset](https://www.scribd.com/document/1014432309/Uace-2025-Subsidiary-Computer-Performance-by-School-Data) reports Amus College School ranked **1** in its Subsidiary Computer table, average **1.3**, **413** registered students. | NEEDS VERIFICATION. The requested “Daily Monitor performance dataset” was not retrievable in this audit; this is a secondary host and must not become a promotional claim until the original dataset and its method are confirmed. |
| 2025 subject-performance references | Search results identify subject reporting involving Mathematics, Entrepreneurship Education, Agriculture Principles and Practice, Chemistry, Christian Religious Education and Geography. | NEEDS VERIFICATION. Capture the original individual subject datasets and exact school rows before writing any copy. No broad “top in subjects” statement is safe. |
| 2024 UACE | [Informer, 16 March 2025](https://www.informer.co.ug/uace2024-amus-college-excels-in-uace-2024-headteacher-attributes-success-to-hard-work/) quotes Headteacher Richard Olupot: 199 candidates and the 20–12 point counts shown above. | Candidate source, corroborated by the school graphic. Needs school approval before publication. |
| 2023 UACE | [Kawowo, 6 March 2024](https://kawowo.com/2024/03/06/education-sports-amus-college-school-bukedea-excels-in-2023-a-level-examinations/) reports named 20-point candidates and quotes Headteacher Richard Olupot. | NEEDS RECONCILIATION with the 12 candidates pictured in the school graphic. |

## E. Conflicts and discrepancies

1. **2025 20-point candidates:** legacy `academics.html` says **18**; `2025_results.webp` and the duplicate `academic_awards_ceremony.webp` say **17**. Do not publish either claim until the school confirms the official result.
2. **2023 20-point candidates:** the school-branded graphic pictures **12**; the Kawowo article names **10**. Do not publish a total without an official result schedule.
3. **2023 national ranking:** legacy says “3rd in Uganda”, while ranking claims require an identified year, exam, cohort/campus and methodology. Do not reuse.
4. **2024 candidate distribution:** legacy mentions only 3 twenty-point candidates; the graphic and Informer article provide the full distribution summing to **199**. The legacy page’s separate **44 national-merit admissions** figure remains unsupported.
5. **Office hours:** current `contact.astro` says Monday–Saturday 8:00 AM–5:00 PM and Sundays/public holidays 9:00 AM–2:00 PM. Legacy `contact.html` says Monday–Friday 7:30 AM–5:00 PM and Saturday 8:00 AM–1:00 PM, with no Sunday hours. Confirm before relying on either.
6. **Admissions process:** the legacy page asserts applications are open, spaces are limited, rolling review, entrance assessment/interview, offer letter, early application encouragement, and 48-hour response. The current Astro page intentionally omits these assertions. Treat the legacy claims as unconfirmed.
7. **A-Level entry:** legacy says at least 6 UCE passes and 2 principal passes in chosen combination subjects; current page avoids thresholds. The criteria must be confirmed by the school.
8. **Contact-phone difference in historic assets:** result graphics show `+256 704 291 195` alongside two current numbers; `src/data/site.ts` instead lists `+256 779 964 478` as the third number. Do not restore the historic asset number without confirmation.
9. **Content-status metadata conflict:** `content-status.ts` declares `officeHours` twice, first `awaiting-confirmation` then `working-source`; the latter JavaScript object key wins. This is an internal metadata contradiction, not a reason to treat office hours as confirmed.

## F. Admissions claims

### Current Astro admissions page

| Current claim | Classification | Required action |
| --- | --- | --- |
| Amus is a boarding school for O-Level and A-Level students | NEEDS CLIENT CONFIRMATION | `boardingOnly` and `academicStages` are working-source; confirm current boarding policy, including any exceptions. |
| Families may enquire, arrange a visit or share an enquiry with Admissions | SAFE / STRUCTURAL | Keep, subject to confirmation that visits are currently offered. |
| O-Level documents: PLE results slip, birth certificate, introductory letter, 2 passport photos | NEEDS CLIENT CONFIRMATION | Requirements can change; confirm list and whether originals/copies are required. |
| Minimum PLE aggregate of 12 | TIME-SENSITIVE / CLIENT CONFIRMATION REQUIRED | Threshold must not be treated as permanent. |
| S5: UCE slip, transfer letter, 2 passport photos | NEEDS CLIENT CONFIRMATION | Confirm document list. |
| S5 requirements and combinations are confirmed directly by Admissions | SAFE / STRUCTURAL | Retain; it deliberately avoids a speculative threshold. |
| Fees/payment information available from Admissions | SAFE / STRUCTURAL | Safe only as a contact route; do not add fees or payment terms without a dated fee structure. |
| Ask about scholarships/bursaries | NEEDS CLIENT CONFIRMATION | Avoid implying availability. The phrase should be reconsidered unless the school confirms an active programme. |
| Form: student/guardian details, level, previous school and question | SAFE / STRUCTURAL | Functional enquiry fields, not an admission guarantee. Review privacy/retention wording separately. |

### Legacy admissions claims — do not reintroduce without confirmation

- Applications open; spaces limited; rolling review; early application encouraged.
- Physical application form is available at the office.
- Academic transcripts and “relevant certificates” are required.
- Selected applicants receive an entrance assessment and interview.
- Successful applicants receive an offer letter and enrol after payment/remaining documents.
- Response within 48 hours / 48 working hours.
- A-Level: minimum 6 UCE passes and at least 2 principal passes in chosen combination subjects.
- Bursaries may be available for exceptional students; contact for boarding availability.
- 350 students on academic and football scholarships in 2024.

## G. Client-confirmation requirements

Request a dated, school-approved response covering:

1. Official UACE result schedules or signed school result summaries for 2023, 2024 and 2025, clearly identifying **main centre U3215**, annex status where relevant, candidate count and score distribution.
2. Resolution of the 2025 20-point count (17 vs legacy 18) and the 2023 image/article total discrepancy (12 vs 10).
3. Whether the school authorises any public result-page use, which wording to use, and consent/privacy clearance for displaying named pupils and portraits in historic result graphics.
4. Current O-Level and A-Level curriculum/subject lists, all currently offered A-Level combinations, and whether Computer Studies/ICT naming differs by level.
5. Current admissions cycle: open/closed status, intake levels, dates/deadlines, place availability and visit policy.
6. Official S1 and S5 entry rules, required documents, whether a minimum PLE aggregate applies, UCE/pass requirements, assessment/interview rules, and transfer policy.
7. Current fee structure / payment terms or approved contact-only wording; scholarship/bursary programme status, eligibility and whether any claim may be made.
8. Official Admissions Office contacts, office hours, response expectations and confirmed phone numbers (including whether +256 704 291 195 remains valid).
9. Confirm Richard Olupot’s current title and whether he is authorised to be named as Headteacher.

## H. Safe implementation opportunities

1. **No-number Learning evidence framework:** retain the existing “dated records” principle and add a neutral explanation of where families can request current curriculum/admissions information, only after contact-route confirmation.
2. **Photography:** use `classroom_new.webp` or `library_students_new.webp` as non-quantified study/community imagery, with descriptive captions that do not claim a specific facility or academic outcome.
3. **Admissions information design:** after confirmation, present requirements as “current for [intake/year]” with a reviewed date and explicit enquiry route, rather than evergreen, unqualified promises.
4. **Results record design:** only after signed evidence and consent, create dated/campus-specific result records with source/date/method notes; avoid universal rank language.
5. **Subject information:** after confirmation, retain stage-separated subject lists and add a clear note that combinations/availability may vary by intake.

## I. Claims that must not be published yet

- Any 2025 claim that 18 students scored 20 points; do not substitute “17” until school confirmation either.
- “Ranked 3rd in Uganda” for 2023, or any generic national-ranking language.
- 95% UCE pass rate.
- 44 (2024) or 43 (2025) national-merit / government-sponsored university admissions.
- 2023 candidate totals of 146 S4 and 200 S6.
- Any current A-Level combination, entry threshold, fees, scholarship/bursary, boarding availability, intake date, deadline, applications-open claim, response-time promise, assessment/interview rule, or office-hour statement without client confirmation.
- “Top universities” / international university-progression claims, “expert teachers”, “fully exam-ready”, and “high-ranking results across all papers”.
- Named pupil/result-graphic publication without school approval and privacy clearance.

## Repository review notes

- Current relevant source files: `src/pages/learning.astro`, `src/pages/admissions.astro`, `src/data/internal-pages.ts`, `src/data/media.ts`, `src/data/content-status.ts`, `src/data/site.ts`, `src/pages/contact.astro`.
- Legacy source files reviewed: `academics.html`, `admissions.html`, `contact.html`.
- The audit document is repository-internal; it is not imported by Astro and will not be emitted into `dist/`.

## Safe-tranche implementation update

- The active Admissions page no longer presents a fixed PLE aggregate, mandatory document checklist, fixed S5 document list, or scholarship/bursary availability as confirmed policy. It now directs families to Admissions for current level- and intake-specific guidance.
- `content-status.ts` now has one `officeHours` entry, marked `awaiting-confirmation`.
- Learning now uses the authentic `classroom_new.webp` and `library_students_new.webp` photography for non-quantified classroom, study and reading storytelling. No result figures or result graphics have been added to the public page.
