import React from "react";
import '../styles/email-notification.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import emailicon from '../assets/email-icon.png';
import Footer from "../components/footer/Footer";


function ContactNotification() {
    return (
        <>
            <NavigationBar
            />
            <main>
                <div className="email-notification-container">
                    <InteractionIntro>
                        <h3>We will be in touch!</h3>
                        <span>Give us some time to get back to you. We will send you a confirmation by mail once your
                              message has been received</span>
                    </InteractionIntro>
                    <img
                        src={emailicon}
                        id="mail-icon"
                        alt="mail"
                    />
                    <span>Did not receive the email? Check your spam filter as well.</span>

                </div>
            </main>
            <Footer
                fillpage="lower-footer"
            />
        </>
    )
}

export default ContactNotification;