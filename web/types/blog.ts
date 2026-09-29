/** Insights (blog) records. Prototype: blog-post-page.jsx BLOG_POSTS. The admin CMS edits these. */

export type PublishStatus = "published" | "draft";

export type BlogPost = {
  slug: string;
  /** Only published posts are returned by the accessors. Defaults to "published". */
  status: PublishStatus;
  title: string;
  /** Display date as written, e.g. "June 2, 2026". */
  date: string;
  categories: string[];
  excerpt: string;
  /** Hero photograph: a path under /public or an absolute URL. */
  hero?: string;
  /** Optional index thumbnail (shown contained on white) when the hero crops badly. */
  thumb?: string;
  /** One inline-markdown paragraph per entry, rendered with <Md>. */
  body: string[];
};

/** Index card fields. */
export type BlogPostSummary = Omit<BlogPost, "body">;
