import { Smartphone, Camera, Video, Baby, Heart } from 'lucide-react'
import Lottie from 'lottie-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'

export default function Hero() {
  const { t } = useLanguage()
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    fetch('/onboarding1.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load animation:', err))
  }, [])

  const statsIcons = [Camera, Video, Baby, Heart]
  const stats = t.hero.statsItems.map((item, index) => ({
    icon: statsIcons[index],
    text: item.text,
  }))

  const lottieOptions = {
    animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
    },
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-full px-4 py-2">
              <Smartphone size={16} className="text-brand-green-dark dark:text-brand-green" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{t.hero.badge}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
              {t.hero.title}{' '}
              <span className="gradient-text">{t.hero.titleHighlight}</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/app/tinylapse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src="/download_badge.png" 
                  alt="Download on the App Store" 
                  className="h-10 sm:h-12 w-auto"
                />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-2"
                  >
                    <Icon size={24} className="text-brand-green-dark dark:text-brand-green" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{stat.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-brand-green/10 dark:bg-accent/20 blur-3xl rounded-full"></div>

              {/* iPhone Mockup */}
              <div className="relative bg-gradient-to-b from-gray-200 to-gray-300/50 dark:from-gray-900 dark:to-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-[3rem] p-3 sm:p-4 aspect-[9/19] w-64 sm:w-80 md:w-96 shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-black rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  {animationData && (
                    <Lottie
                      {...lottieOptions}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

