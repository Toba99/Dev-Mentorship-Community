"use client"

import { motion } from "framer-motion"
import { Code, Server, Cloud, Brain, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Track } from "@/lib/tracks-data"

const iconMap = {
  code: Code,
  server: Server,
  cloud: Cloud,
  brain: Brain,
}

interface TrackCardProps {
  track: Track
  delay?: number
}

export default function TrackCard({ track, delay = 0 }: TrackCardProps) {
  const Icon = iconMap[track.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="glass-card rounded-xl p-6 h-full flex flex-col"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
        <Badge variant="secondary">{track.level}</Badge>
      </div>
      <h3 className="mt-5 text-xl font-semibold">{track.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{track.duration}</p>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {track.description}
      </p>
      <ul className="mt-4 space-y-2 flex-1">
        {track.outcomes.map((outcome) => (
          <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/apply"
        className="group mt-6 inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
      >
        Start this track
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}
