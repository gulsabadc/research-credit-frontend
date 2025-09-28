export default function Benefits() {
  return (
    <section className="w-full py-25 px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="mb-6 text-balance text-center capitalize"
            style={{
              fontFamily: "var(--font-gilroy-bold)",
              fontWeight: 400,
              fontSize: "60px",
              lineHeight: "69px",
              letterSpacing: "-2%",
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.55) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Maximized Savings, Zero Stress
          </h2>
          <p
            className="max-w-3xl mx-auto text-center"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 400,
              fontSize: "26px",
              lineHeight: "30px",
              letterSpacing: "0%",
              color: "#FFFFFFCC", // Changed to black for better contrast
              padding: "16px 24px",
              borderRadius: "8px",
            }}
          >
            We automate the entire process to capture every eligible expense and
            minimize audit risks, ensuring you maximize savings without leaving
            money on the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-11.5">
          {/* Real-Time Expense Verification */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div
              className="relative bg-[#090051] backdrop-blur-sm border-[10px] border-[#FFFFFF0F] rounded-[10px] h-127.5 flex flex-col items-center justify-center text-center overflow-hidden"
              style={{
                width: "385px",
                height: "510px",
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingBottom: "104px",
                mixBlendMode: "screen",
                backgroundImage:
                  "linear-gradient(rgba(9, 0, 81, 0.85), rgba(9, 0, 81, 0.85)), url('/card-bg-1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Icon */}
              <div
                className="relative mb-8 flex justify-center items-center"
                
              >
                <img
                  src="/icon1.png"
                  alt="3D Chart with Checkmark"
                  className="object-contain"
                  style={{
                    width: "220.36px",
                    height: "175px",
                    transform: "rotate(13.04deg)",
                    mixBlendMode: "luminosity",
                  }}
                />
              </div>

              <h3 className="text-[32px] w-[333px] font-normal text-white mb-2 font-grotesk tracking-[-0.02em] text-center capitalize leading-[38px]">
                Real-Time Expense
              </h3>
              <h3 className="text-[32px] font-normal text-white font-grotesk tracking-[-0.02em] text-center capitalize leading-[38px]">
                Verification
              </h3>
            </div>
          </div>

          {/* Audit-Ready Documentation */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div
              className="relative bg-[#090051] backdrop-blur-sm border-[10px] border-[#FFFFFF0F] rounded-[10px] h-127.5 flex flex-col items-center justify-center text-center overflow-hidden"
              style={{
                width: "385px",
                height: "510px",
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingBottom: "104px",
                mixBlendMode: "screen",
                backgroundImage:
                  "linear-gradient(rgba(9, 0, 81, 0.85), rgba(9, 0, 81, 0.85)), url('/card-bg-2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Icon */}
              <div
                className="relative mb-8 flex justify-center items-center"
              >
                <img
                  src="/icon2.png"
                  alt="3D Document with Checklist"
                  className="object-contain"
                  style={{
                    width: "220.36px",
                    height: "174.9px",
                    transform: "rotate(-4.29deg)",
                    mixBlendMode: "luminosity",
                  }}
                />
              </div>

              <h3 className="text-[32px] w-[333px] font-normal text-white mb-2 font-grotesk tracking-[-0.02em] text-center capitalize leading-[38px]">
                Audit-Ready
              </h3>
              <h3 className="text-[32px] w-[333px] font-normal text-white mb-2 font-grotesk tracking-[-0.02em] text-center capitalize leading-[38px]">
                Documentation
              </h3>
            </div>
          </div>

          {/* Risk Detection & Red Flag Alerts */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div
              className="relative bg-[#090051] backdrop-blur-sm border-[10px] border-[#FFFFFF0F] rounded-[10px] h-127.5 flex flex-col items-center justify-center text-center overflow-hidden"
              style={{
                width: "385px",
                height: "510px",
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingBottom: "104px",
                mixBlendMode: "screen",
                backgroundImage:
                  "linear-gradient(rgba(9, 0, 81, 0.85), rgba(9, 0, 81, 0.85)), url('/card-bg-3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Icon */}
              <div
                className="relative mb-8 flex justify-center items-center"
              >
                <img
                  src="/icon3.png"
                  alt="3D Risk Alert Icon"
                  className="object-contain"
                  style={{
                    width: "220.36px",
                    height: "174.9px",
                    transform: "rotate(8.07deg)",
                    mixBlendMode: "luminosity",
                  }}
                />
              </div>

              <h3 className="text-[32px] w-[333px] font-normal text-white mb-2 font-grotesk tracking-[-0.02em] text-center capitalize leading-[38px]">
                Risk Detection &
              </h3>
              <h3 className="text-[32px] w-[333px] font-normal text-white mb-2 font-grotesk tracking-[-0.02em] text-center capitalize leading-[38px]">
                Red Flag Alerts
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
