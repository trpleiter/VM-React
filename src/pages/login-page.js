import React from "react";
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
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
            <NavigationBar />
            <div className="page-container">
            <main className="account-main">
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
                                    message: "Your password can only contain 25 characters."
                                }
                            })}
                        />

                        <div className="account-set">
                            <ul>
                                <Link to="/forgot-password"> Forgot password?</Link>
                                <Link to="/sign-up">Sign up</Link>
                            </ul>
                        </div>
                        {errors.username && <span id="log-warning">{errors.username.message}</span>}
                        {errors.password && <span id="log-warning">{errors.password.message}</span>}
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
            </div>
        </>
    )
}

export default Loginpage;