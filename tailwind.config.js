/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "960px",
      xl: "1440px",
    },
    extend: {
      colors: {
        soft_orange: "hsl(35, 77%, 62%)",
        soft_red: "hsl(5, 85%, 63%)",
        off_white: "hsl(36, 100%, 99%)",
        g_blue: "hsl(233, 8%, 79%)",
        dg_blue: "hsl(236, 13%, 42%)",
        vd_blue: "hsl(240, 100%, 5%)",
      },
      backgroundImage: () => ({
        "img-top-dsk": "url('/image-web-3-desktop.jpg')",
        "img-top-mob": "url('/image-web-3-mobile.jpg')",
      }),
    },
  },
  plugins: [],
};
