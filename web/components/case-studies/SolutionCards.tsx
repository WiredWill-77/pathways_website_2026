import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import type { IconItem } from "@/types/blocks";

/**
 * The "What We Built" icon cards. Same markup as the shared IconCards block, which only takes
 * 2 or 3 columns; case studies with more than three items use four (prototype: cols={n>3?4:n}).
 */
export function SolutionCards({ items }: { items: IconItem[] }) {
  const cols = items.length > 3 ? 4 : items.length;
  return (
    <div className={cols === 3 ? "pt-3col" : "pt-2col"} style={{ display: "grid", gridTemplateColumns: `repeat(${cols},minmax(0,1fr))`, gap: 24 }}>
      {items.map((it) => (
        <Card key={it.title} padding={28}>
          <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginBottom: 14 }}>
            <Icon name={it.icon} size={22} />
          </span>
          <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{it.title}</div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>{it.text}</p>
        </Card>
      ))}
    </div>
  );
}
