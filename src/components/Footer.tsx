export default function Footer() {
  return (
    <footer
      className="relative w-full h-[458px] overflow-hidden"
      style={{
        background: "#000000",
        paddingTop: "94px",
        paddingRight: "96px",
        paddingBottom: "94px",
        paddingLeft: "96px",
        gap: "70px",
      }}
    >
     

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          {/* Left Column - Logo and Navigation */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <h2 className="text-[56px] font-medium text-[#ECEEEC] font-grotesk">
                AgentiCredit
              </h2>
            </div>

            <nav className="space-y-4 text-[#ADB3AB] font-grotesk font-normal text-xl">
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
          <div className="space-y-6 font-grotesk">
            <div>
              <p className="text-[#888888] text-[12px] mb-2">Contact Us</p>
              <a
                href="tel:+18919891191"
                className="text-[#ECEEEC] text-[28px] font-medium hover:text-[#93e800] transition-colors"
              >
                +1 891 989-11-91
              </a>
            </div>

            <div>
              <p className="text-[#888888] text-[12px] mb-2">Location</p>
              <address className="text-[#ECEEEC] font-medium not-italic leading-relaxed">
                2972 Westheimer Rd. Santa Ana,
                <br />
                Illinois 85486
              </address>
            </div>
          </div>

          {/* Right Column - Business Hours and Email */}
          <div className="space-y-6 font-grotesk">
            <div>
              <p className="text-[#888888] text-[12px] mb-2">Mo—Fr</p>
              <p className="text-[#ECEEEC] text-[28px] font-medium">9am—6pm</p>
            </div>

            <div>
              <p className="text-[12px] font-medium text-[#888888] mb-2">
                Email
              </p>
              <a
                href="mailto:hello@logoipsum.com"
                className="text-[#ECEEEC] hover:text-green-400 font-medium text-[20px] transition-colors"
              >
                hello@logoipsum.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8">
          <p className="text-[#D1D5DB] font-medium text-[20px] font-grotesk">
            © 2025 — Copyright
          </p>
        </div>
      </div>
    </footer>
  );
}
