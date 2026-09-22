import Image from "next/image";
import { Section, SectionHeader } from "@/components/section";
import {
  type Testimonial,
  testimonials,
  getFeaturedTestimonial,
} from "@/lib/testimonials";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function Avatar({ name, image }: Pick<Testimonial, "name" | "image">) {
  if (image) {
    return (
      <Image
        src={image}
        alt={`${name}, Repline customer`}
        width={80}
        height={80}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-primary-foreground"
    >
      {initials(name)}
    </span>
  );
}

function AgencyLogo({ logo, agency }: Pick<Testimonial, "logo" | "agency">) {
  if (!logo) return null;

  return (
    <Image
      src={logo}
      alt={`${agency} logo`}
      width={160}
      height={160}
      className="mb-5 h-12 w-auto object-contain"
    />
  );
}

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);
  return (
    <span className="mb-3 block text-sm text-accent" aria-label={`${rating} out of 5 stars`}>
      <span aria-hidden="true">{"★".repeat(rounded)}{"☆".repeat(5 - rounded)}</span>
    </span>
  );
}

function Attribution({ name, title, agency, detail, image }: Testimonial) {
  return (
    <footer className="mt-5 flex items-center gap-3">
      <Avatar name={name} image={image} />
      <div className="text-sm leading-snug">
        <cite className="not-italic font-semibold text-foreground">{name}</cite>
        <p className="text-muted">
          {title}, {agency}
          {detail && <span className="block">{detail}</span>}
        </p>
      </div>
    </footer>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="flex h-full flex-col rounded-xl border border-border/60 bg-background p-6">
      <AgencyLogo logo={testimonial.logo} agency={testimonial.agency} />
      {testimonial.rating !== undefined && <Stars rating={testimonial.rating} />}
      <p className="flex-1 text-base leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
      <Attribution {...testimonial} />
    </blockquote>
  );
}

interface TestimonialGridProps {
  tag?: string;
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Full testimonial section. Renders nothing until real quotes exist in
 * src/lib/testimonials.ts, so the site never ships an empty or placeholder
 * proof section.
 */
export function TestimonialGrid({
  tag = "From our customers",
  title = "Agents who made the switch",
  description = "Hockey agents and advisors running their practice on Repline.",
  className = "bg-muted-bg",
}: TestimonialGridProps) {
  if (testimonials.length === 0) return null;

  // Keep a single quote from stranding in a three-column grid.
  const layout =
    testimonials.length === 1
      ? "max-w-2xl"
      : testimonials.length === 2
        ? "max-w-3xl md:grid-cols-2"
        : "max-w-5xl md:grid-cols-2 lg:grid-cols-3";

  return (
    <Section className={className}>
      <SectionHeader tag={tag} title={title} description={description} />
      <div className={`mx-auto grid gap-6 ${layout}`}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
}

/**
 * Single-quote treatment for pages that only have room for one, such as
 * pricing and contact-sales. Renders nothing until real quotes exist.
 */
export function TestimonialHighlight({ className = "" }: { className?: string }) {
  const testimonial = getFeaturedTestimonial();
  if (!testimonial) return null;

  return (
    <div className={`mx-auto max-w-2xl ${className}`}>
      <blockquote className="rounded-xl border border-border/60 bg-muted-bg p-6 text-center">
        <div className="flex justify-center">
          <AgencyLogo logo={testimonial.logo} agency={testimonial.agency} />
        </div>
        {testimonial.rating !== undefined && <Stars rating={testimonial.rating} />}
        <p className="text-base leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
        <footer className="mt-4 text-sm text-muted">
          &mdash;{" "}
          <cite className="not-italic font-medium text-foreground">{testimonial.name}</cite>,{" "}
          {testimonial.title}, {testimonial.agency}
        </footer>
      </blockquote>
    </div>
  );
}

/**
 * Padded section wrapper around a single quote, for dropping between full
 * page sections. Renders nothing until real quotes exist.
 */
export function TestimonialHighlightSection({ className = "" }: { className?: string }) {
  if (!getFeaturedTestimonial()) return null;

  return (
    <section className={`pb-16 md:pb-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <TestimonialHighlight />
      </div>
    </section>
  );
}
