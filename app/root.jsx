import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import PageLoader from './components/PageLoader';
import StickyMobileCTA from './components/StickyMobileCTA';
import stylesheetHref from './styles/global.css?url';

export const links = () => [
  { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&family=Dancing+Script:wght@600;700&display=swap',
  },
  { rel: 'stylesheet', href: stylesheetHref },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <PageLoader />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-neutral-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="container-page py-16 text-center">
      <h1 className="text-3xl font-extrabold text-neutral-900">{message}</h1>
      <p className="mt-4 text-neutral-600">{details}</p>
      {stack && (
        <pre className="mt-6 w-full overflow-x-auto rounded-lg border border-neutral-200 bg-surface p-4 text-left text-xs">
          <code>{stack}</code>
        </pre>
      )}
    </div>
  );
}
