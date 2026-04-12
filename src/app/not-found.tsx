import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-20">
      <div className="text-center px-6">
        <span className="text-6xl font-bold text-border">404</span>
        <h1 className="mt-4 text-2xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-2 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center mt-6 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
