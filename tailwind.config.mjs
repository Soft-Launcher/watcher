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
    },
  },
  plugins: [],
};
