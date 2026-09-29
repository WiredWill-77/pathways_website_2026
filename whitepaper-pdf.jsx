/* Printable 4-page whitepaper documents. window.PT_WP_SLUG names the paper. */
const WP_DOCS={
  "data-skills-gap":{title:"The 2026 Data Skills Gap",type:"Research",
    strap:"Survey of 240 East African data teams: hiring, retention and the roles that stay unfilled.",
    summary:"Across 240 data teams in Kenya, Uganda, Tanzania and Rwanda, the shortage is not of junior analysts. It is of the mid-level engineers and analytics leads who turn a platform into a working reporting practice. This paper sets out where the gap sits, what it costs, and what a realistic training ladder looks like inside an organisation that cannot hire its way out.",
    sections:[["Where The Shortage Bites","Roles that stay open longest are analytics engineer, data platform engineer and analytics lead. Entry-level applications outnumber openings by a wide margin, while mid-level roles sit unfilled for months and are often closed by promoting someone who is not yet ready for the scope."],
      ["What It Costs","Teams reported delivery slipping by one to two quarters per unfilled senior role. The second cost is rework: platforms built without a lead who owns definitions tend to be rebuilt within eighteen months."],
      ["What Works","Organisations that closed the gap did it with an internal ladder: hire at entry level against a defined curriculum, pair every learner with live delivery work, and hold a named person accountable for definitions and review."]],
    takeaways:["Hire for the mid-level gap, train for the entry level","Budget training against delivery work, not classroom hours","Name an owner for metric definitions before buying tooling","Measure retention at 12 and 24 months, not at probation"]},
  "governed-warehouse":{title:"Reference Architecture: Governed Warehouse",type:"Architecture",
    strap:"Azure and Microsoft Fabric patterns for a regulated warehouse, with cost and access models.",
    summary:"A reference architecture for organisations that have to prove who touched what. It covers ingestion, the medallion layers, access control, lineage and the cost model, written so an architect can lift the patterns and a risk reviewer can follow the controls.",
    sections:[["Layers And Boundaries","Bronze holds raw source extracts with no transformation and a retention rule. Silver holds conformed entities with tested keys. Gold holds the certified marts the business reports from. Each boundary has an owner, a test suite and a refresh contract."],
      ["Access And Audit","Access is granted to roles at the gold layer and to service principals below it. Every query path is logged and lineage is captured from source to report, so an auditor can trace a number on a dashboard back to a source record."],
      ["Cost Model","Capacity is sized against the refresh schedule rather than peak concurrency, with reserved capacity for the certified layer and on-demand for exploration. The paper includes the cost breakdown we use in planning workshops."]],
    takeaways:["Certify a small gold layer rather than the whole warehouse","Log lineage from day one; retrofitting it is the expensive path","Separate exploration capacity from the certified refresh","Write the refresh contract down and test against it"]},
  "model-documentation":{title:"Model Documentation For Approval",type:"Governance",
    strap:"The pack a risk committee needs, and the sections that get rejected most often.",
    summary:"Model approval stalls on documentation more often than on the model. This paper sets out the pack a risk committee actually reads, the evidence each section has to carry, and the three sections that get sent back most often in the reviews we have supported.",
    sections:[["What The Pack Contains","Purpose and scope, data lineage, feature definitions, training and validation evidence, performance by segment, monitoring plan, fallback procedure and an owner. Anything outside that list is appendix material."],
      ["Where Packs Get Rejected","Three sections cause most rejections: segment-level performance that hides a weak cohort, a monitoring plan with no thresholds, and a fallback procedure that names no human decision-maker."],
      ["Keeping It Current","Documentation written once at approval goes stale within two release cycles. Tie each section to a system of record so the pack can be regenerated rather than rewritten."]],
    takeaways:["Report performance by segment, not in aggregate","Give every monitoring metric a threshold and an owner","Name the human who acts when the model is wrong","Generate the pack from source, do not maintain it by hand"]},
  "digital-disbursement":{title:"Digital Disbursement At National Scale",type:"Case Study",
    strap:"eVoucher issuance, redemption and daily reconciliation across a public programme.",
    summary:"How a national eVoucher programme issues, redeems and reconciles at scale, written from delivery experience. The paper covers the issuance model, the offline redemption path, the daily reconciliation run and the controls that keep the programme auditable.",
    sections:[["Issuance","Entitlements are issued against a verified beneficiary register, with duplicate detection run before issuance rather than at reconciliation. Each voucher carries a programme, a value and an expiry."],
      ["Redemption In The Field","Agents redeem offline and sync on reconnect. The paper covers the conflict rules applied when the same voucher is presented twice and the audit trail each redemption carries."],
      ["Daily Reconciliation","Every day the programme reconciles issuance, redemption and settlement to the cent, with exceptions routed to a named queue and aged. Nothing settles without a matched record."]],
    takeaways:["Detect duplicates at issuance, not at settlement","Design for offline redemption from the start","Reconcile daily and age every exception","Give each exception queue a named owner"]},
  "data-product-value":{title:"Measuring Data Product Value",type:"Method",
    strap:"Scoring use cases on value over effort so a roadmap survives its first quarter.",
    summary:"A scoring method for data roadmaps. Use cases are scored on value and effort using definitions a business sponsor and a delivery lead can both agree to, so the roadmap survives contact with the first quarter of delivery.",
    sections:[["The Scoring Model","Value is scored on decision frequency, decision value and the number of teams affected. Effort is scored on data readiness, integration surface and governance burden. Both use fixed anchors so scores are comparable across sponsors."],
      ["Running The Session","Score in one room with the sponsor and the delivery lead present. Disagreement on a score is the useful output: it usually means the use case is not yet defined well enough to build."],
      ["Reviewing The Roadmap","Rescore quarterly. Items that keep slipping down the list are candidates for removal, not for another quarter of waiting."]],
    takeaways:["Use fixed anchors so scores compare across sponsors","Score with sponsor and delivery lead in the same room","Treat score disagreement as a definition problem","Rescore quarterly and cut what keeps slipping"]}
};
const WPPDF_STYLE=`
.wp-page{width:100%;height:100%;display:flex;flex-direction:column;font-family:Poppins,Arial,sans-serif;box-sizing:border-box}
.wp-cover{background:#1D242B;color:#fff;padding:64px 56px;justify-content:space-between}
.wp-cover img{height:34px}
.wp-cover .wp-eyebrow{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#FFAA4B;margin-bottom:18px}
.wp-cover h1{font-size:42px;line-height:1.15;margin:0 0 18px;font-weight:600;max-width:540px}
.wp-cover p{font-size:18px;color:rgba(255,255,255,.78);max-width:480px;line-height:1.55;margin:0}
.wp-cover .wp-meta{display:flex;gap:36px;border-top:1px solid rgba(255,255,255,.16);padding-top:20px;font-size:13px;color:rgba(255,255,255,.68)}
.wp-cover .wp-meta b{display:block;color:#fff;font-size:15px;font-weight:500;margin-top:4px}
.wp-inner{background:#fff;color:#1D242B;padding:52px 56px}
.wp-head{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #E7E5E4;padding-bottom:16px;margin-bottom:32px}
.wp-head img{height:22px}
.wp-head span{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#78828C}
.wp-h2{font-size:26px;font-weight:600;margin:0 0 14px}
.wp-h3{font-size:16px;font-weight:600;margin:0 0 6px}
.wp-body{font-size:14.5px;line-height:1.7;color:#424B54;margin:0 0 26px;max-width:640px}
.wp-check{display:flex;gap:10px;font-size:14px;color:#334;line-height:1.55;margin-bottom:12px}
.wp-check b{color:#1B87C9;flex:none}
.wp-contact{margin-top:auto;border-top:1px solid #E7E5E4;padding-top:22px;font-size:13px;color:#5A636C;display:flex;justify-content:space-between}
.wp-foot{font-size:11px;color:#9AA1A8;margin-top:auto;padding-top:16px}
`;
function WhitepaperPdf(){
  const d=WP_DOCS[window.PT_WP_SLUG];
  if(!d)return <div style={{padding:60}}>Unknown whitepaper.</div>;
  const logoW="uploads/Pathways Technologies Logo - White 1.png",logo="uploads/Pathways Logo - HD 1 1.png";
  return <><style dangerouslySetInnerHTML={{__html:WPPDF_STYLE}}/>
  <doc-page size="letter">
    <section className="page wp-page wp-cover">
      <div><img src={logoW} alt="Pathways Technologies"/></div>
      <div><div className="wp-eyebrow">Whitepaper · {d.type}</div><h1>{d.title}</h1><p>{d.strap}</p></div>
      <div className="wp-meta"><div>Type<b>{d.type}</b></div><div>Length<b>4 pages</b></div><div>Published<b>2026</b></div></div>
    </section>
    <section className="page wp-page wp-inner">
      <div className="wp-head"><img src={logo} alt=""/><span>Page 2 of 4 · Summary</span></div>
      <div className="wp-h2">Executive Summary</div>
      <p className="wp-body">{d.summary}</p>
      <div className="wp-h2" style={{fontSize:20}}>What Is Inside</div>
      {d.sections.map(([h],i)=><div className="wp-check" key={h}><b>{i+1}</b>{h}</div>)}
      <div className="wp-check"><b>4</b>Recommendations</div>
      <div className="wp-foot">Pathways Technologies — pathwaystechnologies.com</div>
    </section>
    <section className="page wp-page wp-inner">
      <div className="wp-head"><img src={logo} alt=""/><span>Page 3 of 4 · Findings</span></div>
      {d.sections.map(([h,b])=><div key={h}><div className="wp-h3">{h}</div><p className="wp-body">{b}</p></div>)}
      <div className="wp-foot">Pathways Technologies — pathwaystechnologies.com</div>
    </section>
    <section className="page wp-page wp-inner">
      <div className="wp-head"><img src={logo} alt=""/><span>Page 4 of 4 · Recommendations</span></div>
      <div className="wp-h2">What To Do Next</div>
      {d.takeaways.map(t=><div className="wp-check" key={t}><b>✓</b>{t}</div>)}
      <p className="wp-body" style={{marginTop:26}}>Pathways Technologies builds and runs the platforms behind this work across finance, humanitarian response, agriculture and the public sector. If you want this applied to your own estate, tell us what you are working with and we will tell you within a week whether it is a two-week discovery or a straight build.</p>
      <div className="wp-contact"><span>Talk to us about applying this.</span><span>info@pathwaystechnologies.com</span></div>
    </section>
  </doc-page></>;
}
Object.assign(window,{WhitepaperPdf,WP_DOCS});
