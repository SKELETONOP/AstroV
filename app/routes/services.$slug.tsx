import type { MetaFunction } from 'react-router';
import { useParams } from 'react-router';
import AppLink from '../components/AppLink';
import Button from '../components/Button';
import Icon from '../components/Icon';
import site from '../data/site.json';
import { getServicePage } from '../lib/content';
import { buildMeta } from '../lib/meta';
import { allServices } from '../lib/services';

export const meta: MetaFunction = ({ location, params }) => {
  const service = params.slug ? getServicePage(params.slug) : undefined;
  if (!service) {
    return buildMeta({ title: 'Service Not Found', description: 'This service could not be found.', pathname: location.pathname });
  }
  return buildMeta({
    title: service.data.title,
    description: service.data.description,
    pathname: location.pathname,
    image: service.data.image,
  });
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getServicePage(slug) : undefined;

  if (!service) {
    return (
      <div className="container-page py-16 text-center">
        <h1 className="text-2xl font-bold text-neutral-900">Service not found</h1>
        <AppLink href="/" className="mt-4 inline-block text-accent-700 hover:text-accent-800">
          Back to Home
        </AppLink>
      </div>
    );
  }

  const {
    title,
    description,
    category,
    image,
    imageAlt,
    phone = site.phone,
    phoneHref = site.phoneHref,
    whatsappLink = `https://wa.me/${site.whatsapp}`,
  } = service.data;

  const related = allServices.filter((item) => item.slug !== slug).slice(0, 3);

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
            <span className="text-neutral-700">{title}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-700">{category}</p>
          <h1 className="mt-2 text-3xl font-extrabold text-neutral-900 sm:text-4xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-neutral-600">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary" size="md">
              Book a Consultation
            </Button>
            <Button href={phoneHref} variant="secondary" size="md">
              <Icon name="Phone" size={16} />
              {phone}
            </Button>
            <Button href={whatsappLink} variant="ghost" size="md">
              <Icon name="MessageCircle" size={16} />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <img
              src={image}
              alt={imageAlt}
              width={900}
              height={700}
              className="mb-8 w-full rounded-2xl border border-neutral-200 shadow-card"
            />
            <div className="prose-content max-w-none" dangerouslySetInnerHTML={{ __html: service.html }} />
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-surface p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-neutral-900">Speak with Vikesh Kumar</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Share your situation and receive clear, practical guidance tailored to your chart.
              </p>
              <Button href="/contact" variant="primary" size="md" className="mt-4 w-full">
                Book a Consultation
              </Button>
            </div>

            {related.length > 0 && (
              <div className="rounded-xl border border-neutral-200 bg-surface p-6 shadow-soft">
                <h2 className="text-lg font-semibold text-neutral-900">Related Services</h2>
                <ul className="mt-3 space-y-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <AppLink href={`/services/${item.slug}`} className="flex items-start gap-2 text-sm text-neutral-700 hover:text-accent-700">
                        <Icon name={item.icon} size={16} className="mt-0.5 shrink-0 text-accent-600" />
                        {item.title}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-10">
        <div className="container-page">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-xl border border-accent-200 bg-accent-50 p-8 text-center">
            <Icon name="Sparkles" size={28} className="text-accent-600" />
            <h2 className="text-xl font-semibold text-neutral-900">Not sure this is the right service for you?</h2>
            <p className="text-sm text-neutral-600">
              Every situation is unique. Get in touch for a short consultation and we will point you toward the
              guidance that fits your circumstances best.
            </p>
            <Button href="/contact" variant="primary" size="md">
              Talk to Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
