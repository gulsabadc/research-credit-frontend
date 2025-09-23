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
                <div className="w-8 h-8 bg-white rounded flex items-center text-black justify-center">
                  <Image
                    src="/Third.png"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Gear Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#060036]"
                    fill="currentColor"
                  >
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Wave Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#060036]"
                    fill="currentColor"
                  >
                    <path d="M2,12C2,12 5,7 12,7C19,7 22,12 22,12C22,12 19,17 12,17C5,17 2,12 2,12M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11Z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Arrow Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#060036]"
                    fill="currentColor"
                  >
                    <path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M22,6L12,13L2,6V5L12,12L22,5V6Z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Hexagon Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#060036]"
                    fill="currentColor"
                  >
                    <path d="M17.5,3.5L22.5,12L17.5,20.5H6.5L1.5,12L6.5,3.5H17.5M16.5,5.5H7.5L3.27,12L7.5,18.5H16.5L20.73,12L16.5,5.5Z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Additional Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#060036]"
                    fill="currentColor"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>
            </div>

            {/* Duplicate set for seamless animation */}
            <div className="flex items-center gap-[70px]">
              {/* Shield Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center text-black justify-center">
                  <Image
                    src="/Third.png"
                    alt="First Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Gear Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#060036]"
                    fill="currentColor"
                  >
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Wave Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#060036]"
                    fill="currentColor"
                  >
                    <path d="M2,12C2,12 5,7 12,7C19,7 22,12 22,12C22,12 19,17 12,17C5,17 2,12 2,12M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11Z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Arrow Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#060036]"
                    fill="currentColor"
                  >
                    <path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M22,6L12,13L2,6V5L12,12L22,5V6Z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Hexagon Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#060036]"
                    fill="currentColor"
                  >
                    <path d="M17.5,3.5L22.5,12L17.5,20.5H6.5L1.5,12L6.5,3.5H17.5M16.5,5.5H7.5L3.27,12L7.5,18.5H16.5L20.73,12L16.5,5.5Z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Logoipsum</span>
              </div>

              {/* Additional Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#060036]"
                    fill="currentColor"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Logoipsum</span>
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