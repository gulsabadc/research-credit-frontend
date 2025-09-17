import localFont from "next/font/local";

const gilroyBold = localFont({
  src: "../fonts/fonts/fonnts.com-Gilroy-Bold.ttf", // adjust path
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-gilroy-bold",
});
export default function Features() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className={`${gilroyBold.className}`}>
          <h2
            className="mb-4 font-main capitalize"
            style={{
              fontFamily: "var(--font-gilroy-bold)",
              fontWeight: 400,
              fontSize: "60px",
              lineHeight: "62px",
              letterSpacing: "-2%",
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.55) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Proof, Not Promises
          </h2>
        </div>

        <p
          className="text-gray-300 max-w-2xl mx-auto text-center"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "0%",
          }}
        >
          KPI-level gains from data import to Form 6785, verifiable and
          audit-ready.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Days, Not Months */}
        <div className="relative overflow-hidden rounded-2xl p-8 h-[400px] flex flex-col justify-end group">
          <div
            className="absolute opacity-100 mix-blend-screen"
            style={{
              width: "958.01px",
              height: "494.88px",
              top: "-328.49px",
              left: "-57.43px",
              transform: "rotate(0deg)",
              backgroundImage: "url(/vector-1.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-blue-400/20 to-blue-900/30 backdrop-blur-xl border border-white/10 rounded-2xl"></div>

          {/* Stronger Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 via-transparent to-blue-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

          {/* Animated Glow Bars */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>

          {/* Corner Glows */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

          {/* 3D Icon */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/80 to-blue-500/80 rounded-lg transform rotate-12 shadow-lg shadow-cyan-400/30"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/80 to-blue-600/80 rounded-lg transform -rotate-6 -mt-12 ml-2 shadow-lg shadow-blue-500/30"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/80 to-blue-700/80 rounded-lg transform rotate-3 -mt-12 ml-1 shadow-lg shadow-blue-600/30"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                ⚡
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Days, Not Months
            </h3>
            <p className="text-gray-200">
              Guided workflow to audit-ready package
            </p>
          </div>
        </div>

        {/* 100% Traceability */}
        <div className="relative overflow-hidden rounded-2xl p-8 h-[400px] flex flex-col justify-end group">
          <div
            className="absolute opacity-100 mix-blend-screen"
            style={{
              width: "958.01px",
              height: "494.88px",
              top: "-175.58px",
              left: "271.51px",
              transform: "rotate(90deg)",
              backgroundImage: "url(/vector-2.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 via-slate-800/20 to-slate-900/30 backdrop-blur-xl border border-white/10 rounded-2xl"></div>

          {/* Stronger Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 via-transparent to-indigo-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

          {/* Animated Glow Bars */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse"></div>

          {/* Corner Glows */}
          <div className="absolute top-4 left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

          {/* 3D Icon */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/80 to-blue-500/80 rounded-lg transform rotate-12 shadow-lg shadow-blue-400/30"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/80 to-blue-600/80 rounded-lg transform -rotate-6 -mt-12 ml-2 shadow-lg shadow-blue-500/30"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/80 to-blue-700/80 rounded-lg transform rotate-3 -mt-12 ml-1 shadow-lg shadow-blue-600/30"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-400/90 rounded-full flex items-center justify-center text-black text-xs shadow-lg">
                👆
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400/90 rounded flex items-center justify-center text-black text-xs shadow-lg">
                🛡️
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              100% Traceability
            </h3>
            <p className="text-gray-200">
              Evidence Vault + immutable audit logs
            </p>
          </div>
        </div>

        {/* 65% Contract Cap Enforced */}
        <div className="relative overflow-hidden rounded-2xl p-8 h-[400px] flex flex-col justify-end group">
          <div
            className="absolute opacity-100 mix-blend-screen"
            style={{
              width: "494.88px",
              height: "494.88px",
              top: "-157.51px",
              left: "-313.49px",
              transform: "rotate(90deg)",
              backgroundImage: "url(/vector-3.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-indigo-600/20 to-violet-950/30 backdrop-blur-xl border border-white/10 rounded-2xl"></div>

          {/* Stronger Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 via-transparent to-purple-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

          {/* Animated Glow Bars */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse"></div>

          {/* Corner Glows */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

          {/* 3D Icon */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/80 to-blue-500/80 rounded-lg transform rotate-12 shadow-lg shadow-blue-400/30 flex items-center justify-center text-black font-bold">
                65%
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/80 to-blue-600/80 rounded-lg transform -rotate-6 -mt-12 ml-2 shadow-lg shadow-blue-500/30"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/80 to-blue-700/80 rounded-lg transform rotate-3 -mt-12 ml-1 shadow-lg shadow-blue-600/30"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400/90 rounded-full flex items-center justify-center text-black text-xs shadow-lg">
                🛡️
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              65% Contract Cap Enforced
            </h3>
            <p className="text-gray-200">
              Rights-retained checks, auto-applied
            </p>
          </div>
        </div>

        {/* ASC ➔ Regular, Side-By-Side */}
        <div className="relative overflow-hidden rounded-2xl p-8 h-[400px] flex flex-col justify-end group">
          <div
            className="absolute opacity-100 mix-blend-screen"
            style={{
              width: "619.23px",
              height: "251.57px",
              top: "-157.95px",
              left: "-62.68px",
              transform: "rotate(0deg)",
              backgroundImage: "url(/vector-4.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 via-slate-800/20 to-slate-900/30 backdrop-blur-xl border border-white/10 rounded-2xl"></div>

          {/* Stronger Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 via-transparent to-blue-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

          {/* Animated Glow Bars */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>

          {/* Corner Glows */}
          <div className="absolute top-4 left-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

          {/* 3D Icon */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-4">
              <div className="w-12 h-20 bg-gradient-to-b from-cyan-400/80 to-blue-500/80 rounded-lg shadow-lg shadow-cyan-400/30 flex flex-col items-center justify-center text-white text-xs font-bold transform rotate-6">
                <div>ASC</div>
                <div className="text-[8px] mt-1">📊</div>
              </div>
              <div className="w-12 h-20 bg-gradient-to-b from-blue-500/80 to-blue-600/80 rounded-lg shadow-lg shadow-blue-500/30 flex flex-col items-center justify-center text-white text-xs font-bold transform -rotate-6">
                <div>REG</div>
                <div className="text-[8px] mt-1">📈</div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400/80">
              ↔️
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              ASC ➔ Regular, Side-By-Side
            </h3>
            <p className="text-gray-200">Optimized credit scenarios</p>
          </div>
        </div>
      </div>
    </section>
  );
}
