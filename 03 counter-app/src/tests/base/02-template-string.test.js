import { getSaludo } from "../../base/02-template-string";

describe('prueba en 02 template string',() => {

    test('debe retornar el salud de hola Ariel', () => {
        let nombre = 'Ariel';

        let saludo = getSaludo(nombre);
        expect( saludo).toBe(`Hola ${nombre}`)
    });
    
    test('debe retornar el salud de Hola luis sino hay argumentos en la funcion', () => {

        //let saludo = getSaludo();
        expect( getSaludo() ).toBe(`Hola luis`)
    });
    
});