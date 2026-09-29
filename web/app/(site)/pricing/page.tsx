import type { Metadata } from "next";
import { PtCtaBand } from "@/components/blocks";
import { PtButton } from "@/components/brand/PtButton";
import { CompanyHero } from "@/components/contact/CompanyHero";
import { Section } from "@/components/layout/Frame";
import { TrustBar } from "@/components/layout/TrustBar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FaqItem } from "@/components/ui/FaqItem";
import { Icon } from "@/components/ui/Icon";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { getPricingContent } from "@/lib/data/company";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Starting rates for Pathways plans, products and engagement models: fixed for discovery, monthly for delivery, per-seat for products.",
};

const HEADING = "clamp(23px,4.6vw,30px)";

export default async function PricingPage() {
  const p = await getPricingContent();

  return (
    <>
      <CompanyHero hero={p.hero} padding="80px 0 68px" maxWidth={820} size="clamp(34px,3.4vw,46px)" />

      <Section index="01" label="Plans" right="Platform Subscriptions">
        <div className="pt-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 24 }}>
          {p.plans.map((plan) => (
            <Card key={plan.name} hover padding={32} style={plan.featured ? { borderColor: "var(--primary)" } : undefined}>
              {plan.featured && <Badge tone="accent">Most Chosen</Badge>}
              <h2 style={{ fontSize: 20, margin: plan.featured ? "18px 0 8px" : "0 0 8px", fontWeight: 500 }}>{plan.name}</h2>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.03em" }}>{plan.price}</span>
                <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{plan.per}</span>
              </div>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", minHeight: 62 }}>{plan.blurb}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px", display: "flex", flexDirection: "column", gap: 11 }}>
                {plan.items.map((x) => (
                  <li key={x} style={{ display: "flex", gap: 10, fontSize: "var(--text-sm)", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginTop: 2 }}>
                      <Icon name="check" size={15} />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <PtButton tone={plan.featured ? "primary" : "secondary"} size="md" href={routes.contact}>
                {plan.cta}
              </PtButton>
            </Card>
          ))}
        </div>
        <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: 22 }}>{p.plansNote}</p>
      </Section>

      <Section index="02" label="Products" right="Per-Seat And Usage" bg="var(--bg-subtle)">
        <TwoToneHeading size={HEADING} maxWidth={780} lead={p.productsHeading.lead} rest={p.productsHeading.rest} />
        <div style={{ marginTop: 40, border: "1px solid var(--grid-line)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
          {p.productRates.map((r, i) => (
            <div
              key={r.name}
              className="pt-2col"
              style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 24, padding: "22px 26px", background: "var(--stone-0)", borderTop: i ? "1px solid var(--grid-line)" : "none", alignItems: "center" }}
            >
              <div>
                <div style={{ fontSize: 18, fontWeight: 500 }}>{r.name}</div>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: 6 }}>{r.description}</div>
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 600, color: "var(--primary)", letterSpacing: "-0.02em" }}>{r.rate}</div>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: 4 }}>{r.note}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section index="03" label="Services" right="Engagement Models">
        <TwoToneHeading size={HEADING} maxWidth={780} lead={p.engagementsHeading.lead} rest={p.engagementsHeading.rest} />
        <div className="pt-2col" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {p.engagements.map((e) => (
            <Card key={e.title} padding={28}>
              <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginBottom: 14 }}>
                <Icon name={e.icon} size={22} />
              </span>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "baseline", flexWrap: "wrap" }}>
                <div style={{ fontSize: 18, fontWeight: 500 }}>{e.title}</div>
                <div style={{ fontSize: 15, color: "var(--primary)", fontWeight: 500 }}>{e.rate}</div>
              </div>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: 10, marginBottom: 0 }}>{e.text}</p>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <TrustBar />
        </div>
      </Section>

      <PtCtaBand
        imageId="cta-pricing"
        title={p.ctaBand.title}
        actions={
          <>
            <PtButton tone="primary" size="md" arrow href={routes.contact}>
              Book A Demo
            </PtButton>
            <PtButton tone="ghost" onDark size="md" href={routes.partnerships}>
              Partner With Us
            </PtButton>
          </>
        }
      >
        {p.ctaBand.text}
      </PtCtaBand>

      <Section index="04" label="Ask" right="Pricing Questions">
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
