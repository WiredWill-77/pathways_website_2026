import { CmsApp } from "@/components/admin/CmsApp";
import { getCmsCollections, getCmsSeed, getCmsUsers } from "@/lib/data/cms";

/** Content admin (prototype: admin.html). Schemas, team and starting content load here and go to the client app. */
export default async function AdminPage() {
  const [collections, users, seed] = await Promise.all([getCmsCollections(), getCmsUsers(), getCmsSeed()]);
  return <CmsApp collections={collections} users={users} seed={seed} />;
}
