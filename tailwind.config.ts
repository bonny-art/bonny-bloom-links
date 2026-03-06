import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsOnly: { max: "374px" },
        xs: "375px",
        md: "768px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
