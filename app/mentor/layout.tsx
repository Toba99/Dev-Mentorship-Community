import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Become a Mentor | Dev Mentorship Community",
  description:
    "Share your expertise and help shape the next generation of developers. Become a volunteer mentor at Dev Mentorship Community.",
}

export default function MentorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
