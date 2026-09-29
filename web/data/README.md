# Mock data

`mockData.ts` re-exports every file in `mock/`. Each file holds the typed records for one domain
(types live in `../types/`). The UI never imports these directly: pages call the accessors in
`../lib/data/`, which read from here through `mockQuery()`.

## Moving a domain to Supabase

1. Create a table per record type. Record shapes are already row-like: flat fields, a `slug` for
   anything with a detail page, arrays for lists (use `jsonb` or `text[]`, or a child table where a
   list is queried on its own).
2. Seed it from the mock file, for example with a one-off script that imports `@/data/mockData` and
   upserts each array.
3. Rewrite the accessor bodies in `lib/data/<domain>.ts` to query Supabase. Keep the signatures and
   return types; components and pages do not change.
4. Delete the mock file once nothing reads it, and remove its line from `mockData.ts`.

For the admin CMS, `lib/data/cms.ts` reads the schemas, team and starting content on the server, and
`lib/data/cms-repository.ts` keeps edits in the browser. The repository is the swap point: its list,
save and remove methods become Supabase selects, upserts and deletes, and `getCmsSeed()` is no longer
needed once the admin and the site pages read the same tables.
