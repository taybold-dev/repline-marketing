/**
 * Customer testimonials.
 *
 * Every entry must be a real, named customer who has seen the exact wording
 * below and agreed to have it published. Hockey representation is a small
 * industry — a quote the named person never approved is both spottable and a
 * legal exposure.
 *
 * `approved` is the publish gate. Drafted copy awaiting customer sign-off
 * stays `approved: false` and renders nowhere on the site. Flip it to `true`
 * only once that person has actually signed off on the quote as written.
 *
 * Illustrative composites belong in the `PersonaQuote` component on the
 * /vs/* pages instead, where they are framed as "Sound familiar?" scenarios
 * rather than as named customers.
 */

export interface Testimonial {
  /** Verbatim quote, no surrounding quotation marks — the component adds them. */
  quote: string;
  /** Full name, as the customer wants it published. */
  name: string;
  /** Role, e.g. "Founder" or "Player Agent". */
  title: string;
  /** Agency or firm name. */
  agency: string;
  /** Optional extra credibility detail, e.g. "NHLPA-certified" or "Toronto, ON". */
  detail?: string;
  /** Optional agency logo at /public/testimonials/<file>. */
  logo?: string;
  /** Optional headshot at /public/testimonials/<file>. Falls back to initials. */
  image?: string;
  /** Optional 1-5 star rating — set only if the customer actually gave one. */
  rating?: number;
  /** Preferred for single-quote placements (pricing, contact-sales). */
  featured?: boolean;
  /**
   * Publish gate. `false` keeps the entry out of every rendered surface.
   * Set to `true` only after the named person has approved this exact wording.
   */
  approved: boolean;
}

const allTestimonials: Testimonial[] = [
  {
    // DRAFT — written by Repline, not yet approved by Andrew Yarema.
    // Before setting approved: true —
    //   1. Andrew signs off on this exact wording.
    //   2. Confirm his title ("Founder" is an assumption).
    //   3. Add the Yarema Hockey logo at public/testimonials/yarema-hockey.png
    //      (or drop the `logo` field to fall back to initials).
    quote:
      "My roster used to live across three spreadsheets and whatever I could keep in my head. Now every player, contract, and conversation sits in one place, and I walk into every week knowing exactly which families I owe a call. It's built the way hockey actually works.",
    name: "Andrew Yarema",
    title: "Founder",
    agency: "Yarema Hockey",
    logo: "/testimonials/yarema-hockey.png",
    featured: true,
    approved: false,
  },
];

/** Only approved quotes are ever rendered or emitted as structured data. */
export const testimonials: Testimonial[] = allTestimonials.filter((t) => t.approved);

export const hasTestimonials = testimonials.length > 0;

/** The quote to use where there is only room for one. */
export function getFeaturedTestimonial(): Testimonial | undefined {
  return testimonials.find((t) => t.featured) ?? testimonials[0];
}

/** Ratings are only shown when every published testimonial carries a real one. */
export function getAggregateRating(): { value: number; count: number } | null {
  const rated = testimonials.filter(
    (t): t is Testimonial & { rating: number } => typeof t.rating === "number"
  );
  if (rated.length === 0 || rated.length !== testimonials.length) return null;
  const total = rated.reduce((sum, t) => sum + t.rating, 0);
  return { value: Number((total / rated.length).toFixed(1)), count: rated.length };
}
