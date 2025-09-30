// components/JoinUsNavigation.tsx
"use client";

import { Button } from "@/components/global-components/button";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";



const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export default function JoinUsNavigation() {
  return (
    <header className="bg-[#050029]">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-37 px-15"> {/* Fixed height for consistent alignment */}
          
          {/* Logo - Left side */}
          <div>
            <h1 className="text-4xl text-white font-normal font-main">
              AgentiCredit
            </h1>
          </div>

          {/* Navigation Items - Right side */}
          <div className="flex items-center space-x-8">
            <a
              href="#compliance"
              className="text-white hover:text-[#96ED00] transition-colors"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              Compliance
            </a>
            <a
              href="#resources"
              className="text-white hover:text-[#96ED00] transition-colors"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              Resources
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-[#96ED00] transition-colors"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              Pricing
            </a>
            <Link href="/join-us">
              <Button
                variant="outline"
                className="text-white border-none transition-all duration-200 bg-transparent hover:text-[#96ED00] hover:font-bold hover:underline hover:bg-transparent"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "32px",
                }}
              >
                Join Us
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}