/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Local Imports
import translationEN from './i18n/en.json'

// Translation files
const resources = {
  en: {
    translation: translationEN,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    },
  })

export default i18n
