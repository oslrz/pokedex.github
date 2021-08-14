import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Field from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <React.StrictMode>
    <h1 id='title'>Pokedex</h1>
    <Field />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

