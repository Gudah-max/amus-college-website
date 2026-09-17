# Amus College V2 migration notes

## Phase 3C scope

Only the homepage and shared Astro foundation are migrated. The planned routes `/our-school`, `/learning`, `/life-at-amus`, `/sports`, `/admissions`, `/gallery`, and `/contact` remain intentionally absent. This branch must not be deployed or merged until those routes and legacy URL redirects are completed and approved.

## Netlify forms contract

Later route migration must preserve Netlify's static form detection and the existing production contracts: form names, hidden `form-name` fields, POST behavior, thank-you destinations, labels, validation, and keyboard accessibility. No form markup or Netlify configuration is changed in Phase 3C.

## Content verification gates

Do not publish provisional Headteacher copy or awaiting-confirmation facts as confirmed institutional claims. Current results, A-Level combinations, office hours, sports honours, intake dates, capacity, scholarships, safeguarding/legal wording, and final dormitory status require content approval.
