/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fill-20': 'repeat(auto-fill, minmax(20rem, 1fr))'
      }
    }
  },
  plugins: []
};
