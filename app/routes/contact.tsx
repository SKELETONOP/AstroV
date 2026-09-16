import { useRef, useState, type FormEvent } from 'react';
import type { MetaFunction } from 'react-router';
import Button from '../components/Button';
import Icon from '../components/Icon';
import site from '../data/site.json';
import { buildMeta } from '../lib/meta';

export const meta: MetaFunction = ({ location }) =>
  buildMeta({
    title: 'Contact Us',
    description:
      'Get in touch with Astro Vikesh Kumar for astrology, vashikaran, love problem and spiritual consultations. Available by phone, WhatsApp, email and online form.',
    pathname: location.pathname,
  });

const validators: Record<string, (value: string) => boolean> = {
  name: (v) => v.trim().length > 1,
  phone: (v) => /^[+\d][\d\s()-]{6,}$/.test(v.trim()),
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  message: (v) => v.trim().length > 4,
};

const fieldErrorMessage: Record<string, string> = {
  name: 'Please enter your name.',
  phone: 'Please enter a valid phone number.',
  email: 'Please enter a valid email address.',
  message: 'Please enter a short message.',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>('idle');

  const validateField = (name: string, value: string) => {
    const validator = validators[name];
    if (!validator) return;
    setErrors((prev) => ({ ...prev, [name]: !validator(value) }));
  };

  const validateForm = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const nextErrors: Record<string, boolean> = {};
    let valid = true;
    for (const field of Object.keys(validators)) {
      const value = String(data.get(field) ?? '');
      const fieldValid = validators[field](value);
      nextErrors[field] = !fieldValid;
      if (!fieldValid) valid = false;
    }
    setErrors(nextErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!validateForm(form)) return;

    setStatus('submitting');
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) throw new Error('Form submission failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50 py-12 lg:py-16">
        <div className="container-page">
          <h1 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-neutral-600">
            Send a message and we will get back to you, usually within a few hours. For urgent matters, call or
            message on WhatsApp directly.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-neutral-200 bg-surface p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-neutral-900">Contact Details</h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-3">
                  <Icon name="MapPin" size={18} className="mt-0.5 shrink-0 text-accent-600" />
                  <span>{site.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Phone" size={18} className="shrink-0 text-accent-600" />
                  <a href={site.phoneHref} className="hover:text-accent-700">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Mail" size={18} className="shrink-0 text-accent-600" />
                  <a href={`mailto:${site.email}`} className="hover:text-accent-700">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Clock" size={18} className="shrink-0 text-accent-600" />
                  <span>{site.hours}</span>
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 text-base font-semibold text-white hover:bg-green-700"
            >
              <Icon name="MessageCircle" size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-neutral-200 bg-surface p-6 shadow-soft sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
                    <Icon name="CheckCircle2" size={28} />
                  </span>
                  <h2 className="text-xl font-semibold text-neutral-900">Message sent</h2>
                  <p className="max-w-sm text-sm text-neutral-600">
                    Thank you for reaching out. We will get back to you shortly, usually within a few hours.
                  </p>
                </div>
              ) : (
                <>
                  {status === 'error' && (
                    <div className="mb-5 flex items-start gap-3 rounded-lg border border-danger/30 bg-danger/10 p-4 text-sm text-danger">
                      <Icon name="ShieldCheck" size={18} className="mt-0.5 shrink-0" />
                      <span>
                        Something went wrong sending your message. Please try again, or contact us directly by phone
                        or WhatsApp.
                      </span>
                    </div>
                  )}

                  <form
                    ref={formRef}
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="space-y-5"
                    noValidate
                    onSubmit={handleSubmit}
                    {...{ 'netlify-honeypot': 'bot-field' }}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>
                        Don&apos;t fill this out if you&apos;re human:{' '}
                        <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </p>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-800">
                        Full name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        onBlur={(e) => validateField('name', e.target.value)}
                        className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-200 ${
                          errors.name ? 'border-danger' : 'border-neutral-300 focus:border-accent-600'
                        }`}
                        aria-describedby="name-error"
                        aria-invalid={errors.name ?? false}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-sm text-danger">
                          {fieldErrorMessage.name}
                        </p>
                      )}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-800">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          onBlur={(e) => validateField('phone', e.target.value)}
                          className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-200 ${
                            errors.phone ? 'border-danger' : 'border-neutral-300 focus:border-accent-600'
                          }`}
                          aria-describedby="phone-error"
                          aria-invalid={errors.phone ?? false}
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && (
                          <p id="phone-error" className="mt-1 text-sm text-danger">
                            {fieldErrorMessage.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-800">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          onBlur={(e) => validateField('email', e.target.value)}
                          className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-200 ${
                            errors.email ? 'border-danger' : 'border-neutral-300 focus:border-accent-600'
                          }`}
                          aria-describedby="email-error"
                          aria-invalid={errors.email ?? false}
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-danger">
                            {fieldErrorMessage.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-800">
                        Your message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        onBlur={(e) => validateField('message', e.target.value)}
                        className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-200 ${
                          errors.message ? 'border-danger' : 'border-neutral-300 focus:border-accent-600'
                        }`}
                        aria-describedby="message-error"
                        aria-invalid={errors.message ?? false}
                        placeholder="Tell us briefly what you'd like guidance on..."
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-danger">
                          {fieldErrorMessage.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
