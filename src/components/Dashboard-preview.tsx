export default function DashboardPreview() {
  return (
    <div className="relative flex justify-center items-center py-20">
      
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-36 bg-purple-400 rounded-bl-lg blur-3xl"></div> */}

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-36">
  <div className="w-full h-full bg-indigo-500 rounded-bl-lg blur-3xl opacity-100"></div>
  <div className="w-full h-full bg-purple-200 rounded-bl-lg blur-2xl opacity-50 -mt-32"></div>
</div>
      {/* Dashboard image with specified dimensions */}
      <div className="relative">
        <img
          src="/dashboard.png"
          alt="ResearchHero Dashboard showing RenewAI project with $1,551,251 Federal R&D Credit"
          className="rounded-2xl shadow-2xl border-[18px] border-[#FFFFFF4D] "
          style={{ width: "1040px", height: "665px" }}
        />
      </div>
    </div>
  )
}
