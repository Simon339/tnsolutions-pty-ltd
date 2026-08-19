"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 4,
            ease: "easeInOut",
          }}
          className="mb-8 text-[120px] font-bold text-white leading-none"
        >
          404
        </motion.div>
        <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-lg text-white mb-8 max-w-md">
          Oops! It seems you've ventured into uncharted territory. Let's get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-[#4682B4] bg-white rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Home className="mr-2" size={20} />
          Go Home
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </motion.div>
    </div>
  )
}

