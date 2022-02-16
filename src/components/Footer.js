import React from "react";

function Footer ({ aboutus, contact, faq }) {
    return (
        <footer>
            <div className="footer-container">
                <span>© 2022 VoedieMeals</span>
                <ul>
                    <li><a className={aboutus} href="about-voediemeals.html">About us</a></li>
                    <li><a className={contact} href="contact.html">Contact</a></li>
                    <li><a className={faq} href="faq.html">FAQ</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;