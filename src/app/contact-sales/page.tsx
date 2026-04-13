import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ogImage } from "@/lib/seo";
import { WebPageSchema } from "@/components/schema-org";

export const metadata: Metadata = {
  title: "Talk to Us | Hockey Agent CRM Demo — Repline",
  description:
    "Book a call with the Repline team. Whether you're a solo rep, running an agency, or exploring enterprise options — we'd love to chat.",
  alternates: { canonical: "/contact-sales" },
  openGraph: {
    type: "website",
    title: "Talk to Us | Hockey Agent CRM Demo — Repline",
    description:
      "Book a call with the Repline team. Solo reps, agencies, and enterprise — we'd love to chat.",
    url: "https://www.repline.io/contact-sales",
    images: [ogImage({ title: "Talk to Us", subtitle: "Book a 30-minute walkthrough with the Repline team", tag: "Hockey Agent CRM Demo" })],
  },
};

export default function ContactSalesPage() {
  return (
    <>
      <WebPageSchema
        type="ContactPage"
        name="Talk to Us — Repline"
        description="Book a call with the Repline team."
        url="https://www.repline.io/contact-sales"
      />
      <section className="pt-20 pb-4 md:pt-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Talk to us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s find the right fit
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Whether you&apos;re a solo rep getting started, an agency scaling up, or exploring enterprise options &mdash; book a time and we&apos;ll walk you through Repline.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Left — value props */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-3">What to expect</h2>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="text-foreground font-medium shrink-0">30 min</span>
                  <span>A focused walkthrough of Repline tailored to your roster size and workflow.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-medium shrink-0">Your data</span>
                  <span>Bring your questions &mdash; we can show you how your current process maps into Repline.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-medium shrink-0">No pressure</span>
                  <span>No sales pitch. If Repline isn&apos;t the right fit, we&apos;ll tell you.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Built for hockey reps</h2>
              <p className="text-sm text-muted">
                Repline is purpose-built CRM software for hockey agents and advisors. Player
                profiles, contract tracking, scouting reports, e-signatures, and compliance
                deadlines &mdash; all in one place. No more spreadsheets, no more generic
                CRMs built for SaaS sales teams.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Plans for every practice</h2>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <span className="text-foreground font-medium">Pro</span> &mdash; $75/mo for solo advisors (up to 50 players)
                </li>
                <li>
                  <span className="text-foreground font-medium">Agency</span> &mdash; $695/mo for multi-user agencies (unlimited players)
                </li>
                <li>
                  <span className="text-foreground font-medium">Free trial</span> &mdash; 30 days, no credit card required
                </li>
              </ul>
            </div>
          </div>

          {/* Right — Calendly embed */}
          <div>
            <div className="rounded-xl border border-border/60 overflow-hidden bg-background">
              <iframe
                src="https://calendly.com/taybold/30min"
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a call with Repline"
                className="w-full"
              />
            </div>
            <p className="mt-4 text-sm text-muted text-center">
              Prefer email? Reach us at{" "}
              <a
                href="mailto:hello@repline.io"
                className="text-foreground underline underline-offset-4"
              >
                hello@repline.io
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
