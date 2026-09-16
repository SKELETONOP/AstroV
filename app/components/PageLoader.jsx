import { useEffect, useState } from 'react';
import LogoMark from './LogoMark';

export default function PageLoader() {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (document.readyState === 'complete') {
      setStatus('ready');
      return;
    }

    const handleLoad = () => setStatus('ready');
    window.addEventListener('load', handleLoad);

    const fallback = setTimeout(() => setStatus('ready'), 8000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (status !== 'ready') return undefined;
    const timeout = setTimeout(() => setStatus('hidden'), 600);
    return () => clearTimeout(timeout);
  }, [status]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', status === 'loading');
    return () => document.body.classList.remove('overflow-hidden');
  }, [status]);

  if (status === 'hidden') return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5 bg-neutral-50 transition-opacity duration-500 ${
        status === 'ready' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 rounded-full border-2 border-accent-500/20" />
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent-600" />
        <span
          className="absolute inset-2 animate-spin rounded-full border border-dashed border-accent-500/40"
          style={{ animationDirection: 'reverse', animationDuration: '3s' }}
        />
        <LogoMark size={34} />
      </div>
      <p className="font-display text-sm italic tracking-[0.3em] text-accent-600/90">Aligning the Stars</p>
    </div>
  );
}
