import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ItemConter } from './ItemConter';




describe('ItemConter',()=>{
    test('should render default values',()=>{

        // definimos una constante para que la informacion no se tan volatil
        const name = 'test item';

        render(<ItemConter name = {name}/>);
        // screen.debug();

        expect(screen.getByText(name)).toBeDefined();
        

    });

    test('should render with custom quantity',()=>{


        const name = 'test item';
        const quantity = 10;

        render(<ItemConter name = {name} quantity={quantity}/>);
        // screen.debug();
        expect(screen.getByText(quantity)).toBeDefined();
        

    })

    test('should render with custom quantity',()=>{
        render(<ItemConter name = {'test item'} quantity={1}/>);
        // screen.debug();
        const [buttonAdd] = screen.getAllByRole('button');
        // console.log(buttonAdd.innerHTML);
        

    })

    test('should increase count when +1 button is pressed',()=>{
        render(<ItemConter name = {'test item'} quantity={1}/>);
        // screen.debug();
        const [buttonAdd] = screen.getAllByRole('button');
        
        // el fireEvent nos permite realizar acciones sobre un elemento en el dom vitual que nos da vitest 
        fireEvent.click(buttonAdd);

        expect(screen.getByText(2)).toBeDefined();
    })

    test('should decrease count when -1 button is pressed', ()=>{
        // quantity  5
        const quantity = 5;
        render(<ItemConter name={'decrement'} quantity={quantity}/>);

        const [,buttonRest] = screen.getAllByRole('button');

        fireEvent.click(buttonRest);

        expect(screen.getByText(4)).toBeDefined();
        console.log(screen.getByTestId('count').innerHTML);

    });

    test('should not decrease count when -1 button in pressed and quatity is 1',()=>{
        render(<ItemConter name={'hola'} quantity={1}/>);

        const [,buttonRest] = screen.getAllByRole('button');

        fireEvent.click(buttonRest);

        expect(screen.getByText('1')).toBeDefined();
        console.log(screen.getByTestId('count').innerHTML);
    })
})