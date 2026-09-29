import type { ComponentPropsWithoutRef, CSSProperties } from "react";

export type BadgeTone = "neutral" | "accent" | "live" | "outline" | "onDark";

const TONES: Record<BadgeTone, CSSProperties> = {
  neutral: { background: "var(--stone-100)", color: "var(--text-secondary)", border: "1px solid transparent" },
  accent: { background: "var(--blue-100)", color: "var(--blue-600)", border: "1px solid transparent" },
  live: { background: "var(--stone-0)", color: "var(--success)", border: "1px solid var(--border-hairline)" },
  outline: { background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--border-hairline)" },
  onDark: { background: "rgba(255,255,255,.10)", color: "var(--stone-0)", border: "1px solid transparent" },
};

type BadgeProps = ComponentPropsWithoutRef<"span"> & { tone?: BadgeTone; dot?: boolean };

export function Badge({ tone = "neutral", dot, style, children, ...rest }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: "var(--radius-pill)",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--weight-medium)" as CSSProperties["fontWeight"],
        lineHeight: 1.4,
        letterSpacing: "-0.005em",
        ...TONES[tone],
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: "var(--radius-pill)", background: "currentColor" }} />}
      {children}
    </span>
  );
}
