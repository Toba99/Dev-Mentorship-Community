import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Dev Mentorship Community",
  description: "Speaking events, workshops, and mentorship sessions from Dev Mentorship Community.",
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
