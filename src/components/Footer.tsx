import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { name: t.footer.productLinks[0].name, path: '/#features' },
    { name: t.footer.productLinks[1].name, path: '/#how-it-works' },
    { name: t.footer.productLinks[2].name, path: 'https://apps.apple.com/app/tinylapse', external: true },
  ]

  const legalLinks = [
    { name: t.footer.legalLinks[0].name, path: '/privacy' },
    { name: t.footer.legalLinks[1].name, path: '/terms' },
    { name: t.footer.legalLinks[2].name, path: '/contact' },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/tinylapse.app' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/tinylapse' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/tinylapse' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/apple-touch-icon.png"
                alt="TinyLapse Logo"
                className="w-10 h-10 app-icon"
              />
              <span className="text-gray-900 dark:text-white font-semibold text-lg">TinyLapse</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">{t.footer.product}</h3>
            <ul className="space-y-2">
              {productLinks.map((link) =>
                link.external ? (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-green-dark dark:hover:text-brand-green text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ) : (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-green-dark dark:hover:text-brand-green text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-green-dark dark:hover:text-brand-green text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">{t.footer.followUs}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-green-dark dark:hover:text-brand-green transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            {t.footer.copyright.replace('2024', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}

