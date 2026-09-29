"use server";

import { submitContactRequest } from "@/lib/data/company";
import type { ContactRequestInput, ContactRequestResult } from "@/types/company";

const FIELDS = ["name", "email", "company", "role", "interest", "message"] as const;

/** Server action behind the contact form. Re-validates on the server, then calls the mock CRM write. */
export async function sendContactRequest(raw: ContactRequestInput): Promise<ContactRequestResult> {
  const input = Object.fromEntries(FIELDS.map((k) => [k, String(raw?.[k] ?? "").slice(0, 5000)])) as ContactRequestInput;
  try {
    return await submitContactRequest(input);
  } catch {
    return { ok: false, errors: {}, formError: "Something went wrong on our side. Please try again in a moment." };
  }
}
