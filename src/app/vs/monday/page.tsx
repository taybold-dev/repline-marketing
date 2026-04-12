import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { ComparisonTable, PersonaQuote } from "@/components/comparison-table";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { VsCrossLinks } from "@/components/vs-cross-links";
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

      {/* Product screenshot */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-xl border border-border/60 overflow-hidden shadow-lg">
            <Image
              src="/screenshots/tasks-board.png"
              alt="Repline task management board — hockey-specific tasks like contract negotiations and compliance tracking, organized in a kanban view unlike generic Monday.com boards"
              width={2880}
              height={1800}
              className="w-full h-auto"
            />
          </div>
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

      {/* Migration */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Switching"
          title="How to migrate from Monday.com"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { step: "1", title: "Export your Monday.com boards", desc: "Export your player board and contact data as CSV from Monday.com. Board settings > Export to Excel." },
              { step: "2", title: "Import into Repline", desc: "Upload your CSV into Repline's bulk import tool. Map Monday.com columns to Repline's hockey-specific fields. Your custom statuses map to Repline's pipeline stages." },
              { step: "3", title: "Replace automations with built-in features", desc: "Monday.com automations you built manually — contract alerts, follow-up reminders, status updates — are built into Repline natively. No configuration needed." },
              { step: "4", title: "Cancel Monday.com", desc: "Once your team is onboarded (usually same day), cancel your Monday.com seats. Most agencies break even on the switch within the first month." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">{s.step}</span>
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who should use what */}
      <Section>
        <SectionHeader
          tag="Decision guide"
          title="Monday.com vs. Repline: which is right?"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Keep Monday.com if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              You use Monday.com across your business for non-hockey operations (marketing, HR, project management) and hockey is a small part of your workflow. Monday.com&apos;s strength is general-purpose project management.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Switch to Repline if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              Your primary job is representing hockey players. You need scouting reports, league calendars, compliance tracking, and player-family relationship management. These aren&apos;t things you can bolt onto a project management tool.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Pricing comparison</h3>
            <p className="text-sm text-muted leading-relaxed">
              Monday.com starts at <strong>$9/seat/month</strong> but scales quickly with users and feature tiers. A 5-person agency on Pro plan costs ~$80/month. Repline Pro is <strong>$75/month</strong> for a solo advisor. Agency plan is <strong>$695/month</strong> for up to 15 users &mdash; flat pricing, no per-seat surprises, and every hockey-specific feature included.
            </p>
          </div>
        </div>
      </Section>

      <VsCrossLinks current="/vs/monday" />

      <CTASection
        title="Built for hockey from day one"
        description="No configuration needed. Import your roster and start managing your practice in minutes. Free 30-day trial."
      />
    </>
  );
}
