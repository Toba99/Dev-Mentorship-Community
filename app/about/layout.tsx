import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Dev Mentorship Community",
  description:
    "Learn about Dev Mentorship Community — our mission, vision, and values for building the next generation of confident developers through structured mentorship.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
