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
  metadataBase: new URL("https://shantanubal.com"),
  title: "Shantanu Bal",
  description:
    "Senior software engineer with 10+ years building distributed systems at scale. Focused on financial technology.",
  authors: [{ name: "Shantanu Bal", url: "https://shantanubal.com" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Shantanu Bal",
    description:
      "Senior software engineer with 10+ years building distributed systems at scale. Focused on financial technology.",
    url: "https://shantanubal.com",
    siteName: "Shantanu Bal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shantanu Bal",
    description:
      "Senior software engineer with 10+ years building distributed systems at scale. Focused on financial technology.",
  },
  alternates: {
    canonical: "https://shantanubal.com",
  },
  verification: {
    google: "EYkGvTxDFNVMP5W0w9fD5ukJwMMTtheAqgIMBj8MD3g",
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
