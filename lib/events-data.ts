export interface EventSession {
  title: string
  speaker: string
  role?: string
  description: string
  topics: string[]
  youtube?: string
  image?: string
}

export interface Event {
  slug: string
  title: string
  edition: string
  year: number
  date: string
  location: string
  format: string
  tagline: string
  description: string
  coverImage: string
  gallery: string[]
  sessions: EventSession[]
  upcoming?: boolean
  registerUrl?: string
}

export const events: Event[] = [
  {
    slug: "dev-hangout-2026",
    title: "Navigating Software Engineering in the AI Era",
    edition: "2026",
    year: 2026,
    date: "2026",
    location: "Online",
    format: "Virtual guest lecture",
    tagline: "Building a durable engineering career while the tools change underneath us.",
    description:
      "A guest lecture on what it takes to thrive as a software engineer in the AI era — the tools worth mastering, the discipline that still matters, and how to navigate a shifting job market with confidence.",
    coverImage: "/assets/event-10.png",
    gallery: ["/assets/event-10.png"],
    upcoming: true,
    registerUrl: "/apply",
    sessions: [
      {
        title: "Navigating Software Engineering in the AI Era",
        speaker: "Samuel Olabamiji",
        role: "Software Engineer",
        description:
          "How to stay relevant and effective as an engineer as AI reshapes the craft — the fundamentals, the tooling, and the mindset that compound over a career.",
        topics: ["Software Engineering", "AI", "Career", "Tools", "Discipline"],
        image: "/assets/event-10.png",
      },
    ],
  },
  {
    slug: "dev-hangout-2025",
    title: "Dev Hangout 1.0",
    edition: "2025",
    year: 2025,
    date: "2025",
    location: "Lagos & Online",
    format: "Hybrid community conference",
    tagline: "A full day of talks, panels, and workshops on growing into a job-ready developer.",
    description:
      "Our flagship community gathering brought together developers, mentors, and industry voices for a series of talks and hands-on sessions — from going beginner to job-ready, to building real-world applications with LLMs.",
    coverImage: "/assets/event-main.jpeg",
    gallery: [
      "/assets/event-main.jpeg",
      "/assets/event-2.jpeg",
      "/assets/event-4.jpeg",
      "/assets/event-5.jpeg",
      "/assets/event-3.jpeg",
      "/assets/event-6.jpeg",
      "/assets/event-7.jpeg",
      "/assets/event-8.jpeg",
      "/assets/panel.jpg",
      "/assets/event-1.jpg",
      "/assets/event-1-1.png",
      "/assets/event-result.jpeg",
    ],
    sessions: [
       {
        title: "LLM Beyond Chats — An Engineer's Perspective",
        speaker: "Martins Eweniyi",
        role: "Software Engineer",
        description:
          "An interactive session on using Large Language Models to build real-world applications, beyond the chat box.",
        topics: ["LLM", "AI", "Engineering"],
        youtube: "https://www.youtube.com/watch?v=1MWobf0omnw&t=962s",
        image: "/assets/event-1.jpg",
      },
      {
        title: "From Beginner to Job-Ready Developer",
        speaker: "Dev Mentorship Community",
        role: "Keynote",
        description:
          "A live session covering how to go from learning to code to landing the job through structured mentorship and accountability.",
        topics: ["Career", "Mentorship"],
        youtube: "https://www.youtube.com/live/XrXVvU-xEGw?si=a8f5ahdZNV1AyPsh",
        image: "/assets/event-main.jpeg",
      },
      {
        title: "Portfolio Building & Interview Prep Workshop",
        speaker: "Dev Mentorship Community",
        role: "Workshop",
        description:
          "The afternoon session on working as an AI-native engineer — folding AI tools into everyday development while keeping the fundamentals the craft still rests on.",
        topics: ["Interviews", "Workshop", "Portfolio"],
        youtube: "https://www.youtube.com/live/LoEDcPOr_Mw?si=fEQhOH7iilQ0LGis",
        image: "/assets/event-result.jpeg",
      },
    ],
  },
]

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug)
}
