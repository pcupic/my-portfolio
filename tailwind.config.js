/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          }
        }
      },
      animation: {
        'spin': 'spin 5s linear infinite',
      },
      backgroundImage: {
        'home-page-image': "url('/src/components/images/home.jpg')",
        'logo': "url('/src/components/images/logo.png')",
        'about-page-image': "url('/src/components/images/about.jpg')",
        'contact-page-image': "url('/src/components/images/contact.png')",
        'projects-page-image': "url('/src/components/images/projects.jpg')",
      }
    }
  },
  plugins: [],
}