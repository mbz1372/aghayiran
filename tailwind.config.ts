import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Tahoma", "Arial", "sans-serif"] },
      colors: {
        night:"#07111f", ink:"#101828", bone:"#fffaf0", gold:"#f6c453", forest:"#0e5a37",
        mint:"#dff8e9", cloud:"#f3f6fa", red:"#e11d48", blue:"#2563eb", amber:"#f59e0b"
      },
      boxShadow: { soft:"0 16px 50px rgba(16,24,40,.08)", lift:"0 24px 80px rgba(7,17,31,.16)" }
    }
  },
  plugins: [],
};
export default config;
