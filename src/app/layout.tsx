import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/schema-org";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Repline | Hockey Agent & Advisor CRM — Manage Players, Contracts & Pipelines",
    template: "%s",
  },
  description:
    "The CRM built for hockey agents and advisors. Track players, contracts, scouting reports, and compliance deadlines in one place. Free 30-day trial.",
  metadataBase: new URL("https://www.repline.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Repline",
    images: [
      {
        url: "https://www.repline.io/og",
        width: 1200,
        height: 630,
        alt: "Repline — The CRM built for hockey agents and advisors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.repline.io/og"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
