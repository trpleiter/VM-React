import React from "react";
import loginimg from "../assets/login.svg";
import menu from "../assets/menu.svg";

function NavigationBar ({ voediestomach, voedietalk, login }) {
    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li><a className={voediestomach} href="voedie-stomach.html">Voedie stomach</a></li>
                    <li><a className={voedietalk} href="voedie-talk.html">Voedie talk</a></li>
                    <li><a className={login} href="login.html"> <img src={loginimg} alt="login" id="login"/> Login</a></li>
                </ul>
                <img src={menu} alt="Menu" id="navigatie-dropdown"/>
            </div>
        </nav>
    );
}

export default NavigationBar;