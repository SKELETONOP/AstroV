import Icon from '../components/Icon';
import site from '../data/site.json';
import { buildMeta } from '../lib/meta';

export const meta = ({ location }) =>
  buildMeta({
    title: 'Privacy Policy',
    description: 'How Astro Vikesh Kumar collects, uses and protects personal information shared through this website.',
    pathname: location.pathname,
  });

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-neutral-200 bg-[url('/images/about-section-bg-mobile.png')] bg-cover bg-center py-12 lg:bg-[url('/images/about-section-bg.png')] lg:bg-cover lg:bg-center lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/40 via-neutral-50/80 to-neutral-50" />
        <div className="container-page relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-50 px-3 py-1 text-sm font-medium text-accent-600">
            <Icon name="ShieldCheck" size={16} />
            Legal
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-neutral-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-neutral-600">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-page max-w-3xl prose-content">
          <p>
            This Privacy Policy explains how {site.name} collects, uses and protects information you share when you
            contact us or use this website.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>Contact details you submit through our contact form, such as name, phone number and email address</li>
            <li>Any details you share during a consultation, including birth information and personal circumstances</li>
            <li>Basic usage data collected automatically by our hosting provider, such as browser type and page visits</li>
          </ul>

          <h2>How we use this information</h2>
          <p>
            Information you provide is used solely to respond to your enquiry, schedule and conduct consultations,
            and provide the guidance you have requested. We do not sell or rent your personal information to third
            parties.
          </p>

          <div className="callout">
            <p className="font-semibold text-neutral-900">Confidentiality of consultations</p>
            <p className="mt-2 text-sm text-neutral-700">
              Details shared during a consultation are treated as strictly confidential and are never shared publicly
              or with any third party without your consent.
            </p>
          </div>

          <h2>Contact form submissions</h2>
          <p>
            Our contact form is processed through Netlify Forms. Submitted data is stored securely by our hosting
            provider and is accessible only to {site.name} for the purpose of responding to your message.
          </p>

          <h2>Cookies</h2>
          <p>
            This website does not use tracking cookies or third-party advertising trackers. Any cookies used are
            limited to essential website functionality.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of any personal information we hold about you at
            any time by contacting us at{' '}
            <a href={`mailto:${site.email}`} className="text-accent-700 underline">
              {site.email}
            </a>
            .
          </p>

          <h2>Changes to this policy</h2>
          <p>
            This policy may be updated periodically to reflect changes in our practices. The date at the top of this
            page indicates when it was last revised.
          </p>
        </div>
      </section>
    </>
  );
}
