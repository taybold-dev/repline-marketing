/** Default OG image — must be set explicitly on each page's openGraph to render in SSR HTML. */
export const defaultOgImage = {
  url: "https://www.repline.io/og",
  width: 1200,
  height: 630,
  alt: "Repline — The CRM built for hockey agents and advisors",
} as const;

/** Generate a page-specific OG image URL via the /og route. */
export function ogImage(opts: {
  title: string;
  subtitle?: string;
  tag?: string;
  alt?: string;
}) {
  const params = new URLSearchParams();
  params.set("title", opts.title);
  if (opts.subtitle) params.set("subtitle", opts.subtitle);
  if (opts.tag) params.set("tag", opts.tag);

  return {
    url: `https://www.repline.io/og?${params.toString()}`,
    width: 1200,
    height: 630,
    alt: opts.alt || opts.title,
  };
}
