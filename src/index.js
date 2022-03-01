import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"
import reportWebVitals from './reportWebVitals';
import ForgotPassword from "./pages/forgot-password";
function Index() {
    return (
        <ForgotPassword />
    )
}


ReactDOM.render(
    Index(),
    document.getElementById('root')
);

reportWebVitals();
