import React from "react";
import '../styles/contactpage.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Footer from "../components/footer/Footer";
import TextInput from "../components/TextInput/TextInput";
import EmailInput from "../components/emailinput/EmailInput";
import Button from "../components/button/Button";

function Contactpage() {
    return (
        <>
            <NavigationBar/>
            <main>
                <div className="contact-container">
                    <InteractionIntro
                        intro="Fill out this form and we will contact you as soon as possible"
                    />

                    <TextInput
                        placeholder="Firstname"
                        id="first-name"
                        name="first-name"
                    />
                    <TextInput
                        placeholder="Surname"
                        id="surname"
                        name="surname"
                    />
                    <EmailInput
                        placeholder="E-mailadress"
                        id="user-email-field"
                        name="user-email"
                    />

                    <textarea name="user-message" placeholder="Typ your message here.." id="user-message" cols="30"
                              rows="10"></textarea>
                    <span id="email-warning"></span>
                    <Button
                        type="submit"
                        text="Send"
                    />
                </div>

            </main>

            <Footer
                contact="active"
            />
        </>
    )
}

export default Contactpage;