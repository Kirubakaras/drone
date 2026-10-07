import { useScrollReveal } from '../hooks/useScrollReveal'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustStats from '../components/TrustStats'
import About from '../components/About'
import DroneProducts from '../components/DroneProducts'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import AgricultureShowcase from '../components/AgricultureShowcase'
import SpareParts from '../components/SpareParts'
import CTASection from '../components/CTASection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <DroneProducts />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <AgricultureShowcase />
        <SpareParts />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
