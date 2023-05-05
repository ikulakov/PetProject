import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

void i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: 'ru',
        debug: false, // !!__IS_DEV__
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        returnNull: false,
    })

export default i18n
