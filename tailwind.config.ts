import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F5",
        ink: "#1B1A17",
        "ink-soft": "#5B5852",
        "ink-faint": "#9A968D",
        rule: "#E7E4DC",
        "env-bg": {
          light: "#EFEDE7",
          dark: "#141311",
        },
      },
      fontFamily: {
        serif: ["Spectral", "Georgia", "serif"],
        mono: ["'Courier Prime'", "'Courier New'", "monospace"],
        hand: ["Architects Daughter", "cursive"]
      },
      maxWidth: {
        a4: "210mm",
      },
      spacing: {
        a4h: "297mm",
      },
    },
  },
  plugins: [],
};
export default config;
