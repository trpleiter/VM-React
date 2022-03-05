import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"
import reportWebVitals from './reportWebVitals';
import Contactpage from "./pages/contact-page";
function Index() {
    return (
        <Contactpage />
    )
}


ReactDOM.render(
    Index(),
    document.getElementById('root')
);

reportWebVitals();
