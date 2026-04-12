import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14">
      {tag && (
        <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-muted">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted">{description}</p>
      )}
    </div>
  );
}
