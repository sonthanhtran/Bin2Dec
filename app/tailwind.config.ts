import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      secondary: "#f37925",
      primary: "#1b1a19",
      background: "#fac670",
    },
    fontFamily: {
      inter: "Inter Variable",
      montserrat: "Montserrat Variable",
      nutito_sans: "Nutito Sans Variable",
    },
  },
  plugins: [],
} satisfies Config;
