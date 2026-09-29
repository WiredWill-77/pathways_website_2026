"use client";

import { useEffect, type ReactNode } from "react";
import { renderInline } from "@/components/ui/Markdown";
import { routes } from "@/lib/routes";
import type { CmsCollectionKey, CmsColumn, CmsRecord } from "@/types/cms";

/** Where "Preview" opens a record on the site. Drafts and new slugs only resolve once the site reads CMS data. */
export function cmsPreviewHref(col: CmsCollectionKey, r: Pick<CmsRecord, "slug">): string {
  switch (col) {
    case "insights":
      return routes.insight(r.slug);
    case "cases":
      return routes.caseStudy(r.slug);
    case "papers":
      return routes.whitepaper(r.slug);
    case "courses":
      return routes.course(r.slug);
    case "webinars":
      return routes.webinar(r.slug);
    case "events":
      return routes.event(r.slug);
    case "articles":
      return routes.resourceSection("articles");
    case "learn":
      return routes.resourceSection("learn");
    case "dataSkillsTraining":
      return routes.service("data-skills-training");
  }
}

/** Block markdown for the editor's Preview tab: ## headings, - and 1. lists, paragraphs, inline marks. */
export function CmsMarkdown({ source }: { source: string }) {
  const blocks: ReactNode[] = [];
  let list: { tag: "ul" | "ol"; items: string[] } | null = null;
  const flush = () => {
    if (!list) return;
    const Tag = list.tag;
    blocks.push(
      <Tag key={blocks.length}>
        {list.items.map((t, i) => (
          <li key={i}>{renderInline(t)}</li>
        ))}
      </Tag>,
    );
    list = null;
  };
  for (const raw of String(source || "").split("\n")) {
    const l = raw.trim();
    if (!l) {
      flush();
      continue;
    }
    const h = l.match(/^(#{1,3})\s+(.*)$/);
    const li = l.match(/^[-*]\s+(.*)$/);
    const oli = l.match(/^\d+\.\s+(.*)$/);
    if (h) {
      flush();
      const Tag = `h${h[1].length + 1}` as "h2" | "h3" | "h4";
      blocks.push(<Tag key={blocks.length}>{renderInline(h[2])}</Tag>);
    } else if (li || oli) {
      const tag = li ? "ul" : "ol";
      if (list && list.tag !== tag) flush();
      list ??= { tag, items: [] };
      list.items.push((li || oli)![1]);
    } else {
      flush();
      blocks.push(<p key={blocks.length}>{renderInline(l)}</p>);
    }
  }
  flush();
  return <div className="cms-md-preview">{blocks}</div>;
}

export function CmsStatus({ value }: { value: string }) {
  const live = value === "published";
  return <span className={"cms-pill " + (live ? "is-live" : "is-draft")}>{live ? "Published" : "Draft"}</span>;
}

export function CmsSlideOver({
  title,
  subtitle,
  onClose,
  footer,
  children,
}: {
  title: string;
  subtitle?: string;
  onClose: () => void;
  footer?: ReactNode;
  children: ReactNode;
}) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [onClose]);
  return (
    <div className="cms-scrim" onClick={onClose}>
      <aside className="cms-panel" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <header className="cms-panel-head">
          <div>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <button type="button" className="cms-icon-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </header>
        <div className="cms-panel-body">{children}</div>
        {footer && <footer className="cms-panel-foot">{footer}</footer>}
      </aside>
    </div>
  );
}

export function CmsConfirm({
  title,
  body,
  confirmLabel = "Delete",
  onCancel,
  onConfirm,
}: {
  title: string;
  body: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="cms-scrim is-center" onClick={onCancel}>
      <div className="cms-dialog" role="alertdialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="cms-dialog-actions">
          <button type="button" className="cms-btn" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="cms-btn is-danger" onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export function CmsTable({
  col,
  columns,
  rows,
  onOpen,
  onDelete,
  canDelete,
}: {
  col: CmsCollectionKey;
  columns: CmsColumn[];
  rows: CmsRecord[];
  onOpen: (r: CmsRecord) => void;
  onDelete: (r: CmsRecord) => void;
  canDelete: boolean;
}) {
  if (!rows.length) return <div className="cms-empty">Nothing here yet. Use New to create the first entry.</div>;
  return (
    <table className="cms-table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key}>{c.label}</th>
          ))}
          <th className="cms-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id} onClick={() => onOpen(r)}>
            {columns.map((c) => (
              <td key={c.key}>{c.key === "status" ? <CmsStatus value={r.status} /> : r[c.key] || "—"}</td>
            ))}
            <td className="cms-right" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="cms-link" onClick={() => onOpen(r)}>
                Edit
              </button>
              <a className="cms-link" href={cmsPreviewHref(col, r)} target="_blank" rel="noopener">
                Preview
              </a>
              {canDelete && (
                <button type="button" className="cms-link is-danger" onClick={() => onDelete(r)}>
                  Delete
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function CmsToast({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div className="cms-toast" role="status">
      {message}
    </div>
  );
}
