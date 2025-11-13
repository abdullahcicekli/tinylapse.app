import { Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Mother of Two',
      content:
        'TinyLapse helped me capture every precious moment of both my children\'s growth. The daily reminders were a lifesaver during those busy early months!',
      rating: 5,
    },
    {
      name: 'David K.',
      role: 'New Dad',
      content:
        'Watching our son\'s first year in a 60-second timelapse brought tears to my eyes. This app is absolutely worth it.',
      rating: 5,
    },
    {
      name: 'Emma L.',
      role: 'Twin Mom',
      content:
        'Managing two albums for my twins is so easy. I love being able to see their growth side by side in beautiful videos.',
      rating: 5,
    },
    {
      name: 'Michael R.',
      role: 'Photographer Dad',
      content:
        'As a photographer, I appreciate the alignment features. The quality is outstanding and the app is so intuitive.',
      rating: 5,
    },
  ]

  return (
    <section className="section-container bg-gray-900/20">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Loved by Parents Worldwide
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-brand-green/30 transition-all duration-300"
          >
            <Quote size={32} className="text-brand-green mb-4" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              "{testimonial.content}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-brand-green text-lg">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

