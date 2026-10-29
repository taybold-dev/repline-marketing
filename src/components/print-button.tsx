"use client";

/**
 * Opens the browser's print dialog, which also offers "Save as PDF".
 * What actually prints is decided by the print rules in globals.css.
 */
export function PrintButton({ label = "Print or save as PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors print:hidden"
    >
      {label}
    </button>
  );
}
