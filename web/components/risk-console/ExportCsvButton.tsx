"use client";

import type { RiskConsoleData } from "@/types/risk-console";

const esc = (v: string | number) => {
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

/** Flattens every figure on the console into section,metric,value,detail rows. */
export function toRiskCsv(d: RiskConsoleData): string {
  const rows: (string | number)[][] = [["section", "metric", "value", "detail"]];
  for (const k of d.kpis) rows.push(["KPI", k.label, k.value, [k.delta, k.deltaText].filter(Boolean).join(" ")]);
  for (const c of [d.exposure, d.provisioning])
    c.points.forEach((p, i) => {
      const period = p.period ?? `Point ${i + 1}`;
      rows.push([c.title, `${c.legend.actual} (${period})`, p.actual, ""]);
      rows.push([c.title, `${c.legend.reference} (${period})`, p.reference, ""]);
    });
  rows.push([d.straightThrough.title, d.straightThrough.caption, d.straightThrough.value + "%", ""]);
  for (const a of d.alerts.items) rows.push([d.alerts.title, a.label, a.count, "open"]);
  for (const p of d.pipelines.items) rows.push([d.pipelines.title, p.label, p.availability + "%", d.pipelines.description]);
  return rows.map((r) => r.map(esc).join(",")).join("\n") + "\n";
}

/** Downloads the console's figures as a CSV file, built in the browser. */
export function ExportCsvButton({ data, label }: { data: RiskConsoleData; label: string }) {
  const onClick = () => {
    const blob = new Blob([toRiskCsv(data)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `risk-console-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  };
  return (
    <button type="button" className="rc-btn" onClick={onClick}>
      {label}
    </button>
  );
}
