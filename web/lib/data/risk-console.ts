import { RISK_CONSOLE } from "@/data/mockData";
import { mockQuery } from "./mock-client";
import type { RiskConsoleData } from "@/types/risk-console";

/** Everything the Risk & Reporting Console renders, in one read (one dashboard query). */
export async function getRiskConsole(): Promise<RiskConsoleData> {
  return mockQuery(() => RISK_CONSOLE);
}
