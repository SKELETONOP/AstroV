// Runs after `react-router build` (npm "postbuild"). Walks the prerendered HTML in
// build/client and writes sitemap.xml, so the sitemap always matches the pages that exist.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://www.mahakalijyotish.com';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'build', 'client');
const blogDir = path.join(root, 'app', 'content', 'blog');

if (!fs.existsSync(outDir)) {
  console.error(`[sitemap] ${outDir} not found — run the build first.`);
  process.exit(1);
}

// Blog posts carry a real publish date; other pages get no lastmod rather than a fake one.
const blogDates = Object.fromEntries(
  fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(blogDir, f), 'utf-8');
      const date = /^pubDate:\s*["']?([^"'\r\n]+)/m.exec(raw)?.[1];
      return [`/blog/${f.replace(/\.md$/, '')}`, date ? new Date(date).toISOString().slice(0, 10) : undefined];
    }),
);

function findPages(dir, urlPath = '') {
  const pages = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name === 'assets' || entry.name === 'images') continue;
      pages.push(...findPages(path.join(dir, entry.name), `${urlPath}/${entry.name}`));
    } else if (entry.name === 'index.html') {
      pages.push(urlPath || '/');
    }
  }
  return pages;
}

const priorityFor = (p) => {
  if (p === '/') return '1.0';
  if (p.startsWith('/services/')) return '0.9';
  if (p === '/contact' || p === '/about' || p === '/faq') return '0.8';
  if (p.startsWith('/blog')) return '0.7';
  if (p.startsWith('/locations/')) return '0.6';
  return '0.3';
};

const pages = findPages(outDir).sort((a, b) => Number(priorityFor(b)) - Number(priorityFor(a)) || a.localeCompare(b));

const urls = pages
  .map((p) => {
    const lastmod = blogDates[p] ? `\n    <lastmod>${blogDates[p]}</lastmod>` : '';
    return `  <url>\n    <loc>${SITE_URL}${p === '/' ? '/' : p}</loc>${lastmod}\n    <priority>${priorityFor(p)}</priority>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml);
console.log(`[sitemap] wrote ${pages.length} URLs to build/client/sitemap.xml`);
