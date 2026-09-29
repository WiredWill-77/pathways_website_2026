import Link from "next/link";
import type { ReactNode } from "react";
import { legacyHref } from "@/lib/routes";

/**
 * Inline markdown used by CMS-authored body copy (prototype: cms-publish.jsx ptMd).
 * Supports **bold**, *italic* and [links](href). A line starting "# " renders as a bold lead-in,
 * and "- " / "* " list markers become a bullet. One paragraph per call.
 */
export function renderInline(s: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)\s]+)\))/g;
  let m: RegExpExecArray | null;
  let i = 0;
  let k = 0;
  while ((m = re.exec(s))) {
    if (m.index > i) out.push(s.slice(i, m.index));
    if (m[2]) {
      out.push(
        <strong key={k++} style={{ color: "var(--text-primary)", fontWeight: 600 }}>
          {m[2]}
        </strong>,
      );
    } else if (m[3]) {
      out.push(<em key={k++}>{m[3]}</em>);
    } else {
      const href = legacyHref(m[5]);
      out.push(
        /^(https?:|mailto:|tel:)/.test(href) ? (
          <a key={k++} href={href} target="_blank" rel="noopener noreferrer">
            {m[4]}
          </a>
        ) : (
          <Link key={k++} href={href}>
            {m[4]}
          </Link>
        ),
      );
    }
    i = re.lastIndex;
  }
  if (i < s.length) out.push(s.slice(i));
  return out;
}

export function Md({ text }: { text: string }) {
  const s = String(text || "");
  const h = s.match(/^#{1,6}\s+(.*)$/);
  if (h) return <strong style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.08em" }}>{renderInline(h[1])}</strong>;
  return <>{renderInline(s.replace(/^[-*]\s+/, "• "))}</>;
}
