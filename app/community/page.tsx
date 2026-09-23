import Image from "next/image";
import Footer from "../components/Footer";

const PARTNERSHIP_EMAIL = "admin@yooshmd.com";
const PARTNERSHIP_SUBJECT = "FQHC / Community Health Partnership Inquiry";
const CONTACT_HREF = `mailto:${PARTNERSHIP_EMAIL}?subject=${encodeURIComponent(
  PARTNERSHIP_SUBJECT
)}`;
const MEETING_HREF = "https://calendar.app.google/dFo75P1hVsodgrWo8";

export default function CommunityPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Outcomes />
        <SlidingScale />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Header ──────────────────────────────────────────────────── */

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a href="/" className="flex-shrink-0">
          <span
            className="text-2xl sm:text-3xl font-bold tracking-tight"
            style={{ color: "var(--green-deep)" }}
          >
            YooshMD
          </span>
        </a>
        <div className="flex items-center gap-4">
          <a
            href="tel:+19092938095"
            className="hidden sm:inline text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            (909) 293-8095
          </a>
          <a
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[560px] sm:min-h-0 flex items-center py-10 sm:py-12">
      <Image
        src="/community-hero.png"
        alt="A physician reviews care options with a family in their community"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "25% center" }}
      />
      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-md rounded-3xl bg-white/80 backdrop-blur-sm p-5 sm:p-6 my-8 sm:my-0">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--green-mid)" }}
          >
            Community Health Partnerships
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Cost should not be a barrier to care.
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            YooshMD partners with Federally Qualified Health Centers (FQHCs)
            and FQHC look-alikes to deliver affordable, physician-guided
            medical weight loss to patients who&rsquo;ve lost coverage, lack
            insurance, or can&rsquo;t afford brand-name pricing. Every
            partnership patient sees the same board-certified obesity
            medicine physician and is prescribed safe, effective{" "}
            <strong className="font-semibold text-gray-900">
              generic equivalents
            </strong>{" "}
            — not a lower tier of care.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={MEETING_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold text-white transition-opacity hover:opacity-90 h-10 px-5 text-sm"
              style={{ backgroundColor: "var(--green-deep)" }}
            >
              Schedule a Partnership Call
            </a>
            <a
              href={CONTACT_HREF}
              className="inline-flex items-center justify-center h-10 px-5 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ────────────────────────────────────────────── */

function HowItWorks() {
  const points = [
    {
      title: "One accountable physician",
      body: "Every patient referred through a partnership is treated by Dr. Roohani directly — a board certified obesity medicine specialist, who will ensure continuity of care for your patients.",
    },
    {
      title: "Generic GLP-1 equivalents",
      body: "Compounded semaglutide and tirzepatide are sourced from licensed 503A U.S. pharmacies, giving patients access to the same active ingredients as brand-name GLP-1s without the brand-name price.",
    },
    {
      title: "Built around telehealth",
      body: "Visits happen by video, removing the transportation and scheduling barriers that keep many FQHC patients from following through on referrals.",
    },
    {
      title: "A simple referral pathway",
      body: "Your care team refers a patient, YooshMD handles intake, medical assessment, and ongoing management — with updates back to the referring clinic as needed.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="scroll-mt-[102px] pt-12 sm:pt-16 pb-20 sm:pb-28"
      style={{ backgroundColor: "var(--green-light)" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionLabel>How the Partnership Works</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-12 leading-tight max-w-2xl">
          Same physician, same standard of care — at a price your patients
          can actually pay.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-2xl p-7 border border-gray-100 transition-transform duration-300 hover:scale-[1.03]"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-8 leading-relaxed max-w-3xl">
          †Compounded medications are not FDA-approved and have not been
          evaluated by the FDA for safety, effectiveness, or quality. A
          compounded medication is prescribed only when a licensed provider
          determines it is medically appropriate for that patient.
          FDA-approved alternatives may be available.
        </p>
      </div>
    </section>
  );
}

/* ─── Outcomes / Metrics placeholder ─────────────────────────────
   Intentionally a placeholder — real figures (patients served,
   outcomes, adverse event rate, etc.) get dropped in here once the
   partnership program has data to report. */

function Outcomes() {
  const stats = [
    { value: "14%", label: "Average reduction in body weight" },
    {
      value: "0",
      label: "Adverse events unique to compounded medications",
    },
  ];

  return (
    <section id="outcomes" className="bg-white scroll-mt-[102px] pt-12 sm:pt-16 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionLabel>Outcomes &amp; Safety</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-5 leading-tight max-w-2xl">
          Transparent metrics, so partner clinics can evaluate the program on
          the facts.
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">
          The health risks of untreated obesity outweigh the risks associated
          with compounded medications. YooshMD vets every compounding
          pharmacy with heavy scrutiny to ensure purity and safety, and
          reports outcomes transparently as the partnership program grows.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-7 border border-gray-100 bg-gray-50 text-center"
            >
              <p
                className="text-4xl font-bold tabular-nums"
                style={{ color: "var(--green-deep)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-gray-800 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-6 max-w-3xl leading-relaxed">
          Reflects YooshMD&rsquo;s patient outcomes to date. Individual
          results vary and no specific outcome is guaranteed.
        </p>
      </div>
    </section>
  );
}

/* ─── Sliding Scale ───────────────────────────────────────────── */

function SlidingScale() {
  return (
    <section
      id="sliding-scale"
      className="scroll-mt-[102px] pt-12 sm:pt-16 pb-20 sm:pb-28"
      style={{ backgroundColor: "var(--green-light)" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 min-w-0">
            <SectionLabel>Affordability</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight">
              Our clinical fees can match your sliding scale.
            </h2>
            <p className="text-lg text-gray-600 mt-5 leading-relaxed">
              For patients referred through a community health
              partnership who demonstrate financial need, that clinical fee
              is matched to a sliding scale — so the cost of physician
              oversight is never the reason a patient stops treatment.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Medication costs (generic compounded semaglutide or
              tirzepatide) remain separate from the clinical fee and are
              disclosed transparently before any prescription is filled.
              Sliding-scale tiers and eligibility criteria are finalized with
              each partner clinic.
            </p>
          </div>

          <div className="mt-10 lg:mt-0 flex-shrink-0 w-full lg:w-[460px]">
            <div className="bg-white rounded-2xl border border-gray-100 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Monthly Medication Cost
              </p>

              <div className="space-y-6">
                <PriceBar label="Semaglutide" price={65} max={300} tone="green" />
                <PriceBar label="Tirzepatide" price={105} max={300} tone="green" />
                <PriceBar
                  label="Brand-Name Equivalents"
                  price={300}
                  max={300}
                  tone="red"
                  plus
                />
              </div>

              <p className="text-xs text-gray-400 mt-6 pt-5 border-t border-gray-100 leading-relaxed">
                Reflects YooshMD&rsquo;s medication sourcing cost through
                licensed compounding pharmacies — not a marked-up program
                fee. Prices are subject to change without notice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact CTA ─────────────────────────────────────────────── */

function ContactCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          className="rounded-2xl border p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          style={{ backgroundColor: "var(--green-deep)", borderColor: "var(--green-deep)" }}
        >
          <div>
            <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
              Ready to talk about a partnership?
            </p>
            <p className="text-white/80 mt-2 max-w-xl leading-relaxed">
              Schedule a call to discuss referral pathways, sliding-scale
              terms, and how YooshMD can support your patients.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href={MEETING_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold bg-white transition-opacity hover:opacity-90 h-13 px-7 text-base"
              style={{ color: "var(--green-deep)" }}
            >
              Schedule a Call
            </a>
            <a
              href={CONTACT_HREF}
              className="inline-flex items-center justify-center h-13 px-6 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:border-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Shared UI primitives ────────────────────────────────────── */

function PriceBar({
  label,
  price,
  max,
  tone,
  plus = false,
}: {
  label: string;
  price: number;
  max: number;
  tone: "green" | "red";
  plus?: boolean;
}) {
  const pct = Math.max(6, Math.round((price / max) * 100));
  const isGreen = tone === "green";
  // Burgundy is this site's brand "red" — same accent used for the
  // default BookButton color across the main site.
  const color = isGreen ? "var(--green-deep)" : "#7C2D3E";
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-xl font-bold whitespace-nowrap" style={{ color }}>
          {plus ? `$${price}+` : `from $${price}`}
          <span className="text-xs font-medium">/mo</span>
        </span>
      </div>
      <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest"
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
