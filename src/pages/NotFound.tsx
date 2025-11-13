import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Page Not Found | TinyLapse" />

      <section className="section-container pt-32 min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-9xl font-bold gradient-text">404</h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved
            or deleted.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, #D4F7A5 0%, #A8D8F0 100%)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #B8E986 0%, #7BC4E8 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #D4F7A5 0%, #A8D8F0 100%)';
            }}
          >
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
    </>
  )
}

