import type { CSSProperties, ReactNode } from "react";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { asset, cn, isUnsplash } from "@/lib/utils";

/** Photographic hero options. Replaces the prototype's window.PT_HERO_* globals. */
export type HeroPhoto = {
  photo?: string;
  /** object-position of the photograph. */
  position?: string;
  flip?: boolean;
  /** Centred veil and taller crop (the landing page's cinematic treatment). */
  center?: boolean;
  zoomFrom?: number;
  zoomTo?: number;
};

type FrameProps = {
  children?: ReactNode;
  bg?: string;
  style?: CSSProperties;
  className?: string;
  id?: string;
  /** Renders the full-bleed hero media layer behind the frame (photograph, tint, grid, veil). */
  hero?: HeroPhoto | true;
};

/**
 * A 1216px content column framed by 1px hairlines that run the full height of the page.
 * Every section on the site sits inside one.
 */
export function Frame({ children, bg = "var(--stone-0)", style, className, id, hero }: FrameProps) {
  const h = hero === true ? {} : hero;
  return (
    <div
      id={id}
      className={cn(h && "pt-hero", h?.center && "pt-hero-tall", className)}
      style={{ background: bg, display: "flex", justifyContent: "center", ...style }}
    >
      {h && <HeroMedia {...h} />}
      <div
        className="pt-frame"
        style={{
          width: "100%",
          maxWidth: 1216,
          borderLeft: "1px solid var(--grid-line)",
          borderRight: "1px solid var(--grid-line)",
          padding: "0 48px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {children}
      </div>
    </div>
  );
}

type SectionProps = {
  index?: string;
  label?: string;
  right?: string;
  children?: ReactNode;
  bg?: string;
  pad?: string;
  id?: string;
};

/** A framed section opening on the blue hairline rail: `[01] LABEL … / RIGHT`. */
export function Section({ index, label, right, children, bg, pad = "56px 0 88px", id }: SectionProps) {
  return (
    <Frame bg={bg} id={id}>
      <div style={{ paddingTop: 48 }}>
        <div className="pt-secrail" style={{ borderTop: "1px solid var(--secondary-border)", paddingTop: 14 }}>
          <SectionMarker index={index} label={label} right={right} />
        </div>
      </div>
      <div style={{ padding: pad }}>{children}</div>
    </Frame>
  );
}

/**
 * Hero background: a photograph with navy tint and grid, or (with no photo) the animated
 * data-viz stand-in the prototype used until footage is supplied.
 */
export function HeroMedia({ photo, position, flip, center, zoomFrom, zoomTo }: HeroPhoto) {
  const src = photo ? asset(photo) : undefined;
  return (
    <>
      <div className="pt-hero-media" aria-hidden="true">
        {src ? (
          <>
            <img
              src={src}
              alt=""
              style={
                {
                  objectPosition: position || "center",
                  transform: flip ? "scaleX(-1)" : "none",
                  "--pt-hero-zoom-from": zoomFrom,
                  "--pt-hero-zoom-to": zoomTo,
                } as CSSProperties
              }
            />
            <div className="pt-hero-tint" />
            <div className="pt-hero-grid" style={{ opacity: 0.28 }} />
          </>
        ) : (
          <>
            <div className="pt-hero-sim" />
            <div className="pt-hero-grid" />
            <div className="pt-hero-bars">
              {Array.from({ length: 34 }, (_, i) => (
                <i key={i} style={{ animationDelay: (i * 0.14).toFixed(2) + "s", animationDuration: (2.8 + (i % 5) * 0.4).toFixed(1) + "s" }} />
              ))}
            </div>
            <div className="pt-hero-sweep" />
          </>
        )}
      </div>
      <div className={cn("pt-hero-veil", src && (center ? "pt-veil-center" : "pt-veil-left"))} aria-hidden="true" />
      {src && <div className="pt-hero-vignette" aria-hidden="true" />}
      {src && isUnsplash(src) && (
        <a className="pt-hero-credit" href="https://unsplash.com/?utm_source=pathways&utm_medium=referral" target="_blank" rel="noopener noreferrer">
          Photo: Unsplash
        </a>
      )}
    </>
  );
}
