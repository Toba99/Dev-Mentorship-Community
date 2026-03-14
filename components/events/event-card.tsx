"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, MapPin, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import EventGallery from "./event-gallery"
import GalleryButton from "./gallery-button"
import { Event } from "@/lib/events-data"
import { cn } from "@/lib/utils"

interface EventCardProps {
  event: Event
  featured?: boolean
  delay?: number
}

export default function EventCard({ event, featured = false, delay = 0 }: EventCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="col-span-1 md:col-span-2 lg:col-span-3"
      >
        <div className="glass-card rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-transparent hover:border-blue-500/30">
          <div className="relative h-96 md:h-[500px] overflow-hidden group">
            {event.images.length > 0 && (
              <Image
                src={event.images[0]}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="100vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            {event.images.length > 1 && (
              <div className="absolute top-4 right-4 z-10">
                <GalleryButton images={event.images} title={event.title} />
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {event.topics.map((topic) => (
                  <Badge
                    key={topic}
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{event.title}</h2>
              <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
                {event.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              {event.youtube && (
                <a
                  href={event.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Watch Talk
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="glass-card rounded-xl p-6 h-full flex flex-col hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-transparent hover:border-blue-500/30">
        <div className="mb-4">
          <EventGallery images={event.images} title={event.title} />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {event.topics.map((topic) => (
            <Badge
              key={topic}
              variant="secondary"
              className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs"
            >
              {topic}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {event.description}
        </p>

        <div className="flex flex-col gap-3 mt-auto">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span>{event.location}</span>
            </div>
          </div>

          {event.youtube && (
            <a
              href={event.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 w-full"
            >
              Watch Talk
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
