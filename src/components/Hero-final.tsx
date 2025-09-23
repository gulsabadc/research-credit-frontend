import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import DashboardPreview from "./Dashboard-preview";
import TrustedBy from "./Trusted-by";

export default function HeroFinal() {
  return (
    <div className="relative w-full h-full mx-auto overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full mix-blend-overlay opacity-70">
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content will be added sequentially */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <DashboardPreview />
        <TrustedBy />
      </div>
    </div>
  );
}