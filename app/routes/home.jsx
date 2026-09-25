import { Fragment, useEffect, useState } from "react";
import AwardHighlight from "../components/AwardHighlight";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import FaqAccordion from "../components/FaqAccordion";
import Icon from "../components/Icon";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import AppLink from "../components/AppLink";
import { buildMeta } from "../lib/meta";
import { allServices } from "../lib/services";

export const meta = ({ location }) =>
  buildMeta({
    title: "Astro Vikesh Kumar — Astrology & Spiritual Consultation in Delhi",
    description:
      "Trusted astrology, vashikaran, black magic removal and love problem consultations from Pandit Vikesh Kumar. 20+ years of experience, available worldwide.",
    pathname: location.pathname,
  });

const stats = [
  { icon: "Users", number: "20+", label: "Years of Experience" },
  { icon: "Flower2", number: "15,000+", label: "Consultations Given" },
  { icon: "Globe", number: "40+", label: "Countries Reached" },
  { icon: "Star", number: "4.9/5", label: "Average Client Rating" },
];

const testimonials = [
  {
    name: "Ritika Sharma",
    location: "Delhi, India",
    quote:
      "Vikesh ji explained my chart in a way I actually understood. The timing he gave for my job change turned out to be exactly right.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    location: "Toronto, Canada",
    quote:
      "I was skeptical at first, but the consultation over video call was calm, clear and never felt like a sales pitch.",
    rating: 5,
  },
  {
    name: "Farah Al-Sayed",
    location: "Dubai, UAE",
    quote:
      "The family guidance around our marriage was practical, not just spiritual. Things genuinely improved within weeks.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    location: "Bengaluru, India",
    quote:
      "Straightforward, respectful, and honest about what a remedy could and could not do. That honesty is rare.",
    rating: 4,
  },
];

const faqs = [
  {
    icon: "MessageCircle",
    question: "How does an online consultation work?",
    answer:
      "You share your birth details in advance, and we connect over a phone or video call at your scheduled time. You will receive clear guidance and, if relevant, a simple remedy to follow.",
  },
  {
    icon: "Clock",
    question: "How soon can I expect results from a remedy?",
    answer:
      "This varies by situation, but most clients notice a shift within a few weeks of consistently following a prescribed remedy. You will be given a realistic timeline during your consultation.",
  },
  {
    icon: "ShieldCheck",
    question: "Is my information kept confidential?",
    answer:
      "Yes. Everything shared during a consultation, including birth details and personal circumstances, is kept strictly confidential.",
  },
  {
    icon: "Globe",
    question: "Do you offer consultations outside India?",
    answer:
      "Yes, consultations are available worldwide over phone, WhatsApp and video call, including for clients in the UK, Canada, Australia, the Gulf and Singapore.",
  },
];

const philosophyStats = [
  { icon: "Users", label: "20+ Years", caption: "Of Trust" },
  { icon: "Flower2", label: "Thousands", caption: "Of Happy Clients" },
  { icon: "ShieldCheck", label: "Honest Guidance", caption: "Always" },
  { icon: "Globe", label: "Clients Worldwide", caption: "India & Abroad" },
];

const trustBadges = [
  {
    icon: "ShieldCheck",
    label: "100% Confidential",
    caption: "Your Privacy Matters",
  },
  { icon: "Leaf", label: "Powerful Remedies", caption: "For Real Solutions" },
  { icon: "Users", label: "Expert Guidance", caption: "Backed by Experience" },
  {
    icon: "TrendingUp",
    label: "Positive Results",
    caption: "A Brighter Tomorrow",
  },
  { icon: "Clock", label: "Timely Solutions", caption: "When You Need It" },
];

const aboutHighlights = [
  { icon: "Flower2", label: "Traditional", caption: "Knowledge" },
  { icon: "Users", label: "Thousands", caption: "of Happy Clients" },
  { icon: "Sun", label: "Practical", caption: "Solutions" },
];

export default function Home() {
  const [heroGifSrc, setHeroGifSrc] = useState(null);
  const [heroGifLoaded, setHeroGifLoaded] = useState(false);
  const [heroMobileGifSrc, setHeroMobileGifSrc] = useState(null);
  const [heroMobileGifLoaded, setHeroMobileGifLoaded] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (connection) {
      const isSlow = ["slow-2g", "2g"].includes(connection.effectiveType);
      if (connection.saveData || isSlow) return;
    }

    setHeroGifSrc("/images/hero-bg.gif");
    setHeroMobileGifSrc("/images/hero-bg-mobile.gif");
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden bg-neutral-50 lg:h-auto">
        <div className="absolute inset-0 bg-[url('/images/hero-bg-mobile.png')] bg-cover bg-[right_bottom] bg-no-repeat lg:bg-[url('/images/hero-bg.png')] lg:bg-[center_top]" />
        {heroMobileGifSrc && (
          <img
            src={heroMobileGifSrc}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            onLoad={() => setHeroMobileGifLoaded(true)}
            className={`absolute inset-0 block h-full w-full object-cover object-bottom-right transition-opacity duration-700 ease-out lg:hidden ${
              heroMobileGifLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        {heroGifSrc && (
          <img
            src={heroGifSrc}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            onLoad={() => setHeroGifLoaded(true)}
            className={`absolute inset-0 hidden h-full w-full object-cover object-top transition-opacity duration-700 ease-out lg:block ${
              heroGifLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/10 via-neutral-50/45 to-neutral-50/85 lg:hidden" />
        <div className="absolute inset-0 hidden from-neutral-50 via-neutral-50/85 to-neutral-50/20 lg:block" />

        <div className="container-page relative z-10 flex h-[90vh] flex-col justify-between py-6 lg:block lg:h-auto lg:py-9">
          <div className="max-w-xs sm:max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-50 px-3 py-1 text-sm font-medium text-accent-600">
              <Icon name="Sparkle" size={16} />
              Trusted guidance since 2004
            </p>

            <h1 className="mt-4 font-display text-2xl font-extrabold leading-tight text-neutral-900 sm:mt-6 sm:text-5xl lg:text-6xl">
              Clarity for life&apos;s hardest questions,{" "}
              <span className="text-accent-600">
                grounded in your own chart.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 sm:mt-5 sm:text-lg">
              Astro Vikesh Kumar offers honest, practical astrology and
              spiritual guidance on love, marriage, family and career —
              available in person in Delhi or online, worldwide.
            </p>

            <div className="mt-6 flex flex-row gap-2 sm:mt-8 sm:gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="sm:px-6 sm:py-3.5 sm:text-lg"
              >
                <Icon name="Calendar" size={18} />
                <span className="lg:hidden">Consult</span>
                <span className="hidden lg:inline">Book a Consultation</span>
                <Icon name="ArrowRight" size={18} />
              </Button>
              <Button
                href="#services"
                variant="secondary"
                size="sm"
                className="sm:px-6 sm:py-3.5 sm:text-lg"
              >
                <span className="lg:hidden">Services</span>
                <span className="hidden lg:inline">Explore Services</span>
                <Icon name="ArrowRight" size={18} />
              </Button>
            </div>
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2 sm:gap-8 lg:mx-0 lg:mt-10 lg:max-w-xl lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {trustBadges.map((item) => (
              <div
                key={item.label}
                className="flex w-24 shrink-0 snap-start flex-col items-center text-center sm:w-28"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/40 bg-accent-50 text-accent-600 sm:h-14 sm:w-14">
                  <Icon name={item.icon} size={22} />
                </span>
                <p className="mt-2 text-xs font-semibold text-neutral-800 sm:text-sm">
                  {item.label}
                </p>
                <p className="text-[11px] text-neutral-500">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / philosophy block */}
      <section className="relative overflow-hidden border-t border-neutral-200 bg-[url('/images/philosophy-bg-mobile.png')] bg-cover bg-center py-16 lg:bg-[url('/images/philosophy-bg.png')] lg:bg-cover lg:bg-center lg:py-28">
        <div className="container-page relative z-10">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-700">
                <span className="h-px w-8 bg-accent-600/50" />
                Our Philosophy
                <span className="h-px w-8 bg-accent-600/50" />
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                Guidance rooted in tradition, delivered{" "}
                <span className="text-accent-600">with honesty</span>
              </h2>
              <div className="mt-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-accent-600/30" />
                <Icon
                  name="Sparkle"
                  size={20}
                  className="shrink-0 text-accent-600"
                />
                <span className="h-px flex-1 bg-accent-600/30" />
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-base leading-7 text-neutral-600">
                For over two decades, Pandit Vikesh Kumar has helped clients
                across India and abroad navigate difficult decisions in love,
                marriage, family and career. Every consultation begins with
                listening, not a prescribed ritual — remedies are only ever
                suggested when your chart genuinely calls for them.
              </p>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                Whether you need a single, focused answer or an ongoing
                relationship with a trusted advisor, sessions are available over
                phone, WhatsApp, video call or in person at the Delhi office.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-neutral-900/10">
                {philosophyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center sm:px-6 sm:first:pl-0"
                  >
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent-500/50 text-accent-600">
                      <Icon name={stat.icon} size={22} />
                    </span>
                    <p className="mt-3 font-display text-lg font-bold text-neutral-900">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide text-neutral-500">
                      {stat.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services carousel */}
      <section
        id="services"
        className="relative overflow-hidden border-t border-neutral-200 bg-[url('/images/services-bg-mobile.png')] bg-cover bg-center py-16 scroll-mt-20 lg:bg-[url('/images/services-bg.png')] lg:bg-cover lg:bg-center lg:py-24"
      >
        <div className="container-page relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-700">
              <span className="h-px w-8 bg-accent-600/50" />
              Our Services
              <span className="h-px w-8 bg-accent-600/50" />
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              Guidance for every chapter of{" "}
              <span className="text-accent-600">your life</span>
            </h2>
            <p className="mt-4 text-neutral-600">
              Focused consultations across astrology, vashikaran, protection,
              love, family and healing.
            </p>
          </div>
          <Carousel ariaLabel="Services carousel" className="mt-10 lg:mt-14">
            {allServices.map((service) => (
              <div
                key={service.slug}
                className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[31%]"
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.summary}
                  slug={service.slug}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden border-t border-neutral-200 bg-[url('/images/stats-bg-mobile.png')] bg-cover bg-center py-16 lg:bg-[url('/images/stats-bg.png')] lg:bg-cover lg:bg-center lg:py-20">
        <div className="container-page relative z-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:flex sm:items-stretch sm:justify-center sm:gap-0">
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && (
                  <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center sm:px-8 lg:px-12">
                    <span className="h-6 w-px bg-accent-500/30" />
                    <Icon
                      name="Sparkle"
                      size={14}
                      className="my-1.5 text-accent-500/70"
                    />
                    <span className="h-6 w-px bg-accent-500/30" />
                  </div>
                )}
                <div className="flex flex-1 flex-col items-center text-center">
                  <span className="relative flex h-16 w-16 items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-dashed border-accent-500/30" />
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/60 text-accent-600">
                      <Icon name={stat.icon} size={22} />
                    </span>
                  </span>
                  <p className="mt-4 font-display text-3xl font-extrabold text-accent-600 sm:text-4xl">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-sm text-neutral-900">{stat.label}</p>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="h-px w-6 bg-accent-500/40" />
                    <Icon
                      name="Sparkle"
                      size={10}
                      className="text-accent-500/70"
                    />
                    <span className="h-px w-6 bg-accent-500/40" />
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Award & recognition */}
      <AwardHighlight />

      {/* Testimonials carousel */}
      <section className="relative overflow-hidden border-t border-neutral-200 bg-[url('/images/testimonials-bg-mobile.png')] bg-cover bg-center py-16 lg:bg-[url('/images/testimonials-bg.png')] lg:bg-cover lg:bg-center lg:py-24">
        <div className="container-page relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-accent-500/30" />
              <Icon
                name="Flower2"
                size={18}
                className="shrink-0 text-accent-600"
              />
              <span className="h-px w-16 bg-accent-500/30" />
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              What Clients Say
            </h2>
            <p className="mt-4 text-neutral-600">
              Real feedback from consultations held in Delhi and worldwide over
              video and phone.
            </p>
          </div>
          <Carousel
            ariaLabel="Testimonials carousel"
            className="mt-10 lg:mt-14"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[31%]"
              >
                <TestimonialCard
                  name={t.name}
                  location={t.location}
                  quote={t.quote}
                  rating={t.rating}
                />
              </div>
            ))}
          </Carousel>
          <div className="mt-10 flex items-center justify-center gap-3 text-sm italic tracking-wide text-accent-600/80 sm:justify-end">
            <span className="h-px w-10 bg-accent-500/30" />
            Guided by the Stars
            <span className="h-px w-10 bg-accent-500/30" />
          </div>
        </div>
      </section>

      {/* About / bio */}
      <section className="relative overflow-hidden border-t border-neutral-200 bg-[url('/images/about-section-bg-mobile.png')] bg-cover bg-center py-16 lg:bg-[url('/images/about-section-bg.png')] lg:bg-cover lg:bg-center lg:py-24">
        <div className="pointer-events-none absolute inset-y-0 left-3 hidden items-center lg:flex">
          <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-semibold uppercase tracking-[0.3em] text-accent-600/80">
            Ancient Wisdom for a Brighter Tomorrow
          </span>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-3 hidden flex-col items-center justify-center gap-3 lg:flex">
          <span className="h-16 w-px bg-accent-500/30" />
          <Icon
            name="Sparkle"
            size={12}
            className="shrink-0 text-accent-500/70"
          />
          <span className="[writing-mode:vertical-rl] text-xs font-semibold uppercase tracking-[0.3em] text-accent-600/80">
            Align &middot; Heal &middot; Prosper
          </span>
          <Icon
            name="Sparkle"
            size={12}
            className="shrink-0 text-accent-500/70"
          />
          <span className="h-16 w-px bg-accent-500/30" />
        </div>

        <div className="container-page relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:px-10">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <img
                src="/images/about-portrait.png"
                alt="Pandit Vikesh Kumar seated at his desk with a zodiac wheel behind him"
                width={900}
                height={900}
                className="aspect-square w-full rounded-2xl border border-accent-500/40 object-cover shadow-card"
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-700">
                About Pandit Vikesh Kumar
                <span className="h-px w-10 bg-accent-600/50" />
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">
                Two decades of study, thousands of consultations, one consistent
                approach
              </h2>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                Trained in traditional Vedic astrology and spiritual practice,
                Vikesh Kumar has spent more than 20 years helping clients work
                through relationship conflict, family pressure, career
                uncertainty and matters of health and wellbeing.
              </p>
              <p className="mt-4 text-base leading-7 text-neutral-600">
                His approach favours plain explanation over mystique — clients
                leave a consultation understanding exactly what their chart
                shows and why a particular remedy has been suggested.
              </p>
              <Button
                href="/about"
                variant="primary"
                size="md"
                className="mt-6"
              >
                Read the full story
                <Icon name="ArrowRight" size={16} />
              </Button>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 lg:flex lg:flex-nowrap lg:items-center lg:divide-x lg:divide-accent-500/20">
                {aboutHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 lg:pl-6 lg:first:pl-0"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent-500/50 text-accent-600">
                      <Icon name={item.icon} size={18} />
                    </span>
                    <p className="text-xs font-semibold uppercase leading-snug tracking-wide text-neutral-900">
                      {item.label}
                      <br />
                      <span className="text-neutral-500">{item.caption}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden border-t border-neutral-200 bg-[url('/images/faq-bg-mobile.png')] bg-cover bg-center py-16 lg:bg-[url('/images/faq-bg.png')] lg:bg-cover lg:bg-center lg:py-24">
        <div className="container-page relative z-10 max-w-3xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-accent-500/30" />
              <Icon
                name="Flower2"
                size={18}
                className="shrink-0 text-accent-600"
              />
              <span className="h-px w-16 bg-accent-500/30" />
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              Frequently Asked{" "}
              <span className="text-accent-600">Questions</span>
            </h2>
            <p className="mt-4 text-neutral-600">
              Answers to the questions we hear most often.
            </p>
          </div>

          <div className="mt-10">
            <FaqAccordion items={faqs} idPrefix="home-faq" />
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="hidden items-center gap-2 sm:flex">
              <span className="h-px w-16 bg-accent-500/30" />
              <Icon
                name="Sparkle"
                size={10}
                className="shrink-0 text-accent-500/70"
              />
            </span>
            <AppLink
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full border border-accent-500/50 px-6 py-2.5 text-sm font-semibold text-accent-600 hover:bg-accent-50/10"
            >
              View all FAQs
              <Icon name="ArrowRight" size={14} />
            </AppLink>
            <span className="hidden items-center gap-2 sm:flex">
              <Icon
                name="Sparkle"
                size={10}
                className="shrink-0 text-accent-500/70"
              />
              <span className="h-px w-16 bg-accent-500/30" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
