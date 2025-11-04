// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import ICU from "i18next-icu";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(new ICU())
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "zh"],
    ns: ["common"],
    defaultNS: "common",
    // where to fetch translations (for HttpBackend)
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false, // react already escapes
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
