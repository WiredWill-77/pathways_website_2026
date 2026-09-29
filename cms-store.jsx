/* Mock API for the Pathways CMS prototype.
   Every call is async with simulated latency, so screens are written against a
   real client. To move to a real backend, replace the bodies of PT_CMS_API with
   fetch() calls against the same shapes; nothing in the UI has to change. */
const CMS_KEY="pt-cms-v1";
const cmsDelay=(ms=240)=>new Promise(r=>setTimeout(r,ms));
const cmsSlug=s=>String(s||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const cmsNow=()=>new Date().toISOString().slice(0,10);
const cmsHref=(t,slug,src)=>(src&&src[slug]?t+"-"+slug+".html?preview=1":t+".html?slug="+encodeURIComponent(slug)+"&preview=1");
const lines=a=>(a||[]).join("\n");
const unlines=s=>String(s||"").split("\n").map(x=>x.trim()).filter(Boolean);

/* ---- schemas -------------------------------------------------------- */
const CMS_COLLECTIONS={
  insights:{label:"Blogs",icon:"newspaper",singular:"Post",
    columns:[["title","Post"],["date","Date"],["categories","Categories"],["status","Status"]],
    fields:[["title","Title","text"],["slug","Slug","slug"],["date","Date","text"],
      ["categories","Categories (comma separated)","tags"],["excerpt","Excerpt","textarea"],
      ["hero","Hero image","image"],["thumb","List thumbnail (optional)","image"],
      ["body","Body","markdown"]],
    preview:i=>cmsHref("blog",i.slug,window.BLOG_POSTS),
    seed:()=>Object.entries(window.BLOG_POSTS||{}).map(([slug,d])=>({
      id:slug,slug,title:d.title,date:d.date,categories:(d.categories||[]).join(", "),
      excerpt:d.excerpt,hero:d.hero||"",thumb:d.thumb||"",body:lines(d.body),
      status:"published",updated:cmsNow()}))},

  cases:{label:"Case Studies",icon:"briefcase",singular:"Case study",
    columns:[["title","Client"],["category","Category"],["published","Published"],["status","Status"]],
    fields:[["title","Client","text"],["slug","Slug","slug"],["category","Category","text"],
      ["published","Year published","text"],["rest","Headline","text"],["intro","Intro","textarea"],
      ["hero","Hero image","image"],["overview","Overview","markdown"],["challenge","Challenge","markdown"],
      ["outcomes","Outcomes (one per line)","list"],["conclusion","Conclusion","textarea"]],
    preview:i=>cmsHref("case-study",i.slug,window.CASE_STUDIES),
    seed:()=>Object.entries(window.CASE_STUDIES||{}).map(([slug,d])=>({
      id:slug,slug,title:d.client,category:d.category,published:d.published,rest:d.rest,intro:d.intro,
      hero:d.hero,overview:d.overview,challenge:d.challenge,outcomes:lines(d.outcomes),
      conclusion:d.conclusion,status:"published",updated:cmsNow()}))},

  papers:{label:"Whitepapers",icon:"file-text",singular:"Whitepaper",
    columns:[["title","Paper"],["type","Type"],["updated","Updated"],["status","Status"]],
    fields:[["title","Title","text"],["slug","Slug","slug"],["type","Type","select:Research,Architecture,Governance,Case Study,Method"],
      ["strap","Strapline","textarea"],["summary","Executive summary","markdown"],
      ["sections","Sections (Heading | body, one per line)","list"],
      ["takeaways","Recommendations (one per line)","list"],
      ["pdfUrl","PDF Download URL (sent after the form is submitted)","pdf"]],
    preview:i=>cmsHref("whitepaper",i.slug,window.WP_DOCS),
    seed:()=>Object.entries(window.WP_DOCS||{}).map(([slug,d])=>({
      id:slug,slug,title:d.title,type:d.type,strap:d.strap,summary:d.summary,
      sections:lines((d.sections||[]).map(s=>s[0]+" | "+s[1])),takeaways:lines(d.takeaways),pdfUrl:d.pdfUrl||"",
      status:"published",updated:cmsNow()}))},

  courses:{label:"Courses",icon:"book-open",singular:"Course",
    columns:[["title","Module"],["audience","Audience"],["length","Length"],["status","Status"]],
    fields:[["title","Title","text"],["slug","Slug","slug"],["audience","Audience","text"],["length","Length","text"],
      ["summary","Card summary / what is covered","textarea"],
      ["eyebrow","Eyebrow","text"],["lead","Heading (line 1)","text"],["rest","Heading (line 2, accent)","text"],
      ["intro","Intro","markdown"],
      ["outline","Module outline (Heading | body, one per line)","list"],
      ["outcomes","Outcomes (one per line)","list"]],
    preview:i=>cmsHref("course",i.slug,window.COURSES),
    seed:()=>(window.COURSE_ORDER||Object.keys(window.COURSES||{})).map(slug=>{
      const d=(window.COURSES||{})[slug]||{};
      return {id:slug,slug,title:d.title,audience:d.audience,length:d.length,summary:d.summary,
        eyebrow:d.eyebrow,lead:d.lead,rest:d.rest,intro:d.intro,
        outline:lines((d.outline||[]).map(o=>o[0]+" | "+o[1])),outcomes:lines(d.outcomes),
        status:"published",updated:cmsNow()};})},

  webinars:{label:"Webinars",icon:"radio",singular:"Webinar",
    columns:[["session","Session"],["date","Date"],["where","Where"],["status","Status"]],
    fields:[["session","Session Title","text"],["slug","Slug","slug"],["date","Date","text"],["where","Where (Place · Time)","text"],
      ["length","Length","text"],["covered","What Is Covered","textarea"],["hero","Hero image","image"],
      ["about","About (one paragraph per line)","markdown"],["learn","What you will learn (one per line)","list"],
      ["speakers","Speakers (Name | Role, one per line)","list"]],
    preview:i=>"webinar.html?slug="+encodeURIComponent(cmsSlug(i.session))+"&preview=1",
    seed:()=>(((window.RESOURCES||{}).webinars||{}).upcoming||[]).map(([date,session,covered,where])=>{
      const x=(window.WEBINAR_DETAILS||{})[cmsSlug(session)]||{};
      return {id:cmsSlug(session),slug:cmsSlug(session),session,date,where,covered,length:x.length||"",hero:x.hero||"",
        about:lines(x.about),learn:lines(x.learn),speakers:lines((x.speakers||[]).map(a=>a[0]+" | "+a[1])),status:"published",updated:cmsNow()};})},

  articles:{label:"Articles",icon:"pen-line",singular:"Article",
    columns:[["title","Article"],["category","Category"],["status","Status"]],
    fields:[["title","Title","text"],["slug","Slug","slug"],["category","Category","text"],["excerpt","Excerpt","textarea"]],
    preview:()=>"resources-articles.html?preview=1",
    seed:()=>(((window.RESOURCES||{}).articles||{}).featured||[]).map(([title,category,excerpt])=>({
      id:cmsSlug(title),slug:cmsSlug(title),title,category,excerpt,status:"published",updated:cmsNow()}))},

  events:{label:"Events",icon:"calendar-days",singular:"Event",
    columns:[["name","Event"],["date","Date"],["city","City"],["status","Status"]],
    fields:[["name","Event Name","text"],["slug","Slug","slug"],["date","Date","text"],["time","Time","text"],["city","City","text"],
      ["venue","Venue","text"],["format","Format","text"],["summary","Summary","textarea"],["hero","Hero image","image"],
      ["about","About (one paragraph per line)","markdown"],["agenda","Agenda (Time | item, one per line)","list"],
      ["audience","Who should attend (one per line)","list"]],
    preview:i=>"event.html?slug="+encodeURIComponent(i.slug)+"&preview=1",
    seed:()=>(((window.RESOURCES||{}).events||{}).schedule||[]).map(([date,name,city,format])=>{
      const x=(window.EVENT_DETAILS||{})[cmsSlug(name)]||{};
      return {id:cmsSlug(name),slug:cmsSlug(name),name,date,city,format,time:x.time||"",venue:x.venue||"",summary:x.summary||"",
        hero:x.hero||"",about:lines(x.about),agenda:lines((x.agenda||[]).map(a=>a[0]+" | "+a[1])),audience:lines(x.audience),
        status:"published",updated:cmsNow()};})},

  dataSkillsTraining:{label:"Data Skills Training",icon:"graduation-cap",singular:"Page",
    columns:[["title","Page"],["updated","Updated"],["status","Status"]],
    fields:[["title","Title","text"],["eyebrow","Eyebrow","text"],["lead","Heading (line 1)","text"],
      ["rest","Heading (line 2, accent)","text"],["intro","Intro","markdown"],["hero","Hero image","image"],
      ["metrics","Hero metrics (one per line, Label | Value)","list"]],
    preview:()=>"services-data-skills-training.html?preview=1",
    seed:()=>{const d=(window.SERVICES_DATA||{})["data-skills-training"]||{};
      return [{id:"data-skills-training",slug:"data-skills-training",title:d.name,eyebrow:d.eyebrow,lead:d.lead,rest:d.rest,
        intro:d.intro,hero:d.hero,metrics:lines((d.meta||[]).map(m=>m[0]+" | "+m[1])),status:"published",updated:cmsNow()}];}},

  learn:{label:"Learn",icon:"library",singular:"Page",
    columns:[["title","Page"],["updated","Updated"],["status","Status"]],
    fields:[["title","Title","text"],["eyebrow","Eyebrow","text"],["lead","Heading (line 1)","text"],
      ["rest","Heading (line 2, accent)","text"],["intro","Intro","markdown"],["hero","Hero image","image"],
      ["metrics","Hero metrics (one per line, Label | Value)","list"]],
    preview:()=>"resources-learn.html?preview=1",
    seed:()=>{const d=(window.RESOURCES||{}).learn||{};
      return [{id:"learn",slug:"learn",title:d.name,eyebrow:d.eyebrow,lead:d.lead,rest:d.rest,
        intro:d.intro,hero:d.hero,metrics:lines((d.meta||[]).map(m=>m[0]+" | "+m[1])),status:"published",updated:cmsNow()}];}}
};

/* ---- storage -------------------------------------------------------- */
function cmsRead(){try{return JSON.parse(localStorage.getItem(CMS_KEY))||null}catch(e){return null}}
function cmsWrite(db){try{localStorage.setItem(CMS_KEY,JSON.stringify(db));return true}catch(e){return false}}
function cmsDb(){
  let db=cmsRead();
  if(!db){db={session:null,collections:{}};}
  let dirty=false;
  Object.keys(CMS_COLLECTIONS).forEach(k=>{
    if(!db.collections[k]){db.collections[k]=CMS_COLLECTIONS[k].seed();dirty=true;}
  });
  const MIG_VERSION=3;
  if(db.migVersion!==MIG_VERSION){
    Object.keys(CMS_COLLECTIONS).forEach(k=>{
      const fresh=CMS_COLLECTIONS[k].seed(),byId={};fresh.forEach(f=>byId[f.id]=f);
      (db.collections[k]||[]).forEach(row=>{
        const f=byId[row.id];if(!f)return;
        Object.keys(f).forEach(key=>{if((row[key]===undefined||row[key]==="")&&f[key]!==undefined&&f[key]!=="")row[key]=f[key];});
      });
    });
    db.migVersion=MIG_VERSION;dirty=true;
  }
  if(dirty)cmsWrite(db);
  return db;
}

const CMS_USERS=[{email:"admin@pathwaystechnologies.com",name:"William Ombura",role:"Admin"},
  {email:"editor@pathwaystechnologies.com",name:"Loren Anduvare",role:"Editor"}];

const PT_CMS_API={
  async session(){await cmsDelay(80);return cmsDb().session;},
  async login(email,role){
    await cmsDelay(420);
    const known=CMS_USERS.find(u=>u.email.toLowerCase()===String(email).toLowerCase());
    const user={email,name:known?known.name:email.split("@")[0],role:role||(known?known.role:"Editor")};
    const db=cmsDb();db.session=user;cmsWrite(db);return user;},
  async logout(){const db=cmsDb();db.session=null;cmsWrite(db);await cmsDelay(120);},
  async list(col){await cmsDelay();return (cmsDb().collections[col]||[]).slice();},
  async save(col,item){
    await cmsDelay(340);
    const db=cmsDb(),rows=db.collections[col]||[];
    const rec={...item,slug:item.slug||cmsSlug(item.title),updated:cmsNow()};
    if(!rec.id)rec.id=rec.slug||("new-"+Date.now());
    const i=rows.findIndex(r=>r.id===rec.id);
    if(i>=0)rows[i]=rec;else rows.unshift(rec);
    db.collections[col]=rows;if(!cmsWrite(db))throw new Error("Browser storage is full. Remove some uploaded images or use smaller ones.");return rec;},
  async remove(col,id){
    await cmsDelay(280);
    const db=cmsDb();db.collections[col]=(db.collections[col]||[]).filter(r=>r.id!==id);
    cmsWrite(db);return true;},
  async reseed(col){
    await cmsDelay(300);
    const db=cmsDb();db.collections[col]=CMS_COLLECTIONS[col].seed();cmsWrite(db);
    return db.collections[col];}
};
Object.assign(window,{PT_CMS_API,CMS_COLLECTIONS,CMS_USERS,cmsSlug,unlines});
