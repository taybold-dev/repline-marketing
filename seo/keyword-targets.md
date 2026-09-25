# Keyword Targets — repline.io

**Researched:** 2026-09-25
**Method:** `serp-analyzer` skill, live web search + competitor page analysis

A working list of keyword targets, ordered by judged priority rather than
by volume. Unlike the dated audits in [`reports/`](reports/), this file is
meant to be **updated in place** as coverage changes — tick items off, move
them between tiers, add new ones as the SERP shifts.

## Data limitations — read before acting on the ordering

No SERP API credentials were available for this run (`SEMRUSH_API_KEY`,
`SERPAPI_API_KEY`, `DATAFORSEO_LOGIN`/`DATAFORSEO_PASSWORD` all unset). That
means:

- **No search volume figures.** Nothing below is ranked by traffic potential.
- **No keyword difficulty scores.**
- **No structured SERP feature map** (featured snippets, PAA, etc.).

What *is* grounded in evidence: who currently ranks, what kind of content
ranks, and which terms Repline already covers. Priority ordering is a
judgment call from those inputs plus buyer intent, and is labelled as such.

To upgrade this list with real numbers, set `SEMRUSH_API_KEY` or
`SERPAPI_API_KEY` in the environment and re-run the `serp-analyzer` skill.

## Findings that shaped this list

### 1. No hockey-native competitor holds the software keywords

The SERP for sports-agency software is entirely football/soccer —
[ScoutDecision](https://www.scoutdecision.com/software/agents),
[ScoutHub](https://www.scouthub.se/guides/best-football-agent-software),
[ATHLIVO](https://athlivo.co/) — plus sport-agnostic
[Agent Live 360](https://agentlive360.com/) and
[Opendorse](https://biz.opendorse.com/solutions/sports-agents/). Every
"hockey + software" variant is effectively unclaimed.

### 2. "Family advisor" is the industry's own term and is barely used on site

The advisor-vs-agent SERP is held by practitioners:
[Tim Turk Hockey](https://www.timturkhockey.com/hockey-agents-vs-family-advisors/),
[TrailBlazer](https://trailblazerhockeyadvisors.com/hockey-angents-vs-hockey-advisors/),
[Apogee](https://apogeehockey.com/do-you-really-need-an-advisor/).
Repline explains the term accurately, but only inside
`content/blog/how-many-clients-does-a-hockey-agent-have.md`, and it is not a
declared keyword target on any page.

### 3. The CHL-NCAA post is aging out of its own story

`content/blog/chl-ncaa-eligibility-rules-2025.md` is titled "(2025-26)" and
mentions **NIL zero times**. The story has moved considerably:

- [297 CHL players committed to D-I — 38% of all commitments as of April 2026](https://frontofficesports.com/ncaa-hockey-rule-change-chl-ushl/)
- Gavin McKenna left the WHL for Penn State on a ~$700k NIL deal
- A [June 2026 NCAA proposal changes the eligibility clock](https://www.uscho.com/2026/06/24/ncaa-proposal-changes-eligibility-clock-for-hockey-players)

### 4. The money questions are held by thin generic content

[Chron](https://work.chron.com/average-sports-agents-commission-21083.html),
Sapling and Quora rank for agent commission and salary queries. Beatable on
quality, but see the caveat on Tier 3 below.

## Tier 1 — Buyer intent, weak competition

These reach people who can actually buy the product.

| # | Keyword | Current coverage | Rationale |
|---|---------|------------------|-----------|
| 1 | hockey agent CRM | Homepage + `why-hockey-agents-need-a-crm` | Already ranks **#2**, and Google's AI summary quotes the homepage brand-definition paragraph near-verbatim. Defend this. |
| 2 | hockey agent software | Post keyword only | Second-strongest commercial term with no dedicated page. |
| 3 | hockey advisor software | **None** | Mirror of #2 for the advisor half of the positioning. |
| 4 | hockey agency management software | **None** | Exact match to the Agency tier. No hockey competition. |
| 5 | CRM for sports agents | Post keyword only | Broader net; Repline would be the only hockey-native answer. |
| 6 | player representation software | Post keyword only | Repline's own tagline language, uncontested. |
| 7 | sports agency management software | **None** | Football tools own it; ranking as "the hockey one" is a wedge. |
| 8 | best software for hockey agents | **None** | Listicle intent with no incumbent listicle. |
| 9 | hockey agent spreadsheet template | `/vs/spreadsheets` exists | The query that feeds that page — searchers actively in the pain the product solves. |
| 10 | Agent Live 360 alternative | **None** | The only sport-agnostic incumbent. Fits the existing `/vs/` page pattern. |

## Tier 2 — Authority and freshness

Where Repline's subject-matter depth is a genuine advantage.

| # | Keyword | Current coverage | Rationale |
|---|---------|------------------|-----------|
| 11 | CHL NCAA eligibility 2026-27 | Post is 2025-26 | Refresh rather than rewrite. Biggest single opportunity here. |
| 12 | NCAA hockey NIL rules for advisors | **None — zero NIL mentions sitewide** | NIL is now central to this story and the site is silent on it. |
| 13 | NCAA hockey transfer portal rules | Passing mention | Named alongside CHL eligibility in every serious 2026 piece. |
| 14 | hockey family advisor / how to become a hockey family advisor | One post, untargeted | The industry's own term. Warrants a dedicated page. |
| 15 | hockey advisor fee structure | **None** | Advisors charge flat fees with no public benchmark; a real practitioner question. |
| 16 | how to start a hockey agency | **None** | Whoever starts an agency buys tools that month — the most buyer-adjacent informational term on this list. |

## Tier 3 — Top of funnel, thin competition, slow conversion

| # | Keyword | Current coverage | Rationale |
|---|---------|------------------|-----------|
| 17 | hockey agent commission percentage | **None** | Held by Chron/Sapling/Quora. Easy to beat on quality. |
| 18 | how much do hockey agents make | **None** | Same cluster, same weak incumbents. |
| 19 | NHLPA agent certification requirements | `nhlpa-agent-certification-guide` | [SMWW](https://www.sportsmanagementworldwide.com/courses/hockey-agent) and [NHLPA.com](https://www.nhlpa.com/certified-agents/) dominate. Hard SERP. |
| 20 | how to become a hockey agent | Post targets it | Likely the highest volume on this list and the lowest buyer value. |

### Caveat on Tier 3

A volume-driven tool would push hardest toward these four. They are searched
largely by **aspiring** agents and by players' families — people who will not
buy a CRM. Tier 1 terms probably carry a fraction of the volume and most of
the actual buyers. Without SEMrush or DataForSEO that split cannot be proven
with numbers, only reasoned about from who is plausibly behind each query.
Treat Tier 3 as brand-building and topical authority, not pipeline.

## Recommended starting point

**#11 and #12.** The CHL/NCAA refresh is fast, the site already ranks for the
parent topic, and the NIL gap is the difference between a current guide and a
stale one in a story that moved a great deal this year.

## Sources

Live SERP snapshot, 2026-09-25:

- [Front Office Sports — NCAA-CHL rule change](https://frontofficesports.com/ncaa-hockey-rule-change-chl-ushl/)
- [NHL.com — CHL players eligible for NCAA from 2025-26](https://www.nhl.com/news/chl-players-to-be-eligible-to-play-ncaa-hockey-beginning-in-2025-26)
- [USCHO — NCAA proposal on the eligibility clock](https://www.uscho.com/2026/06/24/ncaa-proposal-changes-eligibility-clock-for-hockey-players)
- [Cronkite News — CHL eligibility, transfer portal and NIL](https://cronkitenews.azpbs.org/2026/03/10/ncaa-hockey-evolving-chl-eligibility-transfer-portal-nil/)
- [Tim Turk Hockey — agents vs family advisors](https://www.timturkhockey.com/hockey-agents-vs-family-advisors/)
- [TrailBlazer Hockey Advisors](https://trailblazerhockeyadvisors.com/hockey-angents-vs-hockey-advisors/)
- [Apogee Hockey — do you really need an advisor](https://apogeehockey.com/do-you-really-need-an-advisor/)
- [ScoutDecision](https://www.scoutdecision.com/software/agents)
- [ScoutHub — best football agent software](https://www.scouthub.se/guides/best-football-agent-software)
- [ATHLIVO](https://athlivo.co/)
- [Agent Live 360](https://agentlive360.com/)
- [Opendorse — sports agents](https://biz.opendorse.com/solutions/sports-agents/)
- [SMWW — hockey agent course](https://www.sportsmanagementworldwide.com/courses/hockey-agent)
- [NHLPA — certified agents](https://www.nhlpa.com/certified-agents/)
- [Chron — average sports agent commission](https://work.chron.com/average-sports-agents-commission-21083.html)

SERPs change. This is a snapshot, not a standing truth — re-verify before
committing to a page.
