import Link from "next/link";
import type { CSSProperties } from "react";
import type { Footer as FooterData } from "@/types/site";

const link: CSSProperties = { fontSize: "var(--text-sm)", color: "var(--text-on-dark-muted)", textDecoration: "none" };

export function Footer({ footer, trustMarks }: { footer: FooterData; trustMarks: string[] }) {
  return (
    <footer style={{ background: "var(--bg-footer)", color: "var(--text-on-dark)", padding: "64px 40px 32px" }}>
      {/* minWidth 0 + overflowWrap stop the unbreakable email address from pushing the two-column
          mobile grid wider than the viewport (a horizontal-scroll bug in the prototype). */}
      <div className="pt-footgrid" style={{ maxWidth: 1216, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr repeat(4,1fr)", gap: 40 }}>
        <div style={{ minWidth: 0, overflowWrap: "anywhere" }}>
          <img src="/uploads/Pathways Technologies Logo - White 1.png" alt="Pathways Technologies" style={{ height: 54, width: "auto", display: "block" }} />
          <address style={{ marginTop: 20, fontSize: "var(--text-sm)", color: "var(--text-on-dark-muted)", lineHeight: 1.8, fontStyle: "normal" }}>
            <div>{footer.address}</div>
            <div>
              <a href={`mailto:${footer.email}`} style={link}>
                {footer.email}
              </a>
            </div>
            <div>
              <a href={footer.phoneHref} style={link}>
                {footer.phone}
              </a>
            </div>
          </address>
        </div>
        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title} style={{ minWidth: 0 }}>
            <div style={{ fontSize: "var(--text-sm)", fontWeight: 500, marginBottom: 18, color: "#FFFFFF" }}>{col.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} style={link}>
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        ))}
      </div>
      <div style={{ maxWidth: 1216, margin: "40px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.10)", display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
        {trustMarks.map((t) => (
          <span
            key={t}
            style={{ display: "inline-flex", alignItems: "center", height: 30, padding: "0 12px", borderRadius: "var(--radius-pill)", border: "1px solid rgba(255,255,255,.16)", fontSize: "var(--text-xs)", color: "var(--text-on-dark-muted)", whiteSpace: "nowrap" }}
          >
            {t}
          </span>
        ))}
      </div>
      <div
        className="pt-legal"
        style={{ maxWidth: 1216, margin: "20px auto 0", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.10)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: "var(--text-xs)", color: "var(--text-on-dark-muted)" }}
      >
        <span>{footer.copyright}</span>
        <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          {footer.legal.map((l) => (
            <Link key={l.label} href={l.href} style={link}>
              {l.label}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  );
}
