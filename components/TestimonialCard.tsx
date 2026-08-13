"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { initials } from "@/lib/utils"
import { Testimonial } from "@/lib/testimonials-data"

interface TestimonialCardProps {
  testimonial: Testimonial
  delay?: number
}

export default function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-xl p-6 h-full flex flex-col"
    >
      <Quote className="h-8 w-8 text-blue-400/60" />
      <p className="mt-4 text-muted-foreground leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-border/50 pt-4">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 ring-1 ring-border/70"
        >
          <span className="font-display text-sm font-bold text-blue-300">
            {initials(testimonial.name)}
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 sm:ml-auto">
          {testimonial.outcome}
        </span>
      </div>
    </motion.div>
  )
}
