import React, {useRef} from "react";
import {useForm} from 'react-hook-form';
import '../styles/password.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";

function ResetPassword() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm({mode: 'onBlur'});
    const password = useRef({});
    password.current = watch("password", "");

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <NavigationBar
            />
            <main>
                <div className="forgot-password-container">
                    <InteractionIntro>
                        <h3>Create new password</h3>
                        <span>Please enter the new password which you would like to use</span>
                    </InteractionIntro>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Enter your password.."
                        id="user-password-field1"
                        {...register("password", {
                            required: "A new password is required",
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
                            message:"The passwords do not match",
                            validate: value =>
                                value === password.current || "The passwords do not match"
                        })}
                    />

                    {errors.password && <span id="password-warning">{errors.password.message}</span>}
                    {errors.confirmpassword && <span id="password-warning">{errors.confirmpassword.message}</span>}


                    <Button
                        type="submit"
                        text="Reset password!"
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

export default ResetPassword;