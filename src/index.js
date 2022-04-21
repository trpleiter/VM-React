import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";

function Index() {

    return (
        <React.StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
        </React.StrictMode>
    )
}


ReactDOM.render(
    Index(),
    document.getElementById('root')
);

reportWebVitals();