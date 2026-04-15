import { Dumbbell, MapPin, Phone, Instagram, Facebook, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.08_0_0)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block text-white font-black text-lg uppercase leading-none">Viva Mais</span>
                <span className="block text-primary text-[10px] font-semibold uppercase tracking-widest">Academia</span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-4">
              Nao e sobre perda de peso. E sobre ganho de vida. Um espaco inclusivo, acolhedor e dedicado ao seu bem-estar.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-lg">🏳️‍🌈</span>
              <span className="text-white/50 text-xs">Espaco LGBTQ+ friendly</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  R. Pref. Gustavo Lira, 19 - Olaria
                  <br />
                  Nova Friburgo - RJ
                  <br />
                  CEP: 28623-390
                </span>
              </div>
              <a
                href="tel:+5522988759075"
                className="flex items-center gap-2.5 text-white/60 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                (22) 98875-9075
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Redes Sociais</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/vivamaisacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                @vivamaisacademy
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </div>
                Facebook
              </a>
              <a
                href="https://wa.me/5522988759075"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-[#25D366] transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#25D366]/20 flex items-center justify-center transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; 2025 Academia Viva Mais — Todos os direitos reservados
          </p>
          <p className="text-white/30 text-xs">
            Nova Friburgo - RJ
          </p>
        </div>
      </div>
    </footer>
  )
}
