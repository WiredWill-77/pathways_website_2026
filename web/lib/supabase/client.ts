import { createBrowserClient } from "@supabase/ssr";

/** Browser client. Used by the admin CMS for sign-in and content edits (row level security applies). */
export function createClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!);
}
