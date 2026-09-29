"use server";

import { createEnrolment } from "@/lib/data/checkout";
import type { EnrolmentInput, EnrolmentResult } from "@/types/checkout";

/**
 * Booking submission. The client never sends card fields; createEnrolment also reads only its
 * whitelisted fields, so nothing card-related can reach the mock store or the logs.
 */
export async function submitEnrolment(input: EnrolmentInput): Promise<EnrolmentResult> {
  try {
    return await createEnrolment(input);
  } catch {
    return { ok: false, errors: {}, message: "We could not send your booking just now. Please try again in a moment." };
  }
}
