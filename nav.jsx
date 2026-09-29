

const navCaret=<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>;
const navArrow=<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;

const NAV_MENUS={
  Services:{
    columns:2,
    groups:[{label:"Services",links:[
      {icon:"chart-spline",title:"Data Science & AI",href:"services-data-science.html",description:"Forecasting, decision models and generative AI in production"},
      {icon:"layout-grid",title:"Analytics & BI",href:"services-analytics-bi.html",description:"Warehouses, pipelines and dashboards people actually use"},
      {icon:"code-xml",title:"Apps & Software Development",href:"services-apps-software-development.html",description:"Custom web, mobile and internal platforms"},
      {icon:"graduation-cap",title:"Data Skills Training",href:"services-data-skills-training.html",description:"Instructor-led programmes for analysts and leaders"},
      {icon:"users",title:"Staff Augmentation",href:"services-staff-augmentation.html",description:"Vetted data and engineering talent, embedded in your team"},
      {icon:"compass",title:"Digital Transformation Advisory",href:"services-digital-transformation-advisory.html",description:"Operating models, roadmaps and delivery governance"}]}],
    featured:[{kicker:"Case Study",title:"A Reporting Layer Built From The Navision Core",img:"uploads/case-port-sacco-hero.jpg",href:"case-study-port-sacco.html"},
      {kicker:"Guide",title:"Choosing Your First Data Platform",img:"https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=75&auto=format&fit=crop",href:"services-digital-transformation-advisory.html"}],
    footer:"See All Services",footerHref:"Services.html"},
  Solutions:{
    columns:2,wide:true,featuredCols:1,
    groups:[
      {label:"By Industry",links:[
        {icon:"landmark",title:"Banking & Finance",href:"solutions-banking-finance.html",description:"Risk models, regulatory reporting and customer analytics"},
        {icon:"heart-pulse",title:"Healthcare & Pharmaceuticals",href:"solutions-healthcare-pharmaceuticals.html",description:"Clinical and commercial data under strict governance"},
        {icon:"building-2",title:"Government & Public Sector",href:"solutions-government-public-sector.html",description:"Service delivery data, transparency and open reporting"},
        {icon:"factory",title:"Manufacturing & Consumer Goods",href:"solutions-manufacturing-consumer-goods.html",description:"Demand planning, quality and supply-chain visibility"},
        {icon:"truck",title:"Transport & Logistics",href:"solutions-transport-logistics.html",description:"Fleet, route and network performance in near real time"}]},
      {label:"By Role",col:"2",links:[
        {icon:"briefcase",title:"Business Leader",href:"solutions-role-business-leader.html",description:"One version of the numbers before the board meets"},
        {icon:"server",title:"Data & IT Leader",href:"solutions-role-data-it-leader.html",description:"A platform in your tenancy you can hand over"},
        {icon:"chart-spline",title:"Analyst",href:"solutions-role-analyst.html",description:"Certified measures instead of weekly reconciliation"},
        {icon:"code-xml",title:"Developer",href:"solutions-role-developer.html",description:"Documented APIs and embedded analytics"}]},
      {label:"Case Studies",col:"2",links:[
        {icon:"folder-check",title:"All Case Studies",href:"Case Studies.html",description:"Client work across every sector, linked to the full write-up"}]}],
    featured:[{kicker:"Blog",title:"Pathways Technologies + GIZ AI-Powered Credit Scoring Solution Launch",img:"uploads/blog-giz-credit-scoring-hero.jpg",href:"blog-giz-credit-scoring-launch.html"},
      {kicker:"Case Study",title:"Kenya Red Cross Society: AI & Data Analytics",img:"uploads/case-red-cross-hero.jpg",href:"case-study-red-cross-kenya.html"}],
    footer:"Explore All Solutions",footerHref:"Solutions.html"},
  Products:{
    columns:1,
    groups:[{label:"Products",links:[
      {icon:"rows-3",title:"Insight Grid",description:"Governed analytics workspace for every team"},
      {icon:"badge-percent",title:"P-Score",description:"Performance scoring and benchmarking for portfolios"},
      {icon:"receipt-text",title:"eVoucher",description:"Issue, redeem and reconcile digital vouchers at scale"}]}],
    featured:[{kicker:"Product",title:"Insight Grid",img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=75&auto=format&fit=crop"},
      {kicker:"Product",title:"P-Score",img:"uploads/insight-grid-menu.jpg"}],
    footer:"Compare Products"},
  Resources:{
    columns:2,
    groups:[{label:"Resources",links:[
      {icon:"presentation",title:"Webinars",href:"resources-webinars.html",description:"Live sessions with our practice leads"},
      {icon:"file-text",title:"Whitepapers",href:"resources-whitepapers.html",description:"Research and reference architectures"},
      {icon:"newspaper",title:"Articles",href:"resources-articles.html",description:"Short, practical pieces on data and delivery"},
      {icon:"graduation-cap",title:"Learn",href:"resources-learn.html",description:"Courses, labs and certification paths"},
      {icon:"pen-line",title:"Blog",href:"Insights.html",description:"Field notes from delivery teams"},
      {icon:"calendar-days",title:"Events",href:"resources-events.html",description:"Where to meet us next"}]}],
    featured:[{kicker:"Webinar",title:"Governing AI In Regulated Industries",img:"uploads/webinars-thumb-640.webp",href:"Resources.html"},
      {kicker:"Whitepaper",title:"The 2026 Data Skills Gap",img:"uploads/whitepapers-hero.webp",href:"Resources.html"}],
    footer:"Browse The Resource Library",footerHref:"Resources.html"}
};

const NAV_LINKS=[{label:"About Us",href:"About Us.html"},{label:"Services",hasMenu:true,hubHref:"Services.html"},{label:"Solutions",hasMenu:true,hubHref:"Solutions.html"},
  {label:"Products",hasMenu:true},{label:"Resources",hasMenu:true,hubHref:"Resources.html"},{label:"Partnerships",href:"Partnerships.html"}];

/* Which top-level nav section owns the page currently being viewed. Matched on the file name so
   every child page (services-*, solutions-*, resources-*) lights up its parent item. */
function currentPageFile(){
  try{return decodeURIComponent((location.pathname.split("/").pop()||"").toLowerCase())}catch(e){return ""}
}
function activeNavLabel(){
  const f=currentPageFile();
  if(!f)return null;
  if(f==="about us.html")return "About Us";
  if(f==="partnerships.html")return "Partnerships";
  if(f==="services.html"||f.startsWith("services-"))return "Services";
  if(f==="solutions.html"||f.startsWith("solutions-")||f.startsWith("solution-"))return "Solutions";
  if(f==="resources.html"||f.startsWith("resources-"))return "Resources";
  return null;
}
function isActiveHref(href){
  if(!href)return false;
  return href.toLowerCase()===currentPageFile();
}

function NavMenuLink({l}){
  const [h,setH]=React.useState(false);
  const cur=isActiveHref(l.href);
  return <a href={l.href||"#"} aria-current={cur?"page":undefined} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{textDecoration:"none",color:"inherit",display:"grid",
      gridTemplateColumns:l.icon?"34px minmax(0,1fr)":"minmax(0,1fr)",gap:12,alignItems:"start"}}>
    {l.icon&&<span style={{width:34,height:34,borderRadius:"var(--radius-sm)",display:"inline-flex",
      alignItems:"center",justifyContent:"center",flex:"0 0 auto",marginTop:1,
      border:"1px solid "+(h?"var(--orange-500)":"var(--border-hairline)"),
      background:h?"var(--stone-50)":"var(--stone-50)",
      color:"var(--secondary-text)",transition:"background var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)"}}>
      <i data-lucide={l.icon} style={{width:17,height:17}}></i></span>}
    <span style={{minWidth:0}}>
      <span style={{display:"block",fontSize:16.5,fontWeight:"var(--weight-medium)",letterSpacing:"-0.01em",
        marginBottom:l.description?5:0,color:(h||cur)?"#ec8425":"inherit",
        transition:"color var(--duration-fast) var(--ease-standard)"}}>{l.title}</span>
      {l.description&&<span style={{display:"block",fontSize:"var(--text-sm)",color:"var(--text-secondary)"}}>{l.description}</span>}
    </span>
  </a>;
}

function NavRoleChip({l}){
  const [h,setH]=React.useState(false);
  return <a href={l.href||"#"} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:"inline-flex",alignItems:"center",justifyContent:"center",height:36,padding:"0 12px",
      borderRadius:"var(--radius-pill)",minWidth:0,
      fontSize:13.5,textDecoration:"none",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",
      border:"1px solid "+(h?"var(--secondary-border)":"var(--border-hairline)"),
      background:h?"var(--secondary-soft)":"var(--stone-0)",
      color:h?"var(--secondary-text)":"var(--text-primary)",
      transition:"background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)"}}>{l.title}</a>;
}

function NavFeaturedRow({c}){
  const [h,setH]=React.useState(false);
  return <a href={c.href||"#"} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:"grid",gridTemplateColumns:"84px minmax(0,1fr)",gap:14,alignItems:"center",textDecoration:"none",color:"inherit",
      padding:10,borderRadius:"var(--radius-sm)",background:h?"var(--bg-subtle)":"transparent",
      transition:"background var(--duration-fast) var(--ease-standard)"}}>
    <div style={{height:60,borderRadius:"var(--radius-sm)",border:"1px solid var(--grid-line)",overflow:"hidden",
      background:"var(--bg-blue-soft)"}}>
      {c.img&&<img src={c.img} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>}</div>
    <div><div style={{fontSize:"var(--text-xs)",color:"var(--text-muted)",marginBottom:3}}>{c.kicker}</div>
      <div style={{fontSize:14.5,fontWeight:"var(--weight-medium)",lineHeight:1.35}}>{c.title}</div></div>
  </a>;
}

function NavFeaturedCard({c}){
  return <a href={c.href||"#"} style={{textDecoration:"none",color:"inherit"}}>
    <div style={{height:150,borderRadius:"var(--radius-sm)",border:"1px solid var(--grid-line)",overflow:"hidden",
      background:"var(--bg-blue-soft)",backgroundImage:"var(--dot-grid)",backgroundSize:"var(--dot-grid-size)"}}>
      {c.img&&<img src={c.img} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>}</div>
    <div style={{fontSize:"var(--text-xs)",color:"var(--text-muted)",margin:"14px 0 4px"}}>{c.kicker}</div>
    <div style={{fontSize:16,fontWeight:"var(--weight-medium)"}}>{c.title}</div>
  </a>;
}

function NavMenuPanel({menu}){
  const m=NAV_MENUS[menu];
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();},[menu]);
  return <div className="pt-megamenu" style={{position:"absolute",top:"100%",left:0,right:0,background:"var(--stone-50)",borderBottom:"1px solid var(--grid-line)",
    boxShadow:"var(--shadow-raised)",maxHeight:"calc(100vh - 120px)",overflowY:"auto",zIndex:19}}>
    <div style={{maxWidth:1216,margin:"0 auto",padding:"32px 48px 40px",display:"grid",
      gridTemplateColumns:m.featuredBelow?"1fr":(m.wide?"1.85fr 1px 1fr":"1fr 1px 1fr"),gap:44}}>
      <div style={{display:"grid",gridTemplateColumns:m.featuredBelow?"minmax(0,1fr) minmax(0,1.35fr)":(m.stacked?"1fr":(m.groups.length>1?(m.wide?"1.05fr 1fr":"1fr 1fr"):"1fr")),
        gap:m.stacked?28:44,alignContent:"start",alignItems:"start"}}>
        {(m.groups.length>1&&!m.featuredBelow&&!m.stacked
          ?[1,2].map(colN=>m.groups.filter(g=>(g.col?Number(g.col):1)===colN))
          :[m.groups]).map((col,ci)=><div key={ci} style={{display:"grid",gap:40}}>
          {col.map(g=><div key={g.label} style={g.divider?{paddingTop:24,borderTop:"1px solid var(--grid-line)"}:null}>
          <div style={{fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",
            color:"var(--text-secondary)",marginBottom:g.note?6:20}}>{g.label}</div>
          {g.note&&<div style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",marginBottom:16}}>{g.note}</div>}
          {g.chips
            ? <div style={{display:"grid",gridTemplateColumns:`repeat(${g.chipCols||2},minmax(0,1fr))`,gap:8}}>
                {g.links.map(l=><NavRoleChip key={l.title} l={l}/>)}</div>
            : <div style={{display:"grid",...(g.cols>1
                ? {gridTemplateColumns:"repeat(2,minmax(0,1fr))",gridTemplateRows:`repeat(${Math.ceil(g.links.length/2)},auto)`,gridAutoFlow:"column"}
                : {gridTemplateColumns:(m.columns===2&&m.groups.length===1)?"repeat(2,minmax(0,1fr))":"1fr"}),
                gap:g.links[0].description?"22px 36px":"18px 36px"}}>
                {g.links.map(l=><NavMenuLink key={l.title} l={l}/>)}</div>}
        </div>)}
        </div>)}
        <a href={m.footerHref||"#"} style={{gridColumn:"1/-1",marginTop:8,height:52,borderRadius:"var(--radius-md)",
          background:"var(--bg-muted)",display:"flex",alignItems:"center",justifyContent:"space-between",
          padding:"0 20px",fontSize:15,color:"var(--text-primary)",textDecoration:"none"}}>
          {m.footer}{navArrow}</a>
      </div>
      <div style={{background:"var(--grid-line)",display:m.featuredBelow?"none":"block"}}/>
      <div style={m.featuredBelow?{paddingTop:28,borderTop:"1px solid var(--grid-line)"}:null}>
        <div style={{fontSize:"var(--text-xs)",color:"var(--text-secondary)",marginBottom:20}}>Featured</div>
        <div style={{display:"grid",gridTemplateColumns:m.featuredBelow?"repeat(3,minmax(0,1fr))":(m.featuredStack||m.featuredCols===1?"1fr":(m.featured.length>1?"1fr 1fr":"1fr")),gap:m.featuredStack?6:24,alignItems:"stretch"}}>
          {m.featured.map(c=>m.featuredStack?<NavFeaturedRow key={c.title} c={c}/>:<NavFeaturedCard key={c.title} c={c}/>)}
        </div>
      </div>
    </div>
  </div>;
}

function MobileGroup({it,open,onToggle,active}){
  const m=NAV_MENUS[it.label];
  React.useEffect(()=>{if(open&&window.lucide)lucide.createIcons();},[open]);
  return <div style={{borderBottom:"1px solid var(--grid-line)"}}>
    <button onClick={onToggle} aria-expanded={open} style={{width:"100%",display:"flex",alignItems:"center",
      justifyContent:"space-between",gap:12,padding:"14px 4px",background:"none",border:"none",cursor:"pointer",
      font:"inherit",fontSize:16,fontWeight:"var(--weight-medium)",color:active?"var(--secondary-text)":"var(--text-primary)",textAlign:"left"}}>
      {it.hubHref?<a href={it.hubHref} style={{color:"inherit",textDecoration:"none"}}>{it.label}</a>:it.label}
      <span style={{color:"var(--text-muted)",display:"inline-flex",transform:open?"rotate(180deg)":"none",
        transition:"transform var(--duration-base) var(--ease-standard)"}}>{navCaret}</span></button>
    {open&&<div style={{paddingBottom:14,display:"grid",gap:14}}>
      {m.groups.map(g=><div key={g.label}>
        <div style={{fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",
          color:"var(--text-secondary)",marginBottom:10}}>{g.label}</div>
        <div style={{display:g.chips?"flex":"grid",flexWrap:"wrap",gap:g.chips?8:12}}>
          {g.links.map(l=>g.chips
            ? <NavRoleChip key={l.title} l={l}/>
            : <a key={l.title} href={l.href||"#"} aria-current={isActiveHref(l.href)?"page":undefined} style={{display:"flex",alignItems:"center",gap:10,minHeight:44,
                textDecoration:"none",color:isActiveHref(l.href)?"var(--secondary-text)":"var(--text-primary)",fontSize:15}}>
                {l.icon&&<span style={{color:"var(--secondary-text)",display:"inline-flex"}}>
                  <i data-lucide={l.icon} style={{width:16,height:16}}></i></span>}{l.title}</a>)}
        </div></div>)}
    </div>}
  </div>;
}

function Header(){
  const {PtLogo,ThemeToggle,PtButton}=window;
  const [menu,setMenu]=React.useState(null);
  const active=React.useMemo(activeNavLabel,[]);
  const [mobile,setMobile]=React.useState(false);
  const [open,setOpen]=React.useState(null);
  /* Transparent and floating over the dark opening band; the bar takes its surface back once the
     page turns light, so it is never unreadable over white content. The band is looked up on every
     sync rather than once at mount — the hero can commit after the header does. */
  const [onDark,setOnDark]=React.useState(false);
  const [scrolled,setScrolled]=React.useState(false);
  const barRef=React.useRef(null);
  const useSyncEffect=React.useLayoutEffect||React.useEffect;
  useSyncEffect(()=>{
    const sync=()=>{
      const band=document.querySelector(".pt-darkband")||document.querySelector(".pt-herodark")||document.querySelector(".pt-hero");
      const over=!!band&&band.getBoundingClientRect().bottom>76;
      setOnDark(over);
      setScrolled((scrollY||document.documentElement.scrollTop||0)>4);
      const h=barRef.current?Math.round(barRef.current.getBoundingClientRect().height):0;
      if(h)document.documentElement.style.setProperty("--pt-headerh",h+"px");
      document.body.classList.toggle("pt-navover",over);
    };
    sync();
    const ts=[0,200,800,1600].map(d=>setTimeout(sync,d));
    addEventListener("scroll",sync,{passive:true});addEventListener("resize",sync);
    return ()=>{ts.forEach(clearTimeout);removeEventListener("scroll",sync);removeEventListener("resize",sync);
      document.body.classList.remove("pt-navover")};
  },[]);
  return <div className="pt-header-wrap" onMouseLeave={()=>setMenu(null)} style={{position:"sticky",top:0,zIndex:20}}>
    <header ref={barRef} className={"pt-header"+(onDark&&!menu?" is-ondark":"")+(scrolled?" is-scrolled":"")}
      style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:24,
      background:(onDark&&!menu)?"transparent":"var(--stone-0)",
      borderBottom:"1px solid "+((onDark&&!menu)?"transparent":"var(--grid-line)"),
      /* No transition on background/border: this flips once at load, and a transition would pin the
         opaque start value whenever the clock is frozen, painting a bar across the photograph. */}}>
      <div className="pt-header-inner" style={{maxWidth:1216,width:"100%",margin:"0 auto",padding:"32px 48px",display:"flex",
        alignItems:"center",justifyContent:"space-between",gap:24}}>
        <div className="pt-header-left" style={{display:"flex",alignItems:"center",gap:26,minWidth:0,flex:"1 1 auto"}}>
          <a href="Pathways Landing Page.html" aria-label="Pathways Technologies home" style={{display:"inline-flex",flex:"0 0 auto"}}><PtLogo height={44}/></a>
          <nav className="pt-nav" style={{display:"flex",alignItems:"center",justifyContent:"center",flex:"1 1 auto",gap:2,minWidth:0,flexWrap:"nowrap",whiteSpace:"nowrap"}}>
            {NAV_LINKS.map(it=>{
              const on=menu===it.label;
              const cur=active===it.label;
              if(!it.hasMenu)return <a key={it.label} className={"pt-navitem"+(cur?" is-active":"")} href={it.href}
                aria-current={cur?"page":undefined} onMouseEnter={()=>setMenu(null)}
                style={{display:"inline-flex",alignItems:"center",height:36,padding:"0 13px",flex:"0 0 auto",
                  whiteSpace:"nowrap",borderRadius:"var(--radius-pill)",textDecoration:"none",
                  color:"var(--text-primary)",fontSize:15,fontWeight:"var(--weight-medium)"}}>{it.label}</a>;
              const Tag=it.hubHref?"a":"button";
              return <Tag key={it.label} className={"pt-navitem"+(cur?" is-active":"")} onMouseEnter={()=>setMenu(it.label)}
                aria-current={cur?"page":undefined} aria-expanded={on} aria-haspopup="true" href={it.hubHref}
                onClick={it.hubHref?undefined:()=>setMenu(on?null:it.label)}
                style={{display:"inline-flex",alignItems:"center",gap:6,height:36,padding:"0 13px",flex:"0 0 auto",whiteSpace:"nowrap",
                  border:"none",borderRadius:"var(--radius-pill)",cursor:"pointer",
                  background:on?"var(--stone-200)":"transparent",color:"var(--text-primary)",
                  fontFamily:"var(--font-sans)",fontSize:15,fontWeight:"var(--weight-medium)",textDecoration:"none",
                  transition:"var(--transition-base)"}}>
                {it.label}{it.hasMenu&&<span style={{color:"var(--text-muted)",display:"inline-flex",
                  transform:on?"rotate(180deg)":"none",
                  transition:"transform var(--duration-base) var(--ease-standard)"}}>{navCaret}</span>}
              </Tag>;})}
          </nav>
        </div>
        <div className="pt-header-right" style={{display:"flex",alignItems:"center",gap:10,flex:"0 0 auto"}}>
          <button className="pt-menubtn" onClick={()=>setMobile(!mobile)} aria-label="Open Menu"
            style={{display:"none",width:38,height:38,alignItems:"center",justifyContent:"center",cursor:"pointer",
              borderRadius:"var(--radius-pill)",border:"1px solid var(--border-hairline)",background:"var(--stone-0)",
              color:"var(--text-primary)"}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
          <ThemeToggle/>
          <PtButton tone="primary" size="md" onClick={()=>{location.href="Contact Us.html"}}>Book A Demo</PtButton>
        </div>
      </div>
    </header>
    {menu&&<NavMenuPanel menu={menu}/>}
    {mobile&&<div className="pt-mobile-menu" style={{background:"var(--stone-0)",borderBottom:"1px solid var(--grid-line)",
      padding:"12px 24px 20px",display:"flex",flexDirection:"column",gap:2,boxShadow:"var(--shadow-raised)",
      maxHeight:"calc(100vh - 76px)",overflowY:"auto"}}>
      {NAV_LINKS.map(it=>it.hasMenu
        ? <MobileGroup key={it.label} it={it} active={active===it.label} open={open===it.label} onToggle={()=>setOpen(open===it.label?null:it.label)}/>
        : <a key={it.label} href={it.href} onClick={()=>setMobile(false)} aria-current={active===it.label?"page":undefined}
            style={{padding:"14px 4px",fontSize:16,fontWeight:"var(--weight-medium)",color:active===it.label?"var(--secondary-text)":"var(--text-primary)",
              textDecoration:"none",borderBottom:"1px solid var(--grid-line)"}}>{it.label}</a>)}
      <div style={{display:"flex",gap:10,marginTop:16}}>
        <PtButton tone="primary" size="md" onClick={()=>{location.href="Contact Us.html"}}>Book A Demo</PtButton></div>
    </div>}
  </div>;
}

Object.assign(window,{Header});
