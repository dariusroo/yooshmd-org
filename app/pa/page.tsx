import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "White-Label GLP-1 Prior Authorization for Practices | YooshMD",
  description:
    "Physician-led, white-label prior authorization support for GLP-1 medications, including the Medicare GLP-1 Bridge.",
  alternates: { canonical: "/pa" },
  robots: { index: false, follow: false },
};

const MEETING_URL = "/b2bmeet";

const SERVICES = [
  {
    title: "Chart review against payer criteria",
    body: "We compare the chart to the plan's criteria before anything is submitted, and tell you what's missing, such as a BMI, comorbidity, or prior-therapy note.",
  },
  {
    title: "Submission and tracking",
    body: "We prepare and submit the request through the payer's portal or CoverMyMeds, then follow it until there's a decision.",
  },
  {
    title: "Denials and appeals",
    body: "When a request is denied, we review the reason, gather what's needed, and draft a physician-written appeal and letter of medical necessity for your prescriber to sign. We also prepare your prescriber for a peer-to-peer review when one is offered.",
  },
  {
    title: "Renewals",
    body: "We track approval end dates and start reauthorizations before coverage lapses, so patients don't go without medication.",
  },
  {
    title: "Medicare GLP-1 Bridge",
    body: "We screen Medicare patients for the CMS Bridge and handle the prior authorization for the first fill.",
  },
];

const BRIDGE_FACTS = [
  "A CMS demonstration running July 1, 2026 through December 31, 2027.",
  "Covers Wegovy® (injection and tablets), Foundayo®, and the Zepbound® KwikPen for weight management in eligible Part D enrollees.",
  "Eligibility depends on BMI and specific comorbidities, and excludes patients whose GLP-1 is covered under Part D for another indication, such as type 2 diabetes.",
  "Prior authorization is required for the first fill. Later fills don't need a new one unless the patient switches medications.",
  "Prescriptions need the note “Send to bridge for weight management,” or the claim may route to the patient's Part D plan instead.",
];

function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={MEETING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold text-white transition-opacity hover:opacity-90 h-13 px-7 text-base"
      style={{ backgroundColor: "#7C2D3E" }}
    >
      {children}
    </a>
  );
}

export default function PriorAuthPage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <span
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              style={{ color: "var(--green-deep)" }}
            >
              YooshMD
            </span>
          </Link>
          <a
            href={MEETING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold text-white transition-opacity hover:opacity-90 h-9 px-4 text-sm"
            style={{ backgroundColor: "var(--green-deep)" }}
          >
            Schedule a call
          </a>
        </div>
      </header>

      <main className="flex-1 bg-white">
        {/* Hero */}
        <section style={{ backgroundColor: "var(--green-light)" }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-24 text-center">
            <p
              className="text-sm font-semibold uppercase tracking-wide mb-4"
              style={{ color: "var(--green-deep)" }}
            >
              For practices · White-label prior authorization
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              GLP-1 prior authorizations, handled behind the scenes.
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We take GLP-1 prior authorizations off your staff&rsquo;s plate,
              including the new Medicare GLP-1 Bridge. The work goes out under
              your practice&rsquo;s name, overseen by a physician
              board-certified in obesity medicine.
            </p>
            <div className="mt-8">
              <CtaButton>Schedule a call</CtaButton>
            </div>
          </div>
        </section>

        {/* What we handle */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center">
            What we handle
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`rounded-2xl border p-6 ${
                  i === SERVICES.length - 1 && SERVICES.length % 2 === 1
                    ? "sm:col-span-2"
                    : ""
                }`}
                style={{ borderColor: "var(--green-border)" }}
              >
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* White label */}
        <section className="bg-gray-50">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Your practice, your name
            </h2>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              Patients and payers deal with your practice. We work in the
              background, inside the tools you already use, so your patients
              never have to learn a new name. You keep the prescribing
              relationship and every clinical decision.
            </p>
          </div>
        </section>

        {/* Medicare GLP-1 Bridge */}
        <section style={{ backgroundColor: "var(--green-light)" }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight text-center">
              Medicare GLP-1 Bridge support
            </h2>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed text-center">
              Many Medicare patients can now get GLP-1 medications for weight
              management through a CMS program that runs outside their Part D
              plan, with its own eligibility rules and prior authorization
              process. We screen your patients and handle the paperwork.
            </p>
            <ul className="mt-8 space-y-3">
              {BRIDGE_FACTS.map((fact) => (
                <li key={fact} className="flex gap-3 text-gray-700 leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--green-deep)" }}
                  />
                  {fact}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500 text-center">
              Program rules are set by CMS and may change. Coverage decisions
              are made by CMS and its designated processor.
            </p>
          </div>
        </section>

        {/* Physician-led */}
        <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Physician-led
          </h2>
          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            The service is run by Darius Roohani, MD, board-certified in
            Internal Medicine and Obesity Medicine, who prescribes and manages
            GLP-1 medications every day. Requests are prepared by someone who
            knows what payers are looking for and why.
          </p>
        </section>

        {/* Final CTA */}
        <section className="bg-gray-50">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Let&rsquo;s talk about your practice
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Tell us your volume and the payers you see most. We&rsquo;ll walk
              through how this would fit your workflow.
            </p>
            <div className="mt-8">
              <CtaButton>Schedule a call</CtaButton>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-10">
          <p className="text-xs text-gray-400 leading-relaxed text-center">
            Approval of any prior authorization is determined by the payer and
            is not guaranteed. Wegovy® is a registered trademark of Novo
            Nordisk. Zepbound® and Foundayo® are registered trademarks of Eli
            Lilly and Company. YooshMD is not affiliated with or endorsed by
            these companies.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
