


import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./herlpers";

// el describe me sirve para agrupar varios test de una funcionalidad
describe('add',() => {
    
test('should add two positives numbers',() => {
    // console.log('hola mundo');
    // const result = add(1,2);
    // console.log(result);
    // if (result !== 5) {
    //     throw new Error('el numero es diferente de cinco');
    // }
    

    // ! Arrange
    const a = 3;
    const b = 1;
    // ! Act
    const result = add(a,b);
    
    // ! Assert

    expect(result).toBe(a+b)
    });

    test('should add two numbers negative', () => { 
        //arrange
        const b1 = -2;
        const b2 = -3;

        // act
        const sumne = add(b1,b2);

        //assert
        expect(sumne).toBe(b1+b2);
        
     });
});

describe('subtract',() => {
    test('test subtracy', () =>{
        const a2 = 3;
        const b2 = 2;

        const rest = subtract(a2,b2);

        expect(rest).toBe(a2-b2);
    })
    test('test subtracy2', () =>{
        const a2 = 2;
        const b2 = 4;

        const rest = subtract(a2,b2);

        expect(rest).toBe(a2 - b2);
        console.log(a2 - b2);
    })
})


describe('multiply', () => {
    test('test mltipli',() =>{
        const a3 = 2;
        const b3 = 3;

        const mult = multiply(a3,b3);

        expect(mult).toBe(6);
    })
})





