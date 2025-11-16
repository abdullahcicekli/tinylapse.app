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
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: FolderOpen,
      title: 'Sınırsız Albüm ve Fotoğraf',
      description:
        'Bebeğinizin her anını kaydedin. İstediğiniz kadar albüm oluşturun, sınırsız fotoğraf ekleyin.',
    },
    {
      icon: Video,
      title: 'Profesyonel Time-Lapse Videoları',
      description:
        'Fotoğraflarınızdan saniyeler içinde muhteşem time-lapse videoları oluşturun. Bebeğinizin büyümesini tek videoda izleyin.',
    },
    {
      icon: Sparkles,
      title: 'HD ve Ultra HD Kalite',
      description:
        '360p\'den 1080p\'ye kadar 4 farklı kalite seçeneği. Bebeğinizin her detayını kristal netliğinde kaydedin.',
    },
    {
      icon: Droplet,
      title: 'Özelleştirilebilir Filigranlar',
      description:
        'Videolarınıza özel metin, tarih veya logo ekleyin. Dilediğiniz pozisyonda, dilediğiniz şekilde.',
    },
    {
      icon: Share2,
      title: 'Kolay Paylaşım',
      description:
        'Videolarınızı tek dokunuşla aileniz ve arkadaşlarınızla paylaşın. WhatsApp, Instagram, AirDrop - her platformda.',
    },
    {
      icon: Zap,
      title: 'Hızlı ve Kolay',
      description:
        'Sadece fotoğraf çekin, uygulama gerisini halleder. Karmaşık editör programlarına gerek yok.',
    },
    {
      icon: Bell,
      title: 'Akıllı Hatırlatmalar',
      description:
        'Günlük fotoğraf hatırlatmaları ile hiçbir anı kaçırmayın. Bebeğinizin her gününü kayıt altına alın.',
    },
    {
      icon: Target,
      title: 'Milestone Takibi',
      description:
        'İlk hafta, ilk ay, 6. ay, 1. yaş... Tüm özel günleri otomatik olarak takip edin ve kutlayın.',
    },
    {
      icon: Shield,
      title: 'Güvenli ve Gizli',
      description:
        'Tüm fotoğraflarınız cihazınızda güvenle saklanır. Hiçbir veri buluta veya 3. taraflara gönderilmez.',
    },
    {
      icon: Gift,
      title: '3 Gün Ücretsiz Deneme',
      description:
        'Risk yok, kredi kartı bilgisi yok. 3 gün boyunca tüm özellikleri ücretsiz deneyin, sonra karar verin.',
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

