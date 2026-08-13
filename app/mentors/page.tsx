"use client"

import { motion } from "framer-motion"
import SectionWrapper from "@/components/SectionWrapper"
import MentorCard from "@/components/MentorCard"
import CTASection from "@/components/CTASection"
import { mentors } from "@/lib/mentors-data"

export default function MentorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10" />
        <div className="absolute inset-0 bg-grid-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Meet Our Mentors
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Experienced engineers volunteering their time to guide you through the path they&apos;ve already walked.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
            <MentorCard key={mentor.name} mentor={mentor} delay={index * 0.05} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection
        title="Want to Give Back?"
        description="Share your experience and help shape the next generation of developers. Become a mentor today."
        primaryCTA={{ text: "Become a Mentor", href: "/mentor" }}
        secondaryCTA={{ text: "Apply as a Mentee", href: "/apply" }}
      />
    </>
  )
}
