"use client"

import { useEffect, useRef } from "react"
import { MapPin, Phone, MessageCircle, ExternalLink, Clock } from "lucide-react"

export default function ContatoSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contato"
      ref={ref}
      className="py-20 lg:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="fade-in-up">
            <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
              Localizacao e contato
            </span>
            <h2 className="text-foreground font-black text-4xl lg:text-5xl mt-2 mb-4 text-balance">
              Venha nos{" "}
              <span className="text-primary">Visitar</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto">
              Estamos localizados em Nova Friburgo - RJ e prontos para te receber. Entre em contato ou nos visite!
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact info */}
          <div className="space-y-5">
            {/* Address */}
            <div className="fade-in-up flex items-start gap-4 p-5 bg-muted rounded-2xl hover:border-primary/20 border border-transparent transition-colors">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-foreground font-bold text-base mb-0.5">Endereco</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  R. Pref. Gustavo Lira, 19 - Olaria
                  <br />
                  Nova Friburgo - RJ, CEP: 28623-390
                </p>
                <a
                  href="https://maps.google.com/?q=Academia+Viva+Mais+Nova+Friburgo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider mt-2 hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  Ver no Google Maps
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="fade-in-up flex items-start gap-4 p-5 bg-muted rounded-2xl border border-transparent hover:border-primary/20 transition-colors">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-foreground font-bold text-base mb-0.5">Telefone / WhatsApp</p>
                <a
                  href="tel:+5522988759075"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  (22) 98875-9075
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="fade-in-up flex items-start gap-4 p-5 bg-muted rounded-2xl border border-transparent hover:border-primary/20 transition-colors">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-foreground font-bold text-base mb-1">Horario de Funcionamento</p>
                <div className="space-y-0.5 text-sm text-muted-foreground">
                  <p>Seg — Sex: <span className="text-foreground font-semibold">05:00 — 22:00</span></p>
                  <p>Sabado: <span className="text-foreground font-semibold">07:00 — 14:00</span></p>
                  <p>Domingo: <span className="text-foreground font-semibold">Fechado</span></p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="fade-in-up">
              <a
                href="https://wa.me/5522988759075"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-base px-6 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="fade-in-up">
            <div className="rounded-2xl overflow-hidden border border-border h-full min-h-[400px] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.523756185066!2d-42.53081642475955!3d-22.283226679691406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97426f0000000001%3A0x1!2sR.+Pref.+Gustavo+L%C3%ADra%2C+19+-+Olaria%2C+Nova+Friburgo+-+RJ%2C+28623-390!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ minHeight: "400px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localizacao Academia Viva Mais - Nova Friburgo RJ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
