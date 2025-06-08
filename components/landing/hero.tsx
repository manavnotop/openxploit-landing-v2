"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, ArrowRight, Github } from "lucide-react"
import { useEffect, useRef } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const typingAnimation = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
}

const blinkAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
}

export function Hero() {
  const terminalRef = useRef(null)
  const isInView = useInView(terminalRef, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <motion.div variants={staggerContainer} initial="initial" animate="animate" className="text-center space-y-8">
        <motion.div variants={fadeInUp} className="space-y-4">
          <Badge variant="secondary" className="px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Local-First Security Scanner
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Open<span className="text-primary">Xploit</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Scan, Secure, Simplify — All Locally.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Run a single curl command and uncover vulnerabilities in your local apps instantly.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Start Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
        </motion.div>

        {/* Terminal Animation */}
        <motion.div ref={terminalRef} variants={fadeInUp} className="max-w-2xl mx-auto">
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-muted-foreground ml-4">Terminal</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-green-500">$ curl -sSL openxploit.sh | bash</div>
                <div className="relative">
                  <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={typingAnimation}
                    className="text-muted-foreground whitespace-nowrap overflow-hidden"
                  >
                    {">"} Starting OpenXploit scanner...
                  </motion.div>
                  <motion.span
                    initial="hidden"
                    animate={controls}
                    variants={blinkAnimation}
                    className="absolute right-0 text-muted-foreground"
                  >
                    ▋
                  </motion.span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={controls}
                  transition={{ delay: 2.5, duration: 0.5 }}
                  className="text-blue-500"
                >
                  {">"} Ready to scan your applications!
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
