import React from "react";
import "../styles/voedie-talk.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import IntroFunctionality from "../components/introfunctionality/IntroFunctionality";
import Footer from "../components/footer/Footer";

function VoedieTalk () {
    return (
        <>
            <NavigationBar
                voedietalk="active"
            />
            <main>
                <IntroFunctionality
                    title="Voedie talk, [username]!"
                    intro="We provide you with funny jokes so that you can get the conversation going again during dinner.
                In addition, we give you information about the top five most used leftovers to prevent this in the
                future!"
                />
                <div className="output-section">
                    <section className="fact-or-joke">
                        <p id="joke-element">Random joke</p>
                        <button type="button" id="joke-button">Tell me another joke!</button>
                    </section>
                    <section className="personal-data">
                        <p>Reveal your history</p>
                        <button type="button">Show my history</button>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default VoedieTalk;