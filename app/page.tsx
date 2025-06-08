"use client"

import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { ScanPipeline } from "@/components/landing/scan-pipeline"
import { Features } from "@/components/landing/features"
import { Launch } from "@/components/landing/launch"
import { Trust } from "@/components/landing/trust"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <ScanPipeline />
      <Features />
      <Launch />
      <Trust />
      <Footer />
    </div>
  )
}
