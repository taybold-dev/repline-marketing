import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/section";
import { ComparisonTable, PersonaQuote } from "@/components/comparison-table";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { VsCrossLinks } from "@/components/vs-cross-links";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Repline vs. Fandelo for Hockey Agencies",
  description:
    "Fandelo is a fan-engagement platform with a talent-management app bolted on — not built for hockey representation. Compare it to Repline's e-signatures, PDF scouting profiles, and hockey-native workflow.",
  alternates: { canonical: "/vs/fandelo" },
  openGraph: {
    type: "website",
    title: "Repline vs. Fandelo for Hockey Agencies",
    description:
      "Fandelo wasn't built for hockey representation. See how it compares to Repline's dynamic documents, PDF scouting profiles, and clean interface.",
    url: "https://www.repline.io/vs/fandelo",
    images: [ogImage({ title: "Repline vs. Fandelo", subtitle: "Built for how hockey agents actually work", tag: "Comparison" })],
  },
};

const rows = [
  {
    feature: "What it's built for",
    competitor: "General talent-agent companion app across sports, music, and entertainment",
    repline: "Purpose-built for hockey representation from the ground up",
  },
  {
    feature: "Contracts & e-signatures",
    competitor: "Not part of the published feature set — profiles, schedules, tasks, and contacts only",
    repline: "Built-in e-signatures with dynamic fields (e.g., pricing package dropdowns) and role-based Agent vs. Player/Parent signature areas",
  },
  {
    feature: "Scouting profiles",
    competitor: "Basic talent/scout profile records — no PDF export",
    repline: "One-click, branded PDF profile generated straight from CRM data — ready to send to a GM",
  },
  {
    feature: "Interface",
    competitor: "Cluttered, dated layout inherited from a broader fan-engagement app",
    repline: "Clean, focused workspace built for one job — no non-essential features to dig through",
  },
  {
    feature: "Player pipeline",
    competitor: "Generic talent profiles — no hockey-specific stages",
    repline: "Hockey-native: Prospect, Draft Eligible, Signed, Active",
  },
  {
    feature: "League calendars",
    competitor: "Not part of the platform",
    repline: "OHL, WHL, QMJHL, NCAA dates auto-populated",
  },
  {
    feature: "Contact cadence",
    competitor: "Key contacts list — no relationship or cadence tracking",
    repline: "Per-player cadence with auto-reset on interaction",
  },
  {
    feature: "Pricing",
    competitor: "Contact Fandelo for current pricing",
    repline: "Pro $75/mo (1 user), Team $249/mo (5 users), Agency $695/mo (15 users)",
  },
];

export default function VsFandelo() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Repline vs. Fandelo" },
        ]}
      />
      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Repline vs. Fandelo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            A fan-engagement app isn&apos;t a hockey agent CRM
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Fandelo started as a fan-engagement platform for sports, music, and entertainment, with a talent-management app added on top. Hockey representation needs more: documents that adapt, scouting profiles a GM will actually open, and an interface that isn&apos;t inherited from a completely different product.
          </p>
        </div>
      </section>

      {/* Product screenshot */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-xl border border-border/60 overflow-hidden shadow-lg">
            <Image
              src="/screenshots/player-contracts.png"
              alt="Repline contract and e-signature view showing team contract and advisory agreement details with signer assignment"
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
              title: "No contract or e-signature tooling",
              desc: "Fandelo's published feature set covers talent profiles, scout profiles, schedules, tasks, and contacts — not contracts or signatures. Repline's document builder supports dynamic fields, like a dropdown to select a pricing package that populates directly into the agreement, with signature areas assigned by role so it's always clear which block is for the Agent and which is for the Player/Parent.",
            },
            {
              title: "A scouting profile a GM will actually open",
              desc: "A basic talent or scout record isn't something you can hand to a GM. Repline generates a one-click, branded PDF profile straight from the player's CRM record — contract history, stats, notes — ready to send without leaving the platform.",
            },
            {
              title: "An interface built for one job",
              desc: "Fandelo's management app carries the weight of a broader fan-engagement platform, and it shows. Repline is deliberately scoped to what a hockey agent actually needs day to day, so the workflow you use most — pipeline, contracts, contacts — is never buried under features you don't.",
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
          title="Fandelo vs. Repline"
        />
        <div className="max-w-4xl mx-auto">
          <ComparisonTable competitorName="Fandelo" rows={rows} />
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <PersonaQuote
            text="What I needed was simple: a pricing dropdown in the agreement so I'm not editing the PDF by hand every time, a clear spot for the player's family to sign versus me, and a report I can send a GM without reformatting it first. That's what I was missing."
            attribution="Agency owner evaluating hockey CRMs"
          />
        </div>
      </Section>

      {/* Migration */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Switching"
          title="How to migrate from Fandelo"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { step: "1", title: "Export your roster and contacts", desc: "Export your player and contact data from Fandelo as CSV or Excel — check its settings or export menu." },
              { step: "2", title: "Import into Repline", desc: "Upload your export into Repline's bulk import tool. Map your columns to Repline's hockey-specific fields in a few minutes." },
              { step: "3", title: "Rebuild your document templates once", desc: "Set up your agreement templates in Repline's document builder with the dynamic fields and Agent / Player-Parent signature roles you need. From then on, it's dropdown-and-send." },
              { step: "4", title: "Cancel Fandelo", desc: "Once your team is onboarded, cancel your Fandelo subscription. Most agencies are fully switched within a week." },
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
          title="Fandelo vs. Repline: which is right?"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Keep Fandelo if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              You&apos;re already deep into a contract with it, you represent talent across multiple sports or industries where a general fan-engagement platform adds value, and you handle contracts and e-signatures entirely outside the tool anyway.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Switch to Repline if...</h3>
            <p className="text-sm text-muted leading-relaxed">
              Your primary job is representing hockey players. You need built-in e-signatures with dynamic pricing fields and clear Agent vs. Player/Parent signature roles, a scouting profile you can generate and send in one click, and an interface that only shows you what you actually use — not features carried over from a fan-engagement app.
            </p>
          </div>
          <div className="rounded-lg border border-border/60 p-4">
            <h3 className="font-semibold mb-1">Pricing comparison</h3>
            <p className="text-sm text-muted leading-relaxed">
              Confirm Fandelo&apos;s current pricing with your rep before comparing. Repline Pro is <strong>$75/month</strong> for a solo advisor, Team is <strong>$249/month</strong> for up to 5 users, and Agency is <strong>$695/month</strong> for up to 15 users &mdash; flat pricing, no per-seat surprises, and every feature above included at every tier.
            </p>
          </div>
        </div>
      </Section>

      <VsCrossLinks current="/vs/fandelo" />

      <CTASection
        title="Documents that adapt. Profiles in one click."
        description="Set up your templates once and stop editing PDFs by hand. Free 30-day trial."
      />
    </>
  );
}
