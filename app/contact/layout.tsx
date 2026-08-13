import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Dev Mentorship Community",
  description:
    "Get in touch with Dev Mentorship Community. Have questions about mentorship, cohorts, or volunteering? We're here to help.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
