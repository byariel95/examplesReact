import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05 funciones ', () =>{

    test('debe de retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }   

        const user = getUser();
    
            // evalua que dos onbjetos tengan las mismas propiedades y los mismos valores
        expect(user ).toEqual( userTest)

    });

    test('debe de retornar un objeto enviando parametro ', () => {
        
        const nombre = 'mildred'; 
        const userTestActivo = {
            uid: 'ABC567',
            username: nombre,
        };   

        const user = getUsuarioActivo(nombre);   
        expect(user ).toEqual( userTestActivo);

    });


});