import React from 'react';

export default function DashboardPreview() {
  return (
    <div className="relative flex justify-center items-center py-20">
      
      {/* Blurred ellipse with linear gradient */}
      <div
        className="absolute w-[900px] h-[359px] rounded-full blur-3xl opacity-70"
        style={{
          background: 'linear-gradient(360deg, #8D83FF 0%, #8623FF 100%)',
          top: '-100px', // Adjusted position to be high above the dashboard
          left: '50%', // Centering horizontally
          transform: 'translateX(-50%)',
          zIndex: -1, // Ensures the glow is behind the dashboard for a lighting effect
        }}
      ></div>

      {/* Dashboard image */}
      <div className="relative">
        <img
          src="/dashboard.png"
          alt="ResearchHero Dashboard showing RenewAI project with $1,551,251 Federal R&D Credit"
          className="rounded-2xl shadow-2xl border-[18px] border-[#FFFFFF4D]"
          style={{ width: "1040px", height: "665px" }}
        />
      </div>
    </div>
  );
}