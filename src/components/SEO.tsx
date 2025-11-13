import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonicalUrl?: string
}

const defaultSEO = {
  title: 'TinyLapse - Baby Growth Timelapse Video App for iPhone',
  description:
    "Capture your baby's growth journey with daily photo reminders. Create beautiful timelapse videos showing every precious moment. The ultimate baby growth tracker app for iPhone.",
  keywords:
    'baby growth timelapse, baby photo app, baby video maker, daily photo reminder, baby milestone tracker, baby timelapse app, pregnancy timelapse, baby growth tracker',
  ogImage: '/og-image.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  url: 'https://tinylapse.app',
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  ogType,
  twitterCard,
  canonicalUrl,
}: SEOProps) {
  const seoTitle = title || defaultSEO.title
  const seoDescription = description || defaultSEO.description
  const seoKeywords = keywords || defaultSEO.keywords
  const seoOgImage = ogImage || defaultSEO.ogImage
  const seoOgType = ogType || defaultSEO.ogType
  const seoTwitterCard = twitterCard || defaultSEO.twitterCard
  const seoCanonicalUrl = canonicalUrl || defaultSEO.url

  useEffect(() => {
    // Update document title
    document.title = seoTitle

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', seoDescription)
    updateMetaTag('keywords', seoKeywords)

    // Open Graph tags
    updateMetaTag('og:title', seoTitle, true)
    updateMetaTag('og:description', seoDescription, true)
    updateMetaTag('og:image', seoOgImage, true)
    updateMetaTag('og:type', seoOgType, true)
    updateMetaTag('og:url', seoCanonicalUrl, true)

    // Twitter Card tags
    updateMetaTag('twitter:card', seoTwitterCard)
    updateMetaTag('twitter:title', seoTitle)
    updateMetaTag('twitter:description', seoDescription)
    updateMetaTag('twitter:image', seoOgImage)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', seoCanonicalUrl)

    // JSON-LD Schema
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'TinyLapse',
      description: seoDescription,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'iOS',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '4',
      },
    }

    let scriptTag = document.querySelector('script[type="application/ld+json"]')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.setAttribute('type', 'application/ld+json')
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(schemaData)
  }, [
    seoTitle,
    seoDescription,
    seoKeywords,
    seoOgImage,
    seoOgType,
    seoTwitterCard,
    seoCanonicalUrl,
  ])

  return null
}

