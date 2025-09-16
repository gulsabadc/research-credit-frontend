export default function Footer() {
  return (
    <footer
      className="relative w-full h-[458px] overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #01001a 0%, #1D00FF 100%)",
        paddingTop: "94px",
        paddingRight: "96px",
        paddingBottom: "94px",
        paddingLeft: "96px",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url(/footerbgc.png)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          {/* Left Column - Logo and Navigation */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <h2 className="text-6xl font-medium text-white">CreditHero</h2>
              <img src="/Vector.png" alt="Arrow" className="w-2 h-2 opacity-80 text-[#ECEEEC]" />
            </div>

            <nav className="space-y-4 text-gray-300">
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
                <span className="text-gray-300">/</span>
                <a href="#" className="hover:text-white transition-colors">
                  Resources
                </a>
                <span className="text-gray-300">/</span>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
                <span className="text-gray-300">/</span>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
                <span className="text-gray-300">/</span>
                <a href="#" className="hover:text-white transition-colors">
                  Contacts
                </a>
              </div>
            </nav>
          </div>

          {/* Center Column - Contact Info */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Contact Us</p>
              <a
                href="tel:+18919891191"
                className="text-white text-3xl font-medium hover:text-cyan-400 transition-colors"
              >
                +1 891 989-11-91
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-2">Location</p>
              <address className="text-white not-italic leading-relaxed">
                2972 Westheimer Rd. Santa Ana,
                <br />
                Illinois 85486
              </address>
            </div>
          </div>

          {/* Right Column - Business Hours and Email */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Mo—Fr</p>
              <p className="text-white text-xl font-semibold">9am—6pm</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-2">Email</p>
              <a href="mailto:hello@logoipsum.com" className="text-white hover:text-cyan-400 transition-colors">
                hello@logoipsum.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-blue-700/30">
          <p className="text-gray-400 text-sm">© 2025 — Copyright</p>
        </div>
      </div>
    </footer>
  )
}
