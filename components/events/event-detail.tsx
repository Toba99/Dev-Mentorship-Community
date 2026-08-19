"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  MapPin,
  Users,
  Presentation,
  LayoutGrid,
  ArrowLeft,
  ArrowRight,
  CalendarClock,
} from "lucide-react"
import SectionWrapper from "@/components/SectionWrapper"
import SessionCard from "@/components/events/session-card"
import EventGalleryGrid from "@/components/events/event-gallery-grid"
import { SectionHeading } from "@/components/ui/section-heading"
import { Event } from "@/lib/events-data"

interface EventDetailProps {
  event: Event
}

export default function EventDetail({ event }: EventDetailProps) {
  const speakerCount = new Set(event.sessions.map((s) => s.speaker)).size

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-gradient bg-[length:200%_200%]" />
        <div className="absolute inset-0 bg-grid-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              All events
            </Link>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                {event.edition} Edition
              </span>
              {event.upcoming && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/15 px-4 py-1.5 text-sm font-semibold text-green-400">
                  <CalendarClock className="h-3.5 w-3.5" />
                  Upcoming
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {event.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              {event.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-400" />
                {event.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                {event.location}
              </span>
              <span className="flex items-center gap-2">
                <Presentation className="h-4 w-4 text-blue-400" />
                {event.format}
              </span>
            </div>

            {event.upcoming && event.registerUrl && (
              <div className="mt-8">
                <Link
                  href={event.registerUrl}
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-8 py-4 font-medium text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
                >
                  Register Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <SectionWrapper className="pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative h-72 md:h-96 overflow-hidden rounded-2xl glass-card">
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              About this edition
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {event.description}
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-3xl font-bold gradient-text">
                  <Presentation className="h-6 w-6 text-blue-400" />
                  {event.sessions.length}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {event.sessions.length === 1 ? "Session" : "Sessions"}
                </p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-3xl font-bold gradient-text">
                  <Users className="h-6 w-6 text-blue-400" />
                  {speakerCount}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {speakerCount === 1 ? "Speaker" : "Speakers"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Agenda */}
      <SectionWrapper className="bg-card/30">
        <SectionHeading
          eyebrow={event.upcoming ? "Programme" : "Agenda"}
          title="Sessions & Talks"
          subtitle={event.tagline}
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {event.sessions.map((session, index) => (
            <SessionCard
              key={session.title}
              session={session}
              index={index + 1}
              delay={index * 0.08}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Gallery */}
      {event.gallery.length > 1 && (
        <SectionWrapper>
          <SectionHeading
            eyebrow="Gallery"
            title="Moments From the Event"
            subtitle="A look back at the talks, panels, and the community that showed up."
          />
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8 -mt-8">
            <LayoutGrid className="h-4 w-4" />
            <span>{event.gallery.length} photos — click to expand</span>
          </div>
          <EventGalleryGrid images={event.gallery} title={event.title} />
        </SectionWrapper>
      )}

      {/* Register CTA (upcoming) */}
      {event.upcoming && event.registerUrl && (
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              Save your spot
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance max-w-xl mx-auto">
              Seats are limited. Register now to join {event.title} and be part of the conversation.
            </p>
            <Link
              href={event.registerUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-8 py-4 font-medium text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
            >
              Register Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </SectionWrapper>
      )}
    </>
  )
}
