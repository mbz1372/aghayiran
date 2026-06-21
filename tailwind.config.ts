import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-vazir)", "Tahoma", "Arial", "sans-serif"] },
      colors: {
        ink: "#111827",
        brand: { DEFAULT: "#14532d", soft: "#dcfce7", gold: "#f2b705" }
      },
      boxShadow: { glow: "0 24px 80px rgba(20,83,45,.18)" }
    }
  },
  plugins: [],
};
export default config;
