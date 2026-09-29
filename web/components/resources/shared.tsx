/* Pieces shared by the resource section pages and the webinar, event and article detail pages
   (prototype: the card markup repeated across resources-page.jsx and RdFacts/RdCover in resource-detail.jsx). */
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { PageHero } from "@/components/blocks";
import { PtButton } from "@/components/brand/PtButton";
import { Badge } from "@/components/ui/Badge";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Md } from "@/components/ui/Markdown";
import { routes } from "@/lib/routes";
import type { Stat } from "@/types/blocks";
import type { ResourceHero } from "@/types/resources";

/** The prototype's slot ids: prefix plus the title with runs of non-word characters turned into "-". */
export const slotId = (prefix: string, title: string) => prefix + title.replace(/\W+/g, "-");

export const panel: CSSProperties = { border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-lg)", background: "var(--surface)" };

export const cardGrid = (min = 270, gap = 24): CSSProperties => ({ display: "grid", gridTemplateColumns: `repeat(auto-fill,minmax(${min}px,1fr))`, gap });

/** Section page hero. Custom properties inherit, so a display:contents wrapper carries the zoom override. */
export function SectionHero({ hero, secondary = { label: "See All Resources", href: routes.resources } }: { hero: ResourceHero; secondary?: { label: string; href: string } }) {
  const el = (
    <PageHero
      eyebrow={hero.eyebrow}
      lead={hero.lead}
      rest={hero.rest}
      intro={hero.intro}
      meta={hero.meta}
      img={hero.image}
      ctaStyle={hero.ctaStyle}
      ctaClassName={hero.ctaClassName}
      secondary={secondary}
    />
  );
  if (hero.zoomFrom === undefined && hero.zoomTo === undefined) return el;
  return <div style={{ display: "contents", "--pt-hero-zoom-from": hero.zoomFrom, "--pt-hero-zoom-to": hero.zoomTo } as CSSProperties}>{el}</div>;
}

type CoverCardProps = {
  slot: string;
  title: string;
  /** Title link, when the card has a detail page. */
  href?: string;
  badges: string[];
  text: string;
  image?: string;
  coverStyle?: CSSProperties;
  action?: ReactNode;
};

/** 4:3 cover, badge row, title, description and an optional action. Used by every listing grid. */
export function CoverCard({ slot, title, href, badges, text, image, coverStyle, action }: CoverCardProps) {
  return (
    <div style={{ ...panel, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", aspectRatio: "4 / 3", background: "var(--bg-muted)" }}>
        {image ? (
          <img src={image} alt={title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0 }}>
            <ImageSlot id={slot} placeholder={"Cover: " + title} alt={title} style={coverStyle} />
          </div>
        )}
      </div>
      <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {badges.length === 1 ? (
          <Badge tone="neutral">{badges[0]}</Badge>
        ) : (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {badges.map((b) => (
              <Badge key={b} tone="neutral">
                {b}
              </Badge>
            ))}
          </div>
        )}
        <h3 style={{ fontSize: 18, margin: 0, lineHeight: 1.35, fontWeight: "var(--weight-medium)" as CSSProperties["fontWeight"] }}>
          {href ? (
            <Link href={href} style={{ color: "inherit", textDecoration: "none" }}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0, flex: 1, lineHeight: 1.6 }}>{text}</p>
        {action}
      </div>
    </div>
  );
}

export const cardActionStyle: CSSProperties = { alignSelf: "flex-start", marginTop: 8 };

/** The small secondary "View …" button under a card. */
export function CardAction({ href, children }: { href: string; children: ReactNode }) {
  return (
    <PtButton tone="secondary" size="sm" arrow style={cardActionStyle} href={href}>
      {children}
    </PtButton>
  );
}

/* ------------------------------------------------------------------ detail pages */

/** Sticky facts panel beside the body copy. Rows without a value are left out. */
export function DetailFacts({ rows, cta }: { rows: Stat[]; cta?: { label: string; href: string } }) {
  return (
    <aside style={{ ...panel, padding: 24, display: "grid", gap: 16, position: "sticky", top: 110 }}>
      {rows
        .filter((r) => r.value)
        .map((r) => (
          <div key={r.label} style={{ display: "grid", gap: 4 }}>
            <span style={{ fontSize: 12, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-eyebrow)" }}>{r.label}</span>
            <span style={{ fontSize: 15, color: "var(--text-primary)", lineHeight: 1.45 }}>{r.value}</span>
          </div>
        ))}
      {cta && (
        <PtButton tone="primary" size="md" arrow href={cta.href}>
          {cta.label}
        </PtButton>
      )}
    </aside>
  );
}

/** 16:9 cover above the body copy: a photograph when the record has one, else the slot art. */
export function DetailCover({ src, slot, alt }: { src?: string; slot: string; alt: string }) {
  return (
    <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--bg-muted)", marginBottom: 10 }}>
      {src ? (
        <img src={src} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageSlot id={slot} placeholder={"Cover: " + alt} alt={alt} />
        </div>
      )}
    </div>
  );
}

export function DetailParagraphs({ items }: { items: string[] }) {
  return items.map((p, i) => (
    <p key={i} style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>
      <Md text={p} />
    </p>
  ));
}

/** Two-column body: copy on the left, facts panel on the right. */
export function DetailBody({ children, aside, maxWidth, gap = 18 }: { children: ReactNode; aside: ReactNode; maxWidth?: number; gap?: number }) {
  return (
    <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,0.8fr)", gap: 48, alignItems: "start" }}>
      <div style={{ display: "grid", gap, maxWidth }}>{children}</div>
      {aside}
    </div>
  );
}

/** "More sessions / events / posts" panel links. */
export function MoreCard({ href, badges, title, text }: { href: string; badges: string[]; title: string; text?: string }) {
  return (
    <Link href={href} style={{ ...panel, padding: 22, display: "flex", flexDirection: "column", gap: 10, textDecoration: "none", color: "inherit" }}>
      {badges.length === 1 ? (
        <div>
          <Badge tone="neutral">{badges[0]}</Badge>
        </div>
      ) : (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {badges.map((b) => (
            <Badge key={b} tone="neutral">
              {b}
            </Badge>
          ))}
        </div>
      )}
      <h3 style={{ fontSize: 17, margin: 0, lineHeight: 1.35, fontWeight: "var(--weight-medium)" as CSSProperties["fontWeight"] }}>{title}</h3>
      {text && <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>{text}</p>}
    </Link>
  );
}
