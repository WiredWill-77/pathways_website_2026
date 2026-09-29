/** Figures behind the five illustrative sector dashboards. All values are placeholders
 *  until real client metrics are signed off. */

export type SectorName =
  | "Banking & Finance"
  | "Healthcare & Pharmaceuticals"
  | "Government & Public Sector"
  | "Manufacturing & Consumer Goods"
  | "Transport & Logistics";

export type RoleName = "Business Leader" | "Data & IT Leader" | "Analyst" | "Developer" | "Marketing" | "Finance" | "Sales" | "Support & Service";

/** [label, value, delta] */
export type KpiTile = { label: string; value: string; delta?: string };
export type KeyValue = { label: string; value: string | number };
export type Series = { actual: number[]; plan: number[] };

export type BankingBoardData = {
  kpis: KpiTile[];
  kpisExtra: KpiTile[];
  exposure: Series;
  straightThrough: number;
  alerts: KeyValue[];
  provisioning: Series;
  pipelines: KeyValue[];
};

export type HealthcareBoardData = {
  kpis: KpiTile[];
  governed: number;
  bedUtilisation: KeyValue[];
  trialLag: Series & { change: string };
  pathwaysInstrumented: number;
  pathwayChips: string[];
  formulary: number;
  claimsAutoCoded: number;
  dataQuality: KeyValue[];
};

export type GovernmentBoardData = {
  kpis: KpiTile[];
  kpisExtra: KpiTile[];
  caseVolume: { rows: string[]; cols: string[]; matrix: number[][] };
  budgetAccuracy: { values: number[]; labels: string[] };
  transparency: KeyValue[];
  onlineUptake: Series & { change: string };
  uptime: number;
  apisDocumented: number;
};

export type ManufacturingBoardData = {
  kpis: KpiTile[];
  firstPassYield: { values: number[]; labels: string[]; target: number; current: string };
  forecastAccuracy: number;
  oee: number;
  suppliersScored: number;
  downtime: Series & { change: string };
  defects: KeyValue[];
  unitCost: Series & { change: string };
};

export type TransportBoardData = {
  kpis: KpiTile[];
  onTime: number;
  costPerKm: Series & { change: string };
  fleetUtilisation: { values: number[]; labels: string[] };
  corridors: KeyValue[];
  volume: Series;
  exceptions: KeyValue[];
};

export type SectorBoards = {
  "Banking & Finance": BankingBoardData;
  "Healthcare & Pharmaceuticals": HealthcareBoardData;
  "Government & Public Sector": GovernmentBoardData;
  "Manufacturing & Consumer Goods": ManufacturingBoardData;
  "Transport & Logistics": TransportBoardData;
};

/** One row of the home page [02] Solutions selector. */
export type SectorSummary = {
  name: SectorName;
  blurb: string;
  ttv: string;
  coverage: string;
  /** Adoption % by role. */
  roles: Record<RoleName, number>;
};
