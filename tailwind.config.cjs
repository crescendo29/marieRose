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
      colors: {
        gold: "#ccac00",
        goldish: "#8c5b18ff",
        marieBlue: "#1c2546ff",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      
    },
  },
  plugins: [],
}


// position: absolute;
// transform: translate(-50%,-50%);
// top: 50%;
// left: 50%;
// font-family: 'Times New Roman',serif;
// letter-spacing: 5px;
// font-size: 150px;
// font-weight: bold;
// background-image: linear-gradient(
// 	to right,
// 	#462523 0,
//        	#cb9b51 22%, 
// 	#f6e27a 45%,
// 	#f6f2c0 50%,
// 	#f6e27a 55%,
// 	#cb9b51 78%,
// 	#462523 100%
// 	);
//    color:transparent;
//    -webkit-background-clip:text;

{/* <a href="https://www.vecteezy.com/free-vector/gold">Gold Vectors by Vecteezy</a> */}