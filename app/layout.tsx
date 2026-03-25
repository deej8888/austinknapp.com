import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://austinknapp.com"),
  title: "Austin Knapp | AI & Data Engineer | Founder",
  description:
    "Personal website of Austin Knapp, an AI and data engineer building ML systems, SaaS products, and production data pipelines.",
  keywords: [
    "Austin Knapp",
    "AI Engineer",
    "Data Engineer",
    "Machine Learning Engineer",
    "TypeScript",
    "Python",
    "SaaS",
    "Data Pipelines",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Austin Knapp | AI & Data Engineer | Founder",
    description:
      "Personal website of Austin Knapp, focused on AI systems, SaaS products, and production data work.",
    url: "https://austinknapp.com",
    siteName: "Austin Knapp",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Austin Knapp - AI & Data Engineer | Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Knapp | AI & Data Engineer | Founder",
    description:
      "Personal website of Austin Knapp, focused on AI systems, SaaS products, and production data work.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${fraunces.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
