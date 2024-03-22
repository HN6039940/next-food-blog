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
      animation: {
        fadeInImage: "fadeIn 1s ease-in-out forwards",
        fadeOutImage: "fadeOut 1s ease-in-out forwards",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            transform: "rotate(20deg) scale(1.4)",
            opacity: "0",
            zIndex: "0",
          },
          "100%": {
            transform: " rotate(0deg) scale(1.0)",
            opacity: "1",
            zIndex: "1",
          },
        },
        fadeOut: {
          "0%": {
            transform: "rotate(0deg) scale(1.0)",
            opacity: "1",
            zIndex: "1",
          },
          "100%": {
            transform: " rotate(20deg) scale(1.4)",
            opacity: "0",
            zIndex: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
