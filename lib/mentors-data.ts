export interface Mentor {
  name: string
  role: string
  featuredRole?: string
  company?: string
  image?: string
  expertise: string[]
  featuredExpertise?: string[]
  bio: string
  socials?: {
    linkedin?: string
    x?: string
    github?: string
  }
}

export const mentors: Mentor[] = [
  {
    name: "Samuel Olabamiji",
    role: "Community Lead",
    company: "League",
    image: "/assets/mentors/samuel-olabamiji.jpg",
    expertise: ["Backend Engineering", "Platform Engineering", "Microservices", "Systems Design", "AI Engineering"],
    featuredExpertise: ["Backend", "Microservices", "Platform"],
    bio: "Guides developers on navigating software engineering in the AI era with discipline and the right tools.",
    socials: {
      linkedin: "https://www.linkedin.com/in/samolabams",
      x: "https://x.com/samolabams",
      github: "https://github.com/samolabams",
    },
  },
  {
    name: "Bamidele Aloko",
    role: "Engineering Lead",
    company: "Max",
    image: "/assets/mentors/bamidele-aloko.jpg",
    expertise: ["Backend Engineering", "AI Engineering", "Team Management"],
    featuredExpertise: ["Backend", "AI Engineering", "Leadership"],
    bio: "Guides backend engineers in building resilient systems, applying AI thoughtfully, and growing into effective technical leaders.",
    socials: {
      linkedin: "https://www.linkedin.com/in/demolala",
    },
  },
  {
    name: "Babatope Adeoye",
    role: "Senior Backend Engineer",
    company: "9jaPay",
    image: "/assets/mentors/babatope-adeoye.jpg",
    expertise: ["Backend Engineering", "Java", "Spring Boot", "Microservices", "System Design", "AI Engineering"],
    featuredExpertise: ["Node.js", "Java", "System Design"],
    bio: "Guides backend developers in building reliable, production-ready systems with Java, system design, and practical AI engineering.",
    socials: {
      linkedin: "https://www.linkedin.com/in/babatope-adeoye/",
      github: "https://github.com/Shorlar",
    },
  },
  {
    name: "Olusegun Olayinka",
    role: "Senior Frontend & AI Product Engineer",
    featuredRole: "Senior Frontend & AI Engineer",
    company: "Fintech & AI",
    image: "/assets/mentors/olusegun-olayinka.jpg",
    expertise: ["React", "TypeScript", "Next.js", "Design Systems", "Accessibility", "AI Engineering"],
    featuredExpertise: ["React", "TypeScript", "Evals"],
    bio: "Guides developers in building accessible, production-ready frontend and AI products with sound engineering practices.",
    socials: {
      linkedin: "https://www.linkedin.com/in/olusegun-olayinka/",
      x: "https://x.com/techwithsegun",
      github: "https://github.com/olayis",
    },
  },
  {
    name: "Oluwafemi Fehintoluwa",
    role: "Senior Laravel Engineer",
    company: "Technology Value",
    image: "/assets/mentors/oluwafemi-fehintoluwa.jpg",
    expertise: ["Laravel", "PHP", "Livewire", "Vue.js", "REST APIs", "Payment Gateways"],
    bio: "Guides developers in building scalable Laravel platforms, reliable APIs, and production systems where uptime and data integrity matter.",
    socials: {
      linkedin: "https://www.linkedin.com/in/cyrilcril/",
    },
  },
  {
    name: "Martins Eweniyi",
    role: "Software Engineer",
    company: "Fintech",
    image: "/assets/mentors/martins-eweniyi.jpg",
    expertise: ["Full Stack", "Product"],
    bio: "Helps developers build end-to-end products, from intuitive interfaces to scalable backend systems, focused on real-world delivery.",
    socials: {
      linkedin: "https://www.linkedin.com/in/martins-eweniyi-919168156/",
    },
  },
]
