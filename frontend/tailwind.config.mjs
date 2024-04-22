// import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Poppins-Light", ...defaultTheme.fontFamily.sans],
        body: ["Poppins-Light"],
        titleMedium: ["RobotoSlab-Light"],
        titleLarge: ["Rufina-Regular"],
      },
      colors: {
        primary: "#A3F3BE",
        secondary: "#573697",
        primaryContainer: "#224F34",
        secondaryContainer: "#D8C9F6",
      },
    },
  },
  plugins: [],
};
