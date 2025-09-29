import React from "react";

export default function DashboardPreview() {
  return (
    <div className="relative flex justify-center items-center py-20">
      {/* Dashboard container */}
      <div className="relative w-[1040px] h-[665px]">
        {/* Single rectangular glow with continuous rectangular path animation */}
        <div
          className="absolute blur-2xl opacity-80 animate-glow-rectangular-path z-[-1]"
          style={{
            background: 'linear-gradient(90deg, rgba(141,131,255,0.9) 0%, rgba(134,35,255,0.7) 30%, rgba(255,60,172,0.4) 60%, rgba(141,131,255,0.9) 100%)',
            boxShadow: '0 0 80px 30px rgba(141,131,255,0.6)',
            width: 'calc(100% + 120px)',
            height: 'calc(100% + 120px)',
            top: '-60px',
            left: '-60px',
            borderRadius: '30%', // Added border radius
          }}
        ></div>

        {/* Dashboard image */}
        <img
          src="/dashboard.png"
          alt="ResearchHero Dashboard showing RenewAI project with $1,551,251 Federal R&D Credit"
          className="relative rounded-xl shadow-2xl"
          style={{ width: "1040px", height: "665px" }}
        />
      </div>

      {/* Add the CSS animation for rectangular path */}
      <style jsx>{`
        @keyframes glowRectangularPath {
          0% {
            transform: translateX(-60px) translateY(-60px);
            opacity: 0.6;
          }
          25% {
            transform: translateX(60px) translateY(-60px);
            opacity: 0.8;
          }
          50% {
            transform: translateX(60px) translateY(60px);
            opacity: 0.6;
          }
          75% {
            transform: translateX(-60px) translateY(60px);
            opacity: 0.8;
          }
          100% {
            transform: translateX(-60px) translateY(-60px);
            opacity: 0.6;
          }
        }
        
        .animate-glow-rectangular-path {
          animation: glowRectangularPath 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
