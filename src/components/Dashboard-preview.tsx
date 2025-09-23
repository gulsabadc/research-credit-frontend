import React from 'react';

export default function DashboardPreview() {
  return (
    <div className="relative flex justify-center items-center py-20">
      
      {/* Rectangular glow at the very top - INCREASED OPACITY */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1039px] h-[300px] bg-indigo-500 rounded-full blur-3xl opacity-100 z-[-2]"></div>
      {/* You can also try opacity-100 for maximum brightness, or a different blur level like blur-xl or blur-2xl for a softer/sharper look. */}

      {/* Elliptical glow from Figma, positioned as a light source behind the image */}
      <div
        className="absolute w-[1039px] h-[359px] rounded-full blur-3xl opacity-70 z-[-1]"
        style={{
          background: 'linear-gradient(90deg, #8D83FF 0%, #8623FF 100%)',
          top: '200px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      ></div>

      {/* Dashboard image */}
      <div className="relative z-0">
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