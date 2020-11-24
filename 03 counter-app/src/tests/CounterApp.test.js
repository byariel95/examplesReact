
import React from 'react';
import '@testing-library/jest-dom';
import {shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('pruebas en el componente counter', () => {
    
    let wrapper= shallow( <CounterApp  />);

    // se ejecuta entes de  cada evaluacion
    beforeEach(()=>{

        wrapper = shallow( <CounterApp  />);
    })
    
    test('debera mostrar el snapshot del componente counter', () => {
        
       
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debera mostrar el valor de 100', () => {
        const valorDefecto = 100;
        const wrapper = shallow( 
        <CounterApp 
        value={valorDefecto} 
        />
        );

        const counter = wrapper.find('h2').text().trim();
        expect(counter).toBe(`${valorDefecto}`);
    });
    
    test('debera simular los clicks y aumentar', () => {
     
        wrapper.find('button').at(0).simulate('click'); // boton numero 1
        const counterText = wrapper.find('h2').text().trim();  
        expect(counterText).toBe('11');
       
        
    });
    
    test('debera simular los clicks y disminuir', () => {
     
        wrapper.find('button').at(1).simulate('click'); // boton numero 1
        const counterText = wrapper.find('h2').text().trim();  
        expect(counterText).toBe('9');
       
        
    });


    test('debera de establecer el valor por defecto', () => {
     
        const valorDefecto = 100;
        const wrapper = shallow( <CounterApp value={valorDefecto} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click'); 
        const counterText = wrapper.find('h2').text().trim();  
        expect(counterText).toBe(valorDefecto.toString());
       
        
    });
    

})
