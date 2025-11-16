import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { supportedLanguages, languageNames, type Language } from '../locales'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()

  const isActive = (path: string) => {
    return location.pathname === path || location.hash === path
  }

  const navLinks = [
    { name: t.nav.features, path: '/#features' },
    { name: t.nav.howItWorks, path: '/#how-it-works' },
    { name: t.nav.faq, path: '/faq' },
    { name: t.nav.contact, path: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/apple-touch-icon.png" 
              alt="TinyLapse Logo" 
              className="w-10 h-10 app-icon transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-white font-semibold text-lg">TinyLapse</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-brand-green'
                    : 'text-gray-300 hover:text-brand-green'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-brand-green transition-colors duration-300"
                aria-label="Change language"
              >
                <Globe size={18} />
                <span>{language.toUpperCase()}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden">
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang as Language)
                        setIsLangMenuOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                        language === lang
                          ? 'bg-brand-green/20 text-brand-green'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-brand-green'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://apps.apple.com/app/tinylapse"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/download_badge.png"
                alt="Download on the App Store"
                className="h-8 w-auto"
              />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-brand-green transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-brand-green'
                      : 'text-gray-300 hover:text-brand-green'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Language Switcher */}
              <div className="border-t border-gray-800 pt-4">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-2">
                  <Globe size={16} />
                  <span>Language</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang as Language)
                        setIsMenuOpen(false)
                      }}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        language === lang
                          ? 'bg-brand-green/20 text-brand-green border border-brand-green/30'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-brand-green'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="https://apps.apple.com/app/tinylapse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/download_badge.png"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

