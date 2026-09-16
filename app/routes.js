import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.jsx'),
  route('about', 'routes/about.jsx'),
  route('contact', 'routes/contact.jsx'),
  route('disclaimer', 'routes/disclaimer.jsx'),
  route('faq', 'routes/faq.jsx'),
  route('privacy-policy', 'routes/privacy-policy.jsx'),
  route('sitemap', 'routes/sitemap.jsx'),
  route('blog', 'routes/blog._index.jsx'),
  route('blog/:slug', 'routes/blog.$slug.jsx'),
  route('services/:slug', 'routes/services.$slug.jsx'),
  route('locations/:city', 'routes/locations.$city.jsx'),
  route('*', 'routes/not-found.jsx'),
];
