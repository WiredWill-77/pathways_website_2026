import { pad2 } from "@/lib/utils";
import type { AboutLeader } from "@/types/company";

/** Four-up management grid with dot-grid portrait wells. Collapses via .pt-leadgrid in site.css. */
export function LeaderGrid({ leaders }: { leaders: AboutLeader[] }) {
  return (
    <div
      className="pt-leadgrid"
      style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", border: "1px solid var(--grid-line)", borderRadius: "var(--radius-md)", overflow: "hidden", background: "var(--stone-0)" }}
    >
      {leaders.map((p, i) => (
        <div key={p.name} className="pt-leadcell" style={{ borderLeft: i ? "1px solid var(--grid-line)" : "none", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              position: "relative",
              background: "var(--bg-muted)",
              backgroundImage: "var(--dot-grid)",
              backgroundSize: "var(--dot-grid-size)",
              borderBottom: "1px solid var(--grid-line)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding: "34px 12% 30px",
            }}
          >
            <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "46%", background: "linear-gradient(180deg,transparent,rgba(27,135,201,.10))" }} />
            <img
              src={p.portrait}
              alt={p.name}
              style={{ position: "relative", width: "100%", maxWidth: 190, aspectRatio: "1 / 1", objectFit: "cover", display: "block", borderRadius: "50%", boxShadow: "0 10px 26px rgba(15,32,56,.14)" }}
            />
          </div>
          <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", gap: 0, flex: 1 }}>
            <span style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>{pad2(i + 1)}</span>
            <h3 style={{ fontSize: 19, margin: "8px 0 3px", fontWeight: 500, lineHeight: 1.25 }}>{p.name}</h3>
            <div style={{ fontSize: 13, color: "var(--secondary-text)", marginBottom: 12 }}>{p.role}</div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6, margin: "0 0 16px" }}>{p.bio}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
              {p.focus.map((f) => (
                <span
                  key={f}
                  style={{ display: "inline-flex", alignItems: "center", height: 24, padding: "0 9px", borderRadius: "var(--radius-pill)", border: "1px solid var(--border-hairline)", fontSize: 11.5, color: "var(--text-secondary)" }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
