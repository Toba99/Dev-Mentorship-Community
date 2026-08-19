export interface Mentor {
  name: string
  role: string
  company: string
  expertise: string[]
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
    expertise: ["Backend Engineering", "Platform Engineering", "Microservices", "Systems Design", "AI Engineering"],
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
    expertise: ["Backend Engineering", "AI Engineering", "Team Management"],
    bio: "Helps mentees build accessible, production-grade interfaces and grow into senior frontend roles.",
    socials: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "David Mensah",
    role: "Backend Engineer",
    company: "Cloud Platform",
    expertise: ["Backend", "Node.js", "System Design"],
    bio: "Focused on API design, databases, and helping developers think in systems rather than snippets.",
    socials: {
      github: "https://github.com/",
    },
  },
  {
    name: "Chidinma Eze",
    role: "DevOps Engineer",
    company: "SaaS Company",
    expertise: ["DevOps", "Cloud", "CI/CD"],
    bio: "Demystifies infrastructure, containers, and deployment pipelines for early-career engineers.",
    socials: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Tobi Adeyemi",
    role: "Product Engineer",
    company: "Health Tech",
    expertise: ["Full Stack", "Product", "Career"],
    bio: "Bridges product thinking and engineering to help mentees ship work that gets them hired.",
    socials: {
      x: "https://x.com/",
    },
  },
  {
    name: "Grace Bello",
    role: "Machine Learning Engineer",
    company: "AI Research Lab",
    expertise: ["AI", "Machine Learning", "Python"],
    bio: "Mentors developers entering AI/ML with a practical, project-first learning path.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
]
