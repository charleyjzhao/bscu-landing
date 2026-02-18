import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0F1E",
        surface: "#111827",
        "bscu-border": "#1E2D45",
        gold: "#C9A84C",
        "gold-hover": "#E2B96F",
        "text-primary": "#F1F5F9",
        "text-secondary": "#94A3B8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.15em",
      },
      boxShadow: {
        "card-hover":
          "0 0 0 1px #C9A84C22, 0 8px 32px rgba(201,168,76,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
