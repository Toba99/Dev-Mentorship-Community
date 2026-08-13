export interface Testimonial {
  quote: string
  name: string
  role: string
  outcome: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The structured roadmap and weekly accountability completely changed how I learn. I finally stopped jumping between tutorials and started shipping real projects.",
    name: "Ifeoma N.",
    role: "Frontend Developer",
    outcome: "Landed first dev role",
  },
  {
    quote:
      "Having a mentor who had walked the path made all the difference. The career guidance alone was worth it — I negotiated a much better offer.",
    name: "Kwame A.",
    role: "Backend Engineer",
    outcome: "Switched into tech",
  },
  {
    quote:
      "The community kept me consistent. Knowing people were expecting my updates each week pushed me to keep going when I wanted to quit.",
    name: "Zainab O.",
    role: "Full Stack Developer",
    outcome: "Completed cohort",
  },
]
