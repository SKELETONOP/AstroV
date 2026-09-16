import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const readJSON = (relPath) => JSON.parse(fs.readFileSync(`${root}${relPath}`, 'utf-8'));

const cities = readJSON('app/data/cities.json');
const servicesData = readJSON('app/data/services.json');

const serviceSlugs = servicesData.categories.flatMap((cat) => cat.items.map((item) => item.slug));
const blogSlugs = fs
  .readdirSync(`${root}app/content/blog`)
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace(/\.md$/, ''));

export default {
  ssr: false,
  async prerender() {
    return [
      '/',
      '/about',
      '/contact',
      '/disclaimer',
      '/faq',
      '/privacy-policy',
      '/sitemap',
      '/blog',
      ...blogSlugs.map((slug) => `/blog/${slug}`),
      ...serviceSlugs.map((slug) => `/services/${slug}`),
      ...cities.map((city) => `/locations/${city.slug}`),
    ];
  },
};
