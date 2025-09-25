import { cn } from "@/lib/utils";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

interface ProcessProps {
  title?: string;
  steps?: ProcessStep[];
  className?: string;
}

const defaultSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Easy Data",
    description: "Collection",
  },
  {
    number: "02",
    title: "Eligibility &",
    description: "Expense Categorization",
  },
  {
    number: "03",
    title: "Accurate",
    description: "Credit Calculation",
  },
  {
    number: "04",
    title: "Generate",
    description: "IRS Forms In Minutes",
    isHighlighted: true,
  },
];

export function Process({ steps = defaultSteps, className }: ProcessProps) {
  return (
    <div
      className={cn(
        "w-full max-w-6xl mx-auto px-24 py-22.5",
        "bg-transparent  relative overflow-hidden",
        className
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.1)_50%,transparent_75%)]" />
      </div>

      <div className="relative z-10">
        {/* Title */}
        <h2
          className="text-center mb-16 text-balance 
             bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent capitalize"
          style={{
            fontFamily: "var(--font-gilroy-bold)",
            fontWeight: 400,
            fontStyle: "normal", // (☞ looks like a typo in your style, replaced with normal)
            fontSize: "60px",
            lineHeight: "62px",
            letterSpacing: "-0.02em", // Tailwind doesn't support % for tracking
            textTransform: "capitalize",
          }}
        >
          How AgentiCredit Works
        </h2>

        {/* Process Steps */}
        <div className="relative min-h-[600px]">
          {steps.map((step, index) => (
            <div key={index} className="absolute">
              {index < steps.length - 1 && (
                <div
                  className="absolute z-0"
                  style={{
                    left: "320px", // Position connector to the right of each card
                    top: "60px",
                  }}
                >
                  <svg
                    width="120"
                    height="100"
                    viewBox="0 0 120 100"
                    className="text-lime-500"
                  >
                    <path
                      d="M10 20 Q60 10 110 60"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M105 55 L110 60 L105 65"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              <div
                className={cn(
                  "relative z-10 w-132 h-[171] rounded-3xl p-8 transition-all duration-300 hover:scale-105",
                  step.isHighlighted
                    ? "bg-[#96ED00] text-gray-900 shadow-2xl shadow-lime-400/30"
                    : "bg-[#FFFFFF24] text-white shadow-2xl shadow-slate-800/30"
                )}
                style={{
                  left: `${index * 120}px`, // Progressive right positioning: 0px, 120px, 240px, 360px
                  top: `${index * 120}px`, // Progressive down positioning: 0px, 120px, 240px, 360px
                }}
              >
                <div className="relative">
                  {/* Large Step Number Background */}
                  <div
                    className={cn(
                      "absolute -left-2 -top-2 text-8xl font-bold leading-none select-none",
                      step.isHighlighted ? "text-gray-900/20" : "text-white/20"
                    )}
                  >
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="relative z-10 ml-16">
                    <h3
                      className={cn(
                        "text-xl font-bold leading-tight mb-2",
                        step.isHighlighted ? "text-gray-900" : "text-white"
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "text-lg leading-tight",
                        step.isHighlighted ? "text-gray-800" : "text-gray-300"
                      )}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Process;
