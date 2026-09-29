/**
 * Booking form rules, shared by the browser (instant feedback) and createEnrolment (the server check).
 * Pure functions with no data imports, so the client bundle stays free of mock records.
 */
import type { EnrolmentErrors, EnrolmentInput } from "@/types/checkout";

const EMAIL = /^[^@\s]+@[^@\s.]+\.[^@\s]+$/;

export function validateEnrolment(v: EnrolmentInput, limits: { minLearners: number; maxLearners: number }): EnrolmentErrors {
  const e: EnrolmentErrors = {};
  if (!Number.isInteger(v.learners) || v.learners < limits.minLearners || v.learners > limits.maxLearners)
    e.learners = `Cohorts run ${limits.minLearners} to ${limits.maxLearners} learners.`;
  if (v.format !== "On Site" && v.format !== "Remote") e.format = "Choose on site or remote.";
  if (!v.company.trim()) e.company = "Enter your organisation.";
  if (!v.contact.trim()) e.contact = "Enter a contact name.";
  if (!EMAIL.test(v.email)) e.email = "Enter a valid work email address.";
  if (!v.startWindow.trim()) e.startWindow = "Tell us your preferred start window.";
  if (v.paymentMethod === "mpesa" && !/^\+?\d{9,13}$/.test((v.mpesaPhone ?? "").replace(/\s+/g, "")))
    e.mpesaPhone = "Enter a valid M-Pesa phone number.";
  if (!["invoice", "card", "mpesa"].includes(v.paymentMethod)) e.paymentMethod = "Choose a payment method.";
  if (!v.agreedToTerms) e.agreedToTerms = "Accept the terms to continue.";
  return e;
}

export type CardFields = { cardName: string; cardNumber: string; cardExpiry: string; cardCvc: string };
export type CardErrors = Partial<Record<keyof CardFields, string>>;

/** Format checks for the visual-only card inputs. These values never leave the browser. */
export function validateCard(c: CardFields): CardErrors {
  const e: CardErrors = {};
  if (!c.cardName.trim()) e.cardName = "Enter the name on the card.";
  if (!/^[\d\s]{12,19}$/.test(c.cardNumber)) e.cardNumber = "Enter a valid card number.";
  if (!/^\d{2}\s?\/\s?\d{2}$/.test(c.cardExpiry)) e.cardExpiry = "MM / YY.";
  if (!/^\d{3,4}$/.test(c.cardCvc)) e.cardCvc = "3 or 4 digits.";
  return e;
}
