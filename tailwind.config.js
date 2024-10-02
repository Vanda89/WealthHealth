const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './src/styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-900': '#282828',
        'custom-gray-400': '#CACACA',
        'custom-gray-300': 'rgba(217, 217, 217, 0.12)',
        'custom-gray-200': '#EAEAEA',
        'custom-gray-100': '#FAFAFA',
        white: '#FFFFFF',
        'green-page-background': '#FEFFF9',
        'custom-green-300': '#859A18',
        'input-focus': '#E8F0FE',
      },
      borderWidth: {
        3: '3px',
      },
      fontSize: {
        xs: '.75rem',
        '2xs': '.5rem',
        '3xs': '.4rem',
      },
      height: {
        13: '3.25rem',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
      alternate: ['Montserrat Alternates', 'sans-serif'],
    },
  },
  plugins: [],
})
