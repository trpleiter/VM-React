import React, {useState} from 'react';
import axios from 'axios';
import "../styles/voedie-talk.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import IntroFunctionality from "../components/introfunctionality/IntroFunctionality";
import Footer from "../components/footer/Footer";
import {useAuth} from "../contexts/AuthContext";

function VoedieTalk() {
    const defaultJokeText = "Are you experiencing an awkward silence during dinner? Get the conversation going!"
    const [jokeData, setJokeData] = useState(defaultJokeText);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const { currentUser } = useAuth()

    async function fetchJoke() {
        toggleError(false);
        toggleLoading(true);

        try {
            const resultJoke = await axios.get(`https://api.spoonacular.com/food/jokes/random?apiKey=${process.env.REACT_APP_API_KEY}`);
            setJokeData(resultJoke.data.text);
        } catch (e) {
            console.error(e)
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <NavigationBar/>
            <main>
                <p>{JSON.stringify(currentUser,null, 2)}</p>
                <IntroFunctionality
                    title="Voedie talk!"
                    intro="We provide you with funny jokes so that you can get the conversation going again during dinner.
                In addition, we give you information about the top five most used leftovers to prevent this in the
                future!"
                />
                <div className="output-section">
                    <section className="fact-or-joke">
                        {jokeData &&
                        <p id="joke-element">{jokeData}</p>
                        }
                        {loading && <div className="joke-loader"></div>}
                        {error &&
                        <span>Something went wrong, we could not retrieve the data. Sorry for the inconvenience.</span>}
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
            <Footer/>
        </>
    )
}

export default VoedieTalk;