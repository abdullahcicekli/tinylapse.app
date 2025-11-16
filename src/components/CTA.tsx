import { useLanguage } from '../hooks/useLanguage'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="section-container">
      <div className="bg-gradient-to-b from-accent/5 to-transparent border border-gray-800 rounded-3xl p-12 md:p-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {t.cta.title}
          </h2>
          <p className="text-lg text-gray-300">
            {t.cta.subtitle}
          </p>
          <div className="pt-4">
            <a
              href="https://apps.apple.com/app/tinylapse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/download_badge.png"
                alt={t.cta.button}
                className="h-10 sm:h-12 w-auto"
              />
            </a>
          </div>
          <p className="text-sm text-gray-500">{t.cta.availableText}</p>
        </div>
      </div>
    </section>
  )
}

