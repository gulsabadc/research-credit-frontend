export default function Process() {
  return (
    <section className="w-full h-[1007px] py-[90px] px-24 flex flex-col items-center justify-center gap-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">How It Works</h2>
          <p className="text-xl text-white max-w-3xl mx-auto text-pretty">
            Our streamlined process transforms months of complex R&D tax credit preparation into a simple, automated
            workflow that delivers audit-ready documentation in days.
          </p>
        </div>

        <img
          src="/Process.png"
          alt="4-step process flow: Easy Data Collection, Eligibility & Expense Categorization, Accurate Credit Calculation, and Generate IRS Forms In Minutes"
          className="w-full max-w-4xl mx-auto"
        />
      </div>
    </section>
  )
}
