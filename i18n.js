import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationFR from './src/local/fr/translation.json';
import translationEN from './src/local/en/translation.json';


const resources = {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
  };

  i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // langue par défaut
    fallbackLng: 'en', // langue de secours
    interpolation: {
      escapeValue: false, // react déjà échappe par défaut
    },
  });

export default i18n;
