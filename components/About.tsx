import AnimateOnScroll from "./AnimateOnScroll";

const highlights = [
  { value: "700+", label: "Haas Fintech Club members" },
  { value: "40+", label: "Years of proven student CU history" },
  { value: "1st", label: "Digital-only UC campus credit union" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-5 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: text */}
            <div>
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-4">
                About
              </p>
              <h2
                className="text-[clamp(28px,4vw,42px)] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F1F5F9] mb-6"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                What is BSCU?
              </h2>
              <div className="space-y-4 text-[16px] leading-relaxed text-[#94A3B8]">
                <p>
                  The Berkeley Student Credit Union (Proposed) is organized by the Haas
                  Fintech Club — a 700+ member MBA organization — and led by
                  students with professional backgrounds in finance, technology,
                  and operations. Unlike traditional campus banks, BSCU is
                  member-owned, student-governed, and digital-only: eliminating
                  branch overhead while serving members anywhere in the world.
                </p>
                <p>
                  We follow a model with over 40 years of proven history at
                  Georgetown and UPenn, but advance it for the digital era. UC
                  Berkeley is the only major UC campus without a dedicated
                  credit union. BSCU exists to change that.
                </p>
              </div>
            </div>

            {/* Right: stat cards */}
            <div className="flex flex-col gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 bg-[#111827] border border-[#1E2D45] rounded-xl px-6 py-5 hover:border-[#C9A84C33] hover:shadow-[0_0_0_1px_#C9A84C22,0_8px_32px_rgba(201,168,76,0.06)] transition-all duration-300"
                >
                  <span
                    className="text-[36px] font-bold text-[#C9A84C] leading-none w-20 shrink-0"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {item.value}
                  </span>
                  <span className="text-[15px] text-[#94A3B8] leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}

              {/* Institutional badge */}
              <div className="mt-2 flex items-center gap-3 px-5 py-3 rounded-xl border border-[#1E2D45] bg-[#111827]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[13px] text-[#64748B]">
                  Organized by the{" "}
                  <span className="text-[#94A3B8] font-medium">
                    Haas Fintech Club
                  </span>{" "}
                  at UC Berkeley
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
