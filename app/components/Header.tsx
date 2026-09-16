import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import site from '../data/site.json';
import { serviceCategories } from '../lib/services';
import AppLink from './AppLink';
import Button from './Button';
import Icon, { type IconName } from './Icon';
import LogoMark from './LogoMark';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!megaOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMegaOpen(false);
    };
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [megaOpen]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-50/95 backdrop-blur-sm">
        <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
          <AppLink href="/" className="flex items-center gap-2 font-display text-lg font-bold text-neutral-900 lg:text-xl">
            <LogoMark size={40} className="h-9 w-9 lg:h-10 lg:w-10" />
            <span className="leading-tight">Astro Vikesh Kumar</span>
          </AppLink>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <AppLink href="/" className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900">
              Home
            </AppLink>

            <div className="relative" ref={megaRef}>
              <button
                type="button"
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                aria-expanded={megaOpen}
                aria-controls="services-mega-panel"
                onClick={() => setMegaOpen((v) => !v)}
              >
                Services
                <Icon name="ChevronDown" size={16} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
              </button>
              {megaOpen && (
                <div
                  id="services-mega-panel"
                  role="region"
                  aria-label="Services menu"
                  className="absolute left-1/2 top-full z-50 w-[min(90vw,780px)] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-3 gap-6 rounded-xl border border-neutral-200 bg-surface p-6 shadow-card">
                    {serviceCategories.map((cat) => (
                      <div key={cat.slug}>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent-700">{cat.name}</p>
                        <ul className="space-y-2">
                          {cat.items.map((item) => (
                            <li key={item.slug}>
                              <AppLink
                                href={`/services/${item.slug}`}
                                className="flex items-start gap-2 rounded-md p-1.5 text-sm text-neutral-700 hover:bg-accent-50 hover:text-accent-700"
                              >
                                <Icon name={item.icon as IconName} size={16} className="mt-0.5 shrink-0 text-accent-600" />
                                <span>{item.title}</span>
                              </AppLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <AppLink
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
              >
                {link.label}
              </AppLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <AppLink href={site.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-accent-700">
              <Icon name="Phone" size={18} className="text-accent-600" />
              {site.phone}
            </AppLink>
            <Button href="/contact" variant="primary" size="md">
              Consult Online
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-800 hover:bg-neutral-100 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Open menu</span>
            {mobileOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
          </button>
        </div>
      </header>

      {/*
        These two are deliberately siblings of <header>, not children of it.
        The header has `backdrop-blur-sm` (a backdrop-filter), and per the CSS spec an
        element with a filter/backdrop-filter/transform becomes the containing block for
        any `position: fixed` descendant — so a fixed drawer nested inside it would be
        positioned relative to the ~64px-tall header box instead of the viewport, and
        effectively disappear. Keeping them outside the header avoids that entirely.
      */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 transition-opacity duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
      />

      <div
        id="mobile-nav-panel"
        className={`fixed right-0 top-16 bottom-0 z-40 w-[85%] max-w-sm overflow-y-auto border-l border-neutral-200 bg-neutral-50 shadow-card transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-1 p-4">
          <AppLink href="/" className="rounded-md px-3 py-3 text-base font-medium text-neutral-800 hover:bg-neutral-100">
            Home
          </AppLink>

          <details className="group rounded-md">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-3 text-base font-medium text-neutral-800 hover:bg-neutral-100">
              Services
              <Icon name="ChevronDown" size={18} className="transition-transform group-open:rotate-180" />
            </summary>
            <div className="space-y-4 px-3 pb-3 pt-1">
              {serviceCategories.map((cat) => (
                <div key={cat.slug}>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent-700">{cat.name}</p>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li key={item.slug}>
                        <AppLink
                          href={`/services/${item.slug}`}
                          className="flex items-center gap-2 rounded-md py-2 text-sm text-neutral-700 hover:text-accent-700"
                        >
                          <Icon name={item.icon as IconName} size={16} className="text-accent-600" />
                          {item.title}
                        </AppLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>

          {navLinks.slice(1).map((link) => (
            <AppLink key={link.href} href={link.href} className="rounded-md px-3 py-3 text-base font-medium text-neutral-800 hover:bg-neutral-100">
              {link.label}
            </AppLink>
          ))}

          <div className="mt-3 flex flex-col gap-3 border-t border-neutral-200 pt-4">
            <AppLink href={site.phoneHref} className="flex items-center gap-2 text-base font-semibold text-neutral-800">
              <Icon name="Phone" size={18} className="text-accent-600" />
              {site.phone}
            </AppLink>
            <Button href="/contact" variant="primary" size="md" className="w-full">
              Consult Online
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
