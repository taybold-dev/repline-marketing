import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://www.repline.io";

// `lastModified` is deliberately omitted from the static entries below. It
// previously used `new Date()`, which claimed every page changed on every
// deploy — a signal Google learns to discount. Blog posts carry a real date
// from their front matter instead.
//
// /privacy and /terms are intentionally omitted: both pages serve
// `noindex, follow`, so submitting them here would contradict that and
// surface as "Submitted URL marked 'noindex'" in Search Console. They stay
// reachable through the footer.
export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/sports-agent-crm`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/features`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact-sales`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/vs/spreadsheets`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vs/monday`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vs/hubspot`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vs/salesforce`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vs/fandelo`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vs/agent-live-360`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vs/the-hockey-crm`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
