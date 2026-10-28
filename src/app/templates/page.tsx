import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WebPageSchema } from "@/components/schema-org";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Free Hockey Templates for Agents and Advisors | Repline",
  description:
    "Free templates and tools for hockey agents, advisors and scouts: a printable scouting report and a player profile PDF generator. No sign-up.",
  alternates: { canonical: "/templates" },
  openGraph: {
    type: "website",
    title: "Free Hockey Templates for Agents and Advisors | Repline",
    description:
      "A printable scouting report and a player profile PDF generator for hockey agents, advisors and scouts. No sign-up.",
    url: "https://www.repline.io/templates",
    images: [ogImage({ title: "Free Hockey Templates", subtitle: "For agents, advisors and scouts", tag: "Templates" })],
  },
};

const templates = [
  {
    href: "/templates/hockey-player-profile",
    title: "Hockey player profile generator",
    desc: "Fill in a form and download a one-page player profile PDF for coaches and scouts: player card, scouting notes, links, career history and academics.",
  },
  {
    href: "/templates/hockey-scouting-report",
    title: "Hockey scouting report",
    desc: "Player and viewing details, 1-5 ratings for skaters and goalies, and a summary a coach can read in ten seconds. Includes a filled-in example.",
  },
];

export default function TemplatesPage() {
  return (
    <>
      <WebPageSchema
        type="CollectionPage"
        name="Free Hockey Templates for Agents and Advisors"
        description="Free templates and tools for hockey agents, advisors and scouts."
        url="https://www.repline.io/templates"
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Templates" },
        ]}
      />

      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Templates
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Free templates for hockey agents and advisors
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Free templates and tools for the paperwork of player representation: evaluating players, and presenting them to coaches. No sign-up.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto grid gap-4">
          {templates.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="rounded-lg border border-border/60 p-5 hover:bg-muted-bg transition-colors group"
            >
              <h2 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">{t.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection
        title="Or skip the templates altogether"
        description="Player profiles, scouting reports, contracts and deadlines in one place. Free 30-day trial."
      />
    </>
  );
}
