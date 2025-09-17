"use client";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/Dashboard-preview";
import TrustedBy from "@/components/Trusted-by";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import CTA from "@/components/Cta";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <style jsx global>{`
        body {
          background: #050036 !important;
          min-height: 100vh;
        }
      `}</style>

      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <DashboardPreview />
        <TrustedBy />
        <Features />
        <Process />
        <Benefits />
        <CTA />
        <Footer />

        {/* <main className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              Transform Your Credit Journey with <span className="text-emerald-400">CreditHero</span>
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Empower your financial future with our comprehensive credit management platform. Monitor, improve, and
              protect your credit score with industry-leading tools and insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold"
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-200 bg-transparent"
              >
                Learn More
              </Button>
            </div>

            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500K+</div>
                <div className="text-sm text-white/80 font-medium">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-white/80 font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-white/80 font-medium">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">A+</div>
                <div className="text-sm text-white/80 font-medium">BBB Rating</div>
              </div>
            </div>
          </div>
        </main> */}
      </div>
    </>
  );
}
