/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        white15: "rgba(255, 255, 255, 0.15)",
        mainBlack: "#212121",
        mainBlack7: "rgba(33, 33, 33, 0.07)",
        mainBlack5: "rgba(33, 33, 33, 0.05)",
        pink: "#FEF1E6",
        textPink: "#EE7D1E",
        line: "#E2E3E5",
        secondary: "#F2F5F7",
        txtSecondary: "#6E6E73",
        txtSecondary2: "#80848F",
        disable: "#E5E5E5",
        blue: "#3D82D0",
        borderBlack: "rgba(33, 33, 33, 0.02)",
        purple: "rgba(209, 104, 167, 1)",
        gray: "#80848F",
        buttonBg: "#F2F5F7",
        green: "#D3EDED",
        darkGreen: "#027373",
      },
      screens: {
       '2md': { 'max': '940px' },
      },
    },
  },
  plugins: [],
};
