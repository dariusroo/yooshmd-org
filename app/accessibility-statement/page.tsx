import Footer from "../components/Footer";

export default function AccessibilityStatementPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-10">
            Accessibility Statement
          </h1>

          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              YooshMD is committed to making its website accessible and
              usable for all individuals, including those with disabilities.
              We strive to improve the accessibility and usability of our
              website and aim to follow generally recognized accessibility
              standards.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you experience difficulty accessing any part of this
              website or need assistance, please contact us at{" "}
              <a
                href="tel:+19092938095"
                className="text-gray-900 underline hover:no-underline"
              >
                (909) 293-8095
              </a>{" "}
              or{" "}
              <a
                href="mailto:admin@yooshmd.com"
                className="text-gray-900 underline hover:no-underline"
              >
                admin@yooshmd.com
              </a>
              , and we will make reasonable efforts to provide the
              information or assistance you need.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
