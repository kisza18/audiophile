module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkBg: "#101010",
      text: "#fafafa",
      orange: "#d87d4a",
      textDark: "#878787",
    },
    extend: {
      backgroundImage: {
        heroBg: "url('../images/home/desktop/image-hero.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
