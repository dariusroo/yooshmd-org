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
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/yooshmd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.428.465a4.902 4.902 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.525 5.45c-.247.637-.416 1.364-.465 2.428C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.428a4.902 4.902 0 0 0 1.153 1.772 4.902 4.902 0 0 0 1.772 1.153c.637.247 1.364.416 2.428.465C8.944 21.988 9.284 22 12 22s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.428-.465a4.902 4.902 0 0 0 1.772-1.153 4.902 4.902 0 0 0 1.153-1.772c.247-.637.416-1.364.465-2.428.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.428a4.902 4.902 0 0 0-1.153-1.772A4.902 4.902 0 0 0 18.551 2.525c-.637-.247-1.364-.416-2.428-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.858.048 1.054.058 1.37.058 4.04s-.01 2.986-.058 4.04c-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15 3.1 3.1 0 0 1-1.15.748c-.353.137-.882.3-1.858.344-1.054.048-1.37.058-4.04.058s-2.986-.01-4.04-.058c-.976-.045-1.505-.207-1.858-.344a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.858-.048-1.054-.058-1.37-.058-4.04s.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.858-.344 1.054-.048 1.37-.058 4.04-.058z" />
                  <path d="M12 6.865A5.135 5.135 0 1 0 12 17.135 5.135 5.135 0 0 0 12 6.865zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666z" />
                  <circle cx="17.338" cy="6.662" r="1.2" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578411332212"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.196 2.238.196v2.475h-1.26c-1.243 0-1.63.775-1.63 1.57v1.89h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@yooshmd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.6 5.82c-.78-.68-1.27-1.65-1.27-2.72h-3.05v13.02c0 1.55-1.26 2.8-2.8 2.8a2.8 2.8 0 0 1-2.8-2.8 2.8 2.8 0 0 1 2.8-2.8c.28 0 .55.04.8.12v-3.1a5.9 5.9 0 0 0-.8-.06 5.85 5.85 0 0 0-5.85 5.85 5.85 5.85 0 0 0 5.85 5.85 5.85 5.85 0 0 0 5.85-5.85V9.4a7.9 7.9 0 0 0 4.6 1.47V7.82a4.83 4.83 0 0 1-3.33-1.99z" />
                </svg>
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
