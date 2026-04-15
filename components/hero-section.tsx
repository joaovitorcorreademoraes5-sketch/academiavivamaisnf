"use client"

import { useEffect, useRef } from "react"
import { MessageCircle, Star, MapPin } from "lucide-react"

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    setTimeout(() => {
      el.classList.add("visible")
    }, 100)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://placehold.co/1920x1080?text=Modern+gym+interior+with+weights+equipment+people+training+dark+atmosphere+orange+lighting"
          alt="Academia moderna com pessoas treinando em ambiente bem iluminado"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-[oklch(0.1_0_0)]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1_0_0)]/90 via-[oklch(0.1_0_0)]/60 to-transparent" />
      </div>

      {/* Decorative orange accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary z-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div
          ref={contentRef}
          className="fade-in-up max-w-2xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-6">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-white text-xs font-semibold">4,8 — 75 avaliações no Google</span>
          </div>

          {/* Logo text */}
          <div className="mb-4">
            <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
              Academia
            </span>
            <h1 className="text-white font-black text-6xl sm:text-7xl lg:text-8xl uppercase leading-none tracking-tight mt-1">
              Viva
              <br />
              <span className="text-primary">Mais</span>
            </h1>
          </div>

          {/* Slogan */}
          <p className="text-white/90 text-lg sm:text-xl font-medium leading-relaxed mb-2 text-pretty">
            &quot;Nao e sobre perda de peso!
          </p>
          <p className="text-primary text-2xl sm:text-3xl font-extrabold leading-relaxed mb-8 text-pretty">
            E sobre ganho de vida.&quot;
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span>R. Pref. Gustavo Lira, 19 — Olaria, Nova Friburgo - RJ</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5522988759075"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[oklch(0.55_0.22_42)] text-white font-bold text-base uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Comece Agora
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-primary text-white hover:text-primary font-bold text-base uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200"
            >
              Saiba Mais
            </a>
          </div>

          {/* LGBTQ+ Friendly Badge */}
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <span className="text-lg">🏳️‍🌈</span>
            <span className="text-white/80 text-xs font-medium">Espaco inclusivo e LGBTQ+ friendly</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-widest">Role</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
