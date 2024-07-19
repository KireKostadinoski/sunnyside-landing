/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1025px',
      xl: '1440px'
    },
    extend: {
      colors: {
        SoftRed: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        DarkDesaturatedCyan: "hsl(167, 40%, 24%)",
        DarkBlue: "hsl(198, 62%, 26%)",
        DarkModerateCyan: "hsl(168, 34%, 60%)",
        VeryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
        VeryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        DarkGrayishBlue: "hsl(232, 10%, 55%)",
        GrayishBlue: "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily:{
        serif: ['Fraunces', 'serif'],
        sans: ["Barlow", 'sans-serif']
      },
      backgroundImage: () => ({
        headerDesktop: "url('../images/desktop/image-header.jpg')",
        headerMobile: "url('../images/mobile/image-header.jpg')",
        eggDesktop: "url('../images/desktop/image-transform.jpg')",
        eggMobile: "url('../images/mobile/image-transform.jpg')",
        glassDesktop: "url('../images/desktop/image-stand-out.jpg')",
        glassMobile: "url('../images/mobile/image-stand-out.jpg')",
        graphicDesktop: "url('../images/desktop/image-graphic-design.jpg')",
        graphicMobile: "url('../images/mobile/image-graphic-design.jpg')",
        photographyDesktop: "url('../images/desktop/image-photography.jpg')",
        photographyMobile: "url('../images/mobile/image-photography.jpg')",
      }),
    },
  },
  plugins: [],
};
