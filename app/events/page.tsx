"use client"

import { motion } from "framer-motion"
import SectionWrapper from "@/components/SectionWrapper"
import EventCard from "@/components/events/event-card"
import { events } from "@/lib/events-data"

export default function EventsPage() {
  const featuredEvent = events[0]
  const otherEvents = events.slice(1)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-gradient bg-[length:200%_200%]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Speaking Events & Community Sessions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Workshops, talks, and mentorship sessions delivered by Dev Mentorship Community to help developers grow through real-world guidance and shared experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard event={featuredEvent} featured delay={0} />
          {otherEvents.map((event, index) => (
            <EventCard
              key={event.title}
              event={event}
              delay={(index + 1) * 0.1}
            />
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
