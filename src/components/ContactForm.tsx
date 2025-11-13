import { useState, FormEvent } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error')
      return
    }

    // In a real app, this would send to a backend
    // For now, we'll simulate success
    console.log('Form submitted:', formData)
    
    // Create mailto link
    const mailtoLink = `mailto:support@tinylapse.app?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset status after 5 seconds
    setTimeout(() => setStatus('idle'), 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300"
            placeholder="your@email.com"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300"
            placeholder="What's this about?"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all duration-300 resize-none"
            placeholder="Your message..."
          />
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="bg-brand-green/10 border border-brand-green/20 text-brand-green px-4 py-3 rounded-lg">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg">
            Please fill in all required fields.
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          style={{ 
            background: 'linear-gradient(135deg, #D4F7A5 0%, #A8D8F0 100%)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #B8E986 0%, #7BC4E8 100%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #D4F7A5 0%, #A8D8F0 100%)';
          }}
        >
          <Send size={20} />
          <span>Send Message</span>
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Or email us directly at{' '}
          <a
            href="mailto:support@tinylapse.app"
            className="text-brand-green hover:text-brand-blue transition-colors"
          >
            support@tinylapse.app
          </a>
        </p>
      </div>
    </div>
  )
}

