// el describe nossirve para agrupar varias pruebas yel test nos sirve para hacer una prueba
import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from "./MyAwesomeApp";





describe('MyAwesomeApp',()=>{
    test('should show firstName and lastName - con render',()=>{
        //el container nos sirve para evaluar un estado inicial del componente
        const {container} = render(<MyAwesomeApp/>);
        

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toBe('andres')
        expect(h3?.innerHTML).toBe('soto');
        // expect(1).toBe(2);
    });

    test('should show firstName and lastName - con screen',()=>{
        //el screen lo usamos mucho por q nos permite saber si el componente cambio de estado
        render(<MyAwesomeApp/>);
        // el debug imprime en consola el dom del cmponente nos permite observa el componente para poder debuguear mas facil
        screen.debug(); // el sreen se usa mas comunmente ya que nos permite tener actualizado el componente con los cambios que vayan pasando


        // const h1 = screen.getByRole('heading',{
        //     level:1
        // })

        const h1 = screen.getByTestId('first-name')
        console.log(h1.innerHTML);
        

       
    })

    test('should match snapchot - container',()=>{
        // el snapchot seria como tomar una foto a el componente de como esta en ese momento
        // nos sirve para compararlo luego a ver si sigue teniendo la misma estructura
        const {container} = render(<MyAwesomeApp/>);

        // el snapshot nos crea una carpeta snapchot donde vamos a guardar la estructura de el DOM
        expect(container).toMatchSnapshot();
    })

    test('should match snapchot - screen',()=>{
        // el snapchot seria como tomar una foto a el componente de como esta en ese momento
        // nos sirve para compararlo luego a ver si sigue teniendo la misma estructura
        render(<MyAwesomeApp/>);

        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    })
})