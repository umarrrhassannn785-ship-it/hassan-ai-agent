/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        // Dark theme
        void: "#0a0b0e",
        surface: "#111318",
        panel: "#16191f",
        border: "#1e2229",
        "border-bright": "#2a2f3a",
        muted: "#3a3f4d",
        dim: "#6b7280",
        soft: "#9ca3af",
        bright: "#e2e8f0",
        // Accent
        cyan: {
          DEFAULT: "#00d4ff",
          dim: "#0099bb",
          glow: "rgba(0,212,255,0.15)",
        },
        // Light theme
        snow: "#fafafa",
        "snow-dim": "#f0f2f5",
        ink: "#0f1117",
        "ink-soft": "#374151",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease forwards",
        "slide-up": "slideUp 0.35s cubic-bezier(0.16,1,0.3,1) forwards",
        blink: "blink 1s step-end infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        shimmer: "shimmer 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: {
          from: { opacity: 0, transform: "translateY(12px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0 } },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
