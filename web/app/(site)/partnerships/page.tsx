import type { Metadata } from "next";
import Link from "next/link";
import { PtCtaBand } from "@/components/blocks";
import { PtButton } from "@/components/brand/PtButton";
import { CompanyHero } from "@/components/contact/CompanyHero";
import { Section } from "@/components/layout/Frame";
import { ClientWall, TrustBar } from "@/components/layout/TrustBar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FaqItem } from "@/components/ui/FaqItem";
import { Icon } from "@/components/ui/Icon";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { getPartnershipsContent } from "@/lib/data/company";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "Microsoft, Google Cloud, Automation Anywhere, Infobip and Konza Technopolis: the platforms Pathways is certified to build on.",
};

const HEADING = "clamp(23px,4.6vw,32px)";
const dashed = "1px dashed var(--border-hairline)";

export default async function PartnershipsPage() {
  const p = await getPartnershipsContent();

  return (
    <>
      <CompanyHero hero={p.hero} padding="92px 0 76px" maxWidth={860} headingMaxWidth={860} size="clamp(34px,3.6vw,50px)" actionsGap={32} />

      <Section index="01" label="Partners" right="Who We Build With" id="partners">
        <TwoToneHeading size={HEADING} maxWidth={820} lead={p.partnersHeading.lead} rest={p.partnersHeading.rest} />
        <div style={{ marginTop: 44, display: "grid", gap: 24 }}>
          {p.partners.map((partner, i) => (
            <Card key={partner.slug} hover padding={0}>
              <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "290px minmax(0,1fr)", gap: 0, alignItems: "stretch" }}>
                <div style={{ padding: "30px", borderRight: "1px solid var(--grid-line)", display: "flex", flexDirection: "column", gap: 18 }}>
                  <div className="pt-plate" style={{ height: 78 }}>
                    <img src={partner.logo} alt={partner.name + " logo"} />
                  </div>
                  <div>
                    <Badge tone="accent">{partner.status}</Badge>
                    <h2 style={{ fontSize: 20, margin: "14px 0 0", fontWeight: 500 }}>{partner.name}</h2>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: "auto" }}>
                    {partner.proof.map((x) => (
                      <span key={x} style={{ display: "flex", gap: 9, alignItems: "center", fontSize: 12.5, color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--secondary-text)", display: "inline-flex" }}>
                          <Icon name="check" size={14} />
                        </span>
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "30px" }}>
                  <div style={{ fontSize: "var(--text-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>
                    [0{i + 1}] What We Do Together
                  </div>
                  <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 0, maxWidth: 640 }}>{partner.summary}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
                    {partner.capabilities.map((c) => (
                      <span
                        key={c}
                        style={{ display: "inline-flex", alignItems: "center", height: 34, padding: "0 14px", borderRadius: "var(--radius-pill)", border: "1px solid var(--border-hairline)", fontSize: 13.5, color: "var(--text-primary)", background: "var(--stone-50)" }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <Link href={routes.contact} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, marginTop: 24, textDecoration: "none", color: "var(--secondary-text)" }}>
                    Scope A {partner.name} Engagement <Icon name="arrow-right" size={15} />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section index="02" label="Stack" right="How It Fits Together" bg="var(--bg-subtle)">
        <TwoToneHeading size={HEADING} maxWidth={820} lead={p.stackHeading.lead} rest={p.stackHeading.rest} />
        <div className="pt-2col" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", border: dashed }}>
          {p.stack.map((s, i) => (
            <div key={s.title} style={{ padding: "28px 24px", borderRight: i < p.stack.length - 1 ? dashed : "none" }}>
              <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginBottom: 14 }}>
                <Icon name={s.icon} size={22} />
              </span>
              <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{s.title}</div>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="pt-3col" style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 24 }}>
          {p.benefits.map((b) => (
            <Card key={b.title} padding={28}>
              <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginBottom: 14 }}>
                <Icon name={b.icon} size={22} />
              </span>
              <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{b.title}</div>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>{b.text}</p>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <TrustBar />
        </div>
      </Section>

      <PtCtaBand
        imageId="cta-partnerships"
        title={p.ctaBand.title}
        actions={
          <>
            <PtButton tone="primary" size="md" arrow href={routes.contact}>
              Book A Demo
            </PtButton>
            <PtButton tone="ghost" onDark size="md" href={"mailto:" + p.ctaBand.email}>
              Email The Partner Team
            </PtButton>
          </>
        }
      >
        {p.ctaBand.text}
      </PtCtaBand>

      <Section index="03" label="Clients" right="Programme Partners">
        <TwoToneHeading size={HEADING} maxWidth={820} lead={p.clientsHeading.lead} rest={p.clientsHeading.rest} />
        <ClientWall label={null} />
      </Section>

      <Section index="04" label="Become A Partner" right="Work With Us">
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          <div>
            <TwoToneHeading size="clamp(23px,4.6vw,30px)" lead={p.become.lead} rest={p.become.rest} />
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: 20, maxWidth: 480 }}>{p.become.text}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
              <PtButton tone="primary" size="md" arrow href={p.become.cta.href}>
                {p.become.cta.label}
              </PtButton>
            </div>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            {p.become.tracks.map((t) => (
              <Card key={t.title} padding={24}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginTop: 2 }}>
                    <Icon name={t.icon} size={20} />
                  </span>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 6 }}>{t.title}</div>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>{t.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section index="05" label="Ask" right="Partner Questions" bg="var(--bg-subtle)">
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {p.faqs.map((f, i) => (
            <FaqItem key={f.question} question={f.question} defaultOpen={i === 0}>
              {f.answer}
            </FaqItem>
          ))}
        </div>
      </Section>
    </>
  );
}
