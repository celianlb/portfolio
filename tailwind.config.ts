import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      primary: "#1E1E1E",
      secondary: "#FFFFFF",
      varprimary: "#2D2D2D",
      menu: "#181818",
      black: "#000000",
    },
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      rnssanz: ["var(--font-rnssanz)"],
      monumentextended: ["var(--font-monumentextended)"],
    },
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }
      },
      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "white"
        }
      }
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
    },
    boxShadow: {
      '3xl': '0 0 20px 0  rgba(0, 0, 0, 0.3)',
    },

  },
  darkMode: "class",
  plugins: [
    require('tailwindcss-animated'),
    require('taos/plugin'),
  ],
}
export default config
