import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Circulo Dashboard | Eco-Merch Aggregator',
  description: 'Pantau metrik ESG dan status pesanan Eco-Merch B2B Anda.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  )
}
