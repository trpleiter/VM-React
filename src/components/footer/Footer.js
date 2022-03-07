import React from "react";
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'

function Footer ({ aboutus, contact, faq, fillpage }) {
    return (
        <footer className={`${styles.footerContainer} ${fillpage}`}>
                <span>© 2022 VoedieMeals</span>
                <ul className={styles['footerItems']}>
                    <li>
                        <Link className={`${styles.footerItem} ${aboutus}`}
                           to="/about-voediemeals">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link className={`${styles.footerItem} ${contact}`}
                           to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link className={`${styles.footerItem} ${faq}`}
                           to="/faq">
                            FAQ
                        </Link>
                    </li>
                </ul>
        </footer>
    );
}

export default Footer;