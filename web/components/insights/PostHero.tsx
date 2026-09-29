import { Frame } from "@/components/layout/Frame";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/types/blog";

/** Dark title band at the top of a single Insights post. The page's H1. */
export function PostHero({ post }: { post: Pick<BlogPost, "title" | "date" | "excerpt" | "categories"> }) {
  return (
    <Frame bg="var(--ink-700)">
      <div style={{ padding: "88px 0 56px", maxWidth: 820 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          {post.categories.map((c) => (
            <Badge key={c} tone="accent" style={{ color: "var(--pt-cat-ink)" }}>
              {c}
            </Badge>
          ))}
        </div>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, margin: 0 }}>{post.title}</h1>
        <div style={{ color: "#EC8425", fontSize: 14, marginTop: 18 }}>{post.date}</div>
        <p style={{ color: "rgba(255,255,255,.82)", fontSize: 17, marginTop: 22, maxWidth: 700, lineHeight: 1.6 }}>{post.excerpt}</p>
      </div>
    </Frame>
  );
}
