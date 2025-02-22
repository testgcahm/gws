import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '280px',
        'sm-xs': '420px',
        'sm-s': '560px',
        'sm': '640px',
        'sm-m': '700px',
        'md': '768px',
      },
      colors: {
        brown: {
          700: '#7D421F',
          900: '#593F2F',
        },
        green: {
          800: '#04523B',
          900: '#0E503D',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
