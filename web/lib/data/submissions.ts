import { randomUUID } from "node:crypto";
import { createPublicClient } from "@/lib/supabase/server";

/** Where new-lead notifications go. Override with NOTIFY_EMAIL. */
const TEAM_INBOX = process.env.NOTIFY_EMAIL ?? "info@pathwaystechnologies.com";

type Mail = { to: string; subject: string; body: string; template?: string };

/**
 * Inserts one submission row and queues its emails in `email_outbox`. The anon role can insert but
 * not read, so ids are generated here instead of read back. Throws on any database error.
 */
export async function recordSubmission(table: "contact_requests" | "whitepaper_requests" | "enrolments", row: Record<string, unknown>, mail: Mail[]) {
  const db = createPublicClient();
  const id = randomUUID();
  const { error } = await db.from(table).insert({ id, ...row });
  if (error) throw new Error(error.message);
  if (mail.length) {
    const { error: mailError } = await db
      .from("email_outbox")
      .insert(mail.map((m) => ({ to_email: m.to, subject: m.subject, body: m.body, template: m.template ?? "plain", related_table: table, related_id: id })));
    if (mailError) console.error("email_outbox insert failed:", mailError.message);
  }
  return id;
}

export { TEAM_INBOX };
