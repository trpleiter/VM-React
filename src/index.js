import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"
import reportWebVitals from './reportWebVitals';
import App from "./App";

function Index() {

    return (
       <App />
    )
}


ReactDOM.render(
    Index(),
    document.getElementById('root')
);

reportWebVitals();
