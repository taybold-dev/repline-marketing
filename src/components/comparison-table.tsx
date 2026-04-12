interface ComparisonRow {
  feature: string;
  competitor: string;
  repline: string;
}

interface ComparisonTableProps {
  competitorName: string;
  rows: ComparisonRow[];
}

export function ComparisonTable({ competitorName, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border/60">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/60 bg-muted-bg">
            <th className="text-left px-4 py-3 font-semibold w-1/3">Feature</th>
            <th className="text-left px-4 py-3 font-semibold w-1/3 text-muted">{competitorName}</th>
            <th className="text-left px-4 py-3 font-semibold w-1/3">Repline</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={i < rows.length - 1 ? "border-b border-border/60" : ""}
            >
              <td className="px-4 py-3 font-medium">{row.feature}</td>
              <td className="px-4 py-3 text-muted">{row.competitor}</td>
              <td className="px-4 py-3">{row.repline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface QuoteProps {
  text: string;
  attribution: string;
}

export function PersonaQuote({ text, attribution }: QuoteProps) {
  return (
    <blockquote className="rounded-xl border border-border/60 bg-muted-bg p-6 my-8">
      <p className="text-base italic leading-relaxed">&ldquo;{text}&rdquo;</p>
      <footer className="mt-3 text-sm text-muted">&mdash; {attribution}</footer>
    </blockquote>
  );
}

export function CalloutBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6 my-8 text-center">
      <p className="text-base font-medium leading-relaxed">{children}</p>
    </div>
  );
}
