import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentors | Dev Mentorship Community",
  description:
    "Meet the experienced engineers volunteering their time to mentor the next generation of developers at Dev Mentorship Community.",
}

export default function MentorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
