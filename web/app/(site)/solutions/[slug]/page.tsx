import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClosingCta, PageHero } from "@/components/blocks";
import { needsBoards, SolutionSections } from "@/components/solutions/SolutionSections";
import { getSectorBoards } from "@/lib/data/dashboards";
import { getSolutionBySlug, getSolutionSlugs } from "@/lib/data/solutions";

export async function generateStaticParams() {
  return (await getSolutionSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const solution = await getSolutionBySlug((await params).slug);
  if (!solution) return {};
  return { title: solution.meta.title, description: solution.meta.description };
}

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);
  if (!solution) notFound();
  const boards = needsBoards(solution.sections) ? await getSectorBoards() : null;
  const { hero, closing } = solution;

  return (
    <>
      <PageHero {...hero} />
      <SolutionSections sections={solution.sections} boards={boards} />
      <ClosingCta title={closing.title} secondary={closing.secondary} credit={closing.credit}>
        {closing.text}
      </ClosingCta>
    </>
  );
}
