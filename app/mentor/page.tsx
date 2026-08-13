"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Award, Heart, Clock } from "lucide-react"
import SectionWrapper from "@/components/SectionWrapper"
import CTASection from "@/components/CTASection"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"

export default function MentorPage() {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-blue-400" />,
      title: "Give Back",
      description: "Share your knowledge and experience with the next generation of developers. Make a meaningful impact on someone's career journey.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Build Your Network",
      description: "Connect with other experienced engineers and expand your professional network within our community.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-400" />,
      title: "Develop Leadership",
      description: "Hone your mentoring and leadership skills while helping others grow. Great for career development.",
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-400" />,
      title: "Flexible Commitment",
      description: "We understand you&apos;re busy. Our structured approach makes mentoring efficient and impactful without overwhelming your schedule.",
    },
  ]

  const responsibilities = [
    "Provide weekly 1-on-1 guidance sessions (30-60 minutes)",
    "Review and provide feedback on mentee projects and code",
    "Help create structured learning roadmaps",
    "Offer career advice and industry insights",
    "Maintain accountability through regular check-ins",
    "Participate in mentor community discussions",
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10" />
        <div className="absolute inset-0 bg-grid-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Become a Mentor
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8">
              Share your expertise and help shape the next generation of developers
            </p>
            <Button href="/contact">
              Express Interest
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Mentor */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Why mentor"
          title="Why Become a Mentor?"
          subtitle="Mentoring is one of the most rewarding ways to give back to the developer community"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* What We're Looking For */}
      <SectionWrapper className="bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">What We&apos;re Looking For</h2>
            <div className="glass-card rounded-xl p-8 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We&apos;re seeking experienced developers who are passionate about helping others grow. Ideal mentors have:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>3+ years of professional software development experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Strong communication skills and patience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Experience with modern development practices and tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Commitment to dedicating time weekly to mentorship</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Enthusiasm for teaching and helping others succeed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Responsibilities */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Mentor Responsibilities</h2>
            <div className="glass-card rounded-xl p-8">
              <ul className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Support */}
      <SectionWrapper className="bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">We Support Our Mentors</h2>
            <div className="glass-card rounded-xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Mentoring shouldn&apos;t be overwhelming. We provide:
              </p>
              <ul className="space-y-3 text-muted-foreground text-left max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Structured mentorship frameworks and resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Mentor community for sharing experiences and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Training sessions on effective mentoring techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Flexible scheduling that works with your availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Ongoing support from our team</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection
        title="Ready to Make an Impact?"
        description="Join our mentor community and help shape the future of developer mentorship. Express your interest and we'll be in touch."
        primaryCTA={{ text: "Express Interest", href: "/contact" }}
      />
    </>
  )
}
