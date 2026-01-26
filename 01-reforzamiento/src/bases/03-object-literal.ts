

interface persona {
    name: string;
    lastName: string;
    age: number;
    address:address;
}

interface address{
    country: string;
    city: string;
}

const person:persona = {
    name: 'andres',
    lastName: 'soto',
    age: 35,
    address:{
        country: 'colombia',
        city: 'bogota'
    }
}

// const person3:persona = {
//     name: "lele",
//     lastName: "jhgyu",
//     age: 36
// }



const person2 = structuredClone(person);

person2.name = 'pedro';
person2.age = 22;
person2.lastName = 'gomez';
// person2.adress.city = 'medellin';

console.log(person2);

console.log(person)