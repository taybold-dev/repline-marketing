# SEO Baseline — repline.io

Captured 2026-09-09, before any SEO tooling changes were made. This is a
snapshot of the site as it existed at that point, for future audit reports
to diff against. See [`reports/README.md`](reports/README.md) for how
ongoing audits are organized.

## Identity

- **Domain:** repline.io (apex `repline.io` 308-redirects to `www.repline.io`,
  which serves as the canonical host)
- **Title (homepage):** `Repline | Hockey Agent & Advisor CRM — Manage
  Players, Contracts & Pipelines`
- **Meta description (homepage):** `The CRM built for hockey agents and
  advisors. Track players, contracts, scouting reports, and compliance
  deadlines in one place. Replace your spreadsheets. Free 30-day trial.`
- **Hosting:** Vercel (from `Server` response header)

## robots.txt

```
User-Agent: *
Allow: /

User-Agent: GPTBot
Allow: /

User-Agent: ClaudeBot
Allow: /

User-Agent: PerplexityBot
Allow: /

Sitemap: https://www.repline.io/sitemap.xml
```

AI crawlers (GPTBot, ClaudeBot, PerplexityBot) are explicitly allowed —
relevant for GEO/AI-citation tracking.

## Sitemap

`https://www.repline.io/sitemap.xml` — 19 URLs total, all with `lastmod`,
`changefreq`, and `priority`.

- Marketing/product pages (13): `/`, `/features`, `/pricing`, `/about`,
  `/contact-sales`, `/vs/spreadsheets`, `/vs/monday`, `/vs/hubspot`,
  `/vs/salesforce`, `/vs/fandelo`, `/privacy`, `/terms`, `/blog` (index)
- Blog posts (6): `/blog/chl-ncaa-eligibility-rules-2025`,
  `/blog/nhlpa-agent-certification-guide`,
  `/blog/how-hockey-agents-manage-their-roster`,
  `/blog/draft-day-prep-checklist-hockey-advisors`,
  `/blog/ahl-echl-contract-negotiation-workflow`,
  `/blog/why-hockey-agents-need-a-crm`

**Blog post count: 6**

## Canonical setup

Every page checked (`/`, a blog post, a `/vs/*` page, `/pricing`) sets a
self-referencing `<link rel="canonical">` pointing at its own `www.repline.io`
URL. No cross-page canonical collisions observed in the pages sampled.

## Structured data (schema.org JSON-LD)

Present sitewide via multiple `<script type="application/ld+json">` blocks,
composed per page type:

- **Every page:** `Organization` (with `ContactPoint`) + `WebSite`
- **`/vs/*` pages:** adds `BreadcrumbList`
- **Blog posts:** adds `BlogPosting` (with `Organization` publisher +
  `ImageObject`) + `BreadcrumbList`
- **`/pricing`:** adds `SoftwareApplication` with `Offer` entries, `FAQPage`
  with `Question`/`Answer` pairs, + `BreadcrumbList`

Schema present: **yes**, and reasonably comprehensive (org, site, breadcrumbs,
article, product/offer, FAQ).

## Social / OG tags (homepage)

- `og:title`, `og:description`, `og:url`, `og:type=website`
- `og:image` = `https://www.repline.io/og` (1200x630, with alt text)
- `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`,
  `twitter:image`

## Security / response headers (www)

- `Strict-Transport-Security: max-age=63072000`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## What's not covered here

This baseline is a structural/technical snapshot only — it does not include
rankings, backlink data, Core Web Vitals field data, or keyword performance.
Those require authenticated access (Search Console, GA4, PSI API) and
should be layered in via the `search-console` skill once credentials are
available.
