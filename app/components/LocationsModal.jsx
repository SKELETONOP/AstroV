import { useEffect, useMemo, useState } from 'react';
import AppLink from './AppLink';
import Icon from './Icon';

export default function LocationsModal({ open, onClose, cities }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!open) return;
    setQuery('');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cities;
    return cities.filter(
      (city) => city.name.toLowerCase().includes(q) || city.country.toLowerCase().includes(q),
    );
  }, [cities, query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="All locations we serve"
        className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-accent-500/30 bg-surface shadow-card"
      >
        <div className="flex items-center justify-between gap-4 border-b border-accent-500/20 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
              Consultations Available In
            </p>
            <h2 className="mt-1 font-display text-xl font-bold text-neutral-900">
              All Locations ({cities.length})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-500/40 text-accent-600 hover:bg-accent-50/10"
          >
            <Icon name="X" size={18} />
          </button>
        </div>

        <div className="border-b border-accent-500/20 px-6 py-4">
          <div className="relative">
            <Icon
              name="Compass"
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-accent-500/70"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by city or country..."
              autoFocus
              className="w-full rounded-lg border border-neutral-300 bg-transparent py-2.5 pl-10 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-200"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {filtered.length > 0 ? (
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {filtered.map((city) => (
                <li key={city.slug}>
                  <AppLink
                    href={`/locations/${city.slug}`}
                    onClick={onClose}
                    className="flex flex-col text-sm text-neutral-700 hover:text-accent-700"
                  >
                    <span className="font-medium">{city.name}</span>
                    <span className="text-xs text-neutral-500">{city.country}</span>
                  </AppLink>
                </li>
              ))}
            </ul>
          ) : (
            <p className="py-8 text-center text-sm text-neutral-500">
              No locations found for &quot;{query}&quot;.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
