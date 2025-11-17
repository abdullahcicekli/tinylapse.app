import { Baby, Heart, Smile, Users, Home, Calendar } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function UseCases() {
  const { t } = useLanguage()

  const icons = [Baby, Heart, Smile, Users, Home, Calendar]

  const useCases = t.useCases.items.map((item, index) => ({
    icon: icons[index],
    title: item.title,
    description: item.description,
  }))

  return (
    <section className="section-container bg-white dark:bg-black">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {t.useCases.title}{' '}
          <span className="gradient-text">{t.useCases.titleHighlight}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon
          return (
            <div
              key={index}
              className="group relative bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-brand-green/70 hover:shadow-2xl hover:shadow-brand-green/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 via-brand-blue/0 to-brand-green/0 group-hover:from-brand-green/5 group-hover:via-brand-blue/5 group-hover:to-brand-green/5 transition-all duration-300 rounded-xl"></div>

              <div className="relative flex items-start space-x-4">
                <div className="p-3 bg-brand-green/10 rounded-lg group-hover:bg-brand-green/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} className="text-brand-green group-hover:text-brand-blue transition-colors duration-300 flex-shrink-0" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-green-dark dark:group-hover:text-brand-green transition-colors duration-300">{useCase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{useCase.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

