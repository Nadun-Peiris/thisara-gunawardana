/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F1A",
        surface: "rgba(255, 255, 255, 0.08)",
        glassBorder: "rgba(255, 255, 255, 0.15)",
        accent: "#3B82F6",
        textPrimary: "#E5E7EB",
        textSecondary: "#9CA3AF",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backdropBlur: {
        glass: "12px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
