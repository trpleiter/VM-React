import React from "react";
import "../styles/email-notification.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import emailicon from "../assets/email-icon.png";
import Footer from "../components/footer/Footer";


function PasswordChangeNotification() {
    return (
        <>
            <NavigationBar
            />
            <div className="page-container">
            <main className="email-main">
                <div className="email-notification-container">
                    <InteractionIntro>
                        <h3>Check your mail</h3>
                        <p>We have sent password recovery instructions to your email.</p>
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

export default PasswordChangeNotification;