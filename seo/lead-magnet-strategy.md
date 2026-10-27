# Lead-Magnet Strategy — Templates

**Drafted:** 2026-10-27
**Inputs:** owner-supplied Ubersuggest data (US monthly volume, SEO difficulty),
Search Console export 2026-07-11 → 2026-10-10, [`keyword-targets.md`](keyword-targets.md),
[`reports/2026-10-26-geo.md`](reports/2026-10-26-geo.md)

Like `keyword-targets.md`, this is a working plan, **updated in place** as
pages ship and data comes in.

## The honest premise

| Term | US/mo | Difficulty |
|---|---|---|
| hockey scouting report template | 10 | 5 |
| hockey scouting sheet template | 10 | 5 |
| hockey player profile template | 10 | 20 |
| hockey roster template excel | 10 | 8 |
| hockey recruiting services | 10 | 13 |
| scouting report example | 30 | 26 |
| how to email college hockey coaches | 0 | 4 |
| hockey recruiting email template | 0 | 4 |
| hockey advisor agreement | 0 | 12 |

Ubersuggest rounds small terms crudely and marks most of these rows
"Outdated"; read the zeros as "too small to measure", not "never searched".
Even so, the whole cluster is **tens of searches a month, not hundreds**.

So search traffic is not the reason to build these. They earn their place in
three other ways, in this order:

1. **Outbound and LinkedIn.** A useful free template is something you can send
   a prospect, or post, without it being a pitch. This is the main payoff, and
   it works whether or not the page ranks.
2. **A product preview.** Both templates are the paper version of a Repline
   feature (PDF scouting reports, player profiles). Someone who fills one in
   by hand has felt the problem the product solves.
3. **Rank and cite with little competition.** Difficulty 5–20 means a good page
   can rank within weeks, and AI answers to "what goes in a hockey scouting
   report" need a source. Small volume, but nearly uncontested.

What would make this the wrong plan: if, after 90 days, templates produce
neither downloads from outbound/LinkedIn nor any trial sign-ups. Then stop at
two and put the effort back into directory pages and outbound.

## What to build

**Two templates first. Not more.**

| Template | Covers (one page each) | Repline feature it previews |
|---|---|---|
| Hockey scouting report | scouting report template, scouting sheet template, scouting report template pdf, how to write a hockey scouting report, scouting report example | PDF scouting reports with agency branding |
| Hockey player profile | player profile template, youth hockey player profile template, hockey player profile example, player profile for college coaches | Player profiles with hockey-specific fields |

They are the only workflow terms with measured demand, both nearly uncontested,
and both map directly to a feature. **One page per template covers every
phrasing**; a separate page per variation would split the same small demand
across pages that compete with each other.

### Later, only if the first two earn it

| Candidate | Why wait |
|---|---|
| Hockey client / roster tracker (Sheets) | "roster template excel" pulls coaches and parents (see `keyword-targets.md`, *hockey agent spreadsheet template*). Only worth it framed as an *agent's client tracker* |
| College coach email templates | 0 measured volume, but strong for outbound and LinkedIn. Can be built as a section of the player-profile page first |
| Advisor agreement **checklist** | Never a contract template — legal documents carry liability. A checklist of what an agreement should cover, pointing to a lawyer |

Skip `ncaa hockey recruiting rankings` (90/mo): those searchers are fans
tracking commits, not advisors.

## Site structure

```
/templates                             hub (CollectionPage)
/templates/hockey-scouting-report      template page
/templates/hockey-player-profile       template page
```

- **A new `/templates` section, not `/blog`.** Templates are evergreen assets,
  not dated articles, and the hub gives later templates an obvious home.
  "template" in the URL matches the query.
- **Fixed URLs from day one.** Slugs never carry a year or "free"; the page can
  be updated without the URL changing. If a slug ever must change, 301 it in
  `next.config.ts`.
- **Each new route is added to** `src/app/sitemap.ts`, the `llms.txt` route
  (a `## Templates` section), and the footer's product links.
- **Depth stays at two clicks** from the homepage: home → footer → hub → template.

### Internal links

| From | To |
|---|---|
| `/blog/draft-day-prep-checklist-hockey-advisors` | scouting report |
| `/blog/how-hockey-agents-and-advisors-network-with-scouts-coaches` | scouting report, player profile |
| `/blog/how-hockey-agents-manage-their-roster` | player profile |
| `/blog/chl-ncaa-eligibility-rules-2025` | player profile (for college coaches) |
| `/features` (scouting reports and player profiles sections) | the matching template |
| each template | the other template, `/features`, one relevant post, the trial |

Anchors describe the destination ("free hockey scouting report template"),
not "click here".

## Page anatomy

Using the scouting report as the example:

- **Title (≤60):** `Free Hockey Scouting Report Template (PDF & Sheets)`
- **H1:** `Hockey Scouting Report Template`
- **Lede, answer-first:** one sentence saying what a hockey scouting report is
  and what this one contains. This is the sentence AI answers will quote.
- **The template itself, in HTML on the page**: every field, laid out as a
  table. This is the indexable content, and it is what makes the page worth
  ranking. Never put the substance only inside a PDF or behind a form.
- **Download** (see gating, below).
- **H2: How to write a hockey scouting report**: field by field, what good
  looks like.
- **H2: Hockey scouting report example**: a filled-in example for a clearly
  fictional player, labelled as such.
- **H2: Youth vs. junior vs. college reports**: what changes by level.
- **H2: Automate it**: the same report generated from a Repline player
  profile, with a screenshot, linking to `/features` and the trial.
- **FAQ**: 3–5 real questions, wired to `FAQPageSchema`.

Schema: `BreadcrumbList` and `FAQPage` (both components exist), plus
`WebPage` via `WebPageSchema`. No `HowTo`: Google dropped its rich result.

Same rules as the rest of the site: one H1, description 120–160 characters,
self-referencing canonical, OG image via `ogImage()`.

## Gating

**Recommendation: content open, download behind a short email form.**

| Option | For | Against |
|---|---|---|
| Fully open (direct download) | Most shares and links; best for ranking | Captures no leads |
| **Page open, file gated** | Page still ranks on its HTML content; each download is a named lead | Some visitors leave at the form |
| Everything gated | Most leads per visitor | Nothing to index; won't rank; won't be cited |

The form asks for email, and optionally name and agency. Nothing else.

For outbound and LinkedIn, link the page rather than attaching the file, so
every download lands as a lead and a measurable visit.

### What this needs that doesn't exist yet

- **A form backend.** The marketing site has no forms; `/contact-sales` is a
  Calendly embed. Smallest option: a Next.js route handler that sends the file
  link via **Resend**, already a listed processor in the privacy policy, and
  notifies `hello@repline.io`.
- **A privacy policy update.** The policy covers app users and contacts, not
  marketing sign-ups. Add a line covering email addresses collected for
  template downloads before the form goes live.
- **The files themselves**: a branded PDF and a Google Sheets copy-link per
  template, with fields that match Repline's own, so importing later is trivial.

## Measurement

The privacy policy rules out third-party analytics, so measure without it:

| Signal | Source |
|---|---|
| Impressions and position on `/templates/*` | Search Console |
| Downloads (= leads) | Form submissions via the route handler |
| Where downloads came from | `?ref=` on every outbound and LinkedIn link, stored with the submission |
| Trials from templates | `?ref=template-<name>` on the page's trial links |

**Review at 90 days** (the same mid-January checkpoint as the 2026-10-22
audit's zero-impression pages). Keep going if templates produce trial
sign-ups or warm outbound replies; stop at two if they produce neither.

## Build order

1. Scouting report page + PDF + form backend + privacy line (one PR).
2. Player profile page, reusing the form (one PR).
3. Link both from the posts and `/features` listed above.
4. Start using them in outbound and on LinkedIn the day they ship. That is the
   main channel, not search.
5. 90-day review, then decide on the "later" list.
