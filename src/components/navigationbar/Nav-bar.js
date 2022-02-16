import React from "react";
import loginimg from "../../assets/login.svg";
import menu from "../../assets/menu.svg";
import styles from '../navigationbar/Nav-bar.module.css'
import voedielogo from '../../assets/voedie-logo.jpg';

function NavigationBar({voediestomach, voedietalk, login}) {
    return (
        <nav className={styles.navContainer}>
            <a href="index.html">
                <img
                    src={voedielogo}
                    alt="Voedie"
                    className={styles.logo}
                />
            </a>
            <ul className={styles.navItems}>
                <li>
                    <a className={`${styles.navItem} ${voediestomach}`}
                       href="voedie-stomach.html">
                        Voedie stomach
                    </a>
                </li>
                <li>
                    <a className={`${styles.navItem} ${voedietalk}`}
                       href="voedie-talk.html">
                        Voedie talk
                    </a>
                </li>
                <li>
                    <a className={`${styles.navItem} ${login}`}
                       href="login.html">
                        <img src={loginimg}
                             alt="login"
                             className={styles.login}
                        />
                        Login
                    </a>
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