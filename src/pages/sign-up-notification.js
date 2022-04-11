import React from "react";
import "../styles/email-notification.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import emailicon from "../assets/email-icon.png";
import Footer from "../components/footer/Footer";


function SignUpNotification() {
    return (
        <>
            <NavigationBar
            />
            <div className="page-container">
                <main className="email-main">
                    <div className="email-notification-container">
                        <InteractionIntro>
                            <h3>Welcome!</h3>
                            <p>We are happy to have you aboard! In your mail you will find a confirmation of the
                              registration.</p>
                        </InteractionIntro>
                        <img
                            src={emailicon}
                            id="mail-icon"
                            alt="mail"
                        />
                        <p>Did not receive the email? Check your spam filter as well.</p>

                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default SignUpNotification;