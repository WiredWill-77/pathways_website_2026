/* [02] Solutions, one source of truth for sector + role selection.
   Industry dashboards live in dashboards.jsx. All figures are illustrative placeholders. */
const SECTORS=[
  {name:"Banking & Finance",blurb:"Risk Models, Regulatory Reporting And Customer Analytics",
   ttv:"9 weeks",coverage:"92%",
   roles:{"Business Leader":78,"Data & IT Leader":92,"Analyst":88,"Developer":64,"Marketing":47,"Finance":84,"Sales":56,"Support & Service":41}},
  {name:"Healthcare & Pharmaceuticals",blurb:"Clinical And Commercial Data Under Strict Governance",
   ttv:"12 weeks",coverage:"77%",
   roles:{"Business Leader":71,"Data & IT Leader":86,"Analyst":74,"Developer":52,"Marketing":38,"Finance":61,"Sales":44,"Support & Service":66}},
  {name:"Government & Public Sector",blurb:"Service Delivery Data, Transparency And Open Reporting",
   ttv:"14 weeks",coverage:"68%",
   roles:{"Business Leader":64,"Data & IT Leader":79,"Analyst":81,"Developer":48,"Marketing":29,"Finance":72,"Sales":21,"Support & Service":58}},
  {name:"Manufacturing & Consumer Goods",blurb:"Demand Planning, Quality And Supply-Chain Visibility",
   ttv:"8 weeks",coverage:"81%",
   roles:{"Business Leader":69,"Data & IT Leader":74,"Analyst":83,"Developer":59,"Marketing":63,"Finance":70,"Sales":77,"Support & Service":46}},
  {name:"Transport & Logistics",blurb:"Fleet, Route And Network Performance In Near Real Time",
   ttv:"7 weeks",coverage:"88%",
   roles:{"Business Leader":73,"Data & IT Leader":85,"Analyst":79,"Developer":67,"Marketing":41,"Finance":58,"Sales":52,"Support & Service":74}}];

const ROLE_ORDER=["Business Leader","Data & IT Leader","Analyst","Developer"];

function SectorPanel(){
  const [i,setI]=React.useState(0);
  const [role,setRole]=React.useState(null);
  const sector=SECTORS[i];
  return <div className="pt-solutions" style={{marginTop:48,display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1.25fr)",gap:40,alignItems:"start"}}>
    <div style={{border:"1px solid var(--grid-line)",background:"var(--stone-0)"}}>
      <div style={{fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",
        color:"var(--blue-400)",fontWeight:500,padding:"16px 28px 0"}}>By Industry</div>
      {SECTORS.map((s,n)=>{
        const on=n===i;
        return <button key={s.name} onClick={()=>{setI(n);setRole(null);}} style={{width:"100%",display:"flex",
          alignItems:"center",justifyContent:"space-between",gap:20,padding:"20px 28px",textAlign:"left",cursor:"pointer",
          border:"none",borderTop:n?"1px solid var(--grid-line)":"none",marginTop:n?0:14,font:"inherit",
          background:on?"var(--bg-muted)":"transparent",transition:"background var(--duration-base) var(--ease-standard)"}}>
          <span style={{display:"flex",gap:12,alignItems:"flex-start",minWidth:0}}>
            <span style={{width:7,height:7,borderRadius:99,marginTop:8,flex:"0 0 auto",
              background:on?"var(--primary)":"var(--stone-400)"}}/>
            <span style={{minWidth:0}}><span style={{display:"block",fontSize:16.5,fontWeight:"var(--weight-medium)",
              letterSpacing:"-0.01em",color:"var(--text-primary)"}}>{s.name}</span>
              <span style={{display:"block",fontSize:"var(--text-sm)",color:"var(--text-secondary)",marginTop:5}}>{s.blurb}</span></span></span>
          <span style={{color:"var(--secondary-text)",display:"inline-flex",opacity:on?1:.5,flex:"0 0 auto"}}>
            <i data-lucide="arrow-right" style={{width:18,height:18}}></i></span>
        </button>;})}
    </div>
    <div style={{minWidth:0}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:16,marginBottom:16}}>
        <div style={{fontSize:"var(--text-eyebrow)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",
          color:"var(--blue-400)",fontWeight:500}}>By Role</div>
        <div style={{fontSize:"var(--text-xs)",color:"var(--text-muted)"}}>Illustrative Dashboard</div></div>
      <window.SectorDashboard sector={sector} role={role} compact/>
      <div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:20}}>
        {ROLE_ORDER.map(r=>{
          const on=role===r;
          return <button key={r} onClick={()=>setRole(on?null:r)} style={{display:"inline-flex",alignItems:"center",
            height:36,padding:"0 16px",borderRadius:"var(--radius-pill)",cursor:"pointer",fontFamily:"inherit",
            fontSize:14,fontWeight:on?"var(--weight-medium)":400,
            border:"1px solid "+(on?"var(--primary)":"var(--border-hairline)"),
            background:on?"var(--primary)":"var(--stone-0)",color:on?"var(--on-primary)":"var(--text-primary)",
            transition:"background var(--duration-base) var(--ease-standard),color var(--duration-base) var(--ease-standard)"}}>{r}</button>;})}
      </div>
      <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",marginTop:20,maxWidth:520}}>
        {role?`${role} teams in ${sector.name} sit at ${sector.roles[role]}% adoption, the highlighted panel is the one they own.`
             :"Pick a role to see which panel that team owns. Every engagement starts with the people who use the output."}</p>
      <div style={{display:"flex",gap:24,marginTop:16,paddingTop:14,borderTop:"1px solid var(--grid-line)",
        fontSize:"var(--text-xs)",color:"var(--text-secondary)",flexWrap:"wrap"}}>
        <span className="pt-stat">Median Time To Value <strong style={{color:"var(--secondary-text)",fontWeight:"var(--weight-medium)"}}>{sector.ttv}</strong></span>
        <span className="pt-stat">Data Coverage <strong style={{color:"var(--secondary-text)",fontWeight:"var(--weight-medium)"}}>{sector.coverage}</strong></span>
      </div>
    </div>
  </div>;
}
Object.assign(window,{SectorPanel,SECTORS,ROLE_ORDER});
