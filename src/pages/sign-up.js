import React from "react";
import {useForm} from 'react-hook-form';
import "../styles/login-page.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import TextInput from "../components/textinput/TextInput";
import PasswordInput from "../components/passwordinput/PasswordInput";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import EmailInput from "../components/emailinput/EmailInput";

function SignUp() {
    const { register, handleSubmit, formState: {errors }, watch } = useForm({mode: 'onBlur'} );
    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <NavigationBar
                login="active"
            />
            <main>
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
                                    message: "invalid email address",
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
                                    message: "Your password must contain at least 6 characters."
                                }
                                ,
                                maxLength: {
                                    value: 25,
                                    message: "Your username can only contain 25 characters."
                                }
                            })}
                        /> <input
                        type="password"
                        className="input-field"
                        placeholder="Confirm your password.."
                        id="user-password-field2"
                        {...register("confirmPassword", {
                            required: "You have to confirm your password",
                            })}
                    />


                        {errors.username && <span id="username-warning">{errors.username.message}</span>}
                        {errors.email && <span id="username-warning">{errors.email.message}</span>}
                        {errors.password && <span id="password-warning">{errors.password.message}</span>}
                        {errors.confirmPassword && <span id="password-warning">{errors.comfirmPassword.message}</span>}

                        <Button
                            type="submit"
                            text="Sign up!"
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

export default SignUp;