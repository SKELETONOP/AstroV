import { useParams } from 'react-router';
import Button from '../components/Button';
import AppLink from '../components/AppLink';
import Icon from '../components/Icon';
import { getBlogPost } from '../lib/content';
import { buildMeta } from '../lib/meta';

const postImage = {
  'understanding-saturn-return': '/images/about-section-bg.png',
  'signs-of-negative-energy-at-home': '/images/philosophy-bg.png',
};

export const meta = ({ location, params }) => {
  const post = params.slug ? getBlogPost(params.slug) : undefined;
  if (!post) return buildMeta({ title: 'Article Not Found', description: 'This article could not be found.', pathname: location.pathname });
  return buildMeta({
    title: post.data.title,
    description: post.data.description,
    pathname: location.pathname,
    image: postImage[params.slug] ?? post.data.image,
  });
};

const dateFormatter = new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <div className="container-page py-16 text-center">
        <h1 className="text-2xl font-bold text-neutral-900">Article not found</h1>
        <AppLink href="/blog" className="mt-4 inline-block text-accent-700 hover:text-accent-800">
          Back to Blog
        </AppLink>
      </div>
    );
  }

  const { title, pubDate, imageAlt, author = 'Astro Vikesh Kumar' } = post.data;
  const image = (slug && postImage[slug]) ?? post.data.image;
  const parsedDate = new Date(pubDate);

  return (
    <article className="py-12 lg:py-16">
      <div className="container-page max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-neutral-500">
          <AppLink href="/blog" className="hover:text-accent-700">
            Blog
          </AppLink>
          <span className="mx-1" aria-hidden="true">
            /
          </span>
          <span className="text-neutral-700">{title}</span>
        </nav>
        <h1 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">{title}</h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-neutral-500">
          <span>{author}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={parsedDate.toISOString()}>{dateFormatter.format(parsedDate)}</time>
        </div>

        <img
          src={image}
          alt={imageAlt}
          width={1200}
          height={675}
          className="mt-8 aspect-video w-full rounded-2xl border border-accent-500/30 object-cover shadow-card"
        />

        <div className="prose-content mt-8 max-w-none" dangerouslySetInnerHTML={{ __html: post.html }} />

        <div className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-accent-200 bg-accent-50 p-8 text-center">
          <Icon name="Sparkles" size={26} className="text-accent-600" />
          <h2 className="text-xl font-semibold text-neutral-900">Have a question about your own chart?</h2>
          <p className="max-w-md text-sm text-neutral-600">
            Book a consultation for guidance tailored specifically to your situation.
          </p>
          <Button href="/contact" variant="primary" size="md">
            Book a Consultation
          </Button>
        </div>
      </div>
    </article>
  );
}
