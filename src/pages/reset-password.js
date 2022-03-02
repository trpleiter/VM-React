import React from "react";
import '../styles/password.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import PasswordInput from "../components/passwordinput/PasswordInput";

function ResetPassword() {
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

                    <PasswordInput
                        placeholder="********"
                        id="user-password-field1"
                        name="user-password"
                    />

                    <PasswordInput
                        placeholder="********"
                        id="user-password-field2"
                        name="user-password"
                    />

                    <span id="email-warning"></span>


                    <Button
                        type="submit"
                        text="Reset password!"
                    />
                </div>
            </main>
            <Footer
                fillpage="lower-footer"
            />
        </>
    )
}

export default ResetPassword;