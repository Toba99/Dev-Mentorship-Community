"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { CalendarClock } from "lucide-react"
import SectionWrapper from "@/components/SectionWrapper"
import EventCard from "@/components/events/event-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { events } from "@/lib/events-data"

export default function EventsPage() {
  // Editions sorted newest-first
  const sortedEvents = useMemo(
    () => [...events].sort((a, b) => b.year - a.year),
    []
  )

  const upcomingEvents = useMemo(
    () => sortedEvents.filter((event) => event.upcoming),
    [sortedEvents]
  )
  const pastEvents = useMemo(
    () => sortedEvents.filter((event) => !event.upcoming),
    [sortedEvents]
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-gradient bg-[length:200%_200%]" />
        <div className="absolute inset-0 bg-grid-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Events & Community Conferences
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Talks, panels, and workshops where our community comes together to learn, share, and grow as developers.
            </p>
          </motion.div>
        </div>
      </section>

      {sortedEvents.length === 0 && (
        <SectionWrapper>
          <div className="max-w-2xl mx-auto text-center">
            <CalendarClock className="h-12 w-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              No events scheduled yet
            </h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re planning our next edition. Check back soon for dates,
              speakers, and registration details.
            </p>
          </div>
        </SectionWrapper>
      )}

      {/* Upcoming */}
      {upcomingEvents.length > 0 && (
        <SectionWrapper className="pt-0">
          <SectionHeading
            eyebrow="Next up"
            title="Upcoming Events"
            subtitle="Save your spot before registration closes."
          />
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={event.slug}
                event={event}
                featured
                delay={index * 0.08}
              />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Past editions */}
      {pastEvents.length > 0 && (
        <SectionWrapper className="bg-card/30">
          <SectionHeading
            eyebrow="Archive"
            title="Past Editions"
            subtitle="Browse the full agenda, talk recordings, and photos from previous events."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {pastEvents.map((event, index) => (
              <EventCard key={event.slug} event={event} delay={index * 0.08} />
            ))}
          </div>
        </SectionWrapper>
      )}
    </>
  )
}
