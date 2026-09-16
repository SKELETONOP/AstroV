import Icon from './Icon';

export default function TestimonialCard({ name, location, quote, rating = 5, className = '' }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <figure
      className={`relative flex h-full flex-col overflow-hidden rounded-xl border border-accent-500/30 p-6 shadow-card ${className}`}
    >
      <div className="absolute inset-0 bg-[url('/images/service-card-bg.png')] bg-cover bg-top" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/90 to-surface" />

      <div className="relative z-10 flex h-full flex-col">
        <span className="font-display text-5xl leading-none text-accent-600">&ldquo;</span>
        <blockquote className="mt-2 flex-1 text-sm leading-6 text-neutral-600">{quote}</blockquote>
        <div className="mt-3 flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={i < rating ? 'fill-accent-500 text-accent-500' : 'text-neutral-500/40'}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-accent-500/25" />
          <Icon name="Sparkle" size={10} className="shrink-0 text-accent-600/70" />
        </div>

        <figcaption className="mt-4 flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-500/60 text-sm font-semibold text-accent-600">
            {initials}
          </span>
          <span>
            <span className="block text-sm font-semibold text-neutral-900">{name}</span>
            <span className="block text-xs text-neutral-500">{location}</span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
