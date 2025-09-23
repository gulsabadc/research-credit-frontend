import React from 'react';

export default function DashboardPreview() {
  return (
    <div className="relative flex justify-center items-center py-20">
      {/* Blurred ellipse with linear gradient */}
      <div
        className="absolute w-[1039px] h-[359px] rounded-full blur-3xl opacity-70"
        style={{
          background: 'linear-gradient(90deg, #8D83FF 0%, #8623FF 100%)',
          top: '200px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: -1, // This places the ellipse behind the dashboard image
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