"use client"

import { motion } from "framer-motion"
import { Compass, Repeat, UserX } from "lucide-react"

const barriers = [
  {
    icon: Compass,
    stat: "No clear path",
    description:
      "Endless tutorials, no roadmap. Most learners jump between resources without a structured plan to follow.",
  },
  {
    icon: Repeat,
    stat: "Lost momentum",
    description:
      "Without accountability, motivation fades. Progress stalls long before the first real opportunity arrives.",
  },
  {
    icon: UserX,
    stat: "No guidance",
    description:
      "Few have access to experienced engineers who can give honest, personalised feedback at the right moment.",
  },
]

export default function ProblemStatement() {
  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
              The problem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              The gap isn&apos;t talent — it&apos;s{" "}
              <span className="gradient-text">guidance</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Learning to code has never been more accessible. Yet most aspiring developers stall — not from a lack of ability, but from a lack of structure, accountability, and access to people who&apos;ve walked the path before.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dev Mentorship Community closes that gap by pairing developers with experienced engineers, structured roadmaps, and a community that keeps them moving — all the way to their first or next role.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {barriers.map((barrier, index) => (
              <motion.div
                key={barrier.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-border/50">
                  <barrier.icon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{barrier.stat}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {barrier.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
