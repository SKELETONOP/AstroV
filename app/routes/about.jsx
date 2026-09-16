import Button from '../components/Button';
import Icon from '../components/Icon';
import StatStrip from '../components/StatStrip';
import { buildMeta } from '../lib/meta';

export const meta = ({ location }) =>
  buildMeta({
    title: 'About Vikesh Kumar',
    description:
      "Learn about Pandit Vikesh Kumar's background, approach and 20+ years of experience in astrology and spiritual consultation.",
    pathname: location.pathname,
  });

const stats = [
  { number: '20+', label: 'Years of Practice' },
  { number: '15,000+', label: 'Consultations Given' },
  { number: '40+', label: 'Countries Reached' },
  { number: '6', label: 'Areas of Specialisation' },
];

const values = [
  {
    icon: 'ScrollText',
    title: 'Traditional foundation',
    description: 'Every reading is grounded in classical Vedic astrology, studied over two decades.',
  },
  {
    icon: 'Heart',
    title: 'Honest guidance',
    description: 'Remedies are only ever suggested when a chart genuinely calls for one — never as a default.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Confidential by default',
    description: 'Personal details and circumstances shared in a consultation stay strictly private.',
  },
];

export default function About() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50 py-12 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-700">About Us</p>
            <h1 className="mt-2 text-3xl font-extrabold text-neutral-900 sm:text-4xl">
              A practical approach to astrology and spiritual guidance
            </h1>
            <p className="mt-4 text-lg leading-7 text-neutral-600">
              Pandit Vikesh Kumar has spent more than two decades helping clients across India and abroad find
              clarity in moments of difficulty — through honest reading, not theatre.
            </p>
          </div>
          <img
            src="/images/about.svg"
            alt="Abstract illustration representing decades of astrological study"
            width={900}
            height={700}
            className="w-full rounded-2xl border border-neutral-200 shadow-card"
          />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-page max-w-3xl prose-content">
          <h2>How it started</h2>
          <p>
            Vikesh Kumar&apos;s introduction to astrology began in childhood, studying under family elders who had
            practiced Vedic astrology for generations. What started as curiosity turned into formal study, and
            eventually into a full-time practice based in Karol Bagh, New Delhi.
          </p>

          <blockquote className="pull-quote">
            &quot;People rarely come to me because things are going well. My job is to give them something solid to
            stand on.&quot;
          </blockquote>

          <h2>An approach built on plain explanation</h2>
          <p>
            Over the years, one pattern became clear: clients trust guidance more when they understand it. Every
            consultation is built around explaining what a chart actually shows — the planetary periods in play, why
            a particular pattern is emerging — rather than presenting conclusions without context.
          </p>

          <div className="callout">
            <p className="font-semibold text-neutral-900">What this means in practice</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
              <li>No remedy is suggested without a clear reason tied to your chart</li>
              <li>Every consultation ends with a plain-language summary</li>
              <li>Follow-up questions are welcomed, not treated as a separate paid session</li>
            </ul>
          </div>

          <h2>Reaching clients worldwide</h2>
          <p>
            What began as an in-person practice in Delhi has grown into a service reached by clients across more
            than 40 countries, largely through phone and video consultations. The approach has not changed — only
            the distance it now travels.
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-surface py-12 lg:py-16">
        <div className="container-page">
          <StatStrip stats={stats} />
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-12 lg:py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">What Guides This Practice</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-neutral-200 bg-surface p-6 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-500/40 bg-accent-50 text-accent-600">
                  <Icon name={value.icon} size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-neutral-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-accent-50 py-12">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-neutral-900">Have a question you&apos;d like guidance on?</h2>
          <Button href="/contact" variant="primary" size="lg">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
