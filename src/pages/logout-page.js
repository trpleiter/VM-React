import React from "react";
import "../styles/email-notification.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Footer from "../components/footer/Footer";

function LogoutPage() {
    return (
        <>
            <NavigationBar/>
            <div className="page-container">
                <main className="email-main">
                    <div className="email-notification-container">
                        <InteractionIntro>
                            <h3>You are now logged out!</h3>
                            <p>Thank you for using VoedieMeals, we hope to see you again! 😉</p>
                        </InteractionIntro>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default LogoutPage;