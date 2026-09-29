"use client";

import { useState } from "react";
import { SectorDashboard } from "@/components/dashboards/SectorDashboard";
import { Icon } from "@/components/ui/Icon";
import type { SectorBoards, SectorName } from "@/types/dashboards";

/** Browser-framed product screen under the hero. Tabs switch the sector board. */
export function HeroBrowser({ tabs, url, boards }: { tabs: SectorName[]; url: string; boards: SectorBoards }) {
  const [tab, setTab] = useState<SectorName>(tabs[0]);
  return (
    <div className="pt-browser">
      <div className="pt-browser-tabs" role="tablist" aria-label="Sector dashboards">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        {tabs.map((t) => (
          <button key={t} type="button" role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={tab === t ? "on" : ""}>
            {t.split(" ")[0]}
          </button>
        ))}
      </div>
      <div className="pt-browser-url">
        <span className="lock">
          <Icon name="lock" size={11} />
        </span>
        {url}
      </div>
      <div className="pt-browser-body" role="tabpanel">
        <SectorDashboard sector={tab} boards={boards} />
      </div>
    </div>
  );
}
