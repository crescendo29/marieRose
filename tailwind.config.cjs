/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      // sm: "480px",
      // md: "768px",
      // lg: "976px",
      // xl: "1440px",
      xs: { max: '575px' },
      sm: { min: '576px', max: '897px' },
      md: { min: '898px' },
      lg: { min: '1200px' },
      xl: { min: '1159px' },
      xxl: { min: '1359px' },
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      circle: 'circle',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero.webp')",
        'gold-texture2': "url('/images/gold.webp')",
        'velours-texture': "url('/images/velours.webp')",
        'aurora-texture': "url('/images/cadeau.webp')",
        'hero-img': "url('/images/hero.webp')",
        'gold-texture': "url('/images/or.jpg')",
        'box': "url('/images/box.webp')",
      },
      colors: {
        gold: "rgb(204,172,0,100%)",
        goldish: "#8c5b18ff",
        marieBlue: "rgba(28,37,70,100%)",
        marieBlueLight: "rgba(28,37,70,70%)",
        marieBlueLighter: "rgba(28,37,70,90%)",
        pinkepilo: "rgba(234,44,89,1)",
        blueepilo: "rgba(159,188,198,0.3)",
        phytomerClear: "#F9F8F7",
        phytomer: "#A99E8E",
      },
      
    },
  },
  plugins: [require("daisyui")],
}


// gris greenepilo: "rgba(106,106,107,1)"

// bleu background-image: radial-gradient( circle farthest-corner at 5.6% 54.5%,  rgba(47,71,79,1) 0%, rgba(159,188,198,1) 83.6% );

// rose 234,44,89,1