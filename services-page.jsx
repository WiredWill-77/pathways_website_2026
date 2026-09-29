/* Services detail pages. Each service gets its own below-fold composition.
   Copy and figures are illustrative, confirm before publishing. */
const SERVICES_DATA={
  "data-science":{hero:"uploads/Data Models.jpg",name:"Data Science & AI",eyebrow:"Services · Data Science & AI",
    lead:"Models & AI Systems That Reach Production,",rest:"Not Just A Notebook.",
    intro:"Forecasting, credit and fraud scoring, and generative AI copilots and agents, built with your risk and analytics teams and monitored once they are live.",
    meta:[["Typical First Model","6 Weeks"],["Models & Agents Live","48"],["Monitoring","Automated"]],
    stats:[["Median Time To First Model","6 weeks"],["Models & Agents Live","48"],["Documented For Approval","100%"],["Drift Alerts","Automated"]],
    lifecycle:[["Step 01","Frame","We write the decision the model or agent must improve, and the metric that proves it."],
      ["Step 02","Build","Feature engineering and model selection, or grounding and evaluation for an LLM system, against a holdout your team agrees on."],
      ["Step 03","Approve","Documentation pack for risk and governance: assumptions, limits, fairness checks and, for generative systems, guardrails and eval results."],
      ["Step 04","Operate","Deployed behind an API, monitored for drift or hallucination rate, retrained or re-tuned on a schedule you own."]],
    aiServices:[["sparkles","Generative AI & Copilots","Retrieval-augmented assistants grounded in your own documents and systems, not the open internet."],
      ["bot","AI Agents & Automation","Agents that call your APIs and internal tools to complete a workflow end to end, with a human checkpoint where it matters."],
      ["shield-check","Responsible AI & Governance","Evaluation, guardrails, audit trails and cost monitoring for every model and agent you put in front of a customer or a decision."]],
    capabilities:["Demand & Revenue Forecasting","Credit Scoring","Fraud & AML Detection","Customer Segmentation",
      "Churn & Propensity","Price Optimisation","Document Intelligence","Anomaly Detection",
      "Generative AI Copilots","LLM & RAG Applications","AI Agent Workflows"],
    products:["P-Score","Insight Grid"]},

  "analytics-bi":{hero:"uploads/Data Analytics BI.png",name:"Analytics & BI",eyebrow:"Services · Analytics & BI",
    lead:"One Warehouse, One Set Of Definitions,",rest:"Every Report Downstream Of It.",
    intro:"Warehouses, pipelines and dashboards that answer the questions leadership actually asks, with lineage from figure back to source.",
    meta:[["Reports Retired","41"],["Close Cycle","−62%"],["Refresh","Hourly"]],
    layers:[["Ingestion","Batch and streaming pipelines from your core systems, with contract tests on every source."],
      ["Warehouse","Azure, Microsoft Fabric or BigQuery, modelled, partitioned and cost-reviewed monthly."],
      ["Semantic Layer","Certified measures defined once, so finance and operations cannot disagree on revenue."],
      ["Delivery","Power BI, Looker or embedded Insight Grid views, with row-level security intact."],
      ["Quality","Freshness, completeness and reconciliation checks that alert before a stakeholder does."]],
    stats:[["Manual Reports Retired","41"],["Month-End Close","3 Days"],["Certified Measures","260+"],["Lineage Coverage","Full"]],
    products:["Insight Grid"]},

  "apps-software-development":{hero:"https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=1600&q=75&auto=format&fit=crop",name:"Apps & Software Development",eyebrow:"Services · Apps & Software",
    lead:"Software Built By Product Teams,",rest:"Not Ticket Takers.",
    intro:"Custom web, mobile and internal platforms, delivered in fortnightly increments with your users in the room.",
    meta:[["Release Cadence","Fortnightly"],["Handover","Code + Runbooks"],["Stack","Your Cloud"]],
    phases:[["Discovery & Shaping","Two weeks with your users. Journeys, constraints and a shaped backlog with estimates."],
      ["Design & Prototype","Clickable prototype tested with real users before a line of production code."],
      ["Build In Increments","Fortnightly releases into your environment, demoed to the people who will use it."],
      ["Harden & Launch","Load testing, accessibility audit, monitoring and a rehearsed cutover."],
      ["Support & Handover","Runbooks, on-call rehearsal and your engineers pairing with ours until they own it."]],
    stack:["React & TypeScript","Node & .NET","Flutter & React Native","Azure & Google Cloud","Postgres & BigQuery",
      "Terraform","GitHub Actions","OpenAPI"],
    stats:[["Fortnightly Releases","Always"],["Accessibility","WCAG AA"],["Infra As Code","100%"],["Uptime SLA","99.9%"]],
    products:["Insight Grid","eVoucher"]},

  "data-skills-training":{hero:"uploads/Tech Training.jpg",name:"Data Skills Training",eyebrow:"Services · Data Skills Training",
    lead:"From Spreadsheet To SQL To Model,",rest:"With Your Own Data.",
    intro:"Instructor-led programmes for analysts, leaders and graduates, taught on your data so what is learned on Friday is used on Monday.",
    meta:[["People Trained","1,900+"],["Cohort Size","6 to 24"],["Format","On Site Or Remote"]],
    curriculum:[["Data Foundations","Analysts & Graduates","4 half-days","Spreadsheet discipline, data types, joins, first SQL queries."],
      ["SQL & Modelling","Analysts","6 half-days","Window functions, star schemas, building a certified measure."],
      ["Visualisation & Storytelling","Analysts & Marketing","4 half-days","Chart choice, dashboard structure, narrating a number to a board."],
      ["Applied Machine Learning","Analysts & Developers","8 half-days","Feature engineering, model evaluation, deployment basics."],
      ["Data Literacy For Leaders","Executives","2 half-days","Reading a model, questioning a metric, governing an AI programme."]],
    outcomes:[["book-open","Taught On Your Data","Exercises use your warehouse, so the work transfers immediately."],
      ["users","Cohorts Of 6 to 24","Small enough for practical assessment, large enough to change a team."],
      ["award","Assessed On Output","Every module ends in a practical build, marked and returned."]],
    stats:[["People Trained","1,900+"],["Modules","5"],["Completion Rate","94%"],["Per Learner","$320"]],
    products:["Insight Grid"]},

  "staff-augmentation":{hero:"uploads/Pathways Technologies - Staffing.jpeg",heroPos:"center 25%",name:"Staff Augmentation",eyebrow:"Services · Staff Augmentation",
    lead:"Vetted Specialists In Your Squad,",rest:"Working To Your Standards.",
    intro:"Engineers, analysts and scientists embedded in your existing teams within weeks, on your ceremonies and your definition of done.",
    meta:[["Time To Start","2 to 4 Weeks"],["Minimum Term","3 Months"],["Retention","94%"]],
    roles:[["Data Engineer","Pipelines, warehouse modelling, orchestration","From $6,200 / mo","2 weeks"],
      ["Analytics Engineer","Semantic layer, certified measures, testing","From $5,800 / mo","2 weeks"],
      ["Data Scientist","Modelling, evaluation, production monitoring","From $7,400 / mo","3 weeks"],
      ["BI Developer","Power BI, Looker, embedded reporting","From $4,900 / mo","2 weeks"],
      ["Automation Developer","Automation Anywhere bots and integrations","From $5,400 / mo","3 weeks"],
      ["Delivery Lead","Scope, cadence, stakeholder reporting","From $8,100 / mo","4 weeks"]],
    guarantees:["Two-week replacement guarantee","Your tooling, your repo, your standards","Weekly written status to your lead",
      "No sub-contracting without your approval","Knowledge transfer plan from day one","Exit handover at any notice point"],
    stats:[["Placement Retention","94%"],["Time To Start","2 to 4 Weeks"],["Vetting Pass Rate","11%"],["Average Tenure","14 Months"]],
    products:["Insight Grid"]},

  "digital-transformation-advisory":{hero:"uploads/Strategy.jpg",name:"Digital Transformation Advisory",eyebrow:"Services · Advisory",
    lead:"Roadmaps That Survive,",rest:"The First Quarter.",
    intro:"Operating models, target architecture and delivery governance, sequenced so value lands before the budget cycle closes.",
    meta:[["Assessment","2 Weeks"],["Horizon","4 Quarters"],["Output","Costed Plan"]],
    ladder:[["Stage 1 · Reactive","Reporting assembled by hand. No shared definitions. Decisions run on instinct."],
      ["Stage 2 · Managed","A warehouse exists. Reporting is regular but ownership and quality are unclear."],
      ["Stage 3 · Governed","Definitions certified, lineage traceable, access modelled. Reporting is trusted."],
      ["Stage 4 · Predictive","Models in production influencing pricing, risk and planning decisions."],
      ["Stage 5 · Embedded","Data products owned by business teams, measured on outcomes, funded as products."]],
    workstreams:[["compass","Target Architecture","The platform, integration and governance design your roadmap assumes."],
      ["users","Operating Model","Who owns which data product, how funding works, what the delivery cadence is."],
      ["gauge","Value Sequencing","Use cases ordered by value over effort, with a named owner and a measure each."],
      ["clipboard-check","Delivery Governance","Stage gates, reporting and the escalation path that keeps the plan honest."]],
    stats:[["Assessment Duration","2 Weeks"],["Roadmap Horizon","4 Quarters"],["Use Cases Scored","Every One"],["Executive Workshops","2"]],
    products:["Insight Grid","P-Score"]}};

function SvcDataScience({d}){
  const {Frame,Section,SlotFigure,StatBand,Stepper,Chips,ProductStrip,ClosingCta,PtFooter,IconCards}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Lifecycle" right="How A Model Ships">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Four Stages, One Owner Each."
        rest="Nothing moves forward without the metric it is supposed to improve."/>
      <div style={{marginTop:44}}><Stepper steps={d.lifecycle}/></div>
      <div style={{marginTop:44}}><StatBand stats={d.stats}/></div>
    </Section>
    <Section index="02" label="AI Services" right="What We Build Today" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead="Generative AI, Held To The Same Bar."
        rest="Grounded in your data, evaluated before launch, monitored after it."/>
      <div style={{marginTop:36}}><IconCards items={d.aiServices} cols={3}/></div>
    </Section>
    <Section index="03" label="Capabilities" right="What We Model">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:44,alignItems:"stretch"}}>
        <div><TwoToneHeading size="clamp(23px,4.6vw,30px)" lead="Where Models Earn Their Keep."
          rest="Eleven problem types cover most of what clients ask for first."/>
          <div style={{marginTop:26}}><Chips items={d.capabilities}/></div></div>
        <SlotFigure id="svc-ds-lab" caption="Photography: data science team reviewing model output" fill/>
      </div>
    </Section>
    <Section index="04" label="Products" right="What Runs Underneath">
      <ProductStrip names={d.products}/>
    </Section>
    <ClosingCta title="Start With One Decision.">
      Pick the decision you would most like to improve. We will tell you in two weeks whether a model or an AI
      system helps, and what it costs to put one in production.</ClosingCta>
    <PtFooter/></>;
}

function SvcAnalytics({d}){
  const {Section,SlotFigure,StatBand,SplitList,ProductStrip,ClosingCta,PtFooter,QuoteBand}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Architecture" right="Five Layers">
      <SplitList label="The Stack" items={d.layers}/>
      <div style={{marginTop:44}}><SlotFigure id="svc-bi-wall" caption="Screenshot: the reporting wall your teams open each morning"/></div>
    </Section>
    <QuoteBand quote="We stopped arguing about whose number was right in the first month. That alone paid for the platform."
      name="Group Financial Controller" role="Meridian Group"/>
    <Section index="02" label="Outcomes" right="What Changes" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Fewer Reports, More Answers."
        rest="Retiring manual reporting is the fastest measurable win in most engagements."/>
      <div style={{marginTop:40}}><StatBand stats={d.stats}/></div>
      <div style={{marginTop:32}}><ProductStrip names={d.products}/></div>
    </Section>
    <ClosingCta title="Bring Us Your Worst Report.">
      The one assembled by hand every month that nobody trusts. We will show you what it looks like when it
      maintains itself.</ClosingCta>
    <PtFooter/></>;
}

function SvcApps({d}){
  const {Section,SlotFigure,Rail,Chips,StatBand,ProductStrip,ClosingCta,PtFooter}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Delivery" right="Five Phases">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1.15fr) minmax(0,0.85fr)",gap:44,alignItems:"start"}}>
        <div><TwoToneHeading size="clamp(23px,4.6vw,30px)" lead="How We Build."
          rest="Fortnightly increments into your environment, demoed to real users."/>
          <div style={{marginTop:28}}><Rail items={d.phases}/></div></div>
        <div className="pt-sticky" style={{display:"grid",gap:24,position:"sticky",top:110}}>
          <SlotFigure id="svc-app-screen" caption="Screenshot: a shipped product screen" ratio="3 / 4"/>
          <SlotFigure id="svc-app-team" caption="Photography: the delivery team at a sprint review" ratio="4 / 3"/></div>
      </div>
    </Section>
    <Section index="02" label="Stack" right="What We Build With" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead="Boring Technology, Deliberately."
        rest="Chosen so your own engineers can maintain it after handover."/>
      <div style={{marginTop:28}}><Chips items={d.stack}/></div>
      <div style={{marginTop:40}}><StatBand stats={d.stats}/></div>
    </Section>
    <Section index="03" label="Products" right="Platforms We Extend">
      <ProductStrip names={d.products}/>
    </Section>
    <ClosingCta title="Shape It In Two Weeks.">
      A discovery sprint returns a shaped backlog, a clickable prototype and a costed build plan, yours to keep
      whether or not we build it.</ClosingCta>
    <PtFooter/></>;
}

function SvcTraining({d}){
  const {Section,SlotFigure,IconCards,StatBand,ClosingCta,PtFooter,PtButton}=window;
  const { TwoToneHeading, Badge } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Curriculum" right="Five Modules">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Five Modules, Stacked."
        rest="Take one, or run the whole ladder as a cohort programme."/>
      <div style={{marginTop:40,display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:24}}>
        {window.COURSE_ORDER.map(slug=>{const c=window.COURSES[slug];return <div key={slug}
          style={{border:"1px solid var(--border-hairline)",borderRadius:"var(--radius-lg)",overflow:"hidden",display:"flex",flexDirection:"column",background:"var(--surface)"}}>
          <div style={{position:"relative",aspectRatio:"4 / 3",background:"var(--bg-muted)"}}>
            <div style={{position:"absolute",inset:0}}><image-slot id={"course-cover-"+slug} shape="rect" placeholder={"Cover: "+c.title}
              src={slug==="data-foundations"?"uploads/pasted-1790153677902-0.png":undefined}></image-slot></div></div>
          <div style={{padding:22,display:"flex",flexDirection:"column",gap:12,flex:1}}>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><Badge tone="neutral">{c.audience}</Badge><Badge tone="neutral">{c.length}</Badge></div>
            <h3 style={{fontSize:18,margin:0,lineHeight:1.35,fontWeight:"var(--weight-medium)"}}>{c.title}</h3>
            <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",margin:0,flex:1,lineHeight:1.6}}>{c.summary}</p>
            <PtButton tone="secondary" size="sm" arrow style={{alignSelf:"flex-start",marginTop:8}}
              onClick={()=>{location.href=window.ptHref?ptHref("course",slug):"course-"+slug+".html"}}>View Module</PtButton></div>
        </div>;})}
      </div>
      <div style={{marginTop:36}}><StatBand stats={d.stats}/></div>
    </Section>
    <Section index="02" label="Approach" right="How We Teach" bg="var(--bg-subtle)">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,0.9fr) minmax(0,1.1fr)",gap:44,alignItems:"stretch"}}>
        <SlotFigure id="svc-train-room" caption="Photography: a training cohort mid-session" fill/>
        <div><TwoToneHeading size="clamp(23px,4.6vw,28px)" lead="Assessed On Output."
          rest="Every module ends in a practical build, marked and returned with feedback."/>
          <div style={{marginTop:26,display:"grid",gap:16}}>
            <IconCards items={d.outcomes} cols={1} pad={22}/></div></div>
      </div>
    </Section>
    <ClosingCta title="Run A Cohort Next Quarter." secondary={["See Pricing","Pricing.html"]}>
      Tell us the team and the level. We will propose the module ladder, the cohort dates and the assessment plan.</ClosingCta>
    <PtFooter/></>;
}

function SvcStaffAug({d}){
  const {Section,SlotFigure,DataTable,CheckRows,StatBand,ClosingCta,PtFooter,QuoteBand}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Roles" right="Who You Can Add">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Six Roles, Rates And Lead Times."
        rest="Priced monthly, minimum three months, replaceable within two weeks."/>
      <div style={{marginTop:40}}>
        <DataTable head={["Role","Focus","Rate","Lead Time"]} rows={d.roles}/></div>
    </Section>
    <QuoteBand quote="They joined our stand-ups in week one and shipped to our repo in week two. It never felt like an outside team."
      name="Head of Engineering" role="Union Bank"/>
    <Section index="02" label="Guarantees" right="How We Work" bg="var(--bg-subtle)">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1.1fr) minmax(0,0.9fr)",gap:44,alignItems:"start"}}>
        <div><TwoToneHeading size="clamp(23px,4.6vw,28px)" lead="What We Commit To."
          rest="Written into every statement of work."/>
          <div style={{marginTop:26}}><CheckRows items={d.guarantees} cols={1}/></div></div>
        <div style={{display:"grid",gap:24}}>
          <SlotFigure id="svc-staff-team" caption="Photography: embedded engineers with the client team" ratio="4 / 3"/>
          <StatBand stats={d.stats}/></div>
      </div>
    </Section>
    <ClosingCta title="Tell Us The Gap." secondary={["See Pricing","Pricing.html"]}>
      Send the role, the stack and the start date. We will come back with two or three profiles and their
      availability.</ClosingCta>
    <PtFooter/></>;
}

function SvcAdvisory({d}){
  const {Section,SlotFigure,IconCards,StatBand,ProductStrip,ClosingCta,PtFooter}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Maturity" right="Where You Are Now">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Five Stages."
        rest="We assess honestly, then sequence the move to the very next stage."/>
      <div style={{marginTop:44,display:"grid",gap:0}}>
        {d.ladder.map(([t,x],i)=><div key={t} className="pt-ladder" style={{display:"grid",gridTemplateColumns:"minmax(0,240px) minmax(0,1fr)",
          gap:28,padding:"22px 0",borderTop:"1px solid var(--grid-line)",alignItems:"start"}}>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <span style={{height:8,borderRadius:99,width:24+i*22,background:i>2?"var(--primary)":"var(--secondary-text)",
              flex:"0 0 auto"}}/>
            <span style={{fontSize:16,fontWeight:"var(--weight-medium)"}}>{t}</span></div>
          <p style={{fontSize:15,color:"var(--text-secondary)",margin:0,lineHeight:1.7}}>{x}</p></div>)}
      </div>
      <div style={{marginTop:40}}><StatBand stats={d.stats} tone="dark"/></div>
    </Section>
    <Section index="02" label="Workstreams" right="What We Produce" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead="Four Workstreams, One Costed Plan."
        rest="Everything lands as a document your board can act on."/>
      <div style={{marginTop:40}}><IconCards items={d.workstreams} cols={2}/></div>
      <div style={{marginTop:32}}><SlotFigure id="svc-adv-workshop" caption="Photography: an executive alignment workshop"/></div>
    </Section>
    <Section index="03" label="Products" right="What We Recommend">
      <ProductStrip names={d.products}/>
    </Section>
    <ClosingCta title="Book A Two-Week Assessment." secondary={["See Pricing","Pricing.html"]}>
      Fixed price, fixed scope: current-state assessment, target architecture, sequenced roadmap and the operating
      model to run it.</ClosingCta>
    <PtFooter/></>;
}

const SERVICE_VIEWS={"data-science":SvcDataScience,"analytics-bi":SvcAnalytics,
  "apps-software-development":SvcApps,"data-skills-training":SvcTraining,
  "staff-augmentation":SvcStaffAug,"digital-transformation-advisory":SvcAdvisory};

function ServiceApp(){
  const {PageHero}=window;
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();});
  const slug=(window.PT_PAGE||{}).slug;
  const d=SERVICES_DATA[slug],View=SERVICE_VIEWS[slug];
  if(!d)return <div style={{padding:60}}>Unknown service page.</div>;
  window.PT_HERO_PHOTO=d.hero;
  window.PT_HERO_POS=d.heroPos||"center";
  return <><Header/><main id="main">
    <PageHero eyebrow={d.eyebrow} lead={d.lead} rest={d.rest} intro={d.intro} meta={d.meta} img={d.hero}/>
    <View d={d}/></main></>;
}
Object.assign(window,{ServiceApp,SERVICES_DATA});
