import SEO from '../components/SEO'
import { useLanguage } from '../hooks/useLanguage'

export default function Terms() {
  const { t } = useLanguage()

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <SEO
        title="Terms & Conditions | TinyLapse"
        description="Read the Terms & Conditions for using TinyLapse app."
        canonicalUrl="https://tinylapse.app/terms"
      />

      <section className="section-container pt-44 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-8">
              {t.terms.title}
            </h1>
            <p className="text-gray-400">{t.terms.lastUpdated}: {currentDate}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                {t.terms.intro}
              </p>
            </div>

            {/* Dynamic Sections */}
            {t.terms.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                )}
                {section.items && section.items.length > 0 && (
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
                {/* Show contact email on last section */}
                {index === t.terms.sections.length - 1 && (
                  <p className="text-gray-300">
                    Email:{' '}
                    <a
                      href={`mailto:${t.terms.contactEmail}`}
                      className="text-brand-green hover:text-brand-blue transition-colors"
                    >
                      {t.terms.contactEmail}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

