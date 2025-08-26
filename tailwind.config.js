/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "22grad": "url('/src/images/22grad.jpg')",
        rectangle4: "url('/src/images/rectangle4.jpg')",
        flower: "url('/src/images/flower.jpg')",
        flower2: "url('/src/images/flower2.jpg')",
        biglitto: "url('/src/images/biglitto.jpg')",
        biglittle: "url('/src/images/biglittle.webp')",
        biglittlenopi: "url('/src/images/biglittlenopi.jpg')",
        biggrass: "url('/src/images/biggrass.jpg')",
        handshake: "url('/src/images/handshake.jpg')",
        heart: "url('/src/images/heart.jpg')",
        tie: "url('/src/images/tie.jpg')",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
