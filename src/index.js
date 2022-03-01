import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"
import reportWebVitals from './reportWebVitals';
import AboutVoedieMeals from "./pages/aboutvoediemeals";
function Index() {
    return (
        <AboutVoedieMeals />
    )
}


ReactDOM.render(
    Index(),
    document.getElementById('root')
);

reportWebVitals();
