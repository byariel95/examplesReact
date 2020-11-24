import React from 'react';
import { render} from '@testing-library/react';
import FirstApp from '../FirstApp';
import '@testing-library/jest-dom';
import {shallow } from 'enzyme';


describe('prueba en componente <FirstAPP>', () => {
    
    /*test(' debe mostrar el msj de hola soy goku', () => {
         const saludo = 'Hola, soy Goku';
         const { getByText} = render( <FirstApp saludo={saludo}/>);

         expect( getByText( saludo )).toBeInTheDocument();
    })*/

    test('debe mostrar <>firstApp/>  ', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <FirstApp saludo={saludo} />);
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debera mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Goku';
        const subTitle = 'soy un subtitulo'
        const wrapper = shallow( 
        <FirstApp 
        saludo={saludo}
        subtitle={subTitle} 
        />
        );

        const texto = wrapper.find('h2').text();
        expect(texto).toBe(subTitle);
    })
    

})
