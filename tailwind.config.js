/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    
    extend: {
      fontFamily:{
        jersey:[ "Jersey 15"
        ]
      }
    },
  },
  plugins: [    require('daisyui'),
  ],
}

