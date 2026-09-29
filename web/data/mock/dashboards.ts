import type { RoleName, SectorBoards, SectorSummary } from "@/types/dashboards";

/** Illustrative figures for the five sector boards (prototype: dashboards.jsx). */
export const SECTOR_BOARDS: SectorBoards = {
  "Banking & Finance": {
    kpis: [
      { label: "Capital Ratio", value: "18.4%", delta: "+0.6" },
      { label: "Fraud Recovered", value: "34%", delta: "+9" },
      { label: "Close Cycle", value: "3.1 d", delta: "-62%" },
      { label: "Cost / Income", value: "41.2%", delta: "-3.4" },
    ],
    kpisExtra: [
      { label: "Net Interest Margin", value: "5.8%", delta: "+0.4" },
      { label: "Liquidity Coverage", value: "132%", delta: "+11" },
      { label: "Reg Reports Automated", value: "27", delta: "of 31" },
      { label: "Model Coverage", value: "89%", delta: "+6" },
    ],
    exposure: { actual: [62, 66, 61, 70, 74, 71, 79, 84, 80, 88, 91, 86], plan: [80, 80, 82, 82, 84, 84, 86, 88, 88, 90, 92, 92] },
    straightThrough: 94,
    alerts: [
      { label: "AML review", value: 12 },
      { label: "Limit breach", value: 3 },
      { label: "Data quality", value: 7 },
      { label: "Recon variance", value: 5 },
    ],
    provisioning: { actual: [74, 72, 76, 79, 77, 83, 86, 84, 90], plan: [76, 76, 78, 78, 80, 82, 82, 84, 86] },
    pipelines: [
      { label: "Core banking", value: "99.9%" },
      { label: "Cards", value: "99.4%" },
      { label: "Treasury", value: "97.8%" },
      { label: "Branch feed", value: "94.1%" },
    ],
  },
  "Healthcare & Pharmaceuticals": {
    kpis: [
      { label: "Readmissions", value: "8.4%", delta: "−18%" },
      { label: "Consent Coverage", value: "99.2%", delta: "Audited" },
      { label: "Avg Wait", value: "24 min", delta: "−9 min" },
      { label: "Theatre Utilisation", value: "86%", delta: "+4" },
    ],
    governed: 77,
    bedUtilisation: [
      { label: "Central", value: 88 },
      { label: "Riverside", value: 74 },
      { label: "Northgate", value: 69 },
      { label: "Eastfield", value: 61 },
      { label: "Lakeview", value: 57 },
    ],
    trialLag: { actual: [30, 28, 25, 22, 19, 18, 17], plan: [30, 29, 27, 26, 24, 23, 22], change: "−41%" },
    pathwaysInstrumented: 128,
    pathwayChips: ["9 Sites", "4 Regions", "2 Registries"],
    formulary: 91,
    claimsAutoCoded: 68,
    dataQuality: [
      { label: "Patient", value: 96 },
      { label: "Pharmacy", value: 89 },
      { label: "Imaging", value: 81 },
      { label: "Referrals", value: 73 },
    ],
  },
  "Government & Public Sector": {
    kpis: [
      { label: "Datasets Open", value: "68%" },
      { label: "Median Resolution", value: "5.8 d" },
      { label: "Agencies Aligned", value: "23" },
      { label: "Appeals Overturned", value: "4.1%" },
    ],
    kpisExtra: [
      { label: "Digital Uptake", value: "54%" },
      { label: "Cost Per Case", value: "KSh 812" },
      { label: "Backlog", value: "1,940" },
      { label: "Satisfaction", value: "4.2 / 5" },
    ],
    caseVolume: {
      rows: ["Licensing", "Benefits", "Housing", "Permits", "Registry"],
      cols: ["Q1", "Q2", "Q3", "Q4"],
      matrix: [
        [42, 58, 64, 71],
        [88, 74, 69, 61],
        [36, 44, 52, 49],
        [24, 31, 29, 38],
        [51, 47, 55, 62],
      ],
    },
    budgetAccuracy: { values: [62, 71, 80, 88, 94], labels: ["Q1", "Q2", "Q3", "Q4", "Q1"] },
    transparency: [
      { label: "Published", value: 68 },
      { label: "In Review", value: 21 },
      { label: "Exempt", value: 11 },
    ],
    onlineUptake: { actual: [32, 34, 38, 37, 43, 47, 49, 54], plan: [33, 35, 37, 39, 41, 44, 46, 48], change: "+22 pts" },
    uptime: 99,
    apisDocumented: 76,
  },
  "Manufacturing & Consumer Goods": {
    kpis: [
      { label: "Scrap Rate", value: "1.8%", delta: "−0.6" },
      { label: "On-Time-In-Full", value: "93%", delta: "+5" },
      { label: "Energy Per Unit", value: "2.4 kWh", delta: "−11%" },
      { label: "Inventory Turns", value: "7.9", delta: "+0.8" },
    ],
    firstPassYield: { values: [84, 88, 91, 94, 96], labels: ["Q1", "Q2", "Q3", "Q4", "Q1"], target: 92, current: "96%" },
    forecastAccuracy: 81,
    oee: 72,
    suppliersScored: 1240,
    downtime: { actual: [46, 44, 39, 34, 31, 27, 24], plan: [44, 42, 40, 37, 34, 31, 28], change: "−28%" },
    defects: [
      { label: "Line A", value: 412 },
      { label: "Line B", value: 286 },
      { label: "Line C", value: 174 },
    ],
    unitCost: { actual: [100, 99, 96, 97, 93, 91, 90, 88], plan: [100, 98, 97, 95, 94, 93, 91, 90], change: "−9%" },
  },
  "Transport & Logistics": {
    kpis: [
      { label: "Deliveries / Day", value: "8,420", delta: "+6%" },
      { label: "Fuel Burn", value: "31.4 L/100", delta: "−9%" },
      { label: "Empty Miles", value: "12%", delta: "−4" },
      { label: "Dwell Time", value: "41 min", delta: "−12" },
    ],
    onTime: 88,
    costPerKm: { actual: [100, 97, 94, 90, 87, 85, 83], plan: [100, 98, 97, 95, 93, 92, 90], change: "−17%" },
    fleetUtilisation: { values: [54, 61, 68, 73, 79], labels: ["Q1", "Q2", "Q3", "Q4", "Q1"] },
    corridors: [
      { label: "North Ring", value: "On Time" },
      { label: "Coastal", value: "+12 min" },
      { label: "Inland Freight", value: "On Time" },
      { label: "Lake Route", value: "+4 min" },
    ],
    volume: { actual: [64, 68, 66, 72, 78, 75, 82, 86], plan: [66, 68, 70, 72, 74, 76, 78, 80] },
    exceptions: [
      { label: "Failed delivery", value: 18 },
      { label: "Damage claim", value: 6 },
      { label: "Late pickup", value: 23 },
      { label: "Address issue", value: 11 },
    ],
  },
};

/** Sector rows for the home page [02] Solutions selector (prototype: solutions.jsx SECTORS). */
export const SECTORS: SectorSummary[] = [
  {
    name: "Banking & Finance",
    blurb: "Risk Models, Regulatory Reporting And Customer Analytics",
    ttv: "9 weeks",
    coverage: "92%",
    roles: { "Business Leader": 78, "Data & IT Leader": 92, Analyst: 88, Developer: 64, Marketing: 47, Finance: 84, Sales: 56, "Support & Service": 41 },
  },
  {
    name: "Healthcare & Pharmaceuticals",
    blurb: "Clinical And Commercial Data Under Strict Governance",
    ttv: "12 weeks",
    coverage: "77%",
    roles: { "Business Leader": 71, "Data & IT Leader": 86, Analyst: 74, Developer: 52, Marketing: 38, Finance: 61, Sales: 44, "Support & Service": 66 },
  },
  {
    name: "Government & Public Sector",
    blurb: "Service Delivery Data, Transparency And Open Reporting",
    ttv: "14 weeks",
    coverage: "68%",
    roles: { "Business Leader": 64, "Data & IT Leader": 79, Analyst: 81, Developer: 48, Marketing: 29, Finance: 72, Sales: 21, "Support & Service": 58 },
  },
  {
    name: "Manufacturing & Consumer Goods",
    blurb: "Demand Planning, Quality And Supply-Chain Visibility",
    ttv: "8 weeks",
    coverage: "81%",
    roles: { "Business Leader": 69, "Data & IT Leader": 74, Analyst: 83, Developer: 59, Marketing: 63, Finance: 70, Sales: 77, "Support & Service": 46 },
  },
  {
    name: "Transport & Logistics",
    blurb: "Fleet, Route And Network Performance In Near Real Time",
    ttv: "7 weeks",
    coverage: "88%",
    roles: { "Business Leader": 73, "Data & IT Leader": 85, Analyst: 79, Developer: 67, Marketing: 41, Finance: 58, Sales: 52, "Support & Service": 74 },
  },
];

export const ROLE_ORDER: RoleName[] = ["Business Leader", "Data & IT Leader", "Analyst", "Developer"];
