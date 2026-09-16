const SITE_URL = 'https://astrovikeshkumar.netlify.app';
const SITE_NAME = 'Astro Vikesh Kumar';

export function buildMeta({ title, description, pathname, image = '/images/og-default.svg', noindex = false }) {
  const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = new URL(pathname, SITE_URL).toString();
  const ogImage = new URL(image, SITE_URL).toString();

  const tags = [
    { title: pageTitle },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: ogImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ];

  if (noindex) tags.push({ name: 'robots', content: 'noindex, nofollow' });

  return tags;
}
