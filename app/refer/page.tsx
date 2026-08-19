import Footer from "../components/Footer";

export default function ReferPage() {
  return (
    <div className="flex flex-col flex-1">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex-shrink-0">
            <span
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              style={{ color: "var(--green-deep)" }}
            >
              YooshMD
            </span>
          </a>
          <a
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Refer a Patient
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Please use this HIPAA compliant form to refer a patient to YooshMD - thanks!
          </p>

          <iframe
            src="https://intakeq.com/new/rcryvb"
            title="Intake Form"
            className="w-full rounded-lg border border-gray-200"
            style={{ height: 850 }}
          />

          <p className="text-sm text-gray-500 mt-4">
            Form not loading?{" "}
            <a
              target="_blank"
              title="Intake Form"
              href="https://intakeq.com/new/rcryvb"
              rel="noopener noreferrer"
              className="font-medium underline"
              style={{ color: "var(--green-deep)" }}
            >
              Referral form
            </a>{" "}
            opens it in a new tab.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
