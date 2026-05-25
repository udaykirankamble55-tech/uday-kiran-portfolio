import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Uday Kiran Kamble — UI/UX Designer',
  description: 'UI/UX Designer & Brand Visual Designer from Hyderabad. I don\'t design screens. I design decisions.',
  openGraph: {
    title: 'Uday Kiran Kamble — UI/UX Designer',
    description: 'Pixels with purpose. Silence that sells.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
