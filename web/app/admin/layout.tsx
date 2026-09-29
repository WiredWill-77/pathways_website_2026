import type { Metadata } from "next";
import "./admin.css";

export const metadata: Metadata = {
  title: "Content Admin",
  description: "Prototype CMS for Pathways Technologies resource pages, insights, case studies and whitepapers.",
  robots: { index: false, follow: false },
};

/** Standalone admin: its own sidebar shell, no site header or footer. */
export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return <div className="cms-root">{children}</div>;
}
