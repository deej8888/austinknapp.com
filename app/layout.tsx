import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://austinknapp.com"),
  title: "Austin Knapp | AI & Data Engineer | Founder",
  description:
    "Austin Knapp is an AI and Data Engineer building ML systems, SaaS platforms, and production data pipelines.",
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
      "Building ML systems, SaaS platforms, and data pipelines that ship.",
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
      "Building ML systems, SaaS platforms, and data pipelines that ship.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
