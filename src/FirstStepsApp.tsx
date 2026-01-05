import { ItemConter } from "./shopping-cart/ItemConter";


interface ItemIncart {
    productName:string,
    quantity:number
}

const itemsInCart:ItemIncart [] = [
    {productName:"nintendo switch 2", quantity:1},
    {productName:"pro controller", quantity:2},
    {productName:"super smash", quantity:5},
]

export function FirstStepsApp(){
    return (
    <>
    <h1>carrito de compras</h1>

    {itemsInCart.map(({productName, quantity}) => (
        <ItemConter key={productName} name = {productName} quantity={quantity} />
    ))}

    {/* < ItemConter name = "nintendo switch 2" quantity={1} />
    < ItemConter name = "pro controller" quantity={2} />
    < ItemConter name = "super smash" quantity={3} /> */}
    
    </>
    
    )
}