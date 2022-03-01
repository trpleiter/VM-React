import React from "react";
import '../styles/loginpage.css'
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import TextInput from "../components/textinput/TextInput";
import PasswordInput from "../components/passwordinput/PasswordInput";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import EmailInput from "../components/emailinput/EmailInput";

function SignUp() {
    return (
        <>
            <NavigationBar
                login="active"
            />
            <main>
                <div className="login-container">
                    <InteractionIntro intro="Create your VoedieMeals-account">

                    </InteractionIntro>
                    <TextInput
                        placeholder="Enter an username.."
                        id="username-field"
                        name="username"
                    />
                    <EmailInput
                        placeholder="Enter your e-mailadress.."
                        id="user-email-field"
                        name="user-email"
                    />
                    <PasswordInput
                        placeholder="Enter your password.."
                        id="user-password-field1"
                        name="user-password"
                    />
                    <PasswordInput
                        placeholder="Confirm your password.."
                        id="user-password-field2"
                        name="user-password"
                    />


                    <span id="username-warning"></span>
                    <span id="email-warning"></span>
                    <span id="password-warning"></span>
                    <Button
                        type="submit"
                        text="Sign up!"
                    />
                </div>
            </main>
            <Footer
                fillpage="lower-footer"
            />
        </>
    )
}

export default SignUp;