/* Data Skills Training module pages. window.PT_PAGE.slug picks the course.
   Coursera-style landing: outcomes, skills, syllabus, audience/prereqs, instructor note, FAQ.
   Instructor and testimonial copy is illustrative — confirm names and quotes before publishing. */
const COURSE_ORDER=["data-foundations","sql-modelling","visualisation-storytelling","applied-machine-learning","data-literacy-for-leaders"];

const COMMON_FAQS=[
  ["Is this delivered on site or remote?","Both. We agree the mix with you: discussion-heavy sessions on site, build time remote."],
  ["What do we need before the first session?","Read access to a sample of your own data and a laptop with the tools installed. We send setup instructions two weeks out."],
  ["Can this run for just our team?","Yes. Every cohort is private to one organisation; we do not mix learners across clients."]];

const COURSES={
  "data-foundations":{title:"Data Foundations",audience:"Analysts & Graduates",length:"4 half-days",level:"Foundation",
    summary:"Spreadsheet discipline, data types, joins, first SQL queries.",
    eyebrow:"Data Skills Training · Module",lead:"Data Foundations.",rest:"From Spreadsheet To First Query.",
    intro:"The starting module for analysts and graduates: spreadsheet discipline, how relational data actually joins together, and enough SQL to stop waiting on someone else to pull a number.",
    skills:["Spreadsheet Hygiene","Primary & Foreign Keys","SQL Select & Where","Joins","Aggregation"],
    prereqs:"No prior SQL required. Comfortable using a spreadsheet day to day.",
    outline:[["Spreadsheet Discipline","Naming, structure and validation habits that stop errors from reaching a downstream report.","Half-day · 3 exercises"],
      ["Data Types & Joins","Primary keys, joins and the relational logic every later module assumes.","Half-day · 4 exercises"],
      ["First SQL Queries","Select, filter and aggregate: enough SQL to answer a question without waiting on someone else.","Two half-days · 5 exercises"]],
    outcomes:["Writes and checks a SQL query unsupervised","Understands join logic well enough to read a schema","Ready for SQL & Modelling"]},

  "sql-modelling":{title:"SQL & Modelling",audience:"Analysts",length:"6 half-days",level:"Intermediate",
    summary:"Window functions, star schemas, building a certified measure.",
    eyebrow:"Data Skills Training · Module",lead:"SQL & Modelling.",rest:"From Query To Certified Measure.",
    intro:"For analysts who already write SQL: window functions, star schema design, and how to build a measure the whole business agrees on.",
    skills:["Window Functions","Star Schema Design","Certified Measures","Query Performance","Data Modelling"],
    prereqs:"Completed Data Foundations or equivalent: comfortable with select, where and basic joins.",
    outline:[["Window Functions","Running totals, ranking and period comparisons without exporting to a spreadsheet.","Two half-days · 4 exercises"],
      ["Star Schema Design","Facts, dimensions and the modelling choices that keep a warehouse fast and legible.","Two half-days · 3 exercises"],
      ["Building A Certified Measure","Defining a metric once, documenting it, and retiring the versions that disagreed with it.","Two half-days · 2 exercises"]],
    outcomes:["Can model a star schema from a source system","Ships a certified measure with documentation","Ready for Visualisation & Storytelling"]},

  "visualisation-storytelling":{title:"Visualisation & Storytelling",audience:"Analysts & Marketing",length:"4 half-days",level:"Intermediate",
    summary:"Chart choice, dashboard structure, narrating a number to a board.",
    eyebrow:"Data Skills Training · Module",lead:"Visualisation & Storytelling.",rest:"From Chart To Argument.",
    intro:"Turning a certified measure into something a board acts on: the right chart for the question, a dashboard that reads top to bottom, and a narrative that survives the first hard question.",
    skills:["Chart Selection","Dashboard Layout","Data Storytelling","Stakeholder Framing","Power BI / Looker"],
    prereqs:"Comfortable pulling a query result into a chart tool. No design background required.",
    outline:[["Chart Choice","Matching the shape of a question to the chart that answers it, and the ones to avoid.","Half-day · 3 exercises"],
      ["Dashboard Structure","Layout, hierarchy and the difference between a dashboard built to browse and one built to decide.","Half-day · 3 exercises"],
      ["Narrating A Number","Framing a metric for a room that will push back, with the one slide that survives the meeting.","Two half-days · 2 exercises"]],
    outcomes:["Builds a dashboard a stakeholder can read unassisted","Can defend a number in front of a room","Ready for Applied Machine Learning"]},

  "applied-machine-learning":{title:"Applied Machine Learning",audience:"Analysts & Developers",length:"8 half-days",level:"Advanced",
    summary:"Feature engineering, model evaluation, deployment basics.",
    eyebrow:"Data Skills Training · Module",lead:"Applied Machine Learning.",rest:"From Model To Something Live.",
    intro:"The bridge from analytics to data science: building features from a warehouse you already trust, evaluating a model honestly, and what it takes to put one behind an API.",
    skills:["Feature Engineering","Model Evaluation","Holdout Design","Deployment Basics","Monitoring & Drift"],
    prereqs:"Completed SQL & Modelling. Basic Python or R helps but is not required.",
    outline:[["Feature Engineering","Turning certified measures and raw events into inputs a model can actually use.","Three half-days · 4 exercises"],
      ["Model Evaluation","Holdouts, baselines and the metrics that catch a model lying to you before production does.","Three half-days · 3 exercises"],
      ["Deployment Basics","What changes once a notebook becomes an API: versioning, monitoring and retraining.","Two half-days · 2 exercises"]],
    outcomes:["Builds a feature set from warehouse data","Evaluates a model against a proper baseline","Ready for production, or Data Literacy For Leaders"]},

  "data-literacy-for-leaders":{title:"Data Literacy For Leaders",audience:"Executives",length:"2 half-days",level:"Executive",
    summary:"Reading a model, questioning a metric, governing an AI programme.",
    eyebrow:"Data Skills Training · Module",lead:"Data Literacy For Leaders.",rest:"Enough To Govern What You Approve.",
    intro:"A short, direct module for executives: enough to read a model's output critically, question a metric before it reaches a board pack, and govern an AI programme without needing to code.",
    skills:["Reading Model Output","Metric Scrutiny","AI Governance","Risk Framing","Approval Gates"],
    prereqs:"None. Built for executives with no coding background.",
    outline:[["Reading A Model","What a model's output can and cannot tell you, in language that survives a board meeting.","Half-day · 2 exercises"],
      ["Questioning A Metric","The three questions that catch a misleading number before it becomes a decision.","Half-day · 2 exercises"],
      ["Governing An AI Programme","Risk, ownership and the approval gates a programme needs before it touches a customer.","Half-day · 1 exercise"]],
    outcomes:["Can question a model or metric with confidence","Knows what governance an AI programme needs","Ready to sponsor a Digital Transformation Advisory engagement"]}
};

function ModuleProgress({slug}){
  const {Frame}=window;
  const i=COURSE_ORDER.indexOf(slug);
  return <Frame bg="var(--bg-page)"><div style={{padding:"20px 0",display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
    <span style={{fontSize:12.5,color:"var(--text-muted)",whiteSpace:"nowrap"}}>Module {i+1} of {COURSE_ORDER.length} in the ladder</span>
    <div style={{flex:"0 1 260px",height:4,borderRadius:99,background:"var(--grid-line)",overflow:"hidden"}}>
      <div style={{height:"100%",width:((i+1)/COURSE_ORDER.length*100)+"%",background:"var(--primary)"}}/></div>
    <div style={{display:"flex",gap:6,marginLeft:"auto"}}>
      {COURSE_ORDER.map((s,j)=><span key={s} title={COURSES[s].title} style={{width:7,height:7,borderRadius:99,
        background:j===i?"var(--primary)":"var(--grid-line)"}}/>)}</div>
  </div></Frame>;
}

function Syllabus({items}){
  const [open,setOpen]=React.useState(0);
  return <div style={{border:"1px solid var(--grid-line)",borderRadius:"var(--radius-md)",overflow:"hidden",background:"var(--stone-0)"}}>
    {items.map(([t,x,meta],i)=><div key={t} style={{borderTop:i?"1px solid var(--grid-line)":"none"}}>
      <button type="button" onClick={()=>setOpen(open===i?-1:i)} style={{display:"flex",alignItems:"center",gap:18,width:"100%",
        padding:"18px 22px",background:"none",border:"none",cursor:"pointer",textAlign:"left",font:"inherit",color:"inherit"}}>
        <span style={{fontSize:22,fontWeight:600,color:"var(--primary)",letterSpacing:"-0.02em",flex:"0 0 30px"}}>{String(i+1).padStart(2,"0")}</span>
        <span style={{flex:1}}>
          <span style={{display:"block",fontSize:16.5,fontWeight:"var(--weight-medium)"}}>{t}</span>
          <span style={{display:"block",fontSize:12.5,color:"var(--text-muted)",marginTop:3}}>{meta}</span></span>
        <i data-lucide={open===i?"chevron-up":"chevron-down"} style={{width:18,height:18,color:"var(--text-muted)",flex:"0 0 auto"}}></i>
      </button>
      {open===i&&<p style={{margin:"0 22px 20px 68px",fontSize:15,color:"var(--text-secondary)",lineHeight:1.7,maxWidth:640}}>{x}</p>}
    </div>)}
  </div>;
}

function CoursePage(){
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();});
  const slug=(window.PT_PAGE||{}).slug;
  const c=COURSES[slug];
  const {Section,SlotFigure,Chips,CheckRows,StatBand,ClosingCta,PtFooter,QuoteBand,PtButton}=window;
  const { TwoToneHeading, FaqItem } = window.SearchableDesignSystem_29e52a;
  if(!c)return <div style={{padding:60}}>Unknown course.</div>;
  const others=COURSE_ORDER.filter(s=>s!==slug);
  return <><Header/><main id="main" data-screen-label={c.title}>
    <PageHero eyebrow={c.eyebrow} lead={c.lead} rest={c.rest} intro={c.intro} ctaLabel="Enroll Now" ctaHref={"checkout.html?course="+slug}
      meta={[["Level",c.level],["Audience",c.audience],["Length",c.length],["Format","On Site Or Remote"]]}
      secondary={["See All Modules","services-data-skills-training.html"]}/>
    <ModuleProgress slug={slug}/>
    <Section index="01" label="Outcomes" right="What You'll Learn">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={780} lead="What You Can Do After."
        rest="Assessed on a practical build, not a quiz."/>
      <div style={{marginTop:28}}><CheckRows items={c.outcomes} cols={1}/></div>
      <div style={{marginTop:32}}>
        <div style={{fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",
          color:"var(--text-muted)",marginBottom:14}}>Skills You'll Gain</div>
        <Chips items={c.skills}/></div>
    </Section>
    <Section index="02" label="Syllabus" right="How It Breaks Down" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead="Three Parts, In Order."
        rest="Each builds on the last; nothing here is optional context."/>
      <div style={{marginTop:36}}><Syllabus items={c.outline}/></div>
    </Section>
    <Section index="03" label="Fit" right="Who This Is For">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,0.9fr) minmax(0,1.1fr)",gap:44,alignItems:"stretch"}}>
        <SlotFigure id={"course-fit-"+slug} caption="Photography: a cohort mid-session" fill/>
        <div><TwoToneHeading size="clamp(23px,4.6vw,28px)" lead="Built For This Audience."
            rest={c.audience+"."}/>
          <p style={{fontSize:15,color:"var(--text-secondary)",lineHeight:1.7,marginTop:16}}>
            <strong style={{color:"var(--text-primary)",fontWeight:"var(--weight-medium)"}}>Prerequisites: </strong>{c.prereqs}</p>
          <p style={{fontSize:15,color:"var(--text-secondary)",lineHeight:1.7,marginTop:12}}>
            Every module is led by a Pathways consultant who is currently shipping this kind of work for a client,
            not a full-time trainer reading slides. Cohorts run private to one organisation, 6 to 24 learners.</p>
        </div>
      </div>
    </Section>
    <QuoteBand quote="The team walked in knowing spreadsheets and walked out writing SQL against our own warehouse in week two. It changed how fast we could staff a request."
      name="L&D Lead" role="Illustrative client quote"/>
    <Section index="04" label="Track Record" right="Data Skills Training" bg="var(--bg-subtle)">
      <StatBand stats={[["People Trained","1,900+"],["Cohort Size","6 to 24"],["Completion Rate","94%"],["Per Learner","$320"]]}/>
    </Section>
    <Section index="05" label="Questions" right="Before You Book">
      <div style={{maxWidth:760}}>
        {COMMON_FAQS.map((f,i)=><FaqItem key={f[0]} question={f[0]} defaultOpen={i===0}>{f[1]}</FaqItem>)}</div>
    </Section>
    <Section index="06" label="Ladder" right="Other Modules" bg="var(--bg-subtle)">
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
        {others.map(s=><a key={s} href={window.ptHref?ptHref("course",s):"course-"+s+".html"} style={{textDecoration:"none",color:"inherit",
          padding:"20px 22px",border:"1px solid var(--grid-line)",borderRadius:"var(--radius-md)",display:"flex",
          flexDirection:"column",gap:6}}>
          <span style={{fontSize:11.5,color:"var(--text-muted)"}}>{COURSES[s].length} · {COURSES[s].level}</span>
          <span style={{fontSize:15.5,fontWeight:"var(--weight-medium)"}}>{COURSES[s].title}</span></a>)}
      </div>
    </Section>
    <ClosingCta title="Run This Module With Your Team." secondary={["See Pricing","Pricing.html"]}>
      Tell us the cohort size and the start date. We will confirm dates and send the pre-work. Ready now?
      <a href={"checkout.html?course="+slug} style={{marginLeft:6,color:"#FFFFFF",fontWeight:600,textDecoration:"underline"}}>Enroll Now &rarr;</a></ClosingCta>
    <PtFooter/></main></>;
}
Object.assign(window,{CoursePage,COURSES,COURSE_ORDER});
