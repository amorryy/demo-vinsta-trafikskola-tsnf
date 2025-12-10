import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinsta Trafikskola - Din väg till körkortet',
  description: 'Vinsta Trafikskola erbjuder kvalitativ körkortutbildning med erfarna trafiklärarinstruktörer. Boka din körlektion idag!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>{children}</body>
    </html>
  )
}