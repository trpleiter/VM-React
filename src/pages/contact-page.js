import React from "react";
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../styles/contact-page.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Footer from "../components/footer/Footer";

import Button from "../components/button/Button";

function Contactpage() {
    const {register, handleSubmit, formState: {errors} } = useForm({mode: 'onBlur'});
    let navigate = useNavigate();

    function onFormSubmit(data) {
        console.log(data);
        navigate('/contact-notification');
    }

    return (
        <>
            <NavigationBar/>
            <div className="page-container">
            <main className="contact-main">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="contact-container">
                    <InteractionIntro
                        intro="Fill out this form and we will contact you as soon as possible"
                    />

                    <input
                        type="text"
                        className="input-field"
                        placeholder="Firstname"
                        id="firstname"
                        {...register("firstname")}
                    />

                    <input
                        type="text"
                        className="input-field"
                        placeholder="Surname"
                        id="surname"
                        {...register("surname")}
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

                    <textarea
                        placeholder="Typ your message here.."
                        id="user-message"
                        cols="30"
                        rows="10"
                        {...register("message")}
                    ></textarea>

                    {errors.email && <span id="email-warning">{errors.email.message}</span>}

                    <Button
                        type="submit"
                        text="Send"
                    />
                </div>
                </form>
            </main>

            <Footer
                fillpage="lower-footer"
            />
            </div>
        </>
    )
}

export default Contactpage;