import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section";
import { ComparisonTable, PersonaQuote, CalloutBox } from "@/components/comparison-table";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { defaultOgImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Repline vs. Salesforce for Hockey Agencies — Purpose-Built Beats Enterprise",
  description:
    "Salesforce is too expensive and too complex for hockey advisory firms. Compare pricing, setup, and hockey-specific features. See why agencies choose Repline.",
  alternates: { canonical: "/vs/salesforce" },
  openGraph: {
    type: "website",
    title: "Repline vs. Salesforce for Hockey Agencies — Purpose-Built Beats Enterprise",
    description:
      "Salesforce is too expensive and too complex for hockey advisory firms. Compare pricing, setup, and hockey-specific features.",
    url: "https://www.repline.io/vs/salesforce",
    images: [defaultOgImage],
  },
};

const rows = [
  {
    feature: "Setup time",
    competitor: "Weeks or months \u2014 often needs a consultant",
    repline: "Minutes \u2014 import your roster and go",
  },
  {
    feature: "Pricing",
    competitor: "$25\u2013$150+/user/mo with needed add-ons",
    repline: "Pro $75/mo (1 user), Agency $695/mo (15 users)",
  },
  {
    feature: "Mobile",
    competitor: "Stripped-down version of the desktop app",
    repline: "Mobile-first PWA \u2014 built for the rink",
  },
  {
    feature: "Hockey features",
    competitor: "Zero \u2014 custom-build every object and automation",
    repline: "Player profiles, league calendars, scouting reports, e-signatures out of the box",
  },
  {
    feature: "Agency oversight",
    competitor: "Possible but requires dashboard configuration",
    repline: "Owner visibility built in \u2014 see which reps are active and who\u2019s falling behind",
  },
  {
    feature: "Learning curve",
    competitor: "Steep \u2014 most teams need training or a consultant",
    repline: "Built for reps who manage their practice from their phone",
  },
  {
    feature: "Pipeline stages",
    competitor: "Generic sales stages, fully customizable but starts blank",
    repline: "Hockey-native: Prospect, Draft Eligible, Signed, Active",
  },
  {
    feature: "Scouting reports",
    competitor: "Not available \u2014 would need custom development",
    repline: "One-click branded PDF player reports",
  },
  {
    feature: "Contact model",
    competitor: "Accounts, contacts, opportunities",
    repline: "Players, families, billets, coaches, GMs with relationship mapping",
  },
  {
    feature: "Compliance tracking",
    competitor: "Custom fields and workflow rules you build yourself",
    repline: "League deadlines and eligibility windows auto-populated with alerts",
  },
];

export default function VsSalesforce() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Repline vs. Salesforce" },
        ]}
      />
      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Repline vs. Salesforce
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Salesforce is built for enterprise. Repline is built for reps.
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Salesforce is powerful. It&apos;s also wildly overbuilt for a 3-person hockey advisory firm. Too expensive, too many irrelevant tools, and it requires an admin to configure.
          </p>
        </div>
      </section>

      {/* Core problem */}
      <Section>
        <SectionHeader
          tag="The problem"
          title="Enterprise software for a non-enterprise team"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed">
            Salesforce was designed for companies with dedicated sales ops teams, CRM administrators, and six-figure implementation budgets. Most hockey agencies have 1&ndash;15 people, no IT department, and no interest in spending months configuring a platform before they can use it.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            The result? Agencies that try Salesforce end up with an expensive tool that nobody fully adopts. Reps fall back to spreadsheets and text threads because the CRM is too cumbersome to use between periods at the rink.
          </p>

          <CalloutBox>
            You don&apos;t need a platform that can do everything. You need one that does hockey representation really well.
          </CalloutBox>
        </div>
      </Section>

      {/* Comparison */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Side by side"
          title="Salesforce vs. Repline"
        />
        <div className="max-w-4xl mx-auto">
          <ComparisonTable competitorName="Salesforce" rows={rows} />
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <PersonaQuote
            text="We evaluated Salesforce and found it too expensive with too many irrelevant tools. What we actually needed was consolidation: contacts, player overviews, meeting logs, and advisor activity in one place with partner visibility. We didn't need a platform that could run a Fortune 500 sales team."
            attribution="Managing partner at a mid-size hockey advisory firm"
          />
          <p className="text-sm text-muted leading-relaxed mt-6">
            Repline delivers exactly what that firm was looking for &mdash; a single system of record for player representation with built-in owner oversight, per-advisor rollups, and a mobile experience that works at the rink. No consultants, no configuration, no six-month implementation.
          </p>
        </div>
      </Section>

      <CTASection
        title="Purpose-built beats enterprise"
        description="Start managing your roster in minutes, not months. Free 30-day trial, no credit card required."
      />
    </>
  );
}
