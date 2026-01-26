function greeting(name: string): string {
    return `hola ${name}`;
}

const message = greeting('andres');

const greeting2 = (name:string):string => `hola ${name}`
const message2 = greeting2('felipe');

console.log(message2);

console.log(message);

interface user {
    name: string;
    age: number;
}

const myObject = ():user => ({
        name: 'andres',
        age: 35

    });



const message3 = myObject();

console.log(message3);


const numeros:number[] = [1,23,3];

numeros.forEach((n,i)=>{
    console.log(n);
    console.log(i);
})

numeros