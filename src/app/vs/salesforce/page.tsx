import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { ComparisonTable, PersonaQuote, CalloutBox } from "@/components/comparison-table";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { VsCrossLinks } from "@/components/vs-cross-links";
import { ogImage } from "@/lib/seo";

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
    images: [ogImage({ title: "Repline vs. Salesforce", subtitle: "Purpose-built beats enterprise for hockey agencies", tag: "Comparison" })],
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
    repline: "Pro $75/mo (1 user), Team $249/mo (5 users), Agency $695/mo (15 users)",
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
      {/* Product screenshot */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-xl border border-border/60 overflow-hidden shadow-lg">
            <Image
              src="/screenshots/dashboard.png"
              alt="Repline dashboard — a simple, purpose-built hockey agent CRM that replaces Salesforce complexity with an intuitive overview of players, tasks, and contract deadlines"
              width={2880}
              height={1800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

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

      {/* Migration */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Switching"
          title="How to migrate from Salesforce"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { step: "1", title: "Export your data", desc: "Use Salesforce Data Export or Report Export to pull contacts, accounts, and opportunities as CSV. No need to export your custom objects — Repline has its own hockey-native model." },
              { step: "2", title: "Map your objects", desc: "Salesforce 'Opportunities' become players. 'Accounts' map to teams or organizations. 'Contacts' stay as contacts with hockey relationship types. The mapping is simpler than you'd expect." },
              { step: "3", title: "Import and go", desc: "Upload your CSVs into Repline. Pipeline stages auto-assign based on player status. No admin configuration, no custom objects to build, no formula fields to maintain." },
              { step: "4", title: "Save immediately", desc: "Most agencies reduce their CRM spend by 60-80% switching from Salesforce to Repline. A 5-user Salesforce setup at $75/user/month ($375/mo) becomes one Repline Team plan at $249/month for up to 5 users." },
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
          title="Salesforce vs. Repline: which is right?"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Keep Salesforce if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              You&apos;re a large multi-sport agency with 50+ employees, a dedicated IT team, and existing Salesforce integrations across departments (finance, marketing, operations). The switching cost outweighs the benefit.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Switch to Repline if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              You&apos;re a 1-15 person hockey agency paying for Salesforce features you don&apos;t use. If your reps avoid the CRM because it&apos;s too complex and fall back to spreadsheets and text threads, you&apos;re paying for a tool that isn&apos;t working. Repline is built so reps actually want to use it &mdash; especially at the rink.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Pricing comparison</h3>
            <p className="text-sm text-muted leading-relaxed">
              Salesforce Essentials starts at <strong>$25/user/month</strong> but most agencies need Professional (<strong>$75/user/month</strong>) or Enterprise (<strong>$150/user/month</strong>) for workflows and API access. A 5-person agency on Professional costs <strong>$375/month</strong> before add-ons. Repline Team is <strong>$249/month</strong> for up to 5 users, Agency is <strong>$695/month flat</strong> for up to 15 users &mdash; every feature included (scouting reports, e-signatures, league calendars, compliance tracking) without add-ons.
            </p>
          </div>
        </div>
      </Section>

      <VsCrossLinks current="/vs/salesforce" />

      <CTASection
        title="Purpose-built beats enterprise"
        description="Start managing your roster in minutes, not months. Free 30-day trial, no credit card required."
      />
    </>
  );
}
