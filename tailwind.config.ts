import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "imn-red": "#E42527",
        "imn-red-dark": "#C41E20",
        "imn-red-light": "#FF4B4D",
        "imn-dark": "#0F0F0F",
        "imn-dark-light": "#1A1A1A",
        "imn-gray": {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-inter)",
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-lg": [
          "5.5rem",
          { lineHeight: "1.0", letterSpacing: "-0.03em", fontWeight: "900" },
        ],
        display: [
          "4rem",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
        "display-sm": [
          "2.75rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in": "slideIn 0.4s ease-out",
        "count-up": "countUp 2s ease-out",
        marquee: "marquee 30s linear infinite",
        "marquee-fast": "marquee 15s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-overlay":
          "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#171717",
            a: {
              color: "#E42527",
              "&:hover": {
                color: "#C41E20",
              },
            },
            "h2, h3, h4": {
              fontFamily:
                "var(--font-inter), Inter, Helvetica Neue, Helvetica, sans-serif",
              fontWeight: "700",
              textTransform: "uppercase",
            },
            blockquote: {
              borderLeftColor: "#E42527",
              fontStyle: "normal",
              fontWeight: "600",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
