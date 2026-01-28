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
        background: "var(--background)",
        foreground: "var(--foreground)",
        rothschild: {
          DEFAULT: "#002855",
          50: "#f0f4f9",
          100: "#dde6f1",
          200: "#c1d3e6",
          300: "#99b7d8",
          400: "#6a96c7",
          500: "#4677b5",
          600: "#345e9a",
          700: "#2b4b7e",
          800: "#274066",
          900: "#002855",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        serif: ["var(--font-playfair-display)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
