import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./risk-console.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  title: "Risk & Reporting Console",
  description: "Capital, exposure and reporting health across the group.",
  robots: { index: false },
};

/** Standalone dashboard: its own shadcn-style dark theme and Geist fonts, no site header or footer. */
export default function RiskConsoleLayout({ children }: LayoutProps<"/risk-console">) {
  return <div className={`rc ${geist.variable} ${geistMono.variable}`}>{children}</div>;
}
