"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import cn from "clsx"
import { MobileMenu } from "./MobileMenu"

const ROUTES = [
  { id: 1, name: "Home", path: "#home" },
  { id: 2, name: "About Us", path: "#about" },
  { id: 4, name: "Services", path: "#services" },
  { id: 5, name: "Gallery", path: "#gallery" },
  { id: 6, name: "Contact Us", path: "#contact" },
]

const FOCUS_RING =
  "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg"

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [scrolled, setScrolled] = useState(false)
  const tickingRef = useRef(false)

  useEffect(() => {
    const updateFromScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let currentSection = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = `#${section.id}`
        }
      })

      setActiveSection(currentSection)
      setScrolled(window.scrollY > 50)
      tickingRef.current = false
    }
    
    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      requestAnimationFrame(updateFromScroll)
    }

    const initialHash = window.location.hash
    if (initialHash) setActiveSection(initialHash)

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      role="banner"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "py-2 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50 shadow-lg shadow-slate-900/20"
          : "py-2 backdrop-blur-md bg-slate-900/20",
      )}
    >
      <nav aria-label="Main navigation" className="container flex max-w-7xl mx-auto justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Magotlho TN Solutions — Home"
          className={cn("flex items-center space-x-3 group", FOCUS_RING)}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md scale-125" aria-hidden="true" />
            <img
              src="/TN-logo.png"
              alt="Magotlho TN Solutions logo"
              width={50}
              height={50}
              className="relative rounded-full bg-slate-300 p-1.5 border border-white/50 shadow-lg shadow-black/20 backdrop-blur-xs transition-all duration-300 group-hover:bg-white group-hover:shadow-blue-500/30"
            />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 font-syne">
              Magotlho TN
            </span>
            <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
              Solutions (PTY) LTD
            </p>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1" role="list">
          {ROUTES.map((route) => {
            const isActive = activeSection === route.path
            return (
              <li key={route.id}>
                <Link
                  href={route.path}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
                    FOCUS_RING,
                    isActive
                      ? "text-white bg-linear-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50",
                  )}
                >
                  {route.name}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-blue-400 to-blue-600 transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="#contact"
            className={cn(
              "px-6 py-2 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105",
              FOCUS_RING,
            )}
          >
            Get a Quote
          </Link>
        </div>

        <MobileMenu />
      </nav>
    </header>
  )
}