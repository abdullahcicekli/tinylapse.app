import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { name: 'Features', path: '/#features' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'Download', path: 'https://apps.apple.com/app/tinylapse', external: true },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Contact', path: '/contact' },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/tinylapse.app' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/tinylapse' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/tinylapse' },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
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
              <span className="text-white font-semibold text-lg">TinyLapse</span>
            </div>
            <p className="text-gray-400 text-sm">
              Capturing precious moments, one day at a time.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) =>
                link.external ? (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand-green text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ) : (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="text-gray-400 hover:text-brand-green text-sm transition-colors duration-300"
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
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-brand-green text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-green transition-colors duration-300"
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
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} TinyLapse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

