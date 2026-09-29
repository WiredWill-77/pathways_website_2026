import type { CSSProperties } from "react";
import type { Office } from "@/types/company";

const eyebrow: CSSProperties = { fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" };

/**
 * The shared DataTable, with one addition: the middle cell holds several lines (the prototype
 * used a <br/> there, which the shared block's string cells cannot carry).
 */
export function OfficeTable({ head, offices }: { head: string[]; offices: Office[] }) {
  const grid = `repeat(${head.length},minmax(0,1fr))`;
  const cell = (primary: boolean): CSSProperties => ({ fontSize: primary ? 15 : "var(--text-sm)", fontWeight: primary ? 500 : 400, color: primary ? "var(--text-primary)" : "var(--text-secondary)" });
  return (
    <div className="pt-scrollx" style={{ border: "1px solid var(--grid-line)", borderRadius: "var(--radius-md)", background: "var(--stone-0)" }}>
      <div role="table">
        <div role="row" style={{ display: "grid", gridTemplateColumns: grid, background: "var(--bg-muted)", padding: "14px 22px", gap: 16 }}>
          {head.map((h) => (
            <div role="columnheader" key={h} style={eyebrow}>
              {h}
            </div>
          ))}
        </div>
        {offices.map((o) => (
          <div role="row" key={o.city} style={{ display: "grid", gridTemplateColumns: grid, gap: 16, padding: "18px 22px", borderTop: "1px solid var(--grid-line)", alignItems: "center" }}>
            <div role="cell" style={cell(true)}>
              {o.city}
            </div>
            <div role="cell" style={cell(false)}>
              {o.lines.map((l, i) => (
                <span key={l}>
                  {i > 0 && <br />}
                  {l}
                </span>
              ))}
            </div>
            <div role="cell" style={cell(false)}>
              {o.area}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
