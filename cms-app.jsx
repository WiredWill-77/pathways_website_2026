/* CMS screens: login, dashboard, collection list + slide-over editor, team. */
const {useState,useEffect,useCallback}=React;

function CmsLogin({onDone}){
  const [email,setEmail]=useState("admin@pathwaystechnologies.com");
  const [pw,setPw]=useState("demo-password");
  const [role,setRole]=useState("Admin");
  const [busy,setBusy]=useState(false);
  const submit=async e=>{e.preventDefault();setBusy(true);const u=await PT_CMS_API.login(email,role);setBusy(false);onDone(u);};
  return <div className="cms-login">
    <form className="cms-login-card" onSubmit={submit}>
      <img src="uploads/Pathways Logo - HD 1 1.png" alt="Pathways Technologies" className="cms-login-logo"/>
      <h1>Content admin</h1>
      <p className="cms-muted">Mock sign-in for the prototype. Any password works.</p>
      <label className="cms-field"><span>Email</span>
        <input className="cms-input" value={email} onChange={e=>setEmail(e.target.value)} type="email" required/></label>
      <label className="cms-field"><span>Password</span>
        <input className="cms-input" value={pw} onChange={e=>setPw(e.target.value)} type="password" required/></label>
      <label className="cms-field"><span>Sign in as</span>
        <select className="cms-input" value={role} onChange={e=>setRole(e.target.value)}>
          <option>Admin</option><option>Editor</option></select></label>
      <button className="cms-btn is-primary cms-block" disabled={busy}>{busy?"Signing in…":"Sign In"}</button>
      <p className="cms-muted cms-small">Admins can delete content and manage the team. Editors can create and update.</p>
    </form></div>;
}

function CmsEditor({col,item,onClose,onSaved,canPublish}){
  const cfg=CMS_COLLECTIONS[col];
  const [draft,setDraft]=useState({status:"draft",...item});
  const [busy,setBusy]=useState(false);
  const set=(k,v)=>setDraft(d=>({...d,[k]:v}));
  const save=async status=>{
    setBusy(true);
    let rec;try{rec=await PT_CMS_API.save(col,{...draft,status:status||draft.status||"draft"});}
    catch(e){setBusy(false);alert(e.message);return;}
    setBusy(false);onSaved(rec,status==="published"?"Published":"Saved");
  };
  const isNew=!item.id;
  return <CmsSlideOver title={isNew?("New "+cfg.singular.toLowerCase()):draft.title||cfg.singular}
    subtitle={isNew?"Draft, not yet visible on the site":"Last updated "+(draft.updated||"—")}
    onClose={onClose}
    footer={<>
      <div className="cms-foot-left">
        <CmsStatus value={draft.status||"draft"}/>
        {draft.slug&&<a className="cms-link" href={cfg.preview(draft)} target="_blank" rel="noopener">Open preview</a>}
      </div>
      <div className="cms-foot-right">
        <button className="cms-btn" onClick={onClose}>Cancel</button>
        <button className="cms-btn" disabled={busy} onClick={()=>save("draft")}>Save draft</button>
        {canPublish&&<button className="cms-btn is-primary" disabled={busy} onClick={()=>save("published")}>
          {busy?"Working…":"Publish"}</button>}
      </div></>}>
    {cfg.fields.map(f=><CmsField key={f[0]} def={f} value={draft[f[0]]}
      onChange={(k,v)=>set(k, k==="title"&&isNew&&!draft.slug?(set("slug",cmsSlug(v)),v):v)}/>)}
  </CmsSlideOver>;
}

function CmsCollection({col,user,toast,go}){
  const cfg=CMS_COLLECTIONS[col];
  const [rows,setRows]=useState(null);
  const [q,setQ]=useState("");
  const [filter,setFilter]=useState("all");
  const [editing,setEditing]=useState(null);
  const [confirm,setConfirm]=useState(null);
  const [page,setPage]=useState(1);
  const pageSize=10;
  const load=useCallback(async()=>{setRows(null);setRows(await PT_CMS_API.list(col));},[col]);
  useEffect(()=>{load()},[load]);
  useEffect(()=>{setPage(1)},[q,filter,col]);
  const visible=(rows||[]).filter(r=>(filter==="all"||r.status===filter)&&
    (!q||JSON.stringify(r).toLowerCase().includes(q.toLowerCase())));
  const pageCount=Math.max(1,Math.ceil(visible.length/pageSize));
  const pageRows=visible.slice((page-1)*pageSize,page*pageSize);
  const isAdmin=user.role==="Admin";
  return <>
    <a className="cms-back" href="#dashboard" onClick={()=>go("dashboard")}>&larr; Back to Dashboard</a>
    <header className="cms-page-head">
      <div><h1>{cfg.label}</h1>
        <p className="cms-muted">{rows?rows.length:"…"} entries · {(rows||[]).filter(r=>r.status==="draft").length} in draft</p></div>
      <div className="cms-head-actions">
        <input className="cms-input cms-search" placeholder="Search" value={q} onChange={e=>setQ(e.target.value)}/>
        <select className="cms-input cms-select" value={filter} onChange={e=>setFilter(e.target.value)}>
          <option value="all">All statuses</option><option value="published">Published</option><option value="draft">Draft</option></select>
        <button className="cms-btn is-primary" onClick={()=>setEditing({})}>New</button>
      </div>
    </header>
    {rows===null?<div className="cms-empty">Loading…</div>
      :<>
      <CmsTable columns={cfg.columns} rows={pageRows} canDelete={isAdmin}
        onOpen={r=>setEditing(r)} onPreview={r=>cfg.preview(r)} onDelete={r=>setConfirm(r)}/>
      {visible.length>0&&<div className="cms-pagination">
        <span className="cms-muted cms-small">Showing {(page-1)*pageSize+1}–{Math.min(page*pageSize,visible.length)} of {visible.length}</span>
        <div className="cms-page-btns">
          <button className="cms-btn" disabled={page===1} onClick={()=>setPage(p=>p-1)}>Prev</button>
          <span className="cms-muted cms-small">Page {page} of {pageCount}</span>
          <button className="cms-btn" disabled={page===pageCount} onClick={()=>setPage(p=>p+1)}>Next</button>
        </div>
      </div>}
      </>}
    {editing&&<CmsEditor col={col} item={editing} canPublish={true}
      onClose={()=>setEditing(null)}
      onSaved={(rec,msg)=>{setEditing(null);toast(msg+" · "+(rec.title||cfg.singular));load();}}/>}
    {confirm&&<CmsConfirm title={"Delete "+(confirm.title||"entry")+"?"}
      body="This removes it from the CMS and from its page on the site."
      onCancel={()=>setConfirm(null)}
      onConfirm={async()=>{await PT_CMS_API.remove(col,confirm.id);setConfirm(null);toast("Deleted");load();}}/>}
  </>;
}

function CmsDashboard({user,go}){
  const [counts,setCounts]=useState({});
  useEffect(()=>{let live=true;(async()=>{
    const out={};
    await Promise.all(Object.keys(CMS_COLLECTIONS).map(async k=>{
      try{const rows=await PT_CMS_API.list(k);
        out[k]={total:rows.length,draft:rows.filter(r=>r.status==="draft").length};}
      catch(e){out[k]={total:0,draft:0};}
    }));
    if(live)setCounts(out);})();
    return()=>{live=false};},[]);
  useEffect(()=>{if(window.lucide){window.lucide.createIcons();return;}
    let tries=0;const t=setInterval(()=>{tries++;if(window.lucide){window.lucide.createIcons();clearInterval(t);}
      else if(tries>20)clearInterval(t);},150);
    return()=>clearInterval(t);},[counts]);
  return <>
    <button type="button" className="cms-back" onClick={()=>{
      if(document.referrer&&new URL(document.referrer).origin===location.origin)history.back();
      else location.href="Pathways Landing Page.html";}}>&larr; Back</button>
    <header className="cms-page-head"><div>
      <h1>Good to see you, {user.name.split(" ")[0]}</h1>
      <p className="cms-muted">Signed in as {user.role}. Everything here is stored through the mock API layer.</p></div></header>
    <div className="cms-cards">
      {Object.entries(CMS_COLLECTIONS).map(([k,c])=>{const n=counts[k];return <button key={k} className="cms-card" onClick={()=>go(k)}>
        <span className="cms-card-icon"><i data-lucide={c.icon}></i></span>
        <span className="cms-card-num">{n?n.total:"—"}</span>
        <span className="cms-card-label">{c.label}</span>
        <span className={"cms-card-draft"+(n&&n.draft>0?" has-draft":"")}>{n?n.draft:0} in draft</span>
      </button>;})}
    </div>
    <div className="cms-note">
      <h3>How this prototype persists content</h3>
      <p>Saves go through <code>PT_CMS_API</code>, a stubbed async client backed by browser storage. Point those four
      methods at real endpoints and the screens work unchanged. Site pages apply published entries on load, so
      a publish shows on its page straight away. Drafts stay hidden unless you use Preview.</p>
    </div></>;
}

function CmsTeam({go}){
  return <>
    <a className="cms-back" href="#dashboard" onClick={()=>go("dashboard")}>&larr; Back to Dashboard</a>
    <header className="cms-page-head"><div><h1>Team</h1>
      <p className="cms-muted">Mock directory. Roles decide who can delete content.</p></div></header>
    <table className="cms-table"><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Can delete</th></tr></thead>
      <tbody>{CMS_USERS.map(u=><tr key={u.email}><td>{u.name}</td><td>{u.email}</td><td>{u.role}</td>
        <td>{u.role==="Admin"?"Yes":"No"}</td></tr>)}</tbody></table></>;
}

function CmsApp(){
  const [user,setUser]=useState(undefined);
  const [view,setView]=useState(location.hash.replace("#","")||"dashboard");
  const [msg,setMsg]=useState("");
  useEffect(()=>{PT_CMS_API.session().then(s=>setUser(s||null))},[]);
  useEffect(()=>{const f=()=>setView(location.hash.replace("#","")||"dashboard");
    addEventListener("hashchange",f);return()=>removeEventListener("hashchange",f)},[]);
  const toast=m=>{setMsg(m);setTimeout(()=>setMsg(""),2600)};
  const go=v=>{location.hash=v;setView(v)};
  if(user===undefined)return <div className="cms-boot">Loading admin…</div>;
  if(!user)return <CmsLogin onDone={u=>{setUser(u);go("dashboard")}}/>;
  const nav=[["dashboard","Dashboard"],...Object.entries(CMS_COLLECTIONS).map(([k,c])=>[k,c.label]),
    ...(user.role==="Admin"?[["team","Team"]]:[])];
  return <div className="cms-shell">
    <aside className="cms-side">
      <a className="cms-brand" href="Pathways Landing Page.html">
        <img className="cms-logo-light" src="uploads/Pathways Logo - HD 1 1.png" alt=""/>
        <img className="cms-logo-dark" src="uploads/Pathways Technologies Logo - White 1.png" alt=""/>
        <span>Content Admin</span></a>
      <nav>{nav.map(([k,l])=><button key={k} className={view===k?"on":""} onClick={()=>go(k)}>{l}</button>)}</nav>
      <div className="cms-side-foot">
        <div className="cms-user-row">
          <div className="cms-user"><b>{user.name}</b><span>{user.role}</span></div>
          <ThemeToggle/>
        </div>
        <a className="cms-link" href="Pathways Landing Page.html" target="_blank" rel="noopener">View site</a>
        <button className="cms-link" onClick={async()=>{await PT_CMS_API.logout();setUser(null)}}>Sign out</button>
      </div>
    </aside>
    <main className="cms-main">
      {view==="dashboard"?<CmsDashboard user={user} go={go}/>
        :view==="team"?<CmsTeam go={go}/>
        :CMS_COLLECTIONS[view]?<CmsCollection key={view} col={view} user={user} toast={toast} go={go}/>
        :<div className="cms-empty">Unknown section.</div>}
    </main>
    <CmsToast message={msg}/>
  </div>;
}
Object.assign(window,{CmsApp});
