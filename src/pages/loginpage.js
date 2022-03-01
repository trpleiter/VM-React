import React from "react";
import '../styles/loginpage.css'
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import TextInput from "../components/textinput/TextInput";
import PasswordInput from "../components/passwordinput/PasswordInput";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";

function Loginpage () {
    return (
        <>
        <NavigationBar
        login="active"
        />
    <main>
        <div className="login-container">
            <InteractionIntro intro="Login">

                <p>Use your VoedieMeals-account</p>
            </InteractionIntro>
            <TextInput
            placeholder="Username"
            id="username-field"
            name="username"
            />
            <PasswordInput
            placeholder="********"
            id="user-password-field"
            name="user-password"
            />
            <div className="account-set">
                <ul>
                    <a href="forgot-password.html"> Forgot password?</a>
                    <a href="sign-up.html">Sign up</a>
                </ul>
            </div>
            <span id="username-warning"></span>
            <span id="password-warning"></span>
            <Button
            type="submit"
            text="Login"
            />
        </div>
    </main>
            <Footer
            fillpage="lower-footer"
            />
        </>
    )
}

export default Loginpage;