import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shantanu Bal",
  description:
    "Senior software engineer with 10+ years building distributed systems at scale. Focused on financial technology.",
  openGraph: {
    title: "Shantanu Bal",
    description:
      "Senior software engineer with 10+ years building distributed systems at scale. Focused on financial technology.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shantanu Bal",
    description:
      "Senior software engineer with 10+ years building distributed systems at scale. Focused on financial technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-[family-name:var(--font-geist-sans)]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
