import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--bg))",
        surface: "rgb(var(--surface))",
        edge: "rgb(var(--edge))",
        muted: "rgb(var(--muted))",
        "accent-strong": "rgb(var(--strong))",
        soft: "rgb(var(--soft))",
        chip: "rgb(var(--chip))",
        brand: "rgb(var(--accent))",
        "brand-dim": "rgb(var(--accent-dim))",
        overlay: "rgb(var(--overlay))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
