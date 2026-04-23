import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import PhotoGallery from './components/PhotoGallery'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import StickyFooter from './components/StickyFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f2f2f0] text-[#111]">
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Gallery />
      <PhotoGallery />
      <Testimonials />
      <About />
      <Contact />
      <StickyFooter />
    </div>
  )
}
