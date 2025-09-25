export default function Features() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-16 md:px-22.5 md:py-22.5">
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
            {/* Background SVG */}
            <div
              className="absolute inset-0 opacity-100"
              style={{
                backgroundImage: "url('/1.svg')", // <-- your SVG file here
                backgroundSize: "cover", // or "contain"
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Green Icon */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/Green3D1.png"
                alt="Days Not Months Icon"
                className="w-45.5 h-47 object-contain drop-shadow-lg"
              />
            </div>

            {/* Text */}
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
            {/* Background SVG */}
            <div
              className="absolute inset-0 opacity-100"
              style={{
                backgroundImage: "url('/2.svg')", // <-- your SVG file here
                backgroundSize: "cover", // or "contain"
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Green Icon */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/Green3D2.png"
                alt="100% Traceability Icon"
                className="w-45.5 h-47 object-contain drop-shadow-lg"
              />
            </div>

            {/* Text */}
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
            {/* Background SVG */}
            <div
              className="absolute inset-0 opacity-100"
              style={{
                backgroundImage: "url('/3.svg')", // <-- your SVG file here
                backgroundSize: "cover", // or "contain"
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Green Icon */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/Green3D3.png"
                alt="65% Contract Cap Enforced Icon"
                className="w-45.5 h-47 object-contain drop-shadow-lg"
              />
            </div>

            {/* Text */}
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
  {/* Background SVG */}
  <div
    className="absolute inset-0 opacity-100"
    style={{
      backgroundImage: "url('/4.svg')", // <-- your SVG file here
      backgroundSize: "cover", // or "contain"
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  ></div>

  {/* Green Icon */}
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
    <img
      src="/Green3D4.png"
      alt="ASC Regular Side-By-Side Icon"
      className="w-45.5 h-47 object-contain drop-shadow-lg"
    />
  </div>

  {/* Text */}
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
