import Button from '../components/Button';
import Carousel from '../components/Carousel';
import FaqAccordion from '../components/FaqAccordion';
import Icon from '../components/Icon';
import ServiceCard from '../components/ServiceCard';
import StatStrip from '../components/StatStrip';
import TestimonialCard from '../components/TestimonialCard';
import AppLink from '../components/AppLink';
import { buildMeta } from '../lib/meta';
import { allServices } from '../lib/services';

export const meta = ({ location }) =>
  buildMeta({
    title: 'Astro Vikesh Kumar — Astrology & Spiritual Consultation in Delhi',
    description:
      'Trusted astrology, vashikaran, black magic removal and love problem consultations from Pandit Vikesh Kumar. 20+ years of experience, available worldwide.',
    pathname: location.pathname,
  });

const stats = [
  { number: '20+', label: 'Years of Experience' },
  { number: '15,000+', label: 'Consultations Given' },
  { number: '40+', label: 'Countries Reached' },
  { number: '4.9/5', label: 'Average Client Rating' },
];

const testimonials = [
  {
    name: 'Ritika Sharma',
    location: 'Delhi, India',
    quote:
      'Vikesh ji explained my chart in a way I actually understood. The timing he gave for my job change turned out to be exactly right.',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    location: 'Toronto, Canada',
    quote: 'I was skeptical at first, but the consultation over video call was calm, clear and never felt like a sales pitch.',
    rating: 5,
  },
  {
    name: 'Farah Al-Sayed',
    location: 'Dubai, UAE',
    quote: 'The family guidance around our marriage was practical, not just spiritual. Things genuinely improved within weeks.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    location: 'Bengaluru, India',
    quote: 'Straightforward, respectful, and honest about what a remedy could and could not do. That honesty is rare.',
    rating: 4,
  },
];

const faqs = [
  {
    question: 'How does an online consultation work?',
    answer:
      'You share your birth details in advance, and we connect over a phone or video call at your scheduled time. You will receive clear guidance and, if relevant, a simple remedy to follow.',
  },
  {
    question: 'How soon can I expect results from a remedy?',
    answer:
      'This varies by situation, but most clients notice a shift within a few weeks of consistently following a prescribed remedy. You will be given a realistic timeline during your consultation.',
  },
  {
    question: 'Is my information kept confidential?',
    answer: 'Yes. Everything shared during a consultation, including birth details and personal circumstances, is kept strictly confidential.',
  },
  {
    question: 'Do you offer consultations outside India?',
    answer:
      'Yes, consultations are available worldwide over phone, WhatsApp and video call, including for clients in the UK, Canada, Australia, the Gulf and Singapore.',
  },
];

const trustBadges = [
  { icon: 'ShieldCheck', label: '100% Confidential', caption: 'Your Privacy Matters' },
  { icon: 'Leaf', label: 'Powerful Remedies', caption: 'For Real Solutions' },
  { icon: 'Users', label: 'Expert Guidance', caption: 'Backed by Experience' },
  { icon: 'TrendingUp', label: 'Positive Results', caption: 'A Brighter Tomorrow' },
  { icon: 'Clock', label: 'Timely Solutions', caption: 'When You Need It' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[100vh] overflow-hidden bg-neutral-50 lg:h-auto">
        <div className="absolute inset-0 bg-[url('/images/hero-bg-mobile.png')] bg-cover bg-[right_bottom] bg-no-repeat lg:bg-[url('/images/hero-bg.png')] lg:bg-[center_top]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/10 via-neutral-50/45 to-neutral-50/85 lg:hidden" />
        <div className="absolute inset-0 hidden from-neutral-50 via-neutral-50/85 to-neutral-50/20 lg:block" />

        <div className="container-page relative z-10 flex h-[90vh] flex-col justify-between py-6 lg:block lg:h-auto lg:py-9">
          <div className="max-w-xs sm:max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-50 px-3 py-1 text-sm font-medium text-accent-600">
              <Icon name="Sparkle" size={16} />
              Trusted guidance since 2004
            </p>

            <h1 className="mt-4 font-display text-2xl font-extrabold leading-tight text-neutral-900 sm:mt-6 sm:text-5xl lg:text-6xl">
              Clarity for life&apos;s hardest questions,{' '}
              <span className="text-accent-600">grounded in your own chart.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 sm:mt-5 sm:text-lg">
              Astro Vikesh Kumar offers honest, practical astrology and spiritual guidance on love, marriage, family and
              career — available in person in Delhi or online, worldwide.
            </p>

            <div className="mt-6 flex flex-row gap-2 sm:mt-8 sm:gap-3">
              <Button href="/contact" variant="primary" size="sm" className="sm:px-6 sm:py-3.5 sm:text-lg">
                <Icon name="Calendar" size={18} />
                <span className="lg:hidden">Consult</span>
                <span className="hidden lg:inline">Book a Consultation</span>
                <Icon name="ArrowRight" size={18} />
              </Button>
              <Button href="#services" variant="secondary" size="sm" className="sm:px-6 sm:py-3.5 sm:text-lg">
                <span className="lg:hidden">Services</span>
                <span className="hidden lg:inline">Explore Services</span>
                <Icon name="ArrowRight" size={18} />
              </Button>
            </div>
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2 sm:gap-8 lg:mx-0 lg:mt-10 lg:max-w-xl lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {trustBadges.map((item) => (
              <div key={item.label} className="flex w-24 shrink-0 snap-start flex-col items-center text-center sm:w-28">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/40 bg-accent-50 text-accent-600 sm:h-14 sm:w-14">
                  <Icon name={item.icon} size={22} />
                </span>
                <p className="mt-2 text-xs font-semibold text-neutral-800 sm:text-sm">{item.label}</p>
                <p className="text-[11px] text-neutral-500">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro content block */}
      <section className="border-t border-neutral-200 bg-surface py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <h2 className="text-2xl font-bold text-neutral-900 lg:col-span-1">
            Guidance rooted in tradition, delivered with honesty
          </h2>
          <div className="lg:col-span-2">
            <p className="text-base leading-7 text-neutral-600">
              For over two decades, Pandit Vikesh Kumar has helped clients across India and abroad navigate difficult
              decisions in love, marriage, family and career. Every consultation begins with listening, not a
              prescribed ritual — remedies are only ever suggested when your chart genuinely calls for them.
            </p>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Whether you need a single, focused answer or an ongoing relationship with a trusted advisor, sessions are
              available over phone, WhatsApp, video call or in person at the Delhi office.
            </p>
          </div>
        </div>
      </section>

      {/* Services carousel */}
      <section id="services" className="border-t border-neutral-200 bg-neutral-50 py-14 lg:py-20 scroll-mt-20">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Our Services</h2>
              <p className="mt-2 max-w-xl text-neutral-600">
                Focused consultations across astrology, vashikaran, protection, love, family and healing.
              </p>
            </div>
          </div>
          <Carousel ariaLabel="Services carousel" className="mt-8">
            {allServices.map((service) => (
              <div key={service.slug} className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[31%]">
                <ServiceCard icon={service.icon} title={service.title} description={service.summary} slug={service.slug} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-neutral-200 bg-surface py-14 lg:py-16">
        <div className="container-page">
          <StatStrip stats={stats} />
        </div>
      </section>

      {/* Testimonials carousel */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-14 lg:py-20">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">What Clients Say</h2>
          <p className="mt-2 max-w-xl text-neutral-600">
            Real feedback from consultations held in Delhi and worldwide over video and phone.
          </p>
          <Carousel ariaLabel="Testimonials carousel" className="mt-8">
            {testimonials.map((t) => (
              <div key={t.name} className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[31%]">
                <TestimonialCard name={t.name} location={t.location} quote={t.quote} rating={t.rating} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* About / bio */}
      <section className="border-t border-neutral-200 bg-surface py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src="/images/about.svg"
            alt="Abstract illustration representing decades of astrological study"
            width={900}
            height={700}
            className="w-full rounded-2xl border border-neutral-200 shadow-card"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-700">About Pandit Vikesh Kumar</p>
            <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
              Two decades of study, thousands of consultations, one consistent approach
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Trained in traditional Vedic astrology and spiritual practice, Vikesh Kumar has spent more than 20 years
              helping clients work through relationship conflict, family pressure, career uncertainty and matters of
              health and wellbeing.
            </p>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              His approach favours plain explanation over mystique — clients leave a consultation understanding
              exactly what their chart shows and why a particular remedy has been suggested.
            </p>
            <Button href="/about" variant="ghost" size="md" className="mt-6">
              Read the full story
              <Icon name="ArrowRight" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-14 lg:py-20">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Frequently Asked Questions</h2>
          <p className="mt-2 text-neutral-600">Answers to the questions we hear most often.</p>
          <div className="mt-8">
            <FaqAccordion items={faqs} idPrefix="home-faq" />
          </div>
          <div className="mt-6 text-center">
            <AppLink href="/faq" className="text-sm font-semibold text-accent-700 hover:text-accent-800">
              View all FAQs
            </AppLink>
          </div>
        </div>
      </section>
    </>
  );
}
