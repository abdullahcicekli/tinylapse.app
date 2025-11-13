import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQ[] = [
    {
      question: 'Is TinyLapse free to use?',
      answer:
        'TinyLapse offers a free version with basic features. Premium features like unlimited albums and HD video export are available through a one-time purchase or subscription.',
    },
    {
      question: 'Where are my photos stored?',
      answer:
        'All photos are stored securely on your device and synced with your personal iCloud account. We never have access to your photos.',
    },
    {
      question: 'Can I use TinyLapse for multiple children?',
      answer:
        'Absolutely! You can create separate albums for each child, making it easy to track multiple growth journeys.',
    },
    {
      question: 'What video formats does TinyLapse support?',
      answer:
        'TinyLapse exports videos in MP4 format with HD quality (1080p), perfect for sharing on social media or keeping as memories.',
    },
    {
      question: 'Can I customize the reminder frequency?',
      answer:
        'Yes! You can set reminders from daily to every 30 days, or turn them off completely for any album.',
    },
    {
      question: 'Is my data backed up?',
      answer:
        'Yes, all your photos automatically sync to your iCloud account, ensuring your memories are always safe.',
    },
    {
      question: 'Can I export individual photos?',
      answer:
        'Yes, you can export any photo from your albums to your device\'s photo library at any time.',
    },
    {
      question: 'What happens if I miss a day?',
      answer:
        'No problem! You can take photos anytime. The app will still create a beautiful timelapse with whatever photos you have.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-800 rounded-xl overflow-hidden hover:border-brand-green/50 transition-colors duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="font-semibold text-lg pr-8">{faq.question}</span>
            <ChevronDown
              size={24}
              className={`text-brand-green flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

