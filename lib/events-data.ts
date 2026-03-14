export interface Event {
  title: string
  date: string
  location: string
  description: string
  topics: string[]
  images: string[]
  youtube?: string
}

export const events: Event[] = [
  {
    title: "Dev Hangout 1.O",
    date: "2025",
    location: "Lagos/Online",
    description:
      "A live session covering how to go from beginner to job-ready developer with structured mentorship.",
    topics: ["Career", "Mentorship", "LLM", "AI", "ChatGPT", "Claude", "Gemini", "Bard"],
    images: [
      "/assets/event-main.jpeg",
      "/assets/event-2.jpeg",
      "/assets/event-4.jpeg",
      "/assets/event-5.jpeg",
      "/assets/event-3.jpeg",
      "/assets/event-6.jpeg",
      "/assets/event-7.jpeg",
      "/assets/event-1.jpeg",
      "/assets/event-8.jpeg",
    ],
    youtube: "https://www.youtube.com/live/XrXVvU-xEGw?si=a8f5ahdZNV1AyPsh",
  },
  {
    title: "Navigating Software Engineering In The AI Era - Samuel Olabamiji",
    date: "2026",
    location: "Online",
    description:
      "Guest lecture about software engineering in the AI era, and how to navigate the job market.",
    topics: ["Tools", "Discipline", "Career", "Software Engineering", "AI"],
    images: [
      "/assets/event-10.png",
    ],
    youtube: "",
  },
  {
    title: "Dev Hangout 1.O",
    date: "2025",
    location: "Lagos/Online",
    description:
      "Virtual workshop focusing on portfolio building and technical interview preparation.",
    topics: ["Interviews", "Workshop", "LLM", "AI"],
    images: [
      "/assets/event-main.jpeg",
      "/assets/event-result.jpeg",
    ],
    youtube: " https://www.youtube.com/live/LoEDcPOr_Mw?si=fEQhOH7iilQ0LGis",
  },
  {
    title: "Panel Discussion",
    date: "2025",
    location: "Lagos",
    description:
      "Panel discussion with industry experts on navigating career transitions and growth opportunities in the AI era.",
    topics: ["Career", "Panel", "AI"],
    images: [
      "/assets/panel.jpg",
    ],
  },
  {
    title: "Dev Hangout 1.O: LLM Beyond Chats - Martins Eweniyi",
    date: "2025",
    location: "Lagos/Online",
    description:
      "An interactive session on how to use LLMs to build real-world applications. An engineers perspective on Large Language Models.",
    topics: ["LLM", "AI", "ChatGPT", "Claude", "Gemini", "Bard"],
    images: [
      "/assets/event-1.jpg",
      "/assets/event-1-1.png",
    ],
    youtube: "https://www.youtube.com/watch?v=1MWobf0omnw&t=962s",
  },
]
