import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="w-full h-[526px] relative overflow-hidden">
      {/* Background with dark blue gradient and geometric elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-700 to-blue-900">
        {/* Geometric background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-800/30 to-transparent transform -skew-y-12"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-slate-800/30 to-transparent transform skew-y-12"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-24 py-[100px_96px_90px_96px] gap-[70px]">
        <div className="text-center space-y-6 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-normal text-white leading-tight">
            Ready To Save On <br /> Your R&D Tax Credits?
          </h2>
          <p className="text-xl text-gray-300 font-semibold">
            Take the first step towards maximizing your credits today!
          </p>
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 text-gray-900 font-semibold px-8 py-4 h-19 w-94 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0"
        >
          Schedule a demo
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
