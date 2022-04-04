import React, {useState} from "react";
import axios from "axios";
import "../styles/voedie-talk.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import IntroFunctionality from "../components/introfunctionality/IntroFunctionality";
import Footer from "../components/footer/Footer";
import {useAuth} from "../contexts/AuthContext";
import {db} from "../firebase";
import {collection, getDocs} from "firebase/firestore";

function VoedieTalk() {
    const defaultJokeText = "Are you experiencing an awkward silence during dinner? Get the conversation going!"
    const [jokeData, setJokeData] = useState(defaultJokeText);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [leftovers, setLeftovers] = useState([])
    const {currentUser} = useAuth();
    const leftoverCollectionRef = collection(db, currentUser.uid);

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

    async function fetchLeftovers() {
        toggleError(false);
        toggleLoading(true);
        try {
            const leftoverData = await getDocs(leftoverCollectionRef);
            setLeftovers(leftoverData.docs.map((doc) => ({...doc.data(), id: doc.id})));
        } catch (e) {
            console.error(e)
            toggleError(true);
        }
        toggleLoading(false);
    }

    let noLeftoverResult = ""
    if (leftovers.length === 0) {
        noLeftoverResult = 'You can build history by searching for recipes on the "Voedie Stomach" page, if you still see this message after pressing "Show my history", you should search for some recipes on that page first! '
    }

    return (
        <>
            <NavigationBar/>
            <main>
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
                        <p>With one click on the button you will see your whole search history of leftovers, it might
                            help you to purchase things differently? </p>
                        {loading && <div className="history-loader"></div>}
                        {error &&
                        <span>Something went wrong, we could not retrieve the data. Sorry for the inconvenience.</span>}
                        <ol>
                            {noLeftoverResult}
                            {leftovers.map((leftover) => {
                                return <li key={leftover.id}>{leftover.leftover} </li>
                            })}
                        </ol>
                        <button type="button" onClick={fetchLeftovers}>
                            Show my history
                        </button>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default VoedieTalk;