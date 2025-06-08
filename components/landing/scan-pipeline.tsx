"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Search, Play, AlertTriangle, Info } from "lucide-react"

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

export function ScanPipeline() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Scan Pipeline</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our two-phase scanning process identifies vulnerabilities comprehensively
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <motion.div variants={fadeInUp} className="relative flex items-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mr-8">
                <Search className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Spider Scan</h3>
                <p className="text-muted-foreground">
                  Crawls your application to discover all endpoints, forms, and entry points
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative flex items-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mr-8">
                <Play className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Active Scan</h3>
                <p className="text-muted-foreground">
                  Tests discovered endpoints for common vulnerabilities and security issues
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative flex items-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mr-8">
                <AlertTriangle className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Vulnerability Detection</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Badge variant="destructive" className="justify-center py-2 px-4 text-sm font-medium w-full">
                    High
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 px-4 text-sm font-medium w-full bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                  >
                    Medium
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="justify-center py-2 px-4 text-sm font-medium w-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  >
                    Low
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2 px-4 text-sm font-medium w-full">
                    <Info className="w-4 h-4 mr-1.5" />
                    Info
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
