import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path || location.hash === path
  }

  const navLinks = [
    { name: 'Features', path: '/#features' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
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

