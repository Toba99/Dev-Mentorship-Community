"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface EventGalleryProps {
  images: string[]
  title: string
}

export default function EventGallery({ images, title }: EventGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 0) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="relative w-full h-48 md:h-64 overflow-hidden rounded-lg cursor-pointer group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label={`View gallery for ${title}`}
        >
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {images.length > 1 && (
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {images.length} images
              </span>
            </div>
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0 bg-background border-border overflow-hidden">
        <div className="relative w-full h-[80vh] bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className={cn(
                  "absolute left-4 top-1/2 -translate-y-1/2 z-10",
                  "p-2 rounded-full bg-black/50 hover:bg-black/70",
                  "text-white transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-ring"
                )}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className={cn(
                  "absolute right-4 top-1/2 -translate-y-1/2 z-10",
                  "p-2 rounded-full bg-black/50 hover:bg-black/70",
                  "text-white transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-ring"
                )}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
