/* Per-industry dashboards for [02] Solutions.
   Each industry gets its OWN dashboard composition and visual treatment.
   All figures are illustrative placeholders, substitute real metrics per sector here.
   Colour roles: BLUE owns the product, every primary series, gauge, bar and KPI figure. Orange is
   reserved for the ask (CTAs) and, inside a board, for the single companion/target series that has to
   read as "the other line". #4EBAFC and #FFAA4B are the tints that clear the 3:1 floor on these panels. */

const fmt=n=>n.toLocaleString("en-GB");
/* compact boards must fit the By Industry list height in the Solutions column: trim series, not readability */
const cut=(arr,n,compact)=>compact?arr.slice(0,n):arr;
/* DARK_ACCENT = primary series (blue). CMP = the companion/target series (orange). */
const DARK_ACCENT="#4EBAFC",DARK_FILL="rgba(78,186,252,.16)";
/* #1B87C9 is the brand blue. As a stroke or label on these panels it measures ~2.6:1, under the 3:1
   non-text floor, so anything that must read uses the #4EBAFC tint; base #1B87C9 stays on fills,
   borders and tracks where nothing depends on legibility. */
const BLUE="#FFAA4B",BLUE_BASE="#1B87C9",BLUE_FILL="rgba(27,135,201,.22)",BLUE_TRACK="rgba(255,255,255,.14)";

/* ---------- chart primitives (token-driven, animated on mount) ---------- */
/* Catmull-Rom → cubic bezier; k>1 exaggerates the curve for a softer, wavier line. */
function curve(pts,k=1.25){
  if(pts.length<3)return pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");
  let d="M"+pts[0][0].toFixed(1)+" "+pts[0][1].toFixed(1);
  for(let i=0;i<pts.length-1;i++){
    const p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||pts[i+1];
    const c1=[p1[0]+(p2[0]-p0[0])/6*k,p1[1]+(p2[1]-p0[1])/6*k];
    const c2=[p2[0]-(p3[0]-p1[0])/6*k,p2[1]-(p3[1]-p1[1])/6*k];
    d+=` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)}, ${c2[0].toFixed(1)} ${c2[1].toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}
const Legend=({a="Actual",b="Plan",aC="var(--chart-bar)",bC=BLUE_BASE})=><span style={{display:"inline-flex",gap:10,fontSize:10}}>
  {[[a,aC],[b,bC]].map(([t,c])=><span key={t} style={{display:"inline-flex",alignItems:"center",gap:4,color:"var(--text-muted)"}}>
    <i style={{width:6,height:6,borderRadius:99,background:c,display:"block"}}/>{t}</span>)}</span>;

function Line({s,cmp,color="var(--chart-bar)",fill="var(--chart-fill)",cmpColor=BLUE,h=74,area=true,delay=0}){
  const all=cmp?s.concat(cmp):s,mn=Math.min(...all),mx=Math.max(...all),w=300,xe=w-16;
  const y=v=>h-((v-mn)/((mx-mn)||1))*(h-18)-9;
  const pts=s.map((v,i)=>[i/(s.length-1)*xe,y(v)]);
  const d=curve(pts),end=pts[pts.length-1];
  const dc=cmp?curve(cmp.map((v,i)=>[i/(cmp.length-1)*xe,y(v)])):null;
  return <div style={{position:"relative"}}>
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none" style={{display:"block",overflow:"visible"}}>
      {/* fill runs flat to the true right edge so there is no hard vertical wall mid-panel */}
      {area&&<path className="pt-fade" style={{animationDelay:delay+120+"ms"}}
        d={`${d} L ${w} ${end[1].toFixed(1)} L ${w} ${h} L 0 ${h} Z`} fill={fill}/>}
      {/* pathLength=1 pairs with .pt-draw's stroke-dasharray:1. No non-scaling-stroke: it computes dashes in
         rendered px while pathLength normalises to user units, so the pattern repeated and split the line. */}
      {dc&&<path className="pt-fade" style={{animationDelay:(delay+240)+"ms"}} d={dc} fill="none" stroke={cmpColor}
        strokeWidth="2" strokeDasharray="0.1 3" strokeLinecap="round" opacity=".9"/>}
      <path className="pt-draw" style={{animationDelay:delay+"ms"}} d={d} fill="none" stroke={color} strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" pathLength="1"/>
    </svg>
    {/* live head: HTML, not SVG, preserveAspectRatio="none" would stretch a circle into a capsule */}
    <span className="pt-blip" style={{left:(end[0]/w*100)+"%",top:(end[1]/h*100)+"%",color,animationDelay:(delay+800)+"ms"}}>
      <i className="pt-blip-halo"/><i className="pt-blip-dot"/></span>
  </div>;
}
function Columns({s,target,h=110,color="var(--chart-bar)",soft="var(--chart-bar-soft)",labels}){
  const mx=Math.max(...s,target||0);
  return <div>
    <div style={{position:"relative",height:h,display:"flex",alignItems:"flex-end",gap:8}}>
      {target!=null&&<div className="pt-fade" style={{position:"absolute",left:0,right:0,bottom:(target/mx*h)+"px",
        borderTop:"1px dotted var(--chart-bar)",animationDelay:"500ms"}}>
        <span style={{position:"absolute",right:0,top:-16,fontSize:10,color:"var(--chart-bar)"}}>Target</span></div>}
      {s.map((v,i)=><span key={i} className="pt-growy" style={{flex:1,height:(v/mx*100)+"%",borderRadius:"2px 2px 0 0",
        background:i===s.length-1?color:soft,animationDelay:(i*70)+"ms"}}/>)}
    </div>
    {labels&&<div style={{display:"flex",gap:8,marginTop:8}}>{labels.map((l,i)=>
      <span key={i} style={{flex:1,textAlign:"center",fontSize:10,color:"var(--text-muted)"}}>{l}</span>)}</div>}
  </div>;
}
function Ring({v,size=104,stroke=11,color="var(--chart-bar)",track="var(--chart-track)",children}){
  const r=(size-stroke)/2,c=2*Math.PI*r;
  return <div style={{position:"relative",width:size,height:size,flex:"0 0 auto"}}>
    <svg width={size} height={size}><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={track} strokeWidth={stroke}/>
      <circle className="pt-ringdraw" cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={c} style={{"--to":c*(1-v/100),"--from":c}} transform={`rotate(-90 ${size/2} ${size/2})`}/></svg>
    <div style={{position:"absolute",inset:0,display:"grid",placeItems:"center",textAlign:"center"}}>{children}</div></div>;
}
function Gauge({v,label,color="var(--chart-bar)"}){
  const r=44,c=Math.PI*r;
  return <div style={{textAlign:"center"}}>
    <svg viewBox="0 0 108 62" width="108" height="62">
      <path d="M8 54a46 46 0 0 1 92 0" fill="none" stroke="var(--chart-track)" strokeWidth="9" strokeLinecap="round"/>
      <path className="pt-ringdraw" d="M8 54a46 46 0 0 1 92 0" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round"
        strokeDasharray={c} style={{"--to":c*(1-v/100),"--from":c}}/>
      <text x="54" y="50" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="500">{v}%</text></svg>
    <div style={{fontSize:11,color:"var(--text-muted)",marginTop:2}}>{label}</div></div>;
}
function HBars({rows,color="var(--chart-bar)"}){
  const mx=Math.max(...rows.map(r=>r[1]));
  return <div style={{display:"grid",gap:10}}>{rows.map(([k,v],i)=>
    <div key={k} style={{display:"grid",gridTemplateColumns:"minmax(0,104px) 1fr 40px",alignItems:"center",gap:10}}>
      <span style={{fontSize:12,color:"var(--text-secondary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{k}</span>
      <span style={{height:8,borderRadius:99,background:"var(--chart-track)",overflow:"hidden",display:"block"}}>
        <span className="pt-wgrow" style={{display:"block",height:"100%",borderRadius:99,width:(v/mx*100)+"%",
          background:color,animationDelay:(i*80)+"ms"}}/></span>
      <span style={{fontSize:12,textAlign:"right",fontVariantNumeric:"tabular-nums",color:"var(--text-primary)"}}>{v}</span>
    </div>)}</div>;
}
function HeatGrid({matrix,rows,cols}){
  const mx=Math.max(...matrix.flat());
  return <div>
    <div style={{display:"grid",gridTemplateColumns:`76px repeat(${cols.length},1fr)`,gap:4,alignItems:"center"}}>
      <span/>{cols.map(c=><span key={c} style={{fontSize:10,color:"var(--text-muted)",textAlign:"center"}}>{c}</span>)}
      {matrix.map((row,ri)=><React.Fragment key={rows[ri]}>
        <span style={{fontSize:11,color:"var(--text-secondary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{rows[ri]}</span>
        {row.map((v,ci)=><span key={ci} className="pt-fade" style={{height:22,borderRadius:2,
          animationDelay:((ri*cols.length+ci)*24)+"ms",
          background:`color-mix(in oklab, ${BLUE_BASE} ${Math.round(v/mx*100)}%, var(--chart-track))`}}/>)}
      </React.Fragment>)}
    </div></div>;
}

/* ---------- shared chrome ---------- */
/* Single board header for all five boards: 13px uppercase eyebrow at .55 alpha, 11px note on the right,
   8px padding-bottom over a 1px #1B87C9 rule. Panel labels all use PANEL_LAB (11.5px, .62 alpha, 6px gap). */
const PanelHead=({title,note,live})=><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,
  marginBottom:12,paddingBottom:10,borderBottom:"1px solid "+BLUE_BASE}}>
  <div style={{fontSize:13,letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",
    color:"rgba(255,255,255,.55)"}}>{title}</div>
  <div style={{fontSize:11,color:"rgba(255,255,255,.55)",display:"inline-flex",alignItems:"center",gap:6,whiteSpace:"nowrap"}}>
    {live&&<span className="pt-pulse" style={{width:6,height:6,borderRadius:99,background:DARK_ACCENT}}/>}{note}</div></div>;
const PANEL_LAB={fontSize:11.5,color:"rgba(255,255,255,.62)",marginBottom:6};

const Chip=({children,on})=><span style={{display:"inline-flex",alignItems:"center",height:24,padding:"0 10px",
  borderRadius:"var(--radius-pill)",fontSize:11,whiteSpace:"nowrap",
  border:"1px solid "+(on?"var(--primary)":"var(--border-hairline)"),
  color:on?"var(--primary)":"var(--text-secondary)"}}>{children}</span>;

const Owned=({role,owner,children})=>{
  const on=Array.isArray(owner)?owner.includes(role):role===owner,dim=role&&!on;
  return <div className="pt-tile" style={{opacity:dim?.45:1,outline:on?"1px solid var(--primary)":"none",
    outlineOffset:2,borderRadius:"var(--radius-sm)",transition:"opacity 200ms var(--ease-standard),outline-color 200ms"}}>{children}</div>;
};

/* small metric strip used on the light boards */
const MiniStats=({items,cols=3})=><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:12}}>
  {items.map(([k,v,d],i)=><div key={k} className="pt-up" style={{animationDelay:(i*60)+"ms",minWidth:0}}>
    <div style={{fontSize:10.5,letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:"var(--text-muted)",
      lineHeight:1.25}}>{k}</div>
    <div style={{fontSize:17,fontWeight:500,letterSpacing:"-0.02em",marginTop:1,color:"var(--text-primary)"}}>{v}</div>
    {d&&<div style={{fontSize:10,color:BLUE}}>{d}</div>}</div>)}</div>;

/* dark-board equivalents */
const DarkStats=({items,cols=4,panel="#1B222A",rule="#232B32"})=>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(146px,1fr))",gap:8}}>
    {items.map(([k,v,d],i)=><div key={k} className="pt-up" style={{animationDelay:(i*70)+"ms",background:panel,
      borderRadius:8,padding:"8px 10px",border:"1px solid "+rule,minWidth:0}}>
      <div style={{fontSize:10.5,color:"rgba(255,255,255,.55)",lineHeight:1.2}}>{k}</div>
      <div style={{fontSize:17,fontWeight:500,marginTop:1,letterSpacing:"-0.02em"}}>{v}</div>
      <div style={{fontSize:10,color:i%2?BLUE:DARK_ACCENT}}>{d}</div></div>)}</div>;

const DarkRows=({rows,rule="#232B32",accentIf})=><div>{rows.map(([k,v],i)=>
  <div key={k} className="pt-up" style={{animationDelay:(180+i*60)+"ms",display:"flex",justifyContent:"space-between",
    gap:12,fontSize:11.5,padding:"4px 0",borderBottom:i<rows.length-1?"1px solid "+rule:"none"}}>
    <span style={{color:"rgba(255,255,255,.78)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{k}</span>
    <span style={{color:accentIf&&!accentIf(v)?BLUE:DARK_ACCENT,fontVariantNumeric:"tabular-nums"}}>{v}</span></div>)}</div>;

/* ============ 1. Banking & Finance, dense dark risk console ============ */
function BankingBoard({role,compact}){
  const panel={background:"#1B222A",borderRadius:10,padding:"10px 12px"};
  const lab=PANEL_LAB;
  return <div style={{background:"#141A20",color:"#EEF2F6",borderRadius:"var(--radius-lg)",padding:"14px 16px 16px",
    border:"1px solid #232B32"}}>
    <PanelHead title="Risk & Reporting Console" note="Live" live/>
    <div style={{marginBottom:8}}><DarkStats items={cut([["Capital Ratio","18.4%","+0.6"],["Fraud Recovered","34%","+9"],
      ["Close Cycle","3.1 d","-62%"],["Cost / Income","41.2%","-3.4"]],2,compact)}/></div>
    {!compact&&<div style={{marginBottom:10}}><DarkStats items={[["Net Interest Margin","5.8%","+0.4"],["Liquidity Coverage","132%","+11"],
      ["Reg Reports Automated","27","of 31"],["Model Coverage","89%","+6"]]}/></div>}
    <Owned role={role} owner={compact?["Analyst","Business Leader"]:"Analyst"}>
      <div style={{...panel,padding:"10px 12px 4px",marginBottom:10}}>
        <div style={{...PANEL_LAB,display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
          <span>Exposure Vs. Limit</span><Legend a="Exposure" b="Limit" aC={DARK_ACCENT}/></div>
        <Line s={[62,66,61,70,74,71,79,84,80,88,91,86]} cmp={[80,80,82,82,84,84,86,88,88,90,92,92]}
          color={DARK_ACCENT} fill={DARK_FILL} h={64}/></div></Owned>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
      <Owned role={role} owner={compact?["Finance","Developer"]:"Finance"}><div style={{...panel,color:"#EEF2F6"}}>
        <div style={lab}>Straight-Through Rate</div>
        <Gauge v={94} label="Payments Automated" color={DARK_ACCENT} track={BLUE_TRACK}/></div></Owned>
      <Owned role={role} owner={compact?["Support & Service","Data & IT Leader"]:"Support & Service"}><div style={panel}>
        <div style={lab}>Alert Queue</div>
        <DarkRows rows={cut([["AML review",12],["Limit breach",3],["Data quality",7],["Recon variance",5]],3,compact)}/>
      </div></Owned>
    </div>
    {!compact&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
      <Owned role={role} owner="Business Leader"><div style={{...panel,padding:"10px 12px 4px"}}>
        <div style={{...lab,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span>Provisioning Coverage</span><Legend aC={DARK_ACCENT}/></div>
        <Line s={[74,72,76,79,77,83,86,84,90]} cmp={[76,76,78,78,80,82,82,84,86]}
          color={DARK_ACCENT} fill={DARK_FILL} h={58}/></div></Owned>
      <Owned role={role} owner="Developer"><div style={panel}>
        <div style={lab}>Pipelines Under SLA</div>
        <DarkRows rows={[["Core banking","99.9%"],["Cards","99.4%"],["Treasury","97.8%"],["Branch feed","94.1%"]]}/>
      </div></Owned>
    </div>}</div>;
}

/* ============ 2. Healthcare, airy clinical board, ring-led ============ */
function HealthcareBoard({role,compact}){
  return <div style={{background:"var(--stone-0)",border:"1px solid var(--grid-line)",borderRadius:"var(--radius-lg)",padding:"16px 18px"}}>
    <PanelHead title="Care Operations Board" note="Consent-Tracked Data" live/>
    <div style={{marginBottom:18,paddingBottom:16,borderBottom:"1px solid var(--grid-line)"}}>
      <MiniStats items={cut([["Readmissions","8.4%","−18%"],["Consent Coverage","99.2%","Audited"],
        ["Avg Wait","24 min","−9 min"],["Theatre Utilisation","86%","+4"]],2,compact)}/></div>
    <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:22,alignItems:"center",marginBottom:18}}>
      <Owned role={role} owner="Data & IT Leader"><Ring v={77}>
        <div><div style={{fontSize:24,fontWeight:500,letterSpacing:"-0.02em"}}>77%</div>
          <div style={{fontSize:10,color:"var(--text-muted)"}}>Governed</div></div></Ring></Owned>
      <Owned role={role} owner="Business Leader"><div>
        <div style={PANEL_LAB}>Bed Utilisation By Site</div>
        <HBars rows={compact?[["Central",88],["Riverside",74],["Northgate",69]]:[["Central",88],["Riverside",74],["Northgate",69],["Eastfield",61],["Lakeview",57]]}/></div></Owned>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,paddingTop:16,borderTop:"1px solid var(--grid-line)"}}>
      <Owned role={role} owner="Analyst"><div>
        <div style={PANEL_LAB}>Trial Readout Lag <strong style={{color:"var(--primary)",fontWeight:500}}>−41%</strong></div>
        <Line s={[30,28,25,22,19,18,17]} cmp={[30,29,27,26,24,23,22]} cmpColor={BLUE_BASE} h={62}/></div></Owned>
      <Owned role={role} owner={compact?["Support & Service","Developer"]:"Support & Service"}><div>
        <div style={PANEL_LAB}>Pathways Instrumented</div>
        <div style={{fontSize:34,fontWeight:500,letterSpacing:"-0.03em",lineHeight:1,color:"var(--secondary-text)"}}>128</div>
        <div style={{display:"flex",gap:6,marginTop:12,flexWrap:"wrap"}}>
          {["9 Sites","4 Regions","2 Registries"].map(c=><Chip key={c}>{c}</Chip>)}</div></div></Owned>
    </div>
    {!compact&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,paddingTop:16,marginTop:16,borderTop:"1px solid var(--grid-line)"}}>
      <Owned role={role} owner="Finance"><div style={{display:"flex",gap:18,justifyContent:"space-around"}}>
        <Gauge v={91} label="Formulary Adherence"/>
        <Gauge v={68} label="Claims Auto-Coded"/></div></Owned>
      <Owned role={role} owner="Developer"><div>
        <div style={PANEL_LAB}>Data Quality By Domain</div>
        <HBars rows={[["Patient",96],["Pharmacy",89],["Imaging",81],["Referrals",73]]}/></div></Owned>
    </div>}</div>;
}

/* ============ 3. Government, hairline grid + heat map, monospaced ============ */
function GovernmentBoard({role,compact}){
  const cell={padding:"12px 14px"};
  return <div style={{background:"var(--bg-subtle)",border:"1px solid var(--grid-line)",
    borderRadius:"var(--radius-lg)",padding:"16px 18px"}}>
    <PanelHead title="Service Delivery Monitor" note="Quarterly Publication"/>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",border:"1px dotted var(--border-hairline)",overflow:"hidden",marginBottom:12}}>
      {cut([["Datasets Open","68%"],["Median Resolution","5.8 d"],["Agencies Aligned","23"],["Appeals Overturned","4.1%"]],2,compact).map(([k,v],i)=>
        <div key={k} className="pt-up" style={{...cell,animationDelay:(i*70)+"ms",minWidth:0,
          borderRight:"1px dotted var(--border-hairline)"}}>
          <div style={{fontSize:10.5,letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:"var(--text-muted)",
            lineHeight:1.25}}>{k}</div>
          <div style={{fontFamily:"'JetBrains Mono',ui-monospace,monospace",fontSize:20,marginTop:4}}>{v}</div></div>)}
    </div>
    {!compact&&<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",border:"1px dotted var(--border-hairline)",overflow:"hidden",marginBottom:16}}>
      {[["Digital Uptake","54%"],["Cost Per Case","KSh 812"],["Backlog","1,940"],["Satisfaction","4.2 / 5"]].map(([k,v],i)=>
        <div key={k} className="pt-up" style={{...cell,animationDelay:(280+i*70)+"ms",minWidth:0,
          borderRight:"1px dotted var(--border-hairline)"}}>
          <div style={{fontSize:10.5,letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:"var(--text-muted)",
            lineHeight:1.25}}>{k}</div>
          <div style={{fontFamily:"'JetBrains Mono',ui-monospace,monospace",fontSize:20,marginTop:4}}>{v}</div></div>)}
    </div>}
    <Owned role={role} owner={compact?["Support & Service","Data & IT Leader"]:"Support & Service"}><div style={{marginTop:16,marginBottom:18}}>
      <div style={PANEL_LAB}>Case Volume By Service And Quarter</div>
      <HeatGrid rows={compact?["Licensing","Benefits","Housing"]:["Licensing","Benefits","Housing","Permits","Registry"]} cols={["Q1","Q2","Q3","Q4"]}
        matrix={compact?[[42,58,64,71],[88,74,69,61],[36,44,52,49]]:[[42,58,64,71],[88,74,69,61],[36,44,52,49],[24,31,29,38],[51,47,55,62]]}/></div></Owned>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,paddingTop:16,borderTop:"1px solid var(--grid-line)"}}>
      <Owned role={role} owner={compact?["Finance","Analyst"]:"Finance"}><div>
        <div style={PANEL_LAB}>Budget Variance Accuracy</div>
        <Columns s={[62,71,80,88,94]} labels={["Q1","Q2","Q3","Q4","Q1"]} h={84}/></div></Owned>
      <Owned role={role} owner={compact?["Business Leader","Developer"]:"Business Leader"}><div>
        <div style={PANEL_LAB}>Transparency Commitments</div>
        <HBars rows={[["Published",68],["In Review",21],["Exempt",11]]}/></div></Owned>
    </div>
    {!compact&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,paddingTop:16,marginTop:16,borderTop:"1px solid var(--grid-line)"}}>
      <Owned role={role} owner="Analyst"><div>
        <div style={PANEL_LAB}>Online Service Uptake <strong style={{color:"var(--primary)",fontWeight:500}}>+22 pts</strong></div>
        <Line s={[32,34,38,37,43,47,49,54]} cmp={[33,35,37,39,41,44,46,48]} cmpColor={BLUE_BASE} h={62}/></div></Owned>
      <Owned role={role} owner="Developer"><div>
        <div style={PANEL_LAB}>Portal Availability</div>
        <div style={{display:"flex",gap:18,justifyContent:"space-around"}}>
          <Gauge v={99} label="Uptime"/><Gauge v={76} label="APIs Documented"/></div></div></Owned>
    </div>}</div>;
}

/* ============ 4. Manufacturing, plant wall, columns + gauges ============ */
function ManufacturingBoard({role,compact}){
  return <div style={{background:"var(--stone-0)",border:"1px solid var(--grid-line)",borderRadius:"var(--radius-sm)",padding:"16px 18px"}}>
    <PanelHead title="Plant Throughput Wall" note="Shift 2 · 3 Lines" live/>
    <div style={{marginBottom:18,paddingBottom:16,borderBottom:"1px solid var(--grid-line)"}}>
      <MiniStats items={cut([["Scrap Rate","1.8%","−0.6"],["On-Time-In-Full","93%","+5"],
        ["Energy Per Unit","2.4 kWh","−11%"],["Inventory Turns","7.9","+0.8"]],2,compact)}/></div>
    <Owned role={role} owner={compact?["Developer","Data & IT Leader"]:"Developer"}><div style={{marginBottom:18}}>
      <div style={{...PANEL_LAB,display:"flex",justifyContent:"space-between"}}>
        <span>First-Pass Yield By Quarter</span><span style={{color:"var(--primary)"}}>96%</span></div>
      <Columns s={[84,88,91,94,96]} target={92} labels={["Q1","Q2","Q3","Q4","Q1"]} h={compact?78:110}/></div></Owned>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:14,marginBottom:compact?0:18,
      paddingTop:16,borderTop:"1px solid var(--grid-line)"}}>
      <Owned role={role} owner="Analyst"><Gauge v={81} label="Forecast Accuracy"/></Owned>
      <Owned role={role} owner="Business Leader"><Gauge v={72} label="OEE"/></Owned>
      <Owned role={role} owner="Sales"><div style={{textAlign:"center"}}>
        <div style={{fontSize:28,fontWeight:500,letterSpacing:"-0.03em",color:"var(--secondary-text)"}}>{fmt(1240)}</div>
        <div style={{fontSize:11,color:"var(--text-muted)"}}>Suppliers Scored Weekly</div></div></Owned>
    </div>
    {!compact&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,paddingTop:16,borderTop:"1px solid var(--grid-line)"}}>
      <Owned role={role} owner="Marketing"><div>
        <div style={PANEL_LAB}>Unplanned Downtime Hours <strong style={{color:"var(--primary)",fontWeight:500}}>−28%</strong></div>
        <Line s={[46,44,39,34,31,27,24]} cmp={[44,42,40,37,34,31,28]} cmpColor={BLUE_BASE} h={62}/></div></Owned>
      <Owned role={role} owner="Data & IT Leader"><div>
        <div style={PANEL_LAB}>Defects Per Million By Line</div>
        <HBars rows={[["Line A",412],["Line B",286],["Line C",174]]}/></div></Owned>
    </div>}
    {!compact&&<Owned role={role} owner="Finance"><div style={{paddingTop:16,marginTop:16,borderTop:"1px solid var(--grid-line)"}}>
      <div style={PANEL_LAB}>Unit Cost Trend <strong style={{color:"var(--primary)",fontWeight:500}}>−9%</strong></div>
      <Line s={[100,99,96,97,93,91,90,88]} cmp={[100,98,97,95,94,93,91,90]} cmpColor={BLUE_BASE} h={58}/></div></Owned>}
  </div>;
}

/* ============ 5. Transport & Logistics, live network board ============ */
function TransportBoard({role,compact}){
  const lab=PANEL_LAB;
  return <div style={{background:"#141A20",color:"#EEF2F6",borderRadius:"var(--radius-lg)",padding:"14px 16px 16px",
    border:"1px solid #232B32"}}>
    <PanelHead title="Network Live Board" note="Updated 40s Ago" live/>
    <div style={{marginBottom:10}}><DarkStats panel="#1B222A" rule="#232B32"
      items={cut([["Deliveries / Day",fmt(8420),"+6%"],["Fuel Burn","31.4 L/100","−9%"],
        ["Empty Miles","12%","−4"],["Dwell Time","41 min","−12"]],2,compact)}/></div>
    <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:20,alignItems:"center",marginBottom:16}}>
      <Owned role={role} owner="Business Leader"><Ring v={88} size={84} color={DARK_ACCENT} track={BLUE_TRACK}>
        <div><div style={{fontSize:22,fontWeight:500}}>88%</div>
          <div style={{fontSize:10,color:"rgba(255,255,255,.55)"}}>On Time</div></div></Ring></Owned>
      <Owned role={role} owner={compact?["Finance","Analyst"]:"Finance"}><div>
        <div style={{...lab,marginBottom:6}}>Cost Per Kilometre <strong style={{color:DARK_ACCENT,fontWeight:500}}>−17%</strong></div>
        <Line s={[100,97,94,90,87,85,83]} cmp={[100,98,97,95,93,92,90]} color={DARK_ACCENT} fill={DARK_FILL} h={62}/></div></Owned>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,paddingTop:14,borderTop:"1px solid #232B32"}}>
      <Owned role={role} owner="Data & IT Leader"><div>
        <div style={lab}>Fleet Utilisation</div>
        <Columns s={[54,61,68,73,79]} labels={["Q1","Q2","Q3","Q4","Q1"]} h={66} color={DARK_ACCENT} soft={BLUE_FILL}/></div></Owned>
      <Owned role={role} owner="Developer"><div>
        <div style={lab}>Corridor Status</div>
        <DarkRows rows={cut([["North Ring","On Time"],["Coastal","+12 min"],["Inland Freight","On Time"],["Lake Route","+4 min"]],3,compact)}
          rule="#232B32" accentIf={v=>v!=="On Time"}/></div></Owned>
    </div>
    {!compact&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,paddingTop:14,marginTop:14,borderTop:"1px solid #232B32"}}>
      <Owned role={role} owner="Analyst"><div>
        <div style={lab}>Volume Vs. Forecast</div>
        <Line s={[64,68,66,72,78,75,82,86]} cmp={[66,68,70,72,74,76,78,80]} color={DARK_ACCENT} fill={DARK_FILL} h={60}/></div></Owned>
      <Owned role={role} owner="Support & Service"><div>
        <div style={lab}>Exceptions Today</div>
        <DarkRows rows={[["Failed delivery",18],["Damage claim",6],["Late pickup",23],["Address issue",11]]}
          rule="#232B32"/></div></Owned>
    </div>}</div>;
}

const SECTOR_BOARDS={
  "Banking & Finance":BankingBoard,
  "Healthcare & Pharmaceuticals":HealthcareBoard,
  "Government & Public Sector":GovernmentBoard,
  "Manufacturing & Consumer Goods":ManufacturingBoard,
  "Transport & Logistics":TransportBoard};

/* Every board renders on a dark surface (house style). Scoped token overrides mean the shared
   primitives inherit dark-correct tracks, rules and text without prop plumbing. The board accent is the
   #4EBAFC tint of brand blue, base #1B87C9 measures below the 3:1 non-text floor on these panels. */
const DARK_BOARD_VARS={
  "--chart-bar":"#4EBAFC","--chart-bar-soft":"rgba(78,186,252,.30)","--chart-bar-dim":"rgba(255,255,255,.16)",
  "--chart-track":"rgba(255,255,255,.14)","--chart-line":"#4EBAFC","--chart-fill":"rgba(78,186,252,.16)",
  "--text-primary":"#E7EDF3","--text-secondary":"rgba(255,255,255,.72)","--text-muted":"rgba(255,255,255,.55)",
  "--grid-line":"#242C34","--border-hairline":"#2C353D","--primary":"#4EBAFC","--secondary-text":"#8ED2FF",
  "--stone-0":"#161D24","--stone-400":"rgba(255,255,255,.28)","--bg-subtle":"#12181E","--bg-muted":"#1B222A"};

function SectorDashboard({sector,role,compact}){
  const Board=SECTOR_BOARDS[sector.name];
  /* keyed on the sector so every switch replays the entry animation */
  return <div key={sector.name} className="pt-board" style={{...DARK_BOARD_VARS,color:"#E7EDF3"}}>
    <Board role={role} compact={compact}/></div>;
}
Object.assign(window,{SectorDashboard,SECTOR_BOARDS});
