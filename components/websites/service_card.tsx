"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: JSX.Element
  title: string
  description: string
}

export default function Service_Card({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="service_card group"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>
        <p className="text-slate-300 leading-relaxed flex-1 group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>
        <div className="mt-6 pt-4 border-t border-slate-700/50">
          <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300 cursor-pointer">
            <span>Learn more</span>
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
