/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      desktop: "992px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        sans: [
          `"InterV", "Adjusted Arial Fallback", ${defaultTheme.fontFamily.sans.join(
            ", "
          )}`,
          { fontVariationSettings: '"opsz" 32' },
        ],
        area: ['"area-variable"', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "all-mile-bg": "url('./images/bg-all-mile.png')",
        "logo-left-shadow": "url('./images/all-mile-left-shadow.png')",
        "logo-right-shadow": "url('./images/all-mile-right-shadow.png')",
        "hero-bg": "url('./images/hero-bg.png')",
        "line-gradient": "url('./images/svg/line-gradient.svg')",
        "about-hero": "url('./images/About/about-hero-bg.png')",
        "thumbnail-shadow": "url('./images/About/thumbnail-shadow.png')",
        "team-image-shadow": "url('./images/About/team-image-shadow.png')",
        "customer-bg":"url('./images/About/customer-bg.png')",
      },
      boxShadow: {
        "3xl":
          "0px_0px_1px_0px_rgba(38,50,56,0.30),0px_1px_2px_0px_rgba(38,50,56,0.06)",
        "4xl":
          "0px 0px 1px 0px rgba(38, 50, 56, 0.30), 0px 1px 2px 0px rgba(38, 50, 56, 0.06)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".inter-display": {
          "font-optical-sizing": "auto",
        },
        ".optimizeLegibility": {
          "text-rendering": "optimizeLegibility",
        },
        ".font-wght-400": {
          fontVariationSettings: '"opsz" 24, "wght" 400',
        },
        ".font-wght-450": {
          fontVariationSettings: '"opsz" 24, "wght" 450',
        },
        ".font-wght-450-32": {
          fontVariationSettings: '"opsz" 32, "wght" 450',
        },
        ".font-wght-480": {
          fontVariationSettings: '"opsz" 24, "wght" 480',
        },
        ".font-wght-480-32": {
          fontVariationSettings: '"opsz" 32, "wght" 480',
        },
        ".font-wght-500": {
          fontVariationSettings: '"wght" 500',
        },
        ".font-wght-510": {
          fontVariationSettings: '"opsz" 32, "wght" 510',
        },
        ".font-wght-550": {
          fontVariationSettings: '"opsz" 32, "wght" 550',
        },
        ".font-wght-560": {
          fontVariationSettings: '"opsz" 32, "wght" 560',
        },
        ".font-wght-600": {
          fontVariationSettings: '"opsz" 24, "wght" 600',
        },
        ".font-wght-620": {
          fontVariationSettings: '"opsz" 24, "wght" 620',
        },
        ".font-wght-650": {
          fontVariationSettings: '"opsz" 32, "wght" 650',
        },
        ".font-wght-670": {
          fontVariationSettings: '"wght" 670',
        },
        ".font-wght-700": {
          fontVariationSettings: '"wght" 700',
        },
        ".font-wght-750": {
          fontVariationSettings: '"wght" 750',
        },
      });
    }),
  ],
};
