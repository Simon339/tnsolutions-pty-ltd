"use client"

import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  subServices?: string[]
}

export default function ServiceModal({ isOpen, onClose, title, description, subServices }: ServiceModalProps) {
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 border rounded-lg border-slate-700/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-lg bg-slate-800/95 border border-slate-700/50 p-6 sm:p-8 shadow-2xl shadow-blue-950/40"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-md p-1.5 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 id="service-modal-title" className="text-2xl font-bold text-white pr-8">
              {title}
            </h3>

            <p className="mt-3 text-slate-300 leading-relaxed">{description}</p>

            {subServices && subServices.length > 0 && (
              <ul className="mt-6 space-y-3 border-t border-slate-700/50 pt-6">
                {subServices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}