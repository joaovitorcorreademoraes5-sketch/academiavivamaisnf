"use client"

import { useState } from "react"
import { X, MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="flex items-center gap-2 bg-white text-foreground rounded-xl shadow-xl px-4 py-3 max-w-[200px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-muted-foreground rounded-full flex items-center justify-center"
            aria-label="Fechar"
          >
            <X className="w-3 h-3 text-white" />
          </button>
          <p className="text-xs font-medium leading-relaxed text-gray-700">
            Fale conosco agora pelo WhatsApp!
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/5522988759075?text=Ola!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Academia%20Viva%20Mais."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      >
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="w-7 h-7 text-white relative z-10 fill-white" />
      </a>
    </div>
  )
}
