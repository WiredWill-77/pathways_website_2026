import type { ContactFieldErrors, ContactRequestInput } from "@/types/company";

export const EMPTY_CONTACT: ContactRequestInput = { name: "", email: "", company: "", role: "", interest: "", message: "" };

/** Field order, used to focus the first invalid control. */
export const CONTACT_FIELDS = ["name", "email", "company", "role", "interest", "message"] as const;

const EMAIL = /^[^@\s]+@[^@\s.]+\.[^@\s]+$/;

/** Shared by the client form and the server action, so both apply the same rules. */
export function validateContactRequest(v: ContactRequestInput): ContactFieldErrors {
  const e: ContactFieldErrors = {};
  if (!v.name.trim()) e.name = "Enter your full name.";
  if (!EMAIL.test(v.email)) e.email = "Enter a valid work email address.";
  if (!v.company.trim()) e.company = "Enter your organisation.";
  if (!v.interest) e.interest = "Choose what you would like to talk about.";
  if (v.message.trim().length < 10) e.message = "Tell us a little more, at least a sentence.";
  return e;
}
