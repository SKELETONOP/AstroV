import { marked } from 'marked';

export interface ContentEntry {
  slug: string;
  data: Record<string, string>;
  html: string;
}

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, content: raw };

  const [, frontmatter, content] = match;
  const data: Record<string, string> = {};

  for (const line of frontmatter.split(/\r?\n/)) {
    const fieldMatch = /^([A-Za-z0-9_]+):\s*(.*)$/.exec(line);
    if (!fieldMatch) continue;
    let value = fieldMatch[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[fieldMatch[1]] = value;
  }

  return { data, content: content.trim() };
}

function loadCollection(modules: Record<string, string>): ContentEntry[] {
  return Object.entries(modules).map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const { data, content } = parseFrontmatter(raw);
    return { slug, data, html: marked.parse(content, { async: false }) as string };
  });
}

const blogModules = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const serviceModules = import.meta.glob('../content/services/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

export const blogPosts: ContentEntry[] = loadCollection(blogModules);
export const servicePages: ContentEntry[] = loadCollection(serviceModules);

export function getBlogPost(slug: string): ContentEntry | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getServicePage(slug: string): ContentEntry | undefined {
  return servicePages.find((s) => s.slug === slug);
}
