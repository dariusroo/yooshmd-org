import Script from "next/script";
import Footer from "../components/Footer";

export default function BookPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2">
            Book Your Free Consultation
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed mb-10">
            Choose a time that works for you. No charges until you decide to
            continue.
          </p>

          <div id="intakeq" style={{ maxWidth: 720, width: "100%" }} />
          <Script id="intakeq-widget" strategy="afterInteractive">
            {`
              window.intakeq = "6a1a1a2f2029fcbfb72a6bb4";
              window.intakeqServiceId = "ffdff82f-afc4-4ea7-9f1e-2afb9dcfa13a";
              var i = document.createElement("script");
              i.type = "text/javascript";
              i.async = true;
              i.src = "https://intakeq.com/js/widget.min.js?1";
              document.head.appendChild(i);
            `}
          </Script>
        </div>
      </main>

      <Footer />
    </div>
  );
}
