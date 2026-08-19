"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn, initials } from "@/lib/utils"
import { Mentor } from "@/lib/mentors-data"

interface MentorCardProps {
  mentor: Mentor
  delay?: number
  compact?: boolean
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

export default function MentorCard({
  mentor,
  delay = 0,
  compact = false,
}: MentorCardProps) {
  const visibleExpertise = compact
    ? mentor.featuredExpertise ?? mentor.expertise.slice(0, 3)
    : mentor.expertise
  const visibleRole = compact ? mentor.featuredRole ?? mentor.role : mentor.role

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={cn(
        "glass-card group flex h-full flex-col items-center rounded-2xl text-center",
        compact ? "p-5 sm:p-6" : "p-6 sm:p-8"
      )}
    >
      {/* Avatar */}
      <div className={cn("relative", compact ? "mb-5" : "mb-6")}>
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500/60 to-purple-600/60 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        <div
          className={cn(
            "relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 ring-2 ring-border/70 ring-offset-4 ring-offset-card",
            compact ? "h-24 w-24" : "h-40 w-40"
          )}
        >
          {mentor.image ? (
            <Image
              src={mentor.image}
              alt={`${mentor.name}, ${mentor.role}`}
              fill
              className="object-cover"
              sizes={compact ? "96px" : "160px"}
              quality={90}
            />
          ) : (
            <span
              aria-hidden="true"
              className={cn(
                "font-display font-bold text-blue-300",
                compact ? "text-2xl" : "text-4xl"
              )}
            >
              {initials(mentor.name)}
            </span>
          )}
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col items-center",
          compact ? "min-h-[5.5rem]" : "min-h-20"
        )}
      >
        <h3 className={cn("font-display font-semibold", compact ? "text-lg" : "text-xl")}>
          {mentor.name}
        </h3>
        <p
          className={cn(
            "mt-1 font-medium text-blue-400",
            compact ? "whitespace-nowrap text-[0.8125rem]" : "text-sm"
          )}
        >
          {visibleRole}
        </p>
        {mentor.company && (
          <p className="text-sm text-muted-foreground">{mentor.company}</p>
        )}
      </div>

      {!compact && (
        <p className="mt-4 min-h-[4.5rem] flex-1 text-sm leading-relaxed text-muted-foreground">
          {mentor.bio}
        </p>
      )}

      {compact ? (
        <div className="mt-4 flex h-8 w-full items-center justify-center">
          <ul className="flex w-full items-center justify-center whitespace-nowrap text-xs font-medium text-muted-foreground">
            {visibleExpertise.map((skill) => (
              <li
                key={skill}
                className="flex items-center after:mx-2.5 after:text-blue-400/70 after:content-['•'] last:after:hidden"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-5 flex min-h-[4.25rem] w-full flex-wrap content-start items-start justify-center gap-2">
          {visibleExpertise.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      )}

      {mentor.socials && (
        <div
          className={cn(
            "flex w-full justify-center gap-4 border-t border-border/50",
            compact ? "mt-5 pt-4" : "mt-6 pt-5"
          )}
        >
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
      {!mentor.socials && (
        <div
          aria-hidden="true"
          className={cn(
            "w-full border-t border-border/50",
            compact ? "mt-5 h-[2.3125rem]" : "mt-6 h-[2.5625rem]"
          )}
        />
      )}
    </motion.div>
  )
}
