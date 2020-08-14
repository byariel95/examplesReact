import React from 'react';
import ReactDOM from 'react-dom';
//import FirstApp from './FirstApp'
import './index.css';
import CounterApp from './CounterApp';

const app = document.querySelector('#app');
//ReactDOM.render(<FirstApp saludo="hola soy goku" />,app);
ReactDOM.render(<CounterApp value={0}/>,app);