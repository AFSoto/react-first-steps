//traemos el componente de como se vera cada item del carrito
import { ItemConter } from "./shopping-cart/ItemConter";


// la interface la creamos para definir la forma que debe tener el objeto
interface ItemIncart {
    productName:string,
    quantity:number
}

//aca le decimos que un array de onjetos ItemIncart
//cada elemento del array debe cumplir la interfaz
const itemsInCart:ItemIncart [] = [
    {productName:"nintendo switch 2", quantity:1},
    {productName:"pro controller", quantity:2},
    {productName:"super smash", quantity:5},
]

//este es el componente que lo exportamos para poder usarlo en otro lado 
//empiezapor mayuscula por que react solo conoce componentes asi
export function FirstStepsApp(){
    return (
        // <> es un fragmento que nos permite envolver multiples elementos sin tener que usar un div
    <>
    <h1>carrito de compras</h1>

        {/* aca usamos el map , y es como decirle que por cada item del carrito crea un ItemCounter */}
    {itemsInCart.map(({productName, quantity}) => ( // hacemos una desestructuracion de las propiedades que nos llegan
        <ItemConter key={productName} name = {productName} quantity={quantity} /> // cada componente va tener su valor
    ))}

    {/* < ItemConter name = "nintendo switch 2" quantity={1} />
    < ItemConter name = "pro controller" quantity={2} />
    < ItemConter name = "super smash" quantity={3} /> */}
    
    </>
    
    )
}