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
    images: [ogImage({ title: "Repline vs. HubSpot", subtitle: "HubSpot speaks sales. Repline speaks hockey.", tag: "Comparison" })],
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
    repline: "Pro $75/mo (1 user), Team $249/mo (5 users), Agency $695/mo (15 users)",
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

      {/* Product screenshot */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-xl border border-border/60 overflow-hidden shadow-lg">
            <Image
              src="/screenshots/players-list.png"
              alt="Repline hockey-native pipeline board — unlike HubSpot's generic sales pipeline, players are organized by playing level with hockey-specific stages"
              width={2880}
              height={1800}
              className="w-full h-auto"
            />
          </div>
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

      {/* Migration */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Switching"
          title="How to migrate from HubSpot"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { step: "1", title: "Export contacts and deals", desc: "From HubSpot, export your contacts and deals as CSV. Go to Contacts > Actions > Export, then Deals > Actions > Export." },
              { step: "2", title: "Map to Repline's model", desc: "HubSpot's 'deals' become players. 'Companies' map to teams. 'Contacts' stay as contacts but gain hockey-specific relationship types (parent, billet, coach, scout)." },
              { step: "3", title: "Import and organize", desc: "Upload both CSVs into Repline's import tool. Players automatically slot into the right pipeline stages. Contacts link to players via relationship mapping." },
              { step: "4", title: "Set cadences and alerts", desc: "Configure contact cadences per player — something HubSpot's email sequences were never designed for. Repline tracks calls, texts, and in-person meetings, not just emails." },
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
          title="HubSpot vs. Repline: which is right?"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Keep HubSpot if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              You run a multi-sport agency where hockey is one of several divisions, and you need HubSpot&apos;s marketing automation (email campaigns, landing pages, ad tracking) for business development across sports.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Switch to Repline if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              You&apos;re a hockey-focused agency or solo advisor. Your &ldquo;sales process&rdquo; is building relationships with 14-year-olds and their families over years, not running email drip campaigns. You need player profiles, scouting reports, compliance tracking, and league calendars &mdash; not marketing automation.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Pricing comparison</h3>
            <p className="text-sm text-muted leading-relaxed">
              HubSpot&apos;s free CRM is limited (no automation, basic reporting). Starter is <strong>$20/seat/month</strong>. Professional jumps to <strong>$100/seat/month</strong> with required onboarding fees. A 5-person hockey agency on Professional costs over <strong>$500/month</strong> plus a one-time <strong>$1,500 onboarding fee</strong>. Repline Team is <strong>$249/month</strong> for up to 5 users, Agency is <strong>$695/month flat</strong> for up to 15 users &mdash; no onboarding fee, every feature included.
            </p>
          </div>
        </div>
      </Section>

      <VsCrossLinks current="/vs/hubspot" />

      <CTASection
        title="Switch from HubSpot in minutes"
        description="Import your contacts, set up your pipeline, and start managing your roster. Free 30-day trial, no credit card required."
      />
    </>
  );
}
