"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Mail, Phone, Facebook, Zap, Sun, Home } from "lucide-react"

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
]

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer
      role="contentinfo"
      className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Magotlho TN Solutions — Home" className="flex items-center space-x-3 mb-6 group w-fit">
              <div className="relative">
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-sm opacity-75" />
                <img
                  src="/TN-logo.png"
                  alt="Magotlho TN Solutions logo"
                  width={40}
                  height={40}
                  className="relative rounded-full bg-slate-300 p-1.5 border border-white/50 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-blue-500/30"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-syne">Magotlho TN Solutions</span>
                <p className="text-sm text-slate-400">(PTY) LTD</p>
              </div>
            </Link>

            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Professional electrical services, security solutions, and quality supplies for residential and commercial
              properties. Established in 2021 with a commitment to excellence.
            </p>

            <address className="not-italic space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:Info@magotlhotnsolutions.co.za"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Info@magotlhotnsolutions.co.za
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+27835585199" className="hover:text-blue-400 transition-colors duration-300">
                  (083) 558 5199
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Facebook className="w-5 h-5 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://www.facebook.com/profile.php?id=100086507600571"
                  className="hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Magotlho TN Solutions on Facebook (opens in new tab)"
                >
                  Magotlho TN Solutions
                </a>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-semibold text-white mb-6 font-syne">Quick Links</h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span aria-hidden="true" className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Top Services */}
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

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              &copy; {currentYear ?? new Date().getFullYear()} Magotlho TN Solutions (PTY) LTD. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Supply, Installation &amp; Maintenance</span>
              <div aria-hidden="true" className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>Professional Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}