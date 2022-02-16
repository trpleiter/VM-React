import React from "react";
import '../styles/loginpage.css'
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import TextInput from "../components/textinput/TextInput";
import PasswordInput from "../components/passwordinput/PasswordInput";
import Footer from "../components/footer/Footer";

function LoginPage () {
    return (
        <>
        <NavigationBar
        login="active"
        />
    <main>
        <div className="login-container">
            <InteractionIntro
            intro="Login"
            />
            <p>Use your VoedieMeals-account</p>
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
            <div class="account-set">
                <ul>
                    <a href="forgot-password.html"> Forgot password?</a>
                    <a href="sign-up.html">Sign up</a>
                </ul>
            </div>
            <span id="username-warning"></span>
            <span id="password-warning"></span>
            <button type="submit">Login</button>
        </div>
    </main>
            <Footer
            fillpage="lower-footer"/>
        </>
    )
}

export default LoginPage;