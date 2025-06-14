
import { Zap, Sun, Home, Settings2, LightbulbIcon, FileCheck, PenTool, Package, Camera, Fence } from "lucide-react"
import Service_Card from "./service_card"

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
]

const Services = () => {
  return (
    <section id="services" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h1 className="section_title">Our Services</h1>
          <h2 className="section_subtitle">
            We provide exceptional electrical, security, and supply services tailored to meet your specific needs with
            professional excellence and reliability.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Service_Card key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
