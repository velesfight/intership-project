import * as i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import de from '~/shared/assets/locales/de.json';
import en from '~/shared/assets/locales/en.json';
import es from '~/shared/assets/locales/es.json';
import fr from '~/shared/assets/locales/fr.json';
import ru from '~/shared/assets/locales/ru.json';
import zh from '~/shared/assets/locales/zh.json';

import { DEFAULT_LOCALE, Locale } from '../contants';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LOCALE,
    resources: {
      [Locale.En]: en,
      [Locale.Ru]: ru,
      [Locale.De]: de,
      [Locale.Es]: es,
      [Locale.Fr]: fr,
      [Locale.Zh]: zh,
    },
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export { i18n };
