import React, { useState } from 'react';
import axios from 'axios';
import "../styles/voedie-talk.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import IntroFunctionality from "../components/introfunctionality/IntroFunctionality";
import Footer from "../components/footer/Footer";

function VoedieTalk () {

const defaultJokeText = "Are you experiencing an awkward silence during dinner? Get the conversation going!"
    const [jokeData, setJokeData] = useState(defaultJokeText);

    async function fetchJoke() {
        try {
            const result = await axios.get('https://api.spoonacular.com/food/jokes/random?apiKey=f7b5d72783cd4b168e57cc54e500f7ed');
            console.log (result.data.text);
            setJokeData(result.data.text);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <NavigationBar />
            <main>
                <IntroFunctionality
                    title="Voedie talk, [username]!"
                    intro="We provide you with funny jokes so that you can get the conversation going again during dinner.
                In addition, we give you information about the top five most used leftovers to prevent this in the
                future!"
                />
                <div className="output-section">
                    <section className="fact-or-joke">
                        {jokeData &&
                        <p id="joke-element">{jokeData}</p>
                        }
                        <button type="button"
                                id="joke-button"
                                onClick={fetchJoke}>
                            Tell me a joke!
                        </button>
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