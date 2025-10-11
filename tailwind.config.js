/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1D2E",
        sidebar: "#242847",
        card: "#2B3050",
        primary: "#00F5A0",
        secondary: "#00D9E9",
        "accent-red": "#FF4F4F",
        "accent-yellow": "#FFD166",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A0AEC0",
      },
    },
  },
  plugins: [],
};
