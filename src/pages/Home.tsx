import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Features from '../components/Features'
import WhyTinyLapse from '../components/WhyTinyLapse'
import Stats from '../components/Stats'
import AppScreenshots from '../components/AppScreenshots'
import VideoShowcase from '../components/VideoShowcase'
import HowItWorks from '../components/HowItWorks'
import UseCases from '../components/UseCases'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Features />
      <WhyTinyLapse />
      <Stats />
      <AppScreenshots />
      <VideoShowcase />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  )
}

