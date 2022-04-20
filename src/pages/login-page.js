import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import "../styles/login-page.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";

function Loginpage() {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({mode: 'onChange'});
    const {login} = useAuth();
    const [loginError, setLoginError] = useState('');

    let navigate = useNavigate();

    function onFormSubmit(data) {
        login(data.email, data.password)
            .then((response) => {
                console.log(response)
                navigate('/')
            })
            .catch((error) => setLoginError(error.message));
    }

    return (
        <>
            <NavigationBar/>
            <div className="page-container-login">
                <main className="account-main">
                    <div className="login-container">
                        <InteractionIntro intro="Login">
                            <p>Use your VoedieMeals-account</p>
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
                            <span id="log-warning">{loginError}</span>
                            {errors.email && <span id="log-warning">{errors.email.message}</span>}
                            {errors.password && <span id="log-warning">{errors.password.message}</span>}
                            <Button
                                disabled={isSubmitting}
                                type="submit"
                                text="Login"
                            />
                        </form>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default Loginpage;