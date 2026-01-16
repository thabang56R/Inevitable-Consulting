export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#002f6c",
        accentRed: "#7a1c1c",
        accentGreen: "#1f5c47",
        muted: "#5f6c7b",
      },
      fontSize: {
        h1: ["42px", { lineHeight: "52px" }],
        h2: ["32px", { lineHeight: "42px" }],
        h3: ["22px", { lineHeight: "32px" }],
        body: ["16px", { lineHeight: "28px" }],
        small: ["14px", { lineHeight: "22px" }],
      },
      spacing: {
        section: "96px",
        block: "64px",
        element: "32px",
      },
      borderRadius: {
        xlcurve: "2.2rem",
      },
    },
  },
  plugins: [],
};
