import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClosingCta, SlotFigure } from "@/components/blocks";
import { PostHero } from "@/components/insights/PostHero";
import { Section } from "@/components/layout/Frame";
import { Md } from "@/components/ui/Markdown";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/data/blog";
import { routes } from "@/lib/routes";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getBlogSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const post = await getBlogPostBySlug((await params).slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function InsightPostPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();
  return (
    <>
      <PostHero post={post} />
      <Section index="01" label="Insights" right="Full Story">
        <div style={{ maxWidth: 760 }}>
          <SlotFigure id={"blog-" + slug} src={post.hero} caption={"Photography: " + post.title} ratio="16 / 7" />
          <div style={{ marginTop: 32, display: "grid", gap: 20 }}>
            {post.body.map((p, i) => (
              <p key={i} style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>
                <Md text={p} />
              </p>
            ))}
          </div>
        </div>
      </Section>
      <ClosingCta title="Want The Detail Behind A Story Like This?" secondary={{ label: "See All Insights", href: routes.insights }}>
        Tell us what you are working on. We will tell you within a week whether it is a two-week discovery or a straight build.
      </ClosingCta>
    </>
  );
}
