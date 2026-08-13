import type { MetadataRoute } from "next"
import { events } from "@/lib/events-data"

const baseUrl = "https://dev-mentorship-community.netlify.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/mentors", "/events", "/apply", "/mentor", "/contact"]

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))

  const eventRoutes: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...eventRoutes]
}

