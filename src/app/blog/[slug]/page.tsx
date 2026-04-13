import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { ogImage, defaultOgImage } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://www.repline.io/blog/${slug}`,
      publishedTime: post.date,
      authors: ["Repline Team"],
      images: [post.ogImage ?? ogImage({ title: post.title, subtitle: post.description, tag: "Repline Blog" })],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Repline Team",
      url: "https://www.repline.io",
    },
    publisher: {
      "@type": "Organization",
      name: "Repline",
      url: "https://www.repline.io",
      logo: {
        "@type": "ImageObject",
        url: "https://www.repline.io/icon-512.png",
      },
    },
    mainEntityOfPage: `https://www.repline.io/blog/${slug}`,
    ...(post.keywords?.length
      ? { keywords: post.keywords.join(", ") }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-xs text-muted mb-3">
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
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            {post.description && (
              <p className="mt-3 text-lg text-muted">{post.description}</p>
            )}
          </header>

          <div className="flex gap-10">
            {/* Table of contents — desktop sidebar */}
            {post.headings.length > 3 && (
              <aside className="hidden lg:block w-56 shrink-0">
                <nav className="sticky top-24">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                    On this page
                  </h2>
                  <ul className="space-y-1.5 text-xs">
                    {post.headings.map((h) => (
                      <li
                        key={h.id}
                        className={h.level === 3 ? "pl-3" : ""}
                      >
                        <a
                          href={`#${h.id}`}
                          className="text-muted hover:text-foreground transition-colors leading-snug block"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}

            {/* Post content */}
            <div
              className="prose prose-neutral max-w-none flex-1
                prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[var(--color-foreground)]
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pt-8 prose-h2:border-t prose-h2:border-[var(--color-border)]
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-base prose-p:leading-relaxed prose-p:text-[var(--color-muted)] prose-p:mb-4
                prose-li:text-base prose-li:text-[var(--color-muted)] prose-li:leading-relaxed
                prose-ul:my-4 prose-ol:my-4
                prose-strong:text-[var(--color-foreground)] prose-strong:font-semibold
                prose-a:text-[var(--color-accent)] prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-[var(--color-foreground)]
                prose-blockquote:border-l-4 prose-blockquote:border-[var(--color-accent)] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[var(--color-muted)]
                prose-table:text-sm prose-th:text-left prose-th:px-3 prose-th:py-2 prose-th:font-semibold prose-th:text-[var(--color-foreground)] prose-th:bg-[var(--color-muted-bg)]
                prose-td:px-3 prose-td:py-2 prose-tr:border-b prose-tr:border-[var(--color-border)]
                prose-img:rounded-xl prose-img:border prose-img:border-[var(--color-border)] prose-img:shadow-lg
                first:prose-h2:border-t-0 first:prose-h2:pt-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      {/* Author bio */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-start gap-4 rounded-lg border border-border/60 p-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              R
            </div>
            <div>
              <p className="text-sm font-semibold">Repline Team</p>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Built by people who understand the hockey agent and advisor workflow.
                Repline is purpose-built CRM software for player representation &mdash;
                designed in partnership with working agents across the OHL, WHL, QMJHL,
                NCAA, AHL, and NHL.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to manage your practice like a pro?"
        description="Track players, contracts, deadlines, and compliance in one place. Free 30-day trial."
      />
    </>
  );
}
