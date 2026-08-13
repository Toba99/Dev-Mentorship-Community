"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Target, Users, CheckCircle, Briefcase } from "lucide-react"
import SectionWrapper from "@/components/SectionWrapper"
import FeatureCard from "@/components/FeatureCard"
import CTASection from "@/components/CTASection"
import AnimatedCounter from "@/components/AnimatedCounter"
import PurposeSection from "@/components/PurposeSection"
import ProblemStatement from "@/components/ProblemStatement"
import MentorCard from "@/components/MentorCard"
import TrackCard from "@/components/TrackCard"
import TestimonialCard from "@/components/TestimonialCard"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { Accordion } from "@/components/ui/accordion"
import { tracks } from "@/lib/tracks-data"
import { mentors } from "@/lib/mentors-data"
import { testimonials } from "@/lib/testimonials-data"
import { faqs } from "@/lib/faqs-data"
import { stats } from "@/lib/stats-data"

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-gradient bg-[length:200%_200%]" />
        <div className="absolute inset-0 bg-grid-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="mb-6 inline-block rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
              Free, community-based developer mentorship
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Grow from learning to code to{" "}
              <span className="gradient-text">landing the job</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto">
              Dev Mentorship Community pairs aspiring developers with experienced engineers for structured roadmaps, weekly accountability, and real-world guidance — completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply">
                Apply for Next Cohort
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/mentor" variant="secondary">
                Become a Mentor
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Join 350+ developers already growing with structured mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <PurposeSection />

      {/* The Problem We Solve */}
      <ProblemStatement />

      {/* What We Do Section */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="What we do"
          title="Structured Mentorship. Real Growth."
          subtitle="A structured mentorship initiative designed to help beginner and intermediate developers grow through guidance, accountability, and real-world learning."
        />
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

      {/* Tracks Section */}
      <SectionWrapper className="bg-card/30">
        <SectionHeading
          eyebrow="Mentorship tracks"
          title="Choose Your Path"
          subtitle="Structured tracks with clear outcomes, mapped to where you want to go in your career."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <TrackCard key={track.title} track={track} delay={index * 0.1} />
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works Section */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="The process"
          title="How It Works"
          subtitle="A clear, structured path from application to growth"
        />
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
                className={`flex flex-col items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 glass-card rounded-xl p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-2xl font-bold">
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

      {/* Mentors Section */}
      <SectionWrapper className="bg-card/30">
        <SectionHeading
          eyebrow="Meet the mentors"
          title="Learn From Engineers Who've Done It"
          subtitle="Our mentors volunteer their time to guide you through the path they've already walked."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.slice(0, 3).map((mentor, index) => (
            <MentorCard key={mentor.name} mentor={mentor} delay={index * 0.1} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/mentors" variant="secondary" size="md">
            View All Mentors
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </SectionWrapper>

      {/* Social Proof / Stats Section */}
      <SectionWrapper>
        <SectionHeading eyebrow="Our impact" title="Impact in Numbers" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center sm:p-8"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper className="bg-card/30">
        <SectionHeading
          eyebrow="Testimonials"
          title="Hear From Our Community"
          subtitle="Behind every number is a developer whose career was transformed."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before applying."
        />
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <CTASection
        title="Ready to Accelerate Your Growth?"
        description="Join the next cohort and start your journey with structured mentorship, accountability, and real-world guidance — completely free."
        primaryCTA={{ text: "Apply for Next Cohort", href: "/apply" }}
        secondaryCTA={{ text: "Learn More", href: "/about" }}
      />
    </>
  )
}
