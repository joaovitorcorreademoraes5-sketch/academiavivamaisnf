"use client"

import { useEffect, useRef } from "react"
import { Clock, MessageCircle } from "lucide-react"

const schedule = [
  { day: "Segunda-feira", open: "05:00", close: "22:00", badge: "Abre cedo!" },
  { day: "Terca-feira", open: "05:00", close: "22:00", badge: "Abre cedo!" },
  { day: "Quarta-feira", open: "05:00", close: "22:00", badge: "Abre cedo!" },
  { day: "Quinta-feira", open: "05:00", close: "22:00", badge: "Abre cedo!" },
  { day: "Sexta-feira", open: "05:00", close: "22:00", badge: "Abre cedo!" },
  { day: "Sabado", open: "07:00", close: "14:00", badge: null },
  { day: "Domingo", open: "Fechado", close: null, badge: null },
]

export default function HorariosSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100)
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
      id="horarios"
      ref={ref}
      className="py-20 lg:py-28 bg-[oklch(0.1_0_0)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Header + Info */}
          <div>
            <div className="fade-in-up mb-8">
              <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
                Funcionamento
              </span>
              <h2 className="text-white font-black text-4xl lg:text-5xl mt-2 mb-4 text-balance">
                Horarios de{" "}
                <span className="text-primary">Funcionamento</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Nossos horarios foram pensados para caber na sua rotina. Abrimos cedo para quem treina antes do trabalho e fechamos tarde para quem prefere malhar a noite.
              </p>
            </div>

            {/* Highlight card */}
            <div className="fade-in-up bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">Nos dias uteis</p>
                  <p className="text-white/60 text-sm">Segunda a Sexta</p>
                </div>
              </div>
              <p className="text-primary font-black text-4xl">05:00 — 22:00</p>
              <p className="text-white/60 text-sm mt-1">
                Abrimos as 5h da manha para quem treina cedo!
              </p>
            </div>

            <div className="fade-in-up">
              <a
                href="https://wa.me/5522988759075"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-[oklch(0.55_0.22_42)] text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Confirmar horario via WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Schedule table */}
          <div className="fade-in-up">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              {schedule.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between px-5 py-4 ${
                    index !== schedule.length - 1 ? "border-b border-white/10" : ""
                  } ${item.open === "Fechado" ? "opacity-50" : "hover:bg-white/5"} transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.open === "Fechado" ? "bg-white/30" : "bg-primary"
                      }`}
                    />
                    <span className="text-white font-medium text-sm">{item.day}</span>
                    {item.badge && (
                      <span className="bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    {item.open === "Fechado" ? (
                      <span className="text-white/40 text-sm font-medium">Fechado</span>
                    ) : (
                      <span className="text-white font-bold text-sm">
                        {item.open} — {item.close}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-3 text-center">
              * Horarios sujeitos a alteracao em feriados. Confirme via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
