import type { FieldErrors, PublishStatus } from "@/types/resources";

export type WhitepaperSection = { title: string; body: string };

/**
 * One whitepaper: the library card on /resources/whitepapers and the printable four-page
 * document at /whitepapers/[slug] (prototype: RESOURCES.whitepapers.library + WP_DOCS).
 */
export type Whitepaper = {
  slug: string;
  status: PublishStatus;
  title: string;
  /** Research, Architecture, Governance, Case Study, Method. */
  type: string;
  length: string;
  /** Card description and cover strapline. */
  strap: string;
  summary: string;
  sections: WhitepaperSection[];
  takeaways: string[];
  published: string;
  /** Optional hosted PDF. When absent the gate offers the printable document page. */
  pdfUrl?: string;
  /** Background behind the cover art on the library card, when the art needs one. */
  coverBackground?: string;
};

export type WhitepaperSummary = Pick<Whitepaper, "slug" | "title" | "type" | "length" | "strap" | "pdfUrl" | "coverBackground">;

export type WhitepaperRequestInput = {
  slug: string;
  name: string;
  email: string;
  company: string;
};

export type WhitepaperRequestResult =
  | { ok: true; id: string; documentUrl: string; pdfUrl?: string }
  | { ok: false; errors: FieldErrors<keyof WhitepaperRequestInput | "form"> };
