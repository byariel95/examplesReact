
describe('prueba en el archivo demo.test.js',() => {
    
    test('deben de ser iguales los strings', () => {
    
        let mensaje = 'hola mundo';
        let mensaje2 = `hola mundo`;
    
        expect(mensaje).toBe(mensaje2);
    });

});

