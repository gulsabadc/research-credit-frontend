export default function Process() {
  return (
    <section
      className="w-full h-[1007px] py-[30px] px-24 flex flex-col items-center justify-center gap-20 relative overflow-hidden"
      style={{
        backgroundImage: `
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
        backgroundSize: `
      40px 40px, 40px 40px,   /* small grid */
      80px 80px, 80px 80px    /* large grid */
    `,
        backgroundPosition: "0 0, 0 0, 0 0, 0 0",
      }}
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-0">
          <h2
            className="mb-0 text-balance text-center capitalize"
            style={{
              fontFamily: "var(--font-gilroy-bold)",
              fontWeight: 400,
              fontSize: "60px",
              lineHeight: "62px",
              letterSpacing: "-2%",
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.55) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            How AgentiCredit Works
          </h2>
        </div>

        <img
          src="/processgreen.png"
          alt="4-step process flow"
          className="w-full max-w-4xl mx-auto "
        />
      </div>
    </section>
  );
}
