import { ABOUT_CONTENT, CONTACT_CONTENT, PARTNERSHIPS_CONTENT, PRICING_CONTENT } from "@/data/mockData";
import { mockQuery } from "./mock-client";
import { recordSubmission, TEAM_INBOX } from "./submissions";
import { validateContactRequest } from "@/components/contact/validate";
import type { AboutContent, ContactContent, ContactRequestInput, ContactRequestResult, Partner, PartnershipsContent, PricingContent } from "@/types/company";

export async function getAboutContent(): Promise<AboutContent> {
  return mockQuery(() => ABOUT_CONTENT);
}

export async function getContactContent(): Promise<ContactContent> {
  return mockQuery(() => CONTACT_CONTENT);
}

export async function getPartnershipsContent(): Promise<PartnershipsContent> {
  return mockQuery(() => PARTNERSHIPS_CONTENT);
}

export async function getPartners(): Promise<Partner[]> {
  return mockQuery(() => PARTNERSHIPS_CONTENT.partners);
}

export async function getPricingContent(): Promise<PricingContent> {
  return mockQuery(() => PRICING_CONTENT);
}

/**
 * Contact form write. Validates, stores the enquiry in `contact_requests` and queues a team
 * notification plus a confirmation to the sender in `email_outbox`.
 *
 * Test hook: an email at the `error.test` domain simulates a failed upstream call, so the
 * form's server-error state can be exercised.
 */
export async function submitContactRequest(input: ContactRequestInput): Promise<ContactRequestResult> {
  const errors = validateContactRequest(input);
  if (Object.keys(errors).length) return { ok: false, errors };
  if (/@error\.test$/i.test(input.email.trim())) {
    return { ok: false, errors: {}, formError: "We could not send your message just now. Please try again, or email info@pathwaystechnologies.com." };
  }
  const email = input.email.trim();
  const name = input.name.trim();
  const company = input.company.trim();
  const id = await recordSubmission(
    "contact_requests",
    { name, email, company, role: input.role, interest: input.interest, message: input.message.trim() },
    [
      {
        to: TEAM_INBOX,
        subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
        body: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${input.role}\nInterest: ${input.interest}\n\n${input.message}`,
        template: "contact-team",
      },
      {
        to: email,
        subject: "We have your message",
        body: `Hi ${name.split(" ")[0]},\n\nThanks for getting in touch with Pathways Technologies. Someone from the team will reply shortly.\n\nPathways Technologies`,
        template: "contact-confirmation",
      },
    ],
  );
  return { ok: true, id };
}
