import { heroes,type Hero,type owner} from "./data/heroes.data"

// import { heroes as misSuperHeroesFavoritos } from "./data/heroes.data"



// const getHeroById = (id:number): Hero | undefined => {
//     const hero = heroes.find((hero) => {
//         return hero.id === id;
//     });

//     // if (!hero) {
//     //     throw new Error(`Hero with id ${id} not found`);
        
//     // }
//     return hero;
// }

// console.log(getHeroById(2));

export const getHeroesByOwner = (owner:owner):Hero | undefined => {
    const hero = heroes.filter((hero) => {
        return hero.owner === owner;
    });
    return hero;
    }

