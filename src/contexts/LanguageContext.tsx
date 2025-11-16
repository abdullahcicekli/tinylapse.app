import React, { createContext, useState, useEffect, ReactNode } from 'react'
import {
  translations,
  detectBrowserLanguage,
  defaultLanguage,
  type Language,
  type Translation,
} from '../locales'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translation
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

interface LanguageProviderProps {
  children: ReactNode
}

const STORAGE_KEY = 'tinylapse-language'

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Initialize language from localStorage or browser detection
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored && translations[stored]) {
      return stored
    }
    return detectBrowserLanguage()
  })

  // Update localStorage when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(STORAGE_KEY, lang)
  }

  // Get current translation
  const t = translations[language] || translations[defaultLanguage]

  // Update HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
