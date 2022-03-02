import React from "react";
import '../styles/email-notification.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import emailicon from '../assets/email-icon.png';
import Footer from "../components/footer/Footer";


function SignUpNotification() {
    return (
        <>
            <NavigationBar
            />
            <main>
                <div className="email-notification-container">
                    <InteractionIntro>
                        <h3>Welcome!</h3>
                        <span>We are happy to have you aboard! In your mail you will find a confirmation of the
                              registration.</span>
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

export default SignUpNotification;