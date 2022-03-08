import React, {useRef} from "react";
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "../styles/login-page.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";


function SignUp() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm({mode: 'onBlur'});
    const password = useRef({});
    password.current = watch("password", "");

    function onFormSubmit(data) {
        console.log(data);
    }

    let navigate = useNavigate();

    function handleClick() {
        navigate("/welcome");
    }

    return (
        <>
            <NavigationBar
                login="active"
            />
            <div className="page-container">
                <main className="account-main">
                    <div className="login-container">
                        <InteractionIntro intro="Create your VoedieMeals-account"
                        />
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Enter an username.."
                                id="username-field"
                                {...register("username", {
                                    required: "Username is required",
                                    minLength: {
                                        value: 3,
                                        message: "Your username must contain at least 3 characters."
                                    }
                                    ,
                                    maxLength: {
                                        value: 12,
                                        message: "Your username can only contain 12 characters."
                                    }
                                    ,
                                })}
                            />

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
                                        message: "Your username can only contain 25 characters"
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


                            {errors.username && <span id="log-warning">{errors.username.message}</span>}
                            {errors.email && <span id="log-warning">{errors.email.message}</span>}
                            {errors.password && <span id="log-warning">{errors.password.message}</span>}
                            {errors.confirmpassword &&
                            <span id="log-warning">{errors.confirmpassword.message}</span>}

                            <Button
                                type="submit"
                                text="Sign up!"
                                onClick={handleClick}
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

export default SignUp;