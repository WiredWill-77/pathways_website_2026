/** Records for the Risk & Reporting Console dashboard (/risk-console). */

export type RiskKpi = {
  label: string;
  value: string;
  /** Emphasised figure shown before the delta text ("+0.6"). */
  delta?: string;
  deltaText: string;
};

export type RiskAxis =
  /** Labels placed at a percentage of the chart width. */
  | { kind: "ticks"; labels: { label: string; at: number }[] }
  /** Labels spread evenly with space-between. */
  | { kind: "spread"; labels: string[] };

/** One sample. `period` names the month where the series is monthly. */
export type RiskSeriesPoint = { period?: string; actual: number; reference: number };

export type RiskAreaChart = {
  id: string;
  title: string;
  description: string;
  ariaLabel: string;
  /** SVG viewBox height (width is fixed at 720). */
  height: number;
  legend: { actual: string; reference: string };
  points: RiskSeriesPoint[];
  axis: RiskAxis;
  trend: string;
  range: string;
};

export type RiskGauge = { title: string; description: string; value: number; caption: string; ariaLabel: string };

export type RiskAlertQueue = { title: string; description: string; items: { label: string; count: number }[] };

export type RiskPipelines = { title: string; description: string; items: { label: string; availability: number }[]; note: string };

export type RiskConsoleData = {
  title: string;
  description: string;
  status: string;
  exportLabel: string;
  kpis: RiskKpi[];
  exposure: RiskAreaChart;
  straightThrough: RiskGauge;
  alerts: RiskAlertQueue;
  provisioning: RiskAreaChart;
  pipelines: RiskPipelines;
};
