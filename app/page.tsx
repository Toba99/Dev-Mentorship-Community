"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Target, Users, CheckCircle, Rocket, BookOpen, Briefcase, Zap } from "lucide-react"
import SectionWrapper from "@/components/SectionWrapper"
import FeatureCard from "@/components/FeatureCard"
import CTASection from "@/components/CTASection"
import AnimatedCounter from "@/components/AnimatedCounter"

export default function Home() {
  const features = [
    {
      title: "Technical Skill Development",
      description: "Master modern technologies and best practices through hands-on guidance from experienced engineers.",
      icon: <Code className="h-8 w-8 text-blue-400" />,
    },
    {
      title: "Career Strategy & Positioning",
      description: "Learn how to position yourself, negotiate offers, and navigate your career path strategically.",
      icon: <Target className="h-8 w-8 text-purple-400" />,
    },
    {
      title: "Portfolio & Project Building",
      description: "Build real-world projects that showcase your skills and attract potential employers.",
      icon: <Briefcase className="h-8 w-8 text-blue-400" />,
    },
    {
      title: "Accountability & Consistency",
      description: "Stay on track with weekly check-ins and structured milestones that keep you moving forward.",
      icon: <CheckCircle className="h-8 w-8 text-purple-400" />,
    },
    {
      title: "Community Support",
      description: "Join a network of developers at various stages, sharing knowledge and supporting each other.",
      icon: <Users className="h-8 w-8 text-blue-400" />,
    },
  ]

  const steps = [
    { number: "01", title: "Apply", description: "Submit your application with your background and goals." },
    { number: "02", title: "Selection & Matching", description: "We review applications and match you with the right mentor." },
    { number: "03", title: "Structured Roadmap", description: "Get a personalized learning path tailored to your goals." },
    { number: "04", title: "Weekly Accountability", description: "Regular check-ins ensure consistent progress and support." },
    { number: "05", title: "Demo & Growth Evaluation", description: "Showcase your work and track your growth journey." },
  ]

  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Structured Cohorts",
      description: "Launching mentorship cohorts with experienced engineers",
      status: "active",
    },
    {
      phase: "Phase 2",
      title: "Community Platform",
      description: "Slack/Discord integration + comprehensive resource library",
      status: "upcoming",
    },
    {
      phase: "Phase 3",
      title: "Career Acceleration",
      description: "Hiring partnerships with top tech companies",
      status: "upcoming",
    },
    {
      phase: "Phase 4",
      title: "Specialized Tracks",
      description: "Frontend, Backend, DevOps, and AI-focused mentorship tracks",
      status: "upcoming",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-gradient bg-[length:200%_200%]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Empowering Developers Through{" "}
              <span className="gradient-text">Structured Mentorship</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto">
              Dev Mentorship Community connects aspiring developers with experienced engineers to accelerate growth, build confidence, and unlock real career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
              >
                Apply for Next Cohort
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/mentor"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium hover:bg-card transition-all duration-300"
              >
                Become a Mentor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Structured Mentorship. Real Growth.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Dev Mentorship Community is a structured mentorship initiative designed to help beginner and intermediate developers grow through guidance, accountability, and real-world learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works Section */}
      <SectionWrapper className="bg-card/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A clear, structured path from application to growth
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform -translate-x-1/2" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 glass-card rounded-xl p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Vision Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Building the Next Generation of Confident Developers
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-balance">
            Our mission is to create an ecosystem where experienced developers give back, and aspiring developers grow with clarity, structure, and long-term direction. We believe that mentorship is the bridge between potential and achievement.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Roadmap Section */}
      <SectionWrapper className="bg-card/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Roadmap</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A strategic vision for the future of developer mentorship
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {roadmapPhases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full ${
                    phase.status === "active"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600"
                      : "bg-muted"
                  }`}
                />
                {index < roadmapPhases.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>
              <div className="flex-1 glass-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-medium text-muted-foreground">{phase.phase}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      phase.status === "active"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {phase.status === "active" ? "Active" : "Upcoming"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Social Proof Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Impact in Numbers</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-8 text-center"
          >
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
              <AnimatedCounter value={50} suffix="+" />
            </div>
            <p className="text-muted-foreground">Developers Mentored</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-xl p-8 text-center"
          >
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
              <AnimatedCounter value={80} suffix="%" />
            </div>
            <p className="text-muted-foreground">Cohort Completion</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-xl p-8 text-center"
          >
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
              <AnimatedCounter value={60} suffix="%" />
            </div>
            <p className="text-muted-foreground">Career Readiness Improvement</p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <CTASection
        title="Ready to Accelerate Your Growth?"
        description="Join the next cohort and start your journey with structured mentorship, accountability, and real-world guidance."
        primaryCTA={{ text: "Apply for Next Cohort", href: "/apply" }}
        secondaryCTA={{ text: "Learn More", href: "/about" }}
      />
    </>
  )
}
