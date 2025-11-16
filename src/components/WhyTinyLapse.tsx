import {
  Clock,
  Smartphone,
  Film,
  Heart,
  Lock,
  DollarSign,
} from 'lucide-react'

export default function WhyTinyLapse() {
  const reasons = [
    {
      icon: Clock,
      title: 'Zamandan Tasarruf',
      description:
        'Dakikalar içinde profesyonel time-lapse videoları oluşturun',
    },
    {
      icon: Smartphone,
      title: 'Kullanımı Kolay',
      description:
        'Karmaşık ayarlara gerek yok, her şey otomatik',
    },
    {
      icon: Film,
      title: 'Sinema Kalitesi',
      description:
        'HD ve 4K kalitede videolar, tıpkı profesyoneller gibi',
    },
    {
      icon: Heart,
      title: 'Duygusal Bağlantı',
      description:
        'Bebeğinizin büyümesini izlemek paha biçilemez bir deneyim',
    },
    {
      icon: Lock,
      title: '%100 Güvenli',
      description:
        'Verileriniz sadece sizin cihazınızda, başka hiçbir yerde değil',
    },
    {
      icon: DollarSign,
      title: 'Uygun Fiyat',
      description:
        'Haftalık $4.99 veya yıllık $39.99 - profesyonel bir fotoğrafçıdan çok daha ekonomik',
    },
  ]

  return (
    <section className="section-container bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Neden <span className="gradient-text">TinyLapse</span>?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => {
          const Icon = reason.icon

          const colorValues = [
            { icon: '#D4F7A5', bg: 'rgba(212, 247, 165, 0.1)', bgHover: 'rgba(212, 247, 165, 0.2)', border: 'rgba(212, 247, 165, 0.6)', shadow: 'rgba(212, 247, 165, 0.2)' },
            { icon: '#A8D8F0', bg: 'rgba(168, 216, 240, 0.1)', bgHover: 'rgba(168, 216, 240, 0.2)', border: 'rgba(168, 216, 240, 0.6)', shadow: 'rgba(168, 216, 240, 0.2)' },
            { icon: '#B8E986', bg: 'rgba(184, 233, 134, 0.1)', bgHover: 'rgba(184, 233, 134, 0.2)', border: 'rgba(184, 233, 134, 0.6)', shadow: 'rgba(184, 233, 134, 0.2)' },
            { icon: '#7BC4E8', bg: 'rgba(123, 196, 232, 0.1)', bgHover: 'rgba(123, 196, 232, 0.2)', border: 'rgba(123, 196, 232, 0.6)', shadow: 'rgba(123, 196, 232, 0.2)' },
            { icon: '#D4F7A5', bg: 'rgba(212, 247, 165, 0.1)', bgHover: 'rgba(212, 247, 165, 0.2)', border: 'rgba(212, 247, 165, 0.6)', shadow: 'rgba(212, 247, 165, 0.2)' },
            { icon: '#A8D8F0', bg: 'rgba(168, 216, 240, 0.1)', bgHover: 'rgba(168, 216, 240, 0.2)', border: 'rgba(168, 216, 240, 0.6)', shadow: 'rgba(168, 216, 240, 0.2)' },
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
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-brand-green">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
