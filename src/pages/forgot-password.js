import React from "react";
import '../styles/forgot-password.css'
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import EmailInput from "../components/emailinput/EmailInput";

function ForgotPassword() {
    return (
        <>
            <NavigationBar
            />
            <main>
                <div className="forgot-password-container">
                    <InteractionIntro>
                        <h3>Reset password</h3>
                        <span>Enter the email associated with your account and we will send an email with instructions to reset your password</span>
                    </InteractionIntro>

                    <EmailInput
                        placeholder="E-mailadress"
                        id="user-email-field"
                        name="user-email"
                    />
                    <span id="email-warning"></span>


                    <Button
                        type="submit"
                        text="Send instructions!"
                    />
                </div>
            </main>
            <Footer
                fillpage="lower-footer"
            />
        </>
    )
}

export default ForgotPassword;