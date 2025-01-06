import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "snow-white": "#FBFBFB",
        "white-primary": "#FFFFFF",
        "black-primary": "#000000",
        "nero-black": "#131313",
        "red-bright": "#FF1E1E",
        "blue-secondary": "#11009E",
        "blue-primary": "#0766AD",
        "light-grey": "#B0B1B2",
        "light-grey-border": "#DCDEDF",
      },

      fontSize: {
        12: "0.75rem",
        14: "14px",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
        32: "2rem",
        40: "2.5rem",
        48: "3rem",
        56: "3.5rem",
        64: "4rem",
        72: "4.5rem",
      },
      lineHeight: ({ theme }) => ({
        ...theme("fontSize"),
      }),

      gap: ({ theme }) => ({
        4: "0.25rem",
        8: "0.5rem",
        ...theme("fontSize"),
      }),

      borderRadius: {
        0: "0rem",
        2: "0.125rem",
        4: "0.25rem",
        5: "0.3125rem",
        8: "0.5rem",
        10: "0.5rem",
        20: "0.5rem",
        24: "1.5rem",
        32: "2rem",
        56: "3.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
