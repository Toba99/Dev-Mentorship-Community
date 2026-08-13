import type { Metadata } from "next"
import { notFound } from "next/navigation"
import EventDetail from "@/components/events/event-detail"
import { events, getEventBySlug } from "@/lib/events-data"

interface EventPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export function generateMetadata({ params }: EventPageProps): Metadata {
  const event = getEventBySlug(params.slug)

  if (!event) {
    return {
      title: "Event Not Found | Dev Mentorship Community",
    }
  }

  const title = `${event.title} (${event.edition}) | Dev Mentorship Community`
  const description = event.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [event.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [event.coverImage],
    },
  }
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  return <EventDetail event={event} />
}
