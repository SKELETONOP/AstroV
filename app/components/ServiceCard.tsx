import site from '../data/site.json';
import AppLink from './AppLink';
import Icon, { type IconName } from './Icon';

interface ServiceCardProps {
  icon: IconName;
  title: string;
  description: string;
  slug: string;
  phone?: string;
  whatsappLink?: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  slug,
  phone = site.phone,
  whatsappLink = `https://wa.me/${site.whatsapp}`,
  className = '',
}: ServiceCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl border border-neutral-200 bg-surface p-6 shadow-soft transition-shadow hover:shadow-card ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/40 bg-accent-50 text-accent-600">
        <Icon name={icon} size={22} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-neutral-900">
        <AppLink href={`/services/${slug}`} className="hover:text-accent-700">
          {title}
        </AppLink>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-neutral-600">{description}</p>
      <div className="mt-5 flex items-center gap-4 border-t border-neutral-100 pt-4 text-sm">
        <AppLink href={`/services/${slug}`} className="font-semibold text-accent-700 hover:text-accent-800">
          Learn more
        </AppLink>
        <span className="text-neutral-300" aria-hidden="true">
          |
        </span>
        <AppLink
          href={`tel:${phone.replace(/\s+/g, '')}`}
          className="flex items-center gap-1 text-neutral-600 hover:text-accent-700"
        >
          <Icon name="Phone" size={14} />
          Call
        </AppLink>
        <AppLink
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-neutral-600 hover:text-accent-700"
        >
          <Icon name="MessageCircle" size={14} />
          WhatsApp
        </AppLink>
      </div>
    </article>
  );
}
