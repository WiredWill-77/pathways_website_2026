/* Body of each resource section page (prototype: ResWebinars, ResArticles, ResLearn, ResBlog, ResEvents).
   The whitepapers body lives in components/whitepapers because its gate is interactive. */
import Link from "next/link";
import type { CSSProperties } from "react";
import { Chips, ClosingCta, IconCards, QuoteBand, SlotFigure, SplitList, StatBand } from "@/components/blocks";
import { Section } from "@/components/layout/Frame";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { routes } from "@/lib/routes";
import type { Article, ArticleTeaser, ArticlesSection, BlogSection, EventsSection, LearnSection, ResourceEvent, Webinar, WebinarsSection } from "@/types/resources";
import { CardAction, CoverCard, cardGrid, panel, slotId } from "./shared";

const H_LARGE = "clamp(23px,4.6vw,32px)";
const H_MED = "clamp(21px,4vw,28px)";
const medium = "var(--weight-medium)" as CSSProperties["fontWeight"];

function Closing({ closing }: { closing: WebinarsSection["closing"] }) {
  return (
    <ClosingCta title={closing.title} secondary={closing.secondary}>
      {closing.text}
    </ClosingCta>
  );
}

/* ------------------------------------------------------------------ Webinars */

export function WebinarsView({ d, webinars }: { d: WebinarsSection; webinars: Webinar[] }) {
  const upcoming = webinars.filter((w) => w.kind === "live");
  const onDemand = webinars.filter((w) => w.kind === "on-demand");
  return (
    <>
      <Section index="01" label="Upcoming" right="Register Free">
        <TwoToneHeading size={H_LARGE} maxWidth={820} lead={d.upcomingHeading.lead} rest={d.upcomingHeading.rest} />
        <div style={{ marginTop: 40, ...cardGrid() }}>
          {upcoming.map((w) => (
            <CoverCard
              key={w.slug}
              slot={slotId("webinar-cover-", w.title)}
              title={w.title}
              href={routes.webinar(w.slug)}
              badges={[w.date, w.where]}
              text={w.summary}
              action={<CardAction href={routes.webinar(w.slug)}>View Session</CardAction>}
            />
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <StatBand stats={d.stats} />
        </div>
      </Section>
      <Section index="02" label="On Demand" right="Watch Anytime" bg="var(--bg-subtle)">
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 44, alignItems: "start" }}>
          <div>
            <TwoToneHeading size={H_MED} lead={d.onDemandHeading.lead} rest={d.onDemandHeading.rest} />
            <div style={{ ...panel, marginTop: 28, display: "grid", overflow: "hidden" }}>
              {onDemand.map((w, i) => (
                <Link
                  key={w.slug}
                  href={routes.webinar(w.slug)}
                  className="pt-rowlink"
                  style={{ display: "grid", gap: 4, padding: "18px 22px", borderTop: i ? "1px dashed var(--border-hairline)" : "none", textDecoration: "none", color: "inherit" }}
                >
                  <span style={{ fontSize: 16, fontWeight: medium, color: "var(--text-primary)" }}>{w.title}</span>
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.55 }}>{w.summary}</span>
                </Link>
              ))}
            </div>
          </div>
          <SlotFigure id="res-web-studio" caption="Photography: a practice lead presenting a live session" ratio="4 / 3" />
        </div>
      </Section>
      <Closing closing={d.closing} />
    </>
  );
}

/* ------------------------------------------------------------------ Articles */

export function ArticlesView({ d, teasers }: { d: ArticlesSection; teasers: ArticleTeaser[] }) {
  return (
    <>
      <Section index="01" label="Topics" right="Filter By Subject">
        <Chips items={d.topics} />
        <div style={{ marginTop: 40, ...cardGrid() }}>
          {teasers.map((a) => (
            <CoverCard key={a.slug} slot={slotId("article-cover-", a.title)} title={a.title} badges={[a.category]} text={a.excerpt} />
          ))}
        </div>
      </Section>
      <Section index="02" label="Reading" right="Where To Start" bg="var(--bg-subtle)">
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
          <SlotFigure id="res-art-desk" caption="Photography: an analyst reading last quarters report" ratio="4 / 3" />
          <div>
            <TwoToneHeading size={H_MED} lead={d.readingHeading.lead} rest={d.readingHeading.rest} />
            <div style={{ marginTop: 26 }}>
              <StatBand stats={d.stats} />
            </div>
          </div>
        </div>
      </Section>
      <Closing closing={d.closing} />
    </>
  );
}

/* ------------------------------------------------------------------ Learn */

export function LearnView({ d }: { d: LearnSection }) {
  return (
    <>
      <Section index="01" label="Tracks" right="Four Paths">
        <TwoToneHeading size={H_LARGE} maxWidth={820} lead={d.tracksHeading.lead} rest={d.tracksHeading.rest} />
        <div style={{ marginTop: 40, ...cardGrid() }}>
          {d.tracks.map((t) => (
            <CoverCard
              key={t.title}
              slot={slotId("track-cover-", t.title)}
              title={t.title}
              badges={[t.audience, t.length]}
              text={t.summary}
              action={t.courseSlug ? <CardAction href={routes.course(t.courseSlug)}>View Module</CardAction> : undefined}
            />
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <StatBand stats={d.stats} />
        </div>
      </Section>
      <Section index="02" label="Method" right="How We Teach" bg="var(--bg-subtle)">
        <IconCards items={d.how} cols={3} />
        <div style={{ marginTop: 40 }}>
          <div style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>Labs Included</div>
          <Chips items={d.labs} />
        </div>
        <div style={{ marginTop: 36 }}>
          <SlotFigure id="res-learn-room" caption="Photography: a cohort working through a guided lab" />
        </div>
      </Section>
      <Closing closing={d.closing} />
    </>
  );
}

/* ------------------------------------------------------------------ Blog */

export function BlogView({ d, posts }: { d: BlogSection; posts: Article[] }) {
  return (
    <>
      <Section index="01" label="Latest" right="Five Recent Posts">
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 44, alignItems: "start" }}>
          <div style={{ ...panel, display: "grid", overflow: "hidden" }}>
            {posts.map((p, i) => (
              <Link
                key={p.slug}
                href={routes.article(p.slug)}
                className="pt-rowlink"
                style={{ display: "grid", gap: 6, padding: "20px 24px", borderTop: i ? "1px solid var(--grid-line)" : "none", textDecoration: "none", color: "inherit" }}
              >
                <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>
                  {p.date} · {p.team}
                </span>
                <span style={{ fontSize: 17, fontWeight: medium, color: "var(--text-primary)", lineHeight: 1.35 }}>{p.title}</span>
                <span style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6 }}>{p.excerpt}</span>
              </Link>
            ))}
          </div>
          <div style={{ display: "grid", gap: 24, position: "sticky", top: 110 }}>
            <SlotFigure id="res-blog-team" caption="Photography: the delivery team writing up a retrospective" ratio="4 / 3" />
            <StatBand stats={d.stats} />
          </div>
        </div>
      </Section>
      <Section index="02" label="Voices" right="Who Writes Here" bg="var(--bg-subtle)">
        <SplitList label="Contributors" items={d.voices} />
      </Section>
      <Closing closing={d.closing} />
    </>
  );
}

/* ------------------------------------------------------------------ Events */

export function EventsView({ d, events }: { d: EventsSection; events: ResourceEvent[] }) {
  return (
    <>
      <Section index="01" label="Schedule" right="Next Six Dates">
        <TwoToneHeading size={H_LARGE} maxWidth={820} lead={d.scheduleHeading.lead} rest={d.scheduleHeading.rest} />
        <div style={{ marginTop: 40, ...cardGrid() }}>
          {events.map((e) => (
            <CoverCard
              key={e.slug}
              slot={slotId("event-cover-", e.name)}
              title={e.name}
              href={routes.event(e.slug)}
              image={e.image}
              badges={[e.date, e.city]}
              text={e.format}
              action={<CardAction href={routes.event(e.slug)}>View Event</CardAction>}
            />
          ))}
        </div>
      </Section>
      <QuoteBand {...d.quote} />
      <Section index="02" label="Formats" right="What To Expect" bg="var(--bg-subtle)">
        <IconCards items={d.formats} cols={2} />
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 36, marginTop: 36, alignItems: "center" }}>
          <SlotFigure id="res-events-room" caption="Photography: a roundtable mid-discussion" ratio="16 / 9" />
          <StatBand stats={d.stats} tone="dark" />
        </div>
      </Section>
      <Closing closing={d.closing} />
    </>
  );
}
