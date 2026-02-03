import { describe, expect, test } from "vitest";

//render dibuja el componente en un dom falso (jsdom) para pooder probarlo
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp',()=>{
    test('should render firstName and lasName',()=>{

        //hacer render(<MyAwesomeApp />); es como decirle , simula que este componente esta en una pagina web
        const { container } = render(<MyAwesomeApp />);
        // screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('andres');
        expect(h3?.innerHTML).toContain('soto');
    });

    test('should render firstName and lasName - screen',()=>{
        render(<MyAwesomeApp />);
        screen.debug();

        // const h1 = screen.getByRole('heading',{
        //     level:1
        // })
        const h1 = screen.getByTestId('first-name')

        expect(h1.innerHTML).toContain('andres');
        
    });

    //snapshot con render
    test('should match snapshot',()=>{
        
        
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });

    //snapchot con screen
    test('should match snapshot',()=>{
        
        
        render(<MyAwesomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    });
})