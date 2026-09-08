"use client"

import { useRef, useState } from "react"
import Service_Card from "./service_card"
import ServiceModal from "./ServicesPagination"

interface Service {
  title: string
  description: string
  subServices?: string[]
}

const services: Service[] = [
  {
    title: "Electrical Services",
    description:
      "Comprehensive residential wiring services including new installations, rewiring, and electrical upgrades. Safe and SANS 10142-1 compliant electrical work.",
    subServices: [
      "Electrical wiring",
      "Fault finding and repairs",
      "Distribution board installations and upgrades",
      "Lighting installation and upgrades",
      "Inspections and testing",
      "Certificate of Compliance (COC)",
      "Residential, commercial, and industrial electrical work",
      "Emergency electrical call-out",
      "Electrical general maintenance and upgrades",
    ],
  },
  {
    title: "Electric Fencing",
    description:
      "Professional electric fence installation for residential and commercial properties. Secure your perimeter with our reliable and effective electric fencing solutions.",
    subServices: [
      "Electric fence installation",
      "Electric fence maintenance and repairs",
      "Electric fence energiser installation",
      "Electric fence fault finding",
      "Electric fence system upgrades",
      "Electric fence testing and inspection",
    ],
  },
   {
    title: "Energy Metering",
    description:
      "Supply and installation of energy meters, prepaid meters and sub-meters for residential and commercial properties.",
    subServices: [
      "Energy meter installation",
      "Prepaid meter installation",
      "Sub-meter installation",
      "Meter replacement and upgrades",
      "Meter fault finding and testing",
      "Meter wiring and connection",
      "Commercial and residential metering solutions",
    ],
  },
  {
    title: "Access Control Services",
    description: "Secure and manage entry to your property with advanced technology.",
    subServices: [
      "Access control system installation",
      "Magnetic & electric locks",
      "Keypad/PIN access systems",
      "RFID/card & tag access systems",
      "Biometric/fingerprint access systems",
      "Facial recognition access systems",
      "Automatic gate access integration",
      "Office & commercial access control",
      "Residential & complex access systems",
    ],
  },
  {
    title: "Motor Gate Automation",
    description: "Convenient, secure access at the touch of a button.",
    subServices: [
      "Gate automation installation",
      "Remote controls and receivers",
      "Keypad and access-control integration",
      "Intercom integration",
      "Solar-powered gate systems",
      "Gate motor repairs and fault finding",
      "Battery replacement",
      "Motor upgrades and replacements",
      "Preventative maintenance",
    ],
  },
  {
    title: "Solar Systems",
    description:
      "Complete solar power system installation including panels, inverters, and battery storage. Professional solar solutions for residential and commercial properties.",
    subServices: [
      "Solar & Backup Power Systems",
      "Solar PV System Installations",
      "Inverter Installation",
      "Battery Storage System Installations",
      "Solar System Upgrades and Extensions",
      "Solar Systems Maintenance",
      "Fault Finding and Repairs",
    ],
  },
];
const SERVICES_PER_PAGE = 6

export default function Services() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const totalPages = Math.ceil(services.length / SERVICES_PER_PAGE)
  const startIndex = (currentPage - 1) * SERVICES_PER_PAGE
  const endIndex = startIndex + SERVICES_PER_PAGE
  const currentServices = services.slice(startIndex, endIndex)

  return (
    <section id="services" className="w-full min-h-screen py-5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h1 ref={headingRef} tabIndex={-1} className="section_title focus:outline-hidden">
            Our Services
          </h1>
          <p className="section_subtitle">
            We provide exceptional electrical, Access Control, Automation, Solar, Electric Fencing, Energy Metering and supply services tailored to meet your
            specific needs with professional excellence and reliability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-2 max-w-7xl mx-auto mb-12">
          {currentServices.map((service, index) => (
            <Service_Card
              key={startIndex + index}
              title={service.title}
              description={service.description}
              onSelect={() => setSelectedService(service)}
            />
          ))}
        </div>

      </div>

      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title ?? ""}
        description={selectedService?.description ?? ""}
        subServices={selectedService?.subServices}
      />
    </section>
  )
}