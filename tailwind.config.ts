import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        accent: {
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
        },
        ink: "#18181b",
        sand: "#fffaf2",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at top right, rgba(250, 204, 21, 0.32), transparent 22%), radial-gradient(circle at left, rgba(249, 115, 22, 0.18), transparent 28%)",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
