import AppLink from '../components/AppLink';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { buildMeta } from '../lib/meta';

export const meta = ({ location }) =>
  buildMeta({
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found.',
    pathname: location.pathname,
    noindex: true,
  });

export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-[url('/images/stats-bg-mobile.png')] bg-cover bg-center lg:bg-[url('/images/stats-bg.png')] lg:bg-cover lg:bg-center">
      <div className="container-page relative z-10 flex min-h-[70vh] flex-col items-center justify-center gap-4 py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-500/50 text-accent-600">
          <Icon name="MoonStar" size={28} />
        </span>
        <p className="font-display text-6xl font-extrabold text-accent-600">404</p>
        <h1 className="font-display text-3xl font-extrabold text-neutral-900 sm:text-4xl">Page not found</h1>
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
    </div>
  );
}
