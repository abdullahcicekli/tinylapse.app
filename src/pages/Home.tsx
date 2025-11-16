import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Features from '../components/Features'
import AppScreenshots from '../components/AppScreenshots'
import VideoShowcase from '../components/VideoShowcase'
import HowItWorks from '../components/HowItWorks'
import UseCases from '../components/UseCases'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Features />
      <AppScreenshots />
      <VideoShowcase />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <CTA />
    </>
  )
}

