export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <WhySection />
        <HowItWorks />
        <Reviews />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Navigation ──────────────────────────────────────────────── */

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ color: "var(--green-deep)" }}
          >
            YooshMD
          </span>
        </a>

        {/* Phone — hidden on smallest screens */}
        <a
          href="tel:+19092938095"
          className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
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
          (909) 293-8095
        </a>

        <BookButton href="https://www.yooshmd.com" size="sm">
          Book Free Consultation
        </BookButton>
      </div>
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-5"
            style={{ color: "var(--green-mid)" }}
          >
            Physician-Guided Weight Loss · California &amp; Nevada
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Medical weight loss.{" "}
            <span className="block sm:inline">
              Start with medication,{" "}
            </span>
            <span
              className="italic"
              style={{ color: "var(--green-deep)" }}
            >
              finish without it.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
            A physician-guided program designed around a real exit strategy
            — not indefinite medication. From your first visit, we outline
            a personalized plan to help you maintain your results after
            treatment.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <BookButton href="https://www.yooshmd.com" size="lg">
              Book FREE Consultation
            </BookButton>
            <a
              href="tel:+19092938095"
              className="inline-flex items-center justify-center h-13 px-6 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-base hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Call or text (909) 293-8095
            </a>
          </div>

          {/* Micro-trust */}
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
            {[
              "One-time consultation",
              "No ongoing charges until you decide",
              "No insurance required",
              "Transparent pricing",
              "100% online",
            ].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Doctor credential card */}
        <div
          className="mt-12 inline-flex items-center gap-4 rounded-2xl px-5 py-4 border"
          style={{
            backgroundColor: "var(--green-light)",
            borderColor: "var(--green-border)",
          }}
        >
          {/* Avatar placeholder — replace src with actual photo */}
          <div
            className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: "var(--green-deep)" }}
          >
            DR
          </div>
          <div>
            <p className="font-semibold text-gray-900">
              Dr. Darius Roohani, MD
            </p>
            <p className="text-sm text-gray-600">
              Double board-certified · Internal Medicine &amp; Obesity
              Medicine
            </p>
            <p className="text-sm text-gray-500">Cedars-Sinai trained</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Bar ───────────────────────────────────────────────── */

function TrustBar() {
  const items = [
    { value: "4.8 / 5", label: "Patient rating", sub: "Press-Ganey 2025" },
    { value: "Board-certified", label: "Obesity Medicine", sub: "Internal Medicine" },
    { value: "100% online", label: "Telehealth visits", sub: "CA & NV" },
    { value: "Transparent", label: "Flat-rate pricing", sub: "No hidden fees" },
  ];

  return (
    <section
      className="border-y"
      style={{
        backgroundColor: "var(--green-light)",
        borderColor: "var(--green-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.value} className="text-center">
              <p
                className="text-2xl font-bold"
                style={{ color: "var(--green-deep)" }}
              >
                {item.value}
              </p>
              <p className="text-sm font-semibold text-gray-800 mt-0.5">
                {item.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Section ─────────────────────────────────────────────── */

function WhySection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <SectionLabel>What Makes Us Different</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight">
            Most programs focus on the prescription. We focus on what comes
            next.
          </h2>
          <p className="text-lg text-gray-600 mt-5 leading-relaxed">
            Weight loss medication can be a powerful tool — but most programs
            treat it as an indefinite prescription. At YooshMD, every visit
            is structured around a clear transition plan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <CompareCard
            type="other"
            title="Other programs"
            points={[
              "Prescribe medication, refill indefinitely",
              "Little guidance on lifestyle change",
              "No plan for stopping or reducing medication",
              "Results often reverse when medication ends",
            ]}
          />
          <CompareCard
            type="us"
            title="YooshMD"
            points={[
              "Medication as a strategic, time-limited tool",
              "Lifestyle protocol built into every visit",
              "Medically supervised transition planning",
              "Help building habits that support lasting results",
            ]}
          />
        </div>

        <p className="text-sm text-gray-400 mt-6">
          *Individual results vary. See full disclosures.
        </p>
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
  points: string[];
}) {
  const isUs = type === "us";
  return (
    <div
      className={`rounded-2xl p-7 border ${
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
          isUs ? "text-green-200" : "text-gray-400"
        }`}
      >
        {title}
      </p>
      <ul className="space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm">
            {isUs ? (
              <span className="mt-0.5 text-green-200 flex-shrink-0">✓</span>
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
  const steps = [
    {
      n: "01",
      title: "Free consultation",
      body: "Discuss your health history, goals, and whether medication-assisted treatment is appropriate for you. No commitment, no charge.",
    },
    {
      n: "02",
      title: "Personalized plan",
      body: "Dr. Roohani outlines a program — including target dose, lifestyle protocols, and a projected timeline — from your very first visit.",
    },
    {
      n: "03",
      title: "Supervised transition",
      body: "When you're ready, we guide you through a medically supervised plan to help you maintain your results as medication is reduced.",
    },
  ];

  return (
    <section
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--green-light)" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight">
            Your exit strategy starts at visit one.
          </h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Most patients begin noticing meaningful changes in appetite within
            the first several weeks of treatment.*
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.n} className="bg-white rounded-2xl p-7 border border-gray-100">
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

        <p className="text-xs text-gray-400 mt-8">
          *Individual results vary. Timing estimates reflect general program
          experience and are not a guarantee of any specific outcome.
        </p>

        <div className="mt-10">
          <BookButton href="https://www.yooshmd.com" size="lg">
            Book Your Free Consultation
          </BookButton>
        </div>
      </div>
    </section>
  );
}

/* ─── Reviews ─────────────────────────────────────────────────── */

function Reviews() {
  const reviews = [
    {
      quote:
        "An excellent doctor who truly cares about his patients and takes the time to understand the issues they face. Incredibly thankful.",
    },
    {
      quote:
        "Very thorough, professional, and caring. Never felt rushed and his follow-up questions were useful.",
    },
    {
      quote:
        "This was my first visit and I was very impressed. He was thoughtful, knowledgeable, and made me feel comfortable right away.",
    },
    {
      quote:
        "Professional, personable, and takes the time to really listen. He is very patient and explains things in a way I can understand.",
    },
    {
      quote:
        "Extremely pleased. Confident in his ability to provide excellent care and explain things clearly.",
    },
    {
      quote:
        "Very thorough. I'm very blessed to have him as my doctor. He always listens and explains things clearly.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <SectionLabel className="justify-center">Patient Experience</SectionLabel>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRow />
            <span className="font-bold text-gray-900 text-xl">4.8 / 5</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Verified reviews collected by Press-Ganey · 2025
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <blockquote
              key={i}
              className="rounded-2xl p-6 border border-gray-100 bg-gray-50 text-gray-700 text-sm leading-relaxed relative"
            >
              <span
                className="absolute top-4 left-5 text-4xl font-serif leading-none"
                style={{ color: "var(--green-border)" }}
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="pt-5">{r.quote}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Lead Magnet ─────────────────────────────────────────────── */

function LeadMagnet() {
  return (
    <section
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--green-deep)" }}
    >
      <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-200 mb-4">
          Free Clinical Guide
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          Considering stopping your weight loss medication?
        </h2>
        <p className="text-green-100 text-lg leading-relaxed mb-8">
          Get our free guide — a clinical overview of what to expect when
          stopping weight loss medication, what factors predict success, and
          how to plan your transition.
        </p>

        <form
          action="https://www.yooshmd.com"
          method="GET"
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            required
            className="flex-1 h-12 rounded-full px-5 text-gray-900 text-sm bg-white placeholder-gray-400 border-0 outline-none focus:ring-2 focus:ring-white/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="flex-1 h-12 rounded-full px-5 text-gray-900 text-sm bg-white placeholder-gray-400 border-0 outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="h-12 px-6 rounded-full bg-white font-semibold text-sm cursor-pointer transition-opacity hover:opacity-90"
            style={{ color: "var(--green-deep)" }}
          >
            Send my guide
          </button>
        </form>
        <p className="text-green-200/60 text-xs mt-4">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-8">
          <div>
            <p
              className="text-lg font-bold text-white mb-2"
            >
              YooshMD
            </p>
            <p className="text-sm max-w-xs leading-relaxed">
              Physician-guided medical weight loss. 100% online. Serving
              California and Nevada.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="https://www.yooshmd.com/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.yooshmd.com/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="https://www.yooshmd.com/telehealth-notice"
              className="hover:text-white transition-colors"
            >
              Telehealth Notice
            </a>
            <a
              href="https://www.yooshmd.com/notice-of-privacy-practices"
              className="hover:text-white transition-colors"
            >
              Notice of Privacy Practices
            </a>
            <a
              href="https://www.yooshmd.com/accessibility-statement"
              className="hover:text-white transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 space-y-3 text-xs text-gray-500 leading-relaxed">
          <p>
            This site does not constitute medical advice. Results vary.
            Individual outcomes depend on factors including health history,
            adherence to the program, and physician recommendations. This
            service is not intended for medical emergencies — if you are
            experiencing a medical emergency, call 911.
          </p>
          <p>
            Percentage estimates referenced on this site are derived from
            published clinical trial data and may not reflect outcomes in
            practice.{" "}
            <a
              href="https://www.yooshmd.com"
              className="underline hover:text-gray-300 transition-colors"
            >
              Full disclosures →
            </a>
          </p>
          <p>© 2026 YooshMD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Shared UI primitives ────────────────────────────────────── */

function BookButton({
  href,
  size = "md",
  children,
}: {
  href: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}) {
  const heights: Record<string, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-13 px-7 text-base",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full font-semibold text-white transition-opacity hover:opacity-90 ${heights[size]}`}
      style={{ backgroundColor: "var(--green-deep)" }}
    >
      {children}
    </a>
  );
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

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5"
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
