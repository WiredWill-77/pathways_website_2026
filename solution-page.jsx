/* Solutions destination pages. window.PT_PAGE = {type:"industry"|"role", slug}.
   Every page uses the same hero and a DIFFERENT below-fold composition.
   Copy and figures are illustrative, confirm before publishing. */
const INDUSTRIES={
  "banking-finance":{hero:"uploads/pasted-1789830216776-0.png",name:"Banking & Finance",board:"Banking & Finance",
    lead:"Risk, Regulation And Revenue,",rest:"On One Set Of Numbers.",
    intro:"Retail banks, insurers and microfinance lenders run on data that has to satisfy a regulator, a risk committee and a branch manager at the same time. We build the layer that satisfies all three.",
    challenges:[["shield-alert","Reporting That Cannot Be Audited","Month-end assembled from spreadsheets, with no lineage from figure back to source."],
      ["scale","Model Governance","Credit and fraud models built in isolation, then blocked at approval because nobody can explain them."],
      ["users","Fragmented Customer View","Product silos mean the same customer is counted three times and served once."]],
    delivers:[["Regulatory Reporting Layer","Definitions agreed once, versioned, and traceable from report to raw record."],
      ["Credit & Fraud Models","Built with your risk team, documented for approval, monitored in production."],
      ["Customer 360","One identity across accounts, channels and products, with consent tracked."],
      ["Finance Automation","Reconciliation and close automated with Automation Anywhere bots."]],
    outcomes:[["Close Cycle","−62%"],["Reports Retired","41"],["Model Approval Rate","91%"],["Straight-Through Processing","74%"]],
    quote:["We stopped arguing about whose number was right in the first month. Risk and finance now open the same report.","Group Financial Controller","Union Bank"],
    products:["Insight Grid","P-Score"],ttv:"9 weeks",coverage:"92%"},

  "healthcare-pharmaceuticals":{hero:"uploads/lobby-sign-english-2800px.png",name:"Healthcare & Pharmaceuticals",board:"Healthcare & Pharmaceuticals",
    lead:"Clinical & Commercial Data,",rest:"Governed End To End.",
    intro:"Hospital groups, insurers and pharmaceutical distributors hold some of the most sensitive data in any sector. We make it usable without loosening a single control.",
    challenges:[["lock","Consent And Access","Clinical data that cannot be analysed because access rules were never modelled."],
      ["activity","Capacity Blind Spots","Bed, theatre and staffing decisions made on yesterday's paper report."],
      ["package","Supply Visibility","Stock-outs discovered at the dispensary, well past the point planning could have caught them."]],
    delivers:[["Governed Clinical Warehouse","Row-level access, consent flags and full audit history on every extract."],
      ["Capacity & Flow Analytics","Bed utilisation, theatre scheduling and staffing forecasts by site."],
      ["Commercial Analytics","Territory, formulary and distributor performance in one scorecard."],
      ["Regulatory Reporting","Submissions assembled once from the warehouse and reused every cycle."]],
    outcomes:[["Records Governed","77%"],["Readout Lag","−41%"],["Pathways Instrumented","128"],["Sites Live","9"]],
    quote:["Governance was the reason we had never analysed this data. They modelled the consent rules first, and everything else followed.","Chief Medical Information Officer","Kelo Health"],
    products:["Insight Grid","P-Score"],ttv:"12 weeks",coverage:"77%"},

  "government-public-sector":{hero:"uploads/Kenya Government.avif",name:"Government & Public Sector",board:"Government & Public Sector",
    lead:"Service Delivery Data,",rest:"Made Public By Default.",
    intro:"Ministries, counties and agencies are measured on service delivery and transparency. We build the reporting spine that makes both defensible, hosted in Kenya where residency demands it.",
    challenges:[["building","Data Across Agencies","Twenty-three agencies, twenty-three definitions of the same service."],
      ["file-clock","Manual Publication","Open-data commitments met by hand, quarterly, at high cost."],
      ["banknote","Budget Variance","Spend reported late enough that correction is no longer possible."]],
    delivers:[["Shared Definitions Layer","One agreed set of service and beneficiary definitions across agencies."],
      ["Citizen Service Dashboards","Case volumes, resolution times and backlog by service and region."],
      ["Open Data Pipelines","Scheduled publication with provenance, so transparency is not a manual project."],
      ["Programme Disbursement","eVoucher for issuance, redemption and daily reconciliation at national scale."]],
    outcomes:[["Datasets Published","68%"],["Median Resolution","5.8 Days"],["Agencies Aligned","23"],["Citizen Requests Closed","91%"]],
    compliance:[["Data Residency","Hosted at Konza Technopolis, Kenya"],["Legal Basis","Kenya Data Protection Act 2019"],
      ["Publication","Scheduled, with provenance metadata"],["Audit","Every figure traceable to source record"]],
    products:["eVoucher","Insight Grid"],ttv:"14 weeks",coverage:"68%"},

  "manufacturing-consumer-goods":{hero:"uploads/manufacturing.jpg",name:"Manufacturing & Consumer Goods",board:"Manufacturing & Consumer Goods",
    lead:"Demand, Quality And Supply,",rest:"Visible While You Can Still Act.",
    intro:"Plants and distributors lose margin in the gap between what was planned and what actually happened. We close that gap down to a single shift.",
    challenges:[["trending-down","Forecast Error","Demand plans built in spreadsheets that nobody trusts by week three."],
      ["wrench","Unplanned Downtime","Line stoppages explained after the fact, never predicted."],
      ["truck","Supplier Performance","No comparable score across suppliers, so negotiation runs on anecdote."]],
    delivers:[["Demand Planning Models","SKU-week forecasting with accuracy tracked against the plan of record."],
      ["Plant Performance Analytics","OEE, first-pass yield and downtime by line, shift and cause."],
      ["Supplier Scorecards","P-Score benchmarking across price, quality and reliability."],
      ["Route To Market","Distributor and retail execution reporting down to the outlet."]],
    outcomes:[["Forecast Accuracy","81%"],["Downtime","−28%"],["First-Pass Yield","96%"],["Stockouts","−34%"]],
    signals:["Line Telemetry","MES Events","Quality Inspections","Goods Receipts","Distributor Sell-Out","Maintenance Logs"],
    products:["P-Score","Insight Grid"],ttv:"8 weeks",coverage:"81%"},

  "transport-logistics":{hero:"uploads/fleet-management.webp",name:"Transport & Logistics",board:"Transport & Logistics",
    lead:"Fleet & Network Performance,",rest:"In Near Real Time.",
    intro:"Operators sit on telemetry from three vendor portals and still cannot answer which corridor lost money last week. We consolidate it into one live operating picture.",
    challenges:[["split","Telemetry In Silos","Each vendor portal tells part of the story, none tells the route economics."],
      ["clock","On-Time Performance","Delays reported by exception, after the customer has already called."],
      ["fuel","Cost Per Kilometre","Fuel, maintenance and utilisation tracked separately, never combined."]],
    delivers:[["Live Network Board","On-time arrival, corridor status and exception alerts on one screen."],
      ["Route Economics","Cost per kilometre by vehicle, route and driver, reconciled to finance."],
      ["Predictive Maintenance","Failure risk scoring from telemetry, scheduled into the maintenance window."],
      ["Customer Notifications","Arrival and exception messaging through Infobip channels."]],
    outcomes:[["On-Time Arrival","88%"],["Cost Per Km","−17%"],["Events Ingested","12B / mo"],["Fleet Uptime","97%"]],
    quote:["The board runs on the corridor view now. Nobody opens the vendor portals any more.","Network Operations Director","NORTHPORT"],
    products:["Insight Grid","P-Score"],ttv:"7 weeks",coverage:"88%"}};

const ROLES={
  "business-leader":{photo:"https://images.unsplash.com/photo-1622295023825-6e319464b810?w=1600&q=75&auto=format&fit=crop",hero:"uploads/business-leader-hero.jpg",label:"For The Business Leader",caption:"a business leader reviewing the executive scorecard",name:"Business Leader",icon:"briefcase",
    lead:"One Version Of The Numbers,",rest:"Ready Before The Board Meeting.",
    intro:"You do not need another dashboard. You need the three figures that decide next quarter, agreed across functions and available on demand.",
    owns:["Board and executive reporting","Operating targets by function","The investment case for data"],
    help:[["Executive Scorecard","A single page per function, built on definitions your leadership team signed off."],
      ["Scenario Views","Compare plan, forecast and actual without a modelling exercise each time."],
      ["Data Investment Case","A costed roadmap with the value of each use case, ready for the board pack."],
      ["Adoption Tracking","See which teams actually use the output, and where the gap is widest."]],
    first90:[["Weeks 1 to 2","Discovery: interviews with each function, definition inventory, use-case shortlist."],
      ["Weeks 3 to 8","Build: the scorecard and its pipeline, with weekly reviews against your questions."],
      ["Weeks 9 to 12","Embed: leadership enablement, target-setting and the next quarter's roadmap."]],
    stats:[["Reporting Cycle","−62%"],["Definitions Certified","260+"],["Board Pack Prep","1 Day"],["Time To Value","9 Weeks"]],
    products:["Insight Grid","P-Score"]},

  "data-it-leader":{photo:"https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=1600&q=75&auto=format&fit=crop",hero:"uploads/data-it-leader-hero.jpg",label:"For The Data & IT Leader",caption:"a data and IT leader reviewing the platform architecture",name:"Data & IT Leader",icon:"server",
    lead:"A Platform You Can Hand Over,",rest:"And Still Sleep At Night.",
    intro:"You carry the risk for whatever we build. So we build in your tenancy, with your standards, and give you the infrastructure code at the end.",
    owns:["Platform architecture and cost","Security, access and residency","Delivery standards and handover"],
    help:[["Reference Architecture","Azure, Microsoft Fabric or BigQuery, documented, reviewed with your team before a line is written."],
      ["Governance & Access","Row-level policy, consent flags and audit trails modelled from day one."],
      ["Cost Control","Workload sizing, storage tiering and a monthly cost review you can defend."],
      ["Capability Transfer","Your engineers pair with ours, then take the platform over on a fixed date."]],
    first90:[["Weeks 1 to 2","Assessment: current estate, integration inventory, security requirements."],
      ["Weeks 3 to 8","Build: pipelines, semantic layer and governance in your environment, infrastructure as code."],
      ["Weeks 9 to 12","Handover: runbooks, on-call rehearsal and a named escalation path to our engineers."]],
    handover:[["Infrastructure As Code","Terraform for every environment, in your repository"],
      ["Runbooks","Operational procedures, alert thresholds and escalation paths"],
      ["Access Model","Documented roles, policies and review cadence"],
      ["Exit Terms","Handover at any notice point, no proprietary lock"]],
    products:["Insight Grid"]},

  "analyst":{photo:"https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=1600&q=75&auto=format&fit=crop",hero:"uploads/analyst-hero.jpg",label:"For The Analyst",caption:"an analyst working with certified measures",name:"Analyst",icon:"chart-spline",
    lead:"Stop Rebuilding The Same Extract,",rest:"Start Answering The Question.",
    intro:"Most analysts spend their week reconciling sources instead of analysing them. We remove that week.",
    owns:["Recurring and ad-hoc reporting","Data quality escalation","The analysis behind decisions"],
    help:[["Governed Semantic Layer","Certified measures you can query without rebuilding the joins each time."],
      ["Self-Service Modelling","Sanctioned datasets, version control and a review path to production."],
      ["Quality Monitoring","Freshness and completeness checks that alert before a stakeholder does."],
      ["Skills Programme","SQL, modelling and visualisation tracks that take you from extract to insight."]],
    first90:[["Weeks 1 to 2","Audit: what you report today, where the time goes, which sources conflict."],
      ["Weeks 3 to 8","Build: certified measures and the first three reports retired from manual assembly."],
      ["Weeks 9 to 12","Enable: training cohort, documentation and a working request queue."]],
    tools:["SQL & dbt","Power BI","Looker","Python Notebooks","Insight Grid Semantic Layer","Version Control"],
    products:["Insight Grid"]},

  "developer":{photo:"https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=1600&q=75&auto=format&fit=crop",hero:"uploads/developer-hero.jpg",heroPos:"80% center",label:"For The Developer",caption:"a developer integrating the analytics API",name:"Developer",icon:"code-xml",
    lead:"Working APIs,",rest:"Data Your Product Can Consume.",
    intro:"If analytics only exists in a BI tool, your product cannot use it. We expose it where your code can reach it.",
    owns:["Application and integration code","Release and test pipelines","Embedded product analytics"],
    help:[["Documented APIs","Versioned endpoints over the semantic layer, with contracts and sandbox access."],
      ["Embedded Analytics","Insight Grid views embedded in your app with row-level security intact."],
      ["Event Instrumentation","A schema for product events that survives more than one release."],
      ["Automation Hooks","Trigger Automation Anywhere bots and Infobip journeys from your own services."]],
    first90:[["Weeks 1 to 2","Integration review: current services, auth model, event inventory."],
      ["Weeks 3 to 8","Build: API layer, sandbox tenancy and the first embedded view in your product."],
      ["Weeks 9 to 12","Harden: load testing, monitoring, and CI wired into your existing pipeline."]],
    tools:["OpenAPI Contracts","OAuth 2.0 / OIDC","Webhooks","SDKs (JS, Python)","Sandbox Tenancy","GitHub Actions"],
    products:["Insight Grid","eVoucher"]},

  "marketing":{photo:"https://images.unsplash.com/photo-1573165231977-3f0e27806045?w=1600&q=75&auto=format&fit=crop",hero:"https://images.unsplash.com/photo-1573164574511-73c773193279?w=1600&q=75&auto=format&fit=crop",label:"For Marketing Teams",caption:"a marketing team reviewing attribution",name:"Marketing",icon:"megaphone",
    lead:"Spend Attributed,",rest:"And Journeys That Fire On Real Signals.",
    intro:"Campaign reporting that stops at platform metrics cannot tell you what actually sold. We connect spend to outcome and let the data trigger the next message.",
    owns:["Campaign performance and spend","Customer segmentation","Channel and journey design"],
    help:[["Attribution Model","Spend joined all the way to conversion and revenue, beyond clicks and impressions."],
      ["Segmentation That Updates","Behavioural segments refreshed automatically from the warehouse."],
      ["Journey Orchestration","WhatsApp and SMS journeys through Infobip, triggered by model scores."],
      ["Content Performance","Which assets move which segment, by channel and stage."]],
    first90:[["Weeks 1 to 2","Audit: channels, spend sources, current segment definitions."],
      ["Weeks 3 to 8","Build: attribution pipeline, segment library and the first triggered journey."],
      ["Weeks 9 to 12","Optimise: test framework, reporting cadence and handover to your team."]],
    stats:[["Attributed Spend","94%"],["Segment Refresh","Daily"],["Journey Response","+31%"],["Campaigns Live","36"]],
    products:["Insight Grid","eVoucher"]},

  "finance":{photo:"https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1600&q=75&auto=format&fit=crop",hero:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=75&auto=format&fit=crop",label:"For Finance Teams",caption:"a finance team running the close",name:"Finance",icon:"calculator",
    lead:"Close Faster,",rest:"With A Trail Back To Every Figure.",
    intro:"Finance teams carry the cost of bad data twice: once in the close, once when the auditor asks. We shorten the first and settle the second.",
    owns:["Month-end close and reporting","Budget and variance analysis","Audit and controls"],
    help:[["Automated Reconciliation","Automation Anywhere bots match and clear the routine items before you open the ledger."],
      ["Variance Analytics","Budget versus actual by cost centre, refreshed daily rather than monthly."],
      ["Auditable Lineage","Every reported figure traceable to source, with version history."],
      ["Cost Allocation","Shared-service and cloud cost allocated by rule, straight from the warehouse."]],
    first90:[["Weeks 1 to 2","Close review: current calendar, manual steps, reconciliation volumes."],
      ["Weeks 3 to 8","Build: reconciliation automation and the variance reporting layer."],
      ["Weeks 9 to 12","Prove: a full close run on the new process, with audit walk-through."]],
    closeTable:[["Day 1","Automated reconciliation runs","Bots clear routine matches overnight"],
      ["Day 2","Exceptions reviewed","Only unmatched items reach your team"],
      ["Day 3","Variance pack issued","Generated straight from the warehouse"],
      ["On Demand","Audit walk-through","Every figure traced to its source record"]],
    products:["Insight Grid","P-Score"]},

  "sales":{photo:"https://images.unsplash.com/photo-1605602517229-cdbfc3dfb70c?w=1600&q=75&auto=format&fit=crop",hero:"https://images.unsplash.com/photo-1666866834805-8cc91d4774ac?w=1600&q=75&auto=format&fit=crop",label:"For Sales Teams",caption:"a sales team working the ranked pipeline",name:"Sales",icon:"target",
    lead:"Pipeline You Can Trust,",rest:"And Accounts Ranked By Real Signal.",
    intro:"Forecast accuracy is a data problem before it is a discipline problem. We give your pipeline a spine and your reps a reason to work one account before another.",
    owns:["Pipeline and forecast","Territory and account coverage","Quota and incentive reporting"],
    help:[["Forecast Model","Weighted pipeline with historical conversion by stage, segment and rep."],
      ["Account Scoring","P-Score ranks accounts on value, risk and propensity, refreshed weekly."],
      ["Territory Analytics","Coverage, white space and win rate by territory and product."],
      ["Incentive Reporting","Quota attainment and commission calculated from the same source as revenue."]],
    first90:[["Weeks 1 to 2","Pipeline audit: CRM hygiene, stage definitions, historical conversion."],
      ["Weeks 3 to 8","Build: forecast model, account scores and the sales leadership scorecard."],
      ["Weeks 9 to 12","Roll out: rep enablement, weekly cadence and forecast accuracy tracking."]],
    stats:[["Forecast Accuracy","+18 pts"],["Accounts Scored","Weekly"],["Commission Disputes","−70%"],["Pipeline Coverage","3.2x"]],
    products:["P-Score","Insight Grid"]},

  "support-service":{photo:"https://images.unsplash.com/photo-1622295023876-0cdf583c41f6?w=1600&q=75&auto=format&fit=crop",hero:"https://images.unsplash.com/photo-1605602517229-cdbfc3dfb70c?w=1600&q=75&auto=format&fit=crop",label:"For Support & Service Teams",caption:"a service team monitoring the live queue",name:"Support & Service",icon:"headset",
    lead:"See The Backlog Forming,",rest:"Before It Reaches Your Queue.",
    intro:"Service teams are measured on resolution time but rarely given the data to protect it. We surface the cause behind the volume.",
    owns:["Case volume and resolution time","Escalation and SLA compliance","Customer communication"],
    help:[["Live Queue Analytics","Volume, ageing and SLA risk by channel, product and team."],
      ["Driver Analysis","Which product or process change created this week's contact spike."],
      ["Proactive Messaging","Infobip notifications sent on the signal, before the customer contacts you."],
      ["Knowledge Gap Detection","Cases with no matching article, ranked by volume."]],
    first90:[["Weeks 1 to 2","Baseline: channel volumes, SLA definitions, escalation paths."],
      ["Weeks 3 to 8","Build: queue analytics, driver reporting and the first proactive notification."],
      ["Weeks 9 to 12","Embed: team dashboards, review cadence and continuous-improvement loop."]],
    quote:["We used to find out about a spike from the queue. Now we get the alert before the calls start.","Head of Customer Service","Jubilee Insurance"],
    products:["Insight Grid","eVoucher"]}};

/* ---------- industry compositions (one per sector) ---------- */
function IndBanking({d}){
  const {Frame,Section,SlotFigure,StatBand,Rail,DashedGrid,QuoteBand,ProductStrip,ClosingCta,PtFooter,SectorDashboard}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Console" right="The Operating Picture" bg="var(--bg-subtle)">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1.1fr) minmax(0,0.9fr)",gap:40,alignItems:"start"}}>
        <SectorDashboard sector={{name:d.board}} role={null}/>
        <div><TwoToneHeading size="clamp(23px,4.6vw,30px)" lead="Risk And Finance, One Screen."
          rest="Exposure, straight-through processing and the alert queue in one governed view."/>
          <div style={{marginTop:26}}><StatBand stats={d.outcomes} tone="dark"/></div>
          <div style={{marginTop:24}}><SlotFigure id={d.slug+"-scene"} caption="Photography: the risk and reporting team at work" ratio="16 / 9"/></div></div>
      </div>
    </Section>
    <Section index="02" label="Challenges" right="What We Usually Find">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Three Things We Find In Every Bank."
        rest="Named plainly, because the fix depends on which one is worst."/>
      <div style={{marginTop:32}}><Rail items={d.challenges.map(([,t,x])=>[t,x])}/></div>
    </Section>
    <QuoteBand quote={d.quote[0]} name={d.quote[1]} role={d.quote[2]}/>
    <Section index="03" label="Delivery" right="What We Build" bg="var(--bg-subtle)">
      <DashedGrid items={d.delivers} cols={2}/>
      <div style={{marginTop:32}}><ProductStrip names={d.products}/></div>
    </Section>
    <ClosingCta title="Start With A Two-Week Banking Discovery.">
      We map your reporting estate, name the three highest-value use cases, and return a costed delivery plan you
      can take to your risk committee.</ClosingCta>
    <PtFooter/></>;
}

function IndHealthcare({d}){
  const {Section,SlotFigure,SplitList,IconCards,StatBand,QuoteBand,ProductStrip,ClosingCta,PtFooter,SectorDashboard}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Challenges" right="Where Governance Bites">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Sensitive Data Is Not Unusable Data."
        rest="Three constraints we model before any analysis begins."/>
      <div style={{marginTop:40}}><IconCards items={d.challenges} cols={3}/></div>
      <div style={{marginTop:36}}><SlotFigure id={d.slug+"-scene"} caption="Photography: Kenya Climate Change Knowledge Portal"/></div>
    </Section>
    <Section index="02" label="Delivery" right="What We Build" bg="var(--bg-subtle)">
      <SplitList label="Workstreams" items={d.delivers}/>
    </Section>
    <Section index="03" label="Board" right="Illustrative View">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:36,alignItems:"start"}}>
        <SectorDashboard sector={{name:d.board}} role={null}/>
        <div style={{display:"grid",gap:20}}>
          <SlotFigure id={d.slug+"-team"} caption={"Photography: the "+d.name+" team using the output"} ratio="4 / 3"/>
          <StatBand stats={d.outcomes}/>
        </div>
      </div>
    </Section>
    <QuoteBand quote={d.quote[0]} name={d.quote[1]} role={d.quote[2]}/>
    <Section index="04" label="Products" right="What Runs Underneath" bg="var(--bg-subtle)">
      <ProductStrip names={d.products}/></Section>
    <ClosingCta title="Model The Consent Rules First.">
      A two-week discovery maps your clinical and commercial estate against the access rules that govern it, and
      returns a costed plan.</ClosingCta>
    <PtFooter/></>;
}

function IndGovernment({d}){
  const {Section,SlotFigure,DataTable,CheckRows,DashedGrid,StatBand,ProductStrip,ClosingCta,PtFooter,SectorDashboard}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Monitor" right="Service Delivery View">
      <SectorDashboard sector={{name:d.board}} role={null}/>
      <div style={{marginTop:32}}><StatBand stats={d.outcomes}/></div>
    </Section>
    <Section index="02" label="Compliance" right="Residency And Legal Basis" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead="Hosted In Kenya, Auditable By Design."
        rest="The questions a permanent secretary asks first, answered before we start."/>
      <div style={{marginTop:36}}><DataTable head={["Requirement","How It Is Met"]} rows={d.compliance}/></div>
    </Section>
    <Section index="03" label="Challenges" right="What We Usually Find">
      <DashedGrid items={d.challenges.map(([,t,x])=>[t,x])} cols={3}/>
      <div style={{marginTop:36}}><SlotFigure id={d.slug+"-scene"} caption="Photography: a citizen service centre in operation"/></div>
    </Section>
    <Section index="04" label="Delivery" right="What We Build" bg="var(--bg-subtle)">
      <CheckRows items={d.delivers.map(([t])=>t)} cols={2}/>
      <div style={{marginTop:32}}><ProductStrip names={d.products}/></div>
    </Section>
    <ClosingCta title="Start With One Service." credit="">
      We instrument a single public service end to end, publish it, then use that pattern across the rest of the
      programme.</ClosingCta>
    <PtFooter/></>;
}

function IndManufacturing({d}){
  const {Section,SlotFigure,Stepper,Chips,StatBand,IconCards,ProductStrip,ClosingCta,PtFooter,SectorDashboard}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <Section index="01" label="Signals" right="What We Ingest">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,0.9fr) minmax(0,1.1fr)",gap:44,alignItems:"stretch"}}>
        <div><TwoToneHeading size="clamp(23px,4.6vw,30px)" lead="Six Signals, One Plant View."
          rest="Telemetry, quality and sell-out data joined to the plan of record."/>
          <div style={{marginTop:26}}><Chips items={d.signals}/></div>
          <div style={{marginTop:28}}><StatBand stats={d.outcomes} tone="dark"/></div></div>
        <SlotFigure id={d.slug+"-scene"} caption="Photography: the production line and shift board" fill/>
      </div>
    </Section>
    <Section index="02" label="Delivery" right="Four Builds" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Sequenced By Payback."
        rest="Forecasting first, then plant performance, then supply and route to market."/>
      <div style={{marginTop:44}}><Stepper steps={d.delivers.map(([t,x],i)=>["Build 0"+(i+1),t,x])}/></div>
    </Section>
    <Section index="03" label="Wall" right="Illustrative View">
      <div style={{display:"grid",gridTemplateColumns:"minmax(0,0.85fr) minmax(0,1.15fr)",gap:36,alignItems:"stretch"}}>
        <IconCards items={d.challenges} cols={1} stretch/>
        <SectorDashboard sector={{name:d.board}} role={null}/>
      </div>
    </Section>
    <Section index="04" label="Products" right="What Runs Underneath" bg="var(--bg-subtle)">
      <ProductStrip names={d.products}/></Section>
    <ClosingCta title="Start On One Line.">
      We instrument a single production line and prove the payback in a quarter, then roll the pattern across the
      plant.</ClosingCta>
    <PtFooter/></>;
}

function IndTransport({d}){
  const {Frame,Section,SlotFigure,Rail,IconCards,StatBand,QuoteBand,ProductStrip,ClosingCta,PtFooter,SectorDashboard}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <>
    <div style={{background:"var(--ink-700)",padding:"64px 24px"}}>
      <div style={{maxWidth:1120,margin:"0 auto"}}>
        <div style={{color:"rgba(255,255,255,.62)",fontSize:"var(--text-eyebrow)",
          letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",marginBottom:20}}>Live Network Board · Illustrative</div>
        <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,0.8fr)",gap:32,alignItems:"start"}}>
          <SectorDashboard sector={{name:d.board}} role={null}/>
          <div><StatBand stats={d.outcomes} tone="dark"/>
            <div style={{marginTop:24}}><SlotFigure id={d.slug+"-scene"} caption="Photography: the control room and fleet" ratio="16 / 10" showCaption={false}/></div></div>
        </div></div></div>
    <Section index="01" label="Challenges" right="Why The Data Is Split">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Three Portals, No Answer."
        rest="Every operator we meet has the data and none of the picture."/>
      <div style={{marginTop:40}}><IconCards items={d.challenges} cols={3}/></div>
    </Section>
    <Section index="02" label="Delivery" right="What We Build" bg="var(--bg-subtle)">
      <Rail items={d.delivers}/>
    </Section>
    <QuoteBand quote={d.quote[0]} name={d.quote[1]} role={d.quote[2]}/>
    <Section index="03" label="Products" right="What Runs Underneath">
      <ProductStrip names={d.products}/></Section>
    <ClosingCta title="Consolidate One Corridor." credit="">
      We join your telemetry, cost and schedule data for a single corridor, then extend the pattern across the
      network.</ClosingCta>
    <PtFooter/></>;
}

/* ---------- role compositions (one per role) ---------- */
const RoleWrap=({d,children})=><>{children}<window.ClosingCta title={d.label.replace(/^For /,"Built For ")+"."}
  secondary={["Browse By Industry","Pathways Landing Page.html"]} credit="">
  Tell us the report you rebuild every month. We will show you what it looks like when it maintains itself.
</window.ClosingCta><window.PtFooter/></>;

function RoleBusinessLeader({d}){
  const {Section,SlotFigure,StatBand,DashedGrid,Stepper,ProductStrip}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <RoleWrap d={d}>
    <Section index="01" label="Outcome" right="What Changes First">
      <StatBand stats={d.stats}/>
      <div style={{marginTop:40}}><DashedGrid items={d.help} cols={2}/></div>
    </Section>
    <Section index="02" label="First 90 Days" right="How It Runs" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead="Ninety Days To A Trusted Scorecard."
        rest="Weekly reviews against the questions you actually get asked."/>
      <div style={{marginTop:44}}><Stepper steps={d.first90.map(([w,x])=>[w,x.split(":")[0],x.split(":")[1]||x])}/></div>
      <div style={{marginTop:40}}><SlotFigure id={d.slug+"-portrait"} caption={"Photography: "+d.caption}/></div>
    </Section>
    <Section index="03" label="Products" right="What You Would Use"><ProductStrip names={d.products}/></Section>
  </RoleWrap>;
}

function RoleDataItLeader({d}){
  const {Section,SlotFigure,SplitList,DataTable,CheckRows,ProductStrip}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <RoleWrap d={d}>
    <Section index="01" label="Approach" right="Built In Your Tenancy">
      <SplitList label="Workstreams" items={d.help}/>
    </Section>
    <Section index="02" label="Handover" right="What You Receive" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead="Handover Is A Deliverable."
        rest="Not a conversation at the end of the engagement."/>
      <div style={{marginTop:36}}><DataTable head={["Artefact","What It Contains"]} rows={d.handover}/></div>
      <div style={{marginTop:36}}><CheckRows items={d.owns} cols={3}/></div>
    </Section>
    <Section index="03" label="Products" right="What You Would Run">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:32,alignItems:"start"}}>
        <ProductStrip names={d.products}/>
        <SlotFigure id={d.slug+"-portrait"} caption={"Photography: "+d.caption} ratio="4 / 3"/></div>
    </Section>
  </RoleWrap>;
}

function RoleAnalyst({d}){
  const {Section,SlotFigure,DashedGrid,Chips,Rail,ProductStrip}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <RoleWrap d={d}>
    <Section index="01" label="Your Week" right="Where The Time Goes">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1.05fr) minmax(0,0.95fr)",gap:44,alignItems:"start"}}>
        <div><TwoToneHeading size="clamp(23px,4.6vw,30px)" lead="Four Fewer Reconciliations."
          rest="What we put in place so the extract stops being your job."/>
          <div style={{marginTop:28}}><Rail items={d.help}/></div></div>
        <div className="pt-sticky" style={{display:"grid",gap:24,position:"sticky",top:110}}>
          <SlotFigure id={d.slug+"-portrait"} caption={"Photography: "+d.caption} ratio="4 / 3"/>
          <div><div style={{fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",
            color:"var(--text-muted)",marginBottom:12}}>What You Work In</div><Chips items={d.tools}/></div></div>
      </div>
    </Section>
    <Section index="02" label="First 90 Days" right="How It Runs" bg="var(--bg-subtle)">
      <DashedGrid items={d.first90} cols={3}/>
    </Section>
    <Section index="03" label="Products" right="What You Would Use"><ProductStrip names={d.products}/></Section>
  </RoleWrap>;
}

function RoleDeveloper({d}){
  const {Section,SlotFigure,Chips,DashedGrid,Stepper,ProductStrip}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <RoleWrap d={d}>
    <Section index="01" label="Integration" right="What You Get">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="Working Contracts."
        rest="Everything reachable from your own services, with a sandbox to build against."/>
      <div style={{marginTop:36}}><Chips items={d.tools}/></div>
      <div style={{marginTop:40}}><DashedGrid items={d.help} cols={2}/></div>
    </Section>
    <Section index="02" label="First 90 Days" right="How It Runs" bg="var(--bg-subtle)">
      <SlotFigure id={d.slug+"-portrait"} caption={"Photography: "+d.caption} ratio="16 / 7"/>
      <div style={{marginTop:36}}><Stepper steps={d.first90.map(([w,x])=>[w,x.split(":")[0],x.split(":")[1]||x])}/></div>
    </Section>
    <Section index="03" label="Products" right="What You Would Build On"><ProductStrip names={d.products}/></Section>
  </RoleWrap>;
}

function RoleMarketing({d}){
  const {Section,SlotFigure,SplitList,StatBand,CheckRows,ProductStrip}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <RoleWrap d={d}>
    <Section index="01" label="Attribution" right="Spend To Outcome">
      <StatBand stats={d.stats} tone="dark"/>
      <div style={{marginTop:40}}><SplitList label="What We Build" items={d.help}/></div>
    </Section>
    <Section index="02" label="Remit" right="What You Own" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead="Where We Start."
        rest="With the numbers your CFO already asks you about."/>
      <div style={{marginTop:30}}><CheckRows items={d.owns} cols={3}/></div>
      <div style={{marginTop:36}}><SlotFigure id={d.slug+"-portrait"} caption={"Photography: "+d.caption}/></div>
    </Section>
    <Section index="03" label="Products" right="What You Would Use"><ProductStrip names={d.products}/></Section>
  </RoleWrap>;
}

function RoleFinance({d}){
  const {Section,SlotFigure,DataTable,DashedGrid,CheckRows,ProductStrip}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <RoleWrap d={d}>
    <Section index="01" label="The Close" right="A Three-Day Close">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={820} lead="What The Close Looks Like After."
        rest="The routine work happens before your team opens the ledger."/>
      <div style={{marginTop:40}}><DataTable head={["When","Step","What Happens"]} rows={d.closeTable}/></div>
    </Section>
    <Section index="02" label="Delivery" right="What We Build" bg="var(--bg-subtle)">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1.05fr) minmax(0,0.95fr)",gap:40,alignItems:"start"}}>
        <DashedGrid items={d.help} cols={1}/>
        <div style={{display:"grid",gap:24}}>
          <SlotFigure id={d.slug+"-portrait"} caption={"Photography: "+d.caption} ratio="4 / 3"/>
          <CheckRows items={d.owns} cols={1}/></div></div>
    </Section>
    <Section index="03" label="Products" right="What You Would Use"><ProductStrip names={d.products}/></Section>
  </RoleWrap>;
}

function RoleSales({d}){
  const {Section,SlotFigure,Stepper,DashedGrid,StatBand,ProductStrip}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <RoleWrap d={d}>
    <Section index="01" label="First 90 Days" right="From Audit To Cadence">
      <Stepper steps={d.first90.map(([w,x])=>[w,x.split(":")[0],x.split(":")[1]||x])}/>
      <div style={{marginTop:44}}><StatBand stats={d.stats}/></div>
    </Section>
    <Section index="02" label="Delivery" right="What We Build" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,30px)" maxWidth={780} lead="Four Builds For The Sales Floor."
        rest="Forecast, scoring, coverage and the incentive numbers on one source."/>
      <div style={{marginTop:40}}><DashedGrid items={d.help} cols={2}/></div>
      <div style={{marginTop:36}}><SlotFigure id={d.slug+"-portrait"} caption={"Photography: "+d.caption}/></div>
    </Section>
    <Section index="03" label="Products" right="What You Would Use"><ProductStrip names={d.products}/></Section>
  </RoleWrap>;
}

function RoleSupport({d}){
  const {Section,SlotFigure,DashedGrid,Rail,QuoteBand,CheckRows,ProductStrip}=window;
  const { TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  return <RoleWrap d={d}>
    <Section index="01" label="Queue" right="What You See First">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:40,alignItems:"start"}}>
        <div><TwoToneHeading size="clamp(23px,4.6vw,30px)" lead="The Cause Behind The Volume."
          rest="Four views that explain the spike instead of counting it."/>
          <div style={{marginTop:28}}><CheckRows items={d.owns} cols={1}/></div></div>
        <SlotFigure id={d.slug+"-portrait"} caption={"Photography: "+d.caption} fill/></div>
      <div style={{marginTop:40}}><DashedGrid items={d.help} cols={2}/></div>
    </Section>
    <QuoteBand quote={d.quote[0]} name={d.quote[1]} role={d.quote[2]}/>
    <Section index="02" label="First 90 Days" right="How It Runs" bg="var(--bg-subtle)">
      <Rail items={d.first90}/>
    </Section>
    <Section index="03" label="Products" right="What You Would Use"><ProductStrip names={d.products}/></Section>
  </RoleWrap>;
}

const IND_VIEWS={"banking-finance":IndBanking,"healthcare-pharmaceuticals":IndHealthcare,
  "government-public-sector":IndGovernment,"manufacturing-consumer-goods":IndManufacturing,
  "transport-logistics":IndTransport};
const ROLE_VIEWS={"business-leader":RoleBusinessLeader,"data-it-leader":RoleDataItLeader,"analyst":RoleAnalyst,
  "developer":RoleDeveloper,"marketing":RoleMarketing,"finance":RoleFinance,"sales":RoleSales,
  "support-service":RoleSupport};

function SolutionApp(){
  const {PageHero}=window;
  const p=window.PT_PAGE||{};
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();});
  const ind=p.type==="industry";
  const d=ind?INDUSTRIES[p.slug]:ROLES[p.slug];
  if(!d)return <div style={{padding:60}}>Unknown solution page.</div>;
  d.slug=p.slug;
  window.PT_HERO_PHOTO=d.hero;
  window.PT_HERO_FLIP=!!d.heroFlip;
  window.PT_HERO_POS=d.heroPos||"center";
  const View=(ind?IND_VIEWS:ROLE_VIEWS)[p.slug];
  return <><Header/><main id="main">
    <PageHero eyebrow={ind?("Solutions · "+d.name):("Solutions · "+d.label)}
      lead={d.lead} rest={d.rest} intro={d.intro} img={d.hero}
      meta={ind?[["Median Time To Value",d.ttv],["Data Coverage",d.coverage],[d.outcomes[0][0],d.outcomes[0][1]]]:null}
      secondary={["See All Solutions","Pathways Landing Page.html"]}/>
    <View d={d}/></main></>;
}
Object.assign(window,{SolutionApp,INDUSTRIES,ROLES});
