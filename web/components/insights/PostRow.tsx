import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { routes } from "@/lib/routes";
import { asset } from "@/lib/utils";
import type { BlogPostSummary } from "@/types/blog";

/** One row of the Insights index: thumbnail, categories, title, excerpt, date and arrow. */
export function PostRow({ post }: { post: BlogPostSummary }) {
  const { slug, hero, thumb, categories, title, excerpt, date } = post;
  return (
    <Card hover padding={0}>
      <Link
        href={routes.insight(slug)}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "grid",
          gridTemplateColumns: hero ? "minmax(0,200px) minmax(0,1fr) auto" : "minmax(0,1fr) auto",
          alignItems: "stretch",
          gap: 0,
        }}
      >
        {hero && (
          <div
            style={{
              alignSelf: "stretch",
              overflow: "hidden",
              background: thumb ? "#FFFFFF" : "var(--bg-muted)",
              margin: "16px 8px 16px 16px",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={asset(thumb || hero)}
              alt=""
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: thumb ? "contain" : "cover", display: "block", borderRadius: "var(--radius-md)" }}
            />
          </div>
        )}
        <div style={{ padding: "24px 30px 24px 18px" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
            {categories.map((c) => (
              <Badge key={c} tone="neutral">
                {c}
              </Badge>
            ))}
          </div>
          <h2 style={{ fontSize: 19, margin: "0 0 8px", fontWeight: 500, lineHeight: 1.35 }}>{title}</h2>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0, maxWidth: 600 }}>{excerpt}</p>
        </div>
        <div style={{ padding: "24px 30px", textAlign: "right" }}>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{date}</div>
          <span style={{ display: "inline-flex", marginTop: 12, color: "var(--secondary-text)" }}>
            <Icon name="arrow-right" size={18} />
          </span>
        </div>
      </Link>
    </Card>
  );
}
