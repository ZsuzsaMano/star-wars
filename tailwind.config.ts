import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(function ({
      addUtilities,
      theme,
    }: {
      addUtilities: any;
      theme: any;
    }) {
      addUtilities({
        ".position-unset": {
          position: "unset",
        },
      });
      const md = theme("screens.md", {});
      addUtilities({
        body: {
          fontSize: theme("fontSize.xs"),
          lineHeight: theme("lineHeight.lg"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.base"),
          },
        },
        h1: {
          fontSize: theme("fontSize.2xl"),
          lineHeight: theme("lineHeight.sm"),
          fontWeight: theme("fontWeight.medium"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.5xl"),
          },
        },
        h2: {
          fontSize: theme("fontSize.lg"),
          lineHeight: theme("lineHeight.sm"),
          fontWeight: theme("fontWeight.medium"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.4xl"),
          },
        },
        h3: {
          fontSize: theme("fontSize.lg"),
          lineHeight: theme("lineHeight.sm"),
          fontWeight: theme("fontWeight.medium"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.2xl"),
          },
        },
        h4: {
          fontSize: theme("fontSize.md"),
          lineHeight: theme("lineHeight.base"),
          fontWeight: theme("fontWeight.medium"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.lg"),
          },
        },

        button: {
          fontSize: theme("fontSize.xs"),
          lineHeight: theme("lineHeight.btn"),
          fontWeight: theme("fontWeight.medium"),
          textTransform: "uppercase",
          letterSpacing: theme("letterSpacing.wide"),
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.sm"),
            lineHeight: theme("lineHeight.sm"),
          },
        },
      });
    }),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "600px",
      md: "905px",
      lg: "1240px",
      xl: "1440px",
    },
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
      base: "1.125rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "1.75rem",
      "2xl": "1.875rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "4.5rem",
    },
  },
};
export default config;
