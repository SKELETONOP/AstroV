export default function StatStrip({ stats, className = '' }) {
  return (
    <div className={`grid grid-cols-2 gap-6 sm:grid-cols-4 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-display text-3xl font-extrabold text-accent-700 sm:text-4xl">{stat.number}</p>
          <p className="mt-1 text-sm text-neutral-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
