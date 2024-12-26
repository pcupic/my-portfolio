/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-page-image': "url('/src/components/images/home.jpg')",
        'logo': "url('/src/components/images/logo.png')",
        'about-page-image': "url('/src/components/images/about.jpg')",
        'contact-page-image': "url('/src/components/images/contact.jpg')",
        'projects-page-image': "url('/src/components/images/projects.jpg')",
      }
    }
  },
  plugins: [],
}