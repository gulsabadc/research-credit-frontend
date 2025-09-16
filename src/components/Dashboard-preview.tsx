export default function DashboardPreview() {
  return (
    <div className="relative flex justify-center items-center py-20">
      {/* Glowing effect at the top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>

      {/* Dashboard image with specified dimensions */}
      <div className="relative">
        <img
          src="/dashboard.png"
          alt="ResearchHero Dashboard showing RenewAI project with $1,551,251 Federal R&D Credit"
          className="rounded-2xl shadow-2xl"
          style={{ width: "1040px", height: "665px" }}
        />
      </div>
    </div>
  )
}
