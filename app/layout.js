import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CNC EXPERT',
  description: 'Impulsamos la innovación en la fabricación de PCBs con nuestros CNC routers. Haz realidad tus proyectos electrónicos con el toque innovador que ofrecemos.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
