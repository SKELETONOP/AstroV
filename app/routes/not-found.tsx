import type { MetaFunction } from 'react-router';
import AppLink from '../components/AppLink';
import Button from '../components/Button';
import { buildMeta } from '../lib/meta';

export const meta: MetaFunction = ({ location }) =>
  buildMeta({
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found.',
    pathname: location.pathname,
    noindex: true,
  });

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center gap-4 py-24 text-center">
      <h1 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">Page not found</h1>
      <p className="max-w-md text-neutral-600">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Head back home or reach out if you
        need help finding something.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="primary" size="md">
          Back to Home
        </Button>
        <AppLink href="/contact" className="inline-flex items-center px-5 py-2.5 text-base font-semibold text-accent-700 hover:text-accent-800">
          Contact Us
        </AppLink>
      </div>
    </div>
  );
}
