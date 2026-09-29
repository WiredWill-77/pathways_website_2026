import { RESOURCES_HUB, SERVICES_HUB, SOLUTIONS_HUB } from "@/data/mockData";
import { mockQuery } from "./mock-client";
import type { Hub, HubByKind, HubKind } from "@/types/hubs";

const HUBS: Record<HubKind, Hub> = { services: SERVICES_HUB, solutions: SOLUTIONS_HUB, resources: RESOURCES_HUB };

/** Content for the Services, Solutions or Resources hub page. */
export async function getHub<K extends HubKind>(kind: K): Promise<HubByKind<K>> {
  return mockQuery(() => HUBS[kind] as HubByKind<K>);
}
