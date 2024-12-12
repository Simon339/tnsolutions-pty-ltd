
import { Zap, LightbulbIcon, Power, Wrench, FileCheck, Settings, PenTool, BookOpen, Package } from 'lucide-react'
import React from 'react'
import Service_Card from './service_card'

const services = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Electrical Services",
      description: "Professional electrical solutions including house wiring, installations, and maintenance for residential and commercial properties."
    },
    {
      icon: <LightbulbIcon className="w-6 h-6 text-white" />,
      title: "Installation Services",
      description: "Expert installation of lights, socket outlets, and electrical components with attention to safety and quality standards."
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Maintenance & Repairs",
      description: "Comprehensive electrical maintenance, fault finding, and breaker replacement services to keep your systems running smoothly."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-white" />,
      title: "Compliance & Certification",
      description: "Professional COC certification services ensuring your electrical installations meet all safety and regulatory requirements."
    },
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "Stationery Supply",
      description: "Quality stationery supplies for educational institutions and offices, including materials for learners and educators."
    },
    {
      icon: <Package className="w-6 h-6 text-white" />,
      title: "Office Equipment",
      description: "Comprehensive range of office and classroom equipment, along with essential cleaning products for your facility."
    }
  ]

const Services = () => {
    return (
        <section id="services" className='w-full min-h-screen'>
            <div className="container mx-auto px-4 py-16 md:py-24 mb-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="section_title">Services</h1>
                    <h2 className="section_subtitle">We provide exceptional service for our valued customers.</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        {services.map((service, index) => (
                            <Service_Card
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
