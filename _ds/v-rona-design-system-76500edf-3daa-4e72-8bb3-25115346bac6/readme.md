# VÉRONA — Design System

VÉRONA is a premium European automotive brand building high-performance luxury vehicles in limited series. The brand's public face is a **cinematic marketing site**, not a dealership catalogue: oversized display type, full-width vehicle photography, asymmetrical layouts, generous negative space, and a rhythm that alternates immersive obsidian sections with warm bone editorial sections. Champagne gold appears only as an accent — a hairline, a unit, one call to action.

This design system contains the brand's visual foundations (color, type, spacing, motion, imagery rules), its reusable UI primitives, and a full click-through recreation of the marketing site.

## Sources

**None were provided.** No codebase, Figma file, deck, brand book, logo file, font binary or photography was attached. Everything here was authored from the written brief (premium automotive, cinematic/editorial, dark ↔ off-white rhythm, champagne accent, restrained motion) and is therefore a **proposal**, not a recreation. Two consequences to know about:

- **No logo exists.** The brand mark is the word "VÉRONA" set in the display serif and widely tracked (`Wordmark`). No graphic mark, badge, crest or monogram was drawn — do not invent one.
- **No photography exists.** Every image slot renders a sanctioned placeholder field that names the shot required. Nothing was generated or sourced from stock.

If a real repo, Figma file or brand book exists, attach it and this system should be re-derived against it.

---

## Content fundamentals

**Voice.** Confident, understated, factual. VÉRONA never sells; it states. Copy is written as if the reader has already decided and simply wants the truth about the object.

**Person.** Third person or no person at all. The brand speaks about the car, not about itself and rarely to "you". "We" is used only when a craftsperson or designer is quoted by name. Never "you'll love", never "we're excited to".

**Sentence shape.** Short declaratives, often a fragment. A period where a lesser brand would use an exclamation. Numbers stand alone.

- Hero: "Silence, then thunder"
- Sub: "A grand tourer built for the hours between cities. Six hundred and twelve horsepower, delivered without theatre."
- Section: "Drawn in one line" / "Ninety hours per cabin" / "Instruments, not gadgets"
- Spec note: "Electronically limited" · "Launch control engaged" · "Figures provisional"
- Scarcity, stated plainly: "Two hundred and twenty cars will be built for 2026."

**Casing.** Sentence case for headings and body — never title case. Uppercase is reserved for *labels*: eyebrows, button text, table keys, badges, units, footer legal. Uppercase always carries wide tracking (0.22em, or 0.32em at micro sizes).

**Numerals.** Figures are set in the display serif at large sizes, with the unit in mono champagne caps ("2.9 SEC", "612 BHP"). Prices use a thin space after the symbol: "€ 268,400". Series years may appear in Roman numerals as a plate: "MMXXVI". Section numbers are two-digit mono: "01", "02".

**Italian, sparingly.** Model names and colours carry Italian (Berlinetta, Tempesta, Sabbia, Notte, Verde Selva, Grigio Modena). Body copy is English. Never faux-Italian marketing phrases.

**Emoji: never.** Not in UI, not in copy, not in social. No exclamation marks in body copy. No exhortations ("Discover!", "Experience the thrill").

**Length discipline.** A section carries one idea: a heading of ≤ 6 words, a paragraph of ≤ 35 words, and a link. If more must be said it becomes a Journal entry, not a longer section.

---

## Visual foundations

**Palette.** Two grounds and one accent.
- *Obsidian* `#08080A → #4A4E55` — the default. Immersive sections, hero, footer, technology.
- *Bone* `#FBFAF7 → #9A9080` — warm off-white editorial sections, applied by adding `class="v-light"` (it re-points every semantic alias; components need no changes).
- *Champagne* `#C6A76A` (600/700 on bone for contrast) — hairlines that matter, section numbers, units, active states, and exactly one filled CTA per view. Never a large champagne fill, never a champagne background.
- *Signals* (positive/caution/critical/info) are for availability and instrumentation only — never decorative.
Two grounds maximum per page; the page alternates them. Full-bleed photography sections count as obsidian.

**Type.** Bodoni Moda (display serif) for anything above ~24px and for numerals; Archivo (grotesque) at 300/500 for body and labels; Archivo Narrow available for dense tables; JetBrains Mono for units, section numbers, tooltips and legal. Hero type is set at `--leading-hero: 0.86` with `-0.035em` tracking — deliberately tighter than the display sizes below it. Body is 300 weight at 1.62 leading on a 58ch measure. Nothing bolder than 600 is ever used; there is no black weight in this system.

**Layout.** 12-column editorial grid, `--gutter` clamp(16→32px), page max 1680px, section padding clamp(72→200px) vertical and clamp(20→96px) horizontal. Layouts are deliberately asymmetric — 0.85/1.15 and 1.2/0.8 splits, never two equal halves for editorial content. Long text columns are sticky while imagery scrolls past. Negative space is a feature: a section may be one line of type and a rule.

**Backgrounds.** Flat color or photography. **No gradients as decoration** — the only gradients in the system are protection scrims (`--scrim-bottom`, `--scrim-left`) and the header's top-down fade. No patterns, no textures, no noise overlays, no hand-drawn illustration, no generated art. Full-bleed imagery is the brand's texture.

**Imagery.** Cinematic, low-key, warm-neutral grade. Dusk, overcast, or single-source studio light; deep blacks, no clipped highlights, no HDR crunch, no saturated skies. Sanctioned ratios: 21:9 (full-bleed hero), 16:9 (film), 4:5 (editorial portrait), 1:1 (detail). Every frame carries `--image-vignette` (a 140px inner shade) so edges recede. Type over photography **always** sits on a scrim gradient — never on a capsule, pill, blurred panel or solid plate.

**Corners and borders.** Radius 0 everywhere. 2/4px exists only for dense instrumentation inputs; round is reserved for the radio dot and the scroll cue. Structure comes from **1px hairlines** at 14% ink (28% for strong) — hairlines above stats, between table rows, under tabs, around configurator panels.

**Cards.** VÉRONA cards are frameless: a photograph, a kicker, a title, a line of body, a link. No shadow, no radius, no border by default (`bordered` adds a hairline box when a panel genuinely needs containment). There are no rounded feature-card grids in this brand.

**Shadows.** Three, and they are almost invisible: `--inset-hairline` (structure), `--shadow-lift` (toasts, floating bars), `--shadow-modal` (dialogs only). Depth is value contrast, not blur.

**Transparency and blur.** Transparency is used for ink (`--text-body` 78%, `--text-muted` 55%, `--text-faint` 34%) and scrims. Blur is used **once**: the 6px backdrop behind a Dialog scrim. No glassmorphism, no frosted panels, no translucent nav bars.

**Motion.** Restrained and long. One entrance animation: a 28px rise + fade over 1100ms on `--ease-editorial` cubic-bezier(.22,1,.36,1), staggered 90ms between siblings (`Reveal`). Photography drifts ≤ 14% of its height on scroll (`Parallax`) and is pre-scaled 1.08 so no edge exposes. State changes are 220ms `--ease-inout`. No bounce, no spring, no scale-in, no rotation, no counters ticking up, no marquees. Type never parallaxes. `prefers-reduced-motion` collapses everything to 1ms.

**Hover.** Ink lightens toward `--text-primary` and hairlines turn champagne; the arrow in a TextLink slides 4px right. Never a background wash, never an underline appearing from nowhere, never a lift or shadow. Image cards scale to 1.03 over 760ms inside a clipped frame.

**Press.** `scale(0.985)` over 120ms plus one step deeper accent (`--accent-press`). No color inversion, no ripple.

**Focus.** `--focus-ring`: a 1px surface gap plus a 3px champagne ring — visible on both grounds, square like everything else.

**Fixed elements.** Only the header is sticky (22px vertical padding; transparent with a top-down protection gradient over photography, solid with a hairline over bone). No floating chat bubbles, no cookie drawers in the kit, no sticky CTA bars.

---

## Iconography

**Set.** [Lucide](https://lucide.dev) outline icons, 1.5px stroke, loaded from `unpkg.com/lucide-static`. **This is a flagged substitution:** no icon set was provided with the brief, and Lucide's thin, geometric, squared-terminal outlines are the closest CDN match to the brand's hairline vocabulary. If a proprietary set exists, drop the SVGs into `assets/icons/` and repoint `Icon`.

**Delivery.** Every icon goes through the `Icon` component, which renders the glyph as a CSS `mask-image` so it always inherits `currentColor` — icons are never colored independently of their text. Sizes are 14 / 16 / 20 / 24px only.

**Usage.** Icons are functional, never illustrative: navigation arrows, gallery paging, dialog close, search, play, checkmarks, social links in the footer. There is no icon beside a heading, no icon in a spec label, no icon grid standing in for photography. Total inventory in use: `arrow-right`, `arrow-left`, `arrow-up-right`, `chevron-down`, `x`, `check`, `play`, `search`, `car-front`, `gauge`, `instagram`, `youtube`, `linkedin`.

**No emoji, ever.** No unicode dingbats as icons. The only non-alphabetic characters used typographically are the middot (·) as a separator and the em dash.

**Assets.** `assets/` holds no logo and no imagery, by the rule above. Where a mark belongs, use `Wordmark`; where a photograph belongs, use `MediaFrame` with a descriptive `placeholder`.

---

## Components

Standard primitive set, authored from the brief (no source library defined an inventory). Grouped by concern under `components/`.

**core/** — `Button`, `IconButton`, `TextLink`, `Icon`, `Wordmark`
**editorial/** — `MediaFrame`, `SpecStat`, `SectionLabel`, `EditorialCard`, `PullQuote`, `Tag`, `Badge`
**forms/** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
**feedback/** — `Dialog`, `Toast`, `Tooltip`
**navigation/** — `NavBar`, `Tabs`
**motion/** — `Reveal`, `Parallax`

Each directory holds `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (what/when + usage), plus one `@dsCard` HTML showing states and variants.

### Intentional additions
- `Icon` — wrapper for the substituted Lucide set, so a future icon swap touches one file.
- `Wordmark` — the type-set brand mark, since no logo asset exists.
- `MediaFrame` — the brand's core vessel; photography is the primary content type, and it also carries the placeholder contract.
- `SpecStat`, `SectionLabel`, `PullQuote`, `EditorialCard` — the editorial/automotive vocabulary the brief describes in place of feature cards.
- `Reveal`, `Parallax` — the two sanctioned scroll behaviours, so "subtle scroll storytelling" is a component call rather than ad-hoc CSS.

## Index

| Path | What |
|---|---|
| `styles.css` | Global entry — `@import` list only. Consumers link this one file. |
| `tokens/fonts.css` | Webfont loading (Google Fonts CDN) + family tokens. |
| `tokens/colors.css` | Ramps, semantic aliases, `.v-light` editorial scope, scrims. |
| `tokens/typography.css` | Fluid display/heading/body/label scale, leading, tracking, type roles. |
| `tokens/spacing.css` | Spacing scale, section rhythm, measures, radii, hairline. |
| `tokens/elevation.css` | Three shadows, focus ring, image vignette. |
| `tokens/motion.css` | Easings, durations, stagger, reveal/parallax constants. |
| `tokens/base.css` | Resets, link colors, selection, `.v-eyebrow` / `.v-display` / `.v-rule` helpers. |
| `components/*/` | The 24 primitives above (jsx + d.ts + prompt.md + card). |
| `guidelines/*.card.html` | 21 foundation specimen cards (Colors, Type, Spacing, Motion, Brand). |
| `ui_kits/website/` | Marketing-site recreation — `index.html` + five screens. See its README. |
| `thumbnail.html` | Homepage tile. |
| `SKILL.md` | Agent-skill entry point for use outside this project. |

## Fonts — action needed

No font binaries were supplied. Substitutions in use, loaded from the Google Fonts CDN:

| Role | In use | Likely intent |
|---|---|---|
| Display serif | **Bodoni Moda** | A high-contrast Didone (Bodoni, Didot, or a bespoke cut) |
| Grotesque UI | **Archivo** (300/500) | A neutral European grotesque |
| Condensed | **Archivo Narrow** | Dense spec tables |
| Mono | **JetBrains Mono** | Instrumentation and legal |

**Please send the real families and weights** (or confirm these) — display serif choice in particular changes the whole brand's temperature.
