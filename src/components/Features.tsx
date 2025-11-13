import {
  Bell,
  Folder,
  Video,
  Ghost,
  Grid3x3,
  Lock,
  Camera,
  Palette,
  Cloud,
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Bell,
      title: 'Smart Daily Reminders',
      description:
        'Set custom reminder intervals (1-30 days) for each album. Never forget to capture your baby\'s daily photo with intelligent notifications.',
    },
    {
      icon: Folder,
      title: 'Multiple Albums',
      description:
        'Create separate albums for each child, pregnancy journey, or special project. Organize all your memories in one place.',
    },
    {
      icon: Video,
      title: 'Stunning Timelapse Videos',
      description:
        'Watch months or years of growth unfold in seconds. Generate beautiful HD timelapse videos with just 2 taps.',
    },
    {
      icon: Ghost,
      title: 'Ghost Overlay',
      description:
        'See the previous photo overlaid on your camera to ensure perfect alignment for smooth timelapse videos.',
    },
    {
      icon: Grid3x3,
      title: 'Grid Overlay',
      description:
        'Built-in grid lines help you position your subject consistently for professional-looking results.',
    },
    {
      icon: Lock,
      title: 'Private & Secure',
      description:
        'Your precious memories are safely stored. All photos sync securely with your iCloud account.',
    },
    {
      icon: Camera,
      title: 'Easy Photo Capture',
      description:
        'Quick camera access from each album. Capture the moment in seconds without complicated menus.',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description:
        'Modern iOS design that feels natural and intuitive. Built following Apple\'s Human Interface Guidelines.',
    },
    {
      icon: Cloud,
      title: 'Cloud Sync',
      description:
        'All your photos and videos safely backed up to the cloud. Access from any device, never lose a memory.',
    },
  ]

  return (
    <section id="features" className="section-container">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Everything You Need to <span className="gradient-text">Track Growth</span>
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
          ]
          const colorValue = colorValues[index]
          
          return (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-gray-900 via-gray-900/80 to-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                borderColor: 'rgb(31, 41, 55)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colorValue.border;
                e.currentTarget.style.boxShadow = `0 25px 50px -12px ${colorValue.shadow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgb(31, 41, 55)';
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
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-brand-green">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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

