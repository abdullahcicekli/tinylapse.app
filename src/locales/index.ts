import { tr } from './tr'
import { en } from './en'
import { es } from './es'
import { de } from './de'
import { fr } from './fr'
import type { Language, Translation } from './types'

export const translations: Record<Language, Translation> = {
  tr,
  en,
  es,
  de,
  fr,
}

export const defaultLanguage: Language = 'en'

export const supportedLanguages: Language[] = ['tr', 'en', 'es', 'de', 'fr']

export const languageNames: Record<Language, string> = {
  tr: 'Türkçe',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
}

// Detect browser language and return supported language or default
export const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase()

  // Check exact match first (e.g., 'tr', 'en', 'es', 'de')
  if (supportedLanguages.includes(browserLang as Language)) {
    return browserLang as Language
  }

  // Check language code without region (e.g., 'en-US' -> 'en')
  const langCode = browserLang.split('-')[0] as Language
  if (supportedLanguages.includes(langCode)) {
    return langCode
  }

  // Return default language
  return defaultLanguage
}

export type { Language, Translation }
