import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetail } from "@/components/resources/details";
import { getArticleBySlug, getArticleSlugs, getArticles, getResourceSection } from "@/lib/data/resources";

/** CMS edits show on the site within a minute. */
export const revalidate = 60;

export async function generateStaticParams() {
  return (await getArticleSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/resources/articles/[slug]">): Promise<Metadata> {
  const a = await getArticleBySlug((await props.params).slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

/** A field note from the delivery teams (prototype: post.html?slug=, FieldNotePage). */
export default async function ArticlePage(props: PageProps<"/resources/articles/[slug]">) {
  const { slug } = await props.params;
  const [a, all, section] = await Promise.all([getArticleBySlug(slug), getArticles(), getResourceSection("blog")]);
  if (!a) notFound();
  const others = all.filter((o) => o.slug !== slug).slice(0, 3);
  return <ArticleDetail a={a} others={others} sectionHero={section?.hero.image ?? ""} />;
}
