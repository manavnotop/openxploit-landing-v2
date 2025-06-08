"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">OpenXploit</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How it Works
          </a>
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#launch" className="text-sm font-medium hover:text-primary transition-colors">
            Get Started
          </a>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden border-t"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
          <a href="#how-it-works" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
            How it Works
          </a>
          <a href="#features" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#launch" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
            Get Started
          </a>
        </nav>
      </motion.div>
    </motion.header>
  )
}
