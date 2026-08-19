"use client"

import { MotionConfig } from "framer-motion"

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // Honour the OS "reduce motion" preference for all Framer Motion animations.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
