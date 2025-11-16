import Lottie from 'lottie-react'
import onboarding4Animation from '../assets/onboarding4.json'
import { useLanguage } from '../hooks/useLanguage'

export default function VideoShowcase() {
  const { t } = useLanguage()

  const lottieOptions = {
    animationData: onboarding4Animation,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
    },
  }

  return (
    <section className="section-container bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="text-center space-y-6 mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {t.videoShowcase.title}{' '}
          <span className="gradient-text">{t.videoShowcase.titleHighlight}</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          {t.videoShowcase.subtitle}
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/20 via-accent/20 to-brand-green/20 blur-3xl opacity-50"></div>

        {/* Video Container */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-900/90 to-gray-900/80 border border-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video w-full">
            <Lottie
              {...lottieOptions}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-green/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      {/* Stats or Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-4xl mx-auto">
        {t.videoShowcase.stats.map((stat, index) => (
          <div key={index} className="text-center space-y-2 p-6 bg-gray-900/30 rounded-2xl border border-gray-800/50 hover:border-brand-green/30 transition-colors duration-300">
            <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
            <p className="text-sm sm:text-base text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
