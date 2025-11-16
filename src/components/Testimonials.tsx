import { Quote } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function Testimonials() {
  const { t } = useLanguage()

  const testimonials = t.testimonials.items.map((item) => ({
    ...item,
    rating: 5,
  }))

  return (
    <section className="section-container bg-gray-900/20">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {t.testimonials.title} <span className="gradient-text">{t.testimonials.titleHighlight}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-brand-green/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-green/10"
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-brand-green text-lg">
                  ⭐
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2 gradient-text">{testimonial.title}</h3>
            <Quote size={24} className="text-brand-green/50 mb-3" />
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              "{testimonial.content}"
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

