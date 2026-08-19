"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import cn from "clsx"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const ROUTES = [
  { id: 1, name: "Home", path: "#home" },
  { id: 2, name: "About Us", path: "#about" },
  { id: 4, name: "Services", path: "#services" },
  { id: 5, name: "Gallery", path: "#gallery" },
  { id: 6, name: "Contact Us", path: "#contact" },
]

const FOCUS_RING = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let currentSection = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = `#${section.id}`
        }
      })

      setActiveSection(currentSection)
    }

    const initialHash = window.location.hash
    if (initialHash) {
      setActiveSection(initialHash)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn("p-2 lg:hidden hover:bg-slate-800/50 transition-colors duration-300", FOCUS_RING)}
        >
          <Menu className="h-6 w-6 text-white" aria-hidden="true" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-75 sm:w-87.5 bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 text-white"
      >
        <VisuallyHidden>
          <h2>Mobile Menu</h2>
        </VisuallyHidden>

        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between py-4 border-b border-slate-700/50">
            <div className="flex items-center space-x-3">
              <img
                src="/TN-logo.png"
                alt="Magotlho TN Solutions logo"
                width={32}
                height={32}
                loading="lazy"
                className="rounded-full border border-blue-500/30"
              />
              <div>
                <h3 className="text-sm font-semibold text-white">Magotlho TN</h3>
                <p className="text-xs text-slate-400">Solutions</p>
              </div>
            </div>
          </div>

          <nav aria-label="Mobile navigation" className="flex flex-col gap-2 py-6 flex-1">
            {ROUTES.map((route) => (
              <a
                key={route.path}
                href={route.path}
                aria-current={activeSection === route.path ? "page" : undefined}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 group",
                  FOCUS_RING,
                  activeSection === route.path
                    ? "text-white bg-linear-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50",
                )}
                onClick={() => setOpen(false)}
              >
                <span className="flex-1">{route.name}</span>
                {activeSection === route.path && (
                  <div aria-hidden="true" className="w-2 h-2 bg-white rounded-full" />
                )}
              </a>
            ))}
          </nav>

          <div className="border-t border-slate-700/50 pt-6">
            <a
              href="#contact"
              className={cn(
                "w-full flex items-center justify-center px-6 py-3 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25",
                FOCUS_RING,
              )}
              onClick={() => setOpen(false)}
            >
              Get Quote
            </a>
            <p className="text-xs text-slate-400 text-center mt-4">Professional electrical services</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}