import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import DiferenciaisSection from "@/components/diferenciais-section"
import DepoimentosSection from "@/components/depoimentos-section"
import HorariosSection from "@/components/horarios-section"
import ContatoSection from "@/components/contato-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DiferenciaisSection />
      <DepoimentosSection />
      <HorariosSection />
      <ContatoSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
