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
    default: "Repline — The OS for Player Representation",
    template: "%s | Repline",
  },
  description:
    "Manage players, contracts, contacts, and career pipelines. Built for hockey agents and advisors.",
  metadataBase: new URL("https://repline.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Repline",
    title: "Repline — The OS for Player Representation",
    description:
      "Manage players, contracts, contacts, and career pipelines. Built for hockey agents and advisors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Repline — The OS for Player Representation",
    description:
      "Manage players, contracts, contacts, and career pipelines. Built for hockey agents and advisors.",
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
