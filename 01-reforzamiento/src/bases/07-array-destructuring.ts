const characteNames = ['goku','vegeta','trunks'];

const [,,p3] = characteNames;

console.log(p3);


const returnsArray = () => {
    return ['ABC',123] as const;
}

const [letters,numbers] = returnsArray();

console.log({letters,numbers});
// console.log(returnsArray());

console.log(numbers + 2);