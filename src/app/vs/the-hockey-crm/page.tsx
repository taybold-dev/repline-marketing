import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { VsCrossLinks } from "@/components/vs-cross-links";
import { TestimonialHighlight } from "@/components/testimonials";
import { FAQPageSchema } from "@/components/schema-org";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Repline vs. The Hockey CRM for Agents & Advisors",
  description:
    "Comparing Repline and The Hockey CRM? Here's what Repline does, what to ask either vendor, and why we won't characterise a competitor we can't verify.",
  alternates: { canonical: "/vs/the-hockey-crm" },
  openGraph: {
    type: "website",
    title: "Repline vs. The Hockey CRM for Agents & Advisors",
    description:
      "Two hockey-native CRMs. Here's what Repline does, and the questions worth asking before you pick either one.",
    url: "https://www.repline.io/vs/the-hockey-crm",
    images: [ogImage({ title: "Repline vs. The Hockey CRM", subtitle: "What to ask before you choose", tag: "Comparison" })],
  },
};

const faqs = [
  {
    q: "What is The Hockey CRM?",
    a: "The Hockey CRM is a hockey-focused platform that describes itself as an agency management and scouting platform. Beyond that we won't characterise it: its site renders its content with JavaScript and publishes no crawlable feature or pricing detail, so anything more specific we told you would be guesswork. Ask them directly, and hold their answers against the checklist on this page.",
  },
  {
    q: "Why doesn't this page have a feature comparison table?",
    a: "Because we could not verify The Hockey CRM's feature set or pricing from any public source. Our other comparison pages carry detailed tables because those competitors publish their details. Building a table of assumptions about a rival would be easy and would also be dishonest, so we have given you a list of questions to ask instead.",
  },
  {
    q: "What does Repline cost?",
    a: "Pro is $75/month for a solo advisor, Team is $249/month for up to 5 users, and Agency is $695/month for up to 15 users. Annual billing saves 15% on Pro and Team and 16% on Agency. Every hockey-specific feature is included at every tier, with no per-seat add-ons. All plans start with a free 30-day trial and no credit card.",
  },
  {
    q: "Can I try both before deciding?",
    a: "Repline offers a free 30-day trial with no credit card, so you can load a real roster and see whether it fits how you work. We'd encourage you to ask The Hockey CRM for the same. Any hockey CRM worth its price should survive a fortnight with your actual players in it.",
  },
];

const questions = [
  {
    q: "Does it know your leagues, or just store what you type?",
    why: "Hockey representation runs on dates somebody else sets — OHL, WHL, QMJHL and USHL calendars, CHL-NCAA eligibility windows, draft and tender deadlines. Ask whether those populate automatically or whether you are expected to enter them yourself every season.",
  },
  {
    q: "Can you send a representation agreement without leaving it?",
    why: "Storing a contract and papering one are different jobs. Ask whether e-signature is built in, whether a document can carry dynamic fields like a pricing selection, and whether signature areas can be assigned by role so it is unambiguous which block is the agent's and which is the player's or parent's.",
  },
  {
    q: "Does it handle the family-advisor model, not just agent commissions?",
    why: "NCAA rules bar an eligible player from signing with an agent, so anyone advising a possible college player works on a flat fee instead. A platform built purely around commission has nowhere to put that. Ask how advisory agreements are modelled and whether they roll up per advisor.",
  },
  {
    q: "Will it tell you who you haven't called?",
    why: "Reminders fire on dates you set. Cadence tracking tells you which committed family has quietly gone eleven weeks without contact. Ask which one you are getting.",
  },
  {
    q: "What does a scouting report look like coming out of it?",
    why: "Ask to see the actual output, not the input form. A branded PDF you can send a GM without reformatting is a different product from a notes field and a file attachment.",
  },
  {
    q: "What is the real price at your seat count, billed your way?",
    why: "Ask for monthly and annual, the per-seat cost beyond the included users, and any setup or onboarding fee. Flat tiers and per-seat pricing diverge sharply once an agency grows.",
  },
];

export default function VsTheHockeyCrm() {
  return (
    <>
      <FAQPageSchema faqs={faqs} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Repline vs. The Hockey CRM" },
        ]}
      />

      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Repline vs. The Hockey CRM
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Two hockey CRMs, and an honest comparison problem
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            The Hockey CRM is the closest thing Repline has to a direct rival &mdash; another platform built for hockey rather than bolted onto a generic CRM. We would like to give you a feature-by-feature table. We can&apos;t honestly build one, and this page explains why, then gives you something more useful instead.
          </p>
        </div>
      </section>

      {/* The honest framing */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
            <h2 className="text-lg font-semibold mb-2">Why there&apos;s no comparison table here</h2>
            <p className="text-sm text-muted leading-relaxed">
              The Hockey CRM&apos;s site renders through JavaScript and publishes no crawlable feature list or pricing. We could not verify a single specific claim about what it does or what it costs from any public source. Our other comparison pages &mdash; <Link href="/vs/agent-live-360" className="text-foreground underline underline-offset-4">Agent Live 360</Link>, <Link href="/vs/fandelo" className="text-foreground underline underline-offset-4">Fandelo</Link>, <Link href="/vs/hubspot" className="text-foreground underline underline-offset-4">HubSpot</Link> &mdash; carry detailed tables because those vendors publish their details, and where one of them beats Repline we say so.
            </p>
            <p className="text-sm text-muted leading-relaxed mt-3">
              Writing a table of assumptions about a competitor would take ten minutes and would be worth nothing to you. So below is what Repline actually does, and the questions we think are worth putting to either vendor &mdash; including us.
            </p>
          </div>
        </div>
      </Section>

      {/* Buyer checklist */}
      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Evaluating either one"
          title="Six questions worth asking"
          description="Ask both vendors. The answers separate a hockey CRM from a CRM with hockey words in it."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {questions.map((item, i) => (
            <div key={item.q} className="rounded-lg border border-border/60 bg-background p-5">
              <h3 className="font-semibold mb-1">
                <span className="text-muted mr-2">{i + 1}.</span>
                {item.q}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{item.why}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What Repline does */}
      <Section>
        <SectionHeader
          tag="Our answers"
          title="How Repline answers them"
          description="Everything here is in the product today. Hold us to it during the trial."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: "League calendars and eligibility, built in",
              desc: "OHL, WHL, QMJHL, USHL and NCAA key dates auto-populate from the leagues your players are in. CHL-NCAA eligibility and compliance deadlines are tracked per player, and contract expirations generate alerts.",
            },
            {
              title: "E-signatures with role-based signing",
              desc: "Send a representation agreement from inside Repline, with dynamic fields such as a pricing package selection that populates into the document, and signature areas assigned by role so the Agent and Player/Parent blocks are never confused.",
            },
            {
              title: "Agent and family-advisor models both",
              desc: "Team contracts and advisory agreements are both first-class, and roll up per advisor so an agency owner can see where the business actually stands.",
            },
            {
              title: "Cadence, not just reminders",
              desc: "Set a contact cadence per player. It resets when you log a call, text or meeting, and warns you before a family goes cold — which is a different thing from a reminder you remembered to set.",
            },
            {
              title: "A scouting PDF you can send",
              desc: "One click generates a branded PDF profile straight from the player record — contract history, stats, scouting notes — ready for a GM without reformatting.",
            },
            {
              title: "Flat pricing, published",
              desc: "Pro $75/mo, Team $249/mo for 5 users, Agency $695/mo for 15 — on our pricing page, with no per-seat add-ons and no setup fee.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border/60 p-4">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-xl border border-border/60 overflow-hidden shadow-lg">
            <Image
              src="/screenshots/player-contracts.png"
              alt="Repline contract and e-signature view showing a team contract and advisory agreement with signer assignment by role"
              width={2880}
              height={1800}
              className="w-full h-auto"
            />
          </div>
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
            href="/sports-agent-crm"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors underline underline-offset-4"
          >
            Comparing the wider category? Start here &rarr;
          </Link>
        </div>
      </Section>

      <VsCrossLinks current="/vs/the-hockey-crm" />

      <CTASection
        title="Load a real roster and judge for yourself"
        description="Free 30-day trial, no credit card. Thirty days with your actual players in it beats any comparison table."
      />
    </>
  );
}
