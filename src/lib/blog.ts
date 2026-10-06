import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** Last substantive revision, if the post has been updated since publication. */
  updated?: string;
  /** Named author. Falls back to the organisation byline when absent. */
  author?: string;
  /** The author's role, shown alongside their name. */
  authorTitle?: string;
  /** Credentials worth stating for E-E-A-T, e.g. "NHLPA-certified agent". */
  authorCredentials?: string;
  /**
   * Optional FAQ pairs for FAQPage structured data. These must mirror an FAQ
   * section already visible in the post body — schema that isn't on the page
   * is a guidelines violation, not an optimisation.
   */
  faqs?: { q: string; a: string }[];
  keywords?: string[];
  ogImage?: string;
  excerpt: string;
  readingTime: string;
  content: string;
  headings: { id: string; text: string; level: number }[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  excerpt: string;
  readingTime: string;
}

function extractHeadings(
  htmlContent: string
): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/gi;
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    const text = match[2].replace(/<[^>]*>/g, "");
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    headings.push({ id, text, level: parseInt(match[1]) });
  }
  return headings;
}

function addHeadingIds(htmlContent: string): string {
  return htmlContent.replace(
    /<h([2-3])>(.*?)<\/h[2-3]>/gi,
    (_match, level, text) => {
      const plainText = text.replace(/<[^>]*>/g, "");
      const id = plainText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      return `<h${level} id="${id}">${text}</h${level}>`;
    }
  );
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      updated: data.updated || undefined,
      excerpt: data.excerpt || content.slice(0, 200).replace(/[#*_\n]/g, "").trim() + "...",
      readingTime: stats.text,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  const processed = await remark().use(html).process(content);
  let htmlContent = processed.toString();
  htmlContent = addHeadingIds(htmlContent);
  const headings = extractHeadings(htmlContent);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    updated: data.updated || undefined,
    author: data.author || undefined,
    authorTitle: data.authorTitle || undefined,
    authorCredentials: data.authorCredentials || undefined,
    faqs: data.faqs || undefined,
    keywords: data.keywords || [],
    ogImage: data.ogImage || null,
    excerpt:
      data.excerpt ||
      content.slice(0, 200).replace(/[#*_\n]/g, "").trim() + "...",
    readingTime: stats.text,
    content: htmlContent,
    headings,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
