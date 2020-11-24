

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {
        const id = 2;
        const resp   = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const { image } = await resp.json();

        return image;

       

    } catch (error) {
        // manejo del error
        return 'no existe';
    }
    
    
    
}

 getImagen();



