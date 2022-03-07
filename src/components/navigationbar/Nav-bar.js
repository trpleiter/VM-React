import React from "react";
import { Link } from 'react-router-dom';
import loginimg from "../../assets/login.svg";
import menu from "../../assets/menu.svg";
import styles from '../navigationbar/Nav-bar.module.css'
import voedielogo from '../../assets/voedie-logo.jpg';

function NavigationBar({voediestomach, voedietalk, login}) {
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
                    <Link className={`${styles.navItem} ${voediestomach}`}
                       to="/voedie-stomach">
                        Voedie stomach
                    </Link>
                </li>
                <li>
                    <Link className={`${styles.navItem} ${voedietalk}`}
                       to="/voedie-talk">
                        Voedie talk
                    </Link>
                </li>
                <li>
                    <Link className={`${styles.navItem} ${login}`}
                       to="/login">
                        <img src={loginimg}
                             alt="login"
                             className={styles.login}
                        />
                        Login
                    </Link>
                </li>
            </ul>
            <img
                src={menu}
                alt="Menu"
                className={styles.navigatieDropdown}
            />
        </nav>
    );
}

export default NavigationBar;