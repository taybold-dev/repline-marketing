import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
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
      ...(post.ogImage ? { images: [post.ogImage] } : {}),
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
              <span>&middot;</span>
              <span>By Repline Team</span>
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
                prose-headings:font-semibold prose-headings:tracking-tight
                prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-sm prose-p:leading-relaxed prose-p:text-[var(--color-muted)]
                prose-li:text-sm prose-li:text-[var(--color-muted)]
                prose-strong:text-[var(--color-foreground)]
                prose-a:text-[var(--color-foreground)] prose-a:underline prose-a:underline-offset-4
                prose-table:text-sm prose-th:text-left prose-th:px-3 prose-th:py-2
                prose-td:px-3 prose-td:py-2 prose-tr:border-b prose-tr:border-[var(--color-border)]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      <CTASection
        title="Ready to manage your practice like a pro?"
        description="Track players, contracts, deadlines, and compliance in one place. Free 30-day trial."
      />
    </>
  );
}
