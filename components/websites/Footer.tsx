"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Mail, Phone, Facebook, Zap, Sun, Home, ArrowUp, MapPin, Clock8 } from "lucide-react"

const services = [
  { name: "Electric Fence Installation", icon: <Zap className="w-4 h-4" aria-hidden="true" /> },
  { name: "Solar Installation", icon: <Sun className="w-4 h-4" aria-hidden="true" /> },
  { name: "House Wiring", icon: <Home className="w-4 h-4" aria-hidden="true" /> },
]

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
  { name: "Request Quotation", href: "/"}
]

const FOCUS_RING =
  "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer
      role="contentinfo"
      className="bg-slate-900/50 backdrop-blur-xs border-t border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="Magotlho TN Solutions — Home"
              className={`flex items-center space-x-3 mb-6 group w-fit ${FOCUS_RING}`}
            >
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-r from-blue-500 to-blue-600 rounded-full blur-xs opacity-75"
                />
                <img
                  src="/TN-logo.png"
                  alt="Magotlho TN Solutions logo"
                  width={60}
                  height={60}
                  loading="eager"
                  decoding="async"
                  className="relative rounded-full bg-slate-700 p-1.5 border border-white/50 shadow-lg shadow-black/20 backdrop-blur-xs transition-all duration-300 group-hover:bg-slate-500 group-hover:shadow-blue-500/30"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-syne leading-tight">
                  Magotlho TN Solutions
                </span>
                <p className="text-sm text-slate-400">(PTY) LTD</p>
              </div>
            </Link>

            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Professional electrical services, security solutions, and quality supplies for residential and commercial
              properties. Established in 2021 with a commitment to excellence.
            </p>

            <address className="not-italic space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:Info@tnsolution.co.za"
                  className={`hover:text-blue-400 transition-colors duration-300 ${FOCUS_RING}`}
                >
                  Info@tnsolution.co.za
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href="tel:+27835585199"
                  className={`hover:text-blue-400 transition-colors duration-300 ${FOCUS_RING}`}
                >
                  (083) 558 5199
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Facebook className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href="https://www.facebook.com/profile.php?id=100086507600571"
                  className={`hover:text-blue-400 transition-colors duration-300 ${FOCUS_RING}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TN Solutions Pty Ltd on Facebook (opens in new tab)"
                >
                  TN Solutions Pty Ltd
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href="https://www.google.com/maps/place/47+Irvine+St,+Wolmaransstad,+2630/@-27.378187,26.978847,17z/data=!3m1!4b1!4m6!3m5!1s0x1e9a7f8c2d7f8c2d:0x8c2d7f8c2d7f8c2d!8m2!3d-27.378187!4d26.9810357!16s%2Fg%2F11b6v9k5qg"
                  className={`hover:text-blue-400 transition-colors duration-300 ${FOCUS_RING}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Magotlho TN Solutions on Google Maps location (opens in new tab)"
                >
                  47 Irvine Street, Wolmaransstad, 2630
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Clock8 className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href="#"
                  className={`hover:text-blue-400 transition-colors duration-300 ${FOCUS_RING}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Magotlho TN Solutions on Facebook (opens in new tab)"
                >
                  Mon - Fri: 08:00 - 17:00, Sat: 09:00 - 14:00
                </a>
              </div>
            </address>
          </div>
          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-semibold text-white mb-6 font-syne">Quick Links</h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-slate-300 hover:text-blue-400 transition-colors duration-300 inline-flex items-center group ${FOCUS_RING}`}
                  >
                    <span
                      aria-hidden="true"
                      className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-syne">Top Services</h3>
            <ul className="space-y-3" role="list">
              {services.map((service) => (
                <li key={service.name} className="flex items-center space-x-3 text-slate-300">
                  <div className="text-blue-400">{service.icon}</div>
                  <span className="text-sm">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              &copy; {currentYear ?? new Date().getFullYear()} Magotlho TN Solutions (PTY) LTD. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span className="hidden sm:inline">Supply, Installation &amp; Maintenance</span>
              <div aria-hidden="true" className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="hidden sm:inline">Professional Excellence</span>
            </div>

            <a
              href="#top"
              className={`inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-blue-400 transition-colors duration-300 ${FOCUS_RING}`}
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}