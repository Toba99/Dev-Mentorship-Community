"use client"

import { useState } from "react"
import { Images } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface GalleryButtonProps {
  images: string[]
  title: string
}

export default function GalleryButton({ images, title }: GalleryButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (images.length <= 1) return null

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm text-white text-sm font-medium flex items-center gap-2 hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label={`View gallery for ${title}`}
        >
          <Images className="h-4 w-4" />
          {images.length} images
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
