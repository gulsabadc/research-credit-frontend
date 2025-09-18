export default function Features() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            fontFamily: "var(--font-gilroy-bold)",
            fontWeight: 400,
            fontSize: "60px",
            lineHeight: "62px",
            letterSpacing: "-0.02em",
            textTransform: "capitalize",
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.55) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Proof, Not Promises
        </h2>
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "0%",
            textAlign: "center",
            background: "#FFFFFFCC",
            color: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            padding: "8px 0",
          }}
        >
          KPI-level gains from data import to Form 6785, verifiable and
          audit-ready.
        </p>
      </div>

      {/* Cards Layout */}
      <div className="flex flex-col gap-10 max-w-[1224px] mx-auto">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Days, Not Months */}
          <div className="w-full lg:w-[646px] relative overflow-hidden rounded-[10px] p-10 h-[412px] flex flex-col justify-end group border-[1.5px] border-white/10 bg-[#5B66FF33]">
            <div
              className="absolute opacity-100 mix-blend-screen"
              style={{
                width: "958.01px",
                height: "494.88px",
                top: "-328.49px",
                left: "-57.43px",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #FFFFFF 27%, #E8E8E8 31%, #A2A2A2 43%, #686868 55%, #3B3B3B 66%, #1B1B1B 75%, #070707 83%, #000000 88%)",
                backgroundBlendMode: "screen",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-blue-400/20 to-blue-900/30 backdrop-blur-xl rounded-[10px]"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 via-transparent to-blue-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/Rectangle1.png"
                alt="Days Not Months Icon"
                className="w-45.5 h-47 object-contain drop-shadow-lg"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-20 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Days, Not Months
              </h3>
              <p className="text-gray-200">
                Guided workflow to audit-ready package
              </p>
            </div>
          </div>

          {/* 100% Traceability */}
          <div className="w-full lg:w-[538px] relative overflow-hidden rounded-[10px] p-10 h-[412px] flex flex-col justify-end group border-[1.5px] border-white/10 bg-[#5B66FF33]">
            <div
              className="absolute opacity-100 mix-blend-screen"
              style={{
                width: "958.01px",
                height: "494.88px",
                top: "-175.58px",
                left: "271.51px",
                transform: "rotate(90deg)",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #FFFFFF 27%, #E8E8E8 31%, #A2A2A2 43%, #686868 55%, #3B3B3B 66%, #1B1B1B 75%, #070707 83%, #000000 88%)",
                backgroundBlendMode: "screen",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#5B66FF33] via-[#00000020] to-[#f3f3f630] backdrop-blur-xl rounded-[10px]"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#f2f2f710] via-transparent to-[#d9dae310] opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#e7e8f1] to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-[#f1f1f2] to-transparent animate-pulse"></div>
            <div className="absolute top-4 left-4 w-32 h-32 bg-[#5B66FF20] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 bg-[#eeeef720] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/Rectangle2.png"
                alt="100% Traceability Icon"
                className="w-45.5 h-47 object-contain drop-shadow-lg"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-20 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                100% Traceability
              </h3>
              <p className="text-gray-200">
                Evidence Vault + immutable audit logs
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* 65% Contract Cap Enforced */}
          <div className="w-full lg:w-[560px] relative overflow-hidden rounded-[10px] p-10 h-[412px] flex flex-col justify-end group border-[1.5px] border-white/10 bg-[#5B66FF33]">
            <div
              className="absolute opacity-100 mix-blend-screen"
              style={{
                width: "494.88px",
                height: "494.88px",
                top: "-157.51px",
                left: "-313.49px",
                transform: "rotate(90deg)",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #FFFFFF 27%, #E8E8E8 31%, #A2A2A2 43%, #686868 55%, #3B3B3B 66%, #1B1B1B 75%, #070707 83%, #000000 88%)",
                backgroundBlendMode: "screen",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#5B66FF33] via-[#5B66FF20] to-[#5B66FF30] backdrop-blur-xl rounded-[10px]"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#5B66FF10] via-transparent to-[#5B66FF10] opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#5B66FF] to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-[#5B66FF] to-transparent animate-pulse"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-[#5B66FF20] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-[#5B66FF20] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/Rectangle3.png"
                alt="65% Contract Cap Enforced Icon"
                className="w-45.5 h-47 object-contain drop-shadow-lg"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-20 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                65% Contract Cap Enforced
              </h3>
              <p className="text-gray-200">
                Rights-retained checks, auto-applied
              </p>
            </div>
          </div>

          {/* ASC ➔ Regular, Side-By-Side */}
          <div className="w-full lg:w-[624px] relative overflow-hidden rounded-[10px] p-10 h-[412px] flex flex-col justify-end group border-[1.5px] border-white/10">
            <div
              className="absolute opacity-100 mix-blend-screen"
              style={{
                width: "619.23px",
                height: "251.57px",
                top: "-157.95px",
                left: "-62.68px",
                transform: "rotate(0deg)",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #FFFFFF 27%, #E8E8E8 31%, #A2A2A2 43%, #686868 55%, #3B3B3B 66%, #1B1B1B 75%, #070707 83%, #000000 88%)",
                backgroundBlendMode: "screen",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#5B66FF33] via-[#5B66FF20] to-[#5B66FF30] backdrop-blur-xl rounded-[10px]"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#5B66FF10] via-transparent to-[#5B66FF10] opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#5B66FF] to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-[#5B66FF] to-transparent animate-pulse"></div>
            <div className="absolute top-4 left-4 w-32 h-32 bg-[#5B66FF20] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 bg-[#5B66FF20] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/Rectangle4.png"
                alt="ASC Regular Side-By-Side Icon"
                className="w-45.5 h-47 object-contain drop-shadow-lg"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-20 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                ASC ➔ Regular, Side-By-Side
              </h3>
              <p className="text-gray-200">Optimized credit scenarios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
