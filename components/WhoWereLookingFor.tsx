"use client";

import AnimateOnScroll from "./AnimateOnScroll";

// SVG icons for each card
const UserIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke="#C9A84C" strokeWidth="1.5" />
    <path d="M4 20C4 17 7.58 15 12 15C16.42 15 20 17 20 20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
    <rect x="14" y="3" width="7" height="7" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
    <rect x="3" y="14" width="7" height="7" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 17.5H21M17.5 14V21" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" stroke="#C9A84C" strokeWidth="1.5" />
    <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 12V16M2 12H22" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const personas = [
  {
    icon: <UserIcon />,
    badge: "01",
    title: "Prospective Members",
    body: "Current UC Berkeley undergraduate and graduate students, and alumni. Be among the first to hold a BSCU account.",
  },
  {
    icon: <BuildingIcon />,
    badge: "02",
    title: "Charter Subscribers",
    body: "BSCU needs at least 7 founding subscribers with backgrounds in accounting, finance, marketing, legal, or operations to formally charter the credit union. This is a rare opportunity to be part of founding a federally regulated financial institution.",
  },
  {
    icon: <StarIcon />,
    badge: "03",
    title: "Alumni Advisors",
    body: "Haas and Berkeley alumni with experience in financial services, fintech, or operations. Help shape strategy and ensure continuity through student leadership transitions.",
  },
  {
    icon: <BriefcaseIcon />,
    badge: "04",
    title: "Board Members",
    body: "Credit union executives and banking professionals interested in serving on BSCU's board of directors. We are building our initial board with experienced professionals who believe in the student credit union model.",
  },
];

export default function WhoWereLookingFor() {
  const scrollToWaitlist = () => {
    const el = document.querySelector("#waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="who" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-4">
              Who We&apos;re Looking For
            </p>
            <h2
              className="text-[clamp(26px,3.5vw,40px)] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F1F5F9] mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              We&apos;re building something new.
              <br className="hidden sm:block" /> Join us at the ground floor.
            </h2>
            <p className="text-[16px] text-[#94A3B8] max-w-xl mx-auto">
              BSCU is seeking four types of people to help launch.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {personas.map((p, i) => (
              <div
                key={i}
                className="fade-up bg-[#111827] border border-[#1E2D45] rounded-xl p-7 flex flex-col gap-4 hover:border-[#C9A84C33] hover:shadow-[0_0_0_1px_#C9A84C22,0_8px_32px_rgba(201,168,76,0.06)] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#C9A84C0F] border border-[#C9A84C22] flex items-center justify-center group-hover:bg-[#C9A84C1A] transition-colors duration-300">
                    {p.icon}
                  </div>
                  <span
                    className="text-[11px] font-semibold tracking-[0.1em] text-[#1E2D45] group-hover:text-[#C9A84C33] transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {p.badge}
                  </span>
                </div>
                <h3
                  className="text-[18px] font-semibold text-[#F1F5F9]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-[15px] text-[#94A3B8] leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* CTA link */}
        <AnimateOnScroll className="mt-10 text-center">
          <button
            onClick={scrollToWaitlist}
            className="text-[#C9A84C] font-medium text-[15px] hover:text-[#E2B96F] transition-colors duration-200 flex items-center gap-2 mx-auto group"
          >
            Express your interest via the waitlist below
            <span
              className="inline-block transition-transform duration-200 group-hover:translate-y-1"
              aria-hidden="true"
            >
              ↓
            </span>
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
