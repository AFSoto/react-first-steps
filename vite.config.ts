// en este archiv es como si le dirieramos a el programa :
// esty usando react con vite a demas quiero hacer test con vitest en un entorno que simule el navegador

// import { defineConfig } from 'vite' //esta seria la forma noraml de configurar solo vite cuando no usamos  testing library
import { defineConfig } from 'vitest/config'; // es una funcion que ayuda a escribir configuracion  da auto cmopletado y evita errores de tipo
import react from '@vitejs/plugin-react-swc' // permite a vite entender jsx compilar react, usar hooks 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // aca le decimos a vite que vamos a usr react 
  test: {
    // es necesarrio pr que reaact trabaja con el dom y los test crren en node
    environment: 'jsdom', // es como un dom falso en node.js simula document,window,input,button , eventos
    globals:true,//permite usar funciones de test sin importarlas
  }
})
