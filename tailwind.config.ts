import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1128px",
      },
      colors: {
        // redbam: "#FFFFFF",
        // blum: "#000000",
        // bluem: {
        //   100: "#AAAAAA",
        //   200: "#444444",
        // },
      },
    },
  },
  plugins: [],
};

export default config;
