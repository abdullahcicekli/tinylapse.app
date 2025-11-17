import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

interface FAQ {
  question: string
  answer: string
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  const faqs: FAQ[] = t.faq.items

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

