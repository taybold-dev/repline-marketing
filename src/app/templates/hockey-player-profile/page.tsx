import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PlayerProfileGenerator } from "@/components/player-profile/player-profile-generator";
import { WebPageSchema, FAQPageSchema } from "@/components/schema-org";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Free Hockey Player Profile Template & PDF Generator",
  description:
    "Free hockey player profile template: fill in the form and download a one-page PDF for coaches and scouts, with career history, academics and links.",
  alternates: { canonical: "/templates/hockey-player-profile" },
  openGraph: {
    type: "website",
    title: "Free Hockey Player Profile Template & PDF Generator",
    description:
      "Fill in the form, download a clean player profile PDF to send to coaches and scouts. Free, no sign-up, nothing leaves your browser.",
    url: "https://www.repline.io/templates/hockey-player-profile",
    images: [ogImage({ title: "Hockey Player Profile Generator", subtitle: "A clean PDF for coaches and scouts, free", tag: "Template" })],
  },
};

const sections = [
  {
    title: "Player card",
    desc: "Name, date of birth, position, height, weight and shot, at the top where a coach looks first. Give height and weight in both imperial and metric if you send to both sides of the border.",
  },
  {
    title: "Current team and level",
    desc: "Team, league or level, and citizenship. Citizenship matters more than families expect: junior leagues limit how many import players a team can carry.",
  },
  {
    title: "Scouting notes",
    desc: "Three or four sentences on how the player plays: what they do best, the situations they're trusted in, and one honest area they're working on. Coaches discount a profile that sounds like a highlight reel.",
  },
  {
    title: "Links",
    desc: "Elite Prospects for stats a coach can verify, and Hudl or another video link so they can watch before they travel. A profile without video asks a coach to take your word for it.",
  },
  {
    title: "Career history",
    desc: "Season, team, level and league, newest first. This is how a coach places the player against players they already know.",
  },
  {
    title: "Academics",
    desc: "School, graduation year, GPA and NCAA Eligibility Center (Clearinghouse) ID for any player with a college path. Academics decide whether a college can admit the player, so coaches check them early.",
  },
  {
    title: "Contact",
    desc: "One name, one phone number, one email, and who they are: the advisor or a parent. Make it obvious who a coach should call.",
  },
];

const faqs = [
  {
    q: "What should a hockey player profile include?",
    a: "A player card with name, date of birth, position, height, weight and shot; current team and level; a short scouting summary; links to Elite Prospects and video; career history by season; academics for players with a college path; and one clear contact. Keep it to a single page so a coach can read it in under a minute.",
  },
  {
    q: "What should a youth hockey player profile include?",
    a: "The same sections, kept simpler. For a U14 to U16 player, lead with position, birth year, team and level, a short note on how they play, and a parent as the contact. Leave out GPA and Clearinghouse ID until college hockey is a real option, and keep personal details to what a coach needs: no home address or player phone number.",
  },
  {
    q: "What do college coaches look for in a player profile?",
    a: "Enough to decide whether to watch the player: position, birth year, size, current team and level, stats they can verify on Elite Prospects, and video. Academics matter too, because a coach can only recruit a player the school will admit, so include school, graduation year, GPA and NCAA Eligibility Center (Clearinghouse) ID. Keep it to one page and send it with a short, personal email.",
  },
  {
    q: "Is this hockey player profile generator free?",
    a: "Yes. Fill in the form and download the PDF. There is no sign-up and no limit on how many profiles you make. Free PDFs carry a small \"Made with Repline\" footer.",
  },
  {
    q: "Is the player's information stored anywhere?",
    a: "No. The PDF is built in your browser, and nothing you type is sent to Repline or anyone else. If you close the page, the details are gone, so download the PDF before you leave.",
  },
  {
    q: "Who should a player profile be sent to?",
    a: "Junior and college coaches, scouts and general managers who are evaluating the player, usually with a short personal email. Send it before a showcase or tournament so a coach knows who to watch, and send an updated one when the season's stats or team change.",
  },
  {
    q: "How is this different from the player PDF in Repline?",
    a: "This is a plainer version of the same layout. In Repline, the profile is saved and updated each season, and the PDF adds the player's headshot and action photo, video clips, parents, contracts and key contacts, and your agency's logo, colours and contact footer in place of the Repline footer.",
  },
];

export default function HockeyPlayerProfilePage() {
  return (
    <>
      <WebPageSchema
        name="Hockey Player Profile Template and PDF Generator"
        description="A free tool that builds a one-page hockey player profile PDF for coaches and scouts, in the browser."
        url="https://www.repline.io/templates/hockey-player-profile"
      />
      <FAQPageSchema faqs={faqs} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Templates", href: "/templates" },
          { label: "Hockey player profile" },
        ]}
      />

      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Free tool
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Hockey Player Profile Template
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            A hockey player profile is a one-page summary a coach or scout can read in under a minute: who the player is, how they play, where they&apos;ve played, and who to call. This template works for youth, junior and college-bound players: fill in the form below and download it as a PDF. It&apos;s free, and nothing you type leaves your browser.
          </p>
        </div>
      </section>

      <Section>
        <PlayerProfileGenerator />
      </Section>

      <Section className="bg-muted-bg">
        <SectionHeader
          tag="Guide"
          title="What to put in a hockey player profile"
          description="Every section on the profile, and what a coach is looking for in it."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {sections.map((s) => (
            <div key={s.title} className="rounded-lg border border-border/60 bg-background p-4">
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          tag="Example"
          title="Hockey player profile example"
          description="The free PDF for a fictional player, Jordan Sample, made with the &ldquo;Fill with example&rdquo; button above."
        />
        <div className="mx-auto max-w-2xl rounded-xl border border-border/60 overflow-hidden shadow-lg">
          <Image
            src="/templates/hockey-player-profile-example.png"
            alt="Example hockey player profile PDF for a fictional player: a dark header card with date of birth, position, height, weight and shot, followed by athletic details, scouting notes, Elite Prospects and Hudl links, career history, academics and a contact"
            width={1275}
            height={1650}
            sizes="(max-width: 672px) 100vw, 672px"
            className="w-full h-auto"
          />
        </div>
      </Section>

      <Section className="bg-muted-bg">
        <SectionHeader
          tag="In Repline"
          title="The same profile, kept up to date"
          description="In Repline the profile lives with the rest of the player's record, so the PDF is never out of date: one click produces it with photos, video and your agency's branding."
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
            See everything Repline does &rarr;
          </Link>
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
          Evaluating a player rather than presenting one? Use our{" "}
          <Link href="/templates/hockey-scouting-report" className="underline underline-offset-4 hover:text-foreground">
            free hockey scouting report template
          </Link>
          . For players with a college path, our guide to{" "}
          <Link href="/blog/chl-ncaa-eligibility-rules-2025" className="underline underline-offset-4 hover:text-foreground">
            CHL and NCAA eligibility rules
          </Link>{" "}
          covers what to check first.
        </p>
      </Section>

      <CTASection
        title="Profiles with photos, video and your branding"
        description="Repline keeps every player's profile current and turns it into a branded PDF in one click. Free 30-day trial."
      />
    </>
  );
}
