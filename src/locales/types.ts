export type Language = 'tr' | 'en' | 'es' | 'de'

export interface Translation {
  // Navigation
  nav: {
    features: string
    howItWorks: string
    faq: string
    contact: string
  }

  // Hero
  hero: {
    title: string
    subtitle: string
    cta: string
    stats: {
      parents: string
      photos: string
      rating: string
    }
  }

  // Features
  features: {
    title: string
    titleHighlight: string
    items: Array<{
      title: string
      description: string
    }>
  }

  // Why TinyLapse
  whyTinyLapse: {
    title: string
    titleHighlight: string
    reasons: Array<{
      title: string
      description: string
    }>
  }

  // Stats
  stats: {
    title: string
    titleHighlight: string
    items: Array<{
      value: string
      label: string
      description: string
    }>
  }

  // How It Works
  howItWorks: {
    title: string
    titleHighlight: string
    steps: Array<{
      title: string
      description: string
    }>
  }

  // Use Cases
  useCases: {
    title: string
    titleHighlight: string
  }

  // Testimonials
  testimonials: {
    title: string
    titleHighlight: string
    items: Array<{
      name: string
      location: string
      title: string
      content: string
    }>
  }

  // Pricing
  pricing: {
    title: string
    titleHighlight: string
    freeTrial: string
    freeTrialBadge: string
    plans: {
      weekly: {
        name: string
        period: string
        description: string
        features: string[]
      }
      yearly: {
        name: string
        period: string
        description: string
        badge: string
        features: string[]
      }
    }
    cta: string
    cancelAnytime: string
    disclaimer: string
  }

  // CTA
  cta: {
    title: string
    subtitle: string
    button: string
  }

  // Footer
  footer: {
    description: string
    quickLinks: string
    legal: string
    followUs: string
    copyright: string
  }

  // FAQ
  faq: {
    title: string
    items: Array<{
      question: string
      answer: string
    }>
  }
}
