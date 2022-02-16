import React from "react";
import styles from './Footer.module.css'

function Footer ({ aboutus, contact, faq, fillpage }) {
    return (
        <footer className={`${styles.footerContainer} ${fillpage}`}>
                <span>© 2022 VoedieMeals</span>
                <ul className={styles['footerItems']}>
                    <li>
                        <a className={`${styles.footerItem} ${aboutus}`}
                           href="about-voediemeals.html">
                            About us
                        </a>
                    </li>
                    <li>
                        <a className={`${styles.footerItem} ${contact}`}
                           href="contact.html">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a className={`${styles.footerItem} ${faq}`}
                           href="faq.html">
                            FAQ
                        </a>
                    </li>
                </ul>
        </footer>
    );
}

export default Footer;