import type { CSSProperties } from "react";
const firtName = 'andres'
    const lastName = 'soto'

    const favoriteGames = ['mario','free fire','lol'];
    const isActive = false;
    const address = {
        zipCode: 'ABC-123',
        country: 'colombia'
    }
    const myStyles: CSSProperties = {
            backgroundColor: 'red',
            color: 'white',
            borderRadius: 50,
            padding:isActive?30:50,
            marginTop:10
        }
export function MyAwesomeApp(){
    
    return(
        <>
        <h1>{firtName}</h1>
        <h3>{lastName}</h3>
        <p>{favoriteGames.join(', ')}</p>
        <h1>{isActive? 'activo':'no activo'}</h1>
        <p
        style={myStyles}
        >{JSON.stringify(address)}</p>
        </>
    )
}