import { StrictMode } from 'react' // este modo estricto nos aayuda en desarrollo no se sube a produccion
import { createRoot } from 'react-dom/client' // forma moderna que crear la raiz donde react va a vivir dentro del DOM del navegador
import { FirstStepsApp } from './FirstStepsApp' // este es un componente que creamos y lo importamos aca para usarlo
// import { MyAwesomeApp } from './MyAwesomeApp'
// import {ItemConter} from './shopping-cart/ItemConter'





//buscamos en el index un elemento con el id root
createRoot(document.getElementById('root')!).render( // con el render le decimos a react que renderice esto dentro del elemento
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeApp /> */}

  </StrictMode>,
)
