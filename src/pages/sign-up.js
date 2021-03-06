import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import "../styles/login-page.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";

function SignUp() {
    const {register, handleSubmit, formState: {errors, isSubmitting}, watch} = useForm({mode: 'onBlur'});
    const password = useRef({});
    password.current = watch("password", "");
    const [signUpError, setSignUpError] = useState('');
    const {signup, verifyEmail} = useAuth();
    let navigate = useNavigate();

    function onFormSubmit(data) {
        signup(data.email, data.password)
            .then(() => {
                verifyEmail()
                navigate('/welcome')
            })
            .catch((error) => setSignUpError(error.message))
    }

    return (
        <>
            <NavigationBar/>
            <div className="page-container">
                <main className="account-main">
                    <div className="login-container">
                        <InteractionIntro intro="Create your VoedieMeals-account"
                        />
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
                            <input
                                type="password"
                                className="input-field"
                                placeholder="Enter your password.."
                                id="user-password-field1"
                                {...register("password", {
                                    required: "Your password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Your password must contain at least 6 characters"
                                    }
                                    ,
                                    maxLength: {
                                        value: 25,
                                        message: "Your password can only contain 25 characters"
                                    }
                                })}
                            />
                            <input
                                type="password"
                                className="input-field"
                                placeholder="Confirm your password.."
                                id="user-password-field2"
                                {...register("confirmpassword", {
                                    required: "You have to confirm your password",
                                    message: "The passwords do not match",
                                    validate: value =>
                                        value === password.current || "The passwords do not match"
                                })}
                            />

                            <span id="log-warning">{signUpError}</span>
                            {errors.username && <span id="log-warning">{errors.username.message}</span>}
                            {errors.email && <span id="log-warning">{errors.email.message}</span>}
                            {errors.password && <span id="log-warning">{errors.password.message}</span>}
                            {errors.confirmpassword &&
                            <span id="log-warning">{errors.confirmpassword.message}</span>}

                            <Button
                                disabled={isSubmitting}
                                type="submit"
                                text="Sign up!"
                            />
                        </form>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default SignUp;