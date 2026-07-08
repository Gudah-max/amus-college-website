# Product

## Register

brand

## Users

Primary: prospective parents and students evaluating Amus College School (a boarding secondary school in Bukedea District, Uganda) — deciding whether to enroll. The main job-to-be-done is admissions conversion: build enough trust and clarity in a few minutes of browsing that a family starts the admissions process.

Secondary: current families needing practical information (academics, contact, sports programs, gallery of school life). Tertiary: sponsorship/partnership prospects (e.g. corporate sponsors like Chint Uganda) assessing the school's credibility and community reach before committing to a partnership.

A meaningful share of traffic is on mobile data in Uganda — mobile performance and legibility are not optional polish, they're core to reaching the primary audience.

## Product Purpose

A static marketing/institutional website that represents the school's academic and sporting achievements, admissions process, and community life clearly enough to convert prospective families into applicants and to support secondary asks (donations, sponsorships, partnerships). Success looks like: a visitor leaves with a clear, trustworthy impression of the school and either starts admissions or has the information they came for, without hitting unfinished-looking placeholder content or conflicting facts (stats, dates) that undermine credibility.

## Brand Personality

Established, warm, trustworthy — with an aspirational undertone. "A school with heritage and momentum, not a startup, not a template." The school motto, "Let There Be Light," is the design thesis: warmth and clarity, not flash. Premium here comes from restraint and consistency (a tailored-suit feel), not from adding more — the site's current gap isn't missing features, it's unfinished craft (emoji icons, placeholder blocks, misaligned spacing, conflicting stats).

## Anti-references

- The generic AI-default look: warm cream background + high-contrast serif + terracotta/clay accent (`#D97757`-ish). Explicitly avoid drifting toward terracotta — the real brand is red/navy/gold.
- Emoji used as icons anywhere in the interface.
- Numbered `01 / 02 / 03` section markers, except where content is a genuine sequence (e.g. the admissions 4-step process legitimately qualifies; program cards do not).
- Pure saturated red (`#FF0000`) or pure yellow (`#FFFF00`) — cheap, low-contrast.
- Filling every corner — whitespace reads as confidence, not emptiness.
- Side-stripe borders, gradient text, decorative glassmorphism, the generic "hero-metric" template, identical repeated card grids, tiny uppercase tracked eyebrows on every section — standard AI-slop tells to actively avoid per the design system's own craft bar.

## Design Principles

1. **Restraint over addition.** Fix craft (spacing, consistency, finished detail), don't expand scope. One bold signature move (the gold "light" glow tied to the motto) carries the drama; everything else stays disciplined.
2. **One consistent system, not per-page improvisation.** Every color, size, radius, and shadow traces back to a shared token in `design-system.css`. No hard-coded hex values in components, no page inventing its own bespoke card pattern.
3. **Real content over placeholders.** Nothing ships with visible "placeholder" text, mismatched photo filenames, or conflicting numbers between pages. If real content isn't available yet (e.g. a testimonial photo), the interim treatment must look intentional, not unfinished.
4. **Mobile-first, performance-aware.** Given the audience's mobile-data usage, image weight, lazy-loading, and font-loading strategy are load-bearing for actually reaching the primary user, not just visual nice-to-haves.
5. **Motion with a purpose and an off switch.** Scroll-reveal and count-up support the "aspirational" feel but must never gate content visibility, and must fully respect `prefers-reduced-motion`.

## Accessibility & Inclusion

WCAG AA as the floor: body text ≥4.5:1 contrast against its background, large text ≥3:1. Gold is never used as text on a light surface (fails contrast) — accent/glow/icon-fill only. Visible keyboard focus (gold outline) on every interactive element. All images carry meaningful alt text. Semantic HTML (`<nav>`, `<main>`, `<section>`, `<button>` for actions). `prefers-reduced-motion` fully respected — animations disable, final state shows instantly. Minimum 44px tap targets on mobile.
