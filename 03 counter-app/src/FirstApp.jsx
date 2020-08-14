import React from 'react'
import PropTypes from 'prop-types'
//import React, { Fragment } from 'react'


const FirstApp = ({ saludo , subtitle = 'this is the subtitle', defaultProp}) => {


   
    // const obj = {
    //     name: 'hola',
    //     other: 'zhii'
    // }

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre>{ JSON.stringify(obj,null,3)}</pre> */}
            <p>{ subtitle }</p>
            <p>{ defaultProp}</p>
        </>
        /*<Fragment>
            <h1>mi titulo </h1>
            <p>Hola Mundo desde un functional component </p>        
        </Fragment>*/    
    );
};


FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    defaultProp : "hola"
}

export default FirstApp;