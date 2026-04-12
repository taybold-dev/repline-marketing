"use client";

import { useState } from "react";

interface Tier {
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
  badge?: string;
}

const tiers: Tier[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "For reps just getting started.",
    features: [
      "5 players",
      "1 user",
      "100 MB document storage",
      "Player profiles + pipelines",
      "Basic alerts",
    ],
    cta: "Get started",
    href: "https://app.repline.io/auth/sign-up?plan=free",
  },
  {
    name: "Pro",
    monthlyPrice: 75,
    annualPrice: 64,
    description: "For solo reps managing a full roster.",
    features: [
      "30 players",
      "1 user",
      "2 GB document storage",
      "Contact cadence tracking",
      "PDF scouting reports",
      "Calendar + deadline engine",
      "E-signatures",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "https://app.repline.io/auth/sign-up?plan=pro",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Agency",
    monthlyPrice: 695,
    annualPrice: 591,
    description: "For multi-rep agencies scaling up.",
    features: [
      "200 players",
      "15 users",
      "10 GB document storage",
      "Everything in Pro",
      "Multi-rep assignment",
      "Owner oversight dashboard",
      "Advisor rollups",
      "Visibility controls",
    ],
    cta: "Start free trial",
    href: "https://app.repline.io/auth/sign-up?plan=agency",
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "For large agencies with custom needs.",
    features: [
      "Unlimited players",
      "Unlimited users",
      "Unlimited storage",
      "Everything in Agency",
      "Custom cap overrides",
      "Dedicated onboarding",
      "SLA + support agreement",
    ],
    cta: "Talk to us",
    href: "/contact-sales",
  },
];

export function PricingCards() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className={`text-sm ${!annual ? "text-foreground font-medium" : "text-muted"}`}
          >
            Monthly
          </span>
          <button
            type="button"
            onClick={() => setAnnual(!annual)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              annual ? "bg-primary" : "bg-border"
            }`}
            aria-label="Toggle annual billing"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                annual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm ${annual ? "text-foreground font-medium" : "text-muted"}`}
          >
            Annual
            <span className="ml-1.5 text-xs text-green-600 font-medium">Save 15%</span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice;
            return (
              <div
                key={tier.name}
                className={`relative rounded-xl border p-6 flex flex-col ${
                  tier.highlighted
                    ? "border-primary shadow-lg ring-1 ring-primary"
                    : "border-border/60"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                    {tier.badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted">{tier.description}</p>
                <div className="mt-4 mb-6">
                  {price !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">${price}</span>
                      <span className="text-sm text-muted">/mo</span>
                    </div>
                  ) : (
                    <span className="text-4xl font-bold">Custom</span>
                  )}
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg
                        className="h-4 w-4 mt-0.5 text-green-600 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:bg-muted-bg"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
