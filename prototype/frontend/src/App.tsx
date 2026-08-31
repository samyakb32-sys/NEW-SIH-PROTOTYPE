import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import LogoMarquee from "./components/LogoMarquee"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Roles from "./components/Roles"
import Impact from "./components/Impact"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <HowItWorks />
        <Roles />
        <Impact />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
