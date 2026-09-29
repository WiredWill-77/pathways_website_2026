import { validateContactFields } from "@/components/resources/validation";
import { whitepaperRecords } from "@/lib/data/cms-content";
import { mockQuery } from "@/lib/data/mock-client";
import { recordSubmission, TEAM_INBOX } from "@/lib/data/submissions";
import { routes } from "@/lib/routes";
import type { Whitepaper, WhitepaperRequestInput, WhitepaperRequestResult, WhitepaperSummary } from "@/types/whitepapers";

const live = async () => (await whitepaperRecords()).filter((w) => w.status === "published");

const summary = ({ slug, title, type, length, strap, pdfUrl, coverBackground }: Whitepaper): WhitepaperSummary => ({
  slug,
  title,
  type,
  length,
  strap,
  pdfUrl,
  coverBackground,
});

/** Library cards for /resources/whitepapers, in display order. */
export async function getWhitepapers(): Promise<WhitepaperSummary[]> {
  const rows = await live();
  return mockQuery(() => rows.map(summary));
}

/** The full document for /whitepapers/[slug]. */
export async function getWhitepaperBySlug(slug: string): Promise<Whitepaper | null> {
  const rows = await live();
  return mockQuery(() => rows.find((w) => w.slug === slug) ?? null);
}

export async function getWhitepaperSlugs(): Promise<string[]> {
  const rows = await live();
  return mockQuery(() => rows.map((w) => w.slug));
}

/**
 * Download gate. Validates the three fields, stores the lead in `whitepaper_requests`, queues the
 * emails and returns where the document lives.
 */
export async function requestWhitepaper(input: WhitepaperRequestInput): Promise<WhitepaperRequestResult> {
  const errors: Extract<WhitepaperRequestResult, { ok: false }>["errors"] = validateContactFields(input);
  const paper = (await live()).find((w) => w.slug === input.slug);
  if (!paper) errors.form = "This paper is no longer available. Pick another from the library.";
  if (Object.keys(errors).length || !paper) return { ok: false, errors };
  const id = await recordSubmission(
    "whitepaper_requests",
    { slug: paper.slug, name: input.name, email: input.email, company: input.company },
    [
      { to: TEAM_INBOX, subject: `Whitepaper download: ${paper.title}`, body: `${input.name} (${input.email}, ${input.company}) downloaded "${paper.title}".`, template: "whitepaper-team" },
      { to: input.email, subject: `Your copy of ${paper.title}`, body: `Hi ${input.name.split(" ")[0]},\n\nHere is the paper you asked for: ${routes.whitepaper(paper.slug)}\n\nPathways Technologies`, template: "whitepaper-delivery" },
    ],
  );
  return { ok: true, id, documentUrl: routes.whitepaper(paper.slug), pdfUrl: paper.pdfUrl || undefined };
}
