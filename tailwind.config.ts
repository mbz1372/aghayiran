import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Tahoma", "Arial", "sans-serif"] },
      colors: {
        night: "#08111f",
        ink: "#101828",
        cream: "#fff8e7",
        gold: "#f5b942",
        bronze: "#b7791f",
        forest: "#0f5132",
        mint: "#ddfbea",
        danger: "#dc2626"
      },
      boxShadow: {
        luxury: "0 28px 90px rgba(8,17,31,.16)",
        soft: "0 18px 60px rgba(16,24,40,.08)"
      },
      backgroundImage: {
        "luxury-grid": "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: [],
};
export default config;
