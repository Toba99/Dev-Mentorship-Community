"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Mic2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { EventSession } from "@/lib/events-data"
import { cn } from "@/lib/utils"

interface SessionCardProps {
  session: EventSession
  index: number
  delay?: number
}

export default function SessionCard({ session, index, delay = 0 }: SessionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl p-6 transition-colors hover:border-border/80 md:p-8"
    >
      <div className="flex gap-5 md:gap-6">
        {/* Number rail */}
        <span
          aria-hidden="true"
          className="font-display text-2xl font-bold leading-none text-muted-foreground/40 md:text-3xl"
        >
          {String(index).padStart(2, "0")}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 flex-1">
              {session.role && (
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {session.role}
                </span>
              )}

              <h3 className="mt-1.5 font-display text-xl font-semibold text-balance md:text-2xl">
                {session.title}
              </h3>

              {session.speaker && (
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Mic2 className="h-4 w-4 shrink-0 text-blue-400" />
                  <span className="font-medium text-foreground">
                    {session.speaker}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail — fixed box so `fill` always has dimensions to resolve against */}
            {session.image && (
              <div
                className={cn(
                  "relative shrink-0 overflow-hidden border border-border/50 bg-secondary/30",
                  session.imageFit === "portrait"
                    ? "aspect-square w-28 self-start rounded-2xl md:w-32"
                    : "aspect-video w-full rounded-xl md:w-48"
                )}
              >
                {session.imageFit === "contain" && (
                  <Image
                    src={session.image}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="scale-110 object-cover opacity-30 blur-xl"
                    sizes="(max-width: 768px) 100vw, 192px"
                    quality={60}
                  />
                )}
                <Image
                  src={session.image}
                  alt={session.title}
                  fill
                  className={session.imageFit === "contain" ? "object-contain" : "object-cover"}
                  sizes={
                    session.imageFit === "portrait"
                      ? "(max-width: 768px) 112px, 128px"
                      : "(max-width: 768px) 100vw, 192px"
                  }
                />
              </div>
            )}
          </div>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            {session.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {session.topics.map((topic) => (
              <Badge
                key={topic}
                variant="secondary"
                className="border-blue-500/30 bg-blue-500/20 text-xs text-blue-300"
              >
                {topic}
              </Badge>
            ))}
          </div>

          {session.youtube && (
            <a
              href={session.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
            >
              Watch talk
              <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
