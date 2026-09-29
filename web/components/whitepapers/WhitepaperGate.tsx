"use client";

/* Download gate for one whitepaper (prototype: WpGateModal in resources-page.jsx).
   Three labelled fields, validated here and again on the server, then a link to the document. */
import { useCallback, useEffect, useId, useRef, useState, useTransition, type FormEvent, type KeyboardEvent } from "react";
import { PtButton } from "@/components/brand/PtButton";
import { Icon } from "@/components/ui/Icon";
import { validateContactFields, type ContactErrors, type ContactFields } from "@/components/resources/validation";
import type { WhitepaperRequestInput, WhitepaperRequestResult, WhitepaperSummary } from "@/types/whitepapers";
import styles from "./WhitepaperGate.module.css";

export type RequestWhitepaperAction = (input: WhitepaperRequestInput) => Promise<WhitepaperRequestResult>;

export function WhitepaperGateButton({ paper, action }: { paper: WhitepaperSummary; action: RequestWhitepaperAction }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const close = useCallback(() => {
    setOpen(false);
    // Return focus to the button that opened the dialog.
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);
  return (
    <>
      <PtButton
        tone="secondary"
        size="sm"
        arrow
        style={{ alignSelf: "flex-start", marginTop: 8 }}
        aria-haspopup="dialog"
        onClick={(e) => {
          triggerRef.current = e.currentTarget;
          setOpen(true);
        }}
      >
        Download PDF
      </PtButton>
      {open && <WhitepaperGateModal paper={paper} action={action} onClose={close} />}
    </>
  );
}

const FIELDS: { key: keyof ContactFields; label: string; type: string; autoComplete: string }[] = [
  { key: "name", label: "Full Name", type: "text", autoComplete: "name" },
  { key: "email", label: "Work Email", type: "email", autoComplete: "email" },
  { key: "company", label: "Company", type: "text", autoComplete: "organization" },
];

type Done = Extract<WhitepaperRequestResult, { ok: true }>;

export function WhitepaperGateModal({ paper, action, onClose }: { paper: WhitepaperSummary; action: RequestWhitepaperAction; onClose: () => void }) {
  const uid = useId();
  const dialogRef = useRef<HTMLFormElement & HTMLDivElement>(null);
  const [form, setForm] = useState<ContactFields>({ name: "", email: "", company: "" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [attempted, setAttempted] = useState(false);
  const [done, setDone] = useState<Done | null>(null);
  const [pending, startTransition] = useTransition();
  const titleId = `${uid}-title`;
  const descId = `${uid}-desc`;

  // Focus the first field on open, lock page scroll while the dialog is up.
  useEffect(() => {
    const first = dialogRef.current?.querySelector<HTMLElement>("input, button:not([data-close])");
    first?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Move focus to the success panel once the request succeeds.
  useEffect(() => {
    if (done) dialogRef.current?.querySelector<HTMLElement>("[data-success-focus]")?.focus();
  }, [done]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      if (!pending) onClose();
      return;
    }
    if (e.key !== "Tab" || !dialogRef.current) return;
    const nodes = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'));
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const update = (k: keyof ContactFields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = { ...form, [k]: e.target.value };
    setForm(next);
    if (attempted) setErrors(validateContactFields(next));
  };

  const focusFirstInvalid = (errs: ContactErrors) => {
    const key = FIELDS.find((f) => errs[f.key])?.key;
    if (key) document.getElementById(`${uid}-${key}`)?.focus();
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    setFormError(null);
    const errs = validateContactFields(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      focusFirstInvalid(errs);
      return;
    }
    startTransition(async () => {
      try {
        const res = await action({ slug: paper.slug, name: form.name.trim(), email: form.email.trim(), company: form.company.trim() });
        if (res.ok) {
          setDone(res);
          return;
        }
        const { form: fe, slug: se, ...fieldErrors } = res.errors;
        setErrors(fieldErrors);
        setFormError(fe ?? se ?? null);
        focusFirstInvalid(fieldErrors);
      } catch {
        setFormError("We could not send your request. Check your connection and try again.");
      }
    });
  };

  const inner = (
    <>
      <button type="button" data-close onClick={onClose} aria-label="Close" className={styles.close} disabled={pending}>
        <Icon name="x" size={18} />
      </button>
      <div>
        <div id={descId} style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>
          Download · {paper.length}
        </div>
        <h3 id={titleId} style={{ margin: "6px 0 0", fontSize: 20, paddingRight: 24 }}>
          {paper.title}
        </h3>
      </div>
    </>
  );

  return (
    <div className={styles.overlay} onClick={() => !pending && onClose()}>
      {done ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
          onKeyDown={onKeyDown}
          onClick={(e) => e.stopPropagation()}
          className={`pt-modal-card ${styles.card}`}
        >
          {inner}
          <div role="status" tabIndex={-1} data-success-focus className={styles.success}>
            <span className={styles.successIcon} aria-hidden="true">
              <Icon name="circle-check" size={20} />
            </span>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Thanks, {form.name.trim().split(/\s+/)[0]}. Your copy is ready. Open the document to read it or print it to PDF.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 6, flexWrap: "wrap" }}>
            {done.pdfUrl ? (
              <PtButton tone="primary" size="md" arrow href={done.pdfUrl} target="_blank" rel="noopener noreferrer">
                Download The PDF
              </PtButton>
            ) : (
              <PtButton tone="primary" size="md" arrow href={done.documentUrl} target="_blank" rel="noopener">
                Open The Document
              </PtButton>
            )}
            <PtButton tone="ghost" size="md" type="button" onClick={onClose}>
              Close
            </PtButton>
          </div>
        </div>
      ) : (
        <form
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
          noValidate
          onKeyDown={onKeyDown}
          onClick={(e) => e.stopPropagation()}
          onSubmit={onSubmit}
          className={`pt-modal-card ${styles.card}`}
          aria-busy={pending || undefined}
        >
          {inner}
          {FIELDS.map((f) => {
            const err = errors[f.key];
            const id = `${uid}-${f.key}`;
            return (
              <div key={f.key} style={{ display: "grid", gap: 6 }}>
                <label htmlFor={id} style={{ fontSize: "var(--text-sm)" }}>
                  {f.label}
                </label>
                <input
                  id={id}
                  name={f.key}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  required
                  aria-required="true"
                  aria-invalid={err ? true : undefined}
                  aria-describedby={err ? `${id}-error` : undefined}
                  value={form[f.key]}
                  onChange={update(f.key)}
                  disabled={pending}
                  className={styles.input}
                />
                {err && (
                  <span id={`${id}-error`} className={styles.error}>
                    {err}
                  </span>
                )}
              </div>
            );
          })}
          {formError && (
            <p role="alert" className={styles.error} style={{ margin: 0 }}>
              {formError}
            </p>
          )}
          <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
            <PtButton tone="primary" size="md" type="submit" disabled={pending}>
              {pending ? "Sending" : "Get The PDF"}
            </PtButton>
            <PtButton tone="ghost" size="md" type="button" onClick={onClose} disabled={pending}>
              Cancel
            </PtButton>
          </div>
          <span aria-live="polite" className={styles.srOnly}>
            {pending ? "Sending your request" : ""}
          </span>
        </form>
      )}
    </div>
  );
}
