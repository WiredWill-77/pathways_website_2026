import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckRows, Chips, ClosingCta, PageHero, QuoteBand, SlotFigure, StatBand } from "@/components/blocks";
import { ModuleProgress } from "@/components/courses/ModuleProgress";
import { Syllabus } from "@/components/courses/Syllabus";
import { Section } from "@/components/layout/Frame";
import { FaqItem } from "@/components/ui/FaqItem";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { getCourseBySlug, getCoursePageContent, getCourseSlugs, getCourseSummaries } from "@/lib/data/courses";
import { routes } from "@/lib/routes";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getCourseSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const c = await getCourseBySlug(slug);
  if (!c) return {};
  return { title: c.seo.title, description: c.seo.description };
}

const checkoutHref = (slug: string) => `${routes.checkout}?course=${encodeURIComponent(slug)}`;

export default async function CoursePage(props: PageProps<"/courses/[slug]">) {
  const { slug } = await props.params;
  const [c, ladder, content] = await Promise.all([getCourseBySlug(slug), getCourseSummaries(), getCoursePageContent()]);
  if (!c) notFound();
  const others = ladder.filter((s) => s.slug !== slug);

  return (
    <div data-screen-label={c.title}>
      <PageHero
        eyebrow={c.eyebrow}
        lead={c.lead}
        rest={c.rest}
        intro={c.intro}
        cta={{ label: "Enroll Now", href: checkoutHref(slug) }}
        secondary={{ label: "See All Modules", href: routes.service("data-skills-training") }}
        meta={[
          { label: "Level", value: c.level },
          { label: "Audience", value: c.audience },
          { label: "Length", value: c.length },
          { label: "Format", value: content.format },
        ]}
      />
      <ModuleProgress slug={slug} courses={ladder} />

      <Section index="01" label="Outcomes" right="What You'll Learn">
        <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={780} lead="What You Can Do After." rest="Assessed on a practical build, not a quiz." />
        <div style={{ marginTop: 28 }}>
          <CheckRows items={c.outcomes} cols={1} />
        </div>
        <div style={{ marginTop: 32 }}>
          <div style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>
            Skills You&apos;ll Gain
          </div>
          <Chips items={c.skills} />
        </div>
      </Section>

      <Section index="02" label="Syllabus" right="How It Breaks Down" bg="var(--bg-subtle)">
        <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead="Three Parts, In Order." rest="Each builds on the last; nothing here is optional context." />
        <div style={{ marginTop: 36 }}>
          <Syllabus items={c.outline} />
        </div>
      </Section>

      <Section index="03" label="Fit" right="Who This Is For">
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)", gap: 44, alignItems: "stretch" }}>
          <SlotFigure id={"course-fit-" + slug} caption="Photography: a cohort mid-session" fill />
          <div>
            <TwoToneHeading size="clamp(23px,4.6vw,28px)" lead="Built For This Audience." rest={c.audience + "."} />
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 16 }}>
              <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Prerequisites: </strong>
              {c.prereqs}
            </p>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginTop: 12 }}>{content.deliveryNote}</p>
          </div>
        </div>
      </Section>

      <QuoteBand {...content.quote} />

      <Section index="04" label="Track Record" right="Data Skills Training" bg="var(--bg-subtle)">
        <StatBand stats={content.trackRecord} />
      </Section>

      <Section index="05" label="Questions" right="Before You Book">
        <div style={{ maxWidth: 760 }}>
          {content.faqs.map((f, i) => (
            <FaqItem key={f.question} question={f.question} defaultOpen={i === 0}>
              {f.answer}
            </FaqItem>
          ))}
        </div>
      </Section>

      <Section index="06" label="Ladder" right="Other Modules" bg="var(--bg-subtle)">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
          {others.map((s) => (
            <Link
              key={s.slug}
              href={routes.course(s.slug)}
              style={{
                textDecoration: "none",
                color: "inherit",
                padding: "20px 22px",
                border: "1px solid var(--grid-line)",
                borderRadius: "var(--radius-md)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 11.5, color: "var(--text-muted)" }}>
                {s.length} · {s.level}
              </span>
              <span style={{ fontSize: 15.5, fontWeight: 500 }}>{s.title}</span>
            </Link>
          ))}
        </div>
      </Section>

      <ClosingCta title="Run This Module With Your Team." secondary={{ label: "See Pricing", href: routes.pricing }}>
        Tell us the cohort size and the start date. We will confirm dates and send the pre-work. Ready now?
        <Link href={checkoutHref(slug)} style={{ marginLeft: 6, color: "#FFFFFF", fontWeight: 600, textDecoration: "underline" }}>
          Enroll Now &rarr;
        </Link>
      </ClosingCta>
    </div>
  );
}
