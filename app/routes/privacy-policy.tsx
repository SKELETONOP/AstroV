import type { MetaFunction } from 'react-router';
import site from '../data/site.json';
import { buildMeta } from '../lib/meta';

export const meta: MetaFunction = ({ location }) =>
  buildMeta({
    title: 'Privacy Policy',
    description: 'How Astro Vikesh Kumar collects, uses and protects personal information shared through this website.',
    pathname: location.pathname,
  });

export default function PrivacyPolicy() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50 py-12 lg:py-16">
        <div className="container-page">
          <h1 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">Privacy Policy</h1>
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
