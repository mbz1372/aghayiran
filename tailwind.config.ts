import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { night:"#07111f", acid:"#d7ff3f", forest:"#063f2d", gold:"#f5c451", mint:"#dff8e9" } } },
  plugins: [],
};
export default config;
