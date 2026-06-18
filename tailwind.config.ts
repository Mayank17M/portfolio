import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#ff9d00",
        cyan: "#00FFFF",
        lime: "#CAFF00",
        card: "#1c1c1c",
        black: "#0f0f0f",
      },
      fontFamily: {
        "press-start": ["var(--font-press-start)", "monospace"],
        space: ["var(--font-space-grotesk)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
