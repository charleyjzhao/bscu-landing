"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Why BSCU", href: "#why-bscu" },
  { label: "Who We're Looking For", href: "#who" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,15,30,0.92)] backdrop-blur-[12px] border-b border-[#1E2D45]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16">
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display font-700 text-xl tracking-tight text-[#C9A84C] select-none"
            style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 700 }}
          >
            BSCU
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="nav-link text-sm font-medium text-[#94A3B8] hover:text-[#F1F5F9] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#waitlist");
              }}
              className="bg-[#C9A84C] text-[#0A0F1E] font-semibold px-5 py-2 rounded-md text-sm hover:bg-[#E2B96F] transition-colors duration-200 whitespace-nowrap"
            >
              Join the Waitlist
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-[#1E2D45] transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-5 h-px bg-[#F1F5F9]" />
            <span className="block w-5 h-px bg-[#F1F5F9]" />
            <span className="block w-4 h-px bg-[#F1F5F9]" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`mobile-menu-panel ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-5 border-b border-[#1E2D45]">
          <span
            className="font-display text-lg font-bold text-[#C9A84C]"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            BSCU
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#1E2D45] transition-colors text-[#94A3B8] hover:text-[#F1F5F9]"
            aria-label="Close navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-5 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-[#94A3B8] hover:text-[#F1F5F9] font-medium py-3 px-3 rounded-md hover:bg-[#1E2D45] transition-colors text-base"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-[#1E2D45]">
            <a
              href="#waitlist"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#waitlist");
              }}
              className="block w-full bg-[#C9A84C] text-[#0A0F1E] font-semibold px-5 py-3 rounded-md text-center hover:bg-[#E2B96F] transition-colors"
            >
              Join the Waitlist
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
