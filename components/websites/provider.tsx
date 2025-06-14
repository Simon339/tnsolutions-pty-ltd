"use client"

import type React from "react"

import { ThemeProvider } from "next-themes"
import { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
          <div className="text-white font-medium">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Header />
        <main className="flex-grow pt-10">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
