import { Download, Bell, Camera, Sparkles } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function HowItWorks() {
  const { t } = useLanguage()

  const icons = [Download, Bell, Camera, Sparkles]

  const steps = t.howItWorks.steps.map((step, index) => ({
    icon: icons[index],
    title: step.title,
    description: step.description,
  }))

  return (
    <section id="how-it-works" className="section-container bg-gray-900/20">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {t.howItWorks.title}{' '}
          <span className="gradient-text">{t.howItWorks.titleHighlight}</span>
        </h2>
        <p className="text-lg text-gray-400">
          {t.howItWorks.subtitle}
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2"></div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              return (
                <div key={index} className="relative text-center">
                  {/* Step Number */}
                  <div className="flex flex-col items-center mb-6">
                    <div 
                      className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #D4F7A5 0%, #A8D8F0 100%)' }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-8">
        {steps.map((step, index) => {
          return (
            <div key={index} className="relative flex gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #D4F7A5 0%, #A8D8F0 100%)' }}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-800 mt-4"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

