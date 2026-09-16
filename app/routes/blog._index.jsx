import AppLink from '../components/AppLink';
import { blogPosts } from '../lib/content';
import { buildMeta } from '../lib/meta';

export const meta = ({ location }) =>
  buildMeta({
    title: 'Blog',
    description: 'Articles on astrology, spiritual remedies and everyday guidance from Astro Vikesh Kumar.',
    pathname: location.pathname,
  });

const dateFormatter = new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

const posts = [...blogPosts].sort(
  (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf(),
);

export default function BlogIndex() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50 py-12 lg:py-16">
        <div className="container-page">
          <h1 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-neutral-600">
            Practical, plain-language articles on astrology and spiritual guidance.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const pubDate = new Date(post.data.pubDate);
            return (
              <article key={post.slug} className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-surface shadow-soft">
                <AppLink href={`/blog/${post.slug}`}>
                  <img
                    src={post.data.image}
                    alt={post.data.imageAlt}
                    width={1200}
                    height={675}
                    className="h-44 w-full object-cover"
                  />
                </AppLink>
                <div className="flex flex-1 flex-col p-5">
                  <time dateTime={pubDate.toISOString()} className="text-xs font-medium uppercase tracking-wide text-accent-700">
                    {dateFormatter.format(pubDate)}
                  </time>
                  <h2 className="mt-2 text-lg font-semibold text-neutral-900">
                    <AppLink href={`/blog/${post.slug}`} className="hover:text-accent-700">
                      {post.data.title}
                    </AppLink>
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-neutral-600">{post.data.description}</p>
                  <AppLink href={`/blog/${post.slug}`} className="mt-4 text-sm font-semibold text-accent-700 hover:text-accent-800">
                    Read article
                  </AppLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
