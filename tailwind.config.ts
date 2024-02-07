import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      moderateViolet: "hsl(263, 55%, 52%)",
      veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
      veryDarkBlackishBlue: "hsl(219, 29%, 14%)",
      white: "hsl(0, 0%, 100%)",
      lightGray: "hsl(0, 0%, 81%)",
      lightGrayishBlue: "hsl(210, 46%, 95%)",
    },
    backgroundImage: {
      quotation: "url('/bg-pattern-quotation.svg')",
    },
  },
};
export default config;
