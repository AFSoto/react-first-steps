// el useState es un hook que nos sirve para cuando el estado cambia react renderiza de nuevo
import { useState, type CSSProperties } from "react";



// import "./ItemConter.css"
import styles from "./ItemConter.module.css";

// const myStyles:CSSProperties = {
//         display:"flex",
//         alignItems:"center",
//         gap:10

//     }

  interface Props {
    name:string
    quantity?:number
  }

export const ItemConter = ({name,quantity = 1}:Props,) => {

//   count → valor actual
// setCount → función para cambiarlo
// quantity → valor inicial
  const [count, setCount] = useState(quantity)
  
  const handleadd = () =>{
    setCount(count +1)
  }
  const handlesubtract = () => {
    if ( count === 1) return;
    setCount(count -1)
  }


  // const handleClick = () => {
  //   console.log(`sumando uno al producto ${name}`)
  // }
  return (
    <section
    className={ styles.itemRow }
    // style={myStyles}
    >
        <span
        className="item-text"
        style={{
            // width:150,
            color:count == 1 ? "red" : "black"
        }} 
        >{name}</span>
        <button
        // onMouseEnter={() => console.log(`mouse enter ${name}`)}
        onClick={handleadd}
        >+1</button>
        <span data-testid='count'>{count}</span>
        <button
        onClick={handlesubtract}
        >-1</button>
        
    </section>
  )
}

