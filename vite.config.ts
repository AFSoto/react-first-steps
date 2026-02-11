// en este archivo es como si le dirieramos a el programa :
// estoy usando react con vite a demas quiero hacer test con vitest en un entorno que simule el navegador

// import { defineConfig } from 'vite' //esta seria la forma noraml de configurar solo vite cuando no usamos  testing library
import { defineConfig } from 'vitest/config'; // es una funcion que ayuda a escribir configuracion  da auto cmopletado y evita errores de tipo
import react from '@vitejs/plugin-react-swc' // permite a vite entender jsx compilar react, usar hooks 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // aca le decimos a vite que vamos a usar react 
  test: {
    // es necesarrio por que react trabaja con el dom y los test corren en node
    environment: 'jsdom', // es como un dom falso en node.js simula document,window,input,button , eventos
    globals:true,//permite usar funciones de test sin importarlas
  }
})
