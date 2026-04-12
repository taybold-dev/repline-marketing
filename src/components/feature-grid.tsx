interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
      {features.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </div>
  );
}

function FeatureCard({ title, description, icon }: Feature) {
  return (
    <div className="group rounded-xl border border-border/60 bg-background p-6 hover:border-border transition-colors">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted-bg text-lg mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
