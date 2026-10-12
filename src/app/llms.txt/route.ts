import { getAllPosts } from "@/lib/blog";

// llms.txt, served from a route handler rather than `public/llms.txt` so the
// guide list is generated from the same front matter as the sitemap and the
// blog itself. The previous static file listed no posts at all, which meant
// the crawlers we explicitly allow in robots.txt (GPTBot, ClaudeBot,
// PerplexityBot) were handed a manifest with none of the pages that answer a
// question.
//
// Everything above `## Guides` is maintained copy. Pricing in particular is
// duplicated from src/components/pricing-cards.tsx and has drifted before —
// change both together, or centralise the tiers.

// Prerendered at build time: the content is derived entirely from front
// matter on disk, with nothing request-dependent. Note that Next 16 removes
// `dynamic` once Cache Components is enabled (see the route-segment-config
// docs); if that gets turned on, this line goes and the caching moves with it.
export const dynamic = "force-static";

const BASE_URL = "https://www.repline.io";

const PREAMBLE = `# Repline

> The CRM built for hockey agents and advisors.

Repline is purpose-built CRM software for hockey player representation. It replaces spreadsheets and generic CRMs (HubSpot, Salesforce, Monday.com) with tools designed specifically for managing players, contracts, scouting reports, and compliance deadlines.

## Who it's for

- Hockey agents (NHLPA-certified and independent)
- Hockey advisors and player representatives
- Agencies managing multiple agents and rosters

## What it does

- Player profiles with hockey-specific fields (position, league, draft year, handedness)
- Visual pipeline board with hockey-native stages (Prospect, Draft Eligible, Signed, Active)
- Contract tracking with key dates and compliance deadlines
- PDF scouting report generation
- E-signatures for representation agreements
- Agency oversight with multi-user roles and permissions
- Touch tracking for player and contact relationship management

## Pricing

All plans include a free 30-day trial with no credit card required. Annual
billing is shown as the per-month equivalent.

- Pro: $75/month, or $64/month billed annually. 30 players, 1 user, 2 GB
  document storage. For solo reps.
- Team: $249/month, or $212/month billed annually. 75 players, 5 users, 5 GB
  document storage. For small agencies with 2-5 advisors.
- Agency: $695/month, or $583/month billed annually. 200 players, 15 users,
  10 GB document storage. For large advisory firms.
- Enterprise: custom pricing. Unlimited players, users, and storage, with
  dedicated onboarding. Contact ${BASE_URL}/contact-sales

## Key pages

- Homepage: ${BASE_URL}
- Features: ${BASE_URL}/features
- Sports agent CRM: ${BASE_URL}/sports-agent-crm
- Hockey CRM (explainer): ${BASE_URL}/hockey-crm
- Hockey agency management software: ${BASE_URL}/hockey-agency-management-software
- Pricing: ${BASE_URL}/pricing
- About: ${BASE_URL}/about
- Blog: ${BASE_URL}/blog
- Contact: ${BASE_URL}/contact-sales

## Comparisons

- vs. Spreadsheets: ${BASE_URL}/vs/spreadsheets
- vs. Monday.com: ${BASE_URL}/vs/monday
- vs. HubSpot: ${BASE_URL}/vs/hubspot
- vs. Salesforce: ${BASE_URL}/vs/salesforce
- vs. Fandelo: ${BASE_URL}/vs/fandelo
- vs. Agent Live 360: ${BASE_URL}/vs/agent-live-360
- vs. The Hockey CRM: ${BASE_URL}/vs/the-hockey-crm
`;

const CONTACT = `
## Contact

- Email: hello@repline.io
- Website: ${BASE_URL}
`;

function guides(): string {
  const posts = getAllPosts();
  const lines = posts.map((post) => {
    const updated = post.updated ? `, updated ${post.updated}` : "";
    return [
      `- ${post.title}`,
      `  ${BASE_URL}/blog/${post.slug}`,
      `  ${post.description}`,
      `  Published ${post.date}${updated}.`,
    ].join("\n");
  });

  return `
## Guides

${posts.length} in-depth guides for hockey agents and advisors, newest first.

${lines.join("\n\n")}
`;
}

export async function GET() {
  return new Response(PREAMBLE + guides() + CONTACT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
