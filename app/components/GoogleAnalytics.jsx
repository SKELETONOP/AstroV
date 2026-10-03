// Google Analytics 4 (gtag.js). Rendered only in production builds and only
// when VITE_GA_MEASUREMENT_ID is set, so local dev traffic isn't recorded.
// Client-side route changes are picked up by GA4's Enhanced Measurement
// ("Page changes based on browser history events"), so no manual page_view.
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  if (!import.meta.env.PROD || !measurementId) return null;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}');`,
        }}
      />
    </>
  );
}
