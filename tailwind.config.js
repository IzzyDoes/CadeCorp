/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
    'sm': '480px',
    'md': '768px',
    'lg': '976px',
    'xl': '1440px'
  },
    extend: {
      colors: {
        'simpleWhite' : '#F5F5F5',
        'ladyOrange' : '#F57328',
        'greyArea': '#D3E4CD'

      },
      fontFamily: {
        Poppins : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
