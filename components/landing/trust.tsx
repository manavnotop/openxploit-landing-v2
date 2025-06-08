"use client"

import { motion } from "framer-motion"
import { Shield, Github, Lock, Zap } from "lucide-react"

export function Trust() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Built by Developers, for Developers</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Github className="h-5 w-5" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Security First</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5" />
              <span>Privacy Focused</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Developer Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
