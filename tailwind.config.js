/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/sx694.png')" // Adicione a imagem de fundo personalizada
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], // Aplique uma fonte moderna e elegante
      },
    },
  },
  plugins: [],
}
