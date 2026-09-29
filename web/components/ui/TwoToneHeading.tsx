import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import { splitStop } from "@/lib/utils";

type TwoToneHeadingProps = Omit<ComponentPropsWithoutRef<"h2">, "children"> & {
  /** Short assertive statement, set bold in the primary ink. */
  lead: ReactNode;
  /** Elaboration, set in the blue continuation colour. */
  rest: ReactNode;
  /** For use on dark or blue bands: blue lead stop, orange continuation, white final stop. */
  accent?: boolean;
  size?: string;
  align?: "left" | "center";
  maxWidth?: number | string;
  /** Opt out of the blue continuation. */
  restColor?: string;
  /** Opt out of the orange full stops. */
  stopColor?: string;
  as?: "h1" | "h2" | "h3";
};

/**
 * Section headings read as two sentences: a bold statement, then a blue elaboration, with both
 * full stops carried in the accent orange. This is the Pathways patch of the design-system
 * TwoToneHeading (site.jsx), folded into the component.
 */
export function TwoToneHeading({
  lead,
  rest,
  accent = false,
  size = "var(--text-h2)",
  align = "left",
  maxWidth = 900,
  restColor,
  stopColor,
  as: Tag = "h2",
  style,
  ...props
}: TwoToneHeadingProps) {
  const [l, ls] = typeof lead === "string" ? splitStop(lead) : [lead, null];
  const [r, rs] = typeof rest === "string" ? splitStop(rest) : [rest, null];
  const stop: CSSProperties = { color: "var(--primary)" };
  const leadStop: CSSProperties = stopColor ? { color: stopColor } : accent ? { color: "var(--blue-500)" } : stop;
  const restStop: CSSProperties = stopColor ? { color: stopColor } : accent ? { color: "var(--stone-0)" } : stop;
  return (
    <Tag
      style={{
        fontSize: size,
        lineHeight: "var(--leading-heading)",
        letterSpacing: "var(--tracking-heading)",
        fontWeight: "var(--weight-medium)" as CSSProperties["fontWeight"],
        textAlign: align,
        maxWidth,
        margin: align === "center" ? "0 auto" : 0,
        textWrap: "pretty",
        ...style,
      }}
      {...props}
    >
      <span>
        <span style={{ fontWeight: 700 }}>
          {l}
          {ls && <span style={leadStop}>{ls}</span>}
        </span>
      </span>{" "}
      <span style={{ color: accent ? "var(--text-accent)" : "var(--text-muted)" }}>
        <span
          style={{
            color: restColor || (accent ? "var(--orange-500)" : "var(--heading-rest,#1B87C9)"),
            fontWeight: 700,
            whiteSpace: "pre-line",
          }}
        >
          {r}
          {rs && <span style={restStop}>{rs}</span>}
        </span>
      </span>
    </Tag>
  );
}
