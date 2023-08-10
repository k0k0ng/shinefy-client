/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purp: '#8844DA',
        footerpurp: '#4D2FBB',
      },
      fontFamily: {
        'Inter': ['Inter'],
        'karla': ['Karla']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
