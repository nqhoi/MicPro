import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "--Dark": "#1F2326",
        "--White": "#FFF",
        "--Primary": "#1663F9",
        "--Dark-1": "#81879D",
        "--ui-ux-agency-primary": "#171717",
      },
      backgroundColor: {
        "--Primary": "#1663F9",
        "--Line": "#F2F3F8",
        "--Orange": "#FFDB8F",
      },
      backgroundImage: {
        gradientPink: "linear-gradient(158deg, #D555C7 14.46%, #F396EA 79.18%)",
        gradientMix: `linear-gradient(90deg, #5F45D9 -11.43%, #F961D8 47.91%, #FE9E66 92.14%)`,
        gradientBlueIcon: `linear-gradient(243deg, #9A40E4 7.82%, #5C70F4 74.31%)`,
        gradientBlue: `linear-gradient(90deg, #3F56EE 10.5%, #5094FA 102.82%)`,
        gradientPurple: `linear-gradient(243deg, #9A40E4 7.82%, #5C70F4 74.31%)`,
      },
      fontFamily: {
        sora: ["var(--font-sora)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
