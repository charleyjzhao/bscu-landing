import AnimateOnScroll from "./AnimateOnScroll";

// SVG Icons
const GlobeIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" stroke="#C9A84C" strokeWidth="1.5" />
    <path
      d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22"
      stroke="#C9A84C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22"
      stroke="#C9A84C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M2 12H22" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 7H21" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 17H21" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const LightningIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M13 2L4 14H12L11 22L20 10H12L13 2Z"
      stroke="#C9A84C"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 2L3 7V12C3 16.97 7.02 21.68 12 23C16.98 21.68 21 16.97 21 12V7L12 2Z"
      stroke="#C9A84C"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="#C9A84C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const cards = [
  {
    icon: <GlobeIcon />,
    title: "Built for International Students",
    body: "Berkeley enrolls 7,000+ international students who arrive without SSNs, domestic credit histories, or the ability to open accounts before arrival. BSCU enables digital onboarding via passport and I-20 documentation — before you land.",
  },
  {
    icon: <LightningIcon />,
    title: "No Branches. No Friction.",
    body: "A fully digital credit union means lower overhead, better rates, and banking that works from any country. Mobile-first by design.",
  },
  {
    icon: <ShieldIcon />,
    title: "Owned by Members, Run by Students",
    body: "Every member is an owner. Every student staffer is building real financial services experience. Governance and strategy are led by your peers, guided by an advisory board of industry professionals.",
  },
];

export default function WhyBSCU() {
  return (
    <section
      id="why-bscu"
      className="py-20 sm:py-28 px-5 sm:px-8"
      style={{
        background: "linear-gradient(160deg, #0D2137 0%, #0A1628 50%, #0D2137 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-4">
              Why BSCU
            </p>
            <h2
              className="text-[clamp(28px,4vw,42px)] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F1F5F9]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Financial products designed for your reality
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="fade-up bg-[#111827] border border-[#1E2D45] rounded-xl p-7 flex flex-col gap-5 hover:border-[#C9A84C33] hover:shadow-[0_0_0_1px_#C9A84C22,0_8px_32px_rgba(201,168,76,0.06)] transition-all duration-300 group"
              >
                {/* Icon container */}
                <div className="w-12 h-12 rounded-lg bg-[#C9A84C0F] border border-[#C9A84C22] flex items-center justify-center group-hover:bg-[#C9A84C1A] transition-colors duration-300">
                  {card.icon}
                </div>
                <h3
                  className="text-[18px] font-semibold text-[#F1F5F9] leading-snug"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-[15px] text-[#94A3B8] leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
