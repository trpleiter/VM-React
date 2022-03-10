import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom';
import loginimg from "../../assets/login.svg";
import styles from '../navigationbar/Nav-bar.module.css'
import voedielogo from '../../assets/voedie-logo.jpg';
import Burger from "../burger/Burger";
import BurgerMenu from "../burgermenu/BurgerMenu";

function NavigationBar() {
    const [openBurger, setOpenBurger] = useState(false);
    return (
        <nav className={styles.navContainer}>
            <Link to="/">
                <img
                    src={voedielogo}
                    alt="Voedie"
                    className={styles.logo}
                />
            </Link>
            <ul className={styles.navItems}>
                <li>
                    <NavLink className={styles.navItem}
                             to="/voedie-stomach" activeclassname="active">
                        Voedie stomach
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.navItem}
                             to="/voedie-talk" activeclassname="active">
                        Voedie talk
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.navItem}
                             to="/login" activeclassname="active">
                        <img src={loginimg}
                             alt="login"
                             className={styles.login}
                        />
                        Login
                    </NavLink>
                </li>
            </ul>
                <Burger openBurger={openBurger} setOpenBurger={setOpenBurger} />
                <BurgerMenu openBurger={openBurger} setOpenBurger={setOpenBurger} />
        </nav>
    );
}

export default NavigationBar;