import {
  Baby,
  Camera,
  Star,
  Zap,
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function Stats() {
  const { t } = useLanguage()

  const icons = [Baby, Camera, Star, Zap]

  const stats = t.stats.items.map((item, index) => ({
    icon: icons[index],
    value: item.value,
    label: item.label,
    description: item.description,
  }))

  return (
    <section className="section-container bg-gradient-to-b from-black to-gray-900">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {t.stats.title} <span className="gradient-text">{t.stats.titleHighlight}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon

          const colors = ['#D4F7A5', '#A8D8F0', '#B8E986', '#7BC4E8']
          const color = colors[index]

          return (
            <div
              key={index}
              className="relative group text-center p-8 bg-gradient-to-br from-gray-900 via-gray-900/80 to-gray-900/50 border border-gray-800 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                   style={{ background: `linear-gradient(to bottom right, rgba(212, 247, 165, 0.1), transparent)` }}
              ></div>

              <div className="relative space-y-4">
                <div className="inline-flex p-4 rounded-full transition-all duration-300 group-hover:scale-110"
                     style={{ backgroundColor: `${color}20` }}>
                  <Icon size={40} style={{ color }} className="transition-all duration-300" />
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold transition-colors duration-300 group-hover:text-brand-green">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold">{stat.label}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
