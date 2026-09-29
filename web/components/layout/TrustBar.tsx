import { getSiteSettings } from "@/lib/data/site";
import type { ClientLogo } from "@/types/site";

/** Credibility chips. Async server component: reads the marks from the data layer. */
export async function TrustBar() {
  const { trustMarks } = await getSiteSettings();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
      {trustMarks.map((t) => (
        <span
          key={t}
          style={{ display: "inline-flex", alignItems: "center", height: 32, padding: "0 14px", borderRadius: "var(--radius-pill)", border: "1px solid var(--border-hairline)", fontSize: "var(--text-xs)", color: "var(--text-secondary)", whiteSpace: "nowrap" }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

type ClientWallProps = { label?: string | null; tone?: "light" | "dark"; clients?: ClientLogo[] };

/** Client and programme-partner logo plates. Pass `clients` to skip the fetch (e.g. inside client trees). */
export async function ClientWall({ label = "Trusted By Governments, Insurers And Global NGOs", tone = "light", clients }: ClientWallProps) {
  const list = clients ?? (await getSiteSettings()).clients;
  return <ClientWallView label={label} tone={tone} clients={list} />;
}

export function ClientWallView({ label, tone = "light", clients }: { label?: string | null; tone?: "light" | "dark"; clients: ClientLogo[] }) {
  const dark = tone === "dark";
  return (
    <div style={{ padding: "44px 0" }}>
      {label && (
        <div style={{ fontSize: "var(--text-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: dark ? "var(--text-muted)" : "var(--text-secondary)", marginBottom: 20 }}>
          {label}
        </div>
      )}
      <div className="pt-clientwall">
        {clients.map((c) => (
          <div key={c.name} className={"pt-plate" + (dark ? "" : " on-light")} style={{ height: 78 }}>
            <img src={c.src} alt={c.name + " logo"} style={{ maxHeight: c.maxHeight }} />
          </div>
        ))}
      </div>
    </div>
  );
}
