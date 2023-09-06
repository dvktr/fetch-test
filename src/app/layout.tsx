import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Fetch Test',
  description: 'Fetch Study',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
