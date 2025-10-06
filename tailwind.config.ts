import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#4d1f00",
        "border-color": "#FBEDDD",
        "secondary-color": "#ffe1cc",
        "secondary-color-2": "#F2CA99",
        "secondary-color-3": "#E88D67",
        "tertiary-color": "#b3e0ff",
        "tertiary-color-2": "#002e4d",
      },
      fontFamily: {
        Courgette: ["Courgette", "cursive"],
        grotesk: ["ID Grotesk", "sans-serif"],
        idgrotesk: ["ID Grotesk Trial", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
