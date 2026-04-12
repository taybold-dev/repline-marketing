import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Talk to Us",
  description:
    "Book a call with the Repline team. Whether you're a solo rep, running an agency, or exploring enterprise options \u2014 we'd love to chat.",
  alternates: { canonical: "/contact-sales" },
  openGraph: {
    type: "website",
    title: "Talk to Us | Repline",
    description:
      "Book a call with the Repline team. Solo reps, agencies, and enterprise \u2014 we'd love to chat.",
    url: "https://www.repline.io/contact-sales",
  },
};

export default function ContactSalesPage() {
  return (
    <>
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
        <div className="max-w-3xl mx-auto">
          {/* Calendly embed */}
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
      </Section>
    </>
  );
}
