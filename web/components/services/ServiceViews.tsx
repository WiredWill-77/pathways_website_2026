/**
 * Below-the-fold compositions for the six service pages (prototype: services-page.jsx).
 * Each service has its own layout so no two pages read the same.
 */
import type { CSSProperties } from "react";
import { Chips, CheckRows, ClosingCta, DataTable, IconCards, ProductStrip, QuoteBand, Rail, SlotFigure, SplitList, StatBand, Stepper } from "@/components/blocks";
import { PtButton } from "@/components/brand/PtButton";
import { Section } from "@/components/layout/Frame";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { routes } from "@/lib/routes";
import type { IconItem } from "@/types/blocks";
import type { CourseSummary } from "@/types/courses";
import type {
  AdvisoryService,
  AnalyticsService,
  AppsService,
  ClosingCopy,
  DataScienceService,
  HeadingCopy,
  Service,
  StaffAugService,
  TrainingService,
} from "@/types/services";

const H32 = "clamp(23px,4.6vw,32px)";
const H30 = "clamp(23px,4.6vw,30px)";
const H28 = "clamp(23px,4.6vw,28px)";
const SUBTLE = "var(--bg-subtle)";

function Heading({ copy, size, maxWidth }: { copy: HeadingCopy; size: string; maxWidth?: number }) {
  return <TwoToneHeading size={size} maxWidth={maxWidth} lead={copy.lead} rest={copy.rest} />;
}

function Closing({ c }: { c: ClosingCopy }) {
  return (
    <ClosingCta title={c.title} secondary={c.secondary}>
      {c.text}
    </ClosingCta>
  );
}

/** Single-column icon cards (the prototype's IconCards with cols=1, which the shared block does not offer). */
function IconCardStack({ items, pad }: { items: IconItem[]; pad: number }) {
  return (
    <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "repeat(1,minmax(0,1fr))", gap: 24 }}>
      {items.map((it) => (
        <Card key={it.title} padding={pad}>
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

const twoCol = (cols: string, align: CSSProperties["alignItems"]): CSSProperties => ({ display: "grid", gridTemplateColumns: cols, gap: 44, alignItems: align });

/* ---------------------------------------------------------------- Data Science & AI */

function DataScienceView({ d }: { d: DataScienceService }) {
  return (
    <>
      <Section index="01" label="Lifecycle" right="How A Model Ships">
        <Heading copy={d.lifecycleHeading} size={H32} maxWidth={820} />
        <div style={{ marginTop: 44 }}>
          <Stepper steps={d.lifecycle} />
        </div>
        <div style={{ marginTop: 44 }}>
          <StatBand stats={d.stats} />
        </div>
      </Section>
      <Section index="02" label="AI Services" right="What We Build Today" bg={SUBTLE}>
        <Heading copy={d.aiHeading} size={H30} maxWidth={780} />
        <div style={{ marginTop: 36 }}>
          <IconCards items={d.aiServices} cols={3} />
        </div>
      </Section>
      <Section index="03" label="Capabilities" right="What We Model">
        <div className="pt-2col" style={twoCol("minmax(0,1fr) minmax(0,1fr)", "stretch")}>
          <div>
            <Heading copy={d.capabilitiesHeading} size={H30} />
            <div style={{ marginTop: 26 }}>
              <Chips items={d.capabilities} />
            </div>
          </div>
          <SlotFigure id={d.figure.id} caption={d.figure.caption} fill />
        </div>
      </Section>
      <Section index="04" label="Products" right="What Runs Underneath">
        <ProductStrip names={d.products} />
      </Section>
      <Closing c={d.closing} />
    </>
  );
}

/* ---------------------------------------------------------------- Analytics & BI */

function AnalyticsView({ d }: { d: AnalyticsService }) {
  return (
    <>
      <Section index="01" label="Architecture" right="Five Layers">
        <SplitList label={d.layersLabel} items={d.layers} />
        <div style={{ marginTop: 44 }}>
          <SlotFigure id={d.figure.id} caption={d.figure.caption} />
        </div>
      </Section>
      <QuoteBand {...d.quote} />
      <Section index="02" label="Outcomes" right="What Changes" bg={SUBTLE}>
        <Heading copy={d.outcomesHeading} size={H32} maxWidth={820} />
        <div style={{ marginTop: 40 }}>
          <StatBand stats={d.stats} />
        </div>
        <div style={{ marginTop: 32 }}>
          <ProductStrip names={d.products} />
        </div>
      </Section>
      <Closing c={d.closing} />
    </>
  );
}

/* ---------------------------------------------------------------- Apps & Software */

function AppsView({ d }: { d: AppsService }) {
  return (
    <>
      <Section index="01" label="Delivery" right="Five Phases">
        <div className="pt-2col" style={twoCol("minmax(0,1.15fr) minmax(0,0.85fr)", "start")}>
          <div>
            <Heading copy={d.phasesHeading} size={H30} />
            <div style={{ marginTop: 28 }}>
              <Rail items={d.phases} />
            </div>
          </div>
          <div className="pt-sticky" style={{ display: "grid", gap: 24, position: "sticky", top: 110 }}>
            <SlotFigure id={d.figures.screen.id} caption={d.figures.screen.caption} ratio="3 / 4" />
            <SlotFigure id={d.figures.team.id} caption={d.figures.team.caption} ratio="4 / 3" />
          </div>
        </div>
      </Section>
      <Section index="02" label="Stack" right="What We Build With" bg={SUBTLE}>
        <Heading copy={d.stackHeading} size={H30} maxWidth={780} />
        <div style={{ marginTop: 28 }}>
          <Chips items={d.stack} />
        </div>
        <div style={{ marginTop: 40 }}>
          <StatBand stats={d.stats} />
        </div>
      </Section>
      <Section index="03" label="Products" right="Platforms We Extend">
        <ProductStrip names={d.products} />
      </Section>
      <Closing c={d.closing} />
    </>
  );
}

/* ---------------------------------------------------------------- Data Skills Training */

function CourseCard({ c }: { c: CourseSummary }) {
  return (
    <div
      style={{
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "var(--surface)",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "4 / 3", background: "var(--bg-muted)" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageSlot id={"course-cover-" + c.slug} src={c.cover} alt={"Cover: " + c.title} placeholder={"Cover: " + c.title} />
        </div>
      </div>
      <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Badge tone="neutral">{c.audience}</Badge>
          <Badge tone="neutral">{c.length}</Badge>
        </div>
        <h3 style={{ fontSize: 18, margin: 0, lineHeight: 1.35, fontWeight: 500 }}>{c.title}</h3>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0, flex: 1, lineHeight: 1.6 }}>{c.summary}</p>
        <PtButton tone="secondary" size="sm" arrow style={{ alignSelf: "flex-start", marginTop: 8 }} href={routes.course(c.slug)}>
          View Module
        </PtButton>
      </div>
    </div>
  );
}

function TrainingView({ d, courses }: { d: TrainingService; courses: CourseSummary[] }) {
  return (
    <>
      <Section index="01" label="Curriculum" right="Five Modules">
        <Heading copy={d.curriculumHeading} size={H32} maxWidth={820} />
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 24 }}>
          {courses.map((c) => (
            <CourseCard key={c.slug} c={c} />
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <StatBand stats={d.stats} />
        </div>
      </Section>
      <Section index="02" label="Approach" right="How We Teach" bg={SUBTLE}>
        <div className="pt-2col" style={twoCol("minmax(0,0.9fr) minmax(0,1.1fr)", "stretch")}>
          <SlotFigure id={d.figure.id} caption={d.figure.caption} fill />
          <div>
            <Heading copy={d.approachHeading} size={H28} />
            <div style={{ marginTop: 26, display: "grid", gap: 16 }}>
              <IconCardStack items={d.outcomes} pad={22} />
            </div>
          </div>
        </div>
      </Section>
      <Closing c={d.closing} />
    </>
  );
}

/* ---------------------------------------------------------------- Staff Augmentation */

function StaffAugView({ d }: { d: StaffAugService }) {
  return (
    <>
      <Section index="01" label="Roles" right="Who You Can Add">
        <Heading copy={d.rolesHeading} size={H32} maxWidth={820} />
        <div style={{ marginTop: 40 }}>
          <DataTable head={["Role", "Focus", "Rate", "Lead Time"]} rows={d.roles.map((r) => [r.role, r.focus, r.rate, r.leadTime])} />
        </div>
      </Section>
      <QuoteBand {...d.quote} />
      <Section index="02" label="Guarantees" right="How We Work" bg={SUBTLE}>
        <div className="pt-2col" style={twoCol("minmax(0,1.1fr) minmax(0,0.9fr)", "start")}>
          <div>
            <Heading copy={d.guaranteesHeading} size={H28} />
            <div style={{ marginTop: 26 }}>
              <CheckRows items={d.guarantees} cols={1} />
            </div>
          </div>
          <div style={{ display: "grid", gap: 24 }}>
            <SlotFigure id={d.figure.id} caption={d.figure.caption} ratio="4 / 3" />
            <StatBand stats={d.stats} />
          </div>
        </div>
      </Section>
      <Closing c={d.closing} />
    </>
  );
}

/* ---------------------------------------------------------------- Advisory */

function AdvisoryView({ d }: { d: AdvisoryService }) {
  return (
    <>
      <Section index="01" label="Maturity" right="Where You Are Now">
        <Heading copy={d.ladderHeading} size={H32} maxWidth={820} />
        <div style={{ marginTop: 44, display: "grid", gap: 0 }}>
          {d.ladder.map((s, i) => (
            <div
              key={s.title}
              className="pt-ladder"
              style={{ display: "grid", gridTemplateColumns: "minmax(0,240px) minmax(0,1fr)", gap: 28, padding: "22px 0", borderTop: "1px solid var(--grid-line)", alignItems: "start" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ height: 8, borderRadius: 99, width: 24 + i * 22, background: i > 2 ? "var(--primary)" : "var(--secondary-text)", flex: "0 0 auto" }} />
                <span style={{ fontSize: 16, fontWeight: 500 }}>{s.title}</span>
              </div>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", margin: 0, lineHeight: 1.7 }}>{s.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <StatBand stats={d.stats} tone="dark" />
        </div>
      </Section>
      <Section index="02" label="Workstreams" right="What We Produce" bg={SUBTLE}>
        <Heading copy={d.workstreamsHeading} size={H30} maxWidth={780} />
        <div style={{ marginTop: 40 }}>
          <IconCards items={d.workstreams} cols={2} />
        </div>
        <div style={{ marginTop: 32 }}>
          <SlotFigure id={d.figure.id} caption={d.figure.caption} />
        </div>
      </Section>
      <Section index="03" label="Products" right="What We Recommend">
        <ProductStrip names={d.products} />
      </Section>
      <Closing c={d.closing} />
    </>
  );
}

/** Picks the composition for a service record. Training also lists the course modules. */
export function ServiceBody({ service, courses = [] }: { service: Service; courses?: CourseSummary[] }) {
  switch (service.layout) {
    case "data-science":
      return <DataScienceView d={service} />;
    case "analytics-bi":
      return <AnalyticsView d={service} />;
    case "apps-software-development":
      return <AppsView d={service} />;
    case "data-skills-training":
      return <TrainingView d={service} courses={courses} />;
    case "staff-augmentation":
      return <StaffAugView d={service} />;
    case "digital-transformation-advisory":
      return <AdvisoryView d={service} />;
  }
}
