module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkBg: "#101010",
      text: "#fafafa",
      orange: "#d87d4a",
      orangelight: "#eb9f75",
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
        zx7Mobile: "url('../images/home/mobile/image-speaker-zx7.jpg')",
        zx7Tablet: "url('../images/home/tablet/image-speaker-zx7.jpg')",
        zx7Desktop: "url('../images/home/desktop/image-speaker-zx7.jpg')",
        yx1Mobile: "url('../images/home/mobile/image-earphones-yx1.jpg')",
        yx1MTablet: "url('../images/home/tablet/image-earphones-yx1.jpg')",
        yx1Desktop: "url('../images/home/desktop/image-earphones-yx1.jpg')",
      },
      height: {
        tall: "450px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
