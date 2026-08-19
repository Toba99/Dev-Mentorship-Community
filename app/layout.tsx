import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import MotionProvider from "@/components/MotionProvider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-mentorship-community.netlify.app"),
  title: "Dev Mentorship Community | Structured Mentorship for Developers",
  description: "Empowering developers through structured mentorship. Connect with experienced engineers to accelerate growth, build confidence, and unlock real career opportunities.",
  keywords: ["developer mentorship", "coding mentorship", "software engineering mentorship", "career growth", "developer community"],
  authors: [{ name: "Dev Mentorship Community" }],
  icons: {
    icon: "/assets/DMC.jpeg",
    apple: "/assets/DMC.jpeg",
  },
  openGraph: {
    title: "Dev Mentorship Community | Structured Mentorship for Developers",
    description: "Empowering developers through structured mentorship. Connect with experienced engineers to accelerate growth, build confidence, and unlock real career opportunities.",
    type: "website",
    locale: "en_US",
    images: ["/assets/DMC.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Mentorship Community | Structured Mentorship for Developers",
    description: "Empowering developers through structured mentorship. Connect with experienced engineers to accelerate growth, build confidence, and unlock real career opportunities.",
    images: ["/assets/DMC.jpeg"],
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
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <MotionProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
