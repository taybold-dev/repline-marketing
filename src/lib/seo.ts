/** Default OG image — must be set explicitly on each page's openGraph to render in SSR HTML. */
export const defaultOgImage = {
  url: "https://www.repline.io/og",
  width: 1200,
  height: 630,
  alt: "Repline — The CRM built for hockey agents and advisors",
} as const;
