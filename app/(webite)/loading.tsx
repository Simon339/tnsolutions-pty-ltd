"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-[#87CEEB] to-[#20B2AA]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-24 h-24 border-4 border-white border-t-transparent rounded-full"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-lg rounded-full flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 0.8, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              className="w-12 h-12 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8 text-2xl font-semibold text-white tracking-wide"
      >
        Loading
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, times: [0, 0.5, 1] }}
        >
          ...
        </motion.span>
      </motion.h2>
    </div>
  )
}

