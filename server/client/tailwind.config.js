/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      //Estilos perzonalizados diccionario choco
      boxShadow: {
        mfBoxShadow: '0px 0px 9px 0px rgba(0, 0, 0, 0.4)',
      },
      colors:{
        mfColor: '#F47101',

        myColor: '#0A3161',

        mtColor: '#111212',

        mbColor: '#FFFFFF',

        mrColor: '#B31942',

        samColor:'#052bee',

        modal: 'rgba(0, 0, 0, 0.35)'
      },
      maxHeight:{
        table: '50rem'
      },
      //Estilos perzonalizados memorama
      screens: {
        'mfsm': '450px',
        'sm': '640px',
        'md': '768px',
        'mflg': '900px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontFamily: {
        'fontGeneral': ['Fredoka', 'sans-serif']
      }
    },
  },
  plugins: [],
}

