import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp'
import './index.css';

const app = document.querySelector('#app');
ReactDOM.render(<FirstApp saludo='hola soy goku' />,app);