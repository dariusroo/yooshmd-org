"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Lang } from "./translations";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("yooshmd-lang");
    if (stored === "en" || stored === "es") {
      setLangState(stored);
    }
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    window.localStorage.setItem("yooshmd-lang", next);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return { lang: ctx.lang, setLang: ctx.setLang, t: translations[ctx.lang] };
}
