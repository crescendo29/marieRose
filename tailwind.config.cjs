/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero.webp')",
        'gold-texture': "url('/images/gold.webp')",
      },
      colors: {
        gold: "#ccac00",
        goldish: "#8c5b18ff",
        marieBlue: "rgba(28,37,70,100%)",
        marieBlueLight: "rgba(28,37,70,70%)",
        marieBlueLighter: "rgba(28,37,70,90%)",
      },
      
    },
  },
  plugins: [require("daisyui")],
}
