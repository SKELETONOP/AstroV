import { useParams } from 'react-router';
import AppLink from '../components/AppLink';
import Button from '../components/Button';
import Icon from '../components/Icon';
import site from '../data/site.json';
import { getServicePage } from '../lib/content';
import { buildMeta } from '../lib/meta';
import { allServices } from '../lib/services';

export const meta = ({ location, params }) => {
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

const categoryHeroBg = {
  Astro: "bg-[url('/images/services-bg-mobile.png')] bg-cover bg-center lg:bg-[url('/images/services-bg.png')] lg:bg-cover lg:bg-center",
  Vashikaran:
    "bg-[url('/images/about-section-bg-mobile.png')] bg-cover bg-center lg:bg-[url('/images/about-section-bg.png')] lg:bg-cover lg:bg-center",
  'Black Magic': "bg-[url('/images/stats-bg-mobile.png')] bg-cover bg-center lg:bg-[url('/images/stats-bg.png')] lg:bg-cover lg:bg-center",
  Love: "bg-[url('/images/testimonials-bg-mobile.png')] bg-cover bg-center lg:bg-[url('/images/testimonials-bg.png')] lg:bg-cover lg:bg-center",
  Family: "bg-[url('/images/philosophy-bg-mobile.png')] bg-cover bg-center lg:bg-[url('/images/philosophy-bg.png')] lg:bg-cover lg:bg-center",
  Healing: "bg-[url('/images/faq-bg-mobile.png')] bg-cover bg-center lg:bg-[url('/images/faq-bg.png')] lg:bg-cover lg:bg-center",
};

const categoryImage = {
  Astro: '/images/services-astrology-banner.png',
  Vashikaran: '/images/services-vashikaran-banner.png',
  'Black Magic': '/images/services-black-magic-banner.png',
  Love: '/images/testimonials-bg.png',
  Family: '/images/services-divorce-banner.png',
  Healing: '/images/services-spiritual-healing-banner.png',
};

const serviceImage = {
  'love-problem-solution': '/images/services-love-problem-banner.png',
  'inter-caste-love-marriage': '/images/services-intercaste-love-banner.png',
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
  const heroBgClass = categoryHeroBg[category] ?? categoryHeroBg.Astro;
  const bannerImage = serviceImage[slug] ?? categoryImage[category] ?? categoryImage.Astro;

  return (
    <>
      <section
        className={`relative overflow-hidden border-b border-neutral-200 py-12 lg:py-16 ${heroBgClass}`}
      >
        <div className="container-page relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-neutral-500">
            <AppLink href="/" className="hover:text-accent-700">
              Home
            </AppLink>
            <span className="mx-1" aria-hidden="true">
              /
            </span>
            <span className="text-neutral-700">{title}</span>
          </nav>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-50 px-3 py-1 text-sm font-medium text-accent-600">
            <Icon name="Sparkle" size={14} />
            {category}
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-neutral-900 sm:text-4xl">{title}</h1>
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
              src={bannerImage}
              alt={imageAlt}
              width={900}
              height={400}
              className="mb-8 aspect-[21/9] w-full rounded-2xl border border-accent-500/30 object-cover shadow-card"
            />
            <div className="prose-content max-w-none" dangerouslySetInnerHTML={{ __html: service.html }} />
          </div>

          <aside className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-accent-500/30 p-6 shadow-card">
              <div className="absolute inset-0 bg-[url('/images/service-card-bg.png')] bg-cover bg-top" />
              <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/85 to-surface" />
              <div className="relative z-10">
                <h2 className="text-lg font-semibold text-neutral-900">Speak with Vikesh Kumar</h2>
                <p className="mt-2 text-sm text-neutral-600">
                  Share your situation and receive clear, practical guidance tailored to your chart.
                </p>
                <Button href="/contact" variant="primary" size="md" className="mt-4 w-full">
                  Book a Consultation
                </Button>
              </div>
            </div>

            {related.length > 0 && (
              <div className="relative overflow-hidden rounded-xl border border-accent-500/30 p-6 shadow-card">
                <div className="absolute inset-0 bg-[url('/images/service-card-bg.png')] bg-cover bg-top" />
                <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/85 to-surface" />
                <div className="relative z-10">
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
