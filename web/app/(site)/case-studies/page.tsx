import type { Metadata } from "next";
import { ClosingCta, PageHero } from "@/components/blocks";
import { CaseStudyRow } from "@/components/case-studies/CaseStudyRow";
import { Section } from "@/components/layout/Frame";
import { getCaseStudies } from "@/lib/data/case-studies";
import { routes } from "@/lib/routes";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Six engagements across finance, health, humanitarian response and e-commerce delivered by Pathways Technologies.",
};

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies();
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        lead="Work We Have"
        rest="Shipped And Stand Behind."
        intro="Six engagements across finance, health, humanitarian response and e-commerce. Each one is a working system, not a slide deck."
        meta={[
          { label: "Case Studies", value: String(studies.length) },
          { label: "Sectors", value: "5" },
          { label: "Years Live", value: "2018–2026" },
        ]}
        secondary={{ label: "See All Solutions", href: routes.solutions }}
      />
      <Section index="01" label="Case Studies" right="Client Work">
        <div style={{ display: "grid", gap: 20 }}>
          {studies.length > 0 ? (
            studies.map((s) => <CaseStudyRow key={s.slug} study={s} />)
          ) : (
            <p style={{ fontSize: 15, color: "var(--text-secondary)", margin: 0 }}>There are no case studies yet. Check back soon.</p>
          )}
        </div>
      </Section>
      <ClosingCta title="Have A Similar Problem?" secondary={{ label: "See Our Solutions", href: routes.solutions }}>
        Tell us what you are working with. We will tell you within a week whether it is a two-week discovery or a straight build.
      </ClosingCta>
    </>
  );
}
