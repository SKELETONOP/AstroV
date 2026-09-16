import Icon from './Icon';

export default function TestimonialCard({ name, location, quote, rating = 5, className = '' }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <figure className={`flex h-full flex-col rounded-xl border border-neutral-200 bg-surface p-6 shadow-soft ${className}`}>
      <Icon name="Quote" size={28} className="text-accent-200" />
      <blockquote className="mt-3 flex-1 text-sm leading-6 text-neutral-700">&ldquo;{quote}&rdquo;</blockquote>
      <div className="mt-3 flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={14}
            className={i < rating ? 'fill-accent-500 text-accent-500' : 'text-neutral-300'}
          />
        ))}
      </div>
      <figcaption className="mt-4 flex items-center gap-3 border-t border-neutral-100 pt-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-100 text-sm font-semibold text-accent-700">
          {initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-neutral-900">{name}</span>
          <span className="block text-xs text-neutral-500">{location}</span>
        </span>
      </figcaption>
    </figure>
  );
}
