import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PrintButton } from "@/components/print-button";
import { WebPageSchema, FAQPageSchema } from "@/components/schema-org";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hockey Scouting Report Template: Free Printable PDF",
  description:
    "Free hockey scouting report template and printable PDF scouting sheet: player details, 1-5 ratings for skaters and goalies, and a filled-in example.",
  alternates: { canonical: "/templates/hockey-scouting-report" },
  openGraph: {
    type: "website",
    title: "Hockey Scouting Report Template: Free Printable PDF",
    description:
      "Every field, a 1-5 scale rated against the player's level, a goalie version and a filled-in example. Print it or save it as a PDF.",
    url: "https://www.repline.io/templates/hockey-scouting-report",
    images: [ogImage({ title: "Hockey Scouting Report Template", subtitle: "Free and printable. Skater and goalie versions", tag: "Template" })],
  },
};

const playerFields = [
  "Player name",
  "Date of birth",
  "Position",
  "Shoots / catches (L/R)",
  "Height / weight",
  "Citizenship",
  "Current team",
  "League / playing level",
];

const viewingFields = [
  "Date",
  "Opponent",
  "Venue",
  "Watched live or on video",
  "Scouted by",
  "Viewing number (1st, 2nd…)",
];

const scale = [
  { score: "5", label: "Exceptional", meaning: "A clear strength even among the best players at this level" },
  { score: "4", label: "Above average", meaning: "Better than most players at this level" },
  { score: "3", label: "Average", meaning: "In line with a typical player at this level" },
  { score: "2", label: "Below average", meaning: "Behind most players at this level" },
  { score: "1", label: "Weakness", meaning: "A clear gap that limits the player at this level" },
];

const skaterCategories = [
  { name: "Skating", look: "Stride, top speed, acceleration, edges, backward skating and pivots" },
  { name: "Puck skills", look: "Handling at speed, protection, passing on the tape and through traffic" },
  { name: "Hockey sense", look: "Reads, positioning without the puck, decisions under pressure" },
  { name: "Shot", look: "Release, accuracy, power, willingness to shoot" },
  { name: "Compete", look: "Battles, puck pursuit, physical engagement, response to a bad shift" },
  { name: "Defensive play", look: "Gap control, stick position, backchecking, own-zone coverage" },
];

const goalieCategories = [
  { name: "Positioning", look: "Angles, depth, square to the shooter" },
  { name: "Movement", look: "Crease movement, push-offs, recovery to position" },
  { name: "Tracking", look: "Following the puck through traffic and on deflections" },
  { name: "Rebound control", look: "Smothering, steering pucks to the corners" },
  { name: "Puck handling", look: "Stopping rims, passing out, decisions behind the net" },
  { name: "Compete", look: "Second and third saves, response after a goal" },
];

const example = {
  player: [
    ["Player name", "Alex Martel (fictional)"],
    ["Date of birth", "2008-03-14"],
    ["Position", "Left defence"],
    ["Shoots", "L"],
    ["Height / weight", "6'1\" / 182 lb"],
    ["Current team", "U18 AAA"],
  ],
  ratings: [
    ["Skating", "4", "Smooth four-way mobility; walks the blue line well. Top-end speed is average."],
    ["Puck skills", "4", "Calm on retrievals, first pass is quick and accurate under a forecheck."],
    ["Hockey sense", "4", "Activates at the right moments and gets back. Rarely caught on the wrong side."],
    ["Shot", "2", "Gets pucks through but lacks power from the point. Needs a quicker release."],
    ["Compete", "3", "Wins most net-front battles; can be pushed off pucks along the wall."],
    ["Defensive play", "3", "Good gap through the neutral zone; reads below the goal line are inconsistent."],
  ],
  strengths: "Mobility, first pass, poise on retrievals.",
  develop: "Shot power and release; strength on the wall.",
  projection: "Mobile two-way defenceman with a path to junior or NCAA hockey if the shot and strength come.",
  blurb: "Poised, mobile left-shot defenceman who moves pucks quickly under pressure. Shot and strength are the gaps to close.",
};

const faqs = [
  {
    q: "What should a hockey scouting report include?",
    a: "Four things. The player's details: name, date of birth, position, handedness, size, team and league. The viewing details: date, opponent, whether you watched live or on video, and how many times you have seen the player. Ratings for each skill area, with a comment explaining every rating. And a summary: strengths, areas to develop, a projection, and a one- or two-sentence blurb someone else can read in ten seconds.",
  },
  {
    q: "How should you rate players in a scouting report?",
    a: "Use a short numeric scale, such as 1 to 5, and rate against the level the player is playing at, not against professionals. A 4 for an under-16 player means above average for under-16 hockey. Write down what each number means and use it consistently, so a 3 means the same thing in October as in March, and the same thing from every scout at your agency.",
  },
  {
    q: "How is a goalie scouting report different?",
    a: "The player details, viewing details and summary stay the same, but the skill categories change. Instead of skating, puck skills and shot, a goalie report rates positioning, crease movement, puck tracking, rebound control, puck handling and compete. This template includes both sets of categories.",
  },
  {
    q: "How many times should you watch a player before writing a report?",
    a: "Write a report after every viewing, but treat a single viewing as a first impression. One game can flatter or hide a player because of the opponent, the score or the player's role that night. Recording the viewing number on each report makes it easy to see whether a rating is based on one game or ten.",
  },
  {
    q: "Can I download this hockey scouting report template as a PDF?",
    a: "Yes, free. Use the print button and choose Save as PDF in the print dialog to keep a digital copy, or print a blank scouting sheet to fill in by hand at the rink. There is no sign-up.",
  },
];

function WriteIn({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`border-b border-border py-2 print:py-1.5 ${tall ? "print:pb-20" : ""}`}>
      <span className="text-xs uppercase tracking-wide text-muted">{label}</span>
    </div>
  );
}

function RatingTable({ title, categories }: { title: string; categories: { name: string; look: string }[] }) {
  return (
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-border text-left">
          <th className="py-2 pr-3 font-semibold w-1/4 print:w-[36%]">{title}</th>
          <th className="py-2 pr-3 font-semibold w-32">Rating (circle)</th>
          <th className="py-2 font-semibold">Comments</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((c) => (
          <tr key={c.name} className="border-b border-border align-top break-inside-avoid">
            <td className="py-3 pr-3 print:py-2.5">
              <span className="font-medium">{c.name}</span>
              <span className="block text-xs text-muted mt-0.5">{c.look}</span>
            </td>
            <td className="py-3 pr-3 print:py-2.5 whitespace-nowrap tracking-[0.5em] text-muted">1 2 3 4 5</td>
            <td className="py-3 print:py-2.5" />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function HockeyScoutingReportTemplatePage() {
  return (
    <>
      <WebPageSchema
        name="Hockey Scouting Report Template"
        description="A free, printable hockey scouting report template with skater and goalie rating categories and a filled-in example."
        url="https://www.repline.io/templates/hockey-scouting-report"
      />
      <FAQPageSchema faqs={faqs} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Templates", href: "/templates" },
          { label: "Hockey scouting report" },
        ]}
      />

      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Free template
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Hockey Scouting Report Template
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            A hockey scouting report records what a player showed you in one viewing: who they are, how they skate, handle the puck, read the game and compete, each rated against the level they play at, plus a short summary someone else can act on. This template, sometimes called a scouting sheet, has every field, a skater and a goalie version, and a filled-in example, and it prints or saves as a PDF.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PrintButton />
            <a
              href="#how-to-write"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-muted-bg transition-colors"
            >
              How to fill it in
            </a>
          </div>
          <p className="mt-3 text-xs text-muted">Free. No sign-up. Prints on two pages: ratings, then summary.</p>
        </div>
      </section>

      {/* The template itself — this block is all that prints (see globals.css) */}
      <Section id="printable-template">
        <div className="max-w-3xl mx-auto rounded-xl border border-border/60 p-6 md:p-10 print:border-0 print:p-0">
          <div className="flex items-baseline justify-between border-b-2 border-foreground pb-2 mb-6 print:mb-3">
            <h2 className="text-xl font-bold">Hockey Scouting Report</h2>
            <span className="text-xs text-muted">repline.io/templates</span>
          </div>

          <h3 className="text-sm font-semibold uppercase tracking-wide mb-1">Player</h3>
          <div className="grid grid-cols-2 gap-x-6 mb-6 print:mb-3">
            {playerFields.map((f) => (
              <WriteIn key={f} label={f} />
            ))}
          </div>

          <h3 className="text-sm font-semibold uppercase tracking-wide mb-1">Viewing</h3>
          <div className="grid grid-cols-2 gap-x-6 mb-6 print:mb-3">
            {viewingFields.map((f) => (
              <WriteIn key={f} label={f} />
            ))}
          </div>

          <p className="text-xs text-muted mb-3">
            Rate against the player&apos;s current level: 5 exceptional, 4 above average, 3 average, 2 below average, 1 weakness.
          </p>
          <div className="skater-ratings mb-6 print:mb-3">
            <RatingTable title="Skater" categories={skaterCategories} />
          </div>
          <details className="mb-6 print:mb-3">
            <summary className="text-sm font-medium cursor-pointer">Scouting a goalie? Open this to print goalie categories instead</summary>
            <div className="mt-3">
              <RatingTable title="Goalie" categories={goalieCategories} />
            </div>
          </details>

          <div className="print:break-before-page">
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-1">Stats this season</h3>
          <div className="skater-stats grid grid-cols-6 gap-x-3 mb-6 print:mb-3 text-center">
            {["GP", "G", "A", "PTS", "+/-", "PIM"].map((s) => (
              <WriteIn key={s} label={s} />
            ))}
          </div>
          <div className="goalie-stats hidden grid-cols-5 gap-x-3 mb-6 print:mb-3 text-center">
            {["GP", "W", "L", "GAA", "SV%"].map((s) => (
              <WriteIn key={s} label={s} />
            ))}
          </div>

          <h3 className="text-sm font-semibold uppercase tracking-wide mb-1">Summary</h3>
          <div className="mb-2">
            <WriteIn label="Strengths" tall />
            <WriteIn label="Areas to develop" tall />
            <WriteIn label="Projection (realistic next level)" tall />
            <WriteIn label="Quick blurb (one or two sentences)" tall />
          </div>
          <p className="text-xs text-muted mt-4">Overall (circle): <span className="tracking-[0.5em]">1 2 3 4 5</span></p>
          </div>
        </div>
      </Section>

      <Section id="how-to-write" className="bg-muted-bg">
        <SectionHeader
          tag="Guide"
          title="How to write a hockey scouting report"
          description="The template is the easy part. These are the habits that make a report worth reading."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: "Rate against the level, not the NHL",
              desc: "A 4 means above average for the league the player is in. Rate a U16 player against U16 hockey; otherwise every young player is a 1 and the report tells nobody anything.",
            },
            {
              title: "Define your scale once and keep it",
              desc: "Write down what each number means and use it all season. If two people at your agency scout, they need the same definitions, or their reports can't be compared.",
            },
            {
              title: "Every number needs a sentence",
              desc: "\"Skating: 4\" is a feeling. \"Skating: 4 — four-way mobility, walks the line, average top speed\" is evidence someone else can check on their next viewing.",
            },
            {
              title: "Record the context",
              desc: "Opponent, score, minutes and role change what a player can show. A third-pairing defenceman against the league's best team is a different viewing from a power-play shift against its worst.",
            },
            {
              title: "Write the blurb last",
              desc: "One or two sentences that a coach or GM can read in ten seconds. If you can't write it, you haven't seen enough of the player yet.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border/60 bg-background p-4">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-3">The rating scale</h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-3 font-semibold">Score</th>
                <th className="py-2 pr-3 font-semibold">Label</th>
                <th className="py-2 font-semibold">Meaning, at the player&apos;s current level</th>
              </tr>
            </thead>
            <tbody>
              {scale.map((s) => (
                <tr key={s.score} className="border-b border-border">
                  <td className="py-2 pr-3 font-medium">{s.score}</td>
                  <td className="py-2 pr-3">{s.label}</td>
                  <td className="py-2 text-muted">{s.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="Example"
          title="Hockey scouting report example"
          description="A completed report for a fictional player, so you can see the level of detail that makes one useful."
        />
        <div className="max-w-3xl mx-auto rounded-xl border border-border/60 p-6 md:p-8">
          <p className="text-xs text-muted mb-4">Example only. Alex Martel is not a real player.</p>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm mb-6">
            {example.player.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-wide text-muted">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <table className="w-full text-sm border-collapse mb-6">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-3 font-semibold">Category</th>
                <th className="py-2 pr-3 font-semibold">Rating</th>
                <th className="py-2 font-semibold">Comments</th>
              </tr>
            </thead>
            <tbody>
              {example.ratings.map(([cat, score, note]) => (
                <tr key={cat} className="border-b border-border align-top">
                  <td className="py-2 pr-3 font-medium">{cat}</td>
                  <td className="py-2 pr-3">{score}</td>
                  <td className="py-2 text-muted">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="font-semibold">Strengths</dt>
              <dd className="text-muted">{example.strengths}</dd>
            </div>
            <div>
              <dt className="font-semibold">Areas to develop</dt>
              <dd className="text-muted">{example.develop}</dd>
            </div>
            <div>
              <dt className="font-semibold">Projection</dt>
              <dd className="text-muted">{example.projection}</dd>
            </div>
            <div>
              <dt className="font-semibold">Quick blurb</dt>
              <dd className="text-muted">{example.blurb}</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section className="bg-muted-bg">
        <SectionHeader
          tag="In Repline"
          title="Keep your scouting notes on the player's profile"
          description="In Repline, notes live on the player's profile alongside their career history, contacts and contracts, and one click turns that profile into a branded player PDF for coaches, GMs and families."
        />
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-border/60 overflow-hidden shadow-lg">
            <Image
              src="/screenshots/player-detail.png"
              alt="Repline player profile with personal details, position, playing level, current team and a scouting quick blurb for a hockey client"
              width={2880}
              height={1800}
              sizes="(max-width: 896px) 100vw, 896px"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/features"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors underline underline-offset-4"
          >
            See how player profiles work in Repline &rarr;
          </Link>
          <p className="mt-4 text-sm text-muted">
            Need a profile to send today?{" "}
            <Link href="/templates/hockey-player-profile" className="underline underline-offset-4 hover:text-foreground">
              Make one free with our hockey player profile generator
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader tag="FAQ" title="Frequently asked questions" />
        <div className="max-w-2xl mx-auto space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border-b border-border/60 pb-6">
              <h3 className="text-base font-semibold mb-2">{q}</h3>
              <p className="text-sm text-muted leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted max-w-2xl mx-auto">
          Preparing a client for the draft? Our{" "}
          <Link href="/blog/draft-day-prep-checklist-hockey-advisors" className="underline underline-offset-4 hover:text-foreground">
            draft day prep checklist for hockey advisors
          </Link>{" "}
          covers when to refresh and send scouting reports.
        </p>
      </Section>

      <CTASection
        title="Every player's notes, history and contacts in one place"
        description="Player profiles, scouting notes and branded player PDFs. Free 30-day trial."
      />
    </>
  );
}
