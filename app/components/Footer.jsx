import { useState } from 'react';
import Button from './Button';
import cities from '../data/cities.json';
import site from '../data/site.json';
import AppLink from './AppLink';
import Icon from './Icon';
import LocationsModal from './LocationsModal';
import SocialIcon from './SocialIcon';

const visibleCities = cities.slice(0, 6);

const secondaryNav = [
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Sitemap', href: '/sitemap' },
];

const guidanceHighlights = [
  { icon: 'Flower2', label: 'Traditional', caption: 'Wisdom' },
  { icon: 'Sun', label: 'Personalised', caption: 'Guidance' },
  { icon: 'Infinity', label: 'A Brighter', caption: 'Tomorrow' },
];

const contactItems = [
  { icon: 'MapPin', content: site.address },
  { icon: 'Phone', content: site.phone, href: site.phoneHref },
  { icon: 'Mail', content: site.email, href: `mailto:${site.email}` },
  { icon: 'Clock', content: site.hours },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 bg-[url('/images/footer-bg-mobile.png')] bg-cover bg-top lg:bg-[url('/images/footer-bg.png')] lg:bg-cover lg:bg-top">
      <div className="container-page relative z-10 py-14 lg:py-20">
        <div className="grid gap-12 text-center lg:grid-cols-[1.3fr_0.8fr_1fr] lg:gap-10 lg:text-left">
          {/* Brand */}
          <div className="mx-auto max-w-xs lg:mx-0 lg:max-w-none">
            <Icon name="Flower2" size={28} className="mx-auto text-accent-600 lg:mx-0" />
            <p className="mt-2 font-display text-2xl font-bold text-neutral-900">
              Astro <span className="text-accent-600">Vikesh Kumar</span>
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-accent-600">
              Guidance &middot; Clarity &middot; Balance
            </p>
            <span className="mx-auto mt-3 block h-px w-14 bg-accent-500/40 lg:mx-0" />

            <p className="mt-4 text-sm text-neutral-600">{site.tagline}</p>

            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              {contactItems.map((item) => (
                <li key={item.icon} className="flex items-start justify-center gap-3 lg:justify-start">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-500/50 text-accent-600">
                    <Icon name={item.icon} size={15} />
                  </span>
                  {item.href ? (
                    <AppLink href={item.href} className="pt-2 text-left hover:text-accent-700">
                      {item.content}
                    </AppLink>
                  ) : (
                    <span className="pt-2 text-left">{item.content}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
              <AppLink
                href={site.social.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300/60 text-neutral-300 hover:border-accent-600 hover:text-accent-600"
              >
                <SocialIcon name="facebook" size={16} />
              </AppLink>
              <AppLink
                href={site.social.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300/60 text-neutral-300 hover:border-accent-600 hover:text-accent-600"
              >
                <SocialIcon name="instagram" size={16} />
              </AppLink>
              <AppLink
                href={site.social.youtube}
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300/60 text-neutral-300 hover:border-accent-600 hover:text-accent-600"
              >
                <SocialIcon name="youtube" size={16} />
              </AppLink>
            </div>

            <p className="mt-6 font-script text-xl text-accent-600">Align &middot; Heal &middot; Prosper</p>
            <span className="mx-auto mt-2 block h-px w-16 bg-accent-500/30 lg:mx-0" />
          </div>

          {/* Explore — desktop */}
          <div className="hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">Explore</p>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              {secondaryNav.map((link) => (
                <li key={link.href}>
                  <AppLink href={link.href} className="hover:text-accent-700">
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities — desktop */}
          <div className="hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">Consultations Available In</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-neutral-700">
              {visibleCities.map((city) => (
                <li key={city.slug}>
                  <AppLink href={`/locations/${city.slug}`} className="hover:text-accent-700">
                    {city.name}
                  </AppLink>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setLocationsOpen(true)}
              className="mt-4 flex w-fit items-center gap-2 rounded-full border border-accent-500/50 px-4 py-2 text-xs font-semibold text-accent-600 hover:bg-accent-50/10"
            >
              View more ({cities.length})
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>

          {/* Explore + Cities — mobile accordions */}
          <div className="text-left lg:hidden">
            <details className="group border-b border-accent-500/20 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
                Explore
                <Icon name="Plus" size={16} className="text-accent-600 transition-transform group-open:rotate-45" />
              </summary>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                {secondaryNav.map((link) => (
                  <li key={link.href}>
                    <AppLink href={link.href} className="hover:text-accent-700">
                      {link.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </details>

            <details className="group border-b border-accent-500/20 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
                Consultations Available In
                <Icon name="Plus" size={16} className="text-accent-600 transition-transform group-open:rotate-45" />
              </summary>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-neutral-700">
                {visibleCities.map((city) => (
                  <li key={city.slug}>
                    <AppLink href={`/locations/${city.slug}`} className="hover:text-accent-700">
                      {city.name}
                    </AppLink>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setLocationsOpen(true)}
                className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-accent-500/50 px-4 py-2 text-xs font-semibold text-accent-600 hover:bg-accent-50/10"
              >
                View more ({cities.length})
                <Icon name="ArrowRight" size={14} />
              </button>
            </details>
          </div>

          {/* Guidance CTA — mobile only */}
          <div className="rounded-2xl border border-accent-500/40 bg-surface/85 p-6 text-center shadow-card lg:hidden">
            <Icon name="MoonStar" size={26} className="mx-auto text-accent-600" />
            <h3 className="mt-3 font-display text-xl font-bold text-neutral-900">Need Guidance?</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Book a consultation and take the first step towards a brighter tomorrow.
            </p>
            <Button href="/contact" variant="primary" size="md" className="mt-5 w-full justify-center">
              Book a Consultation
              <Icon name="ArrowRight" size={16} />
            </Button>
            <div className="mt-6 grid grid-cols-3 divide-x divide-accent-500/20">
              {guidanceHighlights.map((item) => (
                <div key={item.label} className="px-2">
                  <Icon name={item.icon} size={20} className="mx-auto text-accent-600" />
                  <p className="mt-2 text-[10px] font-semibold uppercase leading-snug tracking-wide text-neutral-500">
                    {item.label}
                    <br />
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-accent-500/20 py-8">
        <span className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-accent-500/40 bg-surface">
          <Icon name="MoonStar" size={16} className="text-accent-600" />
        </span>
        <div className="container-page flex flex-col items-center justify-between gap-2 text-center text-xs text-neutral-500 sm:flex-row sm:text-left">
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

      <LocationsModal open={locationsOpen} onClose={() => setLocationsOpen(false)} cities={cities} />
    </footer>
  );
}
