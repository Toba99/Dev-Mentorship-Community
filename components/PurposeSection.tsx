"use client"

import { motion } from "framer-motion"
import { Eye, Target, Heart } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

const pillars = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where every developer — regardless of background — has access to the guidance they need to build a thriving, sustainable career in tech.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To equip aspiring developers with structured roadmaps, experienced mentors, and an accountable community that turns learning into real career outcomes.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Growth, accountability, community, and practical learning — the principles that shape every cohort, mentorship pairing, and session we run.",
  },
]

export default function PurposeSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why we exist"
          title="Purpose-Built for Developer Growth"
          subtitle="Everything we do is anchored to a clear vision, mission, and set of values."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand">
                <pillar.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
