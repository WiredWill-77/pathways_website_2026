import { randomBytes } from "node:crypto";
import { COURSE_CHECKOUT_CONFIG, COURSES } from "@/data/mockData";
import { validateEnrolment } from "@/components/checkout/validation";
import { mockQuery } from "./mock-client";
import { recordSubmission, TEAM_INBOX } from "./submissions";
import type { CheckoutConfig, Enrolment, EnrolmentInput, EnrolmentResult } from "@/types/checkout";

/** Price, cohort limits, formats and payment methods for the booking form. */
export async function getCheckoutConfig(): Promise<CheckoutConfig> {
  return mockQuery(() => COURSE_CHECKOUT_CONFIG);
}

const REF_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function bookingReference(): string {
  const bytes = randomBytes(6);
  return "PT-" + Array.from(bytes, (b) => REF_ALPHABET[b % REF_ALPHABET.length]).join("");
}

/**
 * Mock enrolment mutation. Validates, prices the booking and returns a reference number.
 * Nothing is stored or logged. Only the whitelisted fields below are read, so anything else a
 * caller passes (card numbers included) is ignored. Replace the body with the CRM or payment
 * provider call when one is chosen.
 */
export async function createEnrolment(input: EnrolmentInput): Promise<EnrolmentResult> {
  const cfg = COURSE_CHECKOUT_CONFIG;
  const clean: EnrolmentInput = {
    courseSlug: String(input.courseSlug ?? ""),
    learners: Number(input.learners),
    format: input.format,
    startWindow: String(input.startWindow ?? ""),
    company: String(input.company ?? ""),
    contact: String(input.contact ?? ""),
    email: String(input.email ?? "").trim(),
    phone: input.phone ? String(input.phone) : undefined,
    paymentMethod: input.paymentMethod,
    mpesaPhone: input.paymentMethod === "mpesa" ? String(input.mpesaPhone ?? "") : undefined,
    agreedToTerms: input.agreedToTerms === true,
  };
  const course = COURSES.find((c) => c.slug === clean.courseSlug && c.status === "published");
  const errors = validateEnrolment(clean, cfg);
  if (!course) errors.courseSlug = "Choose a module.";
  if (Object.keys(errors).length) return mockQuery(() => ({ ok: false as const, errors, message: "Check the highlighted fields and try again." }));

  const enrolment: Enrolment = {
    reference: bookingReference(),
    courseSlug: course!.slug,
    courseTitle: course!.title,
    learners: clean.learners,
    format: clean.format,
    total: clean.learners * cfg.pricePerLearner,
    email: clean.email,
    createdAt: new Date().toISOString(),
  };
  await recordSubmission(
    "enrolments",
    {
      reference: enrolment.reference,
      course_slug: enrolment.courseSlug,
      course_title: enrolment.courseTitle,
      learners: enrolment.learners,
      format: enrolment.format,
      start_window: clean.startWindow,
      company: clean.company,
      contact: clean.contact,
      email: clean.email,
      phone: clean.phone ?? null,
      payment_method: clean.paymentMethod,
      mpesa_phone: clean.mpesaPhone ?? null,
      total: enrolment.total,
      currency: cfg.currency,
    },
    [
      {
        to: TEAM_INBOX,
        subject: `New booking ${enrolment.reference}: ${enrolment.courseTitle}`,
        body: `${clean.contact} (${clean.company}, ${clean.email}) booked ${enrolment.learners} learners, ${clean.format}, ${clean.startWindow}. Total ${cfg.currency} ${enrolment.total}. Payment: ${clean.paymentMethod}.`,
        template: "enrolment-team",
      },
      {
        to: clean.email,
        subject: `Booking ${enrolment.reference} received`,
        body: `Hi ${clean.contact.split(" ")[0]},\n\nWe have your booking for ${enrolment.courseTitle} (reference ${enrolment.reference}). We will confirm dates and payment details shortly.\n\nPathways Technologies`,
        template: "enrolment-confirmation",
      },
    ],
  );
  return { ok: true as const, enrolment };
}
