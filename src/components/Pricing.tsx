import { Check, Gift } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Haftalık Plan',
      price: '$4.99',
      period: 'hafta',
      description: 'Kısa süreli kullanımlar için ideal',
      features: [
        'Sınırsız albüm ve fotoğraf',
        'HD ve Ultra HD kalite',
        'Özelleştirilebilir filigranlar',
        'Akıllı hatırlatmalar',
        'Milestone takibi',
        'Güvenli ve gizli',
      ],
    },
    {
      name: 'Yıllık Plan',
      price: '$39.99',
      period: 'yıl',
      description: 'En popüler seçenek - %83 tasarruf!',
      features: [
        'Tüm haftalık plan özellikleri',
        '%83 tasarruf ($259.48\'den $39.99)',
        'Tam bir yıl sınırsız erişim',
        'En uygun fiyat garantisi',
        'İptal etmek tamamen ücretsiz',
        'Öncelikli müşteri desteği',
      ],
      highlighted: true,
      badge: 'EN POPÜLER',
    },
  ]

  return (
    <section className="section-container bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center space-y-4 mb-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Şimdi <span className="gradient-text">Başlayın</span>
        </h2>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green/20 to-brand-blue/20 border border-brand-green/30 rounded-full px-6 py-3">
          <Gift className="w-5 h-5 text-brand-green" />
          <p className="text-lg text-gray-300">
            <span className="font-bold text-brand-green">3 Gün Ücretsiz Deneyin</span> - Risk yok, kredi kartı bilgisi gerekmez
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative group bg-gradient-to-br from-gray-900 via-gray-900/80 to-gray-900/50 border rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
              plan.highlighted
                ? 'border-brand-green shadow-xl shadow-brand-green/20'
                : 'border-gray-800'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-brand-green to-brand-blue text-black text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-400">/ {plan.period}</span>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6 space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-brand-green' : 'text-brand-blue'
                      }`}
                    />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://apps.apple.com/app/tinylapse/id6738675309"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-brand-green to-brand-blue text-black hover:shadow-lg hover:shadow-brand-green/50 hover:scale-105'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                Şimdi Başla
              </a>

              <p className="text-center text-xs text-gray-500">
                İstediğiniz zaman iptal edebilirsiniz
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center space-y-4">
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Tüm planlar 3 gün ücretsiz deneme ile başlar. Deneme süresi boyunca tüm özelliklere tam erişiminiz olacak.
          İptal etmek tamamen ücretsiz ve kolaydır. Herhangi bir soru sorulmaz.
        </p>
      </div>
    </section>
  )
}
