"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, Facebook, Zap, Sun, Home } from "lucide-react"

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const services = [
    { name: "Electric Fence Installation", icon: <Zap className="w-4 h-4" /> },
    { name: "Solar Installation", icon: <Sun className="w-4 h-4" /> },
    { name: "House Wiring", icon: <Home className="w-4 h-4" /> },
  ]

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-sm opacity-75"></div>
                <img
                  src="/images/TN_logo.png"
                  alt="Magotlho TN Solutions Logo"
                  width={40}
                  height={40}
                  className="relative rounded-full border-2 border-blue-500/30"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Magotlho TN Solutions</h3>
                <p className="text-sm text-slate-400">(PTY) LTD</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Professional electrical services, security solutions, and quality supplies for residential and commercial
              properties. Established in 2021 with a commitment to excellence.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:Info@magotlhotnsolutions.co.za"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Info@magotlhotnsolutions.co.za
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:0835585199" className="hover:text-blue-400 transition-colors duration-300">
                  (083) 558 5199
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Facebook className="w-5 h-5 text-blue-400" />
                <a
                  href="https://www.facebook.com/profile.php?id=100086507600571"
                  className="hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Magotlho TN Solutions
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Top Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name} className="flex items-center space-x-3 text-slate-300">
                  <div className="text-blue-400">{service.icon}</div>
                  <span className="text-sm">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear ? currentYear : "Loading..."} Magotlho TN Solutions (PTY) LTD. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Supply, Installation & Maintenance</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Professional Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
