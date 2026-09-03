"use client"

import { useRef, useState } from "react"
import Service_Card from "./service_card"
import ServicesPagination from "./ServicesPagination"

const services = [
  {
    title: "Electric Fence Installation",
    description:
      "Professional electric fence installation for residential and commercial properties. Secure your perimeter with our reliable and effective electric fencing solutions.",
  },
  {
    title: "Solar Installation",
    description:
      "Complete solar power system installation including panels, inverters, and battery storage. Harness renewable energy to reduce your electricity costs.",
  },
  {
    title: "House Wiring Installation",
    description:
      "Comprehensive residential wiring services including new installations, rewiring, and electrical upgrades. Safe and code-compliant electrical work.",
  },
  // {
  //   title: "Alarm & CCTV Installation",
  //   description:
  //     "Advanced security system installation including burglar alarms, CCTV cameras, and monitoring systems to protect your property 24/7.",
  // },
  // Access Control Automation (including Biometric, RFID, and Keypad Systems) 
  {
    title: "Gate Motor Automation",
    description:
      "Automated gate motor installation and maintenance. Convenient remote-controlled access for your driveway gates with safety features.",
  },
  {
    title: "General Electrical Services",
    description:
      "Professional electrical solutions including maintenance, fault finding, and repairs for residential and commercial properties.",
  },
  {
    title: "Lighting Installation",
    description:
      "Expert installation of indoor and outdoor lighting systems, LED upgrades, and smart lighting solutions for energy efficiency.",
  },
  {
    title: "COC Certification",
    description:
      "Professional Certificate of Compliance services ensuring your electrical installations meet all safety and regulatory requirements.",
  },
  {
    title: "Stationery Supply",
    description:
      "Quality stationery supplies for educational institutions and offices, including materials for learners and educators.",
  },
  {
    title: "Office Equipment",
    description:
      "Comprehensive range of office and classroom equipment, along with essential cleaning products for your facility.",
  },
  {
    title: "Plumbing Services",
    description:
      "Comprehensive plumbing solutions including pipe installations, leak repairs, drain cleaning, and bathroom fixture installations for homes and businesses.",
  },
  {
    title: "AC Installation",
    description:
      "Professional installation of all major air conditioning brands. Our certified technicians ensure precise and efficient setup for split units and central systems.",
  },
  {
    title: "AC Repairs",
    description:
      "Fast and reliable AC repair services to restore your cooling system's efficiency. We diagnose and fix all types of air conditioner issues promptly.",
  },
  {
    title: "AC Maintenance",
    description:
      "Preventive maintenance plans to extend your AC's lifespan. Includes filter cleaning, refrigerant checks, and system inspections to prevent breakdowns.",
  },
  {
    title: "Commercial HVAC Services",
    description:
      "Customized cooling solutions for commercial spaces. We provide reliable HVAC services for offices, retail stores, and warehouses to minimize downtime.",
  },
  {
    title: "Emergency Electrical Call-Out",
    description:
      "24/7 emergency electrical services for urgent repairs, power outages, and critical electrical failures. Fast response times for residential and commercial properties.",
  },
  {
    title: "Solar System Maintenance",
    description:
      "Comprehensive solar system maintenance services including panel cleaning, system performance checks, and preventive maintenance to ensure optimal energy production.",
  },
  {
    title: "Solar Fault Finding & Repairs",
    description:
      "Expert diagnostics and repair services for solar PV systems, inverters, and battery storage. Quick identification and resolution of system faults.",
  },
  {
    title: "Electric Fence Maintenance & Repairs",
    description:
      "Complete electric fence maintenance and repair services ensuring your perimeter security remains effective. Includes wire tensioning, component replacement, and system testing.",
  },
  {
    title: "Electric Fence Energiser Installation",
    description:
      "Professional installation of electric fence energisers/power supplies with proper earthing and surge protection for reliable fence operation.",
  },
  {
    title: "Electric Fence Fault Finding",
    description:
      "Advanced fault diagnosis for electric fence systems including earth leakage detection, voltage drop issues, and alarm integration problems.",
  },
  {
    title: "Electric Fence System Upgrades",
    description:
      "Upgrade your existing electric fence with modern components, higher voltage energisers, smart monitoring, and integration with your security system.",
  },
  {
    title: "Electric Fence Testing & Inspection",
    description:
      "Thorough testing and inspection of electric fence systems including voltage verification, compliance checks, and safety certification.",
  },
]

const SERVICES_PER_PAGE = 6

export default function Services() {
  const [currentPage, setCurrentPage] = useState(1)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const totalPages = Math.ceil(services.length / SERVICES_PER_PAGE)
  const startIndex = (currentPage - 1) * SERVICES_PER_PAGE
  const endIndex = startIndex + SERVICES_PER_PAGE
  const currentServices = services.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    headingRef.current?.focus()
  }

  return (
    <section id="services" className="w-full min-h-screen py-5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h1 ref={headingRef} tabIndex={-1} className="section_title focus:outline-hidden">
            Our Services
          </h1>
          <p className="section_subtitle">
            We provide exceptional electrical, security, plumbing, HVAC, and supply services tailored to meet your
            specific needs with professional excellence and reliability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-12">
          {currentServices.map((service, index) => (
            <Service_Card key={startIndex + index} title={service.title} description={service.description} />
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing services {startIndex + 1} to {Math.min(endIndex, services.length)} of {services.length}
        </p>

        <ServicesPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalServices={services.length}
          currentRange={`${startIndex + 1}-${Math.min(endIndex, services.length)}`}
        />
      </div>
    </section>
  )
}