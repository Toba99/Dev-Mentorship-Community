"use client"

import { motion } from "framer-motion"
import SectionWrapper from "@/components/SectionWrapper"
import CTASection from "@/components/CTASection"
import { SectionHeading } from "@/components/ui/section-heading"
import { Target, Users, BookOpen, Rocket, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Rocket className="h-6 w-6 text-blue-400" />,
      title: "Growth",
      description: "We believe in continuous learning and pushing boundaries. Every developer has untapped potential waiting to be unlocked.",
    },
    {
      icon: <Target className="h-6 w-6 text-purple-400" />,
      title: "Accountability",
      description: "Consistency is key to success. We provide structure and support to help you stay on track and achieve your goals.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: "Community",
      description: "You&apos;re not alone on this journey. Join a network of developers supporting each other&apos;s growth and success.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-purple-400" />,
      title: "Practical Learning",
      description: "Theory is important, but real-world application is where true mastery happens. We focus on hands-on, practical skills.",
    },
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
              About Dev Mentorship Community
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Building the bridge between potential and achievement through structured mentorship
            </p>
          </motion.div>
        </div>
      </section>

      {/* About the Community */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About the Community</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Dev Mentorship Community was founded on a simple yet powerful belief: every developer deserves access to quality mentorship that accelerates their growth and unlocks their potential. We recognized that while there are countless resources for learning to code, there&apos;s a significant gap in structured, personalized guidance that helps developers navigate the complexities of building a successful career.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our community brings together experienced engineers who are passionate about giving back and aspiring developers who are committed to growth. Through structured cohorts, accountability systems, and real-world project guidance, we create an environment where meaningful learning happens and careers are transformed.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* The Problem We Solve */}
      <SectionWrapper className="bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Problem We Solve</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The journey from learning to code to building a successful career is filled with challenges. Many developers struggle with:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Lack of clear direction and structured learning paths</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Difficulty staying accountable and consistent without external support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Limited access to experienced engineers who can provide personalized guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Uncertainty about how to position themselves for career opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Isolation and lack of community support during the learning journey</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dev Mentorship Community addresses these challenges by providing structured mentorship, accountability systems, and a supportive community that guides developers from learning to career success.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="h-10 w-10 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower developers at all stages of their journey by connecting them with experienced mentors, providing structured learning paths, and fostering a community where growth, accountability, and practical learning come together to unlock real career opportunities.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Vision */}
      <SectionWrapper className="bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <Lightbulb className="h-10 w-10 text-purple-400" />
              <h2 className="text-4xl md:text-5xl font-bold">Our Vision</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We envision a future where every developer has access to quality mentorship, where experienced engineers actively contribute to the growth of the next generation, and where structured learning paths make career transitions smoother and more accessible. We&apos;re building a movement that transforms how developers learn, grow, and succeed.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Our values"
          title="Core Values"
          subtitle="The principles that guide everything we do"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                {value.icon}
                <h3 className="text-2xl font-semibold">{value.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Moving Forward */}
      <SectionWrapper className="bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Moving Forward</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                As we continue to grow, our commitment remains unwavering: to provide exceptional mentorship experiences that transform careers. We&apos;re constantly evolving our programs, expanding our mentor network, and refining our approach based on feedback and results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our roadmap includes building a comprehensive community platform, establishing partnerships with leading tech companies, and developing specialized tracks for different areas of software development. But at our core, we&apos;ll always remain focused on what matters most: connecting developers with the guidance they need to succeed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you&apos;re a developer looking to accelerate your growth or an experienced engineer ready to give back, we invite you to join us in building the future of developer mentorship.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection
        title="Join the Movement"
        description="Whether you're here to grow or to give back, there's a place for you in our community."
        primaryCTA={{ text: "Apply for Next Cohort", href: "/apply" }}
        secondaryCTA={{ text: "Become a Mentor", href: "/mentor" }}
      />
    </>
  )
}
