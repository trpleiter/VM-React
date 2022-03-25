import React, {useState} from "react";
import '../styles/password.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../contexts/AuthContext";

function ForgotPassword() {
    const {register, handleSubmit, formState: {errors} } = useForm({mode: 'onBlur'});
    const { forgotPasswordMail } = useAuth();
    const [emailError, setEmailError] = useState('');
    let navigate = useNavigate();

    function onFormSubmit(data) {
        forgotPasswordMail(data.email)
            .then((response) => console.log(response))
            .catch((error) => setEmailError(error.message))
        console.log(data);
        navigate('/password-change-notification');
    }

    return (
        <>
            <NavigationBar
            />
            <div className="page-container">
            <main className="password-main">
                <div className="forgot-password-container">
                    <InteractionIntro>
                        <h3>Reset password</h3>
                        <p>Enter the email associated with your account and we will send an email with instructions to reset your password.</p>
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
                        <span id="log-warning">{emailError}</span>
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
            </div>
        </>
    )
}

export default ForgotPassword;