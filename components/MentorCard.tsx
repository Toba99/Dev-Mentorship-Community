"use client"

import { motion } from "framer-motion"
import { Linkedin, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { initials } from "@/lib/utils"
import { Mentor } from "@/lib/mentors-data"

interface MentorCardProps {
  mentor: Mentor
  delay?: number
}

// lucide-react has no X logo (its `X` export is the close icon), so use the mark directly.
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function MentorCard({ mentor, delay = 0 }: MentorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="glass-card group flex h-full flex-col items-center rounded-2xl p-6 text-center sm:p-8"
    >
      {/* Avatar */}
      <div className="relative mb-6">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500/60 to-purple-600/60 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        <div
          aria-hidden="true"
          className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 ring-2 ring-border/70 ring-offset-4 ring-offset-card"
        >
          <span className="font-display text-4xl font-bold text-blue-300">
            {initials(mentor.name)}
          </span>
        </div>
      </div>

      <h3 className="font-display text-xl font-semibold">{mentor.name}</h3>
      <p className="mt-1 text-sm font-medium text-blue-400">{mentor.role}</p>
      <p className="text-sm text-muted-foreground">{mentor.company}</p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {mentor.bio}
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {mentor.expertise.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>

      {mentor.socials && (
        <div className="mt-6 flex w-full justify-center gap-4 border-t border-border/50 pt-5">
          {mentor.socials.linkedin && (
            <a
              href={mentor.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${mentor.name} on LinkedIn`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {mentor.socials.x && (
            <a
              href={mentor.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${mentor.name} on X`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <XIcon className="h-[1.15rem] w-[1.15rem]" />
            </a>
          )}
          {mentor.socials.github && (
            <a
              href={mentor.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${mentor.name} on GitHub`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}
