import SEO from '../components/SEO'
import { useLanguage } from '../hooks/useLanguage'

export default function Privacy() {
  const { t } = useLanguage()

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <SEO
        title="Privacy Policy | TinyLapse"
        description="Learn about how TinyLapse protects your privacy and handles your data."
        canonicalUrl="https://tinylapse.app/privacy"
      />

      <section className="section-container pt-44 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">{t.privacy.title}</h1>
            <p className="text-gray-600 dark:text-gray-400">{t.privacy.lastUpdated}: {currentDate}</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.privacy.intro}
              </p>
            </div>

            {/* Dynamic Sections */}
            {t.privacy.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                )}
                {section.items && section.items.length > 0 && (
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.label && <strong>{item.label}</strong>} {item.text}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Show contact email on last section */}
                {index === t.privacy.sections.length - 1 && (
                  <p className="text-gray-700 dark:text-gray-300">
                    Email:{' '}
                    <a
                      href={`mailto:${t.privacy.contactEmail}`}
                      className="text-brand-green-dark dark:text-brand-green hover:text-brand-blue-dark dark:hover:text-brand-blue transition-colors"
                    >
                      {t.privacy.contactEmail}
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

