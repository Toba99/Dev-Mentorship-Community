"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Clock3,
  MapPin,
  Presentation,
  Users,
  ArrowRight,
  ExternalLink,
  CalendarClock,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Event } from "@/lib/events-data"

interface EventCardProps {
  event: Event
  /** Renders the card wide, image beside the copy — used for the next edition. */
  featured?: boolean
  delay?: number
}

export default function EventCard({
  event,
  featured = false,
  delay = 0,
}: EventCardProps) {
  const speakerCount = event.speakerCount ?? new Set(
    event.sessions.flatMap((session) => session.speaker ? [session.speaker] : [])
  ).size

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={cn(
        "glass-card group flex overflow-hidden rounded-2xl transition-colors hover:border-border/80",
        featured ? "flex-col lg:flex-row" : "h-full flex-col"
      )}
    >
      {/* Cover */}
      <div
        className={cn(
          "relative shrink-0 overflow-hidden",
          featured
            ? cn(
                "lg:aspect-auto lg:w-[45%] lg:min-h-[22rem]",
                event.coverFit === "contain" ? "aspect-[4/5]" : "aspect-[16/10]"
              )
            : event.coverFit === "contain"
              ? "aspect-[4/5] sm:aspect-[16/9]"
              : "aspect-[16/9]"
        )}
      >
        {event.coverFit === "contain" && (
          <Image
            src={event.coverImage}
            alt=""
            fill
            aria-hidden="true"
            className="scale-110 object-cover opacity-30 blur-2xl"
            sizes={featured ? "(max-width: 1024px) 100vw, 45vw" : "(max-width: 1024px) 100vw, 50vw"}
            quality={60}
          />
        )}
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className={cn(
            "transition-transform duration-500",
            event.coverFit === "contain"
              ? "object-contain p-2 group-hover:scale-[1.02] sm:p-0"
              : "object-cover group-hover:scale-105"
          )}
          sizes={featured ? "(max-width: 1024px) 100vw, 45vw" : "(max-width: 1024px) 100vw, 50vw"}
          priority={featured}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t via-transparent to-transparent",
            event.coverFit === "contain" ? "from-card/30" : "from-card/80"
          )}
        />
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-brand px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
            {event.edition} Edition
          </span>
          {event.upcoming && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/15 px-3 py-1.5 text-xs font-semibold text-green-400 backdrop-blur-sm">
              <CalendarClock className="h-3.5 w-3.5" />
              Upcoming
            </span>
          )}
        </div>
      </div>

      {/* Copy */}
      <div
        className={cn(
          "flex flex-1 flex-col p-6 md:p-8",
          featured && "lg:justify-center"
        )}
      >
        <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-400" />
            {event.date}
          </span>
          {event.time && (
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-blue-400" />
              {event.time}
            </span>
          )}
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-400" />
            {event.location}
          </span>
          <span className="flex items-center gap-2">
            <Presentation className="h-4 w-4 text-blue-400" />
            {event.format}
          </span>
        </div>

        <h3
          className={cn(
            "font-display font-bold text-balance",
            featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          )}
        >
          {event.title}
        </h3>

        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
          {featured ? event.description : event.tagline}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Presentation className="h-4 w-4 text-blue-400" />
            {event.sessions.length}{" "}
            {event.upcoming
              ? event.sessions.length === 1 ? "programme item" : "programme items"
              : event.sessions.length === 1 ? "session" : "sessions"}
          </span>
          {speakerCount > 0 && (
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-400" />
              {speakerCount} {speakerCount === 1 ? "speaker" : "speakers"}
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/50 pt-5">
          {event.upcoming && event.registerUrl && (
            <Link
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Register for ${event.title} (opens in a new tab)`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
            >
              Register Now
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            {event.upcoming ? "View full details" : "View sessions & gallery"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
