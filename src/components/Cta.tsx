import { Button } from "@/components/global-components/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full h-[526px] relative overflow-hidden">
      {/* Background with dark blue gradient and geometric elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-700 to-blue-900 bg-[url('/RnD.png')] bg-cover bg-center">
        {/* Geometric background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-800/30 to-transparent transform -skew-y-12"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent via-slate-800/30 to-transparent transform skew-y-12"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-24 py-[100px_96px_90px_96px] gap-[70px]">
        <div className="text-center space-y-6 max-w-4xl">
          <h2
            className="text-white text-center capitalize"
            style={{
              fontFamily: "var(--font-gilroy-bold)",
              fontWeight: 400,
              fontSize: "66px",
              lineHeight: "68px",
              letterSpacing: "-3%",
            }}
          >
            Ready To Save On <br /> Your R&D Tax Credits?
          </h2>
          <p
            className="text-gray-300 text-center"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 700,
              fontSize: "26px",
              lineHeight: "30px",
              letterSpacing: "0%",
            }}
          >
            Take the first step towards maximizing your credits today!
          </p>
        </div>

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
            height: "76px", // h-19 equivalent (19 * 4 = 76px)
            width: "376px", // w-94 equivalent (94 * 4 = 376px)
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
    </section>
  );
}
