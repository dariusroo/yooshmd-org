"use client";

import Footer from "../components/Footer";
import LanguageToggle from "../components/LanguageToggle";
import { useLanguage } from "../lib/LanguageContext";

export default function DisclaimersPage() {
  const { t } = useLanguage();

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
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <a
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.disclaimersPage.backHome}
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-10">
            {t.disclaimersPage.title}
          </h1>

          <div className="space-y-10">
            {t.disclaimersPage.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {section.heading}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 mt-16 pt-8 border-t border-gray-100">
            {t.disclaimersPage.lastUpdated}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
