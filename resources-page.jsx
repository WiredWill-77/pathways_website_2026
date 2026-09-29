/* Resources destination pages. window.PT_PAGE={type:"resource",slug}.
   Listings, dates and figures are illustrative, replace before publishing. */
const RESOURCES={
  webinars:{hero:"uploads/webinars-hero-1920.webp",heroZoomFrom:1,heroZoomTo:1.04,name:"Webinars",eyebrow:"Resources · Webinars",
    lead:"Live Sessions With The People,",rest:"Who Do The Delivery.",
    intro:"Forty-five minutes with a practice lead, a working screen share and an open question queue. Recorded, but the value is in the room.",
    meta:[["Sessions A Quarter","6"],["Median Length","45 Min"],["Recording","Same Day"]],
    upcoming:[["12 Aug 2026","Governing AI In Regulated Industries","Risk, model documentation and the approval pack that gets signed.","Nairobi · 14:00 EAT"],
      ["26 Aug 2026","From Spreadsheet Close To Three-Day Close","How reconciliation automation actually lands in a finance team.","Online · 15:00 EAT"],
      ["09 Sep 2026","Building A Semantic Layer That Survives","Certified measures, ownership and the review path to production.","Online · 14:00 EAT"]],
    onDemand:[["Data Residency In Kenya","What the Data Protection Act asks of an analytics platform."],
      ["Forecasting For Consumer Goods","SKU-week accuracy, and where plans quietly break down."],
      ["Embedded Analytics Without The Security Debt","Row-level policy inside someone else's product."],
      ["Fraud Scoring On Thin Data","Working with the signal a growing lender actually has."]],
    stats:[["Registrations Last Quarter","2,140"],["Attendance Rate","61%"],["Questions Answered Live","Every One"],["Sessions Recorded","18"]]},

  whitepapers:{hero:"uploads/whitepapers-hero.webp",ctaStyle:{background:"var(--blue-500)",borderColor:"var(--blue-300)"},ctaClass:"pt-cta-soft-hover",name:"Whitepapers",eyebrow:"Resources · Whitepapers",
    lead:"Reference Architectures And Research,",rest:"Written To Be Used.",
    intro:"Longer pieces for the people who have to build or approve the thing. Diagrams, decision tables and the trade-offs we would argue in a workshop.",
    meta:[["Papers Published","11"],["Median Length","4 Pages"],["Access","Free"]],
    library:[["The 2026 Data Skills Gap","Research","4 pages","Survey of 240 East African data teams: hiring, retention and the roles that stay unfilled.","whitepaper-data-skills-gap.html"],
      ["Reference Architecture: Governed Warehouse","Architecture","4 pages","Azure and Microsoft Fabric patterns for a regulated warehouse, with cost and access models.","whitepaper-governed-warehouse.html"],
      ["Model Documentation For Approval","Governance","4 pages","The pack a risk committee needs, and the sections that get rejected most often.","whitepaper-model-documentation.html"],
      ["Digital Disbursement At National Scale","Case Study","4 pages","eVoucher issuance, redemption and daily reconciliation across a public programme.","whitepaper-digital-disbursement.html"],
      ["Measuring Data Product Value","Method","4 pages","Scoring use cases on value over effort so a roadmap survives its first quarter.","whitepaper-data-product-value.html"]],
    stats:[["Downloads To Date","6,800"],["Cited By","14 Institutions"],["Updated","Annually"],["Whitepapers Published","12"]]},

  articles:{hero:"uploads/articles-hero.webp",name:"Articles",eyebrow:"Resources · Articles",
    lead:"Short, Practical Pieces,",rest:"On Data And Delivery.",
    intro:"Ten-minute reads on the problems that come up in every engagement. No product pitch, no gated form.",
    meta:[["Published","64"],["Median Read","9 Min"],["Cadence","Weekly"]],
    topics:["Data Governance","Semantic Modelling","Forecasting","MLOps","Power BI","Cost Control","Team Structure","Automation"],
    featured:[["Why Your Second Dashboard Fails","Governance","The first one succeeds because one person owns every definition. The second exposes that nobody wrote them down."],
      ["Stop Measuring Model Accuracy Alone","Data Science","Accuracy without a decision threshold tells you nothing about whether the model earns its keep."],
      ["The Report Nobody Will Admit To Owning","Delivery","How to find the manual reporting cost hiding in your operations team, and what to retire first."],
      ["Cloud Cost Is A Modelling Problem","Architecture","Most warehouse bills are a partitioning decision made eighteen months ago."],
      ["Hiring Your First Analytics Engineer","Teams","What the role actually does, and the interview that predicts it."],
      ["Consent Is A Schema Decision","Healthcare","Model the access rules before the analysis, or you will model them twice."]],
    stats:[["Articles Published","64"],["Subscribers","3,900"],["Cadence","Weekly"],["Average Read Time","6 Min"]]},

  learn:{hero:"uploads/learn-hero.jpg",name:"Learn",eyebrow:"Resources · Learn",
    lead:"Courses, Labs &",rest:"Certification Paths.",heroStack:true,
    intro:"Structured tracks that take a team from spreadsheet discipline to production modelling, taught on your own data.",
    meta:[["Learners","1,900+"],["Tracks","4"],["Completion","94%"]],
    tracks:[["Foundations Track","Analysts & Graduates","4 half-days","Data types, joins, spreadsheet discipline and first SQL."],
      ["Analytics Engineering Track","Analysts","6 half-days","Window functions, star schemas, certified measures and testing."],
      ["Applied Machine Learning Track","Analysts & Developers","8 half-days","Feature engineering, evaluation and deployment basics."],
      ["Data Literacy For Leaders","Executives","2 half-days","Reading a model, questioning a metric, governing a programme."]],
    how:[["award","Assessed On Output","Every module ends in a practical build, marked and returned with written feedback."],
      ["database","Taught On Your Data","Exercises run against your warehouse, so Friday's work is used on Monday."],
      ["users","Cohorts Of 6 to 24","Small enough to assess properly, large enough to change how a team works."]],
    labs:["Guided SQL Labs","Semantic Layer Sandbox","Notebook Environments","Power BI Workspace","Model Monitoring Lab","Capstone Review"],
    stats:[["People Trained","1,900+"],["Completion Rate","94%"],["Per Learner","$320"],["Delivery","On Site Or Remote"]]},

  blog:{hero:"https://images.unsplash.com/photo-1573164574511-73c773193279?w=1600&q=75&auto=format&fit=crop",name:"Blog",eyebrow:"Resources · Blog",
    lead:"Field Notes,",rest:"From Delivery Teams.",
    intro:"What our engineers and analysts ran into last month, written up while it was still fresh.",
    meta:[["Posts","118"],["Authors","14"],["Cadence","Twice Weekly"]],
    posts:[["Six Weeks To A Credit Model, Honestly Accounted","Data Science Practice","18 Jul 2026","Where the time actually went: four weeks on data, one on modelling, one on the approval pack."],
      ["We Retired 41 Manual Reports. Here Is The Order.","Analytics Practice","11 Jul 2026","Sequencing matters more than tooling. The order that kept stakeholders on side."],
      ["Ingesting 12 Billion Telemetry Events A Month","Platform Team","04 Jul 2026","Partitioning, late-arriving data and the cost review that changed the design."],
      ["What A Two-Week Discovery Actually Produces","Delivery","27 Jun 2026","The four artefacts a client keeps whether or not they hire us."],
      ["Dark Mode Broke Our Charts. Twice.","Product Team","20 Jun 2026","Contrast in data visualisation is not a palette swap."]],
    voices:[["Practice Leads","Architecture, governance and delivery sequencing"],
      ["Engineers","Pipelines, platform cost and production incidents"],
      ["Analysts","Modelling, measure design and stakeholder work"],
      ["Trainers","What cohorts actually struggle with"]],
    stats:[["Posts Published","118"],["Contributing Authors","14"],["Cadence","Twice Weekly"],["Comments Answered","Every One"]]},

  events:{hero:"uploads/events-hero.jpg",name:"Events",eyebrow:"Resources · Events",
    lead:"Where To Meet Us,",rest:"Next.",
    intro:"Conferences, roundtables and partner sessions across East Africa. Small rooms where you can ask a difficult question.",
    meta:[["Events A Year","18"],["Cities","6"],["Roundtable Size","12 to 20"]],
    schedule:[["03 Sep 2026","Data & AI Summit East Africa","Nairobi","Conference · Keynote and two workshop tracks"],
      ["17 Sep 2026","CFO Roundtable: The Three-Day Close","Nairobi","Roundtable · 16 seats, by invitation"],
      ["08 Oct 2026","Public Sector Data Residency Briefing","Konza","Briefing · With Konza Technopolis"],
      ["22 Oct 2026","Manufacturing Analytics Clinic","Mombasa","Clinic · Bring your own plant data"],
      ["12 Nov 2026","Microsoft Fabric Build Day","Kampala","Workshop · With Microsoft"],
      ["03 Dec 2026","Year In Review: What Landed","Nairobi","Evening · Clients and partners"]],
    formats:[["presentation","Conferences","Keynotes and workshop tracks at regional data and technology events."],
      ["users","Roundtables","Twelve to twenty peers, one topic, no slides and no vendors in the room."],
      ["wrench","Clinics","Bring a real dataset and leave with a working model or a diagnosis."],
      ["handshake","Partner Sessions","Joint build days with Microsoft, Google Cloud and Konza."]],
    stats:[["Events A Year","18"],["Cities Covered","6"],["Roundtable Size","12 to 20"],["Attendees Last Year","640"]]}};

const cmsEvSlug=s=>String(s||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
function ResWebinars({d}){
  const {Section,SlotFigure,DashedGrid,StatBand,ClosingCta,PtFooter,PtButton}=window;
  const { TwoToneHeading, Badge } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Upcoming" right="Register Free">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Next Three Sessions."
        rest="Each one is a hands-on working session."/>
      <div style={{marginTop:40,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:24}}>
        {d.upcoming.map(([date,session,covered,where])=><div key={session}
          style={{border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-lg)",overflow:"hidden",display:"flex",flexDirection:"column",background:"var(--surface)"}}>
          <div style={{position:"relative",aspectRatio:"4 / 3",background:"var(--bg-muted)"}}>
            <div style={{position:"absolute",inset:0}}><image-slot id={"webinar-cover-"+session.replace(/\W+/g,"-")} shape="rect" placeholder={"Cover: "+session}></image-slot></div></div>
          <div style={{padding:22,display:"flex",flexDirection:"column",gap:12,flex:1}}>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><Badge tone="neutral">{date}</Badge><Badge tone="neutral">{where}</Badge></div>
            <h3 style={{fontSize:18,margin:0,lineHeight:1.35,fontWeight:"var(--weight-medium)"}}><a href={"webinar.html?slug="+cmsEvSlug(session)} style={{color:"inherit",textDecoration:"none"}}>{session}</a></h3>
            <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0,flex:1,lineHeight:1.6}}>{covered}</p>
            <PtButton tone="secondary" size="sm" arrow style={{alignSelf:"flex-start",marginTop:8}} onClick={()=>{location.href="webinar.html?slug="+cmsEvSlug(session)}}>View Session</PtButton></div>
        </div>)}
      </div>
      <div style={{marginTop:36}}><StatBand stats={d.stats}/></div>
    </Section>
    <Section index="02" label="On Demand" right="Watch Anytime" bg="var(--bg-subtle)">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"1.05fr 0.95fr",gap:44,alignItems:"start"}}>
        <div><TwoToneHeading size="clamp(21px,4vw,28px)" lead="Recorded Sessions."
          rest="Same screen shares, minus the live question queue."/>
          <div style={{marginTop:28,display:"grid",border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-lg)",overflow:"hidden",background:"var(--surface)"}}>
            {d.onDemand.map(([t,x],i)=><a key={t} href={"webinar.html?slug="+cmsEvSlug(t)} className="pt-rowlink" style={{display:"grid",gap:4,padding:"18px 22px",borderTop:i?"1px dashed var(--border-hairline)":"none",textDecoration:"none",color:"inherit"}}>
              <span style={{fontSize:16,fontWeight:"var(--weight-medium)",color:"var(--text-primary)"}}>{t}</span>
              <span style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",lineHeight:1.55}}>{x}</span></a>)}</div></div>
        <SlotFigure id="res-web-studio" caption="Photography: a practice lead presenting a live session" ratio="4 / 3"/></div>
    </Section>
    <ClosingCta title="Bring Your Team To The Next One." secondary={["See All Resources","Resources.html"]}>
      Sessions are free and capped so questions get answered. Tell us the topic you want covered next.</ClosingCta>
    <PtFooter/></>;
}

function WpGateModal({title,href,pdfUrl,onClose}){
  const {PtButton,Icon}=window;
  const [form,setForm]=React.useState({name:"",email:"",company:""});
  const field=k=>e=>setForm({...form,[k]:e.target.value});
  const inputStyle={padding:"10px 12px",border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-sm)",
    font:"inherit",fontSize:"var(--text-sm)",background:"var(--bg-page)",color:"var(--text-primary)",width:"100%"};
  return <div role="dialog" aria-modal="true" onClick={onClose}
    style={{position:"fixed",inset:0,background:"rgba(8,11,14,.66)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:20}}>
    <form onClick={e=>e.stopPropagation()} onSubmit={e=>{e.preventDefault();
      if(pdfUrl){if(pdfUrl.startsWith("data:")){const a=document.createElement("a");a.href=pdfUrl;a.download=(title||"whitepaper").replace(/[^\w-]+/g,"-")+".pdf";document.body.appendChild(a);a.click();a.remove();}
        else window.open(pdfUrl,"_blank");}
      else if(href){const win=window.open(href,"_blank");if(win)win.addEventListener("load",()=>win.print());}
      onClose();}}
      className="pt-modal-card"
      style={{position:"relative",borderRadius:"var(--radius-lg)",padding:32,maxWidth:420,width:"100%",display:"grid",gap:16}}>
      <button type="button" onClick={onClose} aria-label="Close" style={{position:"absolute",top:16,right:16,background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)"}}><Icon name="x" size={18}/></button>
      <div>
        <div style={{fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:"var(--text-muted)"}}>Download · 4 pages</div>
        <h3 style={{margin:"6px 0 0",fontSize:20,paddingRight:24}}>{title}</h3></div>
      <label style={{display:"grid",gap:6,fontSize:"var(--text-sm)"}}>Full Name
        <input required value={form.name} onChange={field("name")} style={inputStyle}/></label>
      <label style={{display:"grid",gap:6,fontSize:"var(--text-sm)"}}>Work Email
        <input required type="email" value={form.email} onChange={field("email")} style={inputStyle}/></label>
      <label style={{display:"grid",gap:6,fontSize:"var(--text-sm)"}}>Company
        <input required value={form.company} onChange={field("company")} style={inputStyle}/></label>
      <div style={{display:"flex",gap:12,marginTop:6}}>
        <PtButton tone="primary" size="md" type="submit">Get The PDF</PtButton>
        <PtButton tone="ghost" size="md" type="button" onClick={onClose}>Cancel</PtButton></div>
    </form></div>;
}

function ResWhitepapers({d}){
  const {Section,StatBand,QuoteBand,ClosingCta,PtFooter,PtButton}=window;
  const { TwoToneHeading, Badge } = window.SearchableDesignSystem_29e52a;
  const [gate,setGate]=React.useState(null);
  return <>
    <Section index="01" label="Library" right="Five Papers">
      <TwoToneHeading size="clamp(21px,4vw,28px)" maxWidth={760} lead="Written For Builders And Approvers."
        rest="Pick a paper below. Three fields, then the PDF."/>
      <div style={{marginTop:36,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:24}}>
        {d.library.map(([title,type,length,desc,href,pdfUrl])=><div key={title}
          style={{border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-lg)",overflow:"hidden",display:"flex",flexDirection:"column",background:"var(--surface)"}}>
          <div style={{position:"relative",aspectRatio:"4 / 3",background:"var(--bg-muted)"}}>
            <div style={{position:"absolute",inset:0}}><image-slot id={"wp-cover-"+title.replace(/\W+/g,"-")} shape="rect" placeholder={"Cover: "+title}
              style={title==="Digital Disbursement At National Scale"?{backgroundColor:"#FFFFFF"}:undefined}></image-slot></div></div>
          <div style={{padding:22,display:"flex",flexDirection:"column",gap:12,flex:1}}>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><Badge tone="neutral">{type}</Badge><Badge tone="neutral">{length}</Badge></div>
            <h3 style={{fontSize:18,margin:0,lineHeight:1.35,fontWeight:"var(--weight-medium)"}}>{title}</h3>
            <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0,flex:1,lineHeight:1.6}}>{desc}</p>
            <PtButton tone="secondary" size="sm" arrow style={{alignSelf:"flex-start",marginTop:8}} onClick={()=>setGate({title,href,pdfUrl})}>Download PDF</PtButton></div>
        </div>)}
      </div>
    </Section>
    <QuoteBand quote="The reference architecture saved us a month of internal debate. We adopted it more or less as written."
      name="Head of Data Platform" role="Union Bank"/>
    <Section index="02" label="Reach" right="Who Reads Them" bg="var(--bg-subtle)">
      <StatBand stats={d.stats}/>
    </Section>
    <ClosingCta title="Request The Full Library." secondary={["See All Resources","Resources.html"]}>
      Every paper above is behind a short form so we know who to follow up with. No drip campaign after that.</ClosingCta>
    <PtFooter/>
    {gate&&<WpGateModal title={gate.title} href={gate.href} pdfUrl={gate.pdfUrl} onClose={()=>setGate(null)}/>}
    </>;
}

function ResArticles({d}){
  const {Section,SlotFigure,Chips,StatBand,ClosingCta,PtFooter}=window;
  const { TwoToneHeading, Badge } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Topics" right="Filter By Subject">
      <Chips items={d.topics}/>
      <div style={{marginTop:40,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:24}}>
        {d.featured.map(([title,cat,desc])=><div key={title}
          style={{border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-lg)",overflow:"hidden",display:"flex",flexDirection:"column",background:"var(--surface)"}}>
          <div style={{position:"relative",aspectRatio:"4 / 3",background:"var(--bg-muted)"}}>
            <div style={{position:"absolute",inset:0}}><image-slot id={"article-cover-"+title.replace(/\W+/g,"-")} shape="rect" placeholder={"Cover: "+title}></image-slot></div></div>
          <div style={{padding:22,display:"flex",flexDirection:"column",gap:12,flex:1}}>
            <Badge tone="neutral">{cat}</Badge>
            <h3 style={{fontSize:18,margin:0,lineHeight:1.35,fontWeight:"var(--weight-medium)"}}>{title}</h3>
            <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0,flex:1,lineHeight:1.6}}>{desc}</p></div>
        </div>)}
      </div>
    </Section>
    <Section index="02" label="Reading" right="Where To Start" bg="var(--bg-subtle)">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:44,alignItems:"center"}}>
        <SlotFigure id="res-art-desk" caption="Photography: an analyst reading last quarters report" ratio="4 / 3"/>
        <div><TwoToneHeading size="clamp(21px,4vw,28px)" lead="Ten Minutes, No Gate."
          rest="Practical pieces written by the people who hit the problem."/>
          <div style={{marginTop:26}}><StatBand stats={d.stats}/></div></div></div>
    </Section>
    <ClosingCta title="Get One Piece A Week." secondary={["See All Resources","Resources.html"]}>
      One article, every Tuesday. Unsubscribe in a click, and we never pass your address to anyone.</ClosingCta>
    <PtFooter/></>;
}

function ResLearn({d}){
  const {Section,SlotFigure,IconCards,Chips,StatBand,ClosingCta,PtFooter,PtButton}=window;
  const { TwoToneHeading, Badge } = window.SearchableDesignSystem_29e52a;
  const TRACK_SLUGS={"Foundations Track":"data-foundations","Analytics Engineering Track":"sql-modelling",
    "Applied Machine Learning Track":"applied-machine-learning","Data Literacy For Leaders":"data-literacy-for-leaders"};
  return <>
    <Section index="01" label="Tracks" right="Four Paths">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Four Tracks, Stacked."
        rest="Take one module or run the whole ladder as a cohort programme."/>
      <div style={{marginTop:40,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:24}}>
        {d.tracks.map(([title,audience,length,desc])=>{const slug=TRACK_SLUGS[title];return <div key={title}
          style={{border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-lg)",overflow:"hidden",display:"flex",flexDirection:"column",background:"var(--surface)"}}>
          <div style={{position:"relative",aspectRatio:"4 / 3",background:"var(--bg-muted)"}}>
            <div style={{position:"absolute",inset:0}}><image-slot id={"track-cover-"+title.replace(/\W+/g,"-")} shape="rect" placeholder={"Cover: "+title}></image-slot></div></div>
          <div style={{padding:22,display:"flex",flexDirection:"column",gap:12,flex:1}}>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><Badge tone="neutral">{audience}</Badge><Badge tone="neutral">{length}</Badge></div>
            <h3 style={{fontSize:18,margin:0,lineHeight:1.35,fontWeight:"var(--weight-medium)"}}>{title}</h3>
            <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0,flex:1,lineHeight:1.6}}>{desc}</p>
            {slug&&<PtButton tone="secondary" size="sm" arrow style={{alignSelf:"flex-start",marginTop:8}}
              onClick={()=>{location.href=window.ptHref?ptHref("course",slug):"course-"+slug+".html"}}>View Module</PtButton>}</div>
        </div>;})}
      </div>
      <div style={{marginTop:36}}><StatBand stats={d.stats}/></div>
    </Section>
    <Section index="02" label="Method" right="How We Teach" bg="var(--bg-subtle)">
      <IconCards items={d.how} cols={3}/>
      <div style={{marginTop:40}}>
        <div style={{fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",
          color:"var(--text-muted)",marginBottom:14}}>Labs Included</div>
        <Chips items={d.labs}/></div>
      <div style={{marginTop:36}}><SlotFigure id="res-learn-room" caption="Photography: a cohort working through a guided lab"/></div>
    </Section>
    <ClosingCta title="Run A Cohort Next Quarter." secondary={["See Services","services-data-skills-training.html"]}>
      Tell us the team and the level. We will propose the track, the dates and the assessment plan.</ClosingCta>
    <PtFooter/></>;
}

function ResBlog({d}){
  const {Section,SlotFigure,Rail,SplitList,StatBand,ClosingCta,PtFooter}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Latest" right="Five Recent Posts">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:44,alignItems:"start"}}>
        <div style={{display:"grid",border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-lg)",overflow:"hidden",background:"var(--surface)"}}>
          {d.posts.map(([t,team,date,x],i)=><a key={t} href={"post.html?slug="+cmsEvSlug(t)} className="pt-rowlink" style={{display:"grid",gap:6,padding:"20px 24px",borderTop:i?"1px solid var(--grid-line)":"none",textDecoration:"none",color:"inherit"}}>
            <span style={{fontSize:12.5,color:"var(--text-muted)"}}>{date} · {team}</span>
            <span style={{fontSize:17,fontWeight:"var(--weight-medium)",color:"var(--text-primary)",lineHeight:1.35}}>{t}</span>
            <span style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",lineHeight:1.6}}>{x}</span></a>)}</div>
        <div style={{display:"grid",gap:24,position:"sticky",top:110}}>
          <SlotFigure id="res-blog-team" caption="Photography: the delivery team writing up a retrospective" ratio="4 / 3"/>
          <StatBand stats={d.stats}/></div></div>
    </Section>
    <Section index="02" label="Voices" right="Who Writes Here" bg="var(--bg-subtle)">
      <SplitList label="Contributors" items={d.voices}/>
    </Section>
    <ClosingCta title="Subscribe To Field Notes." secondary={["See All Resources","Resources.html"]}>
      Twice a week, written by the people on the engagement. No editorial calendar and no ghostwriting.</ClosingCta>
    <PtFooter/></>;
}

function ResEvents({d}){
  const {Section,SlotFigure,IconCards,StatBand,QuoteBand,ClosingCta,PtFooter,PtButton}=window;
  const { TwoToneHeading, Badge } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Schedule" right="Next Six Dates">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Six Dates Across East Africa."
        rest="Small rooms, working sessions and one partner build day."/>
      <div style={{marginTop:40,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:24}}>
        {d.schedule.map(([date,name,city,format])=><div key={name}
          style={{border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-lg)",overflow:"hidden",display:"flex",flexDirection:"column",background:"var(--surface)"}}>
          <div style={{position:"relative",aspectRatio:"4 / 3",background:"var(--bg-muted)"}}>
            {((window.EVENT_DETAILS||{})[cmsEvSlug(name)]||{}).hero?<img src={window.EVENT_DETAILS[cmsEvSlug(name)].hero} alt={name} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
              :<div style={{position:"absolute",inset:0}}><image-slot id={"event-cover-"+name.replace(/\W+/g,"-")} shape="rect" placeholder={"Cover: "+name}></image-slot></div>}</div>
          <div style={{padding:22,display:"flex",flexDirection:"column",gap:12,flex:1}}>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><Badge tone="neutral">{date}</Badge><Badge tone="neutral">{city}</Badge></div>
            <h3 style={{fontSize:18,margin:0,lineHeight:1.35,fontWeight:"var(--weight-medium)"}}><a href={"event.html?slug="+cmsEvSlug(name)} style={{color:"inherit",textDecoration:"none"}}>{name}</a></h3>
            <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0,flex:1,lineHeight:1.6}}>{format}</p>
            <PtButton tone="secondary" size="sm" arrow style={{alignSelf:"flex-start",marginTop:8}} onClick={()=>{location.href="event.html?slug="+cmsEvSlug(name)}}>View Event</PtButton></div>
        </div>)}
      </div>
    </Section>
    <QuoteBand quote="The roundtable was sixteen people with the same problem and no vendors pitching. That is rare enough to travel for."
      name="Group CFO" role="Meridian Group"/>
    <Section index="02" label="Formats" right="What To Expect" bg="var(--bg-subtle)">
      <IconCards items={d.formats} cols={2}/>
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"1.05fr 0.95fr",gap:36,marginTop:36,alignItems:"center"}}>
        <SlotFigure id="res-events-room" caption="Photography: a roundtable mid-discussion" ratio="16 / 9"/>
        <StatBand stats={d.stats} tone="dark"/></div>
    </Section>
    <ClosingCta title="Request A Seat." secondary={["See All Resources","Resources.html"]}>
      Roundtables and clinics are capped. Tell us which date suits and we will confirm availability.</ClosingCta>
    <PtFooter/></>;
}

const RES_VIEWS={webinars:ResWebinars,whitepapers:ResWhitepapers,articles:ResArticles,
  learn:ResLearn,blog:ResBlog,events:ResEvents};

function ResourceApp(){
  const {PageHero}=window;
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();});
  const slug=(window.PT_PAGE||{}).slug;
  const d=RESOURCES[slug],View=RES_VIEWS[slug];
  if(!d)return <div style={{padding:60}}>Unknown resource page.</div>;
  window.PT_HERO_ZOOM_FROM=d.heroZoomFrom;window.PT_HERO_ZOOM_TO=d.heroZoomTo;
  return <><Header/><main id="main">
    <PageHero eyebrow={d.eyebrow} lead={d.lead} rest={d.rest} intro={d.intro} meta={d.meta} img={d.hero}
      heroStack={d.heroStack} ctaStyle={d.ctaStyle} ctaClass={d.ctaClass} secondary={["See All Resources","Resources.html"]}/>
    <View d={d}/></main></>;
}
Object.assign(window,{ResourceApp,RESOURCES});
