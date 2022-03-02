import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"
import reportWebVitals from './reportWebVitals';
import SuccesfullPassChange from "./pages/succesfull-pass-change";
function Index() {
    return (
        <SuccesfullPassChange />
    )
}


ReactDOM.render(
    Index(),
    document.getElementById('root')
);

reportWebVitals();
