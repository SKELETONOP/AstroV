import { useParams } from 'react-router';
import AppLink from '../components/AppLink';
import Button from '../components/Button';
import Icon from '../components/Icon';
import cities from '../data/cities.json';
import site from '../data/site.json';
import { buildMeta } from '../lib/meta';

function findCity(slug) {
  return cities.find((c) => c.slug === slug);
}

export const meta = ({ location, params }) => {
  const city = findCity(params.city);
  if (!city) {
    return buildMeta({ title: 'Location Not Found', description: 'This location could not be found.', pathname: location.pathname });
  }
  return buildMeta({
    title: `Astrologer in ${city.name} — Online & Phone Consultations`,
    description: `Book an astrology, vashikaran or love problem solution consultation with Astro Vikesh Kumar for clients in ${city.name}, ${city.country}, available online and by phone.`,
    pathname: location.pathname,
  });
};

export default function LocationCity() {
  const { city: citySlug } = useParams();
  const city = findCity(citySlug);

  if (!city) {
    return (
      <div className="container-page py-16 text-center">
        <h1 className="text-2xl font-bold text-neutral-900">Location not found</h1>
        <AppLink href="/" className="mt-4 inline-block text-accent-700 hover:text-accent-800">
          Back to Home
        </AppLink>
      </div>
    );
  }

  const mapQuery = encodeURIComponent(`${city.name}, ${city.country}`);

  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50 py-12 lg:py-16">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-neutral-500">
            <AppLink href="/" className="hover:text-accent-700">
              Home
            </AppLink>
            <span className="mx-1" aria-hidden="true">
              /
            </span>
            <span className="text-neutral-700">{city.name}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-700">Serving {city.country}</p>
          <h1 className="mt-2 text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Astrologer &amp; Spiritual Consultant for Clients in {city.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-neutral-600">
            Pandit Vikesh Kumar provides astrology, vashikaran, black magic removal and love problem consultations to
            clients in {city.name} over phone, WhatsApp and video call — with an in-person office in New Delhi for
            visiting clients.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary" size="md">
              Book a Consultation
            </Button>
            <Button href={site.phoneHref} variant="secondary" size="md">
              <Icon name="Phone" size={16} />
              {site.phone}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900">Consultations available to {city.name}</h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Distance is never a barrier — clients in {city.name} regularly book sessions over video call or
              WhatsApp at a time that suits their local schedule. Birth details can be shared in advance so the
              consultation itself stays focused on guidance rather than paperwork.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={18} className="mt-0.5 shrink-0 text-accent-600" />
                Flexible scheduling across time zones
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={18} className="mt-0.5 shrink-0 text-accent-600" />
                Consultations by phone, WhatsApp or video call
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={18} className="mt-0.5 shrink-0 text-accent-600" />
                Remedies that can be followed from anywhere
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-card">
            <div
              className="flex aspect-[4/3] w-full items-center justify-center bg-neutral-100 text-center text-sm text-neutral-500"
              role="img"
              aria-label={`Map placeholder showing ${city.name}, ${city.country}`}
            >
              <div>
                <Icon name="MapPin" size={28} className="mx-auto mb-2 text-accent-600" />
                Map of {city.name}, {city.country}
                <p className="mt-1 text-xs text-neutral-400">Map embed placeholder — query: {mapQuery}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-accent-50 py-12">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-neutral-900">Ready to talk, {city.name}?</h2>
          <p className="max-w-xl text-neutral-600">
            Book a consultation and get clear, practical guidance tailored to your chart and your situation.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
