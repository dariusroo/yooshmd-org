"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useLanguage } from "../lib/LanguageContext";

const GA_ID = "G-8LGK2LG2JF";
const STORAGE_KEY = "yooshmd-ga-optout";

// Discloses our use of Google Analytics on first visit and lets visitors opt
// out of it. Vercel Analytics and GoatCounter aren't gated here — neither
// uses cookies or identifies individual visitors.
export default function AnalyticsGate() {
  const { t } = useLanguage();
  const [optedOut, setOptedOut] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "true") setOptedOut(true);
      if (stored === null) setShowNotice(true);
    } catch {
      // localStorage unavailable — leave analytics on and skip the notice
      // rather than nag every load with no way to remember the choice.
    }
  }, []);

  function dismiss(optOut: boolean) {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(optOut));
    } catch {
      // Ignore — the choice just won't persist across visits.
    }
    setOptedOut(optOut);
    setShowNotice(false);
  }

  return (
    <>
      {!optedOut && <GoogleAnalytics gaId={GA_ID} />}
      {showNotice && (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <p className="text-xs text-gray-600 leading-relaxed flex-1">
              {t.analyticsNotice.text}{" "}
              <a href="/privacy-policy" className="underline hover:text-gray-900">
                {t.analyticsNotice.linkText}
              </a>
              .
            </p>
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                type="button"
                onClick={() => dismiss(true)}
                className="text-xs font-medium text-gray-500 hover:text-gray-800 underline whitespace-nowrap"
              >
                {t.analyticsNotice.optOut}
              </button>
              <button
                type="button"
                onClick={() => dismiss(false)}
                className="inline-flex items-center justify-center h-9 px-4 rounded-full text-xs font-semibold text-white whitespace-nowrap transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--green-deep)" }}
              >
                {t.analyticsNotice.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
