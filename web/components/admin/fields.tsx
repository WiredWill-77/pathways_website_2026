"use client";

import { useRef, useState, type ChangeEvent } from "react";
import type { CmsFieldDef } from "@/types/cms";
import { CmsMarkdown } from "./ui";

type FieldProps = { label: string; value: string; onChange: (v: string) => void };

/** Renders the editor control for one schema field. */
export function CmsField({ def, value, onChange, onError }: { def: CmsFieldDef; value: string | undefined; onChange: (key: string, v: string) => void; onError: (msg: string) => void }) {
  const { key, label, type } = def;
  const v = value ?? "";
  const set = (next: string) => onChange(key, next);
  if (type === "markdown") return <MarkdownField label={label} value={v} onChange={set} />;
  if (type === "image") return <ImageField label={label} value={v} onChange={set} />;
  if (type === "pdf") return <PdfField label={label} value={v} onChange={set} onError={onError} />;
  const onInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => set(e.target.value);
  return (
    <label className="cms-field">
      <span>{label}</span>
      {type === "textarea" || type === "list" ? (
        <textarea className="cms-input" rows={type === "list" ? 5 : 3} value={v} onChange={onInput} />
      ) : type.startsWith("select:") ? (
        <select className="cms-input" value={v} onChange={onInput}>
          {type
            .slice(7)
            .split(",")
            .map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
        </select>
      ) : (
        <input className="cms-input" value={v} onChange={onInput} />
      )}
    </label>
  );
}

const kb = (dataUrl: string) => Math.round((dataUrl.length * 0.75) / 1024);

function MarkdownField({ label, value, onChange }: FieldProps) {
  const [tab, setTab] = useState<"write" | "preview">("write");
  return (
    <div className="cms-field">
      <span className="cms-field-head">
        {label}
        <span className="cms-tabs">
          <button type="button" className={tab === "write" ? "on" : ""} onClick={() => setTab("write")}>
            Write
          </button>
          <button type="button" className={tab === "preview" ? "on" : ""} onClick={() => setTab("preview")}>
            Preview
          </button>
        </span>
      </span>
      {tab === "write" ? (
        <textarea
          className="cms-input cms-md"
          rows={10}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Markdown: ## heading, **bold**, - list, [link](url)"
          aria-label={label}
        />
      ) : (
        <CmsMarkdown source={value} />
      )}
    </div>
  );
}

/** Picks an image, scales it to 1600px on the long side and stores it as a WebP (or JPEG) data URL. */
function ImageField({ label, value, onChange }: FieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const pick = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    setBusy(true);
    const img = new Image();
    const url = URL.createObjectURL(f);
    img.onload = () => {
      const s = Math.min(1, 1600 / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * s);
      c.height = Math.round(img.height * s);
      c.getContext("2d")?.drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      let d = c.toDataURL("image/webp", 0.8);
      if (!d.startsWith("data:image/webp")) d = c.toDataURL("image/jpeg", 0.8);
      setBusy(false);
      onChange(d);
    };
    img.onerror = () => {
      setBusy(false);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };
  const name = !value ? "No file selected" : value.startsWith("data:") ? `Uploaded image (${kb(value)} KB)` : value.split("/").pop();
  return (
    <div className="cms-field">
      <span>{label}</span>
      <div className="cms-image-pick">
        <button type="button" className="cms-btn" onClick={() => inputRef.current?.click()}>
          Choose Image&hellip;
        </button>
        <span className="cms-image-name">{busy ? "Optimising…" : name}</span>
        <input ref={inputRef} type="file" accept="image/*" hidden onChange={pick} aria-label={label} />
      </div>
      {value && <img className="cms-thumb" src={value} alt="" />}
    </div>
  );
}

function PdfField({ label, value, onChange, onError }: FieldProps & { onError: (msg: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const pick = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      onError("Choose a PDF file.");
      return;
    }
    setBusy(true);
    const reader = new FileReader();
    reader.onload = () => {
      setBusy(false);
      onChange(String(reader.result));
    };
    reader.onerror = () => setBusy(false);
    reader.readAsDataURL(f);
  };
  const uploaded = value.startsWith("data:application/pdf");
  return (
    <div className="cms-field">
      <span>{label}</span>
      <div className="cms-image-pick">
        <button type="button" className="cms-btn" onClick={() => inputRef.current?.click()}>
          Upload From Device&hellip;
        </button>
        <span className="cms-image-name">{busy ? "Uploading…" : uploaded ? `Uploaded PDF (${kb(value)} KB)` : "No file uploaded"}</span>
        <input ref={inputRef} type="file" accept="application/pdf" hidden onChange={pick} aria-label={label} />
      </div>
      {!uploaded && (
        <input className="cms-input" style={{ marginTop: 8 }} placeholder="Or paste an external PDF URL" value={value} onChange={(e) => onChange(e.target.value)} aria-label={label} />
      )}
      {uploaded && (
        <div className="cms-pdf-ready">
          <span>Uploaded. The file goes live once you Save or Publish.</span>
          <a className="cms-link" href={value} download="whitepaper.pdf" style={{ padding: 0 }}>
            Download to check it
          </a>
          <button type="button" className="cms-link" style={{ padding: 0, textAlign: "left" }} onClick={() => onChange("")}>
            Remove and upload a different file
          </button>
        </div>
      )}
    </div>
  );
}
