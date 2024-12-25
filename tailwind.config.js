/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-page-image': "url('/src/components/images/514293.jpg')",
        'twitter': "url('/src/components/images/twitter.png')"
      }
    }
  },
  plugins: [],
}