import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckRows, ClosingCta, PageHero, SlotFigure } from "@/components/blocks";
import { SolutionCards } from "@/components/case-studies/SolutionCards";
import { Section } from "@/components/layout/Frame";
import { Md } from "@/components/ui/Markdown";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/data/case-studies";
import { routes } from "@/lib/routes";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getCaseStudySlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const cs = await getCaseStudyBySlug((await params).slug);
  if (!cs) return {};
  return { title: `${cs.client} Case Study`, description: cs.description ?? cs.intro };
}

const body = { fontSize: 17, color: "var(--text-secondary)", maxWidth: 820, lineHeight: 1.7 } as const;

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) notFound();
  const outcomes = cs.outcomes ?? [];
  return (
    <>
      <PageHero
        eyebrow={"Case Study · " + cs.category}
        lead={cs.lead}
        rest={cs.rest}
        intro={cs.intro}
        img={cs.hero}
        meta={[
          { label: "Client", value: cs.client },
          { label: "Category", value: cs.category },
          { label: "Published", value: cs.published },
        ]}
        secondary={{ label: "See All Case Studies", href: routes.caseStudies }}
      />
      <Section index="01" label="Overview" right="What They Needed">
        <p style={body}>
          <Md text={cs.overview} />
        </p>
      </Section>
      <Section index="02" label="Challenge" right="Where It Started" bg="var(--bg-subtle)">
        <p style={body}>
          <Md text={cs.challenge} />
        </p>
      </Section>
      <Section index="03" label="Solution" right="What We Built">
        <SolutionCards items={cs.solution} />
      </Section>
      {outcomes.length > 0 && (
        <Section index="04" label="Outcomes" right="What Changed" bg="var(--bg-subtle)">
          <CheckRows items={outcomes} />
        </Section>
      )}
      <Section index={outcomes.length > 0 ? "05" : "04"} label="In Practice" right="Delivered On Site">
        <SlotFigure id={"case-" + slug} caption={"Photography: " + cs.client} ratio="16 / 7" />
      </Section>
      <ClosingCta title={cs.conclusion} secondary={{ label: "See Our Solutions", href: routes.solutions }}>
        {null}
      </ClosingCta>
    </>
  );
}
