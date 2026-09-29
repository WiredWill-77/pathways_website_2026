# Pathways Technologies website

Next.js 16 (App Router, Turbopack) and Tailwind CSS v4, built from the design export in the parent
folder (`../*.html`, `../*.jsx`, `../site.css`, `../_ds/`). The prototype files stay there as the
visual reference. Nothing in this app reads them at runtime.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, type checks included
npm run lint
```

## How the code is organised

```
app/
  layout.tsx              root: fonts, global CSS, theme boot script
  (home)/                 landing page (has the announcement bar)
  (site)/                 every other marketing page, wrapped in header + footer
  admin/, risk-console/, whitepapers/[slug]   pages without the site chrome
components/
  ui/                     design-system primitives (Button, Card, Badge, TwoToneHeading, FaqItem, Icon, ImageSlot, Field…)
  brand/                  PtButton, PtLogo, ThemeToggle
  layout/                 Frame, Section, Header, Footer, SiteChrome, TrustBar/ClientWall
  blocks/                 shared content blocks: PageHero, StatBand, DashedGrid, IconCards, Stepper, Rail,
                          CheckRows, Chips, DataTable, QuoteBand, SplitList, ProductStrip, SlotFigure, CTA bands
  dashboards/             sector dashboards and chart primitives
  <domain>/               components that belong to one page family (home/, services/, insights/…)
data/
  mockData.ts             the single entry point for all mock data (re-exports data/mock/*)
  mock/<domain>.ts        typed mock records, one file per domain
lib/
  data/<domain>.ts        async accessors, the only code that reads mock data
  data/mock-client.ts     mockQuery(): clone + optional latency, shaped like a real query
  routes.ts               every URL in the app, plus legacyHref() for prototype .html links
types/<domain>.ts         record types shared by data, accessors and components
styles/                   tokens.css (design system, verbatim), site.css (prototype site CSS), components.css
hooks/                    client hooks (useTheme, useAsync…)
```

## Rules of the road

**Data flows one way.** Pages are async server components. They call accessors in `lib/data/*`,
which read `data/mockData.ts` through `mockQuery()`. Components receive plain props. Nothing outside
`lib/data/` imports `@/data/mockData`. Client components that need data get it as props from a server
parent, or call an accessor through `useAsync` (see `hooks/use-async.ts`).

**Swapping in Supabase** means rewriting the bodies of `lib/data/*.ts` and nothing else. Keep accessor
signatures stable (`getX(): Promise<X[]>`, `getXBySlug(slug): Promise<X | null>`). Mock records are
shaped like rows, with a `slug` on anything that has a detail page.

**Styling.** The design tokens are CSS variables (`styles/tokens.css`, `styles/site.css`), and dark mode
works by overriding them under `html[data-theme="dark"]`. Tailwind's theme maps onto those variables, so
`bg-primary`, `text-fg-secondary`, `border-hairline`, `rounded-md` (12px) and `shadow-raised` resolve to
the exact design values in both themes. Preflight is off because the design uses the design system's own
reset. Exact one-off values from the design (font sizes like 16.5px, specific paddings) are kept as
written, as inline styles or Tailwind arbitrary values. Hover and focus states are CSS, never JS state.

**Links.** Use `routes.*` from `lib/routes.ts`. Content copied from the prototype that contains
`.html` hrefs goes through `legacyHref()`. Buttons that navigate take `href` and render a `<Link>`.

**Images.** Files from the prototype's `uploads/` and `assets/` live under `public/` at the same
relative path (`/uploads/…`). Designer-dropped placeholder art is in `public/images/slots/`, mapped by slot
id in `lib/image-slots.ts`. Use `<ImageSlot id=… src=…>` wherever the prototype used `<image-slot>`.

**Icons.** `<Icon name="chart-spline" />` from `components/ui/Icon.tsx`. The registry is explicit so the
bundle stays small, so add new Lucide names there. The `data-lucide` attribute is kept deliberately
(site.css recolours specific strokes by it).

**Copy.** Follow ../CLAUDE.md and ../design.md: natural sentences, no em dashes, no "X, not Y".

## Legacy URLs

`next.config.ts` permanently redirects every prototype file name (`/Contact Us.html`,
`/blog-foo.html`, `/solutions-banking-finance.html`…) to its clean route, generated from
`LEGACY_PAGES` and the prefix families in `lib/routes.ts`.
