"use client"

import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"

const depoimentos = [
  {
    name: "Aline Gomes",
    text: "Otimaaa!! Eu amo estar la. O ambiente e incrivel, os profissionais sao atenciosos e o treino e sempre produtivo!",
    stars: 5,
    initial: "A",
  },
  {
    name: "Keity Felix",
    text: "Simplesmente maravilhoso malhar nessa academia. Recomendo muito para quem quer resultados de verdade.",
    stars: 5,
    initial: "K",
  },
  {
    name: "Eduarda Pereira",
    text: "Super recomendo, otimo atendimento e otimos profissionais. Me sinto em casa cada vez que entro aqui.",
    stars: 5,
    initial: "E",
  },
  {
    name: "Cliente Google",
    text: "Um lugar otimo para quem deseja iniciar no mundo fitness. Me senti acolhido desde o primeiro dia!",
    stars: 5,
    initial: "C",
  },
  {
    name: "Cliente Google",
    text: "Gosto do ambiente, os professores sao educados e preparados. Melhor academia de Nova Friburgo!",
    stars: 5,
    initial: "C",
  },
]

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-primary fill-primary" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export default function DepoimentosSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 130)
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
      id="depoimentos"
      ref={ref}
      className="py-20 lg:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="fade-in-up">
            <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
              Avaliacoes reais
            </span>
            <h2 className="text-foreground font-black text-4xl lg:text-5xl mt-2 mb-4 text-balance">
              O que nossos{" "}
              <span className="text-primary">alunos dizem</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="text-foreground font-black text-xl">4,8</span>
              <span className="text-muted-foreground text-sm">— 75 avaliacoes no Google</span>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((dep, index) => (
            <div
              key={`${dep.name}-${index}`}
              className="fade-in-up group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: dep.stars }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">
                &quot;{dep.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{dep.initial}</span>
                </div>
                <div>
                  <p className="text-foreground font-bold text-sm">{dep.name}</p>
                  <p className="text-muted-foreground text-xs">Google Reviews</p>
                </div>
                {/* Google G */}
                <div className="ml-auto">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
