import { Smartphone, Camera, Video, Baby, Heart } from 'lucide-react'
import Lottie from 'lottie-react'
import onboarding1Animation from '/onboarding1.json'

export default function Hero() {
  const stats = [
    { icon: Camera, text: 'Daily Photo Reminders' },
    { icon: Video, text: 'Timelapse Videos' },
    { icon: Baby, text: 'Baby Growth Tracker' },
    { icon: Heart, text: 'Memories Forever' },
  ]

  const lottieOptions = {
    animationData: onboarding1Animation,
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
            <div className="inline-flex items-center space-x-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2">
              <Smartphone size={16} className="text-brand-green" />
              <span className="text-sm text-gray-300">Available on iPhone</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Capture Your Baby's Growth{' '}
              <span className="gradient-text">Every Single Day</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-300 max-w-2xl">
              Never miss a moment of your baby's precious growth journey. Daily photo
              reminders help you capture every milestone, then watch it all unfold in a
              beautiful timelapse video.
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
                    <Icon size={24} className="text-brand-green" />
                    <span className="text-sm text-gray-400">{stat.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>

              {/* iPhone Mockup */}
              <div className="relative bg-gradient-to-b from-gray-900 to-gray-900/50 border border-gray-800 rounded-[3rem] p-3 sm:p-4 aspect-[9/19] w-64 sm:w-80 md:w-96 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  <Lottie
                    {...lottieOptions}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

