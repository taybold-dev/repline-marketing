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
  title: "Repline vs. Spreadsheets for Hockey Agents",
  description:
    "Stop managing your hockey practice in spreadsheets. Compare Excel and Google Sheets to Repline — purpose-built CRM for hockey agents and advisors.",
  alternates: { canonical: "/vs/spreadsheets" },
  openGraph: {
    type: "website",
    title: "Repline vs. Spreadsheets for Hockey Agents",
    description:
      "Stop managing your hockey practice in spreadsheets. See why hockey agents switch from Excel to Repline.",
    url: "https://www.repline.io/vs/spreadsheets",
    images: [ogImage({ title: "Repline vs. Spreadsheets", subtitle: "Stop managing your hockey practice in Excel", tag: "Comparison" })],
  },
};

const rows = [
  {
    feature: "Player pipeline",
    competitor: "Manual columns, no drag-and-drop",
    repline: "Visual board with hockey-native stages",
  },
  {
    feature: "Contact cadence",
    competitor: "No reminders — you have to remember",
    repline: "Automatic alerts when you're falling behind",
  },
  {
    feature: "Shared visibility",
    competitor: "File sharing nightmares, version conflicts",
    repline: "Real-time shared roster, per-rep assignments",
  },
  {
    feature: "Mobile access",
    competitor: "Barely usable on a phone",
    repline: "Mobile-first PWA — works at the rink",
  },
  {
    feature: "Compliance tracking",
    competitor: "Manual date tracking, easy to miss",
    repline: "Auto-generated deadlines with alerts",
  },
  {
    feature: "Scouting reports",
    competitor: "Copy-paste into a Word doc",
    repline: "One-click branded PDF reports",
  },
  {
    feature: "Contract tracking",
    competitor: "Separate tab, no expiry alerts",
    repline: "Contracts with auto-calculated expirations",
  },
  {
    feature: "E-signatures",
    competitor: "Print, sign, scan, email",
    repline: "Send for signature from the contract tab",
  },
];

export default function VsSpreadsheets() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Repline vs. Spreadsheets" },
        ]}
      />
      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Repline vs. Spreadsheets
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Stop managing your hockey practice in spreadsheets
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Spreadsheets were never designed to manage player rosters, family relationships, compliance deadlines, and agency operations. Here&apos;s what you&apos;re giving up.
          </p>
        </div>
      </section>

      {/* Product screenshot */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-xl border border-border/60 overflow-hidden shadow-lg">
            <Image
              src="/screenshots/players-list.png"
              alt="Repline player pipeline board — a visual alternative to managing hockey rosters in spreadsheets, with players organized by playing level"
              width={2880}
              height={1800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Pain points */}
      <Section>
        <SectionHeader
          tag="The problem"
          title="Why spreadsheets fail hockey agents"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { title: "Outdated by Tuesday", desc: "Someone updates their copy but forgets to share it. By midweek, three people have three different versions of the roster." },
            { title: "No alerts or reminders", desc: "A contract expiration date sits in column M. Nobody looks at column M until it's too late." },
            { title: "No shared visibility", desc: "The agency owner has no idea which reps are actively working which players. Status updates come through text threads and hallway conversations." },
            { title: "Unusable on mobile", desc: "You're at the rink and need to check a player's contract status. Good luck scrolling a 200-row spreadsheet on your phone." },
            { title: "No compliance tracking", desc: "League deadlines, eligibility windows, and transfer rules live in someone's head — not in the system." },
          ].map((pain) => (
            <div key={pain.title} className="rounded-lg border border-border/60 p-4">
              <h3 className="font-semibold mb-1">{pain.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison table */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Side by side"
          title="Spreadsheets vs. Repline"
        />
        <div className="max-w-4xl mx-auto">
          <ComparisonTable competitorName="Spreadsheets" rows={rows} />
        </div>
      </Section>

      {/* Persona quotes */}
      <Section>
        <SectionHeader
          tag="Sound familiar?"
          title="Stories from the field"
        />
        <div className="max-w-3xl mx-auto">
          <PersonaQuote
            text="We lost track of a compliance deadline because the date was buried in a spreadsheet tab nobody checked. That mistake cost us a player."
            attribution="Hockey agent, solo practice"
          />
          <PersonaQuote
            text="Every Monday I spend an hour manually building a roster update from three different spreadsheets. By the time I send it, something's already changed."
            attribution="Operations lead, mid-size hockey agency"
          />
          <PersonaQuote
            text="We had no shared system of record. Each advisor kept their own spreadsheet, and the partners had no visibility into what anyone was doing."
            attribution="Managing partner, multi-advisor hockey agency"
          />
        </div>
      </Section>

      {/* Migration */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Switching"
          title="How to migrate from spreadsheets"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { step: "1", title: "Export your roster", desc: "Save your spreadsheet as CSV or Excel (.xlsx). Any format works — Repline maps your columns automatically." },
              { step: "2", title: "Import into Repline", desc: "Use the bulk import tool to upload players and contacts. Map your columns to Repline fields in a visual editor. Takes about 5 minutes for a typical roster." },
              { step: "3", title: "Set up your pipeline", desc: "Your players automatically land in the right pipeline stages based on their status. Active clients, prospects, draft-eligible players — all organized from day one." },
              { step: "4", title: "Invite your team", desc: "Add reps and assign players. Each person gets their own view. Agency owners see everything. No more shared file permissions." },
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
          title="When spreadsheets still make sense"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Stick with spreadsheets if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              You represent fewer than 5 players, work solo with no plans to add team members, and don&apos;t need compliance tracking or scouting reports. A simple spreadsheet can work at that scale.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Switch to Repline if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              You manage more than 10 players, have an agency with multiple reps, need to track compliance deadlines, want to generate scouting reports, or simply can&apos;t afford to miss a follow-up with a player&apos;s family. The free trial lets you test it risk-free.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Pricing comparison</h3>
            <p className="text-sm text-muted leading-relaxed">
              Spreadsheets are &ldquo;free&rdquo; &mdash; but the hidden cost is your time. Repline Pro starts at <strong>$75/month</strong> for solo advisors (up to 30 players). Team is <strong>$249/month</strong> for small agencies (up to 5 users). Agency is <strong>$695/month</strong> for up to 15 users. All plans include a free 30-day trial.
            </p>
          </div>
        </div>
      </Section>

      <VsCrossLinks current="/vs/spreadsheets" />

      <CTASection
        title="Replace your spreadsheet today"
        description="Import your roster from CSV or Excel in minutes. Free 30-day trial, no credit card required."
      />
    </>
  );
}
