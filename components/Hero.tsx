"use client";

const stats = [
  {
    number: "7,000+",
    label: "international students at Berkeley without dedicated credit union access",
  },
  {
    number: "40+",
    label: "years of proven student credit union models (Georgetown, UPenn)",
  },
  {
    number: "1",
    label: "digital-first credit union being built for UC Berkeley",
  },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 sm:px-8 pt-24 pb-16">
      {/* Background glow elements */}
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow-secondary" aria-hidden="true" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p
          className="inline-block text-[11px] font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-6 px-3 py-1.5 rounded-full border border-[#C9A84C33] bg-[#C9A84C0D]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Digital-First &middot; Student-Operated &middot; Member-Owned
        </p>

        {/* H1 */}
        <h1
          className="text-[clamp(40px,7vw,72px)] font-bold leading-[1.08] tracking-[-0.02em] text-[#F1F5F9] mb-6"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Banking Built for Berkeley.
          <br />
          <span className="text-gold-gradient">By Berkeley.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[17px] sm:text-[18px] leading-relaxed text-[#94A3B8] max-w-2xl mx-auto mb-10">
          The Berkeley Student Credit Union is a digital-first, student-governed
          credit union designed for UC Berkeley students, by UC Berkeley
          students. No branches. No compromises. Built for how you actually
          live, study, and build.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-20">
          <button
            onClick={() => scrollTo("#waitlist")}
            className="bg-[#C9A84C] text-[#0A0F1E] font-semibold px-8 py-3.5 rounded-md text-[15px] hover:bg-[#E2B96F] transition-all duration-200 shadow-[0_0_24px_rgba(201,168,76,0.25)] hover:shadow-[0_0_32px_rgba(201,168,76,0.35)]"
          >
            Join the Waitlist
          </button>
          <button
            onClick={() => scrollTo("#about")}
            className="border border-[#C9A84C] text-[#C9A84C] font-semibold px-8 py-3.5 rounded-md text-[15px] hover:bg-[#C9A84C0D] transition-all duration-200"
          >
            Learn More
          </button>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1E2D45] rounded-xl overflow-hidden border border-[#1E2D45] shadow-[0_0_0_1px_#1E2D45]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#111827] px-6 py-6 flex flex-col items-center sm:items-start gap-1"
            >
              <span
                className="text-[28px] sm:text-[32px] font-bold text-[#C9A84C] leading-none"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {stat.number}
              </span>
              <span className="text-[13px] text-[#64748B] leading-snug text-center sm:text-left">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[11px] tracking-widest text-[#94A3B8] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#94A3B8] to-transparent" />
      </div>
    </section>
  );
}
