import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section";
import { FeatureGrid } from "@/components/feature-grid";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Features | Hockey Agent CRM & Player Management Software — Repline",
  description:
    "Player profiles, contract tracking, PDF scouting reports, e-signatures, SMS texting, agency oversight, and league calendar — purpose-built for hockey representation.",
  alternates: { canonical: "/features" },
  openGraph: {
    type: "website",
    title: "Features | Hockey Agent CRM & Player Management Software — Repline",
    description:
      "Player profiles, contract tracking, PDF scouting reports, e-signatures, SMS texting, agency oversight, and league calendar — purpose-built for hockey representation.",
    url: "https://www.repline.io/features",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Features" }]} />
      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Features
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to represent players
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Repline replaces your spreadsheets, sticky notes, and scattered group chats with one purpose-built platform.
          </p>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-muted leading-relaxed text-center">
            Repline is <strong>hockey agent software</strong> designed from the ground up for how agents and advisors actually work. Unlike generic CRMs built for sales teams, Repline is a <strong>hockey advisor CRM</strong> that understands player pipelines, draft eligibility, family relationships, and the seasonal rhythms of the sport. Every feature below was built in partnership with working agents and advisors.
          </p>
        </div>
      </section>

      {/* For solo reps */}
      <Section>
        <SectionHeader
          tag="For solo reps"
          title="Manage your full roster"
          description="Everything a solo rep needs to stay on top of every player, every deadline, every conversation."
        />
        <FeatureGrid
          features={[
            {
              icon: "\u{1F464}",
              title: "Player profiles",
              description:
                "Complete player records \u2014 personal info, contract history, scouting notes, documents, career timeline. One source of truth.",
            },
            {
              icon: "\u{1F3AF}",
              title: "Career pipeline board",
              description:
                "Drag-and-drop board view with hockey-native stages. See your entire roster at a glance. Reorder within columns.",
            },
            {
              icon: "\u{1F50A}",
              title: "Voice notes",
              description:
                "Record scouting observations on the go. Browser-based speech-to-text \u2014 no app downloads. Notes attach directly to player profiles.",
            },
            {
              icon: "\u{1F4C5}",
              title: "Calendar + deadline engine",
              description:
                "League key dates auto-populate. Contract expirations generate alerts. Custom deadlines for anything else.",
            },
            {
              icon: "\u{1F514}",
              title: "Contact cadence",
              description:
                "Set weekly, monthly, or quarterly check-in cadences. Repline tracks your last interaction and alerts you when you\u2019re falling behind.",
            },
            {
              icon: "\u{1F4C4}",
              title: "PDF scouting reports",
              description:
                "One-click professional reports with your agency branding. Customizable sections. Ready to send to scouts, teams, or families.",
            },
          ]}
        />
      </Section>

      {/* Contracts + signatures */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Contracts"
          title="Contracts and e-signatures"
          description="Track team contracts and advisory agreements. Send documents for signature without leaving Repline."
        />
        <FeatureGrid
          columns={2}
          features={[
            {
              icon: "\u{1F4DD}",
              title: "Team contracts + advisory agreements",
              description:
                "Separate views for team contracts (tracking deals with clubs) and advisory agreements (your rep agreement with the player). Auto-calculated expiry dates.",
            },
            {
              icon: "\u{270D}\u{FE0F}",
              title: "Electronic signatures",
              description:
                "Send advisory agreements for signature directly from the player\u2019s contract tab. Pick signers from the player\u2019s contact list. Track status in real time.",
            },
            {
              icon: "\u{1F4C1}",
              title: "Document vault",
              description:
                "Upload and organize contracts, medical records, academic transcripts, highlight reels. Everything stored securely and linked to the player.",
            },
            {
              icon: "\u{1F4CA}",
              title: "Comparable contracts",
              description:
                "Find comparable contracts across leagues and positions. Build data-backed cases for player negotiations.",
            },
          ]}
        />
      </Section>

      {/* For agencies */}
      <Section>
        <SectionHeader
          tag="For agencies"
          title="Scale your practice"
          description="Multi-rep agencies get owner oversight, visibility controls, and per-advisor accountability."
        />
        <FeatureGrid
          features={[
            {
              icon: "\u{1F465}",
              title: "Multi-rep teams",
              description:
                "Add reps and advisors. Assign players per rep. Each person sees their own roster. Owners see everything.",
            },
            {
              icon: "\u{1F6E1}\u{FE0F}",
              title: "Visibility controls",
              description:
                "Choose open visibility (everyone sees all players) or assigned-only (reps see only their players). Owner overrides are always available.",
            },
            {
              icon: "\u{1F4E5}",
              title: "Bulk import",
              description:
                "Import players and contacts from CSV, Excel, or Google Sheets. Migrate from Monday.com with one click. Get set up in minutes, not days.",
            },
            {
              icon: "\u{1F4AC}",
              title: "Interaction logging",
              description:
                "Log calls, texts, meetings, and emails against any player. Full timeline view. Voice-to-text for quick notes on the go.",
            },
            {
              icon: "\u{2705}",
              title: "Task management",
              description:
                "Create tasks, assign to team members, set due dates. Tasks link to players and contacts. Never lose track of who needs to do what.",
            },
            {
              icon: "\u{1F4E7}",
              title: "Contact management",
              description:
                "Track families, billets, coaches, GMs \u2014 everyone in a player\u2019s orbit. Relationship mapping shows who connects to whom.",
            },
          ]}
        />
      </Section>

      {/* Integrations */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Integrations"
          title="Connects to your workflow"
          description="Repline works with the tools you already use."
        />
        <FeatureGrid
          columns={2}
          features={[
            {
              icon: "\u{1F4B3}",
              title: "Stripe payments",
              description:
                "Connect your Stripe account to collect payments from players. Send invoices, track receivables, manage billing \u2014 all from within Repline.",
            },
            {
              icon: "\u{1F4D7}",
              title: "QuickBooks sync",
              description:
                "Sync invoices and payments to QuickBooks. Keep your books clean without double-entering transactions.",
            },
            {
              icon: "\u{1F4F2}",
              title: "SMS texting",
              description:
                "Send and receive text messages with players and contacts directly from Repline. Full conversation history logged automatically.",
            },
            {
              icon: "\u{1F4E8}",
              title: "Email notifications",
              description:
                "Transactional emails for contract signing, task assignments, and daily digests. Branded to your agency.",
            },
          ]}
        />
      </Section>

      <CTASection
        title="See it in action"
        description="Start your free trial or book a walkthrough with our team."
        secondaryHref="/pricing"
        secondaryLabel="See pricing"
      />
    </>
  );
}
