import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import { THEME_BOOT_SCRIPT } from "@/hooks/use-theme";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const DESCRIPTION =
  "Pathways Technologies helps organisations in Africa turn data into decisions: analytics platforms, custom software, data skills training and embedded delivery teams.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Pathways Technologies, Data, Applications And Skills", template: "%s | Pathways Technologies" },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Pathways Technologies",
    description: "Analytics platforms, custom software, data skills training and embedded delivery teams.",
    images: ["/uploads/Pathways Logo - HD 1 1.png"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Applies the saved or system theme and the motion guard before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
