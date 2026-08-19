export interface Stat {
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { value: 350, suffix: "+", label: "Developers mentored toward their goals" },
  { value: 80, suffix: "%", label: "Of mentees complete their cohort" },
  { value: 60, suffix: "%", label: "Average gain in career readiness" },
  { value: 20, suffix: "+", label: "Experienced engineers volunteering" },
]
