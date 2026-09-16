import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('contact', 'routes/contact.tsx'),
  route('disclaimer', 'routes/disclaimer.tsx'),
  route('faq', 'routes/faq.tsx'),
  route('privacy-policy', 'routes/privacy-policy.tsx'),
  route('sitemap', 'routes/sitemap.tsx'),
  route('blog', 'routes/blog._index.tsx'),
  route('blog/:slug', 'routes/blog.$slug.tsx'),
  route('services/:slug', 'routes/services.$slug.tsx'),
  route('locations/:city', 'routes/locations.$city.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
