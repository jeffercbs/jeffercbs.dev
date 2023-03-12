/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {
         colors: {
            verdigris: "#68AFB0ff",
            raisin: "#282828ff",
            lime: "#D4FE40ff",
            midnight: "#1B5369FF",
            night: "#111111",
         },
      },
   },
   plugins: [],
};
