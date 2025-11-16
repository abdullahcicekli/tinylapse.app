import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | TinyLapse"
        description="Have questions about TinyLapse? Get in touch with us. We'd love to hear from you."
        canonicalUrl="https://tinylapse.app/contact"
      />

      <section className="section-container pt-36 md:pt-32">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Get in Touch</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <ContactForm />
      </section>
    </>
  )
}

