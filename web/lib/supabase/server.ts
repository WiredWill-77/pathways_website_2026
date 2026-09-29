import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Server client for site pages and server actions. It uses the publishable key with no session, so
 * it can do only what the anon role is allowed to: read published content and insert form
 * submissions. Nothing here can read leads back.
 */
export function createPublicClient() {
  return createSupabaseClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
