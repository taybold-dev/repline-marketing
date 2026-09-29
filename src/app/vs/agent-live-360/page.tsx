import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { ComparisonTable, PersonaQuote } from "@/components/comparison-table";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { VsCrossLinks } from "@/components/vs-cross-links";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Repline vs. Agent Live 360 for Hockey Agents",
  description:
    "Agent Live 360 is sport-agnostic software for sports agents. Compare it to Repline's hockey-native pipelines, league calendars, and scouting reports.",
  alternates: { canonical: "/vs/agent-live-360" },
  openGraph: {
    type: "website",
    title: "Repline vs. Agent Live 360 for Hockey Agents",
    description:
      "Agent Live 360 serves agents across every sport. Repline is built for one. See how they compare on hockey pipelines, eligibility, and scouting reports.",
    url: "https://www.repline.io/vs/agent-live-360",
    images: [ogImage({ title: "Repline vs. Agent Live 360", subtitle: "Sport-agnostic software vs. hockey-native workflow", tag: "Comparison" })],
  },
};

const rows = [
  {
    feature: "What it's built for",
    competitor: "Sports agents and agencies across every sport \u2014 \u201cfit for agents representing athletes at any level\u201d",
    repline: "Purpose-built for hockey representation from the ground up",
  },
  {
    feature: "Player pipeline",
    competitor: "Organize players by college or by their team; no hockey-specific pipeline stages",
    repline: "Hockey-native: Prospect, Committed, Draft Eligible, Signed, Active",
  },
  {
    feature: "League calendars & key dates",
    competitor: "Email reminders and birthday reminders; no league calendars or key-date automation",
    repline: "OHL, WHL, QMJHL, USHL and NCAA dates auto-populate; contract expirations generate alerts",
  },
  {
    feature: "CHL / NCAA eligibility",
    competitor: "Not part of the published feature set",
    repline: "Eligibility and compliance deadlines tracked per player",
  },
  {
    feature: "Scouting reports",
    competitor: "Document storage, and CSV or PDF export of player financials \u2014 no scouting report generation",
    repline: "One-click branded PDF profile generated straight from the player record",
  },
  {
    feature: "Contracts & documents",
    competitor: "Contract and file storage, unlimited on every plan",
    repline: "Storage plus built-in e-signatures with dynamic fields and signature areas assigned by role (Agent vs. Player/Parent)",
  },
  {
    feature: "Relationship tracking",
    competitor: "Email and birthday reminders, plus an internal team messaging system",
    repline: "Per-player contact cadence that resets on interaction and alerts you before a family goes cold",
  },
  {
    feature: "Back office",
    competitor: "Strong: invoicing, accounting section, expense and commission tracking, ROI per client, multi-currency, Agent Live Pay, QuickBooks and Xero APIs",
    repline: "Stripe payments and QuickBooks sync with per-advisor rollups. No Xero integration or multi-currency support today",
  },
  {
    feature: "Mobile",
    competitor: "Mobile-friendly web app, including the messaging system",
    repline: "Installable on your phone as a PWA \u2014 no app store needed",
  },
  {
    feature: "Pricing",
    competitor: "$38/mo (1 agent) to $150/mo (5 agents) billed annually, or $49\u2013$190/mo billed monthly, plus $25 per extra user and a one-time $25 sign-up fee",
    repline: "Pro $75/mo (1 user), Team $249/mo (5 users), Agency $695/mo (15 users) \u2014 flat, no per-seat add-ons",
  },
];
export default function VsAgentLive360() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Repline vs. Agent Live 360" },
        ]}
      />
      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Repline vs. Agent Live 360
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Software for every sport knows the rules of none
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Agent Live 360 was built for sports agents broadly &mdash; client tracking, recruiting, expenses, invoicing, commissions. Those are real problems, and they&apos;re the same in every sport. The problems that aren&apos;t the same are the ones that decide a hockey practice: CHL import drafts, NCAA eligibility windows, junior league calendars, and the family you haven&apos;t called since October.
          </p>
        </div>
      </section>

      {/* Product screenshot */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-xl border border-border/60 overflow-hidden shadow-lg">
            <Image
              src="/screenshots/calendar.png"
              alt="Repline calendar showing hockey league key dates, draft windows, and contract deadlines auto-populated for OHL, WHL, QMJHL and NCAA"
              width={2880}
              height={1800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <Section>
        <SectionHeader
          tag="What actually matters"
          title="The three things that decide the switch"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: "Hockey rules aren't a configuration option",
              desc: "CHL-NCAA eligibility, OHL import draft restrictions, USHL and junior calendars — these aren't custom fields you can add to a general-purpose CRM. They're rules with dates attached, and missing one costs a player a season. Repline ships them as league calendars and per-player compliance tracking rather than asking you to model them yourself.",
            },
            {
              title: "A scouting profile a GM will actually open",
              desc: "Contract and file storage is useful, but stored files aren't a report. Repline generates a branded PDF profile in one click, straight from the player's record — contract history, stats, scouting notes — ready to send to a GM without reformatting anything.",
            },
            {
              title: "Relationships go cold quietly",
              desc: "Agent Live 360 has email and birthday reminders, which fire on a date you set. Neither tells you which committed family you last spoke to eleven weeks ago. Repline sets a contact cadence per player, resets it whenever you log a call, text, or meeting, and warns you before the gap becomes a problem.",
            },
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
          title="Agent Live 360 vs. Repline"
          description="Agent Live 360's side reflects the features and pricing published on its own site. Confirm current terms with them directly before deciding."
        />
        <div className="max-w-4xl mx-auto">
          <ComparisonTable competitorName="Agent Live 360" rows={rows} />
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <PersonaQuote
            text="The general sports-agent tools handle the business side fine — invoices, commissions, expenses. What none of them knew was that my kid in the OHL had an eligibility window closing, or that the QMJHL draft moved. I was tracking that part in my head anyway."
            attribution="Advisor at a multi-rep hockey agency"
          />
        </div>
      </Section>

      {/* Migration */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Switching"
          title="How to migrate from Agent Live 360"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { step: "1", title: "Export your clients and contacts", desc: "Export your client list and team-staff contacts as CSV or Excel from Agent Live 360's settings or export menu." },
              { step: "2", title: "Import into Repline", desc: "Upload the export into Repline's bulk import tool and map your columns to hockey-specific fields — position, league, draft year, handedness — in a visual editor." },
              { step: "3", title: "Turn on league calendars", desc: "Pick the leagues your players are in. OHL, WHL, QMJHL, USHL and NCAA key dates populate automatically, so eligibility windows and draft dates stop living in your head." },
              { step: "4", title: "Reconnect your accounting", desc: "Connect Stripe for payments and QuickBooks for your books. If you rely on Xero, check with us first — that integration isn't available today." },
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
          title="Agent Live 360 vs. Repline: which is right?"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Keep Agent Live 360 if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              You represent athletes across several sports and need one tool for all of them, your books run on Xero, you bill clients in more than one currency, or your main requirement is back office &mdash; invoicing, expenses, commissions, ROI per client &mdash; rather than hockey workflow. It is also meaningfully cheaper per seat. It does that job across any sport, and Repline deliberately doesn&apos;t.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Switch to Repline if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              Hockey is your practice. You need league calendars and eligibility tracking that already know the OHL, WHL, QMJHL, USHL and NCAA; a branded scouting PDF you can generate and send in one click; e-signatures with role-based Agent and Player/Parent signature areas; and cadence tracking that tells you which family has gone quiet.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Pricing comparison</h3>
            <p className="text-sm text-muted leading-relaxed">
              Agent Live 360 is the cheaper tool, and it isn&apos;t close. Billed annually it runs <strong>$38/month</strong> for one agent and <strong>$150/month</strong> for five, plus $25 per user beyond that and a one-time $25 sign-up fee. Repline Pro is <strong>$75/month</strong> for a solo advisor, Team is <strong>$249/month</strong> for up to 5 users, and Agency is <strong>$695/month</strong>{" "}for up to 15 &mdash; flat, with no per-seat add-ons. If cost per seat is the deciding factor, Agent Live 360 wins it. The question worth asking is what the difference buys: league calendars, eligibility tracking, scouting PDFs, and e-signatures you would otherwise be running outside the tool.
            </p>
          </div>
        </div>
      </Section>

      <section className="pb-4">
        <p className="mx-auto max-w-3xl px-6 text-center text-sm text-muted">
          Weighing the wider category rather than one vendor?{" "}
          <Link
            href="/sports-agent-crm"
            className="text-foreground underline underline-offset-4"
          >
            How sports agency management software compares for hockey
          </Link>
        </p>
      </section>

      <VsCrossLinks current="/vs/agent-live-360" />

      <CTASection
        title="Built for one sport, and all of its rules"
        description="League calendars, eligibility tracking, and scouting reports that already know hockey. Free 30-day trial."
      />
    </>
  );
}
