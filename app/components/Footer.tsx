"use client";

import { useLanguage } from "../lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-8">
          <div>
            <p
              className="text-lg font-bold text-white mb-2"
            >
              YooshMD
            </p>
            <p className="text-sm text-white mb-2">
              {t.footer.tagline}
            </p>
            <p className="text-sm max-w-xs leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 text-sm mt-3">
              <a href="tel:+19092938095" className="hover:text-white transition-colors">
                (909) 293-8095
              </a>
              <span className="text-gray-700">·</span>
              <a href="mailto:admin@yooshmd.com" className="hover:text-white transition-colors">
                admin@yooshmd.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              {t.footer.links.privacy}
            </a>
            <a href="/disclaimers" className="hover:text-white transition-colors">
              {t.footer.links.disclaimers}
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              {t.footer.links.terms}
            </a>
            <a
              href="/telehealth-notice"
              className="hover:text-white transition-colors"
            >
              {t.footer.links.telehealth}
            </a>
            <a
              href="/notice-of-privacy-practices"
              className="hover:text-white transition-colors"
            >
              {t.footer.links.noticeOfPrivacy}
            </a>
            <a
              href="/accessibility-statement"
              className="hover:text-white transition-colors"
            >
              {t.footer.links.accessibility}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 space-y-3 text-xs text-gray-500 leading-relaxed">
          <p>{t.footer.medicalDisclaimer}</p>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
