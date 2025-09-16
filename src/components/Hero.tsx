import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <main className="container mx-auto px-6 py-20 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgba(92,220,220,0.4)] to-[rgba(49,118,118,0.4)] backdrop-blur-sm border border-blue-700/50 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-white text-sm font-medium">
            100% traceability
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight">
          Audit-ready R&D tax credits{" "}
          <span className="text-cyan-400">in days,</span> not months
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
          CreditPro connects payroll, time, and expenses; explains eligibility;
          categorizes costs; and generates Form 6765 with an auditor-friendly
          documentation package.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-gray-900 font-semibold px-8 py-4 h-19 w-94 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0"
        >
          Schedule a demo
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-cyan-400/20 to-transparent blur-3xl rounded-full"></div>
    </main>
  );
}
