import React from "react";
import {useForm} from 'react-hook-form';
import '../styles/login-page.css'
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";


function Loginpage() {

    const {register, handleSubmit, formState: { errors }} = useForm({ mode: 'onChange' });

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
                    <InteractionIntro intro="Login">

                        <p>Use your VoedieMeals-account</p>
                    </InteractionIntro>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Username"
                            id="username-field"
                            {...register("username", {
                                required: "Username can not be empty",
                                minLength: {
                                    value: 3,
                                    message: "Your username must contain at least 3 characters."}
                                ,
                                maxLength: {
                                    value: 12,
                                    message: "Your username can only contain 12 characters."}
                                ,
                            })}
                        />
                        <input
                            type="password"
                            className="input-field"
                            placeholder="********"
                            id="user-password-field"
                            {...register("password", {
                                required: "Your password can not be empty",
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
                        />

                        <div className="account-set">
                            <ul>
                                <a href="forgot-password.html"> Forgot password?</a>
                                <a href="sign-up.html">Sign up</a>
                            </ul>
                        </div>
                        {errors.username && <span id="username-warning">{errors.username.message}</span>}
                        {errors.password && <span id="password-warning">{errors.password.message}</span>}
                        <Button
                            type="submit"
                            text="Login"
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

export default Loginpage;