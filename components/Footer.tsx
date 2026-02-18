export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] border-t border-[#1E2D45] px-5 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6">
          {/* Wordmark */}
          <span
            className="text-base font-bold text-[#C9A84C]"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            BSCU
          </span>

          {/* Copyright */}
          <p className="text-[13px] text-[#475569] text-center">
            &copy; 2025 Berkeley Student Credit Union. Organized by the Haas
            Fintech Club.
          </p>

          {/* Right spacer (intentionally empty) */}
          <div className="hidden sm:block w-[60px]" aria-hidden="true" />
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E2D45] pt-6">
          {/* Disclaimer */}
          <p className="text-[11px] leading-relaxed text-[#475569] text-center max-w-3xl mx-auto">
            BSCU is in formation and is not yet a chartered credit union. It is
            not insured by the NCUA or any federal or state agency. This site is
            for informational and interest-gathering purposes only and does not
            constitute an offer of financial products or services.
          </p>
        </div>
      </div>
    </footer>
  );
}
