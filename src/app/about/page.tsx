import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { defaultOgImage } from "@/lib/seo";
import { WebPageSchema } from "@/components/schema-org";

export const metadata: Metadata = {
  title: "About Repline | Built for Hockey Agents and Advisors",
  description:
    "Repline is purpose-built CRM software for hockey player representation — by people who understand the agent and advisor workflow.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: "About Repline | Built for Hockey Agents and Advisors",
    description:
      "Repline is purpose-built CRM software for hockey player representation — by people who understand the agent and advisor workflow.",
    url: "https://www.repline.io/about",
    images: [defaultOgImage],
  },
};

export default function AboutPage() {
  return (
    <>
      <WebPageSchema
        type="AboutPage"
        name="About Repline"
        description="Repline is purpose-built CRM software for hockey player representation."
        url="https://www.repline.io/about"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            About
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Agents deserve better tools
          </h1>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl mx-auto space-y-6 text-base leading-relaxed text-muted">
          <p>
            Repline exists because the sports representation industry runs on spreadsheets, text threads, and memory. Agents and advisors juggle dozens of players, hundreds of contacts, and thousands of interactions every year &mdash; with tools that were never built for the job.
          </p>
          <p>
            We watched agents miss contract deadlines because a reminder got buried in email. We saw advisors lose track of which families they had called this month. We talked to agency owners who had no idea how their reps were spending their time.
          </p>
          <p>
            So we built Repline &mdash; a purpose-built operating system for player representation. Not a generic CRM with a sports skin. Not a project management tool with hockey vocabulary pasted on top. A platform designed from the ground up for the way agents and advisors actually work.
          </p>

          <div className="rounded-xl border border-border/60 overflow-hidden shadow-lg">
            <Image
              src="/screenshots/dashboard.png"
              alt="Repline CRM dashboard — a purpose-built operating system for hockey player representation showing roster overview, cadence health, and upcoming actions"
              width={2880}
              height={1800}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-xl font-semibold text-foreground pt-4">
            Why hockey first
          </h2>
          <p>
            Hockey representation is a specific world with specific needs. Draft eligibility windows, NCAA transfer rules, CHL import restrictions, OHL/WHL/QMJHL calendars &mdash; these aren&apos;t things you can bolt onto Salesforce.
          </p>
          <p>
            We started with hockey because we know it best. The pipeline stages, the relationship dynamics, the seasonal rhythms &mdash; Repline speaks your language because we built it alongside real agents and advisors.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">
            What Repline is not
          </h2>
          <p>
            Repline is not Salesforce. It&apos;s not Pipedrive. It&apos;s not Monday.com with a hockey puck icon. Those tools are built for sales teams selling software. Repline is built for agents representing people.
          </p>
          <p>
            The difference matters. Your &ldquo;deals&rdquo; are players with families and futures. Your &ldquo;pipeline&rdquo; is a career trajectory, not a revenue forecast. Your &ldquo;contacts&rdquo; are parents, billets, coaches, and GMs who you&apos;ll work with for years.
          </p>
          <p>
            Repline respects that difference in every design decision we make.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">
            Built with agents, for agents
          </h2>
          <p>
            Every feature in Repline was designed in conversation with working agents and advisors. We don&apos;t build in isolation &mdash; we ship, get feedback, and iterate. Our design partners have shaped everything from the player profile layout to the contact cadence system.
          </p>
          <p>
            If you want to help shape what comes next, we&apos;d love to hear from you.
          </p>
        </div>
      </Section>

      <CTASection
        title="Want to shape the product?"
        description="We're actively looking for agents and advisors to partner with. Let's talk."
        primaryLabel="Start free trial"
        secondaryLabel="Book a call"
      />
    </>
  );
}
