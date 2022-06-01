module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkBg: "#101010",
      text: "#fafafa",
      orange: "#d87d4a",
      textDark: "#878787",
      cardBg: "#f1f1f1",
    },
    extend: {
      backgroundImage: {
        heroDesktop: "url('../images/home/desktop/hero.jpg')",
        heroTablet: "url('../images/home/tablet/image-hero.jpg')",
        heroMobile: "url('../images/home/mobile/image-hero.jpg')",
        circlesBg: "url('../images/home/desktop/pattern-circles.svg')",
        speakersDesktop: "url('../images/home/desktop/image-speaker-zx9.png')",
        speakersMobile: "url('../images/home/mobile/image-speaker-zx9.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
