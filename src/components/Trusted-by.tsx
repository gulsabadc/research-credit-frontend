import Image from "next/image";
export default function TrustedBy() {
  return (
    <section
      className="w-full py-[46px] px-24 overflow-hidden relative"
      style={{ backgroundColor: "#090051", height: "141px" }}
    >
      <div className="flex items-center justify-center gap-[70px] max-w-7xl mx-auto">
        <div
          className="text-white text-lg font-medium whitespace-nowrap z-10"
          style={{
            fontFamily: "Space Grotesk",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "24px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Trusted by
        </div>

        {/* Animated Logos Container */}
        <div className="flex-1 overflow-hidden relative">
          <div className="flex items-center gap-[70px] w-max animate-slide-infinite">
            {/* First set of logos */}
            <div className="flex items-center gap-[70px]">
              {/* Shield Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/Fourth.svg"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Gear Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/Fifth.svg"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Wave Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/First.svg"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Arrow Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/Third.png"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Hexagon Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/Fourth.svg"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Additional Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/First.svg"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>
            </div>

            {/* Duplicate set for seamless animation */}
            <div className="flex items-center gap-[70px]">
              {/* Shield Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/Third.png"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">Vector Logo</span>
              </div>

              {/* Gear Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/Fourth.svg"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">SVG</span>
              </div>

              {/* Wave Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/Third.svg"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Arrow Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/Third.svg"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Hexagon Logo */}
              <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/First.svg"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>

              {/* Additional Logo */}
              <div className="w-8 h-8 bg-transparent rounded flex items-center text-black justify-center">
                  <Image
                    src="/Third.svg"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 70px));
          }
        }
        .animate-slide-infinite {
          animation: slide 50s linear infinite;
        }
      `}</style>
    </section>
  );
}