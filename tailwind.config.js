/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["DM Sans"]
      },
      backgroundImage:{
        'footer-background':"url('/src/assets/images/footer-background.svg')"
      },
      colors: {
        _dark_bg: "#141416",
        _dark_bg_sub: "#18191D",
        _dark_text: "#B1B5C3",
        _dark_sub: "#777E90",
        _light_bg: "#ffffff",
        _light_bg_sub: "#F7F7F7",
        _light_text: "#23262F",
        _light_sub: "#777E90",
        _light_sub_alt: "#B1B5C3",
        _light_border:"#E5E5E5",
        _blue: "#3772FF",
        _green: "#58BD7D",
        _error: "#D33535"
      }
    },
  },
  plugins: [],
};
