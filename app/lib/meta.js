const SITE_URL = 'https://www.mahakalijyotish.com';
const SITE_NAME = 'Mahakali Jyotish';
const DEFAULT_IMAGE = '/images/og-image.jpg';
const DEFAULT_IMAGE_ALT = 'Mahakali Jyotish by Pandit Vikesh Kumar — Vedic astrologer in New Delhi';

export function buildMeta({ title, description, pathname, image = DEFAULT_IMAGE, noindex = false }) {
  const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = new URL(pathname, SITE_URL).toString();
  const ogImage = new URL(image, SITE_URL).toString();
  const isDefaultImage = image === DEFAULT_IMAGE;

  const tags = [
    { title: pageTitle },
    { name: 'description', content: description },
    { name: 'author', content: 'Pandit Vikesh Kumar' },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { property: 'og:type', content: 'website' },
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

  if (noindex) tags.push({ name: 'robots', content: 'noindex, nofollow' });

  return tags;
}
