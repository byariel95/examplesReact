import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import  heroes  from "../../data/heroes";

describe('Pruebas en funciones de heroes',()=>{

    test(' debe retornar un heroe por id', () => {
    
        let id = 1;
        const heroe = getHeroeById(id);
        const heroedata = heroes.find(h => h.id === id);
        expect( heroe).toEqual( heroedata);
    })

    test(' debe retornar un undefined si el heroe no existe', () => {
    
        let id = 11;
        const heroe = getHeroeById(id);
        expect( heroe).toBe( undefined);
    })

    
    test(' debe retornar un arreglo de heroes de DC', () => {
    
        let owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroedata = heroes.filter(h => h.owner ===  owner);
        expect( heroe).toEqual( heroedata);
    })

    test(' debe retornar el numero de elementos del arreglo', () => {
    
        let owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        const heroedata = heroes.filter(h => h.owner ===  owner);
        expect( heroe.length).toBe( heroedata.length);
    })

});