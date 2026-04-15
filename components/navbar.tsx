"use client"

import { useState, useEffect } from "react"
import { Menu, X, Dumbbell } from "lucide-react"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Horarios", href: "#horarios" },
  { label: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.1_0_0)] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-black text-base tracking-wide uppercase leading-none">
                Viva Mais
              </span>
              <span className="block text-primary text-[10px] font-semibold uppercase tracking-widest leading-none">
                Academia
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-primary text-sm font-medium uppercase tracking-wider transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <a
            href="https://wa.me/5522988759075"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-[oklch(0.55_0.22_42)] text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-primary/30 hover:shadow-lg"
          >
            Comece Agora
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[oklch(0.1_0_0)] border-t border-white/10`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-white/80 hover:text-primary text-sm font-medium uppercase tracking-wider py-3 border-b border-white/10 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5522988759075"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center bg-primary hover:bg-[oklch(0.55_0.22_42)] text-white text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-colors duration-200"
          >
            Comece Agora
          </a>
        </nav>
      </div>
    </header>
  )
}
