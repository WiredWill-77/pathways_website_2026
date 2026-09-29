/* Single event detail page. event.html?slug=<event-slug>. Agenda, venue and timing are illustrative, confirm before publishing. */
const evSlug=s=>String(s||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const EVENT_DETAILS={
  "data-ai-summit-east-africa":{time:"08:30 to 17:30 EAT",venue:"Kenyatta International Convention Centre",
    summary:"A full day of keynotes and hands-on workshop tracks for data, analytics and AI teams across the region.",
    about:["The summit brings together data leaders, analysts and engineers from banking, public sector, health and manufacturing. Our practice leads run two workshop tracks alongside the main stage.",
      "Track one covers building a governed warehouse on Microsoft Fabric. Track two covers moving a machine learning model from notebook to production with monitoring in place."],
    agenda:[["08:30","Registration and coffee"],["09:15","Opening keynote: where AI is paying off in East Africa"],["10:30","Workshop tracks, session one"],["12:30","Lunch and partner floor"],["13:45","Workshop tracks, session two"],["15:30","Panel: governing AI in regulated industries"],["17:00","Closing remarks and networking"]],
    audience:["Heads of data and analytics","BI developers and data engineers","Risk, finance and operations leaders","Anyone scoping a first AI use case"]},
  "cfo-roundtable-the-three-day-close":{time:"07:30 to 10:00 EAT",venue:"Private dining room, Westlands",
    summary:"A breakfast roundtable for finance leaders working to shorten the month-end close to three days.",
    about:["Sixteen CFOs and finance directors, one topic and no slides. Each attendee shares where their close gets stuck, and the group works through what has helped others.",
      "A Pathways practice lead facilitates and shares anonymised patterns from recent finance automation work."],
    agenda:[["07:30","Arrival and breakfast"],["08:00","Round the table: where your close slows down"],["08:45","Patterns that worked: reconciliation, accruals and reporting packs"],["09:30","Open discussion and next steps"]],
    audience:["CFOs and finance directors","Financial controllers","Heads of FP&A"]},
  "public-sector-data-residency-briefing":{time:"10:00 to 13:00 EAT",venue:"Konza Technopolis, Innovation Centre",
    summary:"A briefing on data residency, sovereign cloud options and what the Data Protection Act means for public systems.",
    about:["Run with Konza Technopolis, this briefing walks through the practical options for hosting government data in country, with cost and compliance trade-offs laid out side by side.",
      "Attendees get a reference architecture pack and a checklist they can take back to their ICT and legal teams."],
    agenda:[["10:00","Welcome from Konza Technopolis"],["10:20","Data residency requirements in plain terms"],["11:00","Hosting options compared: cost, control and compliance"],["12:00","Case walk-through: a national programme in production"],["12:40","Questions and close"]],
    audience:["Government ICT directors","Data protection officers","Programme and procurement leads"]},
  "manufacturing-analytics-clinic":{time:"09:00 to 15:00 EAT",venue:"Mombasa, venue confirmed on booking",
    summary:"A hands-on clinic. Bring a real plant dataset and leave with a working dashboard or a clear diagnosis.",
    about:["Plant and operations teams work in small groups with our analysts on their own production, quality or maintenance data.",
      "By the end of the day each team has either a working prototype or a written diagnosis of what is blocking better reporting."],
    agenda:[["09:00","Introductions and dataset check"],["09:30","Working session one: cleaning and modelling"],["12:00","Lunch"],["13:00","Working session two: building the view"],["14:30","Show and tell"]],
    audience:["Plant and operations managers","Quality and maintenance engineers","Analysts supporting manufacturing"]},
  "microsoft-fabric-build-day":{time:"09:00 to 16:30 EAT",venue:"Kampala, partner venue",
    summary:"A joint build day with Microsoft. Stand up a working lakehouse and report in Fabric in a single day.",
    about:["Engineers from Pathways and Microsoft guide attendees through a full Fabric build on sample data, from ingestion to a published Power BI report.",
      "Bring a laptop with a work account. Trial capacity is provided on the day."],
    agenda:[["09:00","Fabric overview and environment setup"],["10:00","Ingestion with pipelines and dataflows"],["12:00","Lunch"],["13:00","Lakehouse modelling and semantic models"],["15:00","Publishing and governance"],["16:00","Wrap up and next steps"]],
    audience:["Data engineers and BI developers","Platform and cloud architects","Teams evaluating Fabric"]},
  "year-in-review-what-landed":{time:"18:00 to 21:00 EAT",venue:"Nairobi, venue confirmed on invitation",
    summary:"An evening with clients and partners looking back on the projects that shipped this year.",
    about:["Short talks from client teams on what they delivered, what it changed, and what they would do differently.",
      "Followed by dinner and time with the Pathways delivery teams."],
    agenda:[["18:00","Arrival and drinks"],["18:45","Client talks: what landed this year"],["19:45","Dinner"],["21:00","Close"]],
    audience:["Pathways clients and partners","Invited guests"]}
};

function EventPage(){
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();});
  const {Header,PtFooter,Section,PageHero,CheckRows,ClosingCta,PtButton}=window;
  const { Badge } = window.SearchableDesignSystem_29e52a;
  const slug=new URLSearchParams(location.search).get("slug")||"";
  const ev=(RESOURCES.events||{}),list=ev.schedule||[];
  const row=list.find(r=>evSlug(r[1])===slug);
  if(!row)return <><Header/><main id="main" style={{padding:"120px 24px",textAlign:"center"}}>
    <p style={{color:"var(--text-secondary)"}}>This event is no longer listed.</p>
    <PtButton tone="secondary" onClick={()=>{location.href="resources-events.html"}}>See All Events</PtButton></main></>;
  const [date,name,city,format]=row;
  const x=EVENT_DETAILS[slug]||{};
  const kind=String(format||"").split("·")[0].trim();
  const md=s=>window.ptMd?ptMd(s):s;
  window.PT_HERO_PHOTO=x.hero||ev.hero;
  const others=list.filter(r=>evSlug(r[1])!==slug).slice(0,3);
  const panel={border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-lg)",background:"var(--surface)"};
  return <><Header/><main id="main" data-screen-label={name}>
    <PageHero eyebrow={"Event · "+(kind||"Event")} lead={name} rest={city} intro={x.summary||format} img={x.hero||ev.hero}
      ctaLabel="Request A Seat" ctaHref="Contact Us.html" secondary={["See All Events","resources-events.html"]}
      meta={[["Date",date],["City",city],["Format",kind||format]]}/>
    <Section index="01" label="About" right="The Session">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1.4fr) minmax(0,0.8fr)",gap:48,alignItems:"start"}}>
        <div style={{display:"grid",gap:18}}>
          <div style={{position:"relative",aspectRatio:"16 / 9",borderRadius:"var(--radius-lg)",overflow:"hidden",background:"var(--bg-muted)",marginBottom:10}}>
            {x.hero?<img src={x.hero} alt={name} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
              :<div style={{position:"absolute",inset:0}}><image-slot id={"event-cover-"+name.replace(/\W+/g,"-")} shape="rect" placeholder={"Cover: "+name}></image-slot></div>}
          </div>
          {(x.about&&x.about.length?x.about:[format]).map((p,i)=><p key={i} style={{fontSize:17,color:"var(--text-secondary)",lineHeight:1.75,margin:0}}>{md(p)}</p>)}
        </div>
        <aside style={{...panel,padding:24,display:"grid",gap:16,position:"sticky",top:110}}>
          {[["Date",date],["Time",x.time],["Venue",x.venue],["City",city],["Format",format]].filter(r=>r[1]).map(([k,v])=>
            <div key={k} style={{display:"grid",gap:4}}>
              <span style={{fontSize:12,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"var(--tracking-eyebrow)"}}>{k}</span>
              <span style={{fontSize:15,color:"var(--text-primary)",lineHeight:1.45}}>{v}</span></div>)}
          <PtButton tone="primary" size="md" arrow onClick={()=>{location.href="Contact Us.html"}}>Request A Seat</PtButton>
        </aside>
      </div>
    </Section>
    {x.agenda&&x.agenda.length>0&&<Section index="02" label="Agenda" right="On The Day" bg="var(--bg-subtle)">
      <div style={{...panel,overflow:"hidden",maxWidth:860}}>
        {x.agenda.map(([t,item],i)=><div key={i} style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:20,padding:"16px 22px",
          borderTop:i?"1px solid var(--grid-line)":"none",alignItems:"baseline"}}>
          <span style={{fontFamily:"var(--font-mono)",fontSize:13.5,color:"var(--secondary-text)"}}>{t}</span>
          <span style={{fontSize:15.5,color:"var(--text-primary)",lineHeight:1.5}}>{item}</span></div>)}
      </div>
    </Section>}
    {x.audience&&x.audience.length>0&&<Section index={x.agenda&&x.agenda.length?"03":"02"} label="Who Should Attend" right="Audience">
      <CheckRows items={x.audience}/></Section>}
    {others.length>0&&<Section index="04" label="More Events" right="Also Coming Up" bg="var(--bg-subtle)">
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:20}}>
        {others.map(([d2,n2,c2,f2])=><a key={n2} href={"event.html?slug="+evSlug(n2)} style={{...panel,padding:22,display:"flex",flexDirection:"column",gap:10,textDecoration:"none",color:"inherit"}}>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><Badge tone="neutral">{d2}</Badge><Badge tone="neutral">{c2}</Badge></div>
          <h3 style={{fontSize:17,margin:0,lineHeight:1.35,fontWeight:"var(--weight-medium)"}}>{n2}</h3>
          <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0,lineHeight:1.6}}>{f2}</p></a>)}
      </div></Section>}
    <ClosingCta title="Request A Seat." secondary={["See All Events","resources-events.html"]}>
      Seats are capped for most sessions. Tell us which date suits and we will confirm availability.</ClosingCta>
    <PtFooter/></main></>;
}
Object.assign(window,{EventPage,EVENT_DETAILS,evSlug});
