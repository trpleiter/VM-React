import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"
import reportWebVitals from './reportWebVitals';
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";

function Index() {

    return (
        <AuthContextProvider>
            <App />
        </AuthContextProvider>

    )
}


ReactDOM.render(
    Index(),
    document.getElementById('root')
);

reportWebVitals();
