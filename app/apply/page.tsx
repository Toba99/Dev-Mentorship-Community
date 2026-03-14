"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { Loader2, CheckCircle2 } from "lucide-react"
import SectionWrapper from "@/components/SectionWrapper"

const applicationSchema = z.object({
  // Basic Info
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  linkedinUrl: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
  githubUrl: z.string().url("Please enter a valid GitHub URL").optional().or(z.literal("")),
  location: z.string().min(2, "Please enter your location"),
  timezone: z.string().min(1, "Please select your timezone"),

  // Technical Background
  skillLevel: z.enum(["beginner", "intermediate"], {
    required_error: "Please select your skill level",
  }),
  primaryTechStack: z.string().min(1, "Please enter your primary tech stack"),
  codingExperience: z.string().min(1, "Please describe your coding experience"),
  biggestChallenge: z.string().min(10, "Please provide at least 10 characters"),

  // Commitment
  whyMentorship: z.string().min(20, "Please provide at least 20 characters"),
  goals: z.string().min(20, "Please provide at least 20 characters"),
  hoursPerWeek: z.string().min(1, "Please select your availability"),

  // Final Question
  whyGoodFit: z.string().min(20, "Please provide at least 20 characters"),
})

type ApplicationFormData = z.infer<typeof applicationSchema>

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  })

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    // In production, this would be a server action:
    // await submitApplication(data)
    
    console.log("Application submitted:", data)
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="glass-card rounded-xl p-12">
            <CheckCircle2 className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for your interest in Dev Mentorship Community. We've received your application and will review it carefully.
            </p>
            <p className="text-muted-foreground">
              You'll receive an email confirmation shortly. Our team will be in touch within 5-7 business days with next steps.
            </p>
          </div>
        </motion.div>
      </SectionWrapper>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Apply for the Next Mentorship Cohort
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Spots are limited. We select motivated developers ready to commit and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              {/* Basic Info Section */}
              <div className="glass-card rounded-xl p-8 space-y-6">
                <h2 className="text-2xl font-semibold mb-6">Basic Information</h2>
                
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="linkedinUrl" className="block text-sm font-medium mb-2">
                      LinkedIn URL
                    </label>
                    <input
                      {...register("linkedinUrl")}
                      type="url"
                      id="linkedinUrl"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                    {errors.linkedinUrl && (
                      <p className="mt-1 text-sm text-red-400">{errors.linkedinUrl.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="githubUrl" className="block text-sm font-medium mb-2">
                      GitHub URL
                    </label>
                    <input
                      {...register("githubUrl")}
                      type="url"
                      id="githubUrl"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="https://github.com/johndoe"
                    />
                    {errors.githubUrl && (
                      <p className="mt-1 text-sm text-red-400">{errors.githubUrl.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-2">
                      Location <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register("location")}
                      type="text"
                      id="location"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="City, Country"
                    />
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-400">{errors.location.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="timezone" className="block text-sm font-medium mb-2">
                      Timezone <span className="text-red-400">*</span>
                    </label>
                    <select
                      {...register("timezone")}
                      id="timezone"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    >
                      <option value="">Select timezone</option>
                      <option value="UTC-12">UTC-12</option>
                      <option value="UTC-11">UTC-11</option>
                      <option value="UTC-10">UTC-10</option>
                      <option value="UTC-9">UTC-9</option>
                      <option value="UTC-8">UTC-8 (PST)</option>
                      <option value="UTC-7">UTC-7 (MST)</option>
                      <option value="UTC-6">UTC-6 (CST)</option>
                      <option value="UTC-5">UTC-5 (EST)</option>
                      <option value="UTC-4">UTC-4</option>
                      <option value="UTC-3">UTC-3</option>
                      <option value="UTC-2">UTC-2</option>
                      <option value="UTC-1">UTC-1</option>
                      <option value="UTC+0">UTC+0 (GMT)</option>
                      <option value="UTC+1">UTC+1 (CET)</option>
                      <option value="UTC+2">UTC+2</option>
                      <option value="UTC+3">UTC+3</option>
                      <option value="UTC+4">UTC+4</option>
                      <option value="UTC+5">UTC+5</option>
                      <option value="UTC+5:30">UTC+5:30 (IST)</option>
                      <option value="UTC+6">UTC+6</option>
                      <option value="UTC+7">UTC+7</option>
                      <option value="UTC+8">UTC+8</option>
                      <option value="UTC+9">UTC+9 (JST)</option>
                      <option value="UTC+10">UTC+10</option>
                      <option value="UTC+11">UTC+11</option>
                      <option value="UTC+12">UTC+12</option>
                    </select>
                    {errors.timezone && (
                      <p className="mt-1 text-sm text-red-400">{errors.timezone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Technical Background Section */}
              <div className="glass-card rounded-xl p-8 space-y-6">
                <h2 className="text-2xl font-semibold mb-6">Technical Background</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Skill Level <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center p-4 rounded-lg border border-input cursor-pointer hover:bg-card/50 transition-colors">
                      <input
                        {...register("skillLevel")}
                        type="radio"
                        value="beginner"
                        className="mr-3"
                      />
                      <span>Beginner</span>
                    </label>
                    <label className="flex items-center p-4 rounded-lg border border-input cursor-pointer hover:bg-card/50 transition-colors">
                      <input
                        {...register("skillLevel")}
                        type="radio"
                        value="intermediate"
                        className="mr-3"
                      />
                      <span>Intermediate</span>
                    </label>
                  </div>
                  {errors.skillLevel && (
                    <p className="mt-1 text-sm text-red-400">{errors.skillLevel.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="primaryTechStack" className="block text-sm font-medium mb-2">
                    Primary Tech Stack <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("primaryTechStack")}
                    type="text"
                    id="primaryTechStack"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="e.g., React, Node.js, Python"
                  />
                  {errors.primaryTechStack && (
                    <p className="mt-1 text-sm text-red-400">{errors.primaryTechStack.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="codingExperience" className="block text-sm font-medium mb-2">
                    Coding Experience <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("codingExperience")}
                    type="text"
                    id="codingExperience"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="e.g., 6 months, 2 years"
                  />
                  {errors.codingExperience && (
                    <p className="mt-1 text-sm text-red-400">{errors.codingExperience.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="biggestChallenge" className="block text-sm font-medium mb-2">
                    Biggest Challenge <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    {...register("biggestChallenge")}
                    id="biggestChallenge"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="What's your biggest challenge as a developer right now?"
                  />
                  {errors.biggestChallenge && (
                    <p className="mt-1 text-sm text-red-400">{errors.biggestChallenge.message}</p>
                  )}
                </div>
              </div>

              {/* Commitment Section */}
              <div className="glass-card rounded-xl p-8 space-y-6">
                <h2 className="text-2xl font-semibold mb-6">Commitment</h2>
                
                <div>
                  <label htmlFor="whyMentorship" className="block text-sm font-medium mb-2">
                    Why do you want mentorship? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    {...register("whyMentorship")}
                    id="whyMentorship"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="Tell us why you're seeking mentorship..."
                  />
                  {errors.whyMentorship && (
                    <p className="mt-1 text-sm text-red-400">{errors.whyMentorship.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium mb-2">
                    Goals for next 3 months <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    {...register("goals")}
                    id="goals"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="What do you want to achieve in the next 3 months?"
                  />
                  {errors.goals && (
                    <p className="mt-1 text-sm text-red-400">{errors.goals.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="hoursPerWeek" className="block text-sm font-medium mb-2">
                    Hours per week available <span className="text-red-400">*</span>
                  </label>
                  <select
                    {...register("hoursPerWeek")}
                    id="hoursPerWeek"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  >
                    <option value="">Select hours</option>
                    <option value="1-5">1-5 hours</option>
                    <option value="5-10">5-10 hours</option>
                    <option value="10-15">10-15 hours</option>
                    <option value="15-20">15-20 hours</option>
                    <option value="20+">20+ hours</option>
                  </select>
                  {errors.hoursPerWeek && (
                    <p className="mt-1 text-sm text-red-400">{errors.hoursPerWeek.message}</p>
                  )}
                </div>
              </div>

              {/* Final Question */}
              <div className="glass-card rounded-xl p-8 space-y-6">
                <h2 className="text-2xl font-semibold mb-6">Final Question</h2>
                
                <div>
                  <label htmlFor="whyGoodFit" className="block text-sm font-medium mb-2">
                    Why are you a good fit? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    {...register("whyGoodFit")}
                    id="whyGoodFit"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="Tell us why you're a good fit for this mentorship program..."
                  />
                  {errors.whyGoodFit && (
                    <p className="mt-1 text-sm text-red-400">{errors.whyGoodFit.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Apply Now"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  )
}
