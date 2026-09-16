import site from '../data/site.json';
import AppLink from './AppLink';
import Icon from './Icon';

export default function ServiceCard({
  icon,
  title,
  description,
  slug,
  phone = site.phone,
  whatsappLink = `https://wa.me/${site.whatsapp}`,
  className = '',
}) {
  return (
    <article
      className={`relative flex h-full flex-col items-center overflow-hidden rounded-xl border border-accent-500/30 p-8 text-center shadow-card ${className}`}
    >
      <div className="absolute inset-0 bg-[url('/images/service-card-bg.png')] bg-cover bg-top" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/85 to-surface" />

      <div className="relative z-10 flex h-full flex-col items-center">
        <span className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-dashed border-accent-500/25" />
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-500/60 text-accent-600">
            <Icon name={icon} size={26} />
          </span>
        </span>

        <h3 className="mt-5 font-display text-lg font-bold text-neutral-900">
          <AppLink href={`/services/${slug}`} className="hover:text-accent-600">
            {title}
          </AppLink>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-neutral-600">{description}</p>

        <div className="mt-6 flex w-full items-center gap-3">
          <span className="h-px flex-1 bg-accent-500/25" />
          <Icon name="Flower2" size={12} className="shrink-0 text-accent-600/70" />
          <span className="h-px flex-1 bg-accent-500/25" />
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <AppLink
            href={`/services/${slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-neutral-50 hover:bg-accent-700"
          >
            Learn more
            <Icon name="ArrowRight" size={14} />
          </AppLink>
          <span className="h-8 w-px bg-neutral-200" aria-hidden="true" />
          <AppLink
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="flex flex-col items-center gap-1 text-xs text-neutral-600 hover:text-accent-600"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-500/40">
              <Icon name="Phone" size={14} />
            </span>
            Call
          </AppLink>
          <AppLink
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-xs text-neutral-600 hover:text-accent-600"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-500/40">
              <Icon name="MessageCircle" size={14} />
            </span>
            WhatsApp
          </AppLink>
        </div>
      </div>
    </article>
  );
}
