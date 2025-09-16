export default function Benefits() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Maximized Savings, Zero Stress
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
            We automate the entire process to capture every eligible expense and minimize audit risks, ensuring you maximize savings without leaving money on the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Real-Time Expense Verification */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-[#090051] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-127.5 flex flex-col items-center justify-center text-center overflow-hidden">
              

              {/* Icon */}
              <div className="relative mb-8">
                <img
                  src="/icon1.png"
                  alt="3D Chart with Checkmark"
                  className="object-contain"
                  style={{
                    width: "220.36px",
                    height: "174.90px",
                    transform: "rotate(13.04deg)",
                    mixBlendMode: "luminosity",
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Real-Time Expense</h3>
              <h3 className="text-2xl font-bold text-white">Verification</h3>
            </div>
          </div>

          {/* Audit-Ready Documentation */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-900/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-[#090051] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-127.5 flex flex-col items-center justify-center text-center overflow-hidden">
              

              {/* Icon */}
              <div className="relative mb-8">
                <img
                  src="/icon2.png"
                  alt="3D Chart with Checkmark"
                  className="object-contain"
                  style={{
                    width: "175px",
                    height: "204px",
                    transform: "rotate(-4.29deg)",
                    mixBlendMode: "luminosity",
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Audit-Ready</h3>
              <h3 className="text-2xl font-bold text-white">Documentation</h3>
            </div>
          </div>

          {/* Risk Detection & Red Flag Alerts */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-900/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-[#090051] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-127.5 flex flex-col items-center justify-center text-center overflow-hidden">
              

              {/* Icon */}
              <div className="relative mb-8">
                <img
                  src="/icon3.png"
                  alt="3D Chart with Checkmark"
                  className="object-contain"
                  style={{
                    width: "153px",
                    height: "181px",
                    transform: "rotate(8.07deg)",
                    mixBlendMode: "luminosity",
                  }}
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Risk Detection &</h3>
              <h3 className="text-2xl font-bold text-white">Red Flag Alerts</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
