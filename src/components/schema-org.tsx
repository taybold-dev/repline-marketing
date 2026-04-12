/**
 * JSON-LD structured data for SEO.
 * Organization + WebSite go on every page (via root layout).
 * SoftwareApplication goes on homepage + pricing.
 */

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Repline",
    url: "https://www.repline.io",
    logo: "https://www.repline.io/icon-512.png",
    description:
      "The operating system for hockey player representation. CRM software built for hockey agents and advisors.",
    foundingDate: "2025",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@repline.io",
      contactType: "sales",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Repline",
    url: "https://www.repline.io",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.repline.io/features?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareApplicationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Repline",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "CRM",
    operatingSystem: "Web",
    url: "https://www.repline.io",
    description:
      "The operating system for hockey player representation. Manage players, contracts, contacts, and career pipelines.",
    offers: [
      {
        "@type": "Offer",
        name: "Pro",
        price: "75.00",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        description:
          "For solo reps. 30 players, 1 user, 2 GB storage, e-signatures, PDF reports.",
        url: "https://www.repline.io/pricing",
      },
      {
        "@type": "Offer",
        name: "Agency",
        price: "695.00",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        description:
          "For multi-rep agencies. 200 players, 15 users, 10 GB storage, owner oversight.",
        url: "https://www.repline.io/pricing",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "0",
        priceCurrency: "USD",
        description:
          "Custom pricing for large agencies. Unlimited players, unlimited users, dedicated onboarding.",
        url: "https://www.repline.io/contact-sales",
      },
    ],
    featureList: [
      "Player profiles and career pipeline board",
      "Contact cadence tracking and alerts",
      "Contract management and e-signatures",
      "PDF scouting reports with agency branding",
      "Multi-rep team support with owner oversight",
      "Calendar with league key dates and deadlines",
      "Mobile-first PWA — works at the rink",
      "Stripe payments and QuickBooks sync",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
