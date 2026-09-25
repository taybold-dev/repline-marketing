import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { FeatureGrid } from "@/components/feature-grid";
import { ComparisonTable } from "@/components/comparison-table";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { VsCrossLinks } from "@/components/vs-cross-links";
import { TestimonialHighlight } from "@/components/testimonials";
import { WebPageSchema, FAQPageSchema } from "@/components/schema-org";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sports Agent CRM & Agency Management Software | Repline",
  description:
    "Most sports agency management software is sport-agnostic. Repline is a sports agent CRM built for one sport — hockey — down to eligibility and league dates.",
  alternates: { canonical: "/sports-agent-crm" },
  openGraph: {
    type: "website",
    title: "Sports Agent CRM & Agency Management Software | Repline",
    description:
      "General sports agency software handles the business. It can't model CHL-NCAA eligibility or a junior league calendar. Repline does, because it only does hockey.",
    url: "https://www.repline.io/sports-agent-crm",
    images: [ogImage({ title: "Sports Agent CRM", subtitle: "Agency management software built for one sport", tag: "For Hockey" })],
  },
};

const faqs = [
  {
    q: "What is a sports agent CRM?",
    a: "A sports agent CRM is client management software built around representing athletes rather than selling products. Instead of leads and opportunities, it tracks players, their contracts and key dates, the contacts around them — teams, coaches, scouts, families — and the agency's commissions and expenses. The core is common across sports; what differs is whether the tool understands the rules of the sport you actually work in.",
  },
  {
    q: "Do hockey agents need different software from other sports agents?",
    a: "The business layer is the same — clients, contracts, invoicing, commissions. The compliance layer is not. Hockey representation runs on CHL-NCAA eligibility rules, OHL import draft restrictions, junior league calendars across the OHL, WHL, QMJHL and USHL, and the distinction between a commission-based agent and a flat-fee family advisor that NCAA rules require. General sports agency software leaves all of that to you.",
  },
  {
    q: "Can general sports agency management software handle NCAA eligibility?",
    a: "Not natively. NCAA eligibility is sport-specific and changes — CHL players only became NCAA-eligible in August 2025. A sport-agnostic platform can store a date you type in, but it doesn't know which dates matter, doesn't update when the rules change, and won't warn you when a player's window is closing. That tracking either lives in your tool or it lives in your head.",
  },
  {
    q: "Is Repline cheaper than general sports agent software?",
    a: "Often no. Sport-agnostic tools frequently cost less per seat, and if price per user is your deciding factor you should compare directly. Repline is Pro $75/month for a solo advisor, Team $249/month for up to 5 users and Agency $695/month for up to 15, flat with no per-seat add-ons. What the difference buys is the hockey layer — league calendars, eligibility tracking, scouting PDFs and e-signatures you would otherwise run outside the tool.",
  },
  {
    q: "Does Repline work for agents representing athletes in other sports?",
    a: "No. Repline is hockey-only by design — the pipeline stages, league calendars and compliance rules are hockey's. If you represent athletes across several sports, a general sports agency platform is the better fit and we'd tell you so.",
  },
];

const rows = [
  {
    feature: "Client & contact records",
    competitor: "Yes — the common core of any agent CRM",
    repline: "Yes, plus hockey fields: position, league, draft year, handedness, playing level",
  },
  {
    feature: "Pipeline stages",
    competitor: "Generic lead / prospect / client stages you configure yourself",
    repline: "Prospect, Committed, Draft Eligible, Signed, Active — already built",
  },
  {
    feature: "League calendars",
    competitor: "A calendar you populate by hand",
    repline: "OHL, WHL, QMJHL, USHL and NCAA key dates auto-populate",
  },
  {
    feature: "Eligibility & compliance",
    competitor: "Not modelled — eligibility rules are sport-specific",
    repline: "CHL-NCAA eligibility and compliance deadlines tracked per player",
  },
  {
    feature: "Scouting reports",
    competitor: "Document storage; the report gets built somewhere else",
    repline: "One-click branded PDF generated from the player record",
  },
  {
    feature: "Representation agreements",
    competitor: "Generic document storage, or e-signature as an add-on",
    repline: "Built-in e-signatures with dynamic fields and signature areas assigned by role (Agent vs. Player/Parent)",
  },
  {
    feature: "Agent vs. family advisor",
    competitor: "Built around agent commissions",
    repline: "Team contracts and advisory agreements both supported, with per-advisor rollups",
  },
  {
    feature: "Multi-sport coverage",
    competitor: "Yes — that is the entire point",
    repline: "Hockey only. If you represent across sports, this is a real reason to look elsewhere",
  },
  {
    feature: "Back office",
    competitor: "Often strong — invoicing, expenses, commissions, accounting sync",
    repline: "Stripe payments and QuickBooks sync, with per-advisor rollups",
  },
  {
    feature: "Cost per seat",
    competitor: "Frequently lower",
    repline: "Pro $75/mo, Team $249/mo (5 users), Agency $695/mo (15 users) — flat, no per-seat add-ons",
  },
];

export default function SportsAgentCrmPage() {
  return (
    <>
      <WebPageSchema
        name="Sports Agent CRM & Agency Management Software"
        description="Sports agency management software built specifically for hockey representation."
        url="https://www.repline.io/sports-agent-crm"
      />
      <FAQPageSchema faqs={faqs} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Sports Agent CRM" },
        ]}
      />

      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Sports agency management software
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Sports agency management software, built for hockey
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Every sports agent CRM handles the same business layer &mdash; clients, contracts, invoicing, commissions. The tools that cover every sport stop there, because the next layer down is different in each one. Repline is a sports agent CRM that only does hockey, and therefore knows its rules.
          </p>
        </div>
      </section>

      {/* The common core */}
      <Section>
        <SectionHeader
          tag="The common layer"
          title="What every sports agent CRM has to do"
          description="These are table stakes. Any serious agency platform, in any sport, covers them — and so does Repline."
        />
        <FeatureGrid
          columns={2}
          features={[
            {
              icon: "\u{1F4C7}",
              title: "Clients and the people around them",
              description:
                "Athlete records with the contacts that matter — teams, coaches, scouts, parents — and a history of every interaction, so nothing depends on one person's memory.",
            },
            {
              icon: "\u{1F4C4}",
              title: "Contracts and key dates",
              description:
                "Every agreement stored against the client it belongs to, with expirations and deadlines that surface before they arrive rather than after.",
            },
            {
              icon: "\u{1F4B5}",
              title: "Commissions, invoicing and expenses",
              description:
                "What the agency earns, what it spent getting there, and which clients are actually carrying the business.",
            },
            {
              icon: "\u{1F465}",
              title: "Multiple reps, one source of truth",
              description:
                "Each rep sees their own book; owners see everything. No two agents calling the same GM about different players on the same day.",
            },
          ]}
        />
      </Section>

      {/* Where the generic tools break */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="The layer underneath"
          title="Where sport-agnostic tools break on hockey"
          description="A platform serving every sport can only ship what every sport shares. These are the parts it has to leave to you."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: "Eligibility rules that move",
              desc: "CHL players only became NCAA-eligible on 1 August 2025, and the NCAA is still adjusting the eligibility clock. A general platform can store a date you typed in; it can't tell you which dates matter, update when the rules change, or warn you that a player's window is closing. Repline tracks eligibility and compliance deadlines per player because hockey is the only sport it has to model.",
            },
            {
              title: "Calendars nobody else needs",
              desc: "OHL import draft restrictions, WHL and QMJHL key dates, USHL and NCAA windows. In a sport-agnostic tool, every one of those is a calendar entry somebody has to remember to create. In Repline they populate from the leagues your players are in.",
            },
            {
              title: "The advisor/agent split",
              desc: "NCAA rules bar an eligible player from signing with an agent at all, so anyone advising a player who might play college hockey works as a flat-fee family advisor instead. A CRM built around agent commissions has no place to put that. Repline handles team contracts and advisory agreements alike, and rolls both up per advisor.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border/60 bg-background p-4">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-xl border border-border/60 overflow-hidden shadow-lg">
            <Image
              src="/screenshots/players-list.png"
              alt="Repline player pipeline board with hockey-specific columns for U.S. Junior A, CHL Major Junior, NCAA and ECHL"
              width={2880}
              height={1800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <SectionHeader
          tag="Side by side"
          title="General sports agency software vs. Repline"
          description="Compared against the category rather than one vendor. For named comparisons, see the pages linked below."
        />
        <div className="max-w-4xl mx-auto">
          <ComparisonTable competitorName="General sports-agent CRM" rows={rows} />
        </div>
      </Section>

      <Section className="bg-muted-bg">
        <TestimonialHighlight />
      </Section>

      {/* FAQ */}
      <Section>
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
            href="/features"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors underline underline-offset-4"
          >
            See everything Repline does &rarr;
          </Link>
        </div>
      </Section>

      <VsCrossLinks current="/sports-agent-crm" />

      <CTASection
        title="One sport, all of its rules"
        description="Hockey-native pipelines, league calendars, and eligibility tracking. Free 30-day trial, no credit card required."
      />
    </>
  );
}
