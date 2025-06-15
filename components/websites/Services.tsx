"use client"

import { Zap, Sun, Home, Settings2, LightbulbIcon, FileCheck, PenTool, Package, Camera, Fence, Droplets, Wrench, Snowflake } from "lucide-react"
import Service_Card from "./service_card"
import ServicesPagination from "./ServicesPagination"
import { useState } from "react"

const services = [
  {
    icon: <Fence className="w-6 h-6 text-white" />,
    title: "Electric Fence Installation",
    description:
      "Professional electric fence installation for residential and commercial properties. Secure your perimeter with our reliable and effective electric fencing solutions.",
  },
  {
    icon: <Sun className="w-6 h-6 text-white" />,
    title: "Solar Installation",
    description:
      "Complete solar power system installation including panels, inverters, and battery storage. Harness renewable energy to reduce your electricity costs.",
  },
  {
    icon: <Home className="w-6 h-6 text-white" />,
    title: "House Wiring Installation",
    description:
      "Comprehensive residential wiring services including new installations, rewiring, and electrical upgrades. Safe and code-compliant electrical work.",
  },
  {
    icon: <Camera className="w-6 h-6 text-white" />,
    title: "Alarm & CCTV Installation",
    description:
      "Advanced security system installation including burglar alarms, CCTV cameras, and monitoring systems to protect your property 24/7.",
  },
  {
    icon: <Settings2 className="w-6 h-6 text-white" />,
    title: "Gate Motor Automation",
    description:
      "Automated gate motor installation and maintenance. Convenient remote-controlled access for your driveway gates with safety features.",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "General Electrical Services",
    description:
      "Professional electrical solutions including maintenance, fault finding, and repairs for residential and commercial properties.",
  },
  {
    icon: <LightbulbIcon className="w-6 h-6 text-white" />,
    title: "Lighting Installation",
    description:
      "Expert installation of indoor and outdoor lighting systems, LED upgrades, and smart lighting solutions for energy efficiency.",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-white" />,
    title: "COC Certification",
    description:
      "Professional Certificate of Compliance services ensuring your electrical installations meet all safety and regulatory requirements.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-white" />,
    title: "Stationery Supply",
    description:
      "Quality stationery supplies for educational institutions and offices, including materials for learners and educators.",
  },
  {
    icon: <Package className="w-6 h-6 text-white" />,
    title: "Office Equipment",
    description:
      "Comprehensive range of office and classroom equipment, along with essential cleaning products for your facility.",
  },
  {
    icon: <Droplets className="w-6 h-6 text-white" />,
    title: "Plumbing Services",
    description:
      "Comprehensive plumbing solutions including pipe installations, leak repairs, drain cleaning, and bathroom fixture installations for homes and businesses.",
  },
  {
    icon: <Snowflake className="w-6 h-6 text-white" />,
    title: "AC Installation",
    description:
      "Professional installation of all major air conditioning brands. Our certified technicians ensure precise and efficient setup for split units and central systems.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-white" />,
    title: "AC Repairs",
    description:
      "Fast and reliable AC repair services to restore your cooling system's efficiency. We diagnose and fix all types of air conditioner issues promptly.",
  },
  {
    icon: <Settings2 className="w-6 h-6 text-white" />,
    title: "AC Maintenance",
    description:
      "Preventive maintenance plans to extend your AC's lifespan. Includes filter cleaning, refrigerant checks, and system inspections to prevent breakdowns.",
  },
  {
    icon: <Home className="w-6 h-6 text-white" />,
    title: "Commercial HVAC Services",
    description:
      "Customized cooling solutions for commercial spaces. We provide reliable HVAC services for offices, retail stores, and warehouses to minimize downtime.",
  },
]

const SERVICES_PER_PAGE = 6

export default function Services() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(services.length / SERVICES_PER_PAGE)
  const startIndex = (currentPage - 1) * SERVICES_PER_PAGE
  const endIndex = startIndex + SERVICES_PER_PAGE
  const currentServices = services.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Smooth scroll to services section when page changes
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section id="services" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h1 className="section_title">Our Services</h1>
          <h2 className="section_subtitle">
            We provide exceptional electrical, security, plumbing, HVAC, and supply services tailored to meet your
            specific needs with professional excellence and reliability.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-12">
          {currentServices.map((service, index) => (
            <Service_Card
              key={startIndex + index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Pagination */}
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
