import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section";
import { PricingCards } from "@/components/pricing-cards";
import { CTASection } from "@/components/cta-section";
import { SoftwareApplicationSchema } from "@/components/schema-org";

export const metadata: Metadata = {
  title: "Pricing | Hockey Agent & Advisor CRM — Repline",
  description:
    "Simple pricing for solo reps and agencies. Start free for 30 days. Plans from $75/mo for advisors to $695/mo for agencies.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    title: "Pricing | Hockey Agent & Advisor CRM — Repline",
    description:
      "Simple pricing for solo reps and agencies. Start free for 30 days. Plans from $75/mo for advisors to $695/mo for agencies.",
    url: "https://www.repline.io/pricing",
  },
};

const faqs = [
  {
    q: "How does the free trial work?",
    a: "You get 30 days with up to 15 players and 3 users. No credit card required. At the end of the trial, you can upgrade to Pro or Agency, or continue on the Free plan with limited features.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. Cancel your subscription anytime from your settings page.",
  },
  {
    q: "What happens when I hit my player cap?",
    a: "You'll see a notification and won't be able to add new players until you upgrade or remove existing ones. Your existing data is never deleted.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes \u2014 annual plans save you 15% compared to monthly billing.",
  },
  {
    q: "What if I need more than 200 players?",
    a: "Enterprise plans support unlimited players with custom caps and dedicated support. Reach out to us and we'll build a plan that fits your agency.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. Upgrade or downgrade anytime. Changes take effect at your next billing cycle.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      <section className="pt-20 pb-4 md:pt-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Start free. Upgrade when your roster grows. No surprises.
          </p>
        </div>
      </section>

      <PricingCards />

      {/* FAQ */}
      <Section>
        <SectionHeader
          tag="FAQ"
          title="Frequently asked questions"
        />
        <div className="max-w-2xl mx-auto space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border-b border-border/60 pb-6">
              <h3 className="text-base font-semibold mb-2">{q}</h3>
              <p className="text-sm text-muted leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Start your free trial today"
        description="15 players, 3 users, 30 days. No credit card required."
      />
    </>
  );
}
