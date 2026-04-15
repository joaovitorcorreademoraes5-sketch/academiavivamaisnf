"use client"

import { useEffect, useRef } from "react"
import { Heart, Users, Award } from "lucide-react"

const stats = [
  { value: "4,8", label: "Estrelas no Google", icon: Award },
  { value: "75+", label: "Avaliacoes positivas", icon: Star },
  { value: "100%", label: "Ambiente inclusivo", icon: Heart },
]

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export default function AboutSection() {
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="fade-in-up relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://placehold.co/600x750?text=Professional+gym+trainers+helping+diverse+group+of+people+workout+warm+atmosphere"
                alt="Profissionais da academia ajudando alunos a treinarem em ambiente acolhedor"
                className="w-full h-full object-cover"
              />
              {/* Orange accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-[oklch(0.1_0_0)] rounded-2xl p-5 shadow-2xl border border-white/10">
              <div className="flex items-center gap-0.5 mb-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-white font-black text-2xl">4,8</p>
              <p className="text-white/60 text-xs">75 avaliacoes no Google</p>
            </div>
            {/* LGBTQ+ badge */}
            <div className="absolute -top-4 -left-4 lg:-left-6 bg-white rounded-xl p-3 shadow-xl">
              <span className="text-2xl">🏳️‍🌈</span>
            </div>
          </div>

          {/* Text column */}
          <div className="space-y-6">
            <div className="fade-in-up">
              <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
                Sobre nos
              </span>
              <h2 className="text-foreground font-black text-4xl lg:text-5xl mt-2 leading-tight text-balance">
                Um espaco feito{" "}
                <span className="text-primary">para todos</span>
              </h2>
            </div>

            <p className="fade-in-up text-muted-foreground text-base lg:text-lg leading-relaxed">
              A Academia Viva Mais e um espaco dedicado a saude, bem-estar e qualidade de vida. Um ambiente acolhedor, inclusivo e preparado para receber a todos — independente de quem voce e ou de onde voce vem.
            </p>

            <p className="fade-in-up text-muted-foreground text-base lg:text-lg leading-relaxed">
              Nossos profissionais sao educados, preparados e prontos para te ajudar a evoluir. Seja voce iniciante ou avancado, aqui voce encontra o suporte que precisa para transformar sua vida.
            </p>

            <div className="fade-in-up flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl p-4">
              <span className="text-2xl flex-shrink-0">🏳️‍🌈</span>
              <p className="text-foreground font-semibold text-sm leading-relaxed">
                Somos um espaco <span className="text-primary font-bold">LGBTQ+ friendly</span>. Aqui todo mundo e bem-vindo e respeitado!
              </p>
            </div>

            {/* Stats */}
            <div className="fade-in-up grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "4,8", label: "Stars Google" },
                { value: "75+", label: "Avaliacoes" },
                { value: "100%", label: "Inclusivo" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-muted rounded-xl">
                  <p className="font-black text-2xl text-primary">{stat.value}</p>
                  <p className="text-muted-foreground text-xs font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
