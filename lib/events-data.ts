export interface EventSession {
  title: string
  speaker?: string
  role?: string
  description: string
  topics: string[]
  youtube?: string
  image?: string
  imageFit?: "cover" | "contain" | "portrait"
}

export interface Event {
  slug: string
  title: string
  edition: string
  year: number
  date: string
  time?: string
  location: string
  format: string
  tagline: string
  description: string
  coverImage: string
  coverFit?: "cover" | "contain"
  galleryCoverFit?: "cover" | "contain"
  gallery: string[]
  sessions: EventSession[]
  speakerCount?: number
  upcoming?: boolean
  registerUrl?: string
}

export const events: Event[] = [
  {
    slug: "dev-hangout-2026",
    title: "Dev Hangout 2.0",
    edition: "2026",
    year: 2026,
    date: "Saturday, November 7, 2026",
    time: "9:00 AM–4:00 PM WAT",
    location: "Emerald Hall, The Zone, Gbagada, Lagos",
    format: "In-person community event",
    tagline: "From idea to production: learn how experienced builders turn AI concepts into real-world products.",
    description:
      "Join the second edition of Dev Mentorship Hangout for practical conversations about building with AI from idea to production. Learn from speakers and panelists across product, design, engineering, and management, then connect through fireside chats, games, and networking.",
    coverImage: "/assets/events/dev-hangout-2-main.png",
    coverFit: "contain",
    gallery: ["/assets/events/dev-hangout-2-main.png"],
    upcoming: true,
    registerUrl: "https://luma.com/zzj13fr1",
    sessions: [
      {
        title: "Building With AI: From Idea to Production",
        role: "Talk sessions",
        description:
          "Practical perspectives across product, design, engineering, and management on turning an AI concept into something people can use.",
        topics: ["AI", "Product", "Design", "Engineering", "Management"],
      },
      {
        title: "Builder Panels & Fireside Chats",
        role: "Conversations",
        description:
          "Candid discussions with practitioners sharing real-world lessons, tradeoffs, and the decisions behind products that make it to production.",
        topics: ["Panel", "Fireside Chat", "Real-world Experience"],
      },
      {
        title: "Games & Community Networking",
        role: "Community",
        description:
          "Meet like-minded builders, strengthen your professional network, and enjoy a relaxed community experience between sessions.",
        topics: ["Networking", "Community", "Games"],
      },
    ],
  },
  {
    slug: "navigating-software-engineering-ai-era-2025",
    title: "Navigating Software Engineering in the AI Era",
    edition: "2025",
    year: 2025,
    date: "2025",
    location: "Online",
    format: "Virtual engineering event",
    tagline: "Career, frontend, and backend perspectives for engineers building through the AI shift.",
    description:
      "A multi-speaker event on what it takes to thrive as a software engineer in the AI era — from durable career fundamentals to intelligent frontend experiences and reliable backend systems.",
    coverImage: "/assets/event-10.png",
    gallery: ["/assets/event-10.png"],
    sessions: [
      {
        title: "Navigating Software Engineering in the AI Era",
        speaker: "Samuel Olabamiji",
        role: "Software Engineer",
        description:
          "How to stay relevant and effective as an engineer as AI reshapes the craft — the fundamentals, the tooling, and the mindset that compound over a career.",
        topics: ["Software Engineering", "AI", "Career", "Tools", "Discipline"],
        image: "/assets/mentors/samuel-olabamiji.jpg",
        imageFit: "portrait",
      },
      {
        title: "Engineering AI-Powered Frontends: From Interface to Intelligent Product",
        speaker: "Olusegun Olayinka",
        role: "Senior Frontend & AI Product Engineer",
        description:
          "A practical look at turning AI capabilities into accessible, reliable frontend products without compromising performance, usability, or user trust.",
        topics: ["Frontend Engineering", "AI Products", "UX", "Accessibility", "Production"],
        image: "/assets/mentors/olusegun-olayinka.jpg",
        imageFit: "portrait",
      },
      {
        title: "Backend Engineering in the AI Era: Designing Reliable Systems That Scale",
        speaker: "Oluwafemi “Cyril” Fehintoluwa",
        role: "Senior Backend Engineer",
        description:
          "How backend engineers can integrate AI capabilities into robust systems while protecting reliability, data integrity, observability, and maintainability.",
        topics: ["Backend Engineering", "AI Integration", "APIs", "Scalability", "Reliability"],
        image: "/assets/mentors/oluwafemi-fehintoluwa.jpg",
        imageFit: "portrait",
      },
    ],
  },
  {
    slug: "dev-hangout-2025",
    title: "Dev Hangout 1.0",
    edition: "2025",
    year: 2025,
    date: "Saturday, November 29, 2025",
    time: "9:00 AM WAT",
    location: "Lagos & Online",
    format: "Hybrid community conference",
    tagline: "A full day of talks, panels, and workshops on growing into a job-ready developer.",
    description:
      "Our flagship community gathering brought together developers, mentors, and industry voices for a series of talks and hands-on sessions — from going beginner to job-ready, to building real-world applications with LLMs.",
    coverImage: "/assets/event-main.jpeg",
    coverFit: "cover",
    galleryCoverFit: "contain",
    speakerCount: 6,
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
        title: "LLM Beyond Chats: An Engineer's Perspective on Large Language Models",
        speaker: "Oloruntoba Eweniyi",
        role: "Software Engineer at PiggyVest",
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
        imageFit: "contain",
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
