/**
 * Shared content blocks (prototype: blocks.jsx). Services, Solutions, Resources, About and the
 * detail pages each compose a different subset so no two pages read the same below the fold.
 * All are server components; ProductStrip reads product copy from the data layer.
 */
import { Fragment, type CSSProperties, type ReactNode } from "react";
import { PtButton } from "@/components/brand/PtButton";
import { Frame } from "@/components/layout/Frame";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { getProducts } from "@/lib/data/home";
import { routes, slugify } from "@/lib/routes";
import { cn, isUnsplash, pad2 } from "@/lib/utils";
import type { HeroContent, IconItem, Product, Quote, Stat, Step, TableData, TitledText } from "@/types/blocks";

const eyebrow: CSSProperties = {
  fontSize: "var(--text-eyebrow)",
  letterSpacing: "var(--tracking-eyebrow)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
};

/* ---------------------------------------------------------------- SlotFigure */

type SlotFigureProps = {
  id?: string;
  caption?: ReactNode;
  ratio?: string;
  height?: number | string;
  showCaption?: boolean;
  /** Stretch to the height of the grid row instead of using an aspect ratio. */
  fill?: boolean;
  src?: string;
  alt?: string;
  credit?: string;
};

/** Framed figure with a caption. Resolves designer art by slot id, else `src`. */
export function SlotFigure({ id, caption, ratio = "16 / 7", height, showCaption = true, fill = false, src, alt, credit }: SlotFigureProps) {
  const cred = credit !== undefined ? credit : isUnsplash(src) ? "Photo: Unsplash" : undefined;
  return (
    <figure style={{ margin: 0, minWidth: 0, alignSelf: fill ? "stretch" : undefined, display: "flex", flexDirection: "column" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: height || fill ? undefined : ratio,
          height,
          minHeight: fill ? 280 : undefined,
          flex: fill ? "1 1 auto" : undefined,
          border: "1px solid var(--grid-line)",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          background: "var(--bg-muted)",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageSlot id={id} src={src} alt={alt ?? (typeof caption === "string" ? caption : "")} placeholder="Drop image" credit={cred || undefined} />
        </div>
      </div>
      {showCaption && <figcaption style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: 10 }}>{caption}</figcaption>}
    </figure>
  );
}

/* ---------------------------------------------------------------- StatBand */

/** Row of big numbers. Four stats wrap into a 2×2 grid. */
export function StatBand({ stats, tone = "light" }: { stats: Stat[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const twoCol = stats.length === 4;
  const line = "1px solid " + (dark ? "rgba(255,255,255,.14)" : "var(--grid-line)");
  return (
    <div
      className={cn("pt-statband", dark && "pt-statband-dark")}
      style={{ display: "flex", flexWrap: "wrap", gap: 0, border: line, borderRadius: "var(--radius-md)", background: dark ? "var(--ink-700)" : "var(--stone-0)", overflow: "hidden" }}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          style={{ flex: "1 1 180px", padding: "22px 26px", borderLeft: (twoCol ? i % 2 !== 0 : !!i) ? line : "none", borderTop: twoCol && i >= 2 ? line : "none" }}
        >
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.03em", color: dark ? "#FFFFFF" : "var(--primary)" }}>{s.value}</div>
          <div style={{ fontSize: 12.5, color: dark ? "rgba(255,255,255,.68)" : "var(--text-muted)", marginTop: 4 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- DashedGrid */

/** Borderless grid whose cells share dashed hairlines, optionally numbered [01]. */
export function DashedGrid({ items, cols = 2, numbered = true }: { items: TitledText[]; cols?: 2 | 3; numbered?: boolean }) {
  return (
    <div className={cols === 3 ? "pt-3col" : "pt-2col"} style={{ display: "grid", gridTemplateColumns: `repeat(${cols},minmax(0,1fr))`, border: "1px dashed var(--border-hairline)" }}>
      {items.map((it, i) => (
        <div
          key={it.title}
          style={{ padding: "28px 30px", borderRight: (i + 1) % cols ? "1px dashed var(--border-hairline)" : "none", borderTop: i >= cols ? "1px dashed var(--border-hairline)" : "none" }}
        >
          {numbered && <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tracking-eyebrow)" }}>[{pad2(i + 1)}]</div>}
          <div style={{ fontSize: 18, fontWeight: 500, margin: "10px 0 8px" }}>{it.title}</div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>{it.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- IconCards */

export function IconCards({ items, cols = 3, pad = 28, stretch = false }: { items: IconItem[]; cols?: 2 | 3; pad?: number; stretch?: boolean }) {
  return (
    <div className={cols === 3 ? "pt-3col" : "pt-2col"} style={{ display: "grid", gridTemplateColumns: `repeat(${cols},minmax(0,1fr))`, gap: 24, height: stretch ? "100%" : undefined }}>
      {items.map((it) => (
        <Card key={it.title} padding={pad} style={stretch ? { display: "flex", flexDirection: "column", justifyContent: "center" } : undefined}>
          <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginBottom: 14 }}>
            <Icon name={it.icon} size={22} />
          </span>
          <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{it.title}</div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>{it.text}</p>
        </Card>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- Stepper */

/** Horizontal stepper with a connecting rule; the first dot is orange. */
export function Stepper({ steps }: { steps: Step[] }) {
  return (
    <div className="pt-3col" style={{ display: "grid", gridTemplateColumns: `repeat(${steps.length},minmax(0,1fr))`, gap: 20 }}>
      {steps.map((s, i) => (
        <div key={s.title} style={{ position: "relative", paddingTop: 26 }}>
          <span style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "var(--grid-line)" }} />
          <span style={{ position: "absolute", top: -5, left: 0, width: 11, height: 11, borderRadius: 99, background: i === 0 ? "var(--primary)" : "var(--secondary-text)" }} />
          <div style={{ ...eyebrow, fontSize: "var(--text-xs)" }}>{s.kicker}</div>
          <div style={{ fontSize: 17, fontWeight: 500, margin: "8px 0 8px" }}>{s.title}</div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>{s.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- Rail */

/** Vertical numbered rail. */
export function Rail({ items }: { items: TitledText[] }) {
  return (
    <div style={{ display: "grid", gap: 0 }}>
      {items.map((it, i) => (
        <div key={it.title} style={{ display: "grid", gridTemplateColumns: "64px minmax(0,1fr)", gap: 20, padding: "24px 0", borderTop: "1px solid var(--grid-line)" }}>
          <div style={{ fontSize: 26, fontWeight: 600, color: "var(--primary)", letterSpacing: "-0.03em", lineHeight: 1 }}>{pad2(i + 1)}</div>
          <div>
            <div style={{ fontSize: 19, fontWeight: 500, marginBottom: 8 }}>{it.title}</div>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", margin: 0, maxWidth: 640, lineHeight: 1.7 }}>{it.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- CheckRows */

export function CheckRows({ items, cols = 2 }: { items: ReactNode[]; cols?: 1 | 2 | 3 }) {
  return (
    <div className="pt-2col pt-checkrows" style={{ display: "grid", gridTemplateColumns: `repeat(${cols},minmax(0,1fr))`, gap: 12 }}>
      {items.map((x, i) => (
        <div
          key={typeof x === "string" ? x : i}
          style={{ display: "flex", gap: 11, alignItems: "center", fontSize: 15, padding: "14px 16px", border: "1px solid var(--secondary-border)", borderRadius: "var(--radius-sm)", background: "var(--bg-blue-soft)" }}
        >
          <span style={{ color: "var(--secondary-text)", display: "inline-flex" }}>
            <Icon name="check" size={16} />
          </span>
          {x}
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- Chips */

export function Chips({ items }: { items: string[] }) {
  return (
    <div className="pt-chips" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((c) => (
        <span
          key={c}
          className="pt-chip"
          style={{ display: "inline-flex", alignItems: "center", height: 34, padding: "0 14px", borderRadius: "var(--radius-pill)", border: "1px solid var(--secondary-border)", fontSize: 13.5, color: "var(--secondary-text)", background: "var(--secondary-soft)" }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- DataTable */

/** Hairline table for rate cards, curricula and SLAs. First column is the row label. Scrolls on mobile. */
export function DataTable({ head, rows }: TableData) {
  const grid = `repeat(${head.length},minmax(0,1fr))`;
  return (
    <div className="pt-scrollx" style={{ border: "1px solid var(--grid-line)", borderRadius: "var(--radius-md)", background: "var(--stone-0)" }}>
      <div role="table">
        <div role="row" style={{ display: "grid", gridTemplateColumns: grid, background: "var(--bg-muted)", padding: "14px 22px", gap: 16 }}>
          {head.map((h) => (
            <div role="columnheader" key={h} style={{ ...eyebrow, fontSize: "var(--text-xs)" }}>
              {h}
            </div>
          ))}
        </div>
        {rows.map((r) => (
          <div role="row" key={r[0]} style={{ display: "grid", gridTemplateColumns: grid, gap: 16, padding: "18px 22px", borderTop: "1px solid var(--grid-line)", alignItems: "center" }}>
            {r.map((c, j) => (
              <div
                role="cell"
                key={j}
                style={{ fontSize: j ? "var(--text-sm)" : 15, fontWeight: j ? 400 : 500, color: j ? "var(--text-secondary)" : "var(--text-primary)" }}
              >
                {c}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- QuoteBand */

/** Full-bleed brand-blue quote strip. */
export function QuoteBand({ quote, name, role }: Quote) {
  return (
    <figure className="pt-quote" style={{ background: "#1B87C9", padding: "64px 40px", margin: 0 }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <blockquote style={{ color: "#FFFFFF", fontSize: "clamp(20px,2.1vw,28px)", lineHeight: 1.5, margin: 0, fontWeight: 400 }}>“{quote}”</blockquote>
        <figcaption style={{ marginTop: 22, fontSize: "var(--text-sm)", color: "rgba(255,255,255,.82)" }}>
          {name} · {role}
        </figcaption>
      </div>
    </figure>
  );
}

/* ---------------------------------------------------------------- SplitList */

/** Sticky label rail on the left, stacked items on the right. */
export function SplitList({ label, items }: { label: string; items: TitledText[] }) {
  return (
    <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 40, alignItems: "start" }}>
      <div className="pt-sticky" style={{ position: "sticky", top: 110 }}>
        <div style={{ ...eyebrow, marginBottom: 16 }}>{label}</div>
        <div style={{ display: "grid", gap: 10 }}>
          {items.map((it) => (
            <div key={it.title} style={{ fontSize: 15, color: "var(--text-secondary)" }}>
              {it.title}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gap: 0 }}>
        {items.map((it, i) => (
          <div key={it.title} style={{ padding: "22px 0", borderTop: i ? "1px solid var(--grid-line)" : "none" }}>
            <div style={{ fontSize: 19, fontWeight: 500, marginBottom: 8 }}>{it.title}</div>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", margin: 0, lineHeight: 1.7 }}>{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- ProductStrip */

/** Product cards by name. Async: product copy comes from the data layer. */
export async function ProductStrip({ names }: { names: string[] }) {
  const all = await getProducts();
  const products = names.map((n) => all.find((p) => p.name === n)).filter((p): p is Product => !!p);
  return <ProductStripView products={products} />;
}

export function ProductStripView({ products }: { products: Product[] }) {
  return (
    <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: products.length > 1 ? "1fr 1fr" : "1fr", gap: 24 }}>
      {products.map((p) => (
        <Card key={p.name} hover padding={28}>
          <Badge tone="accent">Product</Badge>
          <h3 style={{ fontSize: 20, margin: "18px 0 10px", fontWeight: 500 }}>{p.name}</h3>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.65 }}>{p.blurb}</p>
          <a href={routes.home} className="pt-textlink">
            Explore {p.name}
            <Icon name="arrow-right" size={15} />
          </a>
        </Card>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- PageHero */

function EyebrowPill({ text }: { text: string }) {
  const parts = text.includes(" · ") ? text.split(" · ") : [text];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", height: 28, padding: "0 12px", borderRadius: "var(--radius-pill)", border: "1px solid rgba(255,255,255,.35)", color: "#FFFFFF", fontSize: 12 }}>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <span style={{ color: "#ec8425", fontWeight: 700, fontSize: 15, padding: "0 7px" }}>·</span>}
        </Fragment>
      ))}
    </span>
  );
}

type PageHeroProps = HeroContent & {
  headingAs?: "h1" | "h2";
  ctaStyle?: CSSProperties;
  ctaClassName?: string;
  /** Extra content under the meta row. */
  children?: ReactNode;
};

/** Dark photographic page hero shared by every inner page. The page's H1. */
export function PageHero({
  eyebrow: eb,
  lead,
  rest,
  intro,
  meta,
  img,
  imgPosition,
  imgFlip,
  cta = { label: "Book A Demo", href: routes.contact },
  secondary = { label: "See All Services", href: routes.home },
  headingAs = "h1",
  ctaStyle,
  ctaClassName,
  children,
}: PageHeroProps) {
  const stop = rest.match(/[.]+$/)?.[0];
  return (
    <Frame bg="transparent" hero={{ photo: img, position: imgPosition, flip: imgFlip }}>
      <div style={{ padding: "88px 0 72px", maxWidth: 880 }}>
        <EyebrowPill text={eb} />
        <TwoToneHeading
          as={headingAs}
          accent
          size="clamp(32px,3.4vw,48px)"
          maxWidth={860}
          style={{ marginTop: 20, fontWeight: 700, color: "#FFFFFF", display: "flex", flexDirection: "column" }}
          lead={lead}
          rest={
            stop ? (
              <>
                {rest.replace(/[.]+$/, "")}
                <span style={{ color: "#FFFFFF" }}>{stop}</span>
              </>
            ) : (
              rest
            )
          }
        />
        <p style={{ color: "rgba(255,255,255,.78)", fontSize: 17, marginTop: 22, maxWidth: 620 }}>{intro}</p>
        <div className="pt-cta-actions" style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
          <PtButton tone="primary" size="lg" arrow style={ctaStyle} className={ctaClassName} href={cta.href}>
            {cta.label}
          </PtButton>
          <PtButton tone="ghost" onDark size="lg" href={secondary.href}>
            {secondary.label}
          </PtButton>
        </div>
        {meta && meta.length > 0 && (
          <div className="pt-herometa" style={{ display: "flex", gap: 0, marginTop: 40, flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,.16)", paddingTop: 22 }}>
            {meta.map((m, i) => (
              <div key={m.label} style={{ padding: i ? "0 26px" : "0 26px 0 0", borderLeft: i ? "1px solid rgba(255,255,255,.16)" : "none" }}>
                <div style={{ fontSize: 22, fontWeight: 600, color: "#FFFFFF", letterSpacing: "-0.02em" }}>{m.value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.68)", marginTop: 2 }}>{m.label}</div>
              </div>
            ))}
          </div>
        )}
        {children}
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- CTA bands */

/* Pexels stock, African subjects working with technology, picked by the band title. */
const px = (id: number, w = 1200, h = 760) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=faces,center&w=${w}&h=${h}`;
const CTA_IMAGES: [RegExp, { src: string; credit: string }][] = [
  [/discovery|assess|roadmap|strateg|two-week/i, { src: px(1181622), credit: "Photo: Christina Morillo / Pexels" }],
  [/cohort|train|skill|seat|team to|next one|session|academy|learn/i, { src: px(1181533), credit: "Photo: Christina Morillo / Pexels" }],
  [/report|analytic|dashboard|data|library|paper|subscribe|inbox|notes|piece/i, { src: px(19805876), credit: "Photo: Naboth Otieno / Pexels" }],
  [/partner|talk|tell us|gap|licens|contact/i, { src: px(1181618), credit: "Photo: Christina Morillo / Pexels" }],
  [/model|plan|shape|consolidat|corridor|line|service|decision|built for|fits|working/i, { src: px(1181649), credit: "Photo: Christina Morillo / Pexels" }],
];
function ctaImage(title: string) {
  for (const [re, v] of CTA_IMAGES) if (re.test(title)) return v;
  return { src: px(1181649), credit: "Photo: Christina Morillo / Pexels" };
}

type CtaBandProps = {
  title: string;
  children: ReactNode;
  actions: ReactNode;
  imageId?: string;
  /** Override the automatic photograph. */
  image?: string;
  /** Optional photo credit chip. The design shows none for the stock pictures chosen by title. */
  credit?: string;
};

/** Brand-blue band with a photograph fading in from the right. */
export function PtCtaBand({ title, children, actions, imageId = "cta-visual", image, credit }: CtaBandProps) {
  const src = image ?? ctaImage(title).src;
  return (
    <section className="pt-ctaband" style={{ padding: "96px 40px", position: "relative", overflow: "hidden", background: "#1B87C9", color: "#FFFFFF" }}>
      <div className="pt-ctaband-img" style={{ position: "absolute", top: 0, right: 0, bottom: 0 }}>
        <ImageSlot id={imageId} src={src} credit={credit || undefined} />
      </div>
      <div className="pt-ctaband-veil" style={{ position: "absolute", top: 0, right: 0, bottom: 0, pointerEvents: "none" }} />
      <div className="pt-ctaband-copy" style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <h2 style={{ fontSize: "var(--text-h2)", fontWeight: 700, color: "inherit", marginBottom: 24 }}>{title}</h2>
        <p style={{ color: "rgba(255,255,255,.82)", marginBottom: 36 }}>{children}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>{actions}</div>
      </div>
    </section>
  );
}

/** The standard closing band: Book A Demo plus one secondary link. */
export function ClosingCta({
  title,
  children,
  secondary = { label: "See Our Partners", href: routes.partnerships },
  credit,
}: {
  title: string;
  children: ReactNode;
  secondary?: { label: string; href: string };
  credit?: string;
}) {
  return (
    <PtCtaBand
      title={title}
      imageId={"cta-" + slugify(title)}
      credit={credit}
      actions={
        <span className="pt-cta-actions" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <PtButton tone="primary" size="md" arrow href={routes.contact}>
            Book A Demo
          </PtButton>
          <PtButton tone="ghost" onDark size="md" href={secondary.href}>
            {secondary.label}
          </PtButton>
        </span>
      }
    >
      {children}
    </PtCtaBand>
  );
}
