"use client"

import { useState, useEffect, useRef, useCallback } from "react"
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

const PLACEHOLDER = "/placeholder.svg?height=400&width=600"

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isZooming, setIsZooming] = useState(false)
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 6))
  const [fadeOut, setFadeOut] = useState<number | null>(null)

  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastTriggerRef = useRef<HTMLElement | null>(null)

  // Keep the visible set in sync if the images prop ever changes.
  useEffect(() => {
    setVisibleImages(images.slice(0, 6))
  }, [images])

  // Pause background rotation while the lightbox is open so the grid
  // doesn't silently rearrange behind the modal.
  useEffect(() => {
    if (selectedImage !== null) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || images.length <= visibleImages.length) return

    const interval = setInterval(() => {
      setFadeOut(Math.floor(Math.random() * visibleImages.length))
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length, visibleImages.length, selectedImage])

  useEffect(() => {
    if (fadeOut === null) return

    const timeout = setTimeout(() => {
      setVisibleImages((prev) => {
        // Exclude every currently-visible image, INCLUDING the one being
        // replaced, so it can't be picked again and pop right back in.
        const visibleIds = new Set(prev.map((img) => img.id))
        const availableImages = images.filter((img) => !visibleIds.has(img.id))

        if (availableImages.length === 0) return prev

        const newImage = availableImages[Math.floor(Math.random() * availableImages.length)]
        const next = [...prev]
        next[fadeOut] = newImage
        return next
      })
      setFadeOut(null)
    }, 800)

    return () => clearTimeout(timeout)
  }, [fadeOut, images])

  const handleImageClick = (
    id: number,
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    lastTriggerRef.current = e.currentTarget as HTMLElement
    setIsZooming(true)
    setSelectedImage(id)
    setTimeout(() => setIsZooming(false), 300)
  }

  const closeModal = useCallback(() => {
    setSelectedImage(null)
    lastTriggerRef.current?.focus()
  }, [])

  useEffect(() => {
    if (selectedImage === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
        return
      }

      // Basic focus trap: keep Tab cycling within the modal.
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [selectedImage, closeModal])

  const activeImage = images.find((img) => img.id === selectedImage)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        {visibleImages.map((image, index) => (
          <motion.div
            // Stable key (index) so a photo swap updates this node in place
            // instead of unmounting it — that's what lets the fade-in play.
            key={index}
            layoutId={`image-${image.id}`}
            role="button"
            tabIndex={0}
            aria-label={`View ${image.alt} full size`}
            onClick={(e) => handleImageClick(image.id, e)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                handleImageClick(image.id, e)
              }
            }}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            animate={{ opacity: fadeOut === index ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                src={image.src || PLACEHOLDER}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <p className="text-sm font-medium">Project Gallery</p>
                      <p className="text-xs text-slate-300">Click to view full size</p>
                    </div>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-xs rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeImage.alt} — full size image`}
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl flex items-center justify-center z-50 p-4"
          >
            <motion.div
              ref={modalRef}
              layoutId={`image-${selectedImage}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={isZooming ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={activeImage.src || PLACEHOLDER}
                alt={activeImage.alt}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />

              <motion.button
                ref={closeButtonRef}
                onClick={closeModal}
                className="absolute top-4 right-4 w-12 h-12 bg-slate-800/80 backdrop-blur-xs hover:bg-slate-700/80 text-white rounded-full flex items-center justify-center transition-colors duration-300 border border-slate-600/50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label="Close fullscreen image"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </motion.button>

              <div className="absolute bottom-4 left-4 right-4 bg-slate-800/80 backdrop-blur-xs rounded-xl p-4 border border-slate-600/50">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-white font-medium">Project Gallery</h3>
                    <p className="text-slate-300 text-sm truncate">{activeImage.alt}</p>
                  </div>
                  <div className="text-slate-400 text-sm shrink-0">
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