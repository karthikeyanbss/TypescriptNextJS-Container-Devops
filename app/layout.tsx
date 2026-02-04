import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NextJS TypeScript Azure App',
  description: 'Production-ready NextJS application deployed on Azure Container Apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
