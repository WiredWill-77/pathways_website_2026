import { createClient } from "@/lib/supabase/client";
import { slugify } from "@/lib/routes";
import type { CmsCollectionKey, CmsRecord, CmsSeed, CmsUser } from "@/types/cms";

/**
 * Browser-side repository for the admin CMS, backed by Supabase. Sign-in uses Supabase Auth and
 * content lives in `cms_records` (one row per entry, editor fields in the `fields` jsonb column).
 * Row level security decides what each signed-in person can do: Editors create and update,
 * Admins also delete. The screens only see the CmsRecord shape from types/cms.ts.
 */

export type CmsRepository = ReturnType<typeof createCmsRepository>;

type Row = { id: string; collection: string; slug: string; status: CmsRecord["status"]; fields: Record<string, string>; sort_order: number; updated_at: string };

const toRecord = (r: Row): CmsRecord => ({ ...r.fields, id: r.id, slug: r.slug, status: r.status, updated: r.updated_at.slice(0, 10) });

export function createCmsRepository(seed: CmsSeed) {
  const db = createClient();

  async function profile(userId: string): Promise<CmsUser | null> {
    const { data } = await db.from("cms_profiles").select("email,name,role").eq("id", userId).maybeSingle();
    return data ? { email: data.email, name: data.name, role: data.role } : null;
  }

  /** First sign-in on an empty database loads the starting content from the mock records. */
  async function seedIfEmpty() {
    const { count } = await db.from("cms_records").select("id", { count: "exact", head: true });
    if (count !== 0) return;
    const now = new Date().toISOString();
    const rows = (Object.keys(seed) as CmsCollectionKey[]).flatMap((col) =>
      seed[col].map((r, i) => {
        const { id, slug, status, updated: _u, ...fields } = r;
        return { id, collection: col, slug, status, fields, sort_order: i, updated_at: now };
      }),
    );
    await db.from("cms_records").upsert(rows, { onConflict: "collection,id" });
  }

  return {
    async session(): Promise<CmsUser | null> {
      const { data } = await db.auth.getUser();
      const user = data.user ? await profile(data.user.id) : null;
      if (user) await seedIfEmpty();
      return user;
    },

    /** Signs in with email and password. Throws with a readable message when it fails. */
    async login(email: string, password: string): Promise<CmsUser> {
      const { data, error } = await db.auth.signInWithPassword({ email, password });
      if (error) throw new Error(error.message);
      const user = await profile(data.user.id);
      if (!user) {
        await db.auth.signOut();
        throw new Error("This account is not on the CMS team. Ask an admin to invite you.");
      }
      await seedIfEmpty();
      return user;
    },

    async logout(): Promise<void> {
      await db.auth.signOut();
    },

    async list(col: CmsCollectionKey): Promise<CmsRecord[]> {
      const { data, error } = await db.from("cms_records").select("*").eq("collection", col).order("sort_order").order("updated_at", { ascending: false });
      if (error) throw new Error(error.message);
      return (data as Row[]).map(toRecord);
    },

    /** Creates or updates a record. New records get their slug from the title when none is set. */
    async save(col: CmsCollectionKey, item: Partial<CmsRecord>, titleKey = "title"): Promise<CmsRecord> {
      const slug = item.slug || slugify(item[titleKey] ?? "");
      const id = item.id || slug || "new-" + Date.now();
      const { id: _id, slug: _slug, status: _status, updated: _updated, ...fields } = item;
      const { data, error } = await db
        .from("cms_records")
        .upsert({ id, collection: col, slug, status: item.status ?? "draft", fields, updated_at: new Date().toISOString() }, { onConflict: "collection,id" })
        .select()
        .single();
      if (error) throw new Error(error.message);
      return toRecord(data as Row);
    },

    async remove(col: CmsCollectionKey, id: string): Promise<void> {
      const { data, error } = await db.from("cms_records").delete().eq("collection", col).eq("id", id).select("id");
      if (error) throw new Error(error.message);
      if (!data?.length) throw new Error("Only admins can delete content.");
    },

    /** Puts a collection back to its starting content from the mock records. */
    async reseed(col: CmsCollectionKey): Promise<CmsRecord[]> {
      const rows = seed[col].map((r, i) => {
        const { id, slug, status, updated: _u, ...fields } = r;
        return { id, collection: col, slug, status, fields, sort_order: i, updated_at: new Date().toISOString() };
      });
      if (rows.length) {
        const { error } = await db.from("cms_records").upsert(rows, { onConflict: "collection,id" });
        if (error) throw new Error(error.message);
      }
      return this.list(col);
    },
  };
}
