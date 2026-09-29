import { PtCtaBand } from "@/components/blocks";
import { PtButton } from "@/components/brand/PtButton";
import { HomeHero } from "@/components/home/HomeHero";
import { SectorPanel } from "@/components/home/SectorPanel";
import { Frame, Section } from "@/components/layout/Frame";
import { ClientWall, TrustBar } from "@/components/layout/TrustBar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FaqItem } from "@/components/ui/FaqItem";
import { FeatureCell } from "@/components/ui/FeatureCell";
import { Icon } from "@/components/ui/Icon";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { getRoleOrder, getSectorBoards, getSectors } from "@/lib/data/dashboards";
import { getHomeContent, getProducts } from "@/lib/data/home";
import { routes } from "@/lib/routes";

const HEADING = "clamp(23px,4.6vw,34px)";
const hairline = "1px dashed var(--border-hairline)";

export default async function HomePage() {
  const [home, products, boards, sectors, roles] = await Promise.all([getHomeContent(), getProducts(), getSectorBoards(), getSectors(), getRoleOrder()]);

  return (
    /* The landing page's chosen tweaks: loud proof posture, blue-led accent balance. */
    <div data-proof="loud" data-accent="blue-led">
      <HomeHero hero={home.hero} boards={boards} />
      <Frame bg="#FFFFFF" id="home-clientwall">
        <ClientWall />
      </Frame>

      <Section index="01" label="Services" right="What We Do">
        <TwoToneHeading size={HEADING} maxWidth={860} lead="One Partner, End To End." rest="Strategy, platforms, applications and people, so nothing is handed over half-finished between vendors." />
        <div className="pt-3col" style={{ marginTop: 56, border: hairline, display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))" }}>
          {home.services.map((s, i) => (
            <FeatureCell
              key={s.title}
              icon={<Icon name={s.icon} size={40} />}
              title={s.title}
              className={s.icon === "graduation-cap" ? "pt-icon-plain" : undefined}
              style={{ borderRight: i % 3 < 2 ? hairline : "none", borderTop: i > 2 ? hairline : "none" }}
            >
              {s.text}
            </FeatureCell>
          ))}
        </div>
      </Section>

      <Section index="02" label="Solutions" right="By Industry And Role" bg="var(--bg-subtle)">
        <TwoToneHeading size={HEADING} maxWidth={860} lead="Built Around Your Context." rest="The same engineering discipline, shaped by the regulation, data and reporting lines of your sector." />
        <SectorPanel sectors={sectors} roles={roles} boards={boards} />
      </Section>

      <Section index="03" label="Products" right="Software We Own">
        <TwoToneHeading size={HEADING} maxWidth={860} lead="Three Products, One Data Spine." rest="Deploy them on their own or alongside a platform we build with you." />
        <div className="pt-3col" style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 24 }}>
          {products.map((p) => (
            <Card key={p.name} hover padding={30}>
              <Badge tone="neutral">Product</Badge>
              <h3 style={{ fontSize: 22, margin: "20px 0 10px", fontWeight: 500 }}>{p.name}</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.65, minHeight: 88 }}>{p.blurb}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px", display: "flex", flexDirection: "column", gap: 11 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: "var(--text-sm)" }}>
                    <span style={{ width: 5, height: 5, borderRadius: 99, background: "var(--primary)", flex: "0 0 auto" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="pt-textlink">
                Explore {p.name} <Icon name="arrow-right" size={15} />
              </a>
            </Card>
          ))}
        </div>
      </Section>

      <Section index="04" label="Results" right="Client Outcomes" bg="var(--bg-subtle)">
        <TwoToneHeading size={HEADING} maxWidth={860} lead="Measured Outcomes." rest="Three recent engagements, the problem we found, and the numbers that moved." />
        <div className="pt-3col" style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 24 }}>
          {home.cases.map((c) => (
            <Card key={c.title} hover padding={28}>
              <div style={{ position: "relative", height: 150, margin: "-28px -28px 20px", overflow: "hidden", borderRadius: "var(--radius-md) var(--radius-md) 0 0", background: "var(--bg-muted)" }}>
                <img src={c.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <Badge tone="accent" style={{ color: "#FFFFFF" }}>
                {c.sector}
              </Badge>
              <h3 style={{ fontSize: 19, margin: "18px 0 10px", fontWeight: 500, lineHeight: 1.35 }}>{c.title}</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.65, minHeight: 66 }}>{c.problem}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 10, paddingTop: 18, borderTop: "1px solid var(--grid-line)" }}>
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: 17, fontWeight: 500, color: "var(--primary)" }}>{s.value}</div>
                    <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <a href={c.href} className="pt-textlink" style={{ marginTop: 20 }}>
                Read The Case Study <Icon name="arrow-right" size={15} />
              </a>
            </Card>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <PtButton tone="secondary" href={routes.caseStudies}>
            See All Case Studies
          </PtButton>
        </div>
      </Section>

      <Section index="05" label="Pricing" right="How We Charge">
        <TwoToneHeading size={HEADING} maxWidth={860} lead="Three Ways To Start." rest="Fixed price for discovery, monthly for delivery squads, per-seat for products." />
        <div className="pt-3col" style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 24 }}>
          {home.tiers.map((t) => (
            <Card key={t.name} hover padding={30} style={t.featured ? { borderColor: "var(--primary)" } : undefined}>
              {t.featured && <Badge tone="accent">Most Chosen</Badge>}
              <h3 style={{ fontSize: 20, margin: t.featured ? "18px 0 6px" : "0 0 6px", fontWeight: 500 }}>{t.name}</h3>
              <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 10 }}>{t.price}</div>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", minHeight: 52 }}>{t.description}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                {t.features.map((x) => (
                  <li key={x} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--text-sm)" }}>
                    <span style={{ color: "var(--secondary-text)", display: "inline-flex" }}>
                      <Icon name="check" size={15} />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <PtButton
                tone={t.featured ? "primary" : "secondary"}
                size="md"
                href={routes.pricing}
                style={t.featured ? undefined : { background: "var(--secondary-soft)", borderColor: "var(--secondary-border)", borderStyle: "solid", borderWidth: 1, color: "#FFFFFF" }}
              >
                See Full Pricing
              </PtButton>
            </Card>
          ))}
        </div>
      </Section>

      <PtCtaBand
        imageId="cta-home"
        title={home.discoveryCta.title}
        actions={
          <>
            <PtButton tone="primary" size="md" arrow href={routes.contact}>
              Book A Demo
            </PtButton>
            <PtButton tone="ghost" onDark size="md" href={routes.pricing}>
              See Pricing
            </PtButton>
          </>
        }
      >
        {home.discoveryCta.text}
      </PtCtaBand>

      <Frame bg="var(--bg-subtle)">
        <div style={{ padding: "72px 0" }}>
          <div className="pt-quote-marquee" aria-label="Client testimonials">
            <div className="pt-quote-track">
              {[...home.testimonials, ...home.testimonials].map((q, i) => (
                <Card key={q.logo + i} padding={30} aria-hidden={i >= home.testimonials.length || undefined}>
                  <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", color: "var(--text-muted)" }}>{q.logo}</div>
                  <p style={{ fontSize: 16.5, lineHeight: 1.6, margin: "20px 0 24px", color: "var(--text-primary)" }}>&ldquo;{q.quote}&rdquo;</p>
                  <div style={{ paddingTop: 18, borderTop: "1px solid var(--grid-line)", fontSize: "var(--text-sm)" }}>
                    <span style={{ fontWeight: 500 }}>{q.name}</span>
                    <span style={{ color: "var(--text-secondary)" }}>, {q.role}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Frame>

      <Section index="06" label="Trust" right="Governance And People" bg="var(--bg-subtle)">
        <TwoToneHeading size={HEADING} maxWidth={860} lead="Auditable By Design." rest="Your cloud, your region, your tenancy, with the certifications, partner tiers and named people behind it." />
        <div style={{ marginTop: 36 }}>
          <TrustBar />
        </div>
        <div className="pt-3col" style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 24 }}>
          {home.leaders.map((l) => (
            <Card key={l.name} padding={26}>
              <div style={{ width: 104, height: 104, marginBottom: 18, borderRadius: "50%", overflow: "hidden", background: "#EEF2F7" }}>
                <img src={l.portrait} alt={l.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.25 }}>{l.name}</div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "var(--secondary-text)", marginTop: 7 }}>{l.role}</div>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.65, marginTop: 16, marginBottom: 0, paddingTop: 16, borderTop: "1px solid var(--grid-line)" }}>{l.bio}</p>
            </Card>
          ))}
        </div>
        <div className="pt-2col" style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {home.governance.map((g) => (
            <Card key={g.title} padding={26}>
              <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginBottom: 14 }}>
                <Icon name={g.icon} size={22} />
              </span>
              <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{g.title}</div>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>{g.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <div
        style={{
          background: "var(--ink-700)",
          backgroundImage: `url('${home.assessment.background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "84px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,14,17,.55)" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <h2 style={{ color: "#fff", fontSize: 32, textAlign: "center", maxWidth: 640, fontWeight: 500, margin: 0 }}>{home.assessment.title}</h2>
          <p style={{ color: "var(--text-on-dark-muted)", fontSize: 14, marginBottom: 16, textAlign: "center" }}>{home.assessment.text}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <PtButton tone="primary" size="md" arrow href={routes.contact}>
              Start The Assessment
            </PtButton>
            <PtButton tone="ghost" onDark size="md">
              Download A Sample
            </PtButton>
          </div>
        </div>
      </div>

      <Section index="07" label="Ask" right="Frequently Asked">
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <TwoToneHeading align="center" size="clamp(23px,4.6vw,32px)" lead="Frequently Asked" rest="Questions." style={{ marginBottom: 36 }} />
          {home.faqs.map((f, i) => (
            <FaqItem key={f.question} question={f.question} defaultOpen={i === 0}>
              {f.answer}
            </FaqItem>
          ))}
        </div>
      </Section>
    </div>
  );
}
