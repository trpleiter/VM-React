import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "../styles/contact-page.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Footer from "../components/footer/Footer";
import Button from "../components/button/Button";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase";


function Contactpage() {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({mode: 'onBlur'});
    const [error, toggleError] = useState(false);
    let navigate = useNavigate();

    function onFormSubmit(data) {
        addDoc(collection(db, 'contact'),
            {
            firstname: data.firstname,
            surname: data.surname,
            email: data.email,
            message: data.message,
        })
            .then   (() => {
                navigate('/contact-notification')
            })
            .catch((error) => toggleError(error.message))
    };

    return (
        <>
            <NavigationBar/>
            <div className="page-container-contact">
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
                            {error &&
                            <span className="potential-error">
    	                        Something went wrong, we could not send your contact form. Sorry for the inconvenience.
                                </span>}
                            <Button
                                disabled={isSubmitting}
                                type="submit"
                                text="Send"
                            />
                        </div>
                    </form>
                </main>

                <Footer />
            </div>
        </>
    )
}

export default Contactpage;