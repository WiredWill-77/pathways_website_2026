"use server";

import { requestWhitepaper } from "@/lib/data/whitepapers";
import type { WhitepaperRequestInput, WhitepaperRequestResult } from "@/types/whitepapers";

/** Gate submission for a whitepaper download. Re-validates on the server via the mock mutation. */
export async function requestWhitepaperAction(input: WhitepaperRequestInput): Promise<WhitepaperRequestResult> {
  const clean: WhitepaperRequestInput = {
    slug: String(input?.slug ?? ""),
    name: String(input?.name ?? "").trim(),
    email: String(input?.email ?? "").trim(),
    company: String(input?.company ?? "").trim(),
  };
  return requestWhitepaper(clean);
}
