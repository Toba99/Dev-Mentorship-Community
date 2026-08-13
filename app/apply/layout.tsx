import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apply | Dev Mentorship Community",
  description:
    "Apply to join the next cohort of Dev Mentorship Community and accelerate your growth with structured, free developer mentorship.",
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
