"use client";

import { useRef, useState, useTransition, type CSSProperties, type ReactNode } from "react";
import { PtButton } from "@/components/brand/PtButton";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import type { ContactField, ContactFieldErrors, ContactRequestInput, ContactRequestResult } from "@/types/company";
import { CONTACT_FIELDS, EMPTY_CONTACT, validateContactRequest } from "./validate";

const field: CSSProperties = {
  width: "100%",
  height: 44,
  padding: "0 14px",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--border-hairline)",
  background: "var(--stone-0)",
  color: "var(--text-primary)",
  fontSize: 15,
  fontFamily: "var(--font-sans)",
};

function Field({ label, hint, error, name, children }: { label: string; hint?: string; error?: string; name: string; children: ReactNode }) {
  return (
    <label style={{ display: "block" }} htmlFor={name}>
      <span style={{ display: "block", fontSize: 13, color: "var(--text-secondary)", marginBottom: 7 }}>{label}</span>
      {children}
      {error ? (
        <span id={name + "-error"} role="alert" style={{ display: "flex", alignItems: "flex-start", gap: 6, fontSize: 12, color: "var(--danger)", marginTop: 6 }}>
          <Icon name="alert-circle" size={13} style={{ marginTop: 2, flex: "0 0 auto" }} />
          {error}
        </span>
      ) : (
        hint && (
          <span id={name + "-hint"} style={{ display: "block", fontSize: 12, color: "var(--text-muted)", marginTop: 6 }}>
            {hint}
          </span>
        )
      )}
    </label>
  );
}

type Props = {
  interests: string[];
  roles: string[];
  phone: { label: string; href: string };
  action: (input: ContactRequestInput) => Promise<ContactRequestResult>;
};

type Status = "idle" | "sending" | "sent";

/** Enquiry form: validates on the client, then submits through the page's server action. */
export function ContactForm({ interests, roles, phone, action }: Props) {
  const [v, setV] = useState<ContactRequestInput>(EMPTY_CONTACT);
  const [err, setErr] = useState<ContactFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: ContactField) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setV({ ...v, [k]: e.target.value });
    if (err[k]) setErr({ ...err, [k]: undefined });
  };
  const a11y = (k: ContactField, hasHint = false) => ({
    id: k,
    name: k,
    "aria-invalid": err[k] ? ("true" as const) : undefined,
    "aria-describedby": err[k] ? k + "-error" : hasHint ? k + "-hint" : undefined,
  });
  const border = (k: ContactField): CSSProperties => ({ ...field, borderColor: err[k] ? "var(--danger)" : "var(--border-hairline)" });

  const focusFirst = (errors: ContactFieldErrors) => {
    const first = CONTACT_FIELDS.find((k) => errors[k]);
    if (first) formRef.current?.querySelector<HTMLElement>("#" + first)?.focus();
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    const n = validateContactRequest(v);
    setErr(n);
    setFormError(null);
    if (Object.keys(n).length) {
      focusFirst(n);
      return;
    }
    setStatus("sending");
    startTransition(async () => {
      const res = await action(v);
      if (res.ok) {
        setStatus("sent");
        return;
      }
      setStatus("idle");
      setErr(res.errors);
      setFormError(res.formError ?? null);
      focusFirst(res.errors);
    });
  };

  if (status === "sent")
    return (
      <Card padding={34}>
        <div role="status">
          <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginBottom: 14 }}>
            <Icon name="check-circle-2" size={26} />
          </span>
          <h2 style={{ fontSize: 22, margin: "0 0 10px", fontWeight: 500 }}>Thanks, Your Message Is In.</h2>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
            A practice lead will reply within one working day. If it is urgent, call
            <a href={phone.href} style={{ marginLeft: 4 }}>
              {phone.label}
            </a>
          </p>
        </div>
        <PtButton
          tone="secondary"
          size="md"
          onClick={() => {
            setStatus("idle");
            setV(EMPTY_CONTACT);
          }}
        >
          Send Another Message
        </PtButton>
      </Card>
    );

  return (
    <Card padding={34}>
      <form ref={formRef} onSubmit={submit} noValidate style={{ display: "grid", gap: 18 }} aria-label="Contact form">
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <Field label="Full Name" name="name" error={err.name}>
            <input {...a11y("name")} style={border("name")} value={v.name} onChange={set("name")} autoComplete="name" placeholder="Name" />
          </Field>
          <Field label="Work Email" name="email" error={err.email}>
            <input {...a11y("email")} type="email" style={border("email")} value={v.email} onChange={set("email")} autoComplete="email" placeholder="you@organisation.com" />
          </Field>
        </div>
        <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <Field label="Organisation" name="company" error={err.company}>
            <input {...a11y("company")} style={border("company")} value={v.company} onChange={set("company")} autoComplete="organization" placeholder="Company" />
          </Field>
          <Field label="Your Role" name="role" hint="Optional, helps us bring the right person.">
            <select {...a11y("role", true)} style={field} value={v.role} onChange={set("role")}>
              <option value="">Select A Role</option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <Field label="What Would You Like To Talk About?" name="interest" error={err.interest}>
          <select {...a11y("interest")} style={border("interest")} value={v.interest} onChange={set("interest")}>
            <option value="">Select A Topic</option>
            {interests.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Message" name="message" error={err.message} hint="What is the reporting or data problem you are trying to solve?">
          <textarea
            {...a11y("message", true)}
            rows={5}
            value={v.message}
            onChange={set("message")}
            style={{ ...border("message"), height: "auto", padding: "12px 14px", lineHeight: 1.6, resize: "vertical" }}
            placeholder="We close our books in eight days and nobody trusts the numbers…"
          />
        </Field>
        {formError && (
          <div
            role="alert"
            style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px", border: "1px solid var(--danger)", borderRadius: "var(--radius-sm)", fontSize: "var(--text-sm)", color: "var(--danger)" }}
          >
            <Icon name="alert-circle" size={16} style={{ marginTop: 3, flex: "0 0 auto" }} />
            {formError}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <PtButton tone="primary" size="lg" arrow type="submit" aria-busy={status === "sending"} aria-disabled={status === "sending" || undefined}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </PtButton>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", maxWidth: 320 }}>We reply within one working day. Your details are used only to answer this enquiry.</span>
        </div>
      </form>
    </Card>
  );
}
