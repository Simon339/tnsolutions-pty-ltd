/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"

interface Image {
  id: number
  src: string
  alt: string
}

interface GalleryGridProps {
  images: Image[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isZooming, setIsZooming] = useState(false)
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 6))
  const [fadeOut, setFadeOut] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(Math.floor(Math.random() * 6))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (fadeOut !== null) {
      const timeout = setTimeout(() => {
        setVisibleImages((prev) => {
          const newImages = [...prev]
          const removedImage = newImages.splice(fadeOut, 1)[0]
          const availableImages = images.filter((img) => !newImages.includes(img))
          const newImage = availableImages[Math.floor(Math.random() * availableImages.length)]
          newImages.splice(fadeOut, 0, newImage)
          return newImages
        })
        setFadeOut(null)
      }, 800)

      return () => clearTimeout(timeout)
    }
  }, [fadeOut, images])

  const handleImageClick = (id: number) => {
    setIsZooming(true)
    setSelectedImage(id)
    setTimeout(() => setIsZooming(false), 300)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleImages.map((image, index) => (
          <motion.div
            key={image.id}
            layoutId={`image-${image.id}`}
            onClick={() => handleImageClick(image.id)}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut === index ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={image.src || "/placeholder.svg?height=400&width=600"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <p className="text-sm font-medium">Project Gallery</p>
                      <p className="text-xs text-slate-300">Click to view full size</p>
                    </div>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl flex items-center justify-center z-50 p-4"
          >
            <motion.div
              layoutId={`image-${selectedImage}`}
              className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={isZooming ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={images.find((img) => img.id === selectedImage)?.src || "/placeholder.svg"}
                alt={images.find((img) => img.id === selectedImage)?.alt || ""}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />

              {/* Close Button */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
                className="absolute top-4 right-4 w-12 h-12 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 text-white rounded-full flex items-center justify-center transition-colors duration-300 border border-slate-600/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label="Close fullscreen image"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Project Gallery</h3>
                    <p className="text-slate-300 text-sm">
                      {images.find((img) => img.id === selectedImage)?.alt || "Gallery Image"}
                    </p>
                  </div>
                  <div className="text-slate-400 text-sm">
                    {images.findIndex((img) => img.id === selectedImage) + 1} of {images.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}