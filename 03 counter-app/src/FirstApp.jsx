import React from 'react'

//import React, { Fragment } from 'react'


const FirstApp = ({ saludo = 'hola mundo' }) => {


   
    // const obj = {
    //     name: 'hola',
    //     other: 'zhii'
    // }

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre>{ JSON.stringify(obj,null,3)}</pre> */}
            <p>Hola Mundo desde un functional component </p>
        </>
        /*<Fragment>
            <h1>mi titulo </h1>
            <p>Hola Mundo desde un functional component </p>        
        </Fragment>*/    
    );

};

export default FirstApp;