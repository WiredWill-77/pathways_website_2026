export type DeliveryFormat = "On Site" | "Remote";
export type PaymentMethod = "invoice" | "card" | "mpesa";

/** Pricing and limits for a cohort booking. */
export type CheckoutConfig = {
  pricePerLearner: number;
  currency: "USD";
  minLearners: number;
  maxLearners: number;
  defaultLearners: number;
  formats: DeliveryFormat[];
  paymentMethods: { key: PaymentMethod; label: string }[];
  hero: { eyebrow: string; lead: string; rest: string; intro: string; photo: string };
};

/**
 * What the booking form sends to the server. Card fields never appear here: the card inputs are
 * visual only and are dropped in the browser before the server action is called.
 */
export type EnrolmentInput = {
  courseSlug: string;
  learners: number;
  format: DeliveryFormat;
  startWindow: string;
  company: string;
  contact: string;
  email: string;
  phone?: string;
  paymentMethod: PaymentMethod;
  /** Only for M-Pesa, where the STK push goes once dates are confirmed. */
  mpesaPhone?: string;
  agreedToTerms: boolean;
};

export type EnrolmentField = keyof EnrolmentInput;
export type EnrolmentErrors = Partial<Record<EnrolmentField, string>>;

export type Enrolment = {
  reference: string;
  courseSlug: string;
  courseTitle: string;
  learners: number;
  format: DeliveryFormat;
  total: number;
  email: string;
  createdAt: string;
};

export type EnrolmentResult = { ok: true; enrolment: Enrolment } | { ok: false; errors: EnrolmentErrors; message?: string };
