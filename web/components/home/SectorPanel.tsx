"use client";

import { useState } from "react";
import { SectorDashboard } from "@/components/dashboards/SectorDashboard";
import { Icon } from "@/components/ui/Icon";
import type { RoleName, SectorBoards, SectorSummary } from "@/types/dashboards";

const eyebrow = { fontSize: "var(--text-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--blue-400)", fontWeight: 500 } as const;

/** [02] Solutions: pick an industry, then a role, and the board highlights the panel that role owns. */
export function SectorPanel({ sectors, roles, boards }: { sectors: SectorSummary[]; roles: RoleName[]; boards: SectorBoards }) {
  const [i, setI] = useState(0);
  const [role, setRole] = useState<RoleName | null>(null);
  const sector = sectors[i];
  return (
    <div className="pt-solutions" style={{ marginTop: 48, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.25fr)", gap: 40, alignItems: "start" }}>
      <div style={{ border: "1px solid var(--grid-line)", background: "var(--stone-0)" }}>
        <div style={{ ...eyebrow, padding: "16px 28px 0" }}>By Industry</div>
        {sectors.map((s, n) => {
          const on = n === i;
          return (
            <button
              key={s.name}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setI(n);
                setRole(null);
              }}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                padding: "20px 28px",
                textAlign: "left",
                cursor: "pointer",
                border: "none",
                borderTop: n ? "1px solid var(--grid-line)" : "none",
                marginTop: n ? 0 : 14,
                font: "inherit",
                background: on ? "var(--bg-muted)" : "transparent",
                transition: "background var(--duration-base) var(--ease-standard)",
              }}
            >
              <span style={{ display: "flex", gap: 12, alignItems: "flex-start", minWidth: 0 }}>
                <span style={{ width: 7, height: 7, borderRadius: 99, marginTop: 8, flex: "0 0 auto", background: on ? "var(--primary)" : "var(--stone-400)" }} />
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: 16.5, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--text-primary)" }}>{s.name}</span>
                  <span style={{ display: "block", fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: 5 }}>{s.blurb}</span>
                </span>
              </span>
              <span style={{ color: "var(--secondary-text)", display: "inline-flex", opacity: on ? 1 : 0.5, flex: "0 0 auto" }}>
                <Icon name="arrow-right" size={18} />
              </span>
            </button>
          );
        })}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, marginBottom: 16 }}>
          <div style={eyebrow}>By Role</div>
          <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Illustrative Dashboard</div>
        </div>
        <SectorDashboard sector={sector.name} boards={boards} role={role} compact />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }} role="group" aria-label="Filter by role">
          {roles.map((r) => {
            const on = role === r;
            return (
              <button
                key={r}
                type="button"
                aria-pressed={on}
                onClick={() => setRole(on ? null : r)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: 36,
                  padding: "0 16px",
                  borderRadius: "var(--radius-pill)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 14,
                  fontWeight: on ? 500 : 400,
                  border: "1px solid " + (on ? "var(--primary)" : "var(--border-hairline)"),
                  background: on ? "var(--primary)" : "var(--stone-0)",
                  color: on ? "var(--on-primary)" : "var(--text-primary)",
                  transition: "background var(--duration-base) var(--ease-standard),color var(--duration-base) var(--ease-standard)",
                }}
              >
                {r}
              </button>
            );
          })}
        </div>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: 20, maxWidth: 520 }} aria-live="polite">
          {role
            ? `${role} teams in ${sector.name} sit at ${sector.roles[role]}% adoption, the highlighted panel is the one they own.`
            : "Pick a role to see which panel that team owns. Every engagement starts with the people who use the output."}
        </p>
        <div style={{ display: "flex", gap: 24, marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--grid-line)", fontSize: "var(--text-xs)", color: "var(--text-secondary)", flexWrap: "wrap" }}>
          <span className="pt-stat">
            Median Time To Value <strong style={{ color: "var(--secondary-text)", fontWeight: 500 }}>{sector.ttv}</strong>
          </span>
          <span className="pt-stat">
            Data Coverage <strong style={{ color: "var(--secondary-text)", fontWeight: 500 }}>{sector.coverage}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
