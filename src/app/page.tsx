import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section";
import { FeatureGrid } from "@/components/feature-grid";
import { CTASection } from "@/components/cta-section";
import { SoftwareApplicationSchema } from "@/components/schema-org";

export const metadata: Metadata = {
  title: "Repline | Hockey Agent & Advisor CRM — Manage Players, Contracts & Pipelines",
  description:
    "The CRM built for hockey agents and advisors. Track players, contracts, scouting reports, and compliance deadlines in one place. Replace your spreadsheets. Free 30-day trial.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Repline | Hockey Agent & Advisor CRM — Manage Players, Contracts & Pipelines",
    description:
      "The CRM built for hockey agents and advisors. Track players, contracts, scouting reports, and compliance deadlines in one place. Replace your spreadsheets. Free 30-day trial.",
    url: "https://www.repline.io",
  },
};

export default function Home() {
  return (
    <>
      <SoftwareApplicationSchema />
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Built for hockey. Built for you.
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto">
            The CRM built for hockey agents and advisors
          </h1>
          <h2 className="mt-4 text-lg md:text-2xl font-medium text-muted max-w-2xl mx-auto">
            The OS for player representation
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted max-w-2xl mx-auto">
            Track players, contracts, scouting reports, and compliance deadlines in one place. Replace your spreadsheets &mdash; from bantam to the bigs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.repline.io/auth/sign-up"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
              Start free trial
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-muted-bg transition-colors w-full sm:w-auto"
            >
              See pricing
            </a>
          </div>
          <p className="mt-3 text-xs text-muted">
            Free 30-day trial. No credit card required.
          </p>
        </div>
      </section>

      {/* Built for hockey */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Purpose-built"
          title="Built for hockey, not sales reps"
          description="Generic CRMs don't understand OHL import drafts, NCAA transfer windows, or CHL eligibility rules. Repline does."
        />
        <FeatureGrid
          features={[
            {
              icon: "\u{1F3D2}",
              title: "Hockey-native pipelines",
              description:
                "Prospect, Committed, Draft Eligible, Signed, Active \u2014 stages that map to how you actually work. Not \u2018Lead\u2019 and \u2018Opportunity.\u2019",
            },
            {
              icon: "\u{1F514}",
              title: "Never go cold on a family",
              description:
                "Set a contact cadence for every player \u2014 weekly, monthly, quarterly. Repline tracks your last call, text, or meeting and alerts you before relationships go cold.",
            },
            {
              icon: "\u{1F4F1}",
              title: "Works at the rink",
              description:
                "Pull up a player profile between periods. Log a conversation in the parking lot after a game. Installable on your phone \u2014 no app store needed.",
            },
          ]}
        />
      </Section>

      {/* Your practice, organized */}
      <Section>
        <SectionHeader
          tag="All-in-one"
          title="Your practice, organized"
          description="Everything about your players, contacts, contracts, and tasks \u2014 in one place."
        />
        <FeatureGrid
          features={[
            {
              icon: "\u{1F4CB}",
              title: "Player profiles",
              description:
                "Full player records with contracts, scouting notes, documents, interaction history, and career timeline.",
            },
            {
              icon: "\u{1F4C5}",
              title: "Trade deadlines to draft dates",
              description:
                "OHL, WHL, QMJHL, USHL, NCAA \u2014 league key dates auto-populate. Contract expirations generate alerts. Never miss a deadline again.",
            },
            {
              icon: "\u{1F4C4}",
              title: "PDF scouting reports",
              description:
                "Generate professional player reports with your agency branding. One click. Ready to send to scouts, teams, or families.",
            },
          ]}
        />
      </Section>

      {/* For agencies that grow */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Scale with you"
          title="For agencies that grow"
          description="Solo rep today, multi-advisor agency tomorrow. Repline scales with your practice."
        />
        <FeatureGrid
          features={[
            {
              icon: "\u{1F465}",
              title: "Multi-rep support",
              description:
                "Add representatives to your agency. Each rep sees their assigned players. Owners see everything.",
            },
            {
              icon: "\u{1F50D}",
              title: "Owner oversight",
              description:
                "Agency owners get a bird\u2019s-eye view \u2014 who\u2019s active, who\u2019s falling behind, which players need attention.",
            },
            {
              icon: "\u{1F4CA}",
              title: "Advisor rollups",
              description:
                "Advisory agreements, contracts, and player counts \u2014 rolled up per advisor so you know exactly where your business stands.",
            },
          ]}
        />
      </Section>

      {/* CTA */}
      <CTASection
        title="Ready to run your practice like a business?"
        description="Join hockey agents and advisors who stopped losing track of players and started winning more families."
      />
    </>
  );
}
