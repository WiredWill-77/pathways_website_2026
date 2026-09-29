/* Single-item pages for webinars (webinar.html?slug=) and blog field notes (post.html?slug=).
   Speakers, agendas and body copy are illustrative, confirm before publishing. */
const rdSlug=s=>String(s||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const WEBINAR_DETAILS={
  "governing-ai-in-regulated-industries":{length:"45 min",
    about:["Regulators now ask to see how a model was built, tested and approved before it touches a customer. This session walks through the model documentation pack we use with banks and insurers, section by section.",
      "Bring a model you are trying to get signed off. The last fifteen minutes are open questions."],
    learn:["What a model risk committee actually reads","How to document data lineage without a six-month project","Bias and stability tests that satisfy an auditor","Monitoring you can switch on the week you go live"],
    speakers:[["Practice Lead","Data Science & AI"],["Risk Advisor","Model Governance"]]},
  "from-spreadsheet-close-to-three-day-close":{length:"45 min",
    about:["Most finance teams know which reconciliations slow the close. Fewer know which ones to automate first. This session shows the sequence that has worked across our finance engagements.",
      "We share the before and after timelines from a recent client, with numbers anonymised."],
    learn:["Picking the first three reconciliations to automate","Where accrual estimates can be modelled","Building a reporting pack that refreshes itself","Keeping controllers in the loop during the change"],
    speakers:[["Practice Lead","Analytics & BI"],["Finance Consultant","Automation"]]},
  "building-a-semantic-layer-that-survives":{length:"45 min",
    about:["A semantic layer only helps if people trust the numbers in it. This session covers certified measures, clear ownership and the review path we use before anything reaches production.",
      "Live demo in Power BI and Microsoft Fabric."],
    learn:["Naming and certifying measures","Assigning owners who will actually review changes","A lightweight review path to production","Spotting duplicate logic before it spreads"],
    speakers:[["BI Architect","Analytics & BI"]]},
  "data-residency-in-kenya":{length:"42 min",onDemand:true,
    about:["What the Data Protection Act asks of an analytics platform, explained in plain terms, with the hosting options compared side by side."],
    learn:["Which data must stay in country","Hosting options and their trade-offs","The paperwork a regulator expects"],speakers:[["Cloud Architect","Platform Team"]]},
  "forecasting-for-consumer-goods":{length:"48 min",onDemand:true,
    about:["SKU-week forecasting for consumer goods, and the places where plans quietly break down between the model and the warehouse."],
    learn:["Setting a realistic accuracy baseline","Handling promotions and stock-outs","Getting planners to use the forecast"],speakers:[["Data Scientist","Data Science & AI"]]},
  "embedded-analytics-without-the-security-debt":{length:"40 min",onDemand:true,
    about:["Putting dashboards inside someone else's product without leaking data between tenants. Row-level policy, token handling and testing."],
    learn:["Row-level security patterns","Token and session handling","Tests that catch tenant leaks"],speakers:[["Software Lead","Apps & Software"]]},
  "fraud-scoring-on-thin-data":{length:"44 min",onDemand:true,
    about:["Building a useful fraud score when a growing lender has limited history. Which signals carry weight and how to keep false positives manageable."],
    learn:["Features that work on thin files","Setting thresholds with operations","Monitoring drift as volume grows"],speakers:[["Data Scientist","Data Science & AI"]]}
};
const FIELD_NOTES={
  "six-weeks-to-a-credit-model-honestly-accounted":{read:"7 min read",
    body:["We told the client six weeks. It took six weeks. What surprised them was where the time went.","Four weeks went on data: finding the right loan tables, agreeing what counts as a default, and fixing dates that meant different things in different systems.","Modelling took one week. The approval pack took the last one, and it was the week that decided whether the model would ever be used."],
    takeaways:["Budget most of the time for data, not modelling","Agree the default definition in week one","Start the approval pack early"]},
  "we-retired-41-manual-reports-here-is-the-order":{read:"6 min read",
    body:["Retiring manual reports is less about tooling and more about sequence. Remove the wrong one first and you lose the room.","We started with reports nobody opened, then reports duplicated elsewhere, and left executive packs until the replacements had run for a full quarter."],
    takeaways:["Start with reports nobody opens","Run replacements in parallel for a quarter","Leave executive packs until last"]},
  "ingesting-12-billion-telemetry-events-a-month":{read:"9 min read",
    body:["At this volume, partitioning choices decide the monthly bill. Our first design was correct and too expensive.","Late-arriving data forced a rethink of how we closed each day. A cost review in month two changed the storage layout and cut spend by a third."],
    takeaways:["Partition on how data is queried","Plan for late-arriving events from the start","Review cost in the first month, not the sixth"]},
  "what-a-two-week-discovery-actually-produces":{read:"5 min read",
    body:["Clients keep four things from a discovery whether or not they hire us afterwards: a data estate map, a ranked list of use cases, a costed plan, and a risk register.","Each one is written so the client's own team can pick it up without us in the room."],
    takeaways:["A map of the data estate","Three ranked use cases","A costed delivery plan","A risk register"]},
  "dark-mode-broke-our-charts-twice":{read:"6 min read",
    body:["Swapping a palette is not enough. The first time, gridlines vanished. The second time, two series became indistinguishable.","We now test every chart against contrast ratios in both themes before release."],
    takeaways:["Test chart contrast in both themes","Pin gridline colours per theme","Never rely on colour alone to separate series"]}
};

function RdShell({children,label}){
  const {Header}=window;
  return <><Header/><main id="main" data-screen-label={label}>{children}</main></>;
}
const rdPanel={border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-lg)",background:"var(--surface)"};
function RdFacts({rows,cta,href}){
  const {PtButton}=window;
  return <aside style={{...rdPanel,padding:24,display:"grid",gap:16,position:"sticky",top:110}}>
    {rows.filter(r=>r[1]).map(([k,v])=><div key={k} style={{display:"grid",gap:4}}>
      <span style={{fontSize:12,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"var(--tracking-eyebrow)"}}>{k}</span>
      <span style={{fontSize:15,color:"var(--text-primary)",lineHeight:1.45}}>{v}</span></div>)}
    {cta&&<PtButton tone="primary" size="md" arrow onClick={()=>{location.href=href}}>{cta}</PtButton>}
  </aside>;
}
function RdCover({src,slot,alt}){
  return <div style={{position:"relative",aspectRatio:"16 / 9",borderRadius:"var(--radius-lg)",overflow:"hidden",background:"var(--bg-muted)",marginBottom:10}}>
    {src?<img src={src} alt={alt} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
      :<div style={{position:"absolute",inset:0}}><image-slot id={slot} shape="rect" placeholder={"Cover: "+alt}></image-slot></div>}
  </div>;
}
function RdMissing({what,href}){
  const {PtButton}=window;
  return <RdShell><div style={{padding:"120px 24px",textAlign:"center",display:"grid",gap:16,justifyItems:"center"}}>
    <p style={{color:"var(--text-secondary)",margin:0}}>This {what} is no longer listed.</p>
    <PtButton tone="secondary" onClick={()=>{location.href=href}}>Go Back</PtButton></div></RdShell>;
}
const rdP=(p,i)=><p key={i} style={{fontSize:17,color:"var(--text-secondary)",lineHeight:1.75,margin:0}}>{window.ptMd?ptMd(p):p}</p>;

function WebinarPage(){
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();});
  const {PtFooter,Section,PageHero,CheckRows,ClosingCta}=window;
  const { Badge } = window.SearchableDesignSystem_29e52a;
  const slug=new URLSearchParams(location.search).get("slug")||"";
  const W=RESOURCES.webinars||{},up=W.upcoming||[],od=W.onDemand||[];
  const u=up.find(r=>rdSlug(r[1])===slug),o=!u&&od.find(r=>rdSlug(r[0])===slug);
  if(!u&&!o)return <RdMissing what="session" href="resources-webinars.html"/>;
  const x=WEBINAR_DETAILS[slug]||{};
  const [date,session,covered,where]=u?u:["",o[0],o[1],"Online"];
  const [place,time]=String(where||"").split("·").map(s=>s.trim());
  const live=!!u,cta=live?"Register Free":"Watch The Recording";
  window.PT_HERO_PHOTO=x.hero||W.hero;
  const others=[...up.map(r=>[r[1],r[0]+" · "+r[3]]),...od.map(r=>[r[0],"On demand"])].filter(r=>rdSlug(r[0])!==slug).slice(0,3);
  let n=1;const ix=()=>String(++n).padStart(2,"0");
  return <RdShell label={session}>
    <PageHero eyebrow={"Webinar · "+(live?"Live Session":"On Demand")} lead={session} rest={live?date:"Watch Anytime"} intro={x.summary||covered}
      img={x.hero||W.hero} ctaLabel={cta} ctaHref="Contact Us.html" secondary={["See All Webinars","resources-webinars.html"]}
      meta={[["When",live?date:"On Demand"],["Where",place||"Online"],["Length",x.length||"45 min"]]}/>
    <Section index="01" label="About" right="The Session">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1.4fr) minmax(0,0.8fr)",gap:48,alignItems:"start"}}>
        <div style={{display:"grid",gap:18}}>
          <RdCover src={x.hero} slot={"webinar-cover-"+session.replace(/\W+/g,"-")} alt={session}/>
          {(x.about&&x.about.length?x.about:[covered]).map(rdP)}</div>
        <RdFacts rows={[["Date",live?date:"On Demand"],["Time",time],["Where",place||"Online"],["Length",x.length||"45 min"],["Cost","Free"]]} cta={cta} href="Contact Us.html"/>
      </div>
    </Section>
    {x.learn&&x.learn.length>0&&<Section index={ix()} label="What You Will Learn" right="Takeaways" bg="var(--bg-subtle)"><CheckRows items={x.learn}/></Section>}
    {x.speakers&&x.speakers.length>0&&<Section index={ix()} label="Speakers" right="Who Is Presenting">
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:20}}>
        {x.speakers.map(([nm,role],i)=><div key={i} style={{...rdPanel,padding:22,display:"flex",gap:14,alignItems:"center"}}>
          <div style={{width:48,height:48,borderRadius:"50%",overflow:"hidden",flex:"0 0 48px",background:"var(--bg-muted)"}}>
            <image-slot id={"webinar-speaker-"+slug+"-"+i} shape="circle" placeholder="Photo"></image-slot></div>
          <div style={{display:"grid",gap:2}}><span style={{fontSize:15.5,fontWeight:"var(--weight-medium)"}}>{nm}</span>
            <span style={{fontSize:13,color:"var(--text-secondary)"}}>{role}</span></div></div>)}
      </div></Section>}
    {others.length>0&&<Section index={ix()} label="More Sessions" right="Also Available" bg="var(--bg-subtle)">
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:20}}>
        {others.map(([t,sub])=><a key={t} href={"webinar.html?slug="+rdSlug(t)} style={{...rdPanel,padding:22,display:"flex",flexDirection:"column",gap:10,textDecoration:"none",color:"inherit"}}>
          <div><Badge tone="neutral">{sub}</Badge></div>
          <h3 style={{fontSize:17,margin:0,lineHeight:1.35,fontWeight:"var(--weight-medium)"}}>{t}</h3></a>)}
      </div></Section>}
    <ClosingCta title={live?"Save Your Seat.":"Get The Recording."} secondary={["See All Webinars","resources-webinars.html"]}>
      Sessions are free. Tell us who is joining and we will send the link and the slides.</ClosingCta>
    <PtFooter/></RdShell>;
}

function FieldNotePage(){
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();});
  const {PtFooter,Section,PageHero,CheckRows,ClosingCta}=window;
  const { Badge } = window.SearchableDesignSystem_29e52a;
  const slug=new URLSearchParams(location.search).get("slug")||"";
  const B=RESOURCES.blog||{},posts=B.posts||[];
  const p=posts.find(r=>rdSlug(r[0])===slug);
  if(!p)return <RdMissing what="post" href="resources-blog.html"/>;
  const [title,team,date,dek]=p,x=FIELD_NOTES[slug]||{};
  window.PT_HERO_PHOTO=x.hero||B.hero;
  const others=posts.filter(r=>rdSlug(r[0])!==slug).slice(0,3);
  return <RdShell label={title}>
    <PageHero eyebrow={"Blog · "+team} lead={title} rest="" intro={dek} img={x.hero||B.hero}
      ctaLabel="Talk To The Team" ctaHref="Contact Us.html" secondary={["See All Posts","resources-blog.html"]}
      meta={[["Published",date],["Written By",team],["Length",x.read||"5 min read"]]}/>
    <Section index="01" label="Field Note" right="Full Post">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1.4fr) minmax(0,0.8fr)",gap:48,alignItems:"start"}}>
        <div style={{display:"grid",gap:20,maxWidth:760}}>
          <RdCover src={x.hero} slot={"fieldnote-cover-"+slug} alt={title}/>
          {(x.body&&x.body.length?x.body:[dek]).map(rdP)}</div>
        <RdFacts rows={[["Published",date],["Written By",team],["Length",x.read||"5 min read"]]} cta="Talk To The Team" href="Contact Us.html"/>
      </div>
    </Section>
    {x.takeaways&&x.takeaways.length>0&&<Section index="02" label="Key Takeaways" right="In Short" bg="var(--bg-subtle)"><CheckRows items={x.takeaways}/></Section>}
    {others.length>0&&<Section index={x.takeaways?"03":"02"} label="More Posts" right="Keep Reading">
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:20}}>
        {others.map(([t,tm,d2,dk])=><a key={t} href={"post.html?slug="+rdSlug(t)} style={{...rdPanel,padding:22,display:"flex",flexDirection:"column",gap:10,textDecoration:"none",color:"inherit"}}>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><Badge tone="neutral">{d2}</Badge><Badge tone="neutral">{tm}</Badge></div>
          <h3 style={{fontSize:17,margin:0,lineHeight:1.35,fontWeight:"var(--weight-medium)"}}>{t}</h3>
          <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0,lineHeight:1.6}}>{dk}</p></a>)}
      </div></Section>}
    <ClosingCta title="Subscribe To Field Notes." secondary={["See All Posts","resources-blog.html"]}>
      Twice a week, written by the people on the engagement.</ClosingCta>
    <PtFooter/></RdShell>;
}
Object.assign(window,{WebinarPage,FieldNotePage,WEBINAR_DETAILS,FIELD_NOTES,rdSlug});
