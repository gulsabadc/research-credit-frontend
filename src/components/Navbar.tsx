"use client";

import { Button } from "@/components/global-components/button";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";

const gilroyBold = localFont({
  src: "../fonts/fonts/fonnts.com-Gilroy-Bold.ttf", // adjust path
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export default function Navigation() {
  return (
    <header className="container mx-auto px-6 py-6 relative z-10">
      <div 
        className="border border-white/20 rounded-lg px-8 py-4 backdrop-blur-sm"
        style={{
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.06) 100%)',
        }}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className={`${gilroyBold.className}`}>
            <div className="flex items-center">
              <h1 className="text-4xl font-normal font-main">
                <span className="text-white">Credit</span>
                <span className="text-emerald-400">Hero</span>
              </h1>
            </div>
          </div>

          {/* Navigation Menu */}
          <div
            className="hidden md:flex items-center space-x-10 font-sub"
            style={{ width: "542px", height: "17px", opacity: 1 }}
          >
            <a
              href="#compliance"
              className="text-white hover:text-emerald-400 transition-colors text-center"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "32px",
                letterSpacing: "0%",
              }}
            >
              Compliance
            </a>
            <a
              href="#resources"
              className="text-white hover:text-emerald-400 transition-colors text-center"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "32px",
                letterSpacing: "0%",
              }}
            >
              Resources
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-emerald-400 transition-colors text-center"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "32px",
                letterSpacing: "0%",
              }}
            >
              Pricing
            </a>
            <Button
              variant="outline"
              className="border-white/40 text-white hover:bg-white hover:text-blue-900 transition-all duration-200 bg-transparent text-center"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "32px",
                letterSpacing: "0%",
              }}
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-emerald-400 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}