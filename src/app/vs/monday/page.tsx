import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section";
import { ComparisonTable, PersonaQuote } from "@/components/comparison-table";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { defaultOgImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Repline vs. Monday.com for Hockey Agencies",
  description:
    "Monday.com is a great project management tool — but it wasn't built for hockey representation. Compare Monday.com to Repline for managing players, contracts, and agency operations.",
  alternates: { canonical: "/vs/monday" },
  openGraph: {
    type: "website",
    title: "Repline vs. Monday.com for Hockey Agencies",
    description:
      "Monday.com wasn't built for hockey. Compare it to Repline — purpose-built for hockey agents and advisors.",
    url: "https://www.repline.io/vs/monday",
    images: [defaultOgImage],
  },
};

const rows = [
  {
    feature: "Pipeline stages",
    competitor: "Generic columns you configure yourself",
    repline: "Hockey-native: Prospect, Draft Eligible, Signed, Active",
  },
  {
    feature: "League calendars",
    competitor: "Not available — manual date tracking",
    repline: "OHL, WHL, QMJHL, NCAA dates auto-populated",
  },
  {
    feature: "Scouting reports",
    competitor: "Not possible without third-party tools",
    repline: "One-click branded PDF reports",
  },
  {
    feature: "Contact cadence",
    competitor: "Basic reminders, no relationship tracking",
    repline: "Per-player cadence with auto-reset on interaction",
  },
  {
    feature: "E-signatures",
    competitor: "Requires DocuSign or similar integration",
    repline: "Built-in — send advisory agreements from the contract tab",
  },
  {
    feature: "Player profiles",
    competitor: "Generic item records",
    repline: "Full profiles: contracts, career timeline, documents, interactions",
  },
  {
    feature: "Agency oversight",
    competitor: "Dashboard widgets you build yourself",
    repline: "Owner cockpit with per-advisor rollups built in",
  },
  {
    feature: "Mobile experience",
    competitor: "Mobile app available but not sports-specific",
    repline: "Mobile-first PWA designed for use at the rink",
  },
  {
    feature: "Pricing",
    competitor: "From $9/seat/mo, scales with users + features",
    repline: "Pro $75/mo (1 user), Agency $695/mo (15 users)",
  },
];

export default function VsMonday() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Repline vs. Monday.com" },
        ]}
      />
      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Repline vs. Monday.com
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Monday.com wasn&apos;t built for hockey. Repline was.
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Monday.com is a solid project management tool. But hockey representation isn&apos;t project management &mdash; it&apos;s relationship management with compliance, scouting, and contract tracking layered on top.
          </p>
        </div>
      </section>

      {/* Why generic PM tools fail */}
      <Section>
        <SectionHeader
          tag="The gap"
          title="Why generic project tools fall short"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { title: "No hockey-native pipeline", desc: "You'll spend hours configuring boards, statuses, and automations to approximate what Repline gives you out of the box. And you'll still be missing league-specific stages." },
            { title: "No league calendar integration", desc: "OHL trade deadlines, NCAA transfer windows, CHL import draft dates — you'd need to manually add and maintain every date." },
            { title: "No scouting reports", desc: "Monday.com can't generate a branded PDF player report. You'd need to export data and build it in another tool." },
            { title: "No compliance tracking", desc: "Eligibility windows and contract deadlines need purpose-built alerting, not generic due date reminders." },
          ].map((pain) => (
            <div key={pain.title} className="rounded-lg border border-border/60 p-4">
              <h3 className="font-semibold mb-1">{pain.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Side by side"
          title="Monday.com vs. Repline"
        />
        <div className="max-w-4xl mx-auto">
          <ComparisonTable competitorName="Monday.com" rows={rows} />
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <PersonaQuote
            text="We used Monday.com for a year. It was better value than Salesforce, but we were constantly fighting the tool to make it work for hockey. The pipeline stages didn't make sense, and we had no scouting reports or league dates."
            attribution="Advisor at a multi-rep hockey agency"
          />
        </div>
      </Section>

      <CTASection
        title="Built for hockey from day one"
        description="No configuration needed. Import your roster and start managing your practice in minutes. Free 30-day trial."
      />
    </>
  );
}
