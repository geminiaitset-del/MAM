"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Locale, Translation, translations } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  isArabic: boolean;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const DEFAULT_LOCALE: Locale = "en";

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "ar";
}

function detectLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const storedLocale = window.localStorage.getItem("mam-locale");
  if (isLocale(storedLocale)) return storedLocale;

  return window.navigator.language.toLowerCase().startsWith("ar") ? "ar" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [hydrated, setHydrated] = useState(false);
  const isArabic = locale === "ar";

  useEffect(() => {
    // Hydration-safe locale detection: read localStorage only on the client
    // after first render. The intentional cascading render is required to
    // avoid SSR/CSR text mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(detectLocale());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.body.dataset.locale = locale;
    window.localStorage.setItem("mam-locale", locale);
  }, [hydrated, isArabic, locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      toggleLocale: () => setLocaleState((current) => (current === "en" ? "ar" : "en")),
      isArabic,
      t: translations[locale],
    }),
    [isArabic, locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
