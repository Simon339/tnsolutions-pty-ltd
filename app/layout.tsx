import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Providers from "@/components/websites/provider"

export const metadata: Metadata = {
  title: "Magotlho TN Solutions (PTY) LTD",
  description: "Supply, Installation and Maintenance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/TN-logo.png" rel="icon" />
      </head>
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

