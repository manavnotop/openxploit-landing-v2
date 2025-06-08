"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Zap, Terminal } from "lucide-react"

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

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Local-First?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Privacy, speed, and simplicity - everything runs on your machine
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <Card className="text-center h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>100% Private</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your code never leaves your machine. No data is sent to external servers or stored in the cloud.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="text-center h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No network latency or upload times. Scans run directly on your hardware for maximum speed.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="text-center h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Terminal className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Zero Config</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No complex setup, API keys, or configuration files. Just run one command and start scanning.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
