import Icon from '../components/Icon';
import site from '../data/site.json';
import { buildMeta } from '../lib/meta';

export const meta = ({ location }) =>
  buildMeta({
    title: 'Disclaimer',
    description: 'Disclaimer covering the nature of astrology and spiritual consultation services offered by Astro Vikesh Kumar.',
    pathname: location.pathname,
  });

export default function Disclaimer() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-neutral-200 bg-[url('/images/stats-bg-mobile.png')] bg-cover bg-center py-12 lg:bg-[url('/images/stats-bg.png')] lg:bg-cover lg:bg-center lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/40 via-neutral-50/80 to-neutral-50" />
        <div className="container-page relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-50 px-3 py-1 text-sm font-medium text-accent-600">
            <Icon name="ShieldCheck" size={16} />
            Legal
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-neutral-900 sm:text-4xl">Disclaimer</h1>
          <p className="mt-4 text-neutral-600">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-page max-w-3xl prose-content">
          <p>
            The information and guidance provided by {site.name} is based on traditional astrological and spiritual
            practice. It is intended to offer perspective and guidance, and should not be treated as a substitute for
            professional medical, legal, financial or psychological advice.
          </p>

          <h2>No guaranteed outcomes</h2>
          <p>
            Astrology and spiritual remedies work with tendencies and probabilities, not certainties. No specific
            outcome, timeline, or result can be guaranteed for any consultation or remedy offered through this
            website or in person.
          </p>

          <div className="callout">
            <p className="font-semibold text-neutral-900">Please note</p>
            <p className="mt-2 text-sm text-neutral-700">
              If you are experiencing a medical emergency, mental health crisis, or legal matter, please contact an
              appropriately qualified professional or emergency service immediately. Spiritual consultation is a
              complement to, not a replacement for, professional care.
            </p>
          </div>

          <h2>Personal responsibility</h2>
          <p>
            Decisions made following a consultation, including financial, relationship or career decisions, remain
            the sole responsibility of the client. {site.name} and its practitioners are not liable for outcomes
            resulting from decisions made independently by clients.
          </p>

          <h2>Content on this website</h2>
          <p>
            Articles, service descriptions and blog content on this website are provided for general informational
            purposes and reflect the traditional practices and personal views of the practitioner. They should not be
            interpreted as universal or scientifically verified claims.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this disclaimer can be directed to{' '}
            <a href={`mailto:${site.email}`} className="text-accent-700 underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
