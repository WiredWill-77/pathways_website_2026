# Searchable — Design System

Recreation of the visual language of **Searchable** (Searchable Limited, B1, 9 Tanner St, London SE1 3LE),
an AI-search visibility and analytics platform. Searchable tracks where a brand appears inside answers from
ChatGPT, Google AI Overviews, Perplexity, Claude and Gemini, and turns that into actions: AEO Insights,
LLM Analytics, Prompt Intelligence, Content Studio, Technical Optimisation, AI Shopping, MCP and the Agent.
Audiences are marketing teams, SEO/AEO practitioners, agencies and enterprises.

## Sources used

| Source | What it gave us |
| --- | --- |
| `uploads/screencapture-searchable-2026-07-26-12_19_08.png` | Full home page |
| `uploads/Screenshot 2026-07-26 122208.png` | Header + Product mega-menu at 1:1 (used for type and colour sampling) |
| `uploads/screencapture-searchable-data-2026-07-26-12_30_29.png` | "Live AI Search Data & Reports" page |
| `uploads/screencapture-searchable-solutions-agencies-2026-07-26-12_31_50.png` | Solutions → Agencies page |
| https://www.searchable.com/ | Product naming, positioning and copy tone (the site serves an LLM-optimised text version; no CSS or assets were reachable) |

**No codebase, Figma file, font binaries or logo files were supplied.** Everything below is measured and
sampled from the screenshots. Where a value could not be measured exactly it is marked as an assumption.

---

## Content fundamentals

**Voice.** Confident operator-to-operator. The brand talks to a marketer who already knows SEO and is being
told AI search is the next surface. It is declarative, never breathless — no exclamation marks outside the
announcement bar ("New! Try Plan Mode in the Searchable Agent").

**Person.** Second person, always: *"Track your brand"*, *"Your growth command center"*, *"See where you rank,
who's beating you, and what to fix."* First person appears only in product UI as the user's own voice
(*"I want to make an article about…"*). "We" is reserved for data provenance: *"We're building the most
comprehensive live dataset on AI search behavior."*

**Sentence shape.** The signature move is a **two-part sentence**: a short assertive statement, then an
elaboration that carries the detail — and it is set in two colours (ink then grey). Examples:
- "Your growth command center. Track how your brand performs across AI platforms and search…"
- "Turn ideas into influence. Generate AI-optimized content… using your brand's own data and tone."
- "Visibility & Analytics from AI Search — and *the actions to drive growth*" (continuation in the primary blue).

**Casing.** Sentence case everywhere: headings, buttons ("Start for free", "Book a Demo", "See all plans"),
nav items. Only two things are uppercase: the section rail (`[01] MONITOR`, `/ SEE YOUR GROWTH`) and small
eyebrows (`AGENCY BENEFITS`) — 12px, ~0.09em tracking. Product names keep their capitals (AEO Insights,
Content Studio, LLM Analytics).

**Spelling.** British-leaning but inconsistent in the source: "Technical Optimisation" in the nav,
"Technical Optimization" in the footer; "optimized"/"analyzing" in body copy. Prefer **British -ise for product
names, US -ize in running copy** to match what is shipped, and never mix within one block.

**Numbers as proof.** Specific, unrounded, always with a unit or timeframe: "Trusted by 11,187+ businesses",
"14-day free trial", "cut content planning by 70%", "20% / 25% lifetime revenue share", "52.5% visibility".

**Questions as headings.** Data and FAQ pages ask the reader's question verbatim: "Which social platforms
improve AI search visibility?", "What reference sources do AI assistants trust most?"

**CTA vocabulary.** Only a handful, reused: *Start for free · Book a Demo · Talk to sales · See all plans ·
View report · Get free visibility report · Apply to become a partner · Request Custom Data*. Primary CTAs get
a circled arrow; text links get a bare arrow.

**Emoji: never.** Not in copy, not in nav, not in cards. Third-party brand marks (ChatGPT, Google, Perplexity,
Reddit) do appear inline inside sentences as small logos, which is the closest thing to a pictograph in the copy.

---

## Visual foundations

> The layout, type and component behaviour below were recreated from the Searchable screenshots; the **colour
> system has been re-based on the Pathways Technologies colour guide**
> (`uploads/Pathways Technologies - Color Guide.png`).

**Palette.** Primary blue `#1b87c9` (tints `#34a0e2`, `#4ebafc`, `#67d3ff`), secondary white `#ffffff`, tertiary
orange `#ec8425` (tints `#ffaa4b`, `#ffb758`, `#ffd071`). Blue carries links, solid CTAs and full-bleed bands;
blue-100/300 make the soft-filled primary button. Orange is an **accent only** — highlights, warnings, the second
chart series — never body text and never a second full-page band beside blue. Everything else is a **neutral grey
ramp** (stone) from `#FAFBFC` to `#4C555D`; text is near-black `#141A20`. Pure black (`#000`) appears **only** in
the footer; dark bands use `#1D242B`. No gradients on surfaces — the one gradient in the system is the blue bar
fill inside data panels.

**Type.** One family. The site sets **PP Neue Montreal** (commercial, Pangram Pangram); this system falls back to
**Instrument Sans** from Google Fonts — a close free grotesque — and keeps `"PP Neue Montreal"` first in the
stack so licensed files take over automatically. Headings are **Medium (500)**, not bold, at −0.015 to −0.02em
tracking and 1.06–1.2 leading; body is Regular at 1.6. The only Bold usage seen is the CTA-band headline.
JetBrains Mono stands in for the small monospaced metrics.

**Layout.** A 1216px content column, **framed by 1px hairlines that run the full height of the page** — sections
are drawn as a grid, not floated as cards. Every section opens on a horizontal hairline carrying the
`[01] MONITOR … / SEE YOUR GROWTH` rail. Multi-column feature areas are **dashed** 1px grids with no gaps: cells
share borders. Section rhythm is 96px, 128px for major beats.

**Backgrounds.** Four surfaces only: white, off-white (`#FAFBFC`), ink `#1D242B`, blue `#1B87C9`.
Two textures: a fine **dot grid** (1px dots, 14px pitch) behind product panels and fading in from the right of
CTA bands, and a **photographic dark noise** on the free-report band (extracted to `assets/textures/`). The hero sits on plain off-white. No illustrations-as-decoration, no blobs, no mesh gradients.

**Imagery.** Two treatments, both desaturated: (1) **engraved / stippled black-and-white portraits** for customer
quotes — this is the brand's most distinctive image motif; (2) grayscale customer logos at ~55% opacity in a
single row. Product screenshots are shown untinted on the dot grid. Warm, low-contrast, never colour photography
of people.

**Cards & borders.** 1px `#E7E5E4` hairline, 12px radius, **no shadow at rest**. Shadows are reserved for
elements that genuinely float above the page: hover state (`0 4px 14px`), tooltips and the capture pill
(`0 12px 32px`). Never a coloured left border, never a heavy drop shadow.

**Buttons.** Always full pills. Five treatments: soft blue (blue-100 fill, blue-300 border, blue-600 text — the
default marketing primary), solid blue, solid ink, white with hairline (secondary), and transparent-with-white-border
on dark. Heights 32/40/48. The circled arrow affix (a 1px circle containing a 11px arrow) marks the primary action.

**States.** Hover deepens the fill one step and lifts the element 1px — no colour inversion, no scale. Nav items
gain a filled grey pill while their menu is open, and their caret rotates 180°. Press is a return to
`translateY(0)`; nothing shrinks. Focus is a blue border plus a 3px `--blue-100` ring — never the browser blue.
Disabled is 45% opacity, no colour change. Muted/incoming rows in animated stacks fade to 35%.

**Motion.** Restrained and short: 120ms for colour, 200ms for hover and disclosure, 420ms for section reveals,
all on `cubic-bezier(.2,.6,.2,1)`. Fades and 1px translations only — no bounce, no spring, no parallax.

**Transparency & blur.** Used sparingly: white text at 62–82% opacity on dark/blue bands, white at 10–18% for
hairlines on dark, and mask-image gradients to fade the dot texture out. No frosted-glass panels anywhere.

**Radii.** 6px chips · 8px inputs and small tiles · 12px cards and tables · 16–20px large panels · pill for
buttons, badges and chips.

---

## Iconography

- The site's UI icons are **thin-stroke outline glyphs at ~1.75px, drawn in primary blue** on marketing pages and in
  stone-600 inside product UI. They match **Lucide** (rows-3, presentation, layout-grid, badge-percent,
  receipt-text, handshake, chevron-down, arrow-right). **No icon files were supplied**, so this system links
  Lucide from CDN (`unpkg.com/lucide@0.454.0`) as the closest match — flagged as a substitution.
- Arrows are the workhorse: a bare 1.8px arrow-right on text links, the same arrow inside a 1px circle on
  primary buttons, a chevron-down for disclosure and nav carets.
- **Third-party brand marks** (ChatGPT, Google, Perplexity, Reddit, LinkedIn, YouTube, Instagram, G2, Capterra,
  Trustpilot, Wikipedia, arXiv…) appear as full-colour logos inline in sentences and inside data panels. These
  are other companies' trademarks and are **not** bundled here — fetch them from each brand's press kit.
- **No emoji, no unicode dingbats.** The only non-icon glyphs used typographically are `[`, `]` and `/` in the
  section rail, and `|` as a separator in the testimonial feature list.
- `assets/textures/` holds the two background textures extracted from the screenshots.

### Missing brand assets (please supply)

1. **Logo** — the Searchable mark + wordmark. It has deliberately **not** been redrawn; `Wordmark` renders the
   name in type. Drop the official SVG at `assets/logo.svg` and update `components/core/Wordmark.jsx`.
2. **PP Neue Montreal** woff2 files (or confirmation to stay on Instrument Sans).
3. Customer logos, engraved portrait illustrations, product screenshots, G2 badges.

---

## Index

```
styles.css              → the only file consumers link; @imports everything below
tokens/                 fonts · colors · typography · spacing · radius · elevation · motion · base
guidelines/             20 specimen cards (Colors, Type, Spacing, Brand)
components/
  core/                 Button · IconCircle · Badge · Card · Wordmark
  navigation/           AnnouncementBar · SiteNav · MegaMenu · SiteFooter · Breadcrumb
  content/              SectionMarker · TwoToneHeading · FeatureCell · NumberedFeatureCard ·
                        Testimonial · FaqItem · CtaBand · LogoWall · PromptChip ·
                        ComparisonTable · ReportCard · SourceRankList
  forms/                TextInput · EmailCaptureBar · TabBar
ui_kits/marketing-site/ Home · Data · Agencies, click-through (see its README.md)
assets/textures/        dark-noise.png (extracted from the screenshots)
thumbnail.html          project tile
SKILL.md                Agent Skills entry point
```

Every component ships `<Name>.jsx`, `<Name>.d.ts` (props + adherence) and `<Name>.prompt.md` (when/how).

### Intentional additions

Only two components have no single counterpart in the source; both are extractions of a pattern used repeatedly:
- **IconCircle** — the circled-arrow / carousel-control shape, factored out so it can't drift.
- **Wordmark** — a stand-in for the missing logo file.

No component was invented to "complete the set": there is no Toast, Avatar, Tooltip or Switch here because the
supplied pages never show one. Add them only when a real source screen does.
