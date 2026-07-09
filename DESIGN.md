---
name: Amus College School
description: A warm, established red/navy/gold design system built around the school motto "Let There Be Light."
colors:
  brand-red: "#C0272D"
  brand-red-dark: "#9E1F24"
  brand-navy: "#14264A"
  brand-navy-dark: "#0E1B34"
  brand-gold: "#F4B41A"
  brand-gold-soft: "#FBE7B4"
  ink-900: "#0E1B34"
  ink-700: "#2A3A57"
  ink-500: "#5B6B85"
  ink-300: "#A9B4C6"
  bg: "#F8F7F4"
  surface: "#FFFFFF"
  surface-tint: "#F1EEE8"
  border: "#E7E2D9"
  success: "#2E7D5B"
  error: "#C0272D"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 3.5vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
  full: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "24px"
  6: "32px"
  7: "48px"
  8: "64px"
  9: "96px"
  10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.brand-red}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.brand-red-dark}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.brand-navy}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-700}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: Amus College School

## 1. Overview

**Creative North Star: "Let There Be Light"**

The school motto is the design thesis, not a decoration on top of it. Every premium choice in this system traces back to warmth and clarity: a soft gold glow behind the hero headline, a thin gold underline on section labels, a gold spark on achievement stats. That is the one bold, memorable move in the system — everything surrounding it stays disciplined and quiet.

This is a "tailored suit, not off-the-rack" system. The site's original gap was never missing features — it was unfinished craft: emoji standing in for icons, visible placeholder blocks, spacing that was "almost" aligned, stat numbers that disagreed page to page. This system fixes craft, not scope. It explicitly rejects the generic AI-marketing look (warm cream background, high-contrast serif, terracotta accent) in favor of the school's real, established red/navy/gold — and rejects decorative clutter (side-stripe borders, gradient text, glassmorphism, tiny uppercase eyebrows on every section, numbered `01/02/03` markers except where content is a genuine sequence) in favor of restraint.

**Key Characteristics:**
- One signature move (the gold light-glow), everything else quiet and consistent
- Warm off-white surfaces, never stark white or cream-default
- A serif with real weight (Fraunces) paired against a clean, warm sans (Plus Jakarta Sans)
- Soft, warm-tinted, layered shadows — never a hard flat drop-shadow
- Generous whitespace read as confidence, not emptiness

## 2. Colors

The palette is a committed red/navy/gold system: navy carries structure and text, gold carries the "light" motif as a rare accent, red carries action and urgency. Nothing pulls toward cream, terracotta, or pastel — this is warmth through typography and imagery, not through a beige body background.

### Primary
- **Amus Red** (#C0272D): primary actions, links, key accents — the color of "do this now" (CTAs, active nav states, the admissions focus ring).

### Secondary
- **Founding Navy** (#14264A): structural blocks — headers, footer, hero overlays, and all heading text on light surfaces. This is the color of institutional weight.

### Tertiary
- **Signature Gold** (#F4B41A): the "light" accent. Used only as accent — glows, underlines, icon fills on dark backgrounds, achievement sparks. Never used as body text on a light surface (fails contrast).

### Neutral
- **Deepest Navy** (#0E1B34): primary text color (`ink-900`), never pure black.
- **Mid Navy-Ink** (#2A3A57): body text (`ink-700`).
- **Muted Slate** (#5B6B85): captions, meta text (`ink-500`).
- **Faint Slate** (#A9B4C6): placeholders, disabled state (`ink-300`).
- **Warm Paper** (#F8F7F4): page background — warm off-white, deliberately *not* full cream (`bg`).
- **Pure Surface** (#FFFFFF): card backgrounds (`surface`).
- **Tinted Band** (#F1EEE8): alternating section backgrounds (`surface-tint`).
- **Hairline** (#E7E2D9): borders (`border`).

### Named Rules
**The Rarity Rule.** Gold appears as a glow, an underline, or a spark — never as a fill covering more than a sliver of any surface, and never as text on a light background. Its rarity is what makes it read as "light," not decoration.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)

**Character:** A warm, optically-sized serif that reads "crafted and established" paired against a clean, highly-legible sans built for mobile-data readers. The contrast between the two — editorial weight above, plain-spoken clarity below — is the pairing's whole point; never let them blur into one register.

### Hierarchy
- **Display** (500, `clamp(2.5rem, 5vw, 4rem)`, line-height 1.1, letter-spacing -0.02em): hero H1 only.
- **Headline** (500, `clamp(2rem, 3.5vw, 2.75rem)`, line-height 1.15, letter-spacing -0.01em): section H2.
- **Title** (500, 1.5rem, line-height 1.2): H3, card titles.
- **Body** (400, 1.125rem/18px, line-height 1.65, max-width ~68ch): all paragraph copy. Color `ink-700`, never pure black.
- **Label** (700, 0.8125rem/13px, line-height 1, letter-spacing 0.08em, uppercase): eyebrows and captions, colored `brand-red` with a short gold underline accent — used sparingly, not on every section.

### Named Rules
**The Two-Voice Rule.** Only Fraunces and Plus Jakarta Sans exist in this system. No third family, no default system fallback creeping into production — every heading is Fraunces, every paragraph and UI label is Plus Jakarta Sans.

## 4. Elevation

Layered and ambient. Surfaces at rest float on a soft, warm-navy-tinted shadow — depth reads like light falling across paper, not like a hard object casting a shadow. Shadows deepen and lift on hover/interaction; they are never sharp-edged or pure black, and never flat/absent by default on elevated surfaces (cards, floating elements).

### Shadow Vocabulary
- **Ambient-sm** (`box-shadow: 0 1px 2px rgba(14,27,52,0.06)`): resting state for subtle surfaces (inputs, small chips).
- **Ambient-md** (`box-shadow: 0 6px 20px rgba(14,27,52,0.08)`): default resting shadow for cards.
- **Ambient-lg** (`box-shadow: 0 18px 48px rgba(14,27,52,0.12)`): hover/lift state, modals, floating elements.

### Named Rules
**The No-Flat-Card Rule.** A card never sits at `shadow: none`. If a surface needs to look flat, it uses a hairline `border` instead of removing elevation — flatness and borderlessness are not the same design move.

## 5. Components

Tailored and settled: confident but quiet. Generous internal padding, a soft settle-into-place motion on hover (`translateY` + shadow deepening), nothing bouncy, nothing flashy. Every interactive element earns a real hover, focus, and active state — no exceptions.

### Buttons
- **Shape:** rounded corners (14px / `rounded.md`).
- **Primary:** Amus Red (#C0272D) fill, white text, weight 600, padding `14px 28px`. Hover: Red-Dark (#9E1F24) fill + `translateY(-2px)` + Ambient-md shadow, `180ms` ease-out.
- **Secondary:** transparent fill, 1.5px Founding Navy border, navy text. Hover: navy fill, white text.
- **Focus (all buttons):** 3px gold outline, 2px offset — non-negotiable, not a nice-to-have.
- Minimum 44px tap target height on mobile.

### Cards
- **Corner Style:** 14px radius (`rounded.md`).
- **Background:** Pure Surface (#FFFFFF).
- **Shadow Strategy:** Ambient-sm at rest, Ambient-md on hover, per the Elevation section.
- **Border:** 1px Hairline (#E7E2D9).
- **Internal Padding:** 24px (`spacing.5`), equal-height siblings in a grid.

### Inputs / Fields (Admissions form)
- **Style:** Pure Surface background, 14px radius, 1.5px Hairline border, `14px 16px` padding, clear labels above fields (never placeholder-only).
- **Focus:** border shifts to Amus Red with a subtle red glow ring.
- **Error / Disabled:** error state uses `--error` (#C0272D, same as brand-red — intentional, urgency reads the same); disabled uses Faint Slate.

### Navigation
- Founding Navy text on light pages, sticky on scroll, active-link state underlined in gold. Mobile: hamburger collapses to a full-width navy panel.

### Icon Badge (Signature Component)
A 48px circular badge, Signature-Gold-Soft (#FBE7B4) background, Founding Navy icon (1.5px stroke, 24px), used consistently everywhere an icon appears — this is what replaces every emoji in the system. One shape, one treatment, no exceptions per page.

## 6. Do's and Don'ts

### Do:
- **Do** use Fraunces for every heading and Plus Jakarta Sans for every paragraph/label — no third font, no silent fallback to a browser default.
- **Do** keep gold rare: glows, underlines, sparks, icon fills on dark backgrounds only — never text on a light surface.
- **Do** give every card an ambient, warm-tinted shadow at rest (Ambient-sm minimum) and deepen it on hover.
- **Do** give every interactive element a real hover, focus-visible (3px gold outline), and active state.
- **Do** use the 48px circular icon badge for every icon, replacing every emoji site-wide.
- **Do** reserve numbered `01/02/03` markers for genuine sequences (the admissions 4-step process) — never for program/feature cards that aren't actually ordered.

### Don't:
- **Don't** use the generic AI-default look: warm cream background + high-contrast serif + terracotta/clay accent (`#D97757`-ish). This palette is anchored in red/navy/gold, not terracotta.
- **Don't** use emoji as icons anywhere in the interface.
- **Don't** use pure saturated red (`#FF0000`) or pure yellow (`#FFFF00`) — always the tuned brand values.
- **Don't** use `border-left`/`border-right` as a colored accent stripe on cards or callouts.
- **Don't** use gradient text (`background-clip: text` with a gradient).
- **Don't** use decorative glassmorphism, the generic SaaS hero-metric template, or identical repeated card grids as default scaffolding.
- **Don't** put a tiny uppercase tracked eyebrow above every section — it's a legitimate label used sparingly, not a reflexive template element.
- **Don't** ship a flat, shadowless card — use a hairline border instead if true flatness is the goal.
- **Don't** use `transition-all` — animate only `transform` and `opacity` (plus color/shadow where meaningful), and always provide a `prefers-reduced-motion` alternative.
