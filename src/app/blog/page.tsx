import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ogImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog | Hockey Agent & Advisor Insights — Repline",
  description:
    "Insights, guides, and news for hockey agents and advisors. Eligibility rules, compliance updates, and best practices for player representation.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Blog | Hockey Agent & Advisor Insights — Repline",
    description:
      "Insights, guides, and news for hockey agents and advisors.",
    url: "https://www.repline.io/blog",
    images: [ogImage({ title: "Blog", subtitle: "Insights, guides, and news for hockey agents and advisors", tag: "Repline" })],
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <section className="pt-12 pb-4 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-muted">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Insights for hockey agents and advisors
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Eligibility rules, compliance updates, and best practices for player representation.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          {posts.length === 0 ? (
            <p className="text-center text-muted py-12">
              Coming soon.
            </p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl border border-border/60 p-6 hover:border-border transition-colors"
                >
                  <div className="flex items-center gap-3 text-xs text-muted mb-2">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>&middot;</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-sm text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
