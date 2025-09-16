"use client"

import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <header className="container mx-auto px-6 py-6 relative z-10">
      <div className="border border-white/20 rounded-lg px-8 py-4 bg-violet-950/20 backdrop-blur-sm">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-4xl font-normal">
              <span className="text-white">Credit</span>
              <span className="text-emerald-400">Hero</span>
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#compliance" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Compliance
            </a>
            <a href="#resources" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Resources
            </a>
            <a href="#pricing" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Pricing
            </a>
            <Button
              variant="outline"
              className="border-white/40 text-white hover:bg-white hover:text-blue-900 transition-all duration-200 bg-transparent"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-emerald-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
