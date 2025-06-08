"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Terminal, CheckCircle, Copy } from "lucide-react"

export function Launch() {
  const [copiedCommand, setCopiedCommand] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText("curl -sSL openxploit.sh | bash")
    setCopiedCommand(true)
    setTimeout(() => setCopiedCommand(false), 2000)
  }

  return (
    <section id="launch" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started in Seconds</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Just like Coolify - one command to rule them all
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Installation Command</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyCommand}
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {copiedCommand ? <CheckCircle className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                  {copiedCommand ? "Copied!" : "Copy"}
                </Button>
              </div>

              <div className="bg-muted rounded-lg p-4 font-mono text-sm md:text-base">
                <code className="text-primary">curl -sSL openxploit.sh | bash</code>
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                <p>This command will:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Download and install OpenXploit</li>
                  <li>Set up the web interface</li>
                  <li>Start the scanner service</li>
                  <li>Open your browser to the dashboard</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
