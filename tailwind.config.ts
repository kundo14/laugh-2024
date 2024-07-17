import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      archivo: ["var(--font-archivo)", "sans-serif"],
      archivoBlack: ["var(--font-archivoBlack)", "sans-serif"],
      playfairDisplay: ["var(--font-playfairDisplay)", "serif"],
    },
    fontSize: {
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      32: "32px",
      42: "42px",
      48: "48px",
      92: "92px",
    },
    colors: {
      yellow: "#FFCE5B",
      white: '#FAFAFA',
      black: '#171717',
      red: '#A21038',
      gold: '#C7A16D',
      transparent: "transparent",
      current: "currentColor",
      gray: {
        100: "#F5F5F5",
        200: "#EFEFEF",
        300: "#DFDFDF",
        400: "#B8B8B8",
        500: "#898989",
        600: "#5C5C5C",
        700: "#404040",
        800: "#262626",
      }
    },
  },
  plugins: [],
};

export default config;
