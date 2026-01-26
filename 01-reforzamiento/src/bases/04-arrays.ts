const numeros:number[] = [1,2,3,4,5];

// const numeros2 = [...numeros];
const numeros2 = structuredClone(numeros);

numeros2.push(6);

console.log(numeros2);
console.log(numeros);