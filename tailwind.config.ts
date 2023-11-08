import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "blue-100": "#3EA9E0",
      "blue-200": "#1F6BB1",
      "gray-50": "#FAFAFA",
      "gray-100": "#5C5C5C",
      "gray-200": "#9B9B9B",
      "gray-300": "#717171",
      "gray-400": "#ABABAB",
      white: "#fff",
      black: "#000",
      "black-100": "#232323;",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
