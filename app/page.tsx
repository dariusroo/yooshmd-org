"use client";

import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "./lib/LanguageContext";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <TableOfContents />
        <WhySection />
        <HowItWorks />
        <Pricing />
        <MedicationOptions />
        <Reviews />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Navigation ──────────────────────────────────────────────── */

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <span
            className="text-2xl sm:text-3xl font-bold tracking-tight"
            style={{ color: "var(--green-deep)" }}
          >
            YooshMD
          </span>
        </a>

        {/* Actions — grouped together on the right */}
        <div className="flex items-center gap-2 sm:gap-4">
          <BookButton href="https://intakeq.com/new/tfe8ap" location="nav" size="sm" color="green">
            <span className="sm:hidden">{t.nav.bookShort}</span>
            <span className="hidden sm:inline">{t.nav.bookFull}</span>
          </BookButton>

          {/* Menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="nav-links-panel"
            className="flex-shrink-0 flex items-center justify-center h-9 px-4 rounded-full text-sm font-bold text-gray-600 bg-gray-100 hover:text-gray-900 hover:bg-gray-200 transition-colors"
          >
            {t.nav.menu}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="nav-links-panel"
          className="border-t border-gray-100 bg-white"
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex flex-col items-end gap-3">
            <a
              href="https://mqiu0i.intakeq.com/portal"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.nav.patientPortal}
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.nav.pricing}
            </a>
            <a
              href="#reviews"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.nav.faq}
            </a>
            <a
              href="https://blog.yooshmd.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.nav.blog}
            </a>
          </div>
        </div>
      )}

      {/* Phone — below the dropdown menu */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-between">
          <a
            href="tel:+19092938095"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {t.nav.phone}
          </a>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────────── */

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-white pt-6 pb-12 sm:pt-10 sm:pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* Text column */}
          <div className="flex-1 min-w-0">
            <FadeIn>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-5"
                style={{ color: "var(--green-mid)" }}
              >
                {withDagger(t.hero.eyebrow)}
              </p>

              {/* Hero image — mobile only, shown above the headline */}
              <div className="block lg:hidden mb-4">
                <Image
                  src="/hero-art.avif"
                  alt="Illustration representing physician-guided weight loss care"
                  width={520}
                  height={620}
                  className="w-full h-auto rounded-3xl object-cover"
                  priority
                />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                {t.hero.titlePre}
                <span className="italic" style={{ color: "var(--green-deep)" }}>
                  {t.hero.titleEmph}
                </span>
                {t.hero.titlePost}
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                {t.hero.subheadPre}
                <span className="underline">{t.hero.subheadEmph}</span>
                {t.hero.subheadPost}
              </p>
            </FadeIn>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <BookButton href="https://intakeq.com/new/tfe8ap" location="hero" size="lg">
                {t.hero.ctaBook}
              </BookButton>
              <a
                href="tel:+19092938095"
                className="inline-flex items-center justify-center h-13 px-6 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-base hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                {t.hero.ctaCall}
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 mb-10">
              {t.hero.checklist.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

            {/* Doctor credential card */}
            <div
              className="inline-flex items-center gap-4 rounded-2xl px-5 py-4 border"
              style={{
                backgroundColor: "var(--green-light)",
                borderColor: "var(--green-border)",
              }}
            >
              <Image
                src="/dr-roohani.jpeg"
                alt="Dr. Darius Roohani, MD"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  {t.hero.doctorName}
                </p>
                <p className="text-sm text-gray-600">
                  {t.hero.doctorCred}
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-center sm:justify-start">
              <a
                href="#reviews"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold text-white transition-opacity hover:opacity-90 h-9 px-4 text-sm"
                style={{ backgroundColor: "var(--green-deep)" }}
              >
                {t.hero.readMore}
              </a>
            </div>
          </div>

          {/* Hero image — desktop only */}
          <div className="hidden lg:block mt-10 lg:mt-0 flex-shrink-0 w-full lg:w-[460px] xl:w-[520px]">
            <Image
              src="/hero-art.avif"
              alt="Illustration representing physician-guided weight loss care"
              width={520}
              height={620}
              className="w-full h-auto rounded-3xl object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Trust Bar ───────────────────────────────────────────────── */

function TrustBar() {
  const { t } = useLanguage();
  const items = t.trustBar;

  return (
    <section
      className="border-y"
      style={{
        backgroundColor: "var(--green-light)",
        borderColor: "var(--green-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.value} className="text-center">
              <p
                className="text-lg sm:text-2xl font-bold"
                style={{ color: "var(--green-deep)" }}
              >
                {item.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">
                {withDagger(item.label)}
              </p>
              <p className="text-sm text-gray-500 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">{withDagger(t.trustBarDisclaimer)}</p>
      </div>
    </section>
  );
}

/* ─── Why Section ─────────────────────────────────────────────── */

function WhySection() {
  const { t } = useLanguage();

  return (
    <section id="why" className="bg-white scroll-mt-[102px] pt-12 sm:pt-16 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 min-w-0">
            <FadeIn className="max-w-2xl mb-12">
              <SectionLabel>{t.why.eyebrow}</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight">
                {t.why.heading}
              </h2>
              <p className="text-lg text-gray-600 mt-5 leading-relaxed">
                {t.why.body}
              </p>
            </FadeIn>

            <div className="max-w-xl">
              <CompareCard
                type="us"
                title={t.why.cardTitle}
                points={t.why.points}
              />
            </div>
          </div>

          {/* Image — desktop only */}
          <div className="hidden lg:block mt-10 lg:mt-0 flex-shrink-0 w-full lg:w-[460px] xl:w-[520px]">
            <Image
              src="/subhero-image.png"
              alt="YooshMD telehealth weight loss consultation"
              width={1254}
              height={1254}
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareCard({
  type,
  title,
  points,
}: {
  type: "other" | "us";
  title: string;
  points: readonly string[];
}) {
  const isUs = type === "us";
  return (
    <div
      className={`rounded-2xl p-7 border transition-transform duration-300 hover:scale-[1.03] ${
        isUs
          ? "border-green-deep text-white"
          : "border-gray-100 bg-gray-50 text-gray-700"
      }`}
      style={
        isUs
          ? { backgroundColor: "var(--green-deep)", borderColor: "var(--green-deep)" }
          : undefined
      }
    >
      <p
        className={`text-xs font-bold uppercase tracking-widest mb-4 ${
          isUs ? "text-white/70" : "text-gray-400"
        }`}
      >
        {title}
      </p>
      <ul className="space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm">
            {isUs ? (
              <span className="mt-0.5 text-white/70 flex-shrink-0">✓</span>
            ) : (
              <span className="mt-0.5 text-gray-300 flex-shrink-0">✗</span>
            )}
            <span className={isUs ? "text-white" : "text-gray-600"}>
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── How It Works ────────────────────────────────────────────── */

function HowItWorks() {
  const { t } = useLanguage();
  const steps = t.howItWorks.steps;

  return (
    <section
      id="how-it-works"
      className="scroll-mt-[102px] pt-12 sm:pt-16 pb-20 sm:pb-28"
      style={{ backgroundColor: "var(--green-light)" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn className="max-w-xl mb-12">
          <SectionLabel>{t.howItWorks.eyebrow}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight">
            {t.howItWorks.heading}
          </h2>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step) => (
            <div
              key={step.n}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-1.3333rem)] bg-white rounded-2xl p-7 border border-gray-100 transition-transform duration-300 hover:scale-[1.03]"
            >
              <span
                className="text-4xl font-bold tabular-nums"
                style={{ color: "var(--green-border)" }}
              >
                {step.n}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-2 max-w-3xl">
          {t.howItWorks.footnotes.map((note) => (
            <p key={note} className="text-xs text-gray-400 leading-relaxed">
              {note}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Reviews ─────────────────────────────────────────────────── */

function Reviews() {
  const { t } = useLanguage();
  // Review quotes are direct attributed patient testimonials from ZocDoc and
  // are intentionally left in English in both language modes.
  const reviews = [
    {
      initials: "GY",
      quote:
        "He reviewed my medications and identified some that could be causing weight gain. No one had ever discussed this with me before. He was very thoughtful and helped me with weight loss. I highly recommend his services.",
    },
    {
      initials: "SS",
      quote:
        "Dr. Roohani is the kindest and most diligent doctor I've ever worked with. I was anxious about both starting a new medication and my weight loss journey, but he made me feel comfortable from the very first visit. He took the time to answer all of my questions and laid out a clear plan tailored to my goals. He's been with me every step of the way, checking in and adjusting things as needed.",
    },
    {
      initials: "AS",
      quote:
        "My insurance wouldn't cover weight loss meds so I found this doctor and gave it a shot. I was absolutely impressed with the experience and results. He talked to me for longer than any doctor I've ever had, helped explain how to get cost effective meds, and has been with me every step of the way. He's very practical and honest, with nonstop recommendations on diet, calorie count, exercise, and medication.",
    },
    {
      initials: "AA",
      quote:
        "Working with Dr. Roohani felt very different from my past experiences. He was patient, attentive, and made sure the plan actually fit into my routine.",
    },
    {
      initials: "CI",
      quote:
        "Dr. Roohani was very easy to talk to and didn't make me feel judged at all. He explained my options clearly and helped me come up with a plan that actually feels doable. I appreciated that he focuses on long-term results, not just quick fixes.",
    },
    {
      initials: "SE",
      quote:
        "Dr. Roohani has been a huge help in my weight loss journey. He really took my PCOS into account and made sure my plan actually made sense for me. I appreciate that he doesn't just focus on medication. With his help, I now have a realistic nutrition plan that I can stick to. You can tell he genuinely cares and listens.",
    },
    {
      initials: "SE",
      quote:
        "Dr. Roohani really understands how challenging obesity can be. He takes a practical, no-judgment approach and focuses on what actually works long term. I've felt supported the whole way and have finally been able to make steady progress.",
    },
    {
      initials: "ME",
      quote:
        "I was honestly embarrassed to even bring it up, but Dr. Roohani made the whole experience completely judgment-free. He was straightforward, respectful, and focused on what would actually work for me.",
    },
    {
      initials: "MS",
      quote:
        "At 54, I didn't think weight loss would be realistic for me anymore, but Dr. Roohani proved me wrong. He created a plan that actually fits my lifestyle and pace, and nothing feels extreme or overwhelming. I've been able to make steady progress and feel better than I have in years.",
    },
  ];

  return (
    <section id="reviews" className="bg-white scroll-mt-[102px] pt-12 sm:pt-16 pb-10 sm:pb-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">

          {/* Header + marquee column */}
          <div className="flex-1 min-w-0">
            <FadeIn className="mb-10">
              <SectionLabel>{t.reviews.eyebrow}</SectionLabel>
              <div className="flex items-center gap-2 mt-4">
                <StarRow />
                <span className="font-bold text-gray-900 text-xl">5.0 / 5</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {t.reviews.verifiedFrom}{" "}
                <a
                  href="https://www.zocdoc.com/doctor/darius-roohani-md-720799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700 transition-colors"
                >
                  {t.reviews.zocdoc}
                </a>
              </p>
            </FadeIn>

            {/* Reviews marquee — clipped to this column's width */}
            <div className="overflow-hidden mb-8 lg:mb-0">
              <div className="flex w-max gap-5 animate-marquee">
                {[...reviews, ...reviews].map((r, i) => (
                  <blockquote
                    key={i}
                    className="w-[320px] flex-shrink-0 rounded-2xl p-6 border border-gray-100 bg-gray-50 text-gray-700 text-sm leading-relaxed"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: "var(--green-deep)" }}
                      >
                        {r.initials}
                      </div>
                      <StarRow small />
                    </div>
                    <p className="line-clamp-6">{r.quote}</p>
                  </blockquote>
                ))}
              </div>
            </div>

            {/* Doctor photo — mobile only, shown below the marquee */}
            <div className="block lg:hidden">
              <div className="w-48 mx-auto">
                <Image
                  src="/dr-roohani.jpeg"
                  alt="Dr. Darius Roohani, MD"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-3xl object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-gray-900">{t.reviews.doctorName}</p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {t.reviews.bio}
                </p>
              </div>
            </div>

            {/* Certification logos */}
            <div className="flex items-center justify-center gap-10 mt-8 lg:mt-20 mb-8">
              <a href="https://www.abim.org" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/ABIM-logo.avif"
                  alt="American Board of Internal Medicine"
                  width={157}
                  height={157}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </a>
              <a href="https://www.abom.org" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/ABOM-logo.avif"
                  alt="American Board of Obesity Medicine"
                  width={161}
                  height={161}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Doctor photo — desktop only */}
          <div className="hidden lg:block flex-shrink-0 w-full lg:w-[340px] xl:w-[400px]">
            <Image
              src="/dr-roohani.jpeg"
              alt="Dr. Darius Roohani, MD"
              width={400}
              height={400}
              className="w-full h-auto rounded-3xl object-cover object-top"
            />
            <div className="mt-4 -mx-8 text-center">
              <p className="font-semibold text-gray-900">{t.reviews.doctorName}</p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {t.reviews.bio}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────────── */

function FAQSection() {
  const { t } = useLanguage();
  const faqs = t.faq.items;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="scroll-mt-[102px] pt-12 sm:pt-16 pb-20 sm:pb-28"
      style={{ backgroundColor: "var(--green-light)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn className="max-w-2xl mb-12">
          <SectionLabel>{t.faq.eyebrow}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight">
            {t.faq.heading}
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-3 items-start">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-100 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 flex-shrink-0 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {/* Answer stays in the DOM at all times — grid-rows animates
                    0fr -> 1fr instead of conditional mounting, so crawlers
                    that don't execute click events still see the full text. */}
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                      {withLinks(faq.answer, faqAnswerLinks)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─────────────────────────────────────────────────── */

const DOSE_TABLE = {
  semaglutide: [
    { label: "0.5 mg", price: 220 },
    { label: "1.0 mg", price: 240 },
    { label: "1.5 mg", price: 260 },
    { label: "2 mg", price: 280 },
    { label: "2.5 mg", price: 290 },
  ],
  tirzepatide: [
    { label: "2.5 mg", price: 260 },
    { label: "5 mg", price: 300 },
    { label: "7.5 mg", price: 330 },
    { label: "10 mg", price: 360 },
    { label: "12.5 mg", price: 380 },
    { label: "15 mg", price: 400 },
  ],
} as const;

type DosedPlanId = keyof typeof DOSE_TABLE;

function Pricing() {
  const { t } = useLanguage();
  const [doseIndex, setDoseIndex] = useState<Record<DosedPlanId, number>>({
    semaglutide: 0,
    tirzepatide: 0,
  });

  const planMeta = [
    {
      id: "semaglutide" as const,
      priceSuffix: "/month",
      cardStyle: { backgroundColor: "#F7E9EC", borderColor: "#F0D6DC" },
      titleClass: "text-gray-900",
      priceClass: "text-gray-900",
      subClass: "text-gray-600",
      doseActive: "bg-gray-900 text-white border-gray-900",
      doseInactive: "bg-white text-gray-700 border-[#F0D6DC] hover:border-gray-400",
      icon: "/pinkvial.png",
      iconAlt: "Medication vial icon representing the Semaglutide Program",
    },
    {
      id: "tirzepatide" as const,
      priceSuffix: "/month",
      cardStyle: { backgroundColor: "var(--green-deep)", borderColor: "var(--green-deep)" },
      titleClass: "text-white",
      priceClass: "text-white",
      subClass: "text-white/70",
      doseActive: "bg-white text-gray-900 border-white",
      doseInactive: "bg-transparent text-white/80 border-white/30 hover:border-white/60",
      icon: "/greenvial.png",
      iconAlt: "Medication vial icon representing the Tirzepatide Program",
    },
    {
      id: "oversight" as const,
      price: "$199",
      priceSuffix: "/visit",
      priceNote: "Billed quarterly",
      cardStyle: undefined as { backgroundColor: string; borderColor: string } | undefined,
      titleClass: "text-gray-900",
      priceClass: "text-gray-900",
      subClass: "text-gray-500",
      doseActive: "",
      doseInactive: "",
      icon: "/white-coat-2.png",
      iconAlt: "Physician white coat icon representing physician oversight plan",
    },
  ];
  const plans = t.pricing.plans.map((plan, i) => ({ ...plan, ...planMeta[i] }));

  const included = t.pricing.included;

  return (
    <section id="pricing" className="bg-white scroll-mt-[102px] pt-12 sm:pt-16 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-12">
          <SectionLabel>{t.pricing.eyebrow}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight">
            {t.pricing.heading}
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            {t.pricing.subhead}
          </p>
        </FadeIn>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {plans.map((plan) => {
            const doses = plan.id === "oversight" ? null : DOSE_TABLE[plan.id];
            const selectedDose = doses ? doses[doseIndex[plan.id as DosedPlanId]] : null;
            const displayPrice = selectedDose ? `$${selectedDose.price}` : plan.price;

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 border transition-transform duration-300 hover:scale-[1.03] ${
                  plan.cardStyle ? "border-2" : "bg-gray-50 border-gray-100"
                }`}
                style={plan.cardStyle}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className={`text-lg font-bold leading-snug ${plan.titleClass}`}>
                    {plan.name}
                  </p>
                  <Image
                    src={plan.icon}
                    alt={plan.iconAlt}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain flex-shrink-0"
                  />
                </div>
                <p className={`text-3xl font-bold mt-2 ${plan.priceClass}`}>
                  {displayPrice}
                  <span className="text-base font-medium">{plan.priceSuffix}</span>
                </p>
                {plan.priceNote && (
                  <p className={`text-xs font-medium mt-1 ${plan.subClass}`}>{plan.priceNote}</p>
                )}
                {doses && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {doses.map((dose, i) => {
                      const active = i === doseIndex[plan.id as DosedPlanId];
                      return (
                        <button
                          key={dose.label}
                          type="button"
                          onClick={() =>
                            setDoseIndex((prev) => ({ ...prev, [plan.id as DosedPlanId]: i }))
                          }
                          aria-pressed={active}
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold border transition-colors ${
                            active ? plan.doseActive : plan.doseInactive
                          }`}
                        >
                          {dose.label}
                        </button>
                      );
                    })}
                  </div>
                )}
                <p className={`text-sm font-medium mt-3 ${plan.subClass}`}>
                  {withDagger(plan.tagline)}
                </p>
              </div>
            );
          })}
        </div>

        {/* What's included */}
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-7 mb-6">
          <p className="font-semibold text-gray-900 mb-5">{t.pricing.includeHeading}</p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-5">
            {t.pricing.footnote1}
          </p>
        </div>

        {/* Initial consult callout */}
        <div
          className="rounded-2xl border p-7 mb-6"
          style={{
            backgroundColor: "var(--green-light)",
            borderColor: "var(--green-border)",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-gray-900 text-lg">
                {t.pricing.initialConsultTitle}
                <span style={{ color: "var(--green-deep)" }}>{t.pricing.free}</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {t.pricing.initialConsultDetails}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {t.pricing.initialConsultNote}
              </p>
            </div>
            <div className="flex-shrink-0">
              <BookButton href="https://intakeq.com/new/tfe8ap" location="pricing" size="lg">
                {t.pricing.initialConsultCta}
              </BookButton>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400">
          {withDagger(t.pricing.footnote2)}
        </p>
      </div>
    </section>
  );
}

/* ─── Medication Options ──────────────────────────────────────── */

function MedicationOptions() {
  const { t } = useLanguage();

  const optionMeta: Array<{ bg?: string; borderColor?: string; bgImage: string }> = [
    { bg: "#F7E9EC", borderColor: "#F0D6DC", bgImage: "/pinkvial.png" },
    { bg: "var(--green-border)", borderColor: "#B3D2D4", bgImage: "/greenvial.png" },
    { bgImage: "/pens.png" },
  ];
  const options: Array<{
    title: string;
    descriptor: string;
    body?: string;
    bg?: string;
    borderColor?: string;
    bgImage: string;
  }> = t.medications.options.map((option, i) => ({
    ...option,
    ...optionMeta[i],
  }));

  return (
    <section
      id="medications"
      className="scroll-mt-[102px] pt-12 sm:pt-16 pb-20 sm:pb-28"
      style={{ backgroundColor: "var(--green-light)" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn className="max-w-3xl mb-12">
          <SectionLabel>{t.medications.eyebrow}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight">
            {t.medications.heading}
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            {withDagger(t.medications.subhead)}
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-6">
          {options.map((option) => (
            <div
              key={option.title}
              className={`relative overflow-hidden rounded-2xl p-7 border transition-transform duration-300 hover:scale-[1.03] ${
                option.bg ? "" : "bg-white border-gray-100"
              }`}
              style={
                option.bg
                  ? { backgroundColor: option.bg, borderColor: option.borderColor }
                  : undefined
              }
            >
              {option.bgImage && (
                <Image
                  src={option.bgImage}
                  alt=""
                  fill
                  className="pointer-events-none object-cover opacity-[14%]"
                />
              )}
              <div className="relative">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {option.title}
                </h3>
                {option.descriptor && (
                  <p
                    className={`text-gray-800 text-sm leading-relaxed ${
                      option.body ? "mb-3" : ""
                    }`}
                  >
                    {withDagger(option.descriptor)}
                  </p>
                )}
                {option.body && (
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {option.body}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-6">
          {withDagger(t.medications.footnote)}
        </p>
      </div>
    </section>
  );
}

/* ─── Table of Contents ───────────────────────────────────────── */

function TableOfContents() {
  const { t } = useLanguage();
  const links = t.toc;

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex flex-wrap justify-center sm:justify-start gap-x-1 gap-y-1">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ─── Footer ──────────────────────────────────────────────────── */


/* ─── Shared UI primitives ────────────────────────────────────── */

function FadeIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function BookButton({
  href,
  location,
  size = "md",
  color = "burgundy",
  children,
}: {
  href: string;
  location: string;
  size?: "sm" | "md" | "lg";
  color?: "green" | "burgundy";
  children: React.ReactNode;
}) {
  const heights: Record<string, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-13 px-7 text-base",
  };
  const bg = color === "green" ? "var(--green-deep)" : "#7C2D3E";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold text-white transition-opacity hover:opacity-90 ${heights[size]}`}
      style={{ backgroundColor: bg }}
      onClick={() => sendGAEvent("event", "book_click", { location })}
    >
      {children}
    </a>
  );
}

const faqAnswerLinks = [
  { text: "Boudreaux's New Drug Store", href: "https://boudreauxsnewdrug.com/" },
];

function withLinks(
  text: string,
  links: { text: string; href: string }[]
): React.ReactNode {
  for (const link of links) {
    const idx = text.indexOf(link.text);
    if (idx === -1) continue;
    return (
      <>
        {text.slice(0, idx)}
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
        >
          {link.text}
        </a>
        {text.slice(idx + link.text.length)}
      </>
    );
  }
  return text;
}

function withDagger(text: string): React.ReactNode {
  const parts = text.split("†");
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <sup>†</sup>}
    </span>
  ));
}

function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-widest ${className}`}
      style={{ color: "var(--green-mid)" }}
    >
      <span
        className="inline-block w-5 h-0.5"
        style={{ backgroundColor: "var(--green-mid)" }}
      />
      {children}
    </p>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 flex-shrink-0"
      style={{ color: "var(--green-mid)" }}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarRow({ small = false }: { small?: boolean }) {
  const size = small ? "w-3.5 h-3.5" : "w-5 h-5";
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={size}
          style={{ color: "var(--green-deep)" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}
