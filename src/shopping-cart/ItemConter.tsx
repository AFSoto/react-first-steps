import { useState, type CSSProperties } from "react"



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
            color:count > 3 ? "red" : "black"
        }} 
        >{name}</span>
        <button
        // onMouseEnter={() => console.log(`mouse enter ${name}`)}
        onClick={handleadd}
        >+1</button>
        <span>{count}</span>
        <button
        onClick={handlesubtract}
        >-1</button>
        
    </section>
  )
}

