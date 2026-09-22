import Icon from './Icon';

const awardDetails = [
  { icon: 'Award', label: 'Asia Excellence Awards 2025' },
  { icon: 'Calendar', label: '30 August 2025' },
  { icon: 'MapPin', label: 'New Delhi, India' },
];

export default function AwardHighlight() {
  return (
    <section className="relative overflow-hidden border-t border-neutral-200 bg-[url('/images/about-section-bg-mobile.png')] bg-cover bg-center py-16 lg:bg-[url('/images/about-section-bg.png')] lg:bg-cover lg:bg-center lg:py-24">
      <div className="container-page relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative mx-auto w-full max-w-lg lg:order-2 lg:max-w-none">
            <span className="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] border border-dashed border-accent-500/25 lg:-inset-5" />
            <img
              src="/images/award-asia-excellence.jpg"
              alt="Pandit Vikesh Kumar receiving the Asia Excellence Award 2025 in New Delhi"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl border border-accent-500/40 object-cover shadow-card"
            />
            <span className="absolute -bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-accent-500/40 bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent-600 shadow-card sm:left-6 sm:translate-x-0">
              <Icon name="Award" size={16} />
              Asia Excellence Award 2025
            </span>
          </div>

          <div className="lg:order-1">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-700">
              <span className="h-px w-8 bg-accent-600/50" />
              Award &amp; Recognition
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">
              Honoured with the{' '}
              <span className="text-accent-600">Asia Excellence Award</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              In August 2025, Pandit Vikesh Kumar was felicitated with the Asia
              Excellence Award in New Delhi, recognising two decades of
              trusted, honest astrology and spiritual consultation work across
              India and abroad.
            </p>

            <div className="mt-8 space-y-4">
              {awardDetails.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-500/50 text-accent-600">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <p className="text-sm font-medium text-neutral-800">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
