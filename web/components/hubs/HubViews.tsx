/** Hub pages for the Services, Solutions and Resources menus (prototype: hubs.jsx). */
import Link from "next/link";
import { ClosingCta, DataTable, PageHero, SlotFigure, StatBand, Stepper } from "@/components/blocks";
import { PtButton } from "@/components/brand/PtButton";
import { Frame, Section } from "@/components/layout/Frame";
import { ClientWall } from "@/components/layout/TrustBar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { asset } from "@/lib/utils";
import type { ResourcesHub, ServicesHub, SolutionsHub } from "@/types/hubs";
import type { ClosingCopy } from "@/types/services";

const H32 = "clamp(23px,4.6vw,32px)";

function Closing({ c }: { c: ClosingCopy }) {
  return (
    <ClosingCta title={c.title} secondary={c.secondary}>
      {c.text}
    </ClosingCta>
  );
}

/* ---------------------------------------------------------------- Services */

export function ServicesHubView({ hub }: { hub: ServicesHub }) {
  return (
    <>
      <PageHero {...hub.hero} />
      <Frame>
        <ClientWall label={hub.clientWallLabel} />
      </Frame>
      <Section index="01" label="Services" right="Where To Start">
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 24 }}>
          {hub.services.map((s) => (
            <Card key={s.slug} hover padding={30}>
              <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginBottom: 16 }}>
                <Icon name={s.icon} size={24} />
              </span>
              <h2 style={{ fontSize: 21, margin: "0 0 10px", fontWeight: 500 }}>{s.name}</h2>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.65, minHeight: 66 }}>{s.blurb}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                {s.points.map((p) => (
                  <li key={p} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--text-sm)" }}>
                    <span style={{ width: 5, height: 5, borderRadius: 99, background: "var(--primary)", flex: "0 0 auto" }} />
                    {p}
                  </li>
                ))}
              </ul>
              <Link href={s.href} className="pt-textlink">
                Explore {s.name}
                <Icon name="arrow-right" size={15} />
              </Link>
            </Card>
          ))}
        </div>
      </Section>
      <Section index="02" label="How We Work" right="Four Steps" bg="var(--bg-subtle)">
        <TwoToneHeading size={H32} maxWidth={820} lead={hub.howHeading.lead} rest={hub.howHeading.rest} />
        <div style={{ marginTop: 44 }}>
          <Stepper steps={hub.how} />
        </div>
        <div style={{ marginTop: 44 }}>
          <StatBand stats={hub.stats} />
        </div>
        <div style={{ marginTop: 24 }}>
          <SlotFigure id={hub.figure.id} caption={hub.figure.caption} />
        </div>
      </Section>
      <Closing c={hub.closing} />
    </>
  );
}

/* ---------------------------------------------------------------- Solutions */

export function SolutionsHubView({ hub }: { hub: SolutionsHub }) {
  return (
    <>
      <PageHero {...hub.hero} />
      <Section index="01" label="By Industry" right="Sector Depth">
        <TwoToneHeading size={H32} maxWidth={820} lead={hub.industriesHeading.lead} rest={hub.industriesHeading.rest} />
        <div style={{ marginTop: 44, display: "grid", gap: 20 }}>
          {hub.industries.map((s) => (
            <Card key={s.slug} hover padding={0}>
              <Link
                href={s.href}
                className="pt-indrow"
                style={{ textDecoration: "none", color: "inherit", display: "grid", gridTemplateColumns: "minmax(0,240px) minmax(0,1fr) auto", alignItems: "center", gap: 0 }}
              >
                <div className="pt-indimg" style={{ height: 150, overflow: "hidden", background: "var(--bg-muted)" }}>
                  <img src={asset(s.img)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: "24px 30px" }}>
                  <h2 style={{ fontSize: 20, margin: "0 0 8px", fontWeight: 500 }}>{s.name}</h2>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0, maxWidth: 520 }}>{s.line}</p>
                </div>
                <div className="pt-indstat" style={{ padding: "24px 30px", textAlign: "right" }}>
                  <div style={{ fontSize: 24, fontWeight: 600, color: "var(--primary)", letterSpacing: "-0.02em" }}>{s.stat.value}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{s.stat.label}</div>
                  <span style={{ display: "inline-flex", marginTop: 12, color: "var(--secondary-text)" }}>
                    <Icon name="arrow-right" size={18} />
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </Section>
      <Section index="02" label="By Role" right="Start From What You Own" bg="var(--bg-subtle)">
        <TwoToneHeading size={H32} maxWidth={820} lead={hub.rolesHeading.lead} rest={hub.rolesHeading.rest} />
        <div className="pt-2col" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 16 }}>
          {hub.roles.map((r) => (
            <Link
              key={r.slug}
              href={r.href}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "grid",
                gridTemplateColumns: "38px minmax(0,1fr) auto",
                gap: 14,
                alignItems: "center",
                padding: "18px 20px",
                border: "1px solid var(--grid-line)",
                borderRadius: "var(--radius-md)",
                background: "var(--stone-0)",
              }}
            >
              <span
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-hairline)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--secondary-text)",
                }}
              >
                <Icon name={r.icon} size={18} />
              </span>
              <span>
                <span style={{ display: "block", fontSize: 16, fontWeight: 500 }}>{r.title}</span>
                <span style={{ display: "block", fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>{r.line}</span>
              </span>
              <span style={{ color: "var(--text-muted)", display: "inline-flex" }}>
                <Icon name="arrow-right" size={16} />
              </span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <StatBand stats={hub.stats} tone="dark" />
        </div>
      </Section>
      <Frame>
        <ClientWall label={hub.clientWallLabel} />
      </Frame>
      <Closing c={hub.closing} />
    </>
  );
}

/* ---------------------------------------------------------------- Resources */

export function ResourcesHubView({ hub }: { hub: ResourcesHub }) {
  return (
    <>
      <PageHero {...hub.hero} />
      <Section index="01" label="Featured" right="Start Here">
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 24 }}>
          {hub.featured.map((f) => (
            <Card key={f.title} hover padding={0}>
              <div style={{ height: 210, overflow: "hidden", background: "var(--bg-muted)", borderRadius: "var(--radius-md) var(--radius-md) 0 0" }}>
                <img src={f.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{f.kicker}</div>
                <h2 style={{ fontSize: 21, margin: "10px 0 10px", fontWeight: 500 }}>{f.title}</h2>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.65 }}>{f.note}</p>
                <Link href={f.href} className="pt-textlink" aria-label={"Open " + f.title}>
                  Open
                  <Icon name="arrow-right" size={15} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section index="02" label="Library" right="Browse By Type" bg="var(--bg-subtle)">
        <div className="pt-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 20 }}>
          {hub.library.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              style={{
                textDecoration: "none",
                color: "inherit",
                padding: "26px 24px",
                border: "1px solid var(--grid-line)",
                borderRadius: "var(--radius-md)",
                background: "var(--stone-0)",
                display: "block",
              }}
            >
              <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginBottom: 14 }}>
                <Icon name={r.icon} size={22} />
              </span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontSize: 18, fontWeight: 500 }}>{r.title}</span>
                <span style={{ fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{r.meta}</span>
              </div>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: "8px 0 0" }}>{r.text}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section index="03" label="Events" right="Where To Meet Us">
        <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead={hub.eventsHeading.lead} rest={hub.eventsHeading.rest} />
        <div style={{ marginTop: 36 }}>
          <DataTable head={["Date", "Where", "Session", "Who It Is For"]} rows={hub.events.map((e) => [e.date, e.where, e.session, e.audience])} />
        </div>
        <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Badge tone="neutral">{hub.invitations.badge}</Badge>
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{hub.invitations.text}</span>
          <PtButton tone="secondary" size="md" href={hub.invitations.cta.href}>
            {hub.invitations.cta.label}
          </PtButton>
        </div>
      </Section>
      <Closing c={hub.closing} />
    </>
  );
}
