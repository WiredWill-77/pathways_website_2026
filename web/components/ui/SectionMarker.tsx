import type { ComponentPropsWithoutRef } from "react";

type SectionMarkerProps = ComponentPropsWithoutRef<"div"> & {
  index?: string;
  label?: string;
  right?: string;
  tone?: "light" | "dark";
};

/** The `[01] SERVICES … / WHAT WE DO` rail that opens every section. */
export function SectionMarker({ index = "01", label, right, tone = "light", style, ...rest }: SectionMarkerProps) {
  const color = tone === "dark" ? "rgba(255,255,255,.55)" : "var(--text-muted)";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "var(--text-eyebrow)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color,
        ...style,
      }}
      {...rest}
    >
      <span>
        {index ? `[${index}] ` : ""}
        {label}
      </span>
      {right && <span>/ {right}</span>}
    </div>
  );
}
