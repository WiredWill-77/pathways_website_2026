import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  padding?: number | string;
  dashed?: boolean;
  tone?: "plain" | "subtle" | "dark";
  /** Dot-grid texture behind product panels. */
  dots?: boolean;
  /** Lift to the raised shadow on hover. */
  hover?: boolean;
};

/** 1px hairline, 12px radius, no shadow at rest. */
export function Card({ padding = 28, dashed, tone = "plain", dots, hover, className, style, ...rest }: CardProps) {
  const s: CSSProperties = { padding, ...style };
  return (
    <div
      className={cn("ds-card", `ds-card-${tone}`, dashed && "is-dashed", dots && "has-dots", hover && "is-hover", className)}
      style={s}
      {...rest}
    />
  );
}
