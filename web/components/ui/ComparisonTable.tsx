import type { CSSProperties, ReactNode } from "react";

export type ComparisonColumn = { title: string; kicker?: string; note?: string };
export type ComparisonRow = { label: string; values: (ReactNode | boolean)[] };

const eyebrow: CSSProperties = {
  fontSize: "var(--text-eyebrow)",
  letterSpacing: "var(--tracking-eyebrow)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
};

/** Feature comparison grid. `true` renders a green tick, `false` a muted dash. */
export function ComparisonTable({ columns, rows, style }: { columns: ComparisonColumn[]; rows: ComparisonRow[]; style?: CSSProperties }) {
  const grid = `1.6fr repeat(${columns.length},1fr)`;
  return (
    <div style={{ border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-md)", overflow: "hidden", background: "var(--stone-0)", ...style }}>
      <div style={{ display: "grid", gridTemplateColumns: grid, background: "var(--bg-subtle)", borderBottom: "1px solid var(--border-hairline)" }}>
        <div style={{ padding: "18px 24px", ...eyebrow }}>Comparison</div>
        {columns.map((c) => (
          <div key={c.title} style={{ padding: "18px 24px", borderLeft: "1px solid var(--border-hairline)" }}>
            <div style={{ ...eyebrow, marginBottom: 6 }}>{c.kicker}</div>
            <div style={{ fontSize: 22, fontWeight: 500 }}>{c.title}</div>
            {c.note && <div style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", marginTop: 4 }}>{c.note}</div>}
          </div>
        ))}
      </div>
      {rows.map((r, i) => (
        <div
          key={r.label}
          style={{ display: "grid", gridTemplateColumns: grid, borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border-hairline)" }}
        >
          <div style={{ padding: "14px 24px", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{r.label}</div>
          {r.values.map((v, j) => (
            <div key={j} style={{ padding: "14px 24px", fontSize: "var(--text-sm)", borderLeft: "1px solid var(--border-hairline)", color: "var(--text-primary)" }}>
              {v === true ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-label="Included">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              ) : v === false ? (
                <span style={{ color: "var(--stone-400)" }} aria-label="Not included">
                  {"—"}
                </span>
              ) : (
                v
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
