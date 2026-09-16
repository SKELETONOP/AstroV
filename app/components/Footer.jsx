import cities from '../data/cities.json';
import site from '../data/site.json';
import AppLink from './AppLink';
import Icon from './Icon';
import SocialIcon from './SocialIcon';

const visibleCities = cities.slice(0, 6);
const moreCities = cities.slice(6);

const secondaryNav = [
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Sitemap', href: '/sitemap' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-neutral-900">{site.name}</p>
          <p className="mt-2 text-sm text-neutral-600">{site.tagline}</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li className="flex items-start gap-2">
              <Icon name="MapPin" size={16} className="mt-0.5 shrink-0 text-accent-600" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Phone" size={16} className="shrink-0 text-accent-600" />
              <AppLink href={site.phoneHref} className="hover:text-accent-700">
                {site.phone}
              </AppLink>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Mail" size={16} className="shrink-0 text-accent-600" />
              <AppLink href={`mailto:${site.email}`} className="hover:text-accent-700">
                {site.email}
              </AppLink>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Clock" size={16} className="shrink-0 text-accent-600" />
              <span>{site.hours}</span>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <AppLink
              href={site.social.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:border-accent-600 hover:text-accent-600"
            >
              <SocialIcon name="facebook" size={16} />
            </AppLink>
            <AppLink
              href={site.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:border-accent-600 hover:text-accent-600"
            >
              <SocialIcon name="instagram" size={16} />
            </AppLink>
            <AppLink
              href={site.social.youtube}
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 hover:border-accent-600 hover:text-accent-600"
            >
              <SocialIcon name="youtube" size={16} />
            </AppLink>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            {secondaryNav.map((link) => (
              <li key={link.href}>
                <AppLink href={link.href} className="hover:text-accent-700">
                  {link.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Consultations Available In</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-neutral-700 sm:grid-cols-3">
            {visibleCities.map((city) => (
              <li key={city.slug}>
                <AppLink href={`/locations/${city.slug}`} className="hover:text-accent-700">
                  {city.name}
                </AppLink>
              </li>
            ))}
          </ul>

          {moreCities.length > 0 && (
            <details className="mt-2 group">
              <summary className="flex w-fit cursor-pointer list-none items-center gap-1 text-sm font-medium text-accent-700 hover:text-accent-800">
                <span className="group-open:hidden">Show more cities</span>
                <span className="hidden group-open:inline">Show fewer cities</span>
                <Icon name="ChevronDown" size={16} className="transition-transform group-open:rotate-180" />
              </summary>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-neutral-700 sm:grid-cols-3">
                {moreCities.map((city) => (
                  <li key={city.slug}>
                    <AppLink href={`/locations/${city.slug}`} className="hover:text-accent-700">
                      {city.name}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-2 text-xs text-neutral-500 sm:flex-row">
          <p>
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
          <p>
            Consultations offered for guidance and wellbeing purposes. See our{' '}
            <AppLink href="/disclaimer" className="underline hover:text-accent-700">
              disclaimer
            </AppLink>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
