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

### 1. No hockey-native competitor holds the *agent-tool* keywords

The SERP for sports-agency software is entirely football/soccer —
[ScoutDecision](https://www.scoutdecision.com/software/agents),
[ScoutHub](https://www.scouthub.se/guides/best-football-agent-software),
[ATHLIVO](https://athlivo.co/) — plus sport-agnostic
[Agent Live 360](https://agentlive360.com/) and
[Opendorse](https://biz.opendorse.com/solutions/sports-agents/). No hockey
specialist competes there.

**Important qualification added on the second pass:** this holds for the
*"sports agent / agency"* phrasings only. It does **not** mean every
"hockey + software" phrase is open — those are owned by youth and club team
management platforms, and one is hijacked by a mobile game. See
[Tier 1](#tier-1--buyer-intent-verified-against-live-serps) for the tested
breakdown.

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

## Tier 1 — Buyer intent, verified against live SERPs

**Updated 2026-09-25 (second pass).** The first pass ranked these on
competitor presence and coverage gaps without checking what each SERP
actually returns. A follow-up pass searched them directly, and **five of the
ten turned out to be wrong-intent** — the phrasing pulls a different meaning
of the words. The table below reflects the verified position; the original
rationales are preserved in the "superseded" column so the change is
traceable.

### The pattern that explains it

**"Hockey + software" belongs to youth/club/league team management.**
Searching *hockey advisor software* returns
[TeamSnap](https://www.teamsnap.com/teams/sports/ice-hockey),
[360Player](https://en-us.360player.com/sports-software/hockey),
[TeamLinkt](https://teamlinkt.com/sports/hockey),
[LeagueApps](https://leagueapps.com/sport/hockey/),
[Upper Hand](https://upperhand.com/hockey-scheduling-software/) and
[eSoft Planner](https://www.esoftplanner.com/hockey-team-management-software/)
— a crowded, well-funded category that owns that phrasing and has nothing to
do with representing clients.

**"Hockey agent software" is worse.** There is a mobile management sim
literally called [Hockey Agent](https://apps.apple.com/us/app/hockey-agent/id6451391619),
with [a Google Play version](https://play.google.com/store/apps/details?id=com.hockeyagent61&hl=en_US)
and [a GitHub repo](https://github.com/jacobb260/hockey-agent) alongside it.
Google reads the phrase as a game.

**The disambiguating tokens are "CRM" and "agency"** — they are what steer the
SERP away from team-management apps and games. *Sports agency management
software* was the only phrase tested that returned genuine agent business
tools, and *hockey agent CRM* returns Repline.

### Pursue

| Priority | Keyword | Coverage | Why it is the cheap win |
|----------|---------|----------|--------------------------|
| 1 | hockey agent CRM | Homepage + `why-hockey-agents-need-a-crm` | Already ranking, and "CRM" keeps the SERP clean. **No new page needed** — defend and extend. |
| 2 | Agent Live 360 alternative | **None** | Near-zero competition, correct intent, and `/vs/` is a pattern already built five times. Cheapest new page available. |
| 3 | CRM for sports agents | Post keyword only | "CRM" + "sports agent" lands on real agent tools. Every competitor is football-only. |
| 4 | sports agency management software | **None** | Verified correct intent — ScoutDecision, ScoutHub, ATHLIVO, Agent Live 360, Opendorse. Real competition, all wrong-sport. |

### Do not pursue

| Keyword | What the SERP actually returns | Superseded rationale |
|---------|-------------------------------|----------------------|
| hockey agent software | The "Hockey Agent" mobile game, plus club-management software | "Second-strongest commercial term with no dedicated page" |
| hockey advisor software | TeamSnap, 360Player, LeagueApps — club and league admin | "Mirror for the advisor half of the positioning" |
| player representation software | **USPTO patents and arXiv papers** on software agents. Repline's own tagline is a computer-science phrase | "Repline's own tagline language, uncontested" |
| best software for hockey agents | Inherits the game/club contamination above; a vendor writing its own "best" listicle is weak regardless | "Listicle intent with no incumbent listicle" |
| hockey agent spreadsheet template | [Etsy stats trackers](https://www.etsy.com/listing/1902439035/hockey-stats-spreadsheet-template-hockey) for coaches and hockey parents — people logging goals and assists, not managing client rosters | "The query that feeds `/vs/spreadsheets`" |
| hockey agency management software | *Not directly tested.* Expected to collide with the same club-admin category as *hockey advisor software* — treat as inference, not evidence | "Exact match to the Agency tier. No hockey competition" |

### Correction on the "#2" ranking claim

An earlier note recorded Repline as ranking **#2** for *hockey agent CRM*.
That came from the ordering returned by the search tool, which is US-only and
is not a verified Google organic position. Repline is clearly ranking and
visible for the term, and Google's AI summary is built largely from the
homepage brand-definition paragraph — but confirm the actual position in
Search Console before treating it as a number.

## Execution plan for the Tier 1 four

Four keywords, **two new pages plus one optimisation pass** — not four pages.
Priorities 1, 3 and 4 are a single buyer intent expressed three ways;
building a page for each would cannibalise the others and split the internal
link equity three ways.

### 1. `hockey agent CRM` — optimise, do not build

No new page. The homepage and `why-hockey-agents-need-a-crm` already rank.

- Confirm the real position in Search Console before doing anything, per the
  correction above.
- Leave the homepage brand-definition paragraph alone. It is what Google's AI
  summary quotes, and it is doing the GEO job it was written for.
- The Yarema testimonial and its `Review` schema are new relevance signals on
  this page; they were not present when the term was first ranking. Give them
  a few weeks before judging movement.
- Obtain a rating from Andrew Yarema so `reviewRating` and `aggregateRating`
  can be emitted. This is the one remaining structured-data gap on the page
  that competes for this term.

### 2. `/vs/agent-live-360` — **shipped 2026-09-25**

Built at `src/app/vs/agent-live-360/page.tsx`, following
`src/app/vs/fandelo/page.tsx`. All six touchpoints updated:
`vs-cross-links.tsx`, `footer.tsx`, the homepage tool-replacement grid, the
`/features` comparison list, `src/app/sitemap.ts` and `public/llms.txt`. The
homepage grid moved from five columns to three so six cards fill two even rows.

#### Verified competitor facts — use these, not press coverage

`agentlive360.com` is **unreachable from the build environment** (the egress
proxy denies it), and so is `sportsagentblog.com`, the main secondary source.
The first draft of the page therefore fell back on 2020 press coverage quoting
a "$75–$345/month" range. **That was wrong by a wide margin.** Working from
their own site copy instead:

| | Agent Live 360 |
|---|---|
| Annual billing | $38/mo (1 agent) → $150/mo (5 agents) |
| Monthly billing | $49/mo (1 agent) → $190/mo (5 agents) |
| Additional users | $25/mo each annually, $35/mo each monthly, beyond 5 |
| Sign-up | One-time $25 fee for the first license |

**Agent Live 360 is cheaper than Repline at every seat count**, and the page
says so outright rather than implying otherwise. Its genuine strengths, also
recorded on the page: invoicing, accounting, expense and commission tracking,
ROI per client, multi-currency, Agent Live Pay, and **both QuickBooks and
Xero**. Repline has no Xero integration and no multi-currency support today.

The lesson generalises to the next comparison page: when a competitor's own
site can't be reached from this environment, **ask for the page source rather
than settling for search-engine summaries**. Six-year-old coverage of a live
SaaS product's pricing is not a usable source.

#### Incidental find

Building this surfaced a rendering bug already live on four pages — the space
after `</strong>` was being dropped in the pricing paragraph of `/vs/fandelo`,
`/vs/hubspot`, `/vs/monday` and `/vs/salesforce`, producing
"$695/monthfor up to 15 users". Fixed with an explicit `{" "}` across all
five. Root cause not established; the markup is identical in shape to
instances that render correctly, so it appears to be a quirk of how this
Next.js version serialises adjacent text nodes. Watch for it on new pages.

### 3 + 4. One page for `CRM for sports agents` and `sports agency management software`

These two share an intent and a competitive set. One page serves both.

- **Route:** `src/app/sports-agent-crm/page.tsx` — deliberately *not* under
  `/vs/`, since it is a category page rather than a comparison.
- **Positioning:** the competitors here are football tools. The page should
  not argue that Repline is a better general sports-agent CRM; it should argue
  that a general sports-agent CRM cannot model hockey — CHL/NCAA eligibility,
  OHL import drafts, junior-to-college pathways, family-advisor fee structures
  — and that the hockey-native one exists.
- **Outline:** what a sports agent CRM has to do → why sport-agnostic tools
  break on hockey → the hockey-specific requirements (eligibility, league
  calendars, advisory agreements) → `ComparisonTable` against the category
  rather than one vendor → `TestimonialHighlight` → `CTASection`
- **Schema:** `WebPageSchema` plus `FAQPageSchema` if the page answers
  "what is a sports agent CRM" and "do hockey agents need different software".
- **Internal links:** from `/features`, from `why-hockey-agents-need-a-crm`,
  and from the new `/vs/agent-live-360` page. Link out to the five `/vs/`
  pages.
- **Cannibalisation guard:** this page targets *sports agent / agency*
  phrasing. The homepage keeps *hockey agent CRM*. Do not let the new page's
  title or H1 lead with "hockey agent CRM" or the two will compete.

### Sequencing

`/vs/agent-live-360` is done. The sports-agent category page is next, and can
now cross-link to it. The `hockey agent CRM` work is a Search Console check
plus a rating request from Andrew Yarema, and runs in parallel with both.

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

Two tracks, both worth running:

- **Commercial:** `/vs/agent-live-360`, then the sports-agent category page.
  See the execution plan above.
- **Authority:** Tier 2 items **#11 and #12**. The CHL/NCAA refresh is fast,
  the site already ranks for the parent topic, and the NIL gap is the
  difference between a current guide and a stale one in a story that moved a
  great deal this year.

If only one can be done, start with #11 and #12 — refreshing a page that
already ranks beats building a page that does not.

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
