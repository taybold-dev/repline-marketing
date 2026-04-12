import Link from "next/link";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact-sales", label: "Talk to Us" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const appLinks = [
  { href: "https://app.repline.io/auth/login", label: "Log in" },
  { href: "https://app.repline.io/auth/sign-up", label: "Start free trial" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Repline
            </Link>
            <p className="mt-2 text-sm text-muted max-w-xs">
              The OS for player representation. Built for hockey agents and advisors.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              {productLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Get Started</h3>
            <ul className="space-y-2">
              {appLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-muted hover:text-foreground transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 text-sm text-muted">
          &copy; {new Date().getFullYear()} Repline. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
