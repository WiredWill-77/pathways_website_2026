import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";

type FeatureCellProps = Omit<ComponentPropsWithoutRef<"div">, "title"> & { icon?: ReactNode; title: ReactNode };

/** One cell of a dashed feature grid: icon, title, short paragraph. */
export function FeatureCell({ icon, title, children, style, ...rest }: FeatureCellProps) {
  return (
    <div style={{ padding: "34px 40px 40px", ...style }} {...rest}>
      <div style={{ color: "var(--blue-500)", marginBottom: 34, display: "flex" }}>{icon}</div>
      <div
        style={{
          fontSize: 17,
          fontWeight: "var(--weight-medium)" as CSSProperties["fontWeight"],
          letterSpacing: "-0.01em",
          marginBottom: 12,
        }}
      >
        {title}
      </div>
      <p style={{ fontSize: "var(--text-sm)", lineHeight: 1.65, color: "var(--text-secondary)", maxWidth: 340 }}>{children}</p>
    </div>
  );
}
