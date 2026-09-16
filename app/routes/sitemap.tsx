import type { MetaFunction } from 'react-router';
import AppLink from '../components/AppLink';
import cities from '../data/cities.json';
import { blogPosts } from '../lib/content';
import { buildMeta } from '../lib/meta';
import { allServices } from '../lib/services';

export const meta: MetaFunction = ({ location }) =>
  buildMeta({
    title: 'Sitemap',
    description: 'A full overview of every page on the Astro Vikesh Kumar website, including services, locations and blog articles.',
    pathname: location.pathname,
  });

const corePages = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Contact', href: '/contact' },
  { title: 'Disclaimer', href: '/disclaimer' },
  { title: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Sitemap() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50 py-12 lg:py-16">
        <div className="container-page">
          <h1 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">Sitemap</h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-neutral-600">A complete list of every page on this website.</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-700">Main Pages</h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {corePages.map((page) => (
                <li key={page.href}>
                  <AppLink href={page.href} className="hover:text-accent-700">
                    {page.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-700">Services</h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {allServices.map((service) => (
                <li key={service.slug}>
                  <AppLink href={`/services/${service.slug}`} className="hover:text-accent-700">
                    {service.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-700">Locations</h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {cities.map((city) => (
                <li key={city.slug}>
                  <AppLink href={`/locations/${city.slug}`} className="hover:text-accent-700">
                    {city.name}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-700">Blog Articles</h2>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <AppLink href={`/blog/${post.slug}`} className="hover:text-accent-700">
                    {post.data.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
