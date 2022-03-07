import React from "react";
import '../styles/password.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import {useForm} from "react-hook-form";

function ForgotPassword() {
    const {register, handleSubmit, formState: {errors} } = useForm({mode: 'onBlur'});
    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <NavigationBar
            />
            <main className="password-main">
                <div className="forgot-password-container">
                    <InteractionIntro>
                        <h3>Reset password</h3>
                        <span>Enter the email associated with your account and we will send an email with instructions to reset your password</span>
                    </InteractionIntro>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                    <input
                        type="email"
                        className="input-field"
                        placeholder="Enter your e-mailadress.."
                        id="user-email-field"
                        {...register("email", {
                            required: "Your emailadress is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            }
                        })}
                    />

                    {errors.email && <span id="email-warning">{errors.email.message}</span>}

                    <Button
                        type="submit"
                        text="Send instructions!"
                    />
                    </form>
                </div>
            </main>
            <Footer
                fillpage="lower-footer"
            />
        </>
    )
}

export default ForgotPassword;