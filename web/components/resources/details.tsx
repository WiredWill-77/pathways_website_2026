/* Webinar, event and field-note detail pages (prototype: WebinarPage and FieldNotePage in
   resource-detail.jsx, EventPage in event-page.jsx). */
import type { CSSProperties } from "react";
import { CheckRows, ClosingCta, PageHero } from "@/components/blocks";
import { Section } from "@/components/layout/Frame";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { routes } from "@/lib/routes";
import { pad2 } from "@/lib/utils";
import type { Article, ResourceEvent, Webinar } from "@/types/resources";
import { DetailBody, DetailCover, DetailFacts, DetailParagraphs, MoreCard, cardGrid, panel, slotId } from "./shared";

const medium = "var(--weight-medium)" as CSSProperties["fontWeight"];
const contact = routes.contact;

/* ------------------------------------------------------------------ Webinar */

export function WebinarDetail({ w, others, sectionHero }: { w: Webinar; others: Webinar[]; sectionHero: string }) {
  const live = w.kind === "live";
  const [place, time] = w.where.split("·").map((s) => s.trim());
  const cta = live ? "Register Free" : "Watch The Recording";
  const hero = w.image || sectionHero;
  const all = { label: "See All Webinars", href: routes.resourceSection("webinars") };
  let n = 1;
  const ix = () => pad2(++n);
  return (
    <div data-screen-label={w.title}>
      <PageHero
        eyebrow={"Webinar · " + (live ? "Live Session" : "On Demand")}
        lead={w.title}
        rest={live ? w.date : "Watch Anytime"}
        intro={w.summary}
        img={hero}
        cta={{ label: cta, href: contact }}
        secondary={all}
        meta={[
          { label: "When", value: live ? w.date : "On Demand" },
          { label: "Where", value: place || "Online" },
          { label: "Length", value: w.length || "45 min" },
        ]}
      />
      <Section index="01" label="About" right="The Session">
        <DetailBody
          aside={
            <DetailFacts
              rows={[
                { label: "Date", value: live ? w.date : "On Demand" },
                { label: "Time", value: time ?? "" },
                { label: "Where", value: place || "Online" },
                { label: "Length", value: w.length || "45 min" },
                { label: "Cost", value: "Free" },
              ]}
              cta={{ label: cta, href: contact }}
            />
          }
        >
          <DetailCover src={w.image} slot={slotId("webinar-cover-", w.title)} alt={w.title} />
          <DetailParagraphs items={w.about.length ? w.about : [w.summary]} />
        </DetailBody>
      </Section>
      {w.learn.length > 0 && (
        <Section index={ix()} label="What You Will Learn" right="Takeaways" bg="var(--bg-subtle)">
          <CheckRows items={w.learn} />
        </Section>
      )}
      {w.speakers.length > 0 && (
        <Section index={ix()} label="Speakers" right="Who Is Presenting">
          <div style={cardGrid(240, 20)}>
            {w.speakers.map((s, i) => (
              <div key={i} style={{ ...panel, padding: 22, display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", flex: "0 0 48px", background: "var(--bg-muted)" }}>
                  <ImageSlot id={`webinar-speaker-${w.slug}-${i}`} shape="circle" placeholder="Photo" alt={`${s.name}, ${s.role}`} />
                </div>
                <div style={{ display: "grid", gap: 2 }}>
                  <span style={{ fontSize: 15.5, fontWeight: medium }}>{s.name}</span>
                  <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{s.role}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}
      {others.length > 0 && (
        <Section index={ix()} label="More Sessions" right="Also Available" bg="var(--bg-subtle)">
          <div style={cardGrid(260, 20)}>
            {others.map((o) => (
              <MoreCard key={o.slug} href={routes.webinar(o.slug)} badges={[o.kind === "live" ? `${o.date} · ${o.where}` : "On demand"]} title={o.title} />
            ))}
          </div>
        </Section>
      )}
      <ClosingCta title={live ? "Save Your Seat." : "Get The Recording."} secondary={all}>
        Sessions are free. Tell us who is joining and we will send the link and the slides.
      </ClosingCta>
    </div>
  );
}

/* ------------------------------------------------------------------ Field note */

export function ArticleDetail({ a, others, sectionHero }: { a: Article; others: Article[]; sectionHero: string }) {
  const all = { label: "See All Posts", href: routes.resourceSection("blog") };
  const cta = { label: "Talk To The Team", href: contact };
  const facts = [
    { label: "Published", value: a.date },
    { label: "Written By", value: a.team },
    { label: "Length", value: a.readTime || "5 min read" },
  ];
  const hasTakeaways = a.takeaways.length > 0;
  return (
    <div data-screen-label={a.title}>
      <PageHero eyebrow={"Blog · " + a.team} lead={a.title} rest="" intro={a.excerpt} img={a.image || sectionHero} cta={cta} secondary={all} meta={facts} />
      <Section index="01" label="Field Note" right="Full Post">
        <DetailBody gap={20} maxWidth={760} aside={<DetailFacts rows={facts} cta={cta} />}>
          <DetailCover src={a.image} slot={"fieldnote-cover-" + a.slug} alt={a.title} />
          <DetailParagraphs items={a.body.length ? a.body : [a.excerpt]} />
        </DetailBody>
      </Section>
      {hasTakeaways && (
        <Section index="02" label="Key Takeaways" right="In Short" bg="var(--bg-subtle)">
          <CheckRows items={a.takeaways} />
        </Section>
      )}
      {others.length > 0 && (
        <Section index={hasTakeaways ? "03" : "02"} label="More Posts" right="Keep Reading">
          <div style={cardGrid(260, 20)}>
            {others.map((o) => (
              <MoreCard key={o.slug} href={routes.article(o.slug)} badges={[o.date, o.team]} title={o.title} text={o.excerpt} />
            ))}
          </div>
        </Section>
      )}
      <ClosingCta title="Subscribe To Field Notes." secondary={all}>
        Twice a week, written by the people on the engagement.
      </ClosingCta>
    </div>
  );
}

/* ------------------------------------------------------------------ Event */

export function EventDetail({ e, others, sectionHero }: { e: ResourceEvent; others: ResourceEvent[]; sectionHero: string }) {
  const kind = e.format.split("·")[0].trim();
  const all = { label: "See All Events", href: routes.resourceSection("events") };
  const cta = { label: "Request A Seat", href: contact };
  const hasAgenda = e.agenda.length > 0;
  return (
    <div data-screen-label={e.name}>
      <PageHero
        eyebrow={"Event · " + (kind || "Event")}
        lead={e.name}
        rest={e.city}
        intro={e.summary || e.format}
        img={e.image || sectionHero}
        cta={cta}
        secondary={all}
        meta={[
          { label: "Date", value: e.date },
          { label: "City", value: e.city },
          { label: "Format", value: kind || e.format },
        ]}
      />
      <Section index="01" label="About" right="The Session">
        <DetailBody
          aside={
            <DetailFacts
              rows={[
                { label: "Date", value: e.date },
                { label: "Time", value: e.time },
                { label: "Venue", value: e.venue },
                { label: "City", value: e.city },
                { label: "Format", value: e.format },
              ]}
              cta={cta}
            />
          }
        >
          <DetailCover src={e.image} slot={slotId("event-cover-", e.name)} alt={e.name} />
          <DetailParagraphs items={e.about.length ? e.about : [e.format]} />
        </DetailBody>
      </Section>
      {hasAgenda && (
        <Section index="02" label="Agenda" right="On The Day" bg="var(--bg-subtle)">
          <div style={{ ...panel, overflow: "hidden", maxWidth: 860 }}>
            {e.agenda.map((a, i) => (
              <div
                key={i}
                style={{ display: "grid", gridTemplateColumns: "96px minmax(0,1fr)", gap: 20, padding: "16px 22px", borderTop: i ? "1px solid var(--grid-line)" : "none", alignItems: "baseline" }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13.5, color: "var(--secondary-text)" }}>{a.time}</span>
                <span style={{ fontSize: 15.5, color: "var(--text-primary)", lineHeight: 1.5 }}>{a.item}</span>
              </div>
            ))}
          </div>
        </Section>
      )}
      {e.audience.length > 0 && (
        <Section index={hasAgenda ? "03" : "02"} label="Who Should Attend" right="Audience">
          <CheckRows items={e.audience} />
        </Section>
      )}
      {others.length > 0 && (
        <Section index="04" label="More Events" right="Also Coming Up" bg="var(--bg-subtle)">
          <div style={cardGrid(260, 20)}>
            {others.map((o) => (
              <MoreCard key={o.slug} href={routes.event(o.slug)} badges={[o.date, o.city]} title={o.name} text={o.format} />
            ))}
          </div>
        </Section>
      )}
      <ClosingCta title="Request A Seat." secondary={all}>
        Seats are capped for most sessions. Tell us which date suits and we will confirm availability.
      </ClosingCta>
    </div>
  );
}
