import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Dev Mentorship Community | Structured Mentorship for Developers",
  description: "Empowering developers through structured mentorship. Connect with experienced engineers to accelerate growth, build confidence, and unlock real career opportunities.",
  keywords: ["developer mentorship", "coding mentorship", "software engineering mentorship", "career growth", "developer community"],
  authors: [{ name: "Dev Mentorship Community" }],
  openGraph: {
    title: "Dev Mentorship Community | Structured Mentorship for Developers",
    description: "Empowering developers through structured mentorship. Connect with experienced engineers to accelerate growth, build confidence, and unlock real career opportunities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Mentorship Community | Structured Mentorship for Developers",
    description: "Empowering developers through structured mentorship. Connect with experienced engineers to accelerate growth, build confidence, and unlock real career opportunities.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
