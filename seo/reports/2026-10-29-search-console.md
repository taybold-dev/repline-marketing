# Search Console: 2026-10-29

**Date:** 2026-10-29
**Source:** owner-supplied GSC export, `repline.io`, Search type "Web (text-based)"
**Window:** 2026-07-27 to 2026-10-26 (**Last 3 months**, 92 days)
**Totals:** 1,573 impressions, 32 clicks, 2.03% CTR, average position 13.1

The second Search Console export, following
[2026-10-12](2026-10-12-search-console-first-data.md). The two windows overlap
from 27 July to 10 October, so totals are not comparable. The new information
is the **16 days from 11 to 26 October**, and where a figure rests on that
slice it says so.

## What shipped during this window, and what didn't

| Change | Live | In this data? |
|---|---|---|
| Brand-first homepage title (PR #23) | 2026-10-22 | ~5 days only — **too early to judge** |
| GFM tables + Team offer in schema (PR #24) | 2026-10-26 | No |
| "Repline is…" sentence on `/` and `/about` (PR #25) | 2026-10-27 | No |
| `noindex` on `app.repline.io` (app repo `d3cd7aa`) | 2026-10-26 | No |
| NHLPA guide sourcing, templates, profile generator (PR #26) | not merged | No |

Nothing this export shows can be credited to, or blamed on, the work of the
last week. It is a **baseline** for the next export.

## Trend

| Period | Days | Impressions/day | Clicks | CTR | Avg position |
|---|---|---|---|---|---|
| 27 Jul – 10 Oct | 76 | 14.3 | 24 | 2.21% | 10.3 |
| **11 Oct – 26 Oct** | 16 | **30.4** | 8 | 1.64% | **19.2** |

Impressions per day doubled. Average position looks worse for the same
reason: almost all of the new impressions are on generic sports-CRM queries
where the site ranks on pages 6–9 (next section). This is not a decline.

| Month | Clicks | Impressions | CTR | Avg position |
|---|---|---|---|---|
| Aug | 9 | 422 | 2.13% | 13.9 |
| Sep | 12 | 429 | 2.80% | 6.7 |
| Oct (to 26th) | 11 | 630 | 1.75% | 16.0 |

## Findings

### 1. The new impressions are mostly the wrong searchers

| Query | Impressions | Position |
|---|---|---|
| player crm | 28 | 81.2 |
| sports crm software | 25 | 66.8 |
| sports crm | 23 | 66.1 |
| crm for sports teams | 22 | 70.4 |
| crm sports | 12 | 55.5 |
| crm in sports | 9 | 74.9 |

These land on `/sports-agent-crm` (133 impressions, position 50.1, 0
clicks). "Sports CRM" and "CRM for sports teams" mean fan, ticketing and
sponsorship CRMs for clubs, the same team-versus-representation confusion
`/hockey-crm` exists to explain. **No action.** Do not chase these terms;
the page's job is "sports agent CRM", where it is position 4
(`sports agent software`, 3 impressions).

### 2. Brand: unchanged, and too early to test the new title

| Query | Impressions | Clicks | CTR | Position |
|---|---|---|---|---|
| repline | 526 | 14 | 2.66% | 5.08 |
| rep line | 27 | 1 | 3.70% | 2.33 |
| repline.io | 7 | 0 | 0% | 38.6 |
| repline meaning | 6 | 0 | 0% | 29.3 |

Previous export: 421 impressions, 2.61% CTR, position 5.52. Statistically
the same. The brand-first title has ~5 days in this window and the export has
no query-by-date split, so its effect cannot be isolated. **Re-test in the
next export** with a date filter starting 2026-10-23.

### 3. The app subdomain: fixed after this window closed

| URL | Impressions | Position | Previous export |
|---|---|---|---|
| `app.repline.io/auth/sign-up` | 44 | 30.3 | 56 |
| `app.repline.io/dashboard` | 32 | 19.6 | 26 |

The fix landed in the app repo on 2026-10-26 (`d3cd7aa`): `X-Robots-Tag:
noindex, nofollow` on every response, a `noindex` robots meta in the root
layout, and `robots.txt` changed from `Disallow` to `Allow` so Googlebot can
fetch the pages and see the `noindex`. Reviewed and correct. Not verified
live from the audit environment (the egress proxy blocks repline.io).

- **To speed removal:** Removals → New request for both URLs, then URL
  Inspection → Request indexing on each.
- **Check next export:** both URLs should be gone or falling.

### 4. New pages are being indexed

| Page | Impressions | Position | Previous export |
|---|---|---|---|
| `/hockey-crm` | 29 | 8.83 | 0 |
| `/hockey-agency-management-software` | 17 | 29.3 | 0 |
| `/blog/best-crm-for-hockey-agents` | 15 | 5.80 | n/a |
| `/vs/hubspot` | 28 | 7.89 | 19 |
| `/vs/salesforce` | 39 | 17.5 | 35 |

Three of the nine zero-impression pages from the
[2026-10-22 audit](2026-10-22-full-site.md#4-nine-sitemap-pages-have-never-had-an-impression)
now have impressions. Still absent: `/vs/fandelo`, `/vs/agent-live-360`,
`/vs/the-hockey-crm`, `/blog/how-many-clients-does-a-hockey-agent-have`,
`/blog/why-hockey-players-leave-their-agent`. Hold until the mid-January
review as planned.

### 5. NHLPA guide: real demand, but its head term is on page 5

`/blog/nhlpa-agent-certification-guide`: 173 impressions, 3 clicks, position
9.29 (previous: 192, 3, 9.11). Steady.

The queries GSC names for it rank far lower than the page average:

| Query | Impressions | Position |
|---|---|---|
| how to become a hockey agent | 2 | 43.5 |
| how to become an nhl agent | 1 | 42 |
| nhl agent percentage | 1 | 41 |

So most of its impressions come from long-tail queries below GSC's reporting
threshold, at page-one positions, while the broad head term sits around
position 43. On-page work (PR #26) helps the long tail; moving the head term
needs authority from other sites. **Measure the PR #26 rewrite in the next
export.**

### 6. `/features` zero-click pattern is firming up

| Page | Impressions | Position | Clicks | Expected at 2–3% CTR | P(0 clicks by chance) |
|---|---|---|---|---|---|
| `/features` | 104 | 9.35 | 0 | 2.1–3.1 | **4–12%** |
| `/blog/chl-ncaa-eligibility-rules-2025` | 84 | 9.01 | 0 | 1.7–2.5 | 8–19% |

The [2026-10-22 report](2026-10-22-full-site.md#3-correction-features-is-not-the-ctr-defect-this-report-called-it)
held `/features` at "suggestive only" on 76 impressions. At 104 it is
borderline. The two windows overlap, so this is not independent evidence,
but it is enough to justify a **title and description test** on `/features`,
which is cheap and reversible. Hold the CHL post for more data.

### 7. Canada converts; the US doesn't (yet)

| Country | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| Canada | 13 | 251 | 5.18% | 14.3 |
| United States | 10 | 702 | 1.42% | 15.2 |
| France | 3 | 62 | 4.84% | 6.1 |

Canada is 41% of clicks on 16% of impressions. Much of the US volume is the
generic sports-CRM noise in Finding 1, which drags its CTR down. No action;
worth remembering when choosing examples, currencies and league references.

### 8. Templates: no data, as expected

No scouting-report or player-profile query appears. Those pages are in
PR #26, unmerged. GSC only reports queries the site already appears for, so
it **cannot** measure their demand until they are live. Ubersuggest puts the
head terms at ~10 US searches a month each
([lead-magnet strategy](../lead-magnet-strategy.md)).

## Devices

| Device | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| Desktop | 22 | 891 | 2.47% | 15.6 |
| Mobile | 10 | 672 | 1.49% | 9.55 |
| Tablet | 0 | 10 | 0% | 30.5 |

## Actions

1. **Merge PR #26** — the NHLPA rewrite and both templates start accruing data.
2. **Removals + Request indexing** for the two `app.repline.io` URLs (Finding 3).
3. **Test a new `/features` title and description** (Finding 6).
4. **Next export, after ~3 weeks of #24–#26 being live:** include a
   query-by-date view from 2026-10-23 for `repline`, and a page filter for
   `/templates/` and the NHLPA guide.

## Limits of this data

- The export's query table lists 40 queries covering roughly half of all
  impressions; the rest fall below GSC's per-query reporting threshold.
- No query × page or query × date breakdown, so per-page query attribution
  above is inferred from which page ranks for which term.
- Overlapping windows with the 2026-10-12 export; only the 11–26 October
  slice is new.
