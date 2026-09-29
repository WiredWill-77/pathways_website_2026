/* Course checkout: booking request for a Data Skills Training module. No real payment is processed —
   card fields are collected for the visual pattern only; submission produces a booking reference and
   is stored the same way the CMS mock API works. Wire to a real payment/CRM provider before publishing. */
const PRICE_PER_LEARNER=320;

const field={width:"100%",height:44,padding:"0 14px",borderRadius:"var(--radius-sm)",
  border:"1px solid var(--border-hairline)",background:"var(--stone-0)",color:"var(--text-primary)",
  fontSize:15,fontFamily:"var(--font-sans)"};

function CoField({label,name,error,hint,children}){
  return <label style={{display:"block"}} htmlFor={name}>
    <span style={{display:"block",fontSize:13,color:"var(--text-secondary)",marginBottom:7}}>{label}</span>
    {children}
    {error?<span style={{display:"block",fontSize:12,color:"var(--danger)",marginTop:6}}>{error}</span>
      :hint&&<span style={{display:"block",fontSize:12,color:"var(--text-muted)",marginTop:6}}>{hint}</span>}
  </label>;
}

function OrderSummary({course,learners,format,total}){
  const {Icon}=window;const { Card } = window.SearchableDesignSystem_29e52a;
  return <Card padding={26} style={{position:"sticky",top:110}}>
    <div style={{fontSize:12,letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:12}}>Order Summary</div>
    <div style={{fontSize:17,fontWeight:"var(--weight-medium)"}}>{course.title}</div>
    <div style={{fontSize:13,color:"var(--text-muted)",marginTop:3}}>{course.length} &middot; {course.audience} &middot; {format}</div>
    <div style={{borderTop:"1px solid var(--grid-line)",marginTop:18,paddingTop:16,display:"grid",gap:10}}>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:14,color:"var(--text-secondary)"}}>
        <span>Price per learner</span><span>${PRICE_PER_LEARNER}</span></div>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:14,color:"var(--text-secondary)"}}>
        <span>Learners</span><span>&times; {learners}</span></div>
    </div>
    <div style={{borderTop:"1px solid var(--grid-line)",marginTop:16,paddingTop:16,display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
      <span style={{fontSize:15,fontWeight:"var(--weight-medium)"}}>Total due</span>
      <span style={{fontSize:26,fontWeight:600,letterSpacing:"-0.02em"}}>${total.toLocaleString()}</span></div>
    <div style={{fontSize:11.5,color:"var(--text-muted)",marginTop:6}}>Taxes, if applicable, are calculated on your invoice.</div>
    <div style={{display:"flex",alignItems:"center",gap:8,marginTop:20,paddingTop:16,borderTop:"1px solid var(--grid-line)",
      fontSize:12,color:"var(--text-muted)"}}>
      <Icon name="shield-check" size={15}/>Secure checkout &middot; cancel free up to 14 days before start</div>
  </Card>;
}

function CardBrandBadges(){
  return <span style={{display:"inline-flex",gap:4}}>
    <svg width="30" height="18" viewBox="0 0 30 18" aria-label="Visa"><rect width="30" height="18" rx="3" fill="#1A1F71"/>
      <text x="15" y="12.5" fontSize="7.5" fontWeight="700" fontStyle="italic" fill="#FFFFFF" textAnchor="middle" fontFamily="Arial">VISA</text></svg>
    <svg width="30" height="18" viewBox="0 0 30 18" aria-label="Mastercard"><rect width="30" height="18" rx="3" fill="#F4F4F4"/>
      <circle cx="12" cy="9" r="5.2" fill="#EB001B"/><circle cx="18" cy="9" r="5.2" fill="#F79E1B" fillOpacity=".85"/></svg>
  </span>;
}
function MpesaBadge(){
  return <svg width="52" height="18" viewBox="0 0 52 18" aria-label="M-Pesa"><rect width="52" height="18" rx="3" fill="#4CAF50"/>
    <text x="26" y="12.5" fontSize="8.5" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Arial">M-PESA</text></svg>;
}
const PAY_METHODS=[
  {key:"invoice",label:"Invoice (Net 30)"},
  {key:"card",label:"Card"},
  {key:"mpesa",label:"M-Pesa"}];

function CheckoutForm({course,learners,setLearners,format,setFormat,onSubmit,busy}){
  const {Icon}=window;
  const [v,setV]=React.useState({company:"",contact:"",email:"",phone:"",start:"",payment:"invoice",
    cardName:"",cardNumber:"",cardExpiry:"",cardCvc:"",mpesaPhone:"",agree:false});
  const [err,setErr]=React.useState({});
  const set=k=>e=>setV({...v,[k]:e.target.type==="checkbox"?e.target.checked:e.target.value});
  const submit=e=>{
    e.preventDefault();
    const n={};
    if(!v.company.trim())n.company="Enter your organisation.";
    if(!v.contact.trim())n.contact="Enter a contact name.";
    if(!/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(v.email))n.email="Enter a valid work email address.";
    if(!v.start.trim())n.start="Tell us your preferred start window.";
    if(v.payment==="card"){
      if(!v.cardName.trim())n.cardName="Enter the name on the card.";
      if(!/^[\d\s]{12,19}$/.test(v.cardNumber))n.cardNumber="Enter a valid card number.";
      if(!/^\d{2}\s?\/\s?\d{2}$/.test(v.cardExpiry))n.cardExpiry="MM / YY.";
      if(!/^\d{3,4}$/.test(v.cardCvc))n.cardCvc="3 or 4 digits.";
    }
    if(v.payment==="mpesa"&&!/^\+?\d{9,13}$/.test(v.mpesaPhone.replace(/\s+/g,"")))n.mpesaPhone="Enter a valid M-Pesa phone number.";
    if(!v.agree)n.agree="Accept the terms to continue.";
    setErr(n);
    if(Object.keys(n).length)return;
    onSubmit(v);
  };
  return <form onSubmit={submit} noValidate style={{display:"grid",gap:24}}>
    <div>
      <div style={{fontSize:15,fontWeight:"var(--weight-medium)",marginBottom:14}}>Cohort</div>
      <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"}}>
        <CoField label="Number Of Learners" name="learners" hint="Cohorts run 6 to 24 learners.">
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <button type="button" onClick={()=>setLearners(Math.max(6,learners-1))} style={{...field,width:40,padding:0,cursor:"pointer"}}>&minus;</button>
            <input readOnly value={learners} style={{...field,width:64,textAlign:"center"}}/>
            <button type="button" onClick={()=>setLearners(Math.min(24,learners+1))} style={{...field,width:40,padding:0,cursor:"pointer"}}>+</button>
          </div>
        </CoField>
        <div style={{flex:1,minWidth:200}}>
          <CoField label="Preferred Start Window" name="start" error={err.start}>
            <input style={{...field,borderColor:err.start?"var(--danger)":"var(--border-hairline)"}} value={v.start}
              onChange={set("start")} placeholder="e.g. Last two weeks of October"/></CoField>
        </div>
      </div>
      <div style={{marginTop:16}}>
        <CoField label="Delivery Format" name="format">
          <div style={{display:"flex",gap:10}}>
            {["On Site","Remote"].map(f=>
              <button key={f} type="button" onClick={()=>setFormat(f)} style={{height:44,padding:"0 18px",borderRadius:"var(--radius-sm)",
                cursor:"pointer",fontSize:14,border:"1px solid "+(format===f?"var(--primary)":"var(--border-hairline)"),
                background:format===f?"var(--bg-blue-soft)":"var(--stone-0)",
                color:format===f?"var(--secondary-text)":"var(--text-primary)"}}>{f}</button>)}
          </div>
        </CoField>
      </div>
    </div>
    <div>
      <div style={{fontSize:15,fontWeight:"var(--weight-medium)",marginBottom:14}}>Contact Details</div>
      <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        <CoField label="Organisation" name="company" error={err.company}>
          <input style={{...field,borderColor:err.company?"var(--danger)":"var(--border-hairline)"}} value={v.company}
            onChange={set("company")} autoComplete="organization" placeholder="Meridian Group"/></CoField>
        <CoField label="Contact Name" name="contact" error={err.contact}>
          <input style={{...field,borderColor:err.contact?"var(--danger)":"var(--border-hairline)"}} value={v.contact}
            onChange={set("contact")} autoComplete="name" placeholder="Amina Wanjiru"/></CoField>
        <CoField label="Work Email" name="email" error={err.email}>
          <input type="email" style={{...field,borderColor:err.email?"var(--danger)":"var(--border-hairline)"}} value={v.email}
            onChange={set("email")} autoComplete="email" placeholder="you@organisation.com"/></CoField>
        <CoField label="Phone" name="phone" hint="Optional.">
          <input style={field} value={v.phone} onChange={set("phone")} autoComplete="tel" placeholder="+254 7…"/></CoField>
      </div>
    </div>
    <div>
      <div style={{fontSize:15,fontWeight:"var(--weight-medium)",marginBottom:14}}>Payment Method</div>
      <div style={{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"}}>
        {PAY_METHODS.map(({key:k,label:l})=>
          <button key={k} type="button" onClick={()=>setV({...v,payment:k})} style={{display:"flex",alignItems:"center",gap:8,
            height:44,padding:"0 18px",borderRadius:"var(--radius-sm)",cursor:"pointer",fontSize:14,
            border:"1px solid "+(v.payment===k?"var(--primary)":"var(--border-hairline)"),
            background:v.payment===k?"var(--bg-blue-soft)":"var(--stone-0)",
            color:v.payment===k?"var(--secondary-text)":"var(--text-primary)"}}>
            {k==="card"?<CardBrandBadges/>:k==="mpesa"?<MpesaBadge/>:<Icon name="file-text" size={16}/>}{l}</button>)}
      </div>
      {v.payment==="card"&&<div className="pt-2col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        <div style={{gridColumn:"1 / -1"}}><CoField label="Name On Card" name="cardName" error={err.cardName}>
          <input style={{...field,borderColor:err.cardName?"var(--danger)":"var(--border-hairline)"}} value={v.cardName}
            onChange={set("cardName")} autoComplete="cc-name" placeholder="A. Wanjiru"/></CoField></div>
        <div style={{gridColumn:"1 / -1"}}><CoField label="Card Number" name="cardNumber" error={err.cardNumber}>
          <input style={{...field,borderColor:err.cardNumber?"var(--danger)":"var(--border-hairline)"}} value={v.cardNumber}
            onChange={set("cardNumber")} inputMode="numeric" autoComplete="cc-number" placeholder="4242 4242 4242 4242"/></CoField></div>
        <CoField label="Expiry" name="cardExpiry" error={err.cardExpiry}>
          <input style={{...field,borderColor:err.cardExpiry?"var(--danger)":"var(--border-hairline)"}} value={v.cardExpiry}
            onChange={set("cardExpiry")} autoComplete="cc-exp" placeholder="MM / YY"/></CoField>
        <CoField label="CVC" name="cardCvc" error={err.cardCvc}>
          <input style={{...field,borderColor:err.cardCvc?"var(--danger)":"var(--border-hairline)"}} value={v.cardCvc}
            onChange={set("cardCvc")} inputMode="numeric" autoComplete="cc-csc" placeholder="123"/></CoField>
      </div>}
      {v.payment==="mpesa"&&<div style={{maxWidth:320}}><CoField label="M-Pesa Phone Number" name="mpesaPhone" error={err.mpesaPhone}>
        <input style={{...field,borderColor:err.mpesaPhone?"var(--danger)":"var(--border-hairline)"}} value={v.mpesaPhone}
          onChange={set("mpesaPhone")} inputMode="tel" placeholder="07XX XXX XXX"/></CoField>
        <p style={{fontSize:12.5,color:"var(--text-muted)",marginTop:8}}>
          We send an STK push to this number once dates are confirmed; enter your M-Pesa PIN to pay the deposit.</p></div>}
      {v.payment==="invoice"&&<p style={{fontSize:13,color:"var(--text-muted)",margin:0}}>
        We email a Net 30 invoice to your finance contact once dates are confirmed.</p>}
    </div>
    <label style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:13,color:"var(--text-secondary)",cursor:"pointer"}}>
      <input type="checkbox" checked={v.agree} onChange={set("agree")} style={{marginTop:2}}/>
      I agree to the Master Services Agreement and cancellation terms.</label>
    {err.agree&&<span style={{fontSize:12,color:"var(--danger)",marginTop:-14}}>{err.agree}</span>}
    <PtButton tone="primary" size="lg" arrow type="submit" aria-busy={busy}>
      {busy?"Confirming…":"Confirm Booking"}</PtButton>
  </form>;
}

function CheckoutConfirmed({ref_,course,learners,total,email}){
  const { Card } = window.SearchableDesignSystem_29e52a;
  return <Card padding={34} style={{maxWidth:640}}>
    <span style={{color:"var(--secondary-text)",display:"inline-flex",marginBottom:14}}>
      <i data-lucide="check-circle-2" style={{width:26,height:26}}></i></span>
    <h2 style={{fontSize:22,margin:"0 0 10px",fontWeight:"var(--weight-medium)"}}>Booking Request Received.</h2>
    <p style={{fontSize:"var(--text-sm)",color:"var(--text-secondary)"}}>
      Reference <strong>{ref_}</strong> &middot; {course.title}, {learners} learners, ${total.toLocaleString()} total.
      A practice lead will confirm your cohort dates within one working day and send the pre-work to {email}.</p>
    <PtButton tone="secondary" size="md" onClick={()=>{location.href="services-data-skills-training.html"}}>
      Back To All Modules</PtButton></Card>;
}

function CheckoutPage(){
  React.useEffect(()=>{if(window.lucide)lucide.createIcons();});
  window.PT_HERO_PHOTO="uploads/Data Analytics Laptop.jpg";
  const params=new URLSearchParams(location.search);
  const initSlug=params.get("course");
  const [slug,setSlug]=React.useState(COURSES[initSlug]?initSlug:COURSE_ORDER[0]);
  const [learners,setLearners]=React.useState(12);
  const [format,setFormat]=React.useState("On Site");
  const [busy,setBusy]=React.useState(false);
  const [done,setDone]=React.useState(null);
  const course=COURSES[slug];
  const total=learners*PRICE_PER_LEARNER;
  const { Card, TwoToneHeading } = window.SearchableDesignSystem_29e52a;
  const submit=v=>{
    setBusy(true);
    setTimeout(()=>{setBusy(false);
      setDone({ref_:"PT-"+Math.random().toString(36).slice(2,8).toUpperCase(),email:v.email});},900);
  };
  return <><Header/><main id="main" data-screen-label="Checkout">
    <Frame bg="transparent" className="pt-hero">
      <div style={{padding:"64px 0 48px",maxWidth:800}}>
        <span style={{display:"inline-flex",alignItems:"center",height:28,padding:"0 12px",borderRadius:"var(--radius-pill)",
          border:"1px solid rgba(255,255,255,.35)",color:"#FFFFFF",fontSize:12}}>Checkout</span>
        <TwoToneHeading accent size="clamp(28px,3vw,38px)" style={{marginTop:20,fontWeight:700,color:"#FFFFFF",display:"flex",flexDirection:"column"}}
          lead="Reserve Your Cohort." rest="Confirm Learners & Dates."/>
        <p style={{color:"rgba(255,255,255,.78)",fontSize:16,marginTop:20,maxWidth:560}}>
          One form: pick the module, set your cohort size and start window, and choose invoice, card or M-Pesa.
          A practice lead confirms dates within one working day.</p>
        <div style={{display:"flex",gap:0,marginTop:32,flexWrap:"wrap",borderTop:"1px solid rgba(255,255,255,.16)",paddingTop:20}}>
          {[["Module",course.title],["Price / Learner","$"+PRICE_PER_LEARNER],["Cohort Size","6 to 24"],["Format",format]]
            .map(([k,val],i)=><div key={k} style={{padding:i?"0 24px":"0 24px 0 0",borderLeft:i?"1px solid rgba(255,255,255,.16)":"none"}}>
            <div style={{fontSize:18,fontWeight:600,color:"#FFFFFF",letterSpacing:"-0.02em"}}>{val}</div>
            <div style={{fontSize:11.5,color:"rgba(255,255,255,.68)",marginTop:2}}>{k}</div></div>)}
        </div>
      </div>
    </Frame>
    <Section index="01" label="Booking" right={course.title}>
      {done
        ? <CheckoutConfirmed ref_={done.ref_} course={course} learners={learners} total={total} email={done.email}/>
        : <div className="pt-2col" style={{display:"grid",gridTemplateColumns:"1.25fr 0.75fr",gap:40,alignItems:"start"}}>
            <div style={{display:"grid",gap:20}}>
              <label style={{display:"block",maxWidth:360}}>
                <span style={{display:"block",fontSize:13,color:"var(--text-secondary)",marginBottom:7}}>Module</span>
                <select value={slug} onChange={e=>setSlug(e.target.value)} style={field}>
                  {COURSE_ORDER.map(s=><option key={s} value={s}>{COURSES[s].title}</option>)}</select></label>
              <CheckoutForm course={course} learners={learners} setLearners={setLearners} format={format} setFormat={setFormat} onSubmit={submit} busy={busy}/>
            </div>
            <OrderSummary course={course} learners={learners} format={format} total={total}/>
          </div>}
    </Section>
    </main>
    <PtFooter/></>;
}
Object.assign(window,{CheckoutPage});
