import type { Config } from 'tailwindcss'

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
    },
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      rnssanz: ["var(--font-rnssanz)"],
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
    }

  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
