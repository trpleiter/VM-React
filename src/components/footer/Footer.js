import React from "react";
import styles from './Footer.module.css'

function Footer ({ aboutus, contact, faq }) {
    return (
        <footer className={styles.footerContainer}>
                <span>© 2022 VoedieMeals</span>
                <ul className={styles['footerItems']}>
                    <li>
                        <a className={styles.footerItem}
                           id={aboutus}
                           href="about-voediemeals.html">
                            About us
                        </a>
                    </li>
                    <li>
                        <a className={styles.footerItem}
                           id={contact}
                           href="contact.html">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a className={styles.footerItem}
                           id={faq}
                           href="faq.html">
                            FAQ
                        </a>
                    </li>
                </ul>
        </footer>
    );
}

export default Footer;