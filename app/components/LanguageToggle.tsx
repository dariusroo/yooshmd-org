"use client";

import { useLanguage } from "../lib/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const nextLang = lang === "en" ? "es" : "en";

  return (
    <button
      type="button"
      onClick={() => setLang(nextLang)}
      className="flex-shrink-0 flex items-center gap-1.5 h-9 px-3 rounded-full text-sm font-bold text-gray-600 bg-gray-100 hover:text-gray-900 hover:bg-gray-200 transition-colors"
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
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {nextLang.toUpperCase()}
    </button>
  );
}
