/* About Us page. Leadership names and titles are client-supplied; biography copy is illustrative,
   confirm with each person before publishing. */
const AB=(id,w=1400)=>`https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

const LEADERS=[
  {name:"Joel Onditi",role:"President & CEO",img:"assets/p-joel.png",
   bio:"Founded Pathways to close the gap between the data organisations collect and the decisions they actually make. Leads the firm's delivery standard and its work with regulated clients.",
   focus:["Client outcomes","Delivery standard","Partnerships"]},
  {name:"Becky Abraham",role:"Chief of Strategy & Growth",img:"assets/p-becky-2.png",
   bio:"Shapes where the firm invests next, from sector focus to product roadmap, and runs the commercial side of every major engagement.",
   focus:["Sector strategy","Commercial","Product direction"]},
  {name:"Loren Anduvare",role:"VP of Technology & Project Manager",img:"assets/p-loren.png",
   bio:"Runs the product and platform engineering teams. Sets the architecture standards, release cadence and handover practice that keep systems maintainable after we leave.",
   focus:["Engineering","Delivery","Capability transfer"]},
  {name:"Jed Summerton",role:"Global Advisor",img:"assets/p-jed.png",
   bio:"Advises on international expansion and enterprise governance, bringing decades of experience with large regulated programmes.",
   focus:["Global expansion","Governance","Executive advisory"]}];

const BELIEFS=[["Build In Your Tenancy","Nothing important should live in a vendor's account. We build where you can see it, audit it, and keep it."],
  ["Definitions Before Dashboards","A chart is only as good as the agreement behind the number. We settle definitions first, in writing."],
  ["Handover Is A Deliverable","Runbooks, infrastructure code and paired engineers, on a date we agree with you at the start."],
  ["Say What It Costs","Fixed price for discovery, published rates for delivery, and no surprises in the second invoice."]];

const STORY=[["Founded In Nairobi","Started as a two-person analytics practice serving Kenyan banks and insurers."],
  ["Regional Delivery","Grew into full platform delivery across East Africa, adding software and automation squads."],
  ["Products And Training","Launched Insight Grid, P-Score and eVoucher, and formalised the training practice."],
  ["Where We Are Now","Sixty-four certified engineers, eleven delivery squads, and clients in six countries."]];

const OFFICES=[["Nairobi",<>Head Office,<br/>236 Owashika Road</>,"Lavington"]];

function AboutApp(){
  const {Frame,Section,Icon,PtButton,PtFooter,ClientWall,PageHero,StatBand,DashedGrid,Rail,DataTable,SlotFigure,ClosingCta,TrustBar}=window;
  const { Card, TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();});
  window.PT_HERO_PHOTO="uploads/Pathways Team 2.jpg";
  return <><Header/><main id="main">
    <PageHero eyebrow="About Us" lead="We Turn Data" rest={"Into Decisions\nYou Can Defend."}
      secondary={["See All Services","Services.html"]}
      intro="Pathways Technologies helps organisations in banking, health, government, manufacturing and logistics turn the data they already hold into decisions they can defend."
      meta={[["Founded","Nairobi"],["Certified Engineers","64"],["Countries","6"]]}/>

    <Section index="01" label="Who We Are" right="The Short Version">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1.05fr) minmax(0,0.95fr)",gap:44,alignItems:"start"}}>
        <div>
          <TwoToneHeading size="clamp(23px,4.6vw,30px)" lead="We Were Built Around One Complaint."
            rest="Leaders could not get a number they trusted, quickly enough to act on it."
            maxWidth={560}/>
          <p style={{fontSize:16.5,color:"var(--text-secondary)",lineHeight:1.75,marginTop:22,maxWidth:560}}>
            Most of our clients already had reporting. What they did not have was agreement: three definitions of
            the same customer, four spreadsheets behind one board figure, and no way to trace either back to a
            source record. We start there, with the definitions and the plumbing, then build the analytics,
            models and software on top.</p>
          <p style={{fontSize:16.5,color:"var(--text-secondary)",lineHeight:1.75,maxWidth:560}}>
            Everything we build runs in your own cloud tenancy, documented well enough that your team can take it
            over. That is the point of the work; we would rather be rehired than relied on.</p>
          <div style={{marginTop:28}}><TrustBar/></div>
        </div>
        <SlotFigure id="about-office" src="assets/data-analytics-laptop.jpg" credit="" caption="Analytics and applications, built and shipped in-house" ratio="4 / 3"/>
      </div>
      <div style={{marginTop:48}}>
        <StatBand stats={[["Engagements Delivered","140+"],["Repeat Clients","78%"],["Delivery Squads","11"],["People Trained","1,900+"]]}/></div>
    </Section>

    <Section index="02" label="Leadership" right="The Management Team" bg="var(--bg-subtle)">
      <TwoToneHeading size="clamp(23px,4.6vw,32px)" maxWidth={840} lead="The People Who Set The Standard."
        rest="Fifty colleagues do the work; these four are accountable for how it is done."/>
      <p style={{fontSize:16,color:"var(--text-secondary)",lineHeight:1.75,marginTop:18,maxWidth:640}}>
        Our management team sits across delivery, strategy, operations and governance. Each of them stays close
        to live engagements, so the person who scoped your work is still reachable when it ships.</p>
      <div className="pt-leadgrid" style={{marginTop:48,display:"grid",
        gridTemplateColumns:"repeat(4,minmax(0,1fr))",border:"1px solid var(--grid-line)",
        borderRadius:"var(--radius-md)",overflow:"hidden",background:"var(--stone-0)"}}>
        {LEADERS.map((p,i)=><div key={p.name} className="pt-leadcell"
          style={{borderLeft:i?"1px solid var(--grid-line)":"none",display:"flex",flexDirection:"column"}}>
          <div style={{position:"relative",background:"var(--bg-muted)",
            backgroundImage:"var(--dot-grid)",backgroundSize:"var(--dot-grid-size)",
            borderBottom:"1px solid var(--grid-line)",display:"flex",alignItems:"center",
            justifyContent:"center",overflow:"hidden",padding:"34px 12% 30px"}}>
            <span style={{position:"absolute",left:0,right:0,bottom:0,height:"46%",
              background:"linear-gradient(180deg,transparent,rgba(27,135,201,.10))"}}/>
            <img src={p.img} alt={p.name} style={{position:"relative",width:"100%",maxWidth:190,
              aspectRatio:"1 / 1",objectFit:"cover",display:"block",borderRadius:"50%",
              boxShadow:"0 10px 26px rgba(15,32,56,.14)"}}/></div>
          <div style={{padding:"22px 24px 26px",display:"flex",flexDirection:"column",gap:0,flex:1}}>
            <span style={{fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-eyebrow)",
              textTransform:"uppercase",color:"var(--text-muted)"}}>{String(i+1).padStart(2,"0")}</span>
            <h3 style={{fontSize:19,margin:"8px 0 3px",fontWeight:"var(--weight-medium)",lineHeight:1.25}}>{p.name}</h3>
            <div style={{fontSize:13,color:"var(--secondary-text)",marginBottom:12}}>{p.role}</div>
            <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)",lineHeight:1.6,margin:"0 0 16px"}}>{p.bio}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:6,marginTop:"auto"}}>
              {p.focus.map(f=><span key={f} style={{display:"inline-flex",alignItems:"center",height:24,
                padding:"0 9px",borderRadius:"var(--radius-pill)",border:"1px solid var(--border-hairline)",
                fontSize:11.5,color:"var(--text-secondary)"}}>{f}</span>)}</div>
          </div></div>)}
      </div>
      <div style={{marginTop:28,padding:"20px 24px",border:"1px dashed var(--border-hairline)",
        borderRadius:"var(--radius-md)",fontSize:"var(--text-sm)",color:"var(--text-secondary)"}}>
        Behind them sit roughly thirty engineers, analysts, scientists and delivery leads working in eleven squads.
        You are introduced to the people on your engagement by name before it starts.</div>
    </Section>

    <Section index="03" label="What We Believe" right="Four Commitments">
      <DashedGrid items={BELIEFS} cols={2}/>
    </Section>

    <Section index="04" label="How We Got Here" right="Four Chapters" bg="var(--bg-subtle)">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1.05fr) minmax(0,0.95fr)",gap:44,alignItems:"start"}}>
        <div><TwoToneHeading size="clamp(23px,4.6vw,30px)" lead="From Two People To Eleven Squads."
          rest="Growth followed the work itself."/>
          <div style={{marginTop:26}}><Rail items={STORY}/></div></div>
        <div style={{display:"grid",gap:24,position:"sticky",top:110}}>
          <SlotFigure id="about-team" caption="Photography: a delivery squad at work" ratio="4 / 3"/>
          <div>
            <div style={{fontSize:"var(--text-xs)",letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",
              color:"var(--text-muted)",marginBottom:12}}>Where We Work</div>
            <DataTable head={["Location","What Happens There","Where"]} rows={OFFICES}/></div>
        </div>
      </div>
    </Section>

    <Frame><ClientWall label="Trusted By Governments, Insurers And Global NGOs"/></Frame>

    <Section index="05" label="Careers" right="Working Here">
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:44,alignItems:"center"}}>
        <div><TwoToneHeading size="clamp(23px,4.6vw,30px)" lead="Come Build Data Work" rest="That Clients Keep Using."/>
          <p style={{fontSize:16,color:"var(--text-secondary)",lineHeight:1.75,marginTop:20,maxWidth:520}}>
            Engineers, analysts and delivery leads who can sit with a client, understand the decision behind the
            request, and say no when the data will not support it. If that sounds like your kind of work, send us
            something you have built.</p>
          <div style={{display:"flex",gap:12,marginTop:26,flexWrap:"wrap"}}>
            <PtButton tone="primary" size="md" arrow onClick={()=>{location.href="Contact Us.html"}}>See Open Roles</PtButton>
            <PtButton tone="secondary" size="md" onClick={()=>{location.href="Partnerships.html"}}>Our Partners</PtButton></div>
        </div>
        <SlotFigure id="about-careers" caption="Photography: engineers pairing during onboarding"/>
      </div>
    </Section>

    <ClosingCta title="Come And Tell Us What Is Not Working." secondary={["See Pricing","Pricing.html"]}>
      A two-week discovery gives you a map of your data estate, the three use cases worth funding first, and a
      costed plan. You keep it either way.</ClosingCta>
    <PtFooter/></main></>;
}
Object.assign(window,{AboutApp});
