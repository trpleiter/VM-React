import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css'

function Footer ({ aboutus, contact, faq, fillpage }) {
    return (
        <footer className={`${styles.footerContainer} ${fillpage}`}>
                <span>© 2022 VoedieMeals</span>
                <ul className={styles['footerItems']}>
                    <li>
                        <NavLink className={styles.footerItem}
                           to="/about-voediemeals" activeclassname="active">
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.footerItem}
                           to="/contact"  activeclassname="active">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.footerItem}
                           to="/faq" activeclassname="active">
                            FAQ
                        </NavLink>
                    </li>
                </ul>
        </footer>
    );
}

export default Footer;