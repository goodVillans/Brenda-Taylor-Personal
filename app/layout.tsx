import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import icon from './icon.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brenda Taylor - Movement and Pilates specialist',
  description: 'Meet Brenda Taylor, a dedicated Pilates and movement specialist passionate about enhancing your physical wellness and flexibility. With a unique blend of expert Pilates instruction and tailored movement therapy, Brenda helps clients achieve balanced, pain-free living and improved body awareness. Discover your path to a stronger, more agile you with Brendas holistic approach to fitness and health.',
  icon: icon
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`layout ${inter.className}`}>{children}</body>
    </html>
  )
}
