/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        black: "#000",
        white: "#fff",
        limegreen: "#07aa17",
        gray: "#8d8d8d",
        cadetblue: {
          "100": "#88c2bb",
          "200": "#548f87",
        },
        lime: "#00ff1a",
      },
      spacing: {},
      fontFamily: {
        barlow: "Barlow",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      smi: "13px",
      "3xs": "10px",
      xs: "12px",
      base: "16px",
      lg: "18px",
      "3xl": "22px",
      xl: "20px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
