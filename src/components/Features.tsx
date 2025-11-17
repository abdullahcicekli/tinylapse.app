import {
  Bell,
  FolderOpen,
  Video,
  Sparkles,
  Droplet,
  Share2,
  Zap,
  Target,
  Shield,
  Gift,
  Languages,
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function Features() {
  const { t } = useLanguage()

  const icons = [FolderOpen, Video, Sparkles, Droplet, Share2, Zap, Bell, Target, Shield, Gift, Languages]

  const features = t.features.items.map((item, index) => ({
    icon: icons[index],
    title: item.title,
    description: item.description,
  }))

  return (
    <section id="features" className="section-container bg-white dark:bg-black">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {t.features.title} <span className="gradient-text">{t.features.titleHighlight}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          
          // Renk değerleri
          const colorValues = [
            { icon: '#D4F7A5', bg: 'rgba(212, 247, 165, 0.1)', bgHover: 'rgba(212, 247, 165, 0.2)', border: 'rgba(212, 247, 165, 0.6)', shadow: 'rgba(212, 247, 165, 0.2)' },
            { icon: '#A8D8F0', bg: 'rgba(168, 216, 240, 0.1)', bgHover: 'rgba(168, 216, 240, 0.2)', border: 'rgba(168, 216, 240, 0.6)', shadow: 'rgba(168, 216, 240, 0.2)' },
            { icon: '#D4F7A5', bg: 'rgba(212, 247, 165, 0.1)', bgHover: 'rgba(212, 247, 165, 0.2)', border: 'rgba(212, 247, 165, 0.6)', shadow: 'rgba(212, 247, 165, 0.2)' },
            { icon: '#7BC4E8', bg: 'rgba(123, 196, 232, 0.1)', bgHover: 'rgba(123, 196, 232, 0.2)', border: 'rgba(123, 196, 232, 0.6)', shadow: 'rgba(123, 196, 232, 0.2)' },
            { icon: '#B8E986', bg: 'rgba(184, 233, 134, 0.1)', bgHover: 'rgba(184, 233, 134, 0.2)', border: 'rgba(184, 233, 134, 0.6)', shadow: 'rgba(184, 233, 134, 0.2)' },
            { icon: '#A8D8F0', bg: 'rgba(168, 216, 240, 0.1)', bgHover: 'rgba(168, 216, 240, 0.2)', border: 'rgba(168, 216, 240, 0.6)', shadow: 'rgba(168, 216, 240, 0.2)' },
            { icon: '#D4F7A5', bg: 'rgba(212, 247, 165, 0.1)', bgHover: 'rgba(212, 247, 165, 0.2)', border: 'rgba(212, 247, 165, 0.6)', shadow: 'rgba(212, 247, 165, 0.2)' },
            { icon: '#7BC4E8', bg: 'rgba(123, 196, 232, 0.1)', bgHover: 'rgba(123, 196, 232, 0.2)', border: 'rgba(123, 196, 232, 0.6)', shadow: 'rgba(123, 196, 232, 0.2)' },
            { icon: '#B8E986', bg: 'rgba(184, 233, 134, 0.1)', bgHover: 'rgba(184, 233, 134, 0.2)', border: 'rgba(184, 233, 134, 0.6)', shadow: 'rgba(184, 233, 134, 0.2)' },
            { icon: '#A8D8F0', bg: 'rgba(168, 216, 240, 0.1)', bgHover: 'rgba(168, 216, 240, 0.2)', border: 'rgba(168, 216, 240, 0.6)', shadow: 'rgba(168, 216, 240, 0.2)' },
            { icon: '#D4F7A5', bg: 'rgba(212, 247, 165, 0.1)', bgHover: 'rgba(212, 247, 165, 0.2)', border: 'rgba(212, 247, 165, 0.6)', shadow: 'rgba(212, 247, 165, 0.2)' },
          ]
          const colorValue = colorValues[index]
          
          return (
            <div
              key={index}
              className="relative group bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900/80 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colorValue.border;
                e.currentTarget.style.boxShadow = `0 25px 50px -12px ${colorValue.shadow}`;
              }}
              onMouseLeave={(e) => {
                const isDark = document.documentElement.classList.contains('dark');
                e.currentTarget.style.borderColor = isDark ? 'rgb(31, 41, 55)' : 'rgb(229, 231, 235)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                   style={{ background: `linear-gradient(to bottom right, ${colorValue.bg}, transparent, ${colorValue.bg})` }}
              ></div>
              
              <div className="relative space-y-4">
                <div 
                  className="inline-flex p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: colorValue.bg }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colorValue.bgHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colorValue.bg;
                  }}
                >
                  <Icon size={36} style={{ color: colorValue.icon }} className="transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-brand-green-dark dark:group-hover:text-brand-green">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

