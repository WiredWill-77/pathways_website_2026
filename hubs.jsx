/* Hub pages for the Services, Solutions and Resources menus. window.PT_HUB names which one renders.
   Copy and figures are illustrative, confirm before publishing. */
const IMG=(id,w=1200)=>`https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

const HUB_SERVICES=[
  {icon:"chart-spline",name:"Data Science & AI",href:"services-data-science.html",
   blurb:"Forecasting, decision models and generative AI, built with your teams and monitored in production.",
   points:["Model lifecycle from framing to drift alerts","LLM and RAG applications","48 models live"]},
  {icon:"layout-grid",name:"Analytics & BI",href:"services-analytics-bi.html",
   blurb:"Warehouses, pipelines, semantic layers and dashboards with lineage from figure back to source.",
   points:["Azure, Fabric or BigQuery","Certified measures once, used everywhere","41 manual reports retired"]},
  {icon:"code-xml",name:"Apps & Software Development",href:"services-apps-software-development.html",
   blurb:"Custom web, mobile and internal platforms delivered in fortnightly increments with your users in the room.",
   points:["Shaped backlog in two weeks","WCAG AA and infra as code","Handover with runbooks"]},
  {icon:"graduation-cap",name:"Data Skills Training",href:"services-data-skills-training.html",
   blurb:"Instructor-led programmes for analysts, leaders and graduates, taught on your own data.",
   points:["Five stackable modules","Cohorts of 6 to 24","Assessed on output"]},
  {icon:"users",name:"Staff Augmentation",href:"services-staff-augmentation.html",
   blurb:"Vetted engineers, analysts and scientists embedded in your existing squads within weeks.",
   points:["Start in 2 to 4 weeks","Your repo, your standards","Two-week replacement guarantee"]},
  {icon:"compass",name:"Digital Transformation Advisory",href:"services-digital-transformation-advisory.html",
   blurb:"Operating models, target architecture and delivery governance, sequenced so value lands early.",
   points:["Two-week assessment","Four-quarter costed roadmap","Use cases scored by value"]}];

const HUB_HOW=[["Step 01","Discover","Two weeks with your teams: data estate, definitions and the use cases worth funding."],
  ["Step 02","Prove","One use case into production, in your tenancy, measured against the metric you chose."],
  ["Step 03","Scale","The pattern extended across functions, with governance and cost review in place."],
  ["Step 04","Hand Over","Runbooks, infrastructure as code and your engineers running it on a fixed date."]];

const HUB_INDUSTRIES=[
  {name:"Banking & Finance",href:"solutions-banking-finance.html",img:IMG("1560179707-f14e90ef3623"),
   line:"Risk models, regulatory reporting and customer analytics on one governed layer.",stat:["Close Cycle","−62%"]},
  {name:"Healthcare & Pharmaceuticals",href:"solutions-healthcare-pharmaceuticals.html",img:"uploads/lobby-sign-english-2800px.png",
   line:"Clinical and commercial data made usable without loosening a single control.",stat:["Records Governed","77%"]},
  {name:"Government & Public Sector",href:"solutions-government-public-sector.html",img:"uploads/Kenya Government.avif",
   line:"Service delivery data published with provenance, hosted in Kenya.",stat:["Agencies Aligned","23"]},
  {name:"Manufacturing & Consumer Goods",href:"solutions-manufacturing-consumer-goods.html",img:"uploads/manufacturing.jpg",
   line:"Demand, quality and supply visible while there is still time to act.",stat:["Forecast Accuracy","81%"]},
  {name:"Transport & Logistics",href:"solutions-transport-logistics.html",img:"uploads/fleet-management.webp",
   line:"Fleet, corridor and cost performance consolidated into one live picture.",stat:["On-Time Arrival","88%"]}];

const HUB_ROLES=[["Business Leader","solutions-role-business-leader.html","briefcase","One version of the numbers before the board meeting"],
  ["Data & IT Leader","solutions-role-data-it-leader.html","server","A platform you can hand over and still sleep at night"],
  ["Analyst","solutions-role-analyst.html","chart-spline","Stop rebuilding the same extract every month"],
  ["Developer","solutions-role-developer.html","code-xml","APIs and contracts your product can consume"]];

const HUB_RESOURCES=[["presentation","Webinars","Live sessions with our practice leads, recorded and indexed.","18 sessions"],
  ["file-text","Whitepapers","Research and reference architectures you can hand to your architects.","12 papers"],
  ["newspaper","Articles","Short, practical pieces on data, delivery and governance.","64 articles"],
  ["graduation-cap","Learn","Courses, labs and certification paths for analysts and engineers.","5 tracks"],
  ["pen-line","Blog","Field notes from delivery teams, written between sprints.","Weekly"],
  ["calendar-days","Events","Where to meet us next, in Nairobi and online.","Next: 12 Aug"]];

const HUB_FEATURED=[
  {kicker:"Webinar · 48 min",title:"Governing AI In Regulated Industries",img:IMG("1573164574511-73c773193279"),
   note:"What a model approval pack needs to contain before risk will sign it."},
  {kicker:"Whitepaper · 4 pages",title:"The 2026 Data Skills Gap",img:IMG("1573164574397-dd250bc8a598"),
   note:"Where the shortage actually bites, and what a realistic training ladder costs."}];

const HUB_EVENTS=[["12 Aug 2026","Nairobi","Data Governance Clinic","Half-day workshop for banking and insurance teams"],
  ["03 Sep 2026","Online","Forecasting In Volatile Supply Chains","Live session with our manufacturing practice"],
  ["24 Sep 2026","Nairobi","Public Sector Reporting Roundtable","Invitation only, with agency data leads"]];

function ServicesHub(){
  const {Frame,Section,Icon,PtButton,PtFooter,ClientWall,PageHero,Stepper,StatBand,SlotFigure,ClosingCta}=window;
  const { Card, TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <PageHero eyebrow="Services" lead="Six Services." rest="One Delivery Team." secondary={["See Pricing","Pricing.html"]}
      intro="Strategy, platforms, models, software, people and training, scoped in discovery, built in your tenancy and handed over with the code."
      meta={[["Median Time To Value","8 Weeks"],["Delivery Squads","11"],["Handover","Code + Runbooks"]]}/>
    <Frame><ClientWall label="Trusted By Governments, Insurers And Global NGOs"/></Frame>
    <Section index="01" label="Services" right="Where To Start">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:24}}>
        {HUB_SERVICES.map(s=><Card key={s.name} hover padding={30}>
          <span style={{color:"var(--secondary-text)",display:"inline-flex",marginBottom:16}}><Icon name={s.icon} size={24}/></span>
          <h2 style={{fontSize:21,margin:"0 0 10px",fontWeight:"var(--weight-medium)"}}>{s.name}</h2>
          <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",lineHeight:1.65,minHeight:66}}>{s.blurb}</p>
          <ul style={{listStyle:"none",padding:0,margin:"0 0 24px",display:"flex",flexDirection:"column",gap:10}}>
            {s.points.map(p=><li key={p} style={{display:"flex",alignItems:"center",gap:10,fontSize:"var(--text-sm)"}}>
              <span style={{width:5,height:5,borderRadius:99,background:"var(--primary)",flex:"0 0 auto"}}/>{p}</li>)}</ul>
          <a href={s.href} style={{display:"inline-flex",alignItems:"center",gap:8,fontSize:14,textDecoration:"none",
            color:"var(--secondary-text)"}}>Explore {s.name}<Icon name="arrow-right" size={15}/></a>
        </Card>)}
      </div>
    </Section>
    <Section index="02" label="How We Work" right="Four Steps" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Discover, Prove, Scale, Hand Over."
        rest="The same sequence on every engagement, whichever service you start with."/>
      <div style={{marginTop:44}}><Stepper steps={HUB_HOW}/></div>
      <div style={{marginTop:44}}>
        <StatBand stats={[["Engagements Delivered","140+"],["Repeat Clients","78%"],["Countries","6"],["Certified Engineers","64"]]}/></div>
      <div style={{marginTop:24}}>
        <SlotFigure id="hub-services-team" caption="Photography: a delivery squad mid-sprint"/></div>
    </Section>
    <ClosingCta title="Not Sure Which Service You Need?" secondary={["See Pricing","Pricing.html"]}>
      Start with a two-week discovery. We map your data estate, name the three highest-value use cases, and return
      a costed plan, yours to keep whichever way you go.</ClosingCta>
    <PtFooter/></>;
}

function SolutionsHub(){
  const {Frame,Section,Icon,PtFooter,ClientWall,PageHero,StatBand,ClosingCta}=window;
  const { Card, TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <PageHero eyebrow="Solutions" lead="Five Industries." rest="Four Roles. One Governed Layer."
      secondary={["See All Services","Services.html"]}
      intro="Pick the sector you operate in, or the team whose work you are trying to change. Every engagement starts with the people who use the output."
      meta={[["Industries Served","5"],["Roles Supported","4"],["Median Time To Value","9 Weeks"]]}/>
    <Section index="01" label="By Industry" right="Sector Depth">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Where We Have Done This Before."
        rest="Sector-specific definitions, reporting and models, built for how each industry actually runs."/>
      <div style={{marginTop:44,display:"grid",gap:20}}>
        {HUB_INDUSTRIES.map(s=><Card key={s.name} hover padding={0}>
          <a href={s.href} style={{textDecoration:"none",color:"inherit",display:"grid",
            gridTemplateColumns:"minmax(0,240px) minmax(0,1fr) auto",alignItems:"center",gap:0}}
            className="pt-indrow">
            <div className="pt-indimg" style={{height:150,overflow:"hidden",background:"var(--bg-muted)"}}>
              <img src={s.img} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/></div>
            <div style={{padding:"24px 30px"}}>
              <h2 style={{fontSize:20,margin:"0 0 8px",fontWeight:"var(--weight-medium)"}}>{s.name}</h2>
              <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0,maxWidth:520}}>{s.line}</p></div>
            <div className="pt-indstat" style={{padding:"24px 30px",textAlign:"right"}}>
              <div style={{fontSize:24,fontWeight:600,color:"var(--primary)",letterSpacing:"-0.02em"}}>{s.stat[1]}</div>
              <div style={{fontSize:12,color:"var(--text-muted)",marginTop:2}}>{s.stat[0]}</div>
              <span style={{display:"inline-flex",marginTop:12,color:"var(--secondary-text)"}}><Icon name="arrow-right" size={18}/></span></div>
          </a></Card>)}
      </div>
    </Section>
    <Section index="02" label="By Role" right="Start From What You Own" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Four Teams, Four Starting Points."
        rest="Each one has a page describing what we build and how the first ninety days run."/>
      <div className="pt-2col" style={{marginTop:40,display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:16}}>
        {HUB_ROLES.map(([t,href,ic,line])=><a key={t} href={href} style={{textDecoration:"none",color:"inherit",
          display:"grid",gridTemplateColumns:"38px minmax(0,1fr) auto",gap:14,alignItems:"center",padding:"18px 20px",
          border:"1px solid var(--grid-line)",borderRadius:"var(--radius-md)",background:"var(--stone-0)"}}>
          <span style={{width:38,height:38,borderRadius:"var(--radius-sm)",border:"1px solid var(--border-hairline)",
            display:"inline-flex",alignItems:"center",justifyContent:"center",color:"var(--secondary-text)"}}>
            <Icon name={ic} size={18}/></span>
          <span><span style={{display:"block",fontSize:16,fontWeight:"var(--weight-medium)"}}>{t}</span>
            <span style={{display:"block",fontSize:13,color:"var(--text-muted)",marginTop:2}}>{line}</span></span>
          <span style={{color:"var(--text-muted)",display:"inline-flex"}}><Icon name="arrow-right" size={16}/></span>
        </a>)}
      </div>
      <div style={{marginTop:40}}><StatBand stats={[["Sector Playbooks","5"],["Role Playbooks","4"],["Definitions Certified","260+"],["Data Coverage","81%"]]} tone="dark"/></div>
    </Section>
    <Frame><ClientWall label="Trusted By Governments, Insurers And Global NGOs"/></Frame>
    <ClosingCta title="Start Where The Pain Is." secondary={["See All Services","Services.html"]}>
      Tell us the report nobody trusts or the decision that keeps arriving late. We will show you what it looks
      like when the data holds.</ClosingCta>
    <PtFooter/></>;
}

function ResourcesHub(){
  const {Section,Icon,PtButton,PtFooter,PageHero,DataTable,ClosingCta}=window;
  const { Card, TwoToneHeading, Badge } = window.SearchableDesignSystem_29e52a;
  return <>
    <PageHero eyebrow="Resources" lead="What We Have Learned," rest="Written Down." heroStack
      secondary={["See All Services","Services.html"]}
      intro="Webinars, whitepapers, courses and field notes from the teams doing the delivery. No gated fluff."
      meta={[["Published Items","94"],["Live Sessions","18"],["Courses","5 Tracks"]]}/>
    <Section index="01" label="Featured" right="Start Here">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:24}}>
        {HUB_FEATURED.map(f=><Card key={f.title} hover padding={0}>
          <div style={{height:210,overflow:"hidden",background:"var(--bg-muted)",
            borderRadius:"var(--radius-md) var(--radius-md) 0 0"}}>
            <img src={f.img} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/></div>
          <div style={{padding:28}}>
            <div style={{fontSize:"var(--text-xs)",color:"var(--text-muted)"}}>{f.kicker}</div>
            <h2 style={{fontSize:21,margin:"10px 0 10px",fontWeight:"var(--weight-medium)"}}>{f.title}</h2>
            <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",lineHeight:1.65}}>{f.note}</p>
            <a href="#" style={{display:"inline-flex",alignItems:"center",gap:8,fontSize:14,textDecoration:"none",
              color:"var(--secondary-text)"}}>Open<Icon name="arrow-right" size={15}/></a></div>
        </Card>)}
      </div>
    </Section>
    <Section index="02" label="Library" right="Browse By Type" bg="var(--bg-subtle)">
      <div className="pt-3col" style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:20}}>
        {HUB_RESOURCES.map(([ic,t,x,meta])=><a key={t} href="#" style={{textDecoration:"none",color:"inherit",
          padding:"26px 24px",border:"1px solid var(--grid-line)",borderRadius:"var(--radius-md)",
          background:"var(--stone-0)",display:"block"}}>
          <span style={{color:"var(--secondary-text)",display:"inline-flex",marginBottom:14}}><Icon name={ic} size={22}/></span>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12}}>
            <span style={{fontSize:18,fontWeight:"var(--weight-medium)"}}>{t}</span>
            <span style={{fontSize:12,color:"var(--text-muted)",whiteSpace:"nowrap"}}>{meta}</span></div>
          <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:"8px 0 0"}}>{x}</p>
        </a>)}
      </div>
    </Section>
    <Section index="03" label="Events" right="Where To Meet Us">
      <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead="Coming Up." rest="Small rooms, working sessions, no product pitch."/>
      <div style={{marginTop:36}}>
        <DataTable head={["Date","Where","Session","Who It Is For"]} rows={HUB_EVENTS}/></div>
      <div style={{marginTop:28,display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}>
        <Badge tone="neutral">Invitations</Badge>
        <span style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)"}}>
          Seats are limited, ask us to hold one for your team.</span>
        <PtButton tone="secondary" size="md" onClick={()=>{location.href="Contact Us.html"}}>Request A Seat</PtButton></div>
    </Section>
    <ClosingCta title="Want This In Your Inbox?" secondary={["Talk To A Practice Lead","Contact Us.html"]}>
      We send one note a month: what shipped, what broke, and what we would do differently. No newsletter theatre.</ClosingCta>
    <PtFooter/></>;
}

function HubApp(){
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();});
  const which=window.PT_HUB;
  window.PT_HERO_PHOTO=which==="services"?"uploads/IT Background.jpg"
    :which==="solutions"?IMG("1504384308090-c894fdcc538d",1600)
    :IMG("1553877522-43269d4ea984",1600);
  const View=which==="services"?ServicesHub:which==="solutions"?SolutionsHub:ResourcesHub;
  return <><Header/><main id="main"><View/></main></>;
}
Object.assign(window,{HubApp});
