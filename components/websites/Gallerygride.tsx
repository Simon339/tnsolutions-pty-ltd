"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

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
  const [isSpinning, setIsSpinning] = useState(false)
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
    setIsSpinning(true)
    setSelectedImage(id)
    setTimeout(() => setIsSpinning(false), 800)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {visibleImages.map((image, index) => (
          <motion.div
            key={image.id}
            layoutId={`image-${image.id}`}
            onClick={() => handleImageClick(image.id)}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut === index ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={600}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          >
            <motion.div
              layoutId={`image-${selectedImage}`}
              className="w-full h-full max-w-4xl max-h-[80vh] relative"
              animate={isSpinning ? { rotate: 360 } : { rotate: 0 }}
              transition={
                isSpinning
                  ? { duration: 0.8, ease: "easeInOut" }
                  : { duration: 0.5, ease: "easeInOut" }
              }
            >
              <Image
                src={images.find((img) => img.id === selectedImage)?.src || ""}
                alt={images.find((img) => img.id === selectedImage)?.alt || ""}
                fill
                className="object-contain"
              />
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
                className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label="Close fullscreen image"
              >
                &times;
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

