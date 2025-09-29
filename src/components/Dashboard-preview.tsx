import React from "react";

export default function DashboardPreview() {
  return (
    <div className="relative flex justify-center items-center py-20">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1039px] h-[300px] bg-indigo-500 rounded-full blur-3xl opacity-100 z-[-2]" />

      {/* Elliptical glow */}
      <div
        className="absolute w-[1039px] h-[359px] rounded-full blur-3xl opacity-70 z-[-1]"
        style={{
          background: "linear-gradient(90deg, #8D83FF 0%, #8623FF 100%)",
          top: "200px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      {/* Dashboard with animated gradient border */}
      <div className="relative z-0 rounded-2xl p-[18px]">
        {/* Border layer */}
        <div className="absolute inset-0 rounded-2xl p-[18px] animate-shine">
          <div className="w-full h-full rounded-xl bg-[#ffffff]"></div>
        </div>

        {/* Image inside (untouched) */}
        <img
          src="/dashboard.png"
          alt="ResearchHero Dashboard showing RenewAI project with $1,551,251 Federal R&D Credit"
          className="relative rounded-xl shadow-2xl"
          style={{ width: "1040px", height: "665px" }}
        />
      </div>
    </div>
  );
}
