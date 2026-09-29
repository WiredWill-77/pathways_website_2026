import { ROLE_ORDER, SECTOR_BOARDS, SECTORS } from "@/data/mockData";
import { mockQuery } from "./mock-client";
import type { RoleName, SectorBoards, SectorName, SectorSummary } from "@/types/dashboards";

/** All five boards' figures. Small enough to ship together to the client-side sector switcher. */
export async function getSectorBoards(): Promise<SectorBoards> {
  return mockQuery(() => SECTOR_BOARDS);
}

export async function getSectorBoard<N extends SectorName>(name: N): Promise<SectorBoards[N]> {
  return mockQuery(() => SECTOR_BOARDS[name]);
}

export async function getSectors(): Promise<SectorSummary[]> {
  return mockQuery(() => SECTORS);
}

export async function getRoleOrder(): Promise<RoleName[]> {
  return mockQuery(() => ROLE_ORDER);
}
