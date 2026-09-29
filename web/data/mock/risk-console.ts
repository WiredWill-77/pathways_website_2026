/* Mock data for the Risk & Reporting Console. Illustrative figures for the dashboard demo. */
import type { RiskConsoleData, RiskSeriesPoint } from "@/types/risk-console";

const zip = (actual: number[], reference: number[], periods?: string[]): RiskSeriesPoint[] =>
  actual.map((a, i) => ({ ...(periods ? { period: periods[i] } : {}), actual: a, reference: reference[i] }));

const MONTHS = ["Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026", "Mar 2026", "Apr 2026", "May 2026", "Jun 2026", "Jul 2026", "Aug 2026", "Sep 2026"];

export const RISK_CONSOLE: RiskConsoleData = {
  title: "Risk & Reporting Console",
  description: "Capital, exposure and reporting health across the group. Updated every 60 seconds.",
  status: "Live",
  exportLabel: "Export CSV",
  kpis: [
    { label: "Capital Ratio", value: "18.4%", delta: "+0.6", deltaText: "vs last quarter" },
    { label: "Fraud Recovered", value: "34%", delta: "+9", deltaText: "pts year on year" },
    { label: "Close Cycle", value: "3.1 d", delta: "−62%", deltaText: "since rollout" },
    { label: "Cost / Income", value: "41.2%", delta: "−3.4", deltaText: "vs plan" },
    { label: "Net Interest Margin", value: "5.8%", delta: "+0.4", deltaText: "vs last quarter" },
    { label: "Liquidity Coverage", value: "132%", delta: "+11", deltaText: "above requirement" },
    { label: "Reg Reports Automated", value: "27", deltaText: "of 31 in scope" },
    { label: "Model Coverage", value: "89%", delta: "+6", deltaText: "models validated" },
  ],
  exposure: {
    id: "exposure",
    title: "Exposure Vs Limit",
    description: "Rolling 12 months, group total",
    ariaLabel: "Exposure against limit, rolling 12 months",
    height: 210,
    legend: { actual: "Exposure", reference: "Limit" },
    points: zip([62, 66, 61, 70, 74, 71, 79, 84, 80, 88, 91, 86], [80, 80, 82, 82, 84, 84, 86, 88, 88, 90, 92, 92], MONTHS),
    axis: {
      kind: "ticks",
      labels: [
        { label: "Oct", at: 0 },
        { label: "Jan", at: 27.3 },
        { label: "Apr", at: 54.5 },
        { label: "Jul", at: 81.8 },
        { label: "Sep", at: 100 },
      ],
    },
    trend: "Exposure up 24 points over 12 months",
    range: "October 2025 – September 2026 · 6 points of limit headroom",
  },
  straightThrough: {
    title: "Straight-Through Rate",
    description: "Payments cleared without manual touch",
    value: 94,
    caption: "Payments automated",
    ariaLabel: "94 percent of payments automated",
  },
  alerts: {
    title: "Alert Queue",
    description: "Open items awaiting review",
    items: [
      { label: "AML review", count: 12 },
      { label: "Limit breach", count: 3 },
      { label: "Data quality", count: 7 },
      { label: "Recon variance", count: 5 },
    ],
  },
  provisioning: {
    id: "provisioning",
    title: "Provisioning Coverage",
    description: "Actual against plan",
    ariaLabel: "Provisioning coverage, actual against plan",
    height: 175,
    legend: { actual: "Actual", reference: "Plan" },
    points: zip([74, 72, 76, 79, 77, 83, 86, 84, 90], [76, 76, 78, 78, 80, 82, 82, 84, 86]),
    axis: { kind: "spread", labels: ["Q1", "Q2", "Q3", "Q4", "Q1"] },
    trend: "Coverage 4 points ahead of plan",
    range: "Q1 2025 – Q1 2026",
  },
  pipelines: {
    title: "Pipelines Under SLA",
    description: "Last 30 days availability",
    items: [
      { label: "Core banking", availability: 99.9 },
      { label: "Cards", availability: 99.4 },
      { label: "Treasury", availability: 97.8 },
      { label: "Branch feed", availability: 94.1 },
    ],
    note: "Branch feed is below the 95% target for the third week.",
  },
};
