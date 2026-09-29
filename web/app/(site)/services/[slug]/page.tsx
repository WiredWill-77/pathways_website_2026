import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/blocks";
import { ServiceBody } from "@/components/services/ServiceViews";
import { getCourseSummaries } from "@/lib/data/courses";
import { getServiceBySlug, getServiceSlugs } from "@/lib/data/services";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getServiceSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const s = await getServiceBySlug(slug);
  if (!s) return {};
  return { title: s.seo.title, description: s.seo.description };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();
  const courses = service.layout === "data-skills-training" ? await getCourseSummaries() : [];
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        lead={service.lead}
        rest={service.rest}
        intro={service.intro}
        meta={service.meta}
        img={service.hero}
        imgPosition={service.heroPos}
      />
      <ServiceBody service={service} courses={courses} />
    </>
  );
}
