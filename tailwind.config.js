/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        56: [
          "3.5rem",
          {
            lineHeight: "3.5rem",
          },
        ],
      },
      blur: {
        "8px": ".5rem",
        240: "15rem",
      },
      width: {
        "14px": ".875rem",
        "514px": "32.125rem",
        546: "34.125rem",
        582: "36.375rem",
        590: "36.875rem",
        702: "43.875rem",
        705: "44.0625rem",
        1440: "78.75rem",
      },
      minHeight: {
        "530px": "33.125rem",
      },
      minWidth: {
        "514px": "32.125rem",
      },
      height: {
        "14px": ".875rem",
        352: "22rem",
        469: "29.3125rem",
        "530px": "33.125rem",
        650: "40.625rem",
        702: "43.875rem",
      },
      gap: {
        30: "1.875rem",
      },

      spacing: {
        18: "1.125rem",
        30: "1.875rem",
        "60px": "3.75rem",
      },

      borderRadius: {
        "5px": ".3125rem",
        "20px": "1.25rem",
      },
      colors: {
        primary: "#10152E",
        secondery: "#7389AA",
        btnPrimary: "#0C8CE9",
        btnSecondery: "#2F3B54",
        cardBg: "#112240",
        cardBgSecondery: "#274B92",
        projectsTitle: "#C7E7FF",
        "primary-border": "#7590B8",
        h6: "#CCD6F6",
      },
    },
  },
  plugins: [],
};
