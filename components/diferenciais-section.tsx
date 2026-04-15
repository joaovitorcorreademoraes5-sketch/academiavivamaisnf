"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2, Users2, Star, Dumbbell, Heart, Award, TrendingUp } from "lucide-react"

const diferenciais = [
  {
    icon: Award,
    title: "Profissionais Qualificados",
    description: "Nossa equipe e formada por educadores fisicos capacitados, prontos para te guiar com seguranca e eficiencia.",
  },
  {
    icon: Heart,
    title: "Ambiente Acolhedor",
    description: "Um espaco onde voce se sente bem-vindo desde o primeiro dia. Inclusao e respeito sao nossos valores fundamentais.",
  },
  {
    icon: CheckCircle2,
    title: "Otimo Atendimento",
    description: "Do primeiro contato ao acompanhamento diario, nossa equipe esta sempre pronta para te atender com dedicacao.",
  },
  {
    icon: Star,
    title: "4,8 estrelas no Google",
    description: "Com 75 avaliacoes reais no Google, nossa reputacao fala por si so. Confie em quem ja confiou.",
  },
  {
    icon: TrendingUp,
    title: "Para Todos os Niveis",
    description: "Seja voce iniciante ou ja avancado no fitness, temos a estrutura e o suporte ideal para o seu nivel.",
  },
  {
    icon: Users2,
    title: "Espaco LGBTQ+ Friendly",
    description: "Acreditamos que saude nao tem restricoes. Aqui todo mundo treina, evolui e e respeitado.",
  },
]

export default function DiferenciaisSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120)
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
      id="diferenciais"
      ref={ref}
      className="py-20 lg:py-28 bg-[oklch(0.1_0_0)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="fade-in-up">
            <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
              Por que nos escolher
            </span>
            <h2 className="text-white font-black text-4xl lg:text-5xl mt-2 mb-4 text-balance">
              Nossos{" "}
              <span className="text-primary">Diferenciais</span>
            </h2>
            <p className="text-white/60 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Na Academia Viva Mais, cada detalhe foi pensado para te proporcionar a melhor experiencia de treino possivel.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => (
            <div
              key={item.title}
              className="fade-in-up group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-in-up text-center mt-14">
          <a
            href="https://wa.me/5522988759075"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-[oklch(0.55_0.22_42)] text-white font-bold text-base uppercase tracking-wider px-10 py-4 rounded-full transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5"
          >
            <Dumbbell className="w-5 h-5" />
            Quero Comecar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
