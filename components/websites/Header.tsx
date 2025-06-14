"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import cn from "clsx"
import { MobileMenu } from "./MobileMenu"

const ROUTES = [
  {
    id: 1,
    name: "Home",
    path: "#home",
  },
  {
    id: 2,
    name: "About Us",
    path: "#about",
  },
  {
    id: 4,
    name: "Services",
    path: "#services",
  },
  {
    id: 5,
    name: "Gallery",
    path: "#gallery",
  },
  {
    id: 6,
    name: "Contact Us",
    path: "#contact",
  },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let currentSection = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = `#${section.id}`
        }
      })

      setActiveSection(currentSection)
      setScrolled(window.scrollY > 50)
    }

    const initialHash = window.location.hash
    if (initialHash) {
      setActiveSection(initialHash)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 backdrop-blur-xl bg-slate-900/90 border-b border-slate-700/50 shadow-lg shadow-slate-900/20"
          : "py-4 backdrop-blur-md bg-slate-900/70",
      )}
    >
      <nav className="container flex max-w-7xl mx-auto justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link href={"/"} className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/images/TN_logo.png"
              alt="Magotlho TN Solutions Logo"
              width={45}
              height={45}
              className="relative rounded-full border-2 border-blue-500/30 group-hover:border-blue-400/50 transition-colors duration-300"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
              Magotlho TN
            </h1>
            <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
              Solutions
            </p>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {ROUTES.map((route) => (
            <li key={route.id}>
              <Link
                href={route.path}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
                  activeSection === route.path
                    ? "text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50",
                )}
              >
                {route.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300",
                    activeSection === route.path ? "w-full" : "group-hover:w-full",
                  )}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="#contact"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
          >
            Get Quote
          </Link>
        </div>

        <MobileMenu />
      </nav>
    </header>
  )
}
