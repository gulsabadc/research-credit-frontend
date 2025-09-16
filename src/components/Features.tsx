export default function Features() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-[90px] py-[90px]">
      <div className="grid grid-cols-2 gap-[60px]">
        {/* Days, Not Months */}
        <div className="relative overflow-hidden rounded-2xl p-8 h-[400px] flex flex-col justify-end">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-blue-400/20 to-blue-900/30 backdrop-blur-md border border-white/10 rounded-2xl"></div>

          {/* Animated Top Glow Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>

          {/* Optional: Animated moving glow line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-[shine_3s_ease-in-out_infinite]"></div>

          {/* Glow effect - Adjusted for glass */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>

          {/* 3D Icon placeholder */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              {/* Stack of blocks with slight transparency */}
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/80 to-blue-500/80 rounded-lg transform rotate-12 shadow-lg"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/80 to-blue-600/80 rounded-lg transform -rotate-6 -mt-12 ml-2 shadow-lg"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/80 to-blue-700/80 rounded-lg transform rotate-3 -mt-12 ml-1 shadow-lg"></div>
              {/* Lightning bolt */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
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
        <div className="relative overflow-hidden rounded-2xl p-8 h-[400px] flex flex-col justify-end">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 via-slate-800/20 to-slate-900/30 backdrop-blur-md border border-white/10 rounded-2xl"></div>

          {/* Animated Top Glow Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>

          {/* Optional: Animated moving glow line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-[shine_3s_ease-in-out_infinite]"></div>

          {/* Glow effect - Adjusted for glass */}
          <div className="absolute top-4 left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>

          {/* 3D Icon placeholder */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              {/* Stack of blocks with slight transparency */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/80 to-blue-500/80 rounded-lg transform rotate-12 shadow-lg"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/80 to-blue-600/80 rounded-lg transform -rotate-6 -mt-12 ml-2 shadow-lg"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/80 to-blue-700/80 rounded-lg transform rotate-3 -mt-12 ml-1 shadow-lg"></div>
              {/* Fingerprint and shield */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-400/90 rounded-full flex items-center justify-center text-white text-xs">
                👆
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400/90 rounded flex items-center justify-center text-white text-xs">
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

        {/* 65% Contract Cap Enhanced */}
        <div className="relative overflow-hidden rounded-2xl p-8 h-[400px] flex flex-col justify-end">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-indigo-600/20 to-violet-950/30 backdrop-blur-md border border-white/10 rounded-2xl"></div>

          {/* Animated Top Glow Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>

          {/* Optional: Animated moving glow line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-[shine_3s_ease-in-out_infinite]"></div>

          {/* Glow effect - Adjusted for glass */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>

          {/* 3D Icon placeholder */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              {/* Stack of blocks with slight transparency */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/80 to-blue-500/80 rounded-lg transform rotate-12 shadow-lg flex items-center justify-center text-white font-bold">
                65%
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/80 to-blue-600/80 rounded-lg transform -rotate-6 -mt-12 ml-2 shadow-lg"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/80 to-blue-700/80 rounded-lg transform rotate-3 -mt-12 ml-1 shadow-lg"></div>
              {/* Shield */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400/90 rounded-full flex items-center justify-center text-white text-xs">
                🛡️
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              65% Contract Cap Enhanced
            </h3>
            <p className="text-gray-200">Rights-retained checks, auto-accept</p>
          </div>
        </div>

        {/* ASC REG */}
        <div className="relative overflow-hidden rounded-2xl p-8 h-[400px] flex flex-col justify-end">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 via-slate-800/20 to-slate-900/30 backdrop-blur-md border border-white/10 rounded-2xl"></div>

          {/* Animated Top Glow Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>

          {/* Optional: Animated moving glow line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-[shine_3s_ease-in-out_infinite]"></div>

          {/* Glow effect - Adjusted for glass */}
          <div className="absolute top-4 left-4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>

          {/* 3D Icon placeholder - Mobile devices */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-4">
              {/* ASC Device */}
              <div className="w-12 h-20 bg-gradient-to-b from-cyan-400/80 to-blue-500/80 rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-xs font-bold transform rotate-6">
                <div>ASC</div>
                <div className="text-[8px] mt-1">📊</div>
              </div>
              {/* REG Device */}
              <div className="w-12 h-20 bg-gradient-to-b from-blue-500/80 to-blue-600/80 rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-xs font-bold transform -rotate-6">
                <div>REG</div>
                <div className="text-[8px] mt-1">📈</div>
              </div>
            </div>
            {/* Connection arrow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400/80">
              ↔️
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">ASC REG</h3>
            <p className="text-gray-200">Regulatory compliance automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}