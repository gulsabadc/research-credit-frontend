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
        "bg-transparent relative overflow-hidden",
        className
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/LineGrids.png')] bg-cover bg-center" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.1)_50%,transparent_75%)]" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Title */}
        <h2
          className="text-center mb-16 text-balance 
             bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent capitalize"
          style={{
            fontFamily: "var(--font-gilroy-bold)",
            fontWeight: 400,
            fontSize: "60px",
            lineHeight: "69px",
            letterSpacing: "-0.02em",
            textTransform: "capitalize",
          }}
        >
          How AgentiCredit Works
        </h2>

        {/* Process Steps */}
        <div className="relative min-h-[600px] px-[54px] py-[47px]">
          {steps.map((step, index) => {
            const cardX = index * 120;
            const cardY = index * 158;

            return (
              <div key={index} className="absolute">
                {/* Connector (except last) */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute z-0"
                    style={{
                      left: `${cardX + 520}px`,
                      top: `${cardY + 60}px`,
                    }}
                  >
                    <svg
                      width="140"
                      height="120"
                      viewBox="0 0 140 120"
                      className="text-[#96ED00] mt-[8px]"
                      
                    >
                      {/* Curve */}
                      <path
                        d="M10 20 Q73 20 75 80"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                      />

                      

                      {/* Single circle at start */}
                      <circle cx="10" cy="20" r="6" fill="currentColor" />

                      {/* Single circle at end */}
                      <circle cx="74" cy="84" r="6" fill="currentColor" />
                    </svg>
                  </div>
                )}

                {/* Step Card */}
                <div
                  className={cn(
                    "relative z-10 w-132 h-[171px] rounded-[50px] p-8 gap-[50px] transition-all duration-300 hover:scale-105 shadow-[0px_11px_250px_0px_#000000]",
                    step.isHighlighted
                      ? "bg-[#96ED00] text-gray-900"
                      : "bg-[#FFFFFF24] text-white"
                  )}
                  style={{
                    left: `${cardX}px`,
                    top: `${cardY}px`,
                  }}
                >
                  <div className="relative">
                    {/* Large Number */}
                    <div
                      className={cn(
                        "absolute -left-2 -top-2 text-[110px] leading-none select-none opacity-50 tracking-[-0.02em]",
                        step.isHighlighted
                          ? "bg-[linear-gradient(270deg,#000000_14.05%,rgba(0,0,0,0.5)_73.97%)] bg-clip-text text-transparent"
                          : "bg-[linear-gradient(270deg,#ffffff_14.05%,rgba(255,255,255,0)_73.97%)] bg-clip-text text-transparent"
                      )}
                      style={{ fontFamily: "var(--font-gilroy-bold)" }}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <div
                      className="relative z-10 ml-42"
                      style={{ fontFamily: "var(--font-gilroy-bold)" }}
                    >
                      <h3
                        className={cn(
                          "text-4xl font-normal leading-9 mb-2",
                          step.isHighlighted ? "text-[#2D2D2D]" : "text-white"
                        )}
                      >
                        {step.title}
                      </h3>
                      <h3
                        className={cn(
                          "text-4xl font-normal leading-9 mb-2",
                          step.isHighlighted ? "text-[#2D2D2D]" : "text-white"
                        )}
                      >
                        {step.description}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Process;
