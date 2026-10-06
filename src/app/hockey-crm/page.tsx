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
  title: "Hockey CRM for Agents and Advisors | Repline",
  description:
    "\"Hockey CRM\" means three different products. Here's what separates club software, league admin, and a CRM built for agents and advisors who represent players.",
  alternates: { canonical: "/hockey-crm" },
  openGraph: {
    type: "website",
    title: "Hockey CRM for Agents and Advisors | Repline",
    description:
      "Three different products share the name. Which one you need depends on whether you run a club, a league, or a book of clients.",
    url: "https://www.repline.io/hockey-crm",
    images: [ogImage({ title: "Hockey CRM", subtitle: "Three products share the name. Here's which is which", tag: "Explainer" })],
  },
};

const faqs = [
  {
    q: "What is a hockey CRM?",
    a: "A hockey CRM is customer-relationship software adapted to hockey, and the phrase covers three distinct products. Club and team management software handles rosters, scheduling, registration and parent communication. League and association platforms handle registration, scheduling and officials across many teams. An agent and advisor CRM handles something different again: a book of players you represent, their contracts, the contacts around them, and the compliance deadlines attached to each one. Repline is the third kind.",
  },
  {
    q: "Is a hockey CRM the same as team management software?",
    a: "No, though the terms get used interchangeably. Team management software is organised around a team — who is on the roster, when practice is, who has paid. An agent or advisor CRM is organised around a relationship you own across years and teams: the player stays yours as they move from junior to NCAA to pro, and the software has to follow them rather than the roster.",
  },
  {
    q: "Which hockey CRM do I need?",
    a: "Ask who your 'customer' is. If it's parents and players on one team, you want club software. If it's many teams in one organisation, you want a league platform. If it's a roster of clients whose careers you manage — with contracts, eligibility windows and families to keep warm — you want an agent and advisor CRM, which is what the rest of this page covers.",
  },
  {
    q: "What should an agent and advisor hockey CRM actually do?",
    a: "At minimum: hold every player with hockey-specific fields rather than generic contact fields; move them through stages that match representation rather than sales; carry league calendars and eligibility deadlines so compliance isn't memory; produce a scouting report you can send without rebuilding it; and handle both commission-based agent agreements and the flat-fee family-advisor model that NCAA rules require.",
  },
  {
    q: "What does Repline cost?",
    a: "Pro is $75/month for a solo advisor, Team is $249/month for up to 5 users, and Agency is $695/month for up to 15. Annual billing saves 15% on Pro and Team, and 16% on Agency. Every hockey-specific feature is included at every tier, and all plans start with a free 30-day trial with no credit card.",
  },
];

export default function HockeyCrmPage() {
  return (
    <>
      <WebPageSchema
        name="Hockey CRM for Agents and Advisors"
        description="What the phrase hockey CRM covers, and what separates agent and advisor software from club and league platforms."
        url="https://www.repline.io/hockey-crm"
      />
      <FAQPageSchema faqs={faqs} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hockey CRM" },
        ]}
      />

      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Explainer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Hockey CRM, and which one you actually need
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Search &ldquo;hockey CRM&rdquo; and you get three different products wearing the same name. One runs a club. One runs a league. One runs a book of clients. They share almost nothing beyond the word, and buying the wrong one is an expensive way to find that out.
          </p>
        </div>
      </section>

      {/* Disambiguation — the job this page exists to do */}
      <Section>
        <SectionHeader
          tag="Three products, one name"
          title="What people mean by &ldquo;hockey CRM&rdquo;"
          description="Work out which column you're in before comparing anything."
        />
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
          {[
            {
              kind: "Club & team software",
              who: "Coaches, team managers, club admins",
              job: "Rosters, practice scheduling, registration, parent communication, fees. Organised around a team and a season.",
              us: "Not Repline. Tools like TeamSnap and 360Player serve this well.",
            },
            {
              kind: "League & association platforms",
              who: "League and association administrators",
              job: "Registration, scheduling, game sheets, officials and communication across many teams at once.",
              us: "Not Repline. LeagueApps and similar platforms are built for it.",
            },
            {
              kind: "Agent & advisor CRM",
              who: "Agents, family advisors, representation agencies",
              job: "A book of clients you represent across years and teams — contracts, contacts, eligibility, cadence, agreements.",
              us: "This is Repline.",
            },
          ].map((col) => (
            <div
              key={col.kind}
              className={`rounded-xl border p-5 ${
                col.us === "This is Repline."
                  ? "border-primary/30 bg-primary/5"
                  : "border-border/60"
              }`}
            >
              <h3 className="font-semibold mb-1">{col.kind}</h3>
              <p className="text-xs uppercase tracking-wide text-muted mb-3">{col.who}</p>
              <p className="text-sm text-muted leading-relaxed">{col.job}</p>
              <p className="text-sm mt-3 font-medium">{col.us}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted max-w-2xl mx-auto">
          We mention the other two because sending a club admin into a tool built for agents wastes everybody&apos;s time. If you manage a team or a league, Repline is the wrong product and we&apos;d rather say so here.
        </p>
      </Section>

      {/* The agent/advisor case */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="If you represent players"
          title="Why a representation CRM is a different product"
          description="Club software is organised around a team. Your work is organised around a relationship that outlives any team."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: "The player stays yours; the team doesn't",
              desc: "A client moves from U18 to the OHL to an NCAA programme to a pro contract. Team-shaped software loses them at each transition, because its unit is the roster. A representation CRM follows the person, with their full history intact — contracts, conversations, scouting notes, the lot.",
            },
            {
              title: "The deadlines come from outside",
              desc: "Practice times are yours to set. CHL-NCAA eligibility windows, OHL import draft restrictions and draft dates are not. A CRM for representation has to carry league calendars and compliance deadlines, because missing one costs a player a season.",
            },
            {
              title: "Half your relationships can't be agent relationships",
              desc: "NCAA rules bar an eligible player from signing with an agent, so anyone advising a possible college player works as a flat-fee family advisor. Software built around teams — or around sales commissions — has nowhere to put that distinction.",
            },
            {
              title: "The output is a document somebody else reads",
              desc: "A GM gets a scouting profile. A family gets a representation agreement. Both have to leave your system looking professional, which means generated PDFs and built-in e-signature, not a notes field and an attachment.",
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
              alt="Repline player pipeline organised by playing level — U.S. Junior A, CHL Major Junior, NCAA and ECHL — following clients across teams rather than within one roster"
              width={2880}
              height={1800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Section>

      {/* What Repline does */}
      <Section>
        <SectionHeader
          tag="What you get"
          title="Repline, in one screen's worth"
          description="The hockey-specific half. The ordinary CRM half is there too."
        />
        <FeatureGrid
          columns={2}
          features={[
            {
              icon: "\u{1F3D2}",
              title: "Hockey-native pipeline",
              description:
                "Prospect, Committed, Draft Eligible, Signed, Active — stages that match representation, not a sales funnel relabelled.",
            },
            {
              icon: "\u{1F4C5}",
              title: "League calendars and eligibility",
              description:
                "OHL, WHL, QMJHL, USHL and NCAA key dates populate automatically. CHL-NCAA eligibility and compliance deadlines track per player.",
            },
            {
              icon: "\u{1F4C4}",
              title: "Scouting PDFs and e-signatures",
              description:
                "One-click branded player profiles, and representation agreements signed in-platform with signature areas assigned by role.",
            },
            {
              icon: "\u{1F514}",
              title: "Contact cadence",
              description:
                "A per-player cadence that resets when you log a call, text or meeting, and warns you before a family goes quiet.",
            },
          ]}
        />
        <div className="mt-10 text-center">
          <Link
            href="/features"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors underline underline-offset-4"
          >
            See everything Repline does &rarr;
          </Link>
        </div>
      </Section>

      <Section className="bg-muted-bg">
        <TestimonialHighlight />
      </Section>

      {/* Routing */}
      <Section>
        <SectionHeader
          tag="Go deeper"
          title="Where to next"
        />
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            { href: "/", label: "Solo agent or advisor", desc: "The product overview, from pipelines to contracts." },
            { href: "/hockey-agency-management-software", label: "Multi-rep agency", desc: "Assignment, owner oversight and advisor rollups." },
            { href: "/sports-agent-crm", label: "Comparing beyond hockey", desc: "How this sits against general sports agency software." },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-lg border border-border/60 p-4 hover:bg-muted-bg transition-colors group"
            >
              <h3 className="text-sm font-semibold mb-1 group-hover:text-accent transition-colors">{c.label}</h3>
              <p className="text-xs text-muted leading-relaxed">{c.desc}</p>
            </Link>
          ))}
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
      </Section>

      <VsCrossLinks current="/hockey-crm" />

      <CTASection
        title="If you represent players, you're in the right column"
        description="Hockey-native pipelines, league calendars, and compliance that isn't memory. Free 30-day trial."
      />
    </>
  );
}
