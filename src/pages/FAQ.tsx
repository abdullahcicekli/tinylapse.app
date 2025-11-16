import SEO from '../components/SEO'
import FAQAccordion from '../components/FAQAccordion'
import CTA from '../components/CTA'

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | TinyLapse"
        description="Find answers to common questions about TinyLapse, the baby growth timelapse app for iPhone."
        canonicalUrl="https://tinylapse.app/faq"
      />

      <section className="section-container pt-36 md:pt-32">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about TinyLapse
          </p>
        </div>

        <FAQAccordion />
      </section>

      <CTA />
    </>
  )
}

