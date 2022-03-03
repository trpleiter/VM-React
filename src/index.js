import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"
import reportWebVitals from './reportWebVitals';
import SignUp from "./pages/sign-up";
function Index() {
    return (
        <SignUp />
    )
}


ReactDOM.render(
    Index(),
    document.getElementById('root')
);

reportWebVitals();
