import Link from "next/link";

const VS_PAGES = [
  { href: "/vs/spreadsheets", label: "Spreadsheets", short: "Spreadsheets" },
  { href: "/vs/monday", label: "Monday.com", short: "Monday.com" },
  { href: "/vs/hubspot", label: "HubSpot", short: "HubSpot" },
  { href: "/vs/salesforce", label: "Salesforce", short: "Salesforce" },
  { href: "/vs/fandelo", label: "Fandelo", short: "Fandelo" },
  { href: "/vs/agent-live-360", label: "Agent Live 360", short: "Agent Live 360" },
  { href: "/vs/the-hockey-crm", label: "The Hockey CRM", short: "The Hockey CRM" },
];

// Hub pages worth routing to from any comparison. Filtered against `current`
// so a page never links to itself.
const HUB_LINKS = [
  { href: "/features", label: "See all Repline features" },
  { href: "/hockey-crm", label: "What “hockey CRM” actually means" },
];

export function VsCrossLinks({ current }: { current: string }) {
  const others = VS_PAGES.filter((p) => p.href !== current);
  const hubs = HUB_LINKS.filter((l) => l.href !== current);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted mb-4 text-center">
          Also comparing
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {others.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center rounded-lg border border-border/60 px-4 py-2 text-sm font-medium hover:bg-muted-bg transition-colors"
            >
              Repline vs. {label} &rarr;
            </Link>
          ))}
        </div>
        <p className="mt-4 text-center">
          {hubs.map(({ href, label }, i) => (
            <span key={href}>
              {i > 0 && <span className="mx-3 text-muted">&middot;</span>}
              <Link
                href={href}
                className="text-sm text-muted hover:text-foreground transition-colors underline underline-offset-4"
              >
                {label}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
