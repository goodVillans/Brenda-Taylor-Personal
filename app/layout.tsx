import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brenda Taylor - movement and pilates specialist',
  description: 'Meet Brenda Taylor, a dedicated Pilates and movement specialist passionate about enhancing your physical wellness and flexibility. With a unique blend of expert Pilates instruction and tailored movement therapy, Brenda helps clients achieve balanced, pain-free living and improved body awareness. Discover your path to a stronger, more agile you with Brendas holistic approach to fitness and health.',
  icons: './icon.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
