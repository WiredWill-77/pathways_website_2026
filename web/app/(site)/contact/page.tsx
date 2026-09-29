import type { Metadata } from "next";
import Link from "next/link";
import { PtButton } from "@/components/brand/PtButton";
import { CompanyHero } from "@/components/contact/CompanyHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/layout/Frame";
import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { getContactContent } from "@/lib/data/company";
import { getFooter } from "@/lib/data/site";
import { sendContactRequest } from "./actions";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Demos, quotes, training cohorts and partner applications. One form, routed to the right Pathways practice lead.",
};

export default async function ContactPage() {
  const [c, footer] = await Promise.all([getContactContent(), getFooter()]);
  const officeLines: { icon: IconName; text: string }[] = [
    { icon: "map-pin", text: footer.address },
    { icon: "mail", text: footer.email },
    { icon: "phone", text: footer.phone },
    { icon: "clock", text: c.office.hours },
  ];

  return (
    <>
      <CompanyHero hero={c.hero} padding="80px 0 64px" maxWidth={800} size="clamp(34px,3.4vw,46px)" introMaxWidth={600} />

      <Section index="01" label="Enquiry" right="One Working Day Reply">
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 40, alignItems: "start" }}>
          <ContactForm interests={c.interests} roles={c.roles} phone={{ label: footer.phone, href: footer.phoneHref }} action={sendContactRequest} />
          <div style={{ display: "grid", gap: 20 }}>
            <Card padding={26}>
              <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 14 }}>{c.office.title}</div>
              {officeLines.map((l) => (
                <div key={l.text} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: 11 }}>
                  <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginTop: 2 }}>
                    <Icon name={l.icon} size={16} />
                  </span>
                  {l.text}
                </div>
              ))}
            </Card>
            <Card padding={26}>
              <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 12 }}>Prefer A Direct Route?</div>
              {c.routes.map((r, i) => (
                <div key={r.title} style={{ paddingTop: i ? 14 : 0, marginTop: i ? 14 : 0, borderTop: i ? "1px solid var(--grid-line)" : "none" }}>
                  <div style={{ fontSize: 15, fontWeight: 500 }}>{r.title}</div>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: "6px 0 8px" }}>{r.text}</p>
                  <Link href={r.cta.href} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 14, textDecoration: "none", color: "var(--secondary-text)" }}>
                    {r.cta.label} <Icon name="arrow-right" size={14} />
                  </Link>
                </div>
              ))}
            </Card>
            <Card padding={26}>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 8 }}>{c.existingClient.title}</div>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: 0 }}>{c.existingClient.text}</p>
              <PtButton tone="secondary" size="md">
                {c.existingClient.cta}
              </PtButton>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
