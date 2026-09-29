"use client";

/**
 * Course enrolment checkout (prototype: checkout.jsx). Module, cohort size, start window, format,
 * contact details and a payment method, then a booking reference.
 *
 * Payment is a mock: the card inputs are visual only. Their values stay in this component, are
 * never included in the server action payload, and are cleared once a booking is confirmed.
 */
import { useEffect, useRef, useState, useTransition, type ChangeEvent, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { PtButton } from "@/components/brand/PtButton";
import { Frame, Section } from "@/components/layout/Frame";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { routes } from "@/lib/routes";
import type { CheckoutConfig, DeliveryFormat, Enrolment, EnrolmentErrors, EnrolmentInput, EnrolmentResult, PaymentMethod } from "@/types/checkout";
import type { CourseSummary } from "@/types/courses";
import { validateCard, validateEnrolment, type CardErrors, type CardFields } from "./validation";

const money = (n: number) => "$" + n.toLocaleString("en-US");

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
const fieldState = (error?: string): CSSProperties => ({ ...field, borderColor: error ? "var(--danger)" : "var(--border-hairline)" });
const toggle = (on: boolean): CSSProperties => ({
  height: 44,
  padding: "0 18px",
  borderRadius: "var(--radius-sm)",
  cursor: "pointer",
  fontSize: 14,
  border: "1px solid " + (on ? "var(--primary)" : "var(--border-hairline)"),
  background: on ? "var(--bg-blue-soft)" : "var(--stone-0)",
  color: on ? "var(--secondary-text)" : "var(--text-primary)",
});
const groupTitle: CSSProperties = { fontSize: 15, fontWeight: 500, marginBottom: 14 };
const labelText: CSSProperties = { display: "block", fontSize: 13, color: "var(--text-secondary)", marginBottom: 7 };

function CoField({ label, name, error, hint, children }: { label: string; name: string; error?: string; hint?: string; children: ReactNode }) {
  return (
    <label style={{ display: "block" }} htmlFor={name}>
      <span style={labelText}>{label}</span>
      {children}
      {error ? (
        <span id={name + "-msg"} style={{ display: "block", fontSize: 12, color: "var(--danger)", marginTop: 6 }}>
          {error}
        </span>
      ) : (
        hint && (
          <span id={name + "-msg"} style={{ display: "block", fontSize: 12, color: "var(--text-muted)", marginTop: 6 }}>
            {hint}
          </span>
        )
      )}
    </label>
  );
}

/** Props that tie an input to its CoField message. */
const a11y = (name: string, error?: string, hint?: boolean) => ({
  id: name,
  name,
  "aria-invalid": error ? true : undefined,
  "aria-describedby": error || hint ? name + "-msg" : undefined,
});

function CardBrandBadges() {
  return (
    <span style={{ display: "inline-flex", gap: 4 }}>
      <svg width="30" height="18" viewBox="0 0 30 18" aria-label="Visa" role="img">
        <rect width="30" height="18" rx="3" fill="#1A1F71" />
        <text x="15" y="12.5" fontSize="7.5" fontWeight="700" fontStyle="italic" fill="#FFFFFF" textAnchor="middle" fontFamily="Arial">
          VISA
        </text>
      </svg>
      <svg width="30" height="18" viewBox="0 0 30 18" aria-label="Mastercard" role="img">
        <rect width="30" height="18" rx="3" fill="#F4F4F4" />
        <circle cx="12" cy="9" r="5.2" fill="#EB001B" />
        <circle cx="18" cy="9" r="5.2" fill="#F79E1B" fillOpacity=".85" />
      </svg>
    </span>
  );
}

function MpesaBadge() {
  return (
    <svg width="52" height="18" viewBox="0 0 52 18" aria-label="M-Pesa" role="img">
      <rect width="52" height="18" rx="3" fill="#4CAF50" />
      <text x="26" y="12.5" fontSize="8.5" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Arial">
        M-PESA
      </text>
    </svg>
  );
}

function OrderSummary({ course, learners, format, total, price }: { course: CourseSummary; learners: number; format: string; total: number; price: number }) {
  const row: CSSProperties = { display: "flex", justifyContent: "space-between", fontSize: 14, color: "var(--text-secondary)" };
  return (
    <Card padding={26} style={{ position: "sticky", top: 110 }} aria-label="Order summary">
      <div style={{ fontSize: 12, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>Order Summary</div>
      <div style={{ fontSize: 17, fontWeight: 500 }}>{course.title}</div>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>
        {course.length} &middot; {course.audience} &middot; {format}
      </div>
      <div style={{ borderTop: "1px solid var(--grid-line)", marginTop: 18, paddingTop: 16, display: "grid", gap: 10 }}>
        <div style={row}>
          <span>Price per learner</span>
          <span>{money(price)}</span>
        </div>
        <div style={row}>
          <span>Learners</span>
          <span>&times; {learners}</span>
        </div>
      </div>
      <div style={{ borderTop: "1px solid var(--grid-line)", marginTop: 16, paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ fontSize: 15, fontWeight: 500 }}>Total due</span>
        <span style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em" }} aria-live="polite">
          {money(total)}
        </span>
      </div>
      <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 6 }}>Taxes, if applicable, are calculated on your invoice.</div>
      <div
        style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--grid-line)", fontSize: 12, color: "var(--text-muted)" }}
      >
        <Icon name="shield-check" size={15} />
        Secure checkout &middot; cancel free up to 14 days before start
      </div>
    </Card>
  );
}

function Confirmed({ enrolment }: { enrolment: Enrolment }) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus();
  }, []);
  return (
    <Card padding={34} style={{ maxWidth: 640 }} role="status">
      <span style={{ color: "var(--secondary-text)", display: "inline-flex", marginBottom: 14 }}>
        <Icon name="check-circle-2" size={26} />
      </span>
      <h2 ref={heading} tabIndex={-1} style={{ fontSize: 22, margin: "0 0 10px", fontWeight: 500, outline: "none" }}>
        Booking Request Received.
      </h2>
      <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
        Reference <strong>{enrolment.reference}</strong> &middot; {enrolment.courseTitle}, {enrolment.learners} learners, {money(enrolment.total)} total. A practice lead will
        confirm your cohort dates within one working day and send the pre-work to {enrolment.email}.
      </p>
      <PtButton tone="secondary" size="md" href={routes.service("data-skills-training")}>
        Back To All Modules
      </PtButton>
    </Card>
  );
}

type Details = { company: string; contact: string; email: string; phone: string; startWindow: string; mpesaPhone: string; agreedToTerms: boolean };
const EMPTY_DETAILS: Details = { company: "", contact: "", email: "", phone: "", startWindow: "", mpesaPhone: "", agreedToTerms: false };
const EMPTY_CARD: CardFields = { cardName: "", cardNumber: "", cardExpiry: "", cardCvc: "" };
type Errors = EnrolmentErrors & CardErrors;

type Props = {
  courses: CourseSummary[];
  config: CheckoutConfig;
  initialSlug: string;
  submit: (input: EnrolmentInput) => Promise<EnrolmentResult>;
};

export function CheckoutView({ courses, config, initialSlug, submit }: Props) {
  const [slug, setSlug] = useState(initialSlug);
  const [learners, setLearners] = useState(config.defaultLearners);
  const [format, setFormat] = useState<DeliveryFormat>(config.formats[0]);
  const [payment, setPayment] = useState<PaymentMethod>("invoice");
  const [v, setV] = useState<Details>(EMPTY_DETAILS);
  const [card, setCard] = useState<CardFields>(EMPTY_CARD);
  const [err, setErr] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [done, setDone] = useState<Enrolment | null>(null);
  const [pending, startTransition] = useTransition();
  const top = useRef<HTMLDivElement>(null);

  const course = courses.find((c) => c.slug === slug) ?? courses[0];
  const total = learners * config.pricePerLearner;

  /** The server payload. Card fields are deliberately absent. */
  const payload = (d: Details = v, p: PaymentMethod = payment): EnrolmentInput => ({
    courseSlug: slug,
    learners,
    format,
    startWindow: d.startWindow,
    company: d.company,
    contact: d.contact,
    email: d.email,
    phone: d.phone.trim() || undefined,
    paymentMethod: p,
    mpesaPhone: p === "mpesa" ? d.mpesaPhone : undefined,
    agreedToTerms: d.agreedToTerms,
  });

  const check = (d: Details, c: CardFields, p: PaymentMethod): Errors => ({
    ...validateEnrolment(payload(d, p), config),
    ...(p === "card" ? validateCard(c) : {}),
  });

  /* After the first submit attempt, errors update as the visitor fixes them. */
  const setDetail = (k: keyof Details) => (e: ChangeEvent<HTMLInputElement>) => {
    const next = { ...v, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value };
    setV(next);
    if (attempted) setErr(check(next, card, payment));
  };
  const setCardField = (k: keyof CardFields) => (e: ChangeEvent<HTMLInputElement>) => {
    const next = { ...card, [k]: e.target.value };
    setCard(next);
    if (attempted) setErr(check(v, next, payment));
  };
  const choosePayment = (p: PaymentMethod) => {
    setPayment(p);
    if (attempted) setErr(check(v, card, p));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    setFormError(null);
    const errors = check(v, card, payment);
    setErr(errors);
    if (Object.keys(errors).length) {
      const first = Object.keys(errors)[0];
      document.getElementById(first === "agreedToTerms" ? "agree" : first)?.focus();
      return;
    }
    const input = payload();
    startTransition(async () => {
      const res = await submit(input);
      if (res.ok) {
        setCard(EMPTY_CARD);
        setDone(res.enrolment);
        top.current?.scrollIntoView({ block: "start" });
      } else {
        setErr(res.errors);
        setFormError(res.message ?? "Check the highlighted fields and try again.");
      }
    });
  };

  const heroMeta = [
    { label: "Module", value: course.title },
    { label: "Price / Learner", value: money(config.pricePerLearner) },
    { label: "Cohort Size", value: `${config.minLearners} to ${config.maxLearners}` },
    { label: "Format", value: format },
  ];

  return (
    <div data-screen-label="Checkout">
      <Frame bg="transparent" hero={{ photo: config.hero.photo }}>
        <div style={{ padding: "64px 0 48px", maxWidth: 800 }}>
          <span
            style={{ display: "inline-flex", alignItems: "center", height: 28, padding: "0 12px", borderRadius: "var(--radius-pill)", border: "1px solid rgba(255,255,255,.35)", color: "#FFFFFF", fontSize: 12 }}
          >
            {config.hero.eyebrow}
          </span>
          <TwoToneHeading
            as="h1"
            accent
            size="clamp(28px,3vw,38px)"
            style={{ marginTop: 20, fontWeight: 700, color: "#FFFFFF", display: "flex", flexDirection: "column" }}
            lead={config.hero.lead}
            rest={config.hero.rest}
          />
          <p style={{ color: "rgba(255,255,255,.78)", fontSize: 16, marginTop: 20, maxWidth: 560 }}>{config.hero.intro}</p>
          <div style={{ display: "flex", gap: 0, marginTop: 32, flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,.16)", paddingTop: 20 }}>
            {heroMeta.map((m, i) => (
              <div key={m.label} style={{ padding: i ? "0 24px" : "0 24px 0 0", borderLeft: i ? "1px solid rgba(255,255,255,.16)" : "none" }}>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#FFFFFF", letterSpacing: "-0.02em" }}>{m.value}</div>
                <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.68)", marginTop: 2 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Frame>

      <div ref={top} style={{ scrollMarginTop: 90 }} />
      <Section index="01" label="Booking" right={course.title}>
        {done ? (
          <Confirmed enrolment={done} />
        ) : (
          <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 40, alignItems: "start" }}>
            <div style={{ display: "grid", gap: 20 }}>
              <label style={{ display: "block", maxWidth: 360 }} htmlFor="courseSlug">
                <span style={labelText}>Module</span>
                <select id="courseSlug" name="courseSlug" value={slug} onChange={(e) => setSlug(e.target.value)} style={field}>
                  {courses.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </label>

              <form onSubmit={onSubmit} noValidate style={{ display: "grid", gap: 24 }} aria-label="Booking details">
                <div>
                  <div style={groupTitle}>Cohort</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <div role="group" aria-labelledby="learners-label" aria-describedby="learners-msg">
                      <span id="learners-label" style={labelText}>
                        Number Of Learners
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <button
                          type="button"
                          aria-label="Remove a learner"
                          disabled={learners <= config.minLearners}
                          onClick={() => setLearners(Math.max(config.minLearners, learners - 1))}
                          style={{ ...field, width: 40, padding: 0, cursor: "pointer" }}
                        >
                          &minus;
                        </button>
                        <input id="learners" readOnly value={learners} aria-label="Number of learners" style={{ ...field, width: 64, textAlign: "center" }} />
                        <button
                          type="button"
                          aria-label="Add a learner"
                          disabled={learners >= config.maxLearners}
                          onClick={() => setLearners(Math.min(config.maxLearners, learners + 1))}
                          style={{ ...field, width: 40, padding: 0, cursor: "pointer" }}
                        >
                          +
                        </button>
                      </div>
                      <span id="learners-msg" style={{ display: "block", fontSize: 12, color: err.learners ? "var(--danger)" : "var(--text-muted)", marginTop: 6 }}>
                        {err.learners ?? `Cohorts run ${config.minLearners} to ${config.maxLearners} learners.`}
                      </span>
                    </div>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <CoField label="Preferred Start Window" name="startWindow" error={err.startWindow}>
                        <input
                          {...a11y("startWindow", err.startWindow)}
                          style={fieldState(err.startWindow)}
                          value={v.startWindow}
                          onChange={setDetail("startWindow")}
                          placeholder="e.g. Last two weeks of October"
                        />
                      </CoField>
                    </div>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <div role="group" aria-labelledby="format-label">
                      <span id="format-label" style={labelText}>
                        Delivery Format
                      </span>
                      <div style={{ display: "flex", gap: 10 }}>
                        {config.formats.map((f) => (
                          <button key={f} type="button" aria-pressed={format === f} onClick={() => setFormat(f)} style={toggle(format === f)}>
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={groupTitle}>Contact Details</div>
                  <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <CoField label="Organisation" name="company" error={err.company}>
                      <input {...a11y("company", err.company)} style={fieldState(err.company)} value={v.company} onChange={setDetail("company")} autoComplete="organization" placeholder="Meridian Group" />
                    </CoField>
                    <CoField label="Contact Name" name="contact" error={err.contact}>
                      <input {...a11y("contact", err.contact)} style={fieldState(err.contact)} value={v.contact} onChange={setDetail("contact")} autoComplete="name" placeholder="Amina Wanjiru" />
                    </CoField>
                    <CoField label="Work Email" name="email" error={err.email}>
                      <input
                        {...a11y("email", err.email)}
                        type="email"
                        style={fieldState(err.email)}
                        value={v.email}
                        onChange={setDetail("email")}
                        autoComplete="email"
                        placeholder="you@organisation.com"
                      />
                    </CoField>
                    <CoField label="Phone" name="phone" hint="Optional.">
                      <input {...a11y("phone", undefined, true)} type="tel" style={field} value={v.phone} onChange={setDetail("phone")} autoComplete="tel" placeholder="+254 7…" />
                    </CoField>
                  </div>
                </div>

                <div>
                  <div style={groupTitle} id="payment-label">
                    Payment Method
                  </div>
                  <div role="group" aria-labelledby="payment-label" style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                    {config.paymentMethods.map(({ key, label }) => (
                      <button
                        key={key}
                        type="button"
                        aria-pressed={payment === key}
                        onClick={() => choosePayment(key)}
                        style={{ ...toggle(payment === key), display: "flex", alignItems: "center", gap: 8 }}
                      >
                        {key === "card" ? <CardBrandBadges /> : key === "mpesa" ? <MpesaBadge /> : <Icon name="file-text" size={16} />}
                        {label}
                      </button>
                    ))}
                  </div>

                  {payment === "card" && (
                    <div className="pt-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div style={{ gridColumn: "1 / -1" }}>
                        <CoField label="Name On Card" name="cardName" error={err.cardName}>
                          <input {...a11y("cardName", err.cardName)} style={fieldState(err.cardName)} value={card.cardName} onChange={setCardField("cardName")} autoComplete="off" placeholder="A. Wanjiru" />
                        </CoField>
                      </div>
                      <div style={{ gridColumn: "1 / -1" }}>
                        <CoField label="Card Number" name="cardNumber" error={err.cardNumber}>
                          <input
                            {...a11y("cardNumber", err.cardNumber)}
                            style={fieldState(err.cardNumber)}
                            value={card.cardNumber}
                            onChange={setCardField("cardNumber")}
                            inputMode="numeric"
                            autoComplete="off"
                            placeholder="4242 4242 4242 4242"
                          />
                        </CoField>
                      </div>
                      <CoField label="Expiry" name="cardExpiry" error={err.cardExpiry}>
                        <input {...a11y("cardExpiry", err.cardExpiry)} style={fieldState(err.cardExpiry)} value={card.cardExpiry} onChange={setCardField("cardExpiry")} autoComplete="off" placeholder="MM / YY" />
                      </CoField>
                      <CoField label="CVC" name="cardCvc" error={err.cardCvc}>
                        <input
                          {...a11y("cardCvc", err.cardCvc)}
                          style={fieldState(err.cardCvc)}
                          value={card.cardCvc}
                          onChange={setCardField("cardCvc")}
                          inputMode="numeric"
                          autoComplete="off"
                          placeholder="123"
                        />
                      </CoField>
                    </div>
                  )}
                  {payment === "mpesa" && (
                    <div style={{ maxWidth: 320 }}>
                      <CoField label="M-Pesa Phone Number" name="mpesaPhone" error={err.mpesaPhone}>
                        <input {...a11y("mpesaPhone", err.mpesaPhone)} type="tel" style={fieldState(err.mpesaPhone)} value={v.mpesaPhone} onChange={setDetail("mpesaPhone")} inputMode="tel" placeholder="07XX XXX XXX" />
                      </CoField>
                      <p style={{ fontSize: 12.5, color: "var(--text-muted)", marginTop: 8 }}>
                        We send an STK push to this number once dates are confirmed; enter your M-Pesa PIN to pay the deposit.
                      </p>
                    </div>
                  )}
                  {payment === "invoice" && <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>We email a Net 30 invoice to your finance contact once dates are confirmed.</p>}
                </div>

                <label htmlFor="agree" style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--text-secondary)", cursor: "pointer" }}>
                  <input
                    id="agree"
                    name="agreedToTerms"
                    type="checkbox"
                    checked={v.agreedToTerms}
                    onChange={setDetail("agreedToTerms")}
                    aria-invalid={err.agreedToTerms ? true : undefined}
                    aria-describedby={err.agreedToTerms ? "agree-msg" : undefined}
                    style={{ marginTop: 2 }}
                  />
                  I agree to the Master Services Agreement and cancellation terms.
                </label>
                {err.agreedToTerms && (
                  <span id="agree-msg" style={{ fontSize: 12, color: "var(--danger)", marginTop: -14 }}>
                    {err.agreedToTerms}
                  </span>
                )}
                {formError && (
                  <p role="alert" style={{ margin: 0, fontSize: 13, color: "var(--danger)" }}>
                    {formError}
                  </p>
                )}
                <PtButton tone="primary" size="lg" arrow type="submit" aria-busy={pending} disabled={pending}>
                  {pending ? "Confirming…" : "Confirm Booking"}
                </PtButton>
              </form>
            </div>
            <OrderSummary course={course} learners={learners} format={format} total={total} price={config.pricePerLearner} />
          </div>
        )}
      </Section>
    </div>
  );
}
