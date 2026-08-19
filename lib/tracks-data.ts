export interface Track {
  title: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  description: string
  outcomes: string[]
  icon: "code" | "server" | "cloud" | "brain"
}

export const tracks: Track[] = [
  {
    title: "Frontend Engineering",
    level: "Beginner",
    duration: "12 weeks",
    description:
      "Master modern frontend development with HTML, CSS, JavaScript, and React while building real, accessible interfaces.",
    outcomes: [
      "Build responsive, accessible UIs",
      "Work confidently with React and TypeScript",
      "Ship a portfolio-ready project",
    ],
    icon: "code",
  },
  {
    title: "Backend Engineering",
    level: "Intermediate",
    duration: "12 weeks",
    description:
      "Design APIs, model data, and build reliable server-side applications with modern backend tooling.",
    outcomes: [
      "Design and build REST APIs",
      "Model and query databases effectively",
      "Apply core system design principles",
    ],
    icon: "server",
  },
  {
    title: "DevOps & Cloud",
    level: "Intermediate",
    duration: "10 weeks",
    description:
      "Learn containers, CI/CD, and cloud fundamentals to deploy and operate applications with confidence.",
    outcomes: [
      "Containerize and deploy applications",
      "Build CI/CD pipelines",
      "Understand cloud infrastructure basics",
    ],
    icon: "cloud",
  },
  {
    title: "AI & Machine Learning",
    level: "Advanced",
    duration: "14 weeks",
    description:
      "Move from fundamentals to building practical AI features, with a project-first approach to ML.",
    outcomes: [
      "Understand core ML concepts",
      "Build and evaluate models",
      "Integrate AI into real applications",
    ],
    icon: "brain",
  },
]
