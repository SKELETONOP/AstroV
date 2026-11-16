import site from '../data/site.json';

export const SITE_URL = 'https://www.mahakalijyotish.com';
const SITE_NAME = 'Mahakali Jyotish';
const DEFAULT_IMAGE = '/images/og-image.jpg';
const DEFAULT_IMAGE_ALT = 'Mahakali Jyotish by Pandit Vikesh Kumar — Vedic astrologer in New Delhi';

export const absoluteUrl = (path) => new URL(path, SITE_URL).toString();

const BUSINESS_ID = `${SITE_URL}/#business`;
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// Site-wide entities: the business, its founder and the website. Emitted on every page so
// any page Google lands on can be tied back to the same local business.
const siteGraph = [
  {
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: SITE_NAME,
    alternateName: 'Mahakali Jyotish by Pandit Vikesh Kumar',
    description:
      'Vedic astrology, vashikaran, black magic removal, love problem solution and spiritual healing consultations in Karol Bagh, New Delhi and online worldwide.',
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_IMAGE),
    logo: absoluteUrl('/favicon.svg'),
    telephone: site.phone.replace(/\s+/g, ''),
    email: site.email,
    priceRange: '₹₹',
    founder: { '@id': PERSON_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Karol Bagh',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110005',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'New Delhi' },
      { '@type': 'Country', name: 'India' },
      'Worldwide',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '21:00',
    },
    sameAs: Object.values(site.social),
  },
  {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Pandit Vikesh Kumar',
    jobTitle: 'Vedic Astrologer',
    worksFor: { '@id': BUSINESS_ID },
    url: absoluteUrl('/about'),
    image: absoluteUrl('/images/about-portrait.png'),
    sameAs: Object.values(site.social),
  },
  {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'en-IN',
    publisher: { '@id': BUSINESS_ID },
  },
];

export const schemaRefs = { business: { '@id': BUSINESS_ID }, person: { '@id': PERSON_ID } };

/** Builds a BreadcrumbList from [{ name, path }] items. */
export function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Builds an FAQPage from [{ question, answer }] items. */
export function faqSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}

export function buildMeta({
  title,
  description,
  pathname,
  image = DEFAULT_IMAGE,
  noindex = false,
  type = 'website',
  publishedTime,
  schema = [],
}) {
  const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = absoluteUrl(pathname);
  const ogImage = absoluteUrl(image);
  const isDefaultImage = image === DEFAULT_IMAGE;

  const tags = [
    { title: pageTitle },
    { name: 'description', content: description },
    { name: 'author', content: 'Pandit Vikesh Kumar' },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'en_IN' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: isDefaultImage ? DEFAULT_IMAGE_ALT : pageTitle },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ];

  // Dimensions let WhatsApp/Facebook render the large preview on the first share.
  if (isDefaultImage) {
    tags.push(
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    );
  }

  if (type === 'article' && publishedTime) {
    tags.push({ property: 'article:published_time', content: publishedTime });
  }

  if (noindex) {
    tags.push({ name: 'robots', content: 'noindex, nofollow' });
  } else {
    const webPage = {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: pageTitle,
      description,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': BUSINESS_ID },
      inLanguage: 'en-IN',
    };
    tags.push({
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@graph': [...siteGraph, webPage, ...schema],
      },
    });
  }

  return tags;
}
