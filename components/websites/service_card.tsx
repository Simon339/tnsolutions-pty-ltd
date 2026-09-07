"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  linkText?: string
  onSelect?: () => void
}

export default function Service_Card({ title, description, linkText = "View Details", onSelect }: ServiceCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="service_card group relative overflow-hidden rounded-lg bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-xs hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 w-full text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500/50"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-slate-300 leading-relaxed flex-1 group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>
        <div className="mt-6 pt-4 border-t border-slate-700/50 group-hover:border-blue-500/20 transition-colors duration-300">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
            <span>{linkText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <div className="h-0.5 w-0 group-hover:w-full bg-linear-to-r from-blue-400 to-blue-600 transition-all duration-500 ease-out rounded-full mt-1" />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"
      />
    </motion.button>
  )
}