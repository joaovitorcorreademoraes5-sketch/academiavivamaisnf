import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Academia Viva Mais — Nova Friburgo RJ',
  description: 'Academia Viva Mais em Nova Friburgo - RJ. Nao e sobre perda de peso, e sobre ganho de vida! Ambiente inclusivo, acolhedor e LGBTQ+ friendly. Avaliacao 4.8 estrelas no Google.',
  keywords: 'academia, nova friburgo, viva mais, fitness, musculacao, saude, bem-estar, LGBTQ+',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
