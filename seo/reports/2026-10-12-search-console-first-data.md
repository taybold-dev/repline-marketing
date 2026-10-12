# Search Console: the first real data

**Date:** 2026-10-12
**Source:** owner-supplied GSC export, `repline.io`, Search type "Web (text-based)"
**Window:** 2026-07-11 to 2026-10-10 (**Last 3 months**, not the 16 requested)
**Totals:** 1,203 impressions, 29 clicks, 2.4% CTR

This is the first evidence-grade data in five audits. Everything before it —
including four audit reports and five new pages — rested on autocomplete
presence, non-Google SERP observations, and reasoning. Read this file before
acting on any of them.

## The headline: the four "#1" terms produced zero impressions

None of the terms the whole strategy was built to defend appear in the query
report at all:

| Term | Status in this export |
|---|---|
| `hockey agent crm` | absent |
| `crm for hockey agents` | absent |
| `hockey advisor software` | absent |
| `hockey agent software` | absent |

**This is not evidence the rank tracking was wrong.** Ranking #1 and receiving
zero impressions are fully compatible: you can hold position 1 on a phrase
nobody types. Both things can be true, and this data is consistent with both.

**It is strong evidence the terms carry no traffic.** GSC drops queries below a
privacy threshold, which was the obvious alternative explanation — but this
export lists roughly fifteen queries at *exactly one impression*
(`please`, `its .io`, `chl rules`, `repil`...). The threshold on this property
is therefore at or near a single impression. A term absent from a report that
publishes 1-impression rows almost certainly received none.

The research document estimated these at "very low" volume, ~1-10/month. Over
92 days the measured figure is closer to **zero**. That is the single most
important correction in this file: the category terms are not low-volume, they
are no-volume.

## What demand actually exists

### Brand is 35% of all impressions, and it is leaking

| Query | Impressions | Clicks | Position |
|---|---|---|---|
| `repline` | **421** | 11 | **5.52** |
| `rep line` | 19 | 0 | 2.47 |
| `repline meaning` | 5 | 0 | 35 |
| `reepline` | 4 | 0 | 9.5 |
| `repline store` | 1 | 0 | 39 |
| `replines` | 1 | 0 | 80 |
| `repil` | 1 | 0 | 83 |

Brand and its typos account for 452 of 1,203 impressions (38%) and 11 of 29
clicks. **Position 5.52 on your own name** at 2.6% CTR.

The research flagged this as build item 8 on the strength of a brand collision
with Replo (Shopify page builder) and HockeyStack. It is now measured, and it
is the largest single lever on the site. Four hundred people a quarter search
your name and most of them are seeing four other things first.

### The second-biggest page is the one with unverified figures

| Page | Impressions | Clicks | Position |
|---|---|---|---|
| `/` | 613 | 19 | 11.07 |
| `/blog/nhlpa-agent-certification-guide` | **192** | 3 | 9.11 |
| `/about` | **130** | 3 | 8.18 |
| `/features` | 76 | **0** | 8.05 |
| `/blog/chl-ncaa-eligibility-rules-2025` | 65 | 0 | 10 |
| `app.repline.io/auth/sign-up` | 56 | 0 | 24.25 |
| `/vs/salesforce` | 35 | 0 | 16.23 |
| `/blog/how-hockey-agents-advisors-find-sign-new-clients` | 42 | 1 | 6.86 |
| `/blog/ahl-echl-contract-negotiation-workflow` | 34 | 1 | 8.94 |
| `/blog/how-hockey-agents-and-advisors-network-with-scouts-coaches` | 26 | 0 | 7.31 |
| `/contact-sales` | 24 | 1 | 5.71 |
| `/pricing` | 19 | 1 | 13.11 |
| `/vs/hubspot` | 19 | 0 | 6.84 |
| `/vs/monday` | 9 | 0 | 6.11 |
| `/vs/spreadsheets` | 8 | 0 | 7.38 |
| `/blog/how-hockey-agents-manage-their-roster` | 6 | 0 | 19.67 |
| `/blog/why-hockey-agents-need-a-crm` | 4 | 0 | 6.25 |
| `/blog/draft-day-prep-checklist-hockey-advisors` | 3 | 0 | 6 |

Three things stand out.

**`nhlpa-agent-certification-guide` is the second-largest page on the site** at
192 impressions. Its NHLPA fee, exam and commission figures are still
unconfirmed against a primary source, it carries Taylor Bold's byline, and as
of 2026-10-11 its hedged answers are also in `FAQPage` structured data. The
priority of confirming those figures changes from "worth doing" to "this week".

**`/about` is the third-largest page** at 130 impressions and position 8.18 —
and until PR #20 it had zero contextual inbound links, reachable only through
navigation chrome. The audit called that an E-E-A-T oversight; it was costing
more than that.

**`/features` has 76 impressions at position 8.05 and zero clicks.** A page
ranking on page one with a 0% click-through is a title and description problem,
not a ranking problem. It is the clearest measured CTR defect on the site.

### The one unmapped opportunity

| Query | Impressions | Position |
|---|---|---|
| `player crm` | **48** | **82.27** |

`player crm` is the highest-impression non-brand query in the export, we sit on
page nine for it, and **it does not appear anywhere in the research document's
66 clusters.** Whatever the intent behind it, it is the only non-brand
commercial phrase with measured demand that nobody targeted.

### Informational queries are surfacing, mostly badly

| Query | Impressions | Position |
|---|---|---|
| `hockey agents` | 7 | 6.71 |
| `ncaa hockey eligibility rules` | 1 | **4** |
| `chl rules` | 1 | 8 |
| `how to become a hockey agent` | 2 | 43.5 |
| `how to become an nhl agent` | 2 | 54 |
| `can chl players play ncaa hockey` | 2 | 62 |
| `echl contract` | 1 | 54 |
| `roster of clients` | 2 | 51 |

The advisor-pathway and career content is indexed and appearing. Positions are
poor apart from NCAA eligibility at 4. Note that the research graded
`how to become a hockey agent` as **P3** and `how much do hockey agents make`
as **Skip** — "curiosity, job seekers". Those queries are now among the few
producing any impressions at all, which does not make them buyers, but does
mean the only measured demand adjacent to this business is not buyer demand.

## The five new pages have no impressions yet

| Page | Days live in window | Impressions |
|---|---|---|
| `/sports-agent-crm` | 15 | 0 |
| `/vs/agent-live-360` | 15 | 0 |
| `/vs/the-hockey-crm` | 4 | 0 |
| `/hockey-agency-management-software` | 4 | 0 |
| `/hockey-crm` | 3 | 0 |
| `/blog/best-crm-for-hockey-agents` | 0 | n/a |

Three of these are too new to judge. `/sports-agent-crm` and
`/vs/agent-live-360` have had a fortnight and registered nothing, which is
early but not encouraging.

**`/vs/fandelo` is a dead page.** Live since 2026-09-07, zero impressions in
the window — the only original comparison page with none.

## Trend: flat

| Month | Clicks | Impressions |
|---|---|---|
| 2026-07 (from 11th) | 5 | 209 |
| 2026-08 | 9 | 422 |
| 2026-09 | 12 | 429 |
| 2026-10 (to 10th) | 3 | 143 |

August to October runs at roughly 420-430 impressions a month on a steady pace.
Three weeks of page-building has not moved the total. Too early to conclude
much, but there is no early signal either.

## Geography

| Country | Impressions | Clicks | CTR | Position |
|---|---|---|---|---|
| United States | 516 | 8 | 1.55% | 13.86 |
| Canada | **190** | **14** | **7.37%** | 6.86 |
| India | 92 | 0 | 0% | 7.39 |
| United Kingdom | 54 | 0 | 0% | 8.67 |
| France | **52** | **4** | **7.69%** | 6.58 |

Canada is 16% of impressions and 48% of clicks. France is 4% of impressions and
**14% of clicks** on 7.69% CTR. India's 92 impressions produced nothing and
look like noise.

The research rated a French landing page **P3**, "near-zero competition, tiny
pools". France is currently out-converting the United States by five to one on
CTR. Worth understanding before building anything — France is not Quebec, and
52 impressions is a small base — but it is no longer a hypothesis.

## What this changes

Ordered by what the data supports, not by what the plan said.

1. **Brand defense moves to the top.** 38% of all demand, position 5.52 on the
   company's own name, 2.6% CTR. Build item 8 — G2 and Capterra listings, title
   work — was ranked eighth on an assumption. It is now first on measurement.
2. **Confirm the NHLPA figures this week.** Second-biggest page on the site,
   unverified numbers, a named byline, and now structured data.
3. **Fix `/features` CTR.** Position 8.05, 76 impressions, zero clicks.
4. **Investigate `player crm`.** 48 impressions, position 82, absent from the
   keyword plan entirely.
5. **Hold the new pages as open experiments**, per the research's own standard:
   "keep the ones that start getting impressions." Re-check at 90 days
   (mid-January). Do not build more category pages in the meantime.
6. **Get the 16-month export.** This is 3 months. The longer window would show
   whether 420/month is growth or decline, and whether the four core terms ever
   produced an impression.

## What this does not change

The terms are tiny, which the research said from the start and this confirms
emphatically. Nothing here argues the on-page work was wrong in execution —
titles, canonicals, schema, image weights and the link graph are all sound. It
argues the *target selection* was aimed at phrases with no demand, and that the
real demand is brand, career-curiosity, and NCAA eligibility.

## Still unmeasured

Core Web Vitals. This export is Performance only; CrUX data sits under
Experience in the GSC UI, and the PageSpeed API is permanently quota-zero from
the audit environment. Six audits, still no field data — and PR #19 cut mobile
image weight 3.3-6x with no way to confirm the effect.
