import React from "react";
import "../styles/email-notification.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Footer from "../components/footer/Footer";


function SuccesfullPassChange() {
    return (
        <>
            <NavigationBar
            />
            <div className="page-container">
            <main className="email-main">
                <div className="email-notification-container">
                    <InteractionIntro>
                        <h3>Your password has been changed!</h3>
                        <p>The new password that you have chosen is succesfully changed. Do not forget it this time!
                              😉</p>
                    </InteractionIntro>
                </div>
            </main>

            <Footer />
            </div>
        </>
    )
}

export default SuccesfullPassChange;