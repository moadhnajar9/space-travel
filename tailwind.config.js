module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "hsl(230 35% 7%)",
        light: "hsl(231 77% 90%)",
      },
      fontFamily: {
        "ff-sans-normal": ["'Barlow'", "sans-serif"],
        "ff-sans-cond": ["Barlow Condensed", "sans-serif"],
        "ff-serif": ["'Bellefair'", "serif"],
      },
    },
  },
  plugins: [],
};
