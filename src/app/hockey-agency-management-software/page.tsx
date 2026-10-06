import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { FeatureGrid } from "@/components/feature-grid";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { VsCrossLinks } from "@/components/vs-cross-links";
import { TestimonialHighlight } from "@/components/testimonials";
import { WebPageSchema, FAQPageSchema } from "@/components/schema-org";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hockey Agency Management Software | Repline",
  description:
    "Hockey agency management software for multi-rep firms: assign players per advisor, give owners full oversight, and roll up contracts and counts by rep.",
  alternates: { canonical: "/hockey-agency-management-software" },
  openGraph: {
    type: "website",
    title: "Hockey Agency Management Software | Repline",
    description:
      "Run a multi-advisor hockey agency without losing visibility. Per-rep assignment, owner oversight, advisor rollups, and hockey-native compliance.",
    url: "https://www.repline.io/hockey-agency-management-software",
    images: [ogImage({ title: "Hockey Agency Management Software", subtitle: "Built for multi-rep hockey practices", tag: "For Agencies" })],
  },
};

const faqs = [
  {
    q: "What is hockey agency management software?",
    a: "Hockey agency management software is the system a multi-advisor representation firm runs on: every player and contact in one record set, assignment of clients to specific reps, visibility rules so advisors see their own book while owners see everything, and rollups that show contracts, advisory agreements and player counts per advisor. It differs from a general agency CRM in that it has to model hockey's own rules — league calendars, CHL-NCAA eligibility, and the flat-fee family-advisor relationship NCAA rules require.",
  },
  {
    q: "How is this different from a general agency CRM?",
    a: "The business layer is the same everywhere: clients, contracts, invoicing, commissions. What a general platform can't ship is the layer underneath, because it isn't shared across sports. OHL import draft restrictions, USHL and NCAA windows, CHL-NCAA eligibility and the agent-versus-family-advisor split are hockey's alone. In a generic tool each one becomes something a person has to remember.",
  },
  {
    q: "How many reps and players does the Agency plan cover?",
    a: "The Agency plan covers 200 players and 15 users with 10 GB of document storage, and includes everything in Team plus the owner oversight dashboard, advisor rollups and advanced analytics. It is $695/month, or $583/month billed annually. Larger firms can talk to us about Enterprise, which lifts the caps and adds dedicated onboarding.",
  },
  {
    q: "Can each advisor see only their own players?",
    a: "Yes. Players are assigned per rep, and visibility controls determine who sees what. Each advisor works their own roster; agency owners see the whole book, including which reps are active, which clients are going quiet, and where each advisor's agreements and player counts stand.",
  },
  {
    q: "Does it handle both agents and family advisors?",
    a: "Yes, and for a hockey agency that matters more than it sounds. NCAA rules bar an eligible player from signing with an agent, so anyone advising a possible college player works as a flat-fee family advisor instead. Repline treats team contracts and advisory agreements as first-class and rolls both up per advisor, rather than assuming every relationship is a commission.",
  },
];

export default function HockeyAgencyManagementSoftwarePage() {
  return (
    <>
      <WebPageSchema
        name="Hockey Agency Management Software"
        description="Agency management software for multi-rep hockey representation firms."
        url="https://www.repline.io/hockey-agency-management-software"
      />
      <FAQPageSchema faqs={faqs} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hockey Agency Management Software" },
        ]}
      />

      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            For multi-rep agencies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Hockey agency management software
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Hockey agency management software has to do two jobs at once: run the agency &mdash; who owns which client, what every advisor has signed, where the business actually stands &mdash; and know hockey, down to the eligibility window closing on a sixteen-year-old in the OHL. Repline does both, because it only does one sport.
          </p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-xl border border-border/60 overflow-hidden shadow-lg">
            <Image
              src="/screenshots/dashboard.png"
              alt="Repline dashboard giving an agency owner a single view of roster size, contact counts, open tasks, cadence health, and upcoming contract actions"
              width={2880}
              height={1800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* The agency problem */}
      <Section>
        <SectionHeader
          tag="The problem"
          title="A second advisor breaks a solo system"
          description="Everything that worked at one rep stops working at three."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: "Nobody knows who owns the relationship",
              desc: "Two advisors contact the same GM about different players on the same day. A family gets called twice in a week and then not at all for two months. Without assignment and a shared record, coverage is a matter of memory and goodwill.",
            },
            {
              title: "The owner is the last to know",
              desc: "A client goes quiet in October and nobody notices until they leave in February. Agency owners typically find out about a problem relationship after it is already a former relationship, because the only view of an advisor's book is the advisor.",
            },
            {
              title: "The numbers live in three places",
              desc: "Signed contracts in one advisor's email, advisory agreements in another's drive, player counts in a spreadsheet somebody updates when they remember. Nobody can answer what the agency is actually carrying without asking three people.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border/60 p-4">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What the software does */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="What it does"
          title="Agency structure, built in"
          description="Assignment, visibility and rollups — so the agency has a shape rather than a shared inbox."
        />
        <FeatureGrid
          columns={2}
          features={[
            {
              icon: "\u{1F465}",
              title: "Multi-rep assignment",
              description:
                "Add representatives and advisors, and assign players to the person who actually owns the relationship. Each rep works their own roster; nothing depends on remembering whose client is whose.",
            },
            {
              icon: "\u{1F50D}",
              title: "Owner oversight dashboard",
              description:
                "A bird's-eye view of the whole book — who is active, which players need attention, and which relationships are drifting — without reading over anyone's shoulder.",
            },
            {
              icon: "\u{1F4CA}",
              title: "Advisor rollups",
              description:
                "Advisory agreements, team contracts and player counts rolled up per advisor, so the question of where the business stands has an answer rather than a meeting.",
            },
            {
              icon: "\u{1F512}",
              title: "Visibility controls",
              description:
                "Decide who sees what. Advisors see their assigned players; owners see everything. The same record set, different windows onto it.",
            },
            {
              icon: "\u{1F4E5}",
              title: "Bulk import",
              description:
                "Bring an existing book across from spreadsheets or another tool, mapping your columns to hockey-specific fields rather than retyping a roster.",
            },
            {
              icon: "\u{1F4DD}",
              title: "Interaction logging",
              description:
                "Calls, texts and meetings logged against the player, so coverage is visible across the agency instead of living in one person's recollection.",
            },
          ]}
        />
      </Section>

      {/* The hockey layer */}
      <Section>
        <SectionHeader
          tag="The part generic tools can't ship"
          title="An agency platform that knows the sport"
          description="Agency structure is the common half. This is the half that is hockey's alone."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: "League calendars across every rep's book",
              desc: "OHL, WHL, QMJHL, USHL and NCAA key dates populate from the leagues your players are in, so a deadline on one advisor's client is visible to the agency rather than to whoever happened to diarise it.",
            },
            {
              title: "CHL-NCAA eligibility, tracked per player",
              desc: "Eligibility and compliance deadlines sit on the player record. At agency scale this is the difference between one person holding the rules in their head and the firm holding them.",
            },
            {
              title: "Agents and family advisors in one system",
              desc: "NCAA rules bar an eligible player from signing with an agent, so advisory work runs on flat fees. Repline models team contracts and advisory agreements alike and rolls both up per advisor — a distinction a commission-shaped CRM has nowhere to put.",
            },
            {
              title: "Scouting PDFs with agency branding",
              desc: "Any rep can generate a branded player profile in one click, straight from the record, so what leaves the agency looks like the agency rather than like whoever built the deck.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border/60 p-4">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted-bg">
        <TestimonialHighlight />
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeader
          tag="Pricing"
          title="What an agency plan costs"
        />
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border border-border/60 p-6">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-foreground">Agency</strong>{" "}is <strong className="text-foreground">$695/month</strong>{" "}&mdash; or $583/month billed annually &mdash; covering 200 players, 15 users and 10 GB of document storage, with everything in Team plus the owner oversight dashboard, advisor rollups and advanced analytics. Flat, with no per-seat add-ons and no setup fee.
            </p>
            <p className="text-sm text-muted leading-relaxed mt-3">
              Smaller firms usually start on <strong className="text-foreground">Team</strong>{" "}at $249/month for 5 users and 75 players. Larger ones should{" "}
              <Link href="/contact-sales" className="text-foreground underline underline-offset-4">talk to us about Enterprise</Link>, which lifts the caps and adds dedicated onboarding. Every plan starts with a free 30-day trial and no credit card.
            </p>
            <p className="mt-4">
              <Link href="/pricing" className="text-sm font-medium text-muted hover:text-foreground transition-colors underline underline-offset-4">
                See full pricing &rarr;
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted-bg">
        <SectionHeader tag="FAQ" title="Frequently asked questions" />
        <div className="max-w-2xl mx-auto space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border-b border-border/60 pb-6">
              <h3 className="text-base font-semibold mb-2">{q}</h3>
              <p className="text-sm text-muted leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/sports-agent-crm"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors underline underline-offset-4"
          >
            Comparing against general sports agency software? &rarr;
          </Link>
        </div>
      </Section>

      <VsCrossLinks current="/hockey-agency-management-software" />

      <CTASection
        title="Give the agency a shape"
        description="Per-rep assignment, owner oversight, and hockey's own deadlines in one system. Free 30-day trial."
      />
    </>
  );
}
