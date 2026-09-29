import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { routes } from "@/lib/routes";
import { asset } from "@/lib/utils";
import type { CaseStudySummary } from "@/types/case-studies";

/** One row of the Case Studies index. Stacks on mobile through the pt-indrow rules in site.css. */
export function CaseStudyRow({ study }: { study: CaseStudySummary }) {
  const { slug, hero, category, client, intro, published } = study;
  return (
    <Card hover padding={0}>
      <Link
        href={routes.caseStudy(slug)}
        className="pt-indrow"
        style={{ textDecoration: "none", color: "inherit", display: "grid", gridTemplateColumns: "minmax(0,240px) minmax(0,1fr) auto", alignItems: "center", gap: 0 }}
      >
        <div className="pt-indimg" style={{ height: 150, overflow: "hidden", background: "var(--bg-muted)" }}>
          {hero && <img src={asset(hero)} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
        </div>
        <div style={{ padding: "24px 30px" }}>
          <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "var(--tracking-eyebrow)" }}>
            {category}
          </div>
          <h2 style={{ fontSize: 20, margin: "0 0 8px", fontWeight: 500 }}>{client}</h2>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0, maxWidth: 520 }}>{intro}</p>
        </div>
        <div className="pt-indstat" style={{ padding: "24px 30px", textAlign: "right" }}>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{published}</div>
          <span style={{ display: "inline-flex", marginTop: 12, color: "var(--secondary-text)" }}>
            <Icon name="arrow-right" size={18} />
          </span>
        </div>
      </Link>
    </Card>
  );
}
