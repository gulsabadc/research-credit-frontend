import { Button } from "@/components/global-components/button";
import { Sparkles, ArrowRight } from "lucide-react";
import localFont from "next/font/local";

const gilroyBold = localFont({
  src: "../fonts/fonts/fonnts.com-Gilroy-Bold.ttf", // adjust path
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-gilroy-bold",
});

export default function Hero() {
  return (
    <main className="container mx-auto px-6 py-20 relative z-10">
      <div className={`${gilroyBold.variable}`}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#375413] backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-5 h-4 text-[#D6FFFF]" />
            <span
              className="text-center"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "32px",
                letterSpacing: "0%",
                backgroundColor:
                  "linear-gradient(90deg, rgba(92, 220, 220, 0.4) 0%, rgba(49, 118, 118, 0.4) 100%)",
                color: "#D6FFFF", // Changed from white to black for better contrast
                padding: "4px 12px", // Added padding for better appearance
                borderRadius: "4px", // Optional: for rounded corners
                // leading-trim: both; /* Note: leading-trim is not widely supported yet */
              }}
            >
              100% traceability
            </span>
          </div>

          {/* Main Headline */}
          <div className={`${gilroyBold.className}`}>
            <h1 className="font-main font-[400] text-[66px] tracking-[-0.02em] mb-6 text-balance leading-[62px]">
              <span className="bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent">
                Audit-ready R&amp;D tax credits
              </span>{" "}
              <span className="bg-gradient-to-b from-[#96ED00]  to-[#7BC300] bg-clip-text text-transparent">
                in days,
              </span>{" "}
              <span className="bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent">
                not months
              </span>
            </h1>
          </div>

          {/* Subtitle */}

          <p
            className="text-white/80 mb-12 max-w-4xl mx-auto text-center"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "32px",
              letterSpacing: "0%",
            }}
          >
            CreditPro connects payroll, time, and expenses; explains
            eligibility; categorizes costs; and generates Form 6765 with an
            auditor-friendly documentation package.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="border-0"
            style={{
              fontFamily: "var(--font-gilroy-bold)",
              fontWeight: 400,
              fontSize: "26px",
              lineHeight: "93.99px",
              letterSpacing: "-1%",
              textAlign: "right",
              background:
                "radial-gradient(43.11% 181.04% at 50% 50%, #96ED00 0%, #93E800 100%)",
              color: "black",
              padding: "16px 32px",
              height: "76px", 
              width: "376px", 
              borderRadius: "9999px",
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: "all 0.3s ease",
            }}
          >
            Schedule a demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-cyan-400/20 to-transparent blur-3xl rounded-full"></div>
    </main>
  );
}
