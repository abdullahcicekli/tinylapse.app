/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo-inspired gradient colors
        'brand-green': '#D4F7A5',      // Soft lime green from logo
        'brand-green-dark': '#B8E986',  // Darker lime
        'brand-blue': '#A8D8F0',        // Soft blue from logo
        'brand-blue-dark': '#7BC4E8',   // Darker blue
        // Legacy accent colors (for backwards compatibility)
        accent: '#D4F7A5',
        'accent-dark': '#7BC4E8',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #D4F7A5 0%, #A8D8F0 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #B8E986 0%, #7BC4E8 100%)',
      },
    },
  },
  plugins: [],
}

