/* Pure form validation shared by the client forms and the mock mutations in lib/data. */

export type ContactFields = { name: string; email: string; company: string };
export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactFields(v: Partial<ContactFields>): ContactErrors {
  const errors: ContactErrors = {};
  const name = (v.name ?? "").trim();
  const email = (v.email ?? "").trim();
  const company = (v.company ?? "").trim();
  if (!name) errors.name = "Enter your full name.";
  else if (name.length > 120) errors.name = "Keep your name under 120 characters.";
  if (!email) errors.email = "Enter your work email.";
  else if (!EMAIL.test(email) || email.length > 200) errors.email = "Enter an email address like name@company.com.";
  if (!company) errors.company = "Enter your company name.";
  else if (company.length > 160) errors.company = "Keep the company name under 160 characters.";
  return errors;
}
