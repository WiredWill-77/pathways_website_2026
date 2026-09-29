import type { Metadata } from "next";
import { ClosingCta, PageHero } from "@/components/blocks";
import { PostRow } from "@/components/insights/PostRow";
import { Section } from "@/components/layout/Frame";
import { getBlogCategories, getBlogPosts } from "@/lib/data/blog";
import { routes } from "@/lib/routes";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insights",
  description: "Partnerships, launches and field notes from Pathways Technologies.",
};

export default async function InsightsPage() {
  const [posts, categories] = await Promise.all([getBlogPosts(), getBlogCategories()]);
  return (
    <>
      <PageHero
        eyebrow="Insights"
        lead="Field Notes And"
        rest="Company News."
        intro="Partnerships, launches and the odd war story from the teams doing the delivery."
        meta={[
          { label: "Posts", value: String(posts.length) },
          { label: "Categories", value: String(categories.length) },
          { label: "Cadence", value: "Monthly" },
        ]}
        secondary={{ label: "See All Resources", href: routes.resources }}
      />
      <Section index="01" label="Insights" right="Latest First">
        <div style={{ display: "grid", gap: 20 }}>
          {posts.length > 0 ? (
            posts.map((p) => <PostRow key={p.slug} post={p} />)
          ) : (
            <p style={{ fontSize: 15, color: "var(--text-secondary)", margin: 0 }}>There are no posts yet. Check back soon.</p>
          )}
        </div>
      </Section>
      <ClosingCta title="Want To Work With Us Next?" secondary={{ label: "See Our Solutions", href: routes.solutions }}>
        Tell us what you are working on. We will tell you within a week whether it is a two-week discovery or a straight build.
      </ClosingCta>
    </>
  );
}
