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
          }}
        >
          <span style={{ color: "#96ED00" }}>Proof</span>
          <span
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.55) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            , Not Promises
          </span>
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
      <div className="flex flex-col gap-6.5 max-w-[1224px] mx-auto">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row gap-6.5 items-stretch">
          {/* Days, Not Months */}
          <div className="w-full lg:w-[646px] relative overflow-hidden rounded-[10px] p-10 h-[412px] flex flex-col justify-end group border-[1.5px] border-white/10 bg-[#5B66FF]/20">
            <div
              className="absolute opacity-100 mix-blend-screen"
              style={{
                width: "958.01px",
                height: "430.88px",
                top: "-294px",
                left: "-99px",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #FFFFFF 27%, #E8E8E8 31%, #bdacff 43%, #9b93f2 55%, #4942ff 66%, #4942ff 20%, #070707 83%, #000000 88%, transparent 100%)",
              }}
            ></div>

            <div
              className="absolute opacity-0"
              style={{
                width: "958.01px",
                height: "494.88px",
                top: "-294px",
                left: "-99px",
              }}
            >
              <img
                src="/Card1Vector.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/Green3D1.png"
                alt="Days Not Months Icon"
                className="w-45.5 h-47 object-contain drop-shadow-lg"
              />
            </div>

            <div className="relative z-10 flex flex-col justify-center h-15.5 text-center">
              <h3 className="text-4xl font-medium font-grotesk text-[#EFEEF1] mb-2">
                Days, Not Months
              </h3>
              <p className="text-white/80 font-normal text-2xl font-grotesk h-8">
                Guided workflow to audit-ready package
              </p>
            </div>
          </div>

          {/* 100% Traceability */}
          <div className="w-full lg:w-[538px] relative overflow-hidden rounded-[10px] p-10 h-[412px] flex flex-col justify-end group border-[1.5px] border-white/10 bg-[#5B66FF]/20">
            <div
              className="absolute opacity-100 mix-blend-screen"
              style={{
                width: "958.01px",
                height: "494.88px",
                top: "50px" /* Moved up from 175.58px */,
                left: "300px",
                transform: "rotate(0deg)",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #FFFFFF 27%, #E8E8E8 20%, #A2A2A2 30%, #686868 55%, #4942ff 66%, #4942ff 20%, #070707 83%, #000000 88%, transparent 100%)",
              }}
            ></div>

            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/Green3D2.png"
                alt="100% Traceability Icon"
                className="w-45.5 h-47 object-contain drop-shadow-lg"
              />
            </div>

            <div className="relative z-10 flex flex-col justify-center h-20 text-center">
              <h3 className="text-4xl font-medium font-grotesk text-[#EFEEF1] mb-2">
                100% Traceability
              </h3>
              <p className="text-white/80 font-normal text-2xl font-grotesk h-8">
                Evidence Vault + immutable audit logs
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row gap-6.5 items-stretch">
          {/* 65% Contract Cap Enforced */}
          <div className="w-full lg:w-[560px] relative overflow-hidden rounded-[10px] p-10 h-[412px] flex flex-col justify-end group border-[1.5px] border-white/10 bg-[#5B66FF]/20">
            <div
              className="absolute opacity-100 mix-blend-screen"
              style={{
                width: "494.88px",
                height: "494.88px",
                top: "-157.51px",
                left: "-313.49px",
                transform: "rotate(90deg)",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #FFFFFF 27%, #E8E8E8 31%, #bdacff 43%, #9b93f2 55%, #4942ff 66%, #4942ff 20%, #070707 83%, #000000 88%, transparent 100%)",
                backgroundBlendMode: "screen",
              }}
            ></div>

            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/Green3D3.png"
                alt="65% Contract Cap Enforced Icon"
                className="w-45.5 h-47 object-contain drop-shadow-lg"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-20 text-center">
              <h3 className="text-4xl font-medium font-grotesk text-[#EFEEF1] mb-2">
                65% Contract Cap Enforced
              </h3>
              <p className="text-white/80 font-normal text-2xl font-grotesk h-8">
                Rights-retained checks, auto-applied
              </p>
            </div>
          </div>

          {/* ASC ➔ Regular, Side-By-Side */}
          <div className="w-full lg:w-[624px] relative overflow-hidden rounded-[10px] p-10 h-[412px] flex flex-col justify-end group border-[1.5px] border-white/10 bg-[#5B66FF]/20">
            <div
              className="absolute opacity-100 mix-blend-screen"
              style={{
                width: "619.23px",
                height: "251.57px",
                top: "-157.95px",
                left: "-62.68px",
                transform: "rotate(0deg)",
                background:
                  "radial-gradient(50% 50% at 50% 50%, #FFFFFF 27%, #E8E8E8 31%, #bdacff 43%, #9b93f2 55%, #4942ff 66%, #4942ff 20%, #070707 83%, #000000 88%, transparent 100%)",
                backgroundBlendMode: "screen",
              }}
            ></div>

            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/Green3D4.png"
                alt="ASC Regular Side-By-Side Icon"
                className="w-45.5 h-47 object-contain drop-shadow-lg"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-20 text-center">
              <h3 className="text-4xl font-medium font-grotesk text-[#EFEEF1] mb-2">
                ASC ➔ Regular, Side-By-Side
              </h3>
              <p className="text-white/80 font-normal text-2xl font-grotesk h-8">
                Optimized credit scenarios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
