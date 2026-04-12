import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section";
import { ComparisonTable, PersonaQuote, CalloutBox } from "@/components/comparison-table";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { defaultOgImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Repline vs. HubSpot for Hockey Agents — Why Generic CRMs Don't Work",
  description:
    "HubSpot wasn't built for hockey agents. Compare pipeline stages, player management, scouting reports, and agency oversight. See why advisors switch to Repline.",
  alternates: { canonical: "/vs/hubspot" },
  openGraph: {
    type: "website",
    title: "Repline vs. HubSpot for Hockey Agents — Why Generic CRMs Don't Work",
    description:
      "HubSpot wasn't built for hockey agents. Compare pipeline stages, player management, scouting reports, and agency oversight.",
    url: "https://www.repline.io/vs/hubspot",
    images: [defaultOgImage],
  },
};

const rows = [
  {
    feature: "Pipeline stages",
    competitor: "Lead \u2192 Opportunity \u2192 Closed Won",
    repline: "Prospect \u2192 Draft Eligible \u2192 Signed \u2192 Active",
  },
  {
    feature: "Contact model",
    competitor: "Companies, deals, contacts",
    repline: "Players, families, billets, coaches, GMs",
  },
  {
    feature: "Reporting",
    competitor: "Sales dashboards and revenue forecasts",
    repline: "Agency rollups, per-advisor oversight, cadence health",
  },
  {
    feature: "Mobile experience",
    competitor: "Full CRM on phone \u2014 complex UI",
    repline: "Purpose-built for the rink, installable PWA",
  },
  {
    feature: "Setup time",
    competitor: "Weeks of customization for hockey workflows",
    repline: "Import your roster, start immediately",
  },
  {
    feature: "Scouting reports",
    competitor: "Not possible \u2014 no document generation",
    repline: "One-click branded PDF player reports",
  },
  {
    feature: "League calendar",
    competitor: "Not available \u2014 manual date entry",
    repline: "OHL, WHL, QMJHL, NCAA dates auto-populated",
  },
  {
    feature: "Contact cadence",
    competitor: "Email sequences for sales outreach",
    repline: "Per-player relationship cadence with auto-reset",
  },
  {
    feature: "E-signatures",
    competitor: "Requires third-party integration",
    repline: "Built-in \u2014 send advisory agreements directly",
  },
  {
    feature: "Pricing",
    competitor: "Free tier limited, paid from $20/seat/mo \u2014 scales fast with add-ons",
    repline: "Pro $75/mo (1 user), Agency $695/mo (15 users) \u2014 simple flat pricing",
  },
];

export default function VsHubspot() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Repline vs. HubSpot" },
        ]}
      />
      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Repline vs. HubSpot
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            HubSpot speaks sales. Repline speaks hockey.
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            HubSpot is built for sales teams selling software. Repline is built for agents representing players. The difference shows up in every feature.
          </p>
        </div>
      </section>

      {/* Why generic CRMs fail */}
      <Section>
        <SectionHeader
          tag="The mismatch"
          title="Why generic CRMs fail hockey reps"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-sm text-muted leading-relaxed">
            Pipeline stages like &ldquo;Lead &rarr; Opportunity &rarr; Closed Won&rdquo; don&apos;t map to how player representation works. Hockey agents need &ldquo;Prospect &rarr; Committed &rarr; Draft Eligible &rarr; Signed &rarr; Active.&rdquo;
          </p>
          <p className="text-sm text-muted leading-relaxed">
            HubSpot has no concept of league calendars, contact cadence for player families, compliance deadlines, or scouting reports. You&apos;d spend weeks trying to customize it &mdash; and it still wouldn&apos;t feel right.
          </p>

          <CalloutBox>
            Your agency doesn&apos;t have a sales team. You have reps managing relationships with 14-year-olds and their parents. HubSpot was designed for the first problem, not the second.
          </CalloutBox>
        </div>
      </Section>

      {/* Comparison */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Side by side"
          title="HubSpot vs. Repline"
        />
        <div className="max-w-4xl mx-auto">
          <ComparisonTable competitorName="HubSpot" rows={rows} />
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <PersonaQuote
            text="We tried HubSpot with generic lead/opportunity/closed stages. We were constantly asking 'did anyone talk to this player?' Two agents contacted the same GM about different players on the same day. There was no shared visibility into the pipeline."
            attribution="Managing partner at a three-advisor hockey agency"
          />
          <p className="text-sm text-muted leading-relaxed mt-6">
            With Repline, every advisor sees the same pipeline in real time. Player status, last contact date, and assigned rep are visible at a glance &mdash; no more duplicate outreach or dropped balls.
          </p>
        </div>
      </Section>

      <CTASection
        title="Switch from HubSpot in minutes"
        description="Import your contacts, set up your pipeline, and start managing your roster. Free 30-day trial, no credit card required."
      />
    </>
  );
}
