/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      screens: {
        'xs': '480px', 
        'xxs': '375px'     
      }, 
        colors: {
          background: "var(--background)", // Custom CSS variables
          foreground: "var(--foreground)",
          primary: {
            dark: '#0891B2', // Custom primary dark color
            light: '#202135', // Custom primary light color
            default: '#1F8D4E', // Fixed typo
          },
        },
      },
    },

  plugins: [],
}
