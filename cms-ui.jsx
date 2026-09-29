/* Shared UI primitives for the CMS admin: markdown, fields, slide-over, table. */
function cmsMd(src){
  const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const inline=s=>esc(s).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")
    .replace(/(^|\W)\*(?!\s)(.+?)\*/g,"$1<em>$2</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2">$1</a>');
  const out=[];let list=null;
  String(src||"").split("\n").forEach(raw=>{
    const l=raw.trim();
    if(!l){if(list){out.push("</"+list+">");list=null;}return;}
    const li=l.match(/^[-*]\s+(.*)$/),oli=l.match(/^\d+\.\s+(.*)$/),h=l.match(/^(#{1,3})\s+(.*)$/);
    if(h){if(list){out.push("</"+list+">");list=null;}out.push("<h"+(h[1].length+1)+">"+inline(h[2])+"</h"+(h[1].length+1)+">");return;}
    if(li||oli){const tag=li?"ul":"ol";if(list&&list!==tag){out.push("</"+list+">");list=null;}
      if(!list){out.push("<"+tag+">");list=tag;}out.push("<li>"+inline((li||oli)[1])+"</li>");return;}
    if(list){out.push("</"+list+">");list=null;}
    out.push("<p>"+inline(l)+"</p>");
  });
  if(list)out.push("</"+list+">");
  return out.join("");
}

function CmsField({def,value,onChange}){
  const [key,label,type]=def;
  const base="cms-input";
  const set=e=>onChange(key,e.target.value);
  if(type==="markdown")return <MarkdownField label={label} value={value} onChange={v=>onChange(key,v)}/>;
  if(type==="image")return <ImageField label={label} value={value} onChange={v=>onChange(key,v)}/>;
  if(type==="pdf")return <PdfField label={label} value={value} onChange={v=>onChange(key,v)}/>;
  return <label className="cms-field">
    <span>{label}</span>
    {type==="textarea"||type==="list"
      ? <textarea className={base} rows={type==="list"?5:3} value={value||""} onChange={set}/>
      : type.startsWith("select:")
        ? <select className={base} value={value||""} onChange={set}>
            {type.slice(7).split(",").map(o=><option key={o} value={o}>{o}</option>)}</select>
        : <input className={base} value={value||""} onChange={set}/>}
  </label>;
}

function PdfField({label,value,onChange}){
  const inputRef=React.useRef(null);
  const [busy,setBusy]=React.useState(false);
  const pick=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;
    if(f.type!=="application/pdf"&&!f.name.toLowerCase().endsWith(".pdf")){alert("Choose a PDF file.");e.target.value="";return;}
    setBusy(true);
    const reader=new FileReader();
    reader.onload=()=>{setTimeout(()=>{setBusy(false);onChange(reader.result);},500);};
    reader.onerror=()=>setBusy(false);
    reader.readAsDataURL(f);e.target.value="";};
  const uploaded=typeof value==="string"&&value.startsWith("data:application/pdf");
  const kb=uploaded?Math.round(value.length*0.75/1024):0;
  return <label className="cms-field">
    <span>{label}</span>
    <div className="cms-image-pick">
      <button type="button" className="cms-btn" onClick={()=>inputRef.current.click()}>Upload From Device&hellip;</button>
      <span className="cms-image-name">{busy?"Uploading securely\u2026":uploaded?"Uploaded PDF ("+kb+" KB)":"No file uploaded"}</span>
      <input ref={inputRef} type="file" accept="application/pdf" style={{display:"none"}} onChange={pick}/>
    </div>
    {!uploaded&&<input className="cms-input" style={{marginTop:8}} placeholder="Or paste an external PDF URL"
      value={value||""} onChange={e=>onChange(e.target.value)}/>}
    {uploaded&&<div className="cms-pdf-ready">
      <span>Securely uploaded. This URL goes live once you Save or Publish.</span>
      <input className="cms-input" readOnly value={value} onFocus={e=>e.target.select()}/>
      <a className="cms-link" href={value} download="whitepaper.pdf" style={{padding:0}}>Download to check it</a>
      <button type="button" className="cms-link" onClick={()=>onChange("")}>Remove &amp; upload a different file</button>
    </div>}
  </label>;
}

function ImageField({label,value,onChange}){
  const inputRef=React.useRef(null);
  const [busy,setBusy]=React.useState(false);
  const pick=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;setBusy(true);
    const img=new Image(),url=URL.createObjectURL(f);
    img.onload=()=>{const max=1600,s=Math.min(1,max/Math.max(img.width,img.height));
      const c=document.createElement("canvas");c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);
      c.getContext("2d").drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(url);
      let d=c.toDataURL("image/webp",0.8);if(!d.startsWith("data:image/webp"))d=c.toDataURL("image/jpeg",0.8);
      setBusy(false);onChange(d);};
    img.onerror=()=>{setBusy(false);URL.revokeObjectURL(url);};
    img.src=url;e.target.value="";};
  const name=!value?"No file selected":value.startsWith("data:")?"Uploaded image ("+Math.round(value.length*0.75/1024)+" KB)":value.split("/").pop();
  return <label className="cms-field">
    <span>{label}</span>
    <div className="cms-image-pick">
      <button type="button" className="cms-btn" onClick={()=>inputRef.current.click()}>Choose Image&hellip;</button>
      <span className="cms-image-name">{busy?"Optimising…":name}</span>
      <input ref={inputRef} type="file" accept="image/*" style={{display:"none"}} onChange={pick}/>
    </div>
    {value&&<img className="cms-thumb" src={value} alt=""/>}
  </label>;
}

function MarkdownField({label,value,onChange}){
  const [tab,setTab]=React.useState("write");
  return <div className="cms-field">
    <span className="cms-field-head">{label}
      <span className="cms-tabs">
        <button type="button" className={tab==="write"?"on":""} onClick={()=>setTab("write")}>Write</button>
        <button type="button" className={tab==="preview"?"on":""} onClick={()=>setTab("preview")}>Preview</button>
      </span></span>
    {tab==="write"
      ? <textarea className="cms-input cms-md" rows={10} value={value||""} onChange={e=>onChange(e.target.value)}
          placeholder="Markdown: ## heading, **bold**, - list, [link](url)"/>
      : <div className="cms-md-preview" dangerouslySetInnerHTML={{__html:cmsMd(value)}}/>}
  </div>;
}

function CmsStatus({value}){
  return <span className={"cms-pill "+(value==="published"?"is-live":"is-draft")}>{value==="published"?"Published":"Draft"}</span>;
}

function CmsSlideOver({title,subtitle,onClose,footer,children}){
  React.useEffect(()=>{
    const esc=e=>{if(e.key==="Escape")onClose()};
    document.addEventListener("keydown",esc);return()=>document.removeEventListener("keydown",esc);
  },[onClose]);
  return <div className="cms-scrim" onClick={onClose}>
    <aside className="cms-panel" onClick={e=>e.stopPropagation()}>
      <header className="cms-panel-head">
        <div><h2>{title}</h2>{subtitle&&<p>{subtitle}</p>}</div>
        <button className="cms-icon-btn" onClick={onClose} aria-label="Close">✕</button>
      </header>
      <div className="cms-panel-body">{children}</div>
      {footer&&<footer className="cms-panel-foot">{footer}</footer>}
    </aside></div>;
}

function CmsConfirm({title,body,confirmLabel="Delete",onCancel,onConfirm}){
  return <div className="cms-scrim is-center" onClick={onCancel}>
    <div className="cms-dialog" onClick={e=>e.stopPropagation()}>
      <h3>{title}</h3><p>{body}</p>
      <div className="cms-dialog-actions">
        <button className="cms-btn" onClick={onCancel}>Cancel</button>
        <button className="cms-btn is-danger" onClick={onConfirm}>{confirmLabel}</button></div>
    </div></div>;
}

function CmsTable({columns,rows,onOpen,onPreview,onDelete,canDelete}){
  if(!rows.length)return <div className="cms-empty">Nothing here yet. Use New to create the first entry.</div>;
  return <table className="cms-table"><thead><tr>
    {columns.map(([k,l])=><th key={k}>{l}</th>)}<th className="cms-right">Actions</th></tr></thead>
    <tbody>{rows.map(r=><tr key={r.id} onClick={()=>onOpen(r)}>
      {columns.map(([k])=><td key={k}>{k==="status"?<CmsStatus value={r.status}/>:(r[k]||"—")}</td>)}
      <td className="cms-right" onClick={e=>e.stopPropagation()}>
        <button className="cms-link" onClick={()=>onOpen(r)}>Edit</button>
        <a className="cms-link" href={onPreview(r)} target="_blank" rel="noopener">Preview</a>
        {canDelete&&<button className="cms-link is-danger" onClick={()=>onDelete(r)}>Delete</button>}
      </td></tr>)}</tbody></table>;
}

function CmsToast({message}){
  if(!message)return null;
  return <div className="cms-toast">{message}</div>;
}
Object.assign(window,{cmsMd,CmsField,CmsStatus,CmsSlideOver,CmsConfirm,CmsTable,CmsToast});
