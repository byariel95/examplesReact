import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value=10 }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);

    const substractAdd = () => setCounter(counter - 1);
    
    const resetvalue = () =>  setCounter( value);
    

    return (
        <>
            <h1>Counter </h1>
            <h2>{ counter }</h2> 
            <button onClick={handleAdd}>+ 1</button>
            <button onClick={substractAdd}>- 1</button>
            <button onClick={resetvalue}>reset</button>
        </>
    );


};

CounterApp.propTypes = {

    value: PropTypes.number,

}
 

export default  CounterApp;