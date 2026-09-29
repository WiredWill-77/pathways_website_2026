import type { Metadata } from "next";
import { ClosingCta, DashedGrid, PageHero, Rail, SlotFigure, StatBand } from "@/components/blocks";
import { LeaderGrid } from "@/components/about/LeaderGrid";
import { OfficeTable } from "@/components/about/OfficeTable";
import { PtButton } from "@/components/brand/PtButton";
import { Frame, Section } from "@/components/layout/Frame";
import { ClientWall, TrustBar } from "@/components/layout/TrustBar";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { getAboutContent } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description: "Pathways Technologies is a Nairobi-based data, software and training firm. Meet the leadership team and how we deliver.",
};

const twoCol = { display: "grid", gridTemplateColumns: "minmax(0,1.05fr) minmax(0,0.95fr)", gap: 44, alignItems: "start" } as const;

export default async function AboutPage() {
  const a = await getAboutContent();
  const { whoWeAre: who, leadership, story, careers } = a;

  return (
    <>
      <PageHero {...a.hero} />

      <Section index="01" label="Who We Are" right="The Short Version">
        <div className="pt-2col" style={twoCol}>
          <div>
            <TwoToneHeading size="clamp(23px,4.6vw,30px)" lead={who.lead} rest={who.rest} maxWidth={560} />
            {who.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: 16.5, color: "var(--text-secondary)", lineHeight: 1.75, marginTop: i ? undefined : 22, maxWidth: 560 }}>
                {p}
              </p>
            ))}
            <div style={{ marginTop: 28 }}>
              <TrustBar />
            </div>
          </div>
          <SlotFigure {...who.figure} />
        </div>
        <div style={{ marginTop: 48 }}>
          <StatBand stats={who.stats} />
        </div>
      </Section>

      <Section index="02" label="Leadership" right="The Management Team" bg="var(--bg-subtle)">
        <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={840} lead={leadership.lead} rest={leadership.rest} />
        <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75, marginTop: 18, maxWidth: 640 }}>{leadership.intro}</p>
        <LeaderGrid leaders={leadership.leaders} />
        <div style={{ marginTop: 28, padding: "20px 24px", border: "1px dashed var(--border-hairline)", borderRadius: "var(--radius-md)", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
          {leadership.note}
        </div>
      </Section>

      <Section index="03" label="What We Believe" right="Four Commitments">
        <DashedGrid items={a.beliefs} cols={2} />
      </Section>

      <Section index="04" label="How We Got Here" right="Four Chapters" bg="var(--bg-subtle)">
        <div className="pt-2col" style={twoCol}>
          <div>
            <TwoToneHeading size="clamp(23px,4.6vw,30px)" lead={story.lead} rest={story.rest} />
            <div style={{ marginTop: 26 }}>
              <Rail items={story.chapters} />
            </div>
          </div>
          <div style={{ display: "grid", gap: 24, position: "sticky", top: 110 }}>
            <SlotFigure {...story.figure} />
            <div>
              <div style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>{story.officesLabel}</div>
              <OfficeTable head={story.officeHead} offices={story.offices} />
            </div>
          </div>
        </div>
      </Section>

      <Frame>
        <ClientWall label={a.clientWallLabel} />
      </Frame>

      <Section index="05" label="Careers" right="Working Here">
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 44, alignItems: "center" }}>
          <div>
            <TwoToneHeading size="clamp(23px,4.6vw,30px)" lead={careers.lead} rest={careers.rest} />
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75, marginTop: 20, maxWidth: 520 }}>{careers.text}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
              <PtButton tone="primary" size="md" arrow href={careers.primary.href}>
                {careers.primary.label}
              </PtButton>
              <PtButton tone="secondary" size="md" href={careers.secondary.href}>
                {careers.secondary.label}
              </PtButton>
            </div>
          </div>
          <SlotFigure {...careers.figure} />
        </div>
      </Section>

      <ClosingCta title={a.closing.title} secondary={a.closing.secondary}>
        {a.closing.text}
      </ClosingCta>
    </>
  );
}
