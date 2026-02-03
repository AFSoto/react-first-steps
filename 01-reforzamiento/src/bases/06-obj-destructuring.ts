const person = {
    name: 'andres',
    age: 23,
    rank:3
};

// const name = person.name;
// const age = person.age;

const {name:nombre,age:age1} = person;

console.log(nombre);
console.log(age1);

interface Hero{
    name: string;
    age: number;
    key: string | undefined;
    rank: number;
}

// const useContext = (hero:Hero) => {
//     const {key,name,age} = hero;
//     return{
//         keyName: key,
//         user:{
//             name,
//             age
//         }
        
//     }
// }

const useContext = ({key,name,age,rank}:Hero) => {
    return{
        key,
        user:{
            name,
            age
        },
        rank
    }
}



const {key,rank,user} = useContext(person);

const {name,age} = user
console.log({name,age});

console.log({key,rank})
// console.log(contex);